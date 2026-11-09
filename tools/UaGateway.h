#pragma once
/*
 * MeshCore Україна — вбудований шлюз #ukraine (лише ESP32, збірки *_companion_radio_gateway).
 *
 * Companion-нода сама підключається по Wi-Fi до MQTT-сервера спільноти й обмінюється пакетами каналу #ukraine
 * з усіма містами. Телефон працює з нодою по Bluetooth як зазвичай.
 *
 *  - Wi-Fi: мережу й пароль задають у застосунку MeshCore штатними командами прошивки (wifi.ssid, wifi.pwd,
 *    wifi.enabled). Пароль нікуди, крім ноди, не передається; без Wi-Fi шлюз просто чекає.
 *  - Доступ: нода підписує запит своїм ключем Ed25519 і раз на хвилину питає сайт, чи схвалено заявку
 *    (https://meshcore.com.ua/api/gateway/claim). Після схвалення отримує логін MQTT і зберігає його.
 *  - Пакети: ті самі перевірки, що в deploy/chat/bridge.py — ключ і MAC #ukraine, тип, довжина, час;
 *    ідентифікатор не залежить від шляху (sha256(0x05 || payload)), тож луна ретрансляторів не зациклюється.
 *  - Власні повідомлення ноди йдуть у MQTT одразу (logTx), повідомлення з інших міст — в ефір і в телефон.
 */
#ifdef UA_GATEWAY

#include <WiFi.h>
#include <SPIFFS.h>
#include <time.h>
#include <mqtt_client.h>
#include <esp_http_client.h>
#include <esp_crt_bundle.h>
#include <esp_log.h>
#include <freertos/FreeRTOS.h>
#include <freertos/queue.h>
#include <Utils.h>
#include "UaGatewayConfig.h"   // згенеровано з config.json: адреса MQTT, сторінка заявок, CA сервера
#define UA_GW_PREFIX       "meshcore-chat/v1/ukraine"
#define UA_GW_CHANNEL      "#ukraine"
#define UA_GW_MAX_AGE      300
#define UA_GW_TX_INTERVAL  5000
#define UA_GW_SOURCE_LIMIT 30
#define UA_GW_CREDS_FILE   "/ua_gw"

extern MyMesh the_mesh;
extern bool wifi_enabled;

namespace ua_gw {

enum ClaimStatus : uint8_t { CLAIM_IDLE, CLAIM_RUNNING, CLAIM_DONE };

struct Creds { char user[65]; char pass[65]; };
struct InMsg { char source[48]; uint16_t len; char data[700]; };
struct Pending { uint8_t raw[190]; uint8_t len; uint32_t stamp; };
struct Seen { uint8_t id[8]; uint32_t at; };
struct Source { char name[48]; uint32_t window_start; uint16_t count; };

static uint8_t secret[PUB_KEY_SIZE];
static uint8_t channel_hash;
static Creds creds;
static volatile bool have_creds = false;
static volatile ClaimStatus claim_status = CLAIM_IDLE;
static volatile uint32_t claim_retry_ms = 60000;
static unsigned long claim_last = 0;
static bool claim_done_once = false;

static esp_mqtt_client_handle_t mqtt = nullptr;
static volatile bool mqtt_connected = false;
static volatile int mqtt_auth_failures = 0;
static QueueHandle_t inbox = nullptr;
static char topic_own[96];
static char topic_status[96];

#define UA_GW_SEEN    128
#define UA_GW_PENDING 12
#define UA_GW_SOURCES 16
static Seen* seen = nullptr;
static int seen_pos = 0;
static Pending* pending = nullptr;
static int pending_count = 0;
static unsigned long last_tx = 0;
static Source* sources = nullptr;
static InMsg* in_event = nullptr;   // буфер обробника подій MQTT (задача MQTT)
static InMsg* in_loop = nullptr;    // буфер головного циклу
static char* scratch = nullptr;     // JSON для публікації / hex пакета / тіло заявки (не одночасно)
#define UA_GW_SCRATCH 704

static bool time_ok = false;

// ------------------------------------------------------------ пакети

/** Hex у нижньому регістрі, як у bridge.py (hashlib.hexdigest) і на сервері заявок. */
static void lowerHex(char* dest, const uint8_t* src, size_t len) {
  mesh::Utils::toHex(dest, src, len);
  for (char* c = dest; *c; c++) *c = tolower((unsigned char)*c);
}

static uint32_t nowSecs() { return time_ok ? the_mesh.getRTCClock()->getCurrentTime() : 0; }

static bool seenId(const uint8_t* id) {
  for (int i = 0; i < UA_GW_SEEN; i++) {
    const Seen& s = seen[i];
    if (s.at && memcmp(s.id, id, 8) == 0 && millis() - s.at < UA_GW_MAX_AGE * 2000UL) return true;
  }
  return false;
}
static void rememberId(const uint8_t* id) {
  memcpy(seen[seen_pos].id, id, 8);
  seen[seen_pos].at = millis() | 1;
  seen_pos = (seen_pos + 1) % UA_GW_SEEN;
}

/** Перевірка як у bridge.py: повертає payload, його довжину, id і час повідомлення. */
static bool validate(const uint8_t* raw, int len, uint32_t now, const uint8_t** payload, int* payload_len, uint8_t id[32], uint32_t* stamp) {
  if (len < 21 || len > 255) return false;
  uint8_t h = raw[0];
  if ((h >> 6) != 0 || ((h >> 2) & 15) != PAYLOAD_TYPE_GRP_TXT || ((h & 3) != ROUTE_TYPE_FLOOD && (h & 3) != ROUTE_TYPE_TRANSPORT_FLOOD)) return false;
  int pos = (h & 3) == ROUTE_TYPE_TRANSPORT_FLOOD ? 5 : 1;
  if (pos >= len) return false;
  uint8_t path = raw[pos];
  int width = (path >> 6) + 1, count = path & 63;
  if (width == 4 || width * count > 64) return false;
  int off = pos + 1 + width * count;
  if (off >= len) return false;
  const uint8_t* p = raw + off;
  int pl = len - off;
  if (2 + pl > 174 || pl < 19 || pl > 184 || p[0] != channel_hash || (pl - 3) % 16) return false;
  uint8_t plain[MAX_PACKET_PAYLOAD];
  int n = mesh::Utils::MACThenDecrypt(secret, plain, p + 1, pl - 1);
  if (n < 5) return false;
  uint32_t t;
  memcpy(&t, plain, 4);
  if (now && (t + UA_GW_MAX_AGE < now || t > now + 60)) return false;
  if (plain[4] >> 2) return false;
  uint8_t type = PAYLOAD_TYPE_GRP_TXT;
  mesh::Utils::sha256(id, 32, &type, 1, p, pl);
  *payload = p;
  *payload_len = pl;
  if (stamp) *stamp = t;
  return true;
}

static void publishPacket(const uint8_t* payload, int pl, const uint8_t* id) {
  if (!mqtt || !mqtt_connected) return;
  char* body = scratch;
  const size_t body_size = UA_GW_SCRATCH;
  char idhex[65];
  lowerHex(idhex, id, 32);
  int n = snprintf(body, body_size, "{\"v\":1,\"id\":\"%s\",\"raw\":\"1500", idhex);
  lowerHex(body + n, payload, pl);
  n += pl * 2;
  n += snprintf(body + n, body_size - n, "\"}");
  esp_mqtt_client_enqueue(mqtt, topic_own, body, n, 1, 0, true);
}

/** Пакет почутий в ефірі або відправлений самою нодою — у MQTT, якщо це новий #ukraine. */
static void uplink(const uint8_t* raw, int len) {
  const uint8_t* p;
  int pl;
  uint8_t id[32];
  if (!validate(raw, len, nowSecs(), &p, &pl, id, nullptr)) return;
  if (seenId(id)) return;
  rememberId(id);
  publishPacket(p, pl, id);
}

static bool sourceAllowed(const char* name) {
  Source* slot = nullptr;
  Source* oldest = &sources[0];
  for (int i = 0; i < UA_GW_SOURCES; i++) {
    Source& s = sources[i];
    if (strcmp(s.name, name) == 0) { slot = &s; break; }
    if (s.window_start < oldest->window_start) oldest = &s;
  }
  if (!slot) {
    slot = oldest;
    strncpy(slot->name, name, sizeof(slot->name) - 1);
    slot->name[sizeof(slot->name) - 1] = 0;
    slot->window_start = millis();
    slot->count = 0;
  }
  if (millis() - slot->window_start > UA_GW_MAX_AGE * 1000UL) {
    slot->window_start = millis();
    slot->count = 0;
  }
  if (slot->count >= UA_GW_SOURCE_LIMIT) return false;
  slot->count++;
  return true;
}

static const char* jsonString(const char* json, const char* key, char* out, int out_size) {
  char pat[16];
  snprintf(pat, sizeof(pat), "\"%s\":\"", key);
  const char* s = strstr(json, pat);
  if (!s) return nullptr;
  s += strlen(pat);
  const char* e = strchr(s, '"');
  if (!e || e - s >= out_size) return nullptr;
  memcpy(out, s, e - s);
  out[e - s] = 0;
  return out;
}

/** Пакет з MQTT від іншого шлюзу — перевірити й поставити в чергу на передачу. */
static void downlink(const InMsg& m) {
  if (strcmp(m.source, creds.user) == 0 || !time_ok) return;
  char* hex = scratch;
  char idhex[70];
  if (!strstr(m.data, "\"v\":1") || !jsonString(m.data, "raw", hex, 400) || !jsonString(m.data, "id", idhex, sizeof(idhex))) return;
  uint8_t raw[200];
  int len = strlen(hex) / 2;
  if (len < 21 || len > (int)sizeof(raw) || !mesh::Utils::fromHex(raw, len, hex)) return;
  const uint8_t* p;
  int pl;
  uint8_t id[32];
  uint32_t stamp;
  if (!validate(raw, len, nowSecs(), &p, &pl, id, &stamp)) return;
  char check[65];
  mesh::Utils::toHex(check, id, 32);
  if (strcasecmp(check, idhex) != 0) return;
  if (seenId(id)) return;
  if (!sourceAllowed(m.source)) return;
  rememberId(id);
  if (pending_count >= UA_GW_PENDING) {
    memmove(&pending[0], &pending[1], sizeof(Pending) * (pending_count - 1));
    pending_count--;
  }
  Pending& q = pending[pending_count++];
  q.raw[0] = 0x15;   // новий локальний flood, шлях скинуто
  q.raw[1] = 0x00;
  memcpy(&q.raw[2], p, pl);
  q.len = pl + 2;
  q.stamp = stamp;
}

static void transmitNext() {
  if (!pending_count || millis() - last_tx < UA_GW_TX_INTERVAL) return;
  Pending q = pending[0];
  memmove(&pending[0], &pending[1], sizeof(Pending) * (pending_count - 1));
  pending_count--;
  if (q.stamp + UA_GW_MAX_AGE < nowSecs()) return;   // застаріло в черзі
  // З увімкненим повтором нода передасть пакет сама після обробки; інакше — явна передача.
  the_mesh.uaInject(q.raw, q.len, !the_mesh.getNodePrefs()->isRepeatEn());
  last_tx = millis();
}

// ------------------------------------------------------------ облікові дані

static void loadCreds() {
  File f = SPIFFS.open(UA_GW_CREDS_FILE, "r");
  if (!f) return;
  if (f.read((uint8_t*)&creds, sizeof(creds)) == sizeof(creds) && creds.user[0] && creds.pass[0]) have_creds = true;
  f.close();
}
static void saveCreds() {
  File f = SPIFFS.open(UA_GW_CREDS_FILE, "w");
  if (!f) return;
  f.write((const uint8_t*)&creds, sizeof(creds));
  f.close();
}
static void clearCreds() {
  memset(&creds, 0, sizeof(creds));
  have_creds = false;
  SPIFFS.remove(UA_GW_CREDS_FILE);
}

// ------------------------------------------------------------ заявка: нода питає сайт, чи її схвалено

struct HttpBuf { char data[512]; int len; };

static esp_err_t httpEvent(esp_http_client_event_t* e) {
  auto b = (HttpBuf*)e->user_data;
  if (e->event_id == HTTP_EVENT_ON_DATA && b && b->len + e->data_len < (int)sizeof(b->data) - 1) {
    memcpy(b->data + b->len, e->data, e->data_len);
    b->len += e->data_len;
    b->data[b->len] = 0;
  }
  return ESP_OK;
}

static void claimTask(void*) {
  char key[65];
  lowerHex(key, the_mesh.self_id.pub_key, PUB_KEY_SIZE);
  uint32_t ts = time(nullptr);
  char msg[128];
  int msg_len = snprintf(msg, sizeof(msg), "meshcore-ua-claim\n%s\n%u", key, (unsigned)ts);
  uint8_t sig[SIGNATURE_SIZE];
  the_mesh.self_id.sign(sig, (const uint8_t*)msg, msg_len);
  char sighex[SIGNATURE_SIZE * 2 + 1];
  lowerHex(sighex, sig, SIGNATURE_SIZE);

  char name[40] = {0};
  const char* nn = the_mesh.getNodePrefs()->node_name;
  for (int i = 0, j = 0; nn[i] && j < 38; i++) if (nn[i] != '"' && nn[i] != '\\' && (uint8_t)nn[i] >= 32) name[j++] = nn[i];

  char* body = (char*)malloc(400);
  if (!body) {
    claim_status = CLAIM_DONE;
    vTaskDelete(nullptr);
    return;
  }
  int body_len = snprintf(body, 400, "{\"key\":\"%s\",\"ts\":%u,\"sig\":\"%s\",\"name\":\"%s\",\"fw\":\"%s\"}",
                          key, (unsigned)ts, sighex, name, FIRMWARE_VERSION);
  HttpBuf* bufp = (HttpBuf*)malloc(sizeof(HttpBuf));
  if (!bufp) {
    free(body);
    claim_status = CLAIM_DONE;
    vTaskDelete(nullptr);
    return;
  }
  HttpBuf& buf = *bufp;
  buf.len = 0;
  buf.data[0] = 0;
  esp_http_client_config_t cfg = {};
  cfg.url = UA_GW_CLAIM_URL;
  cfg.method = HTTP_METHOD_POST;
  cfg.timeout_ms = 15000;
  cfg.crt_bundle_attach = esp_crt_bundle_attach;
  cfg.event_handler = httpEvent;
  cfg.user_data = &buf;
  esp_http_client_handle_t c = esp_http_client_init(&cfg);
  uint32_t retry = 60000;
  if (c) {
    esp_http_client_set_header(c, "Content-Type", "application/json");
    esp_http_client_set_post_field(c, body, body_len);
    if (esp_http_client_perform(c) == ESP_OK && esp_http_client_get_status_code(c) == 200) {
      char status[16], user[65], pass[65];
      if (jsonString(buf.data, "status", status, sizeof(status))) {
        if (strcmp(status, "approved") == 0 && jsonString(buf.data, "user", user, sizeof(user)) && jsonString(buf.data, "pass", pass, sizeof(pass))) {
          strcpy(creds.user, user);
          strcpy(creds.pass, pass);
          saveCreds();
          have_creds = true;
        } else if (strcmp(status, "rejected") == 0 || strcmp(status, "banned") == 0) {
          retry = 3600000;   // заявку відхилено — питаємо рідко
        }
      }
    }
    esp_http_client_cleanup(c);
  }
  free(body);
  free(bufp);
  claim_retry_ms = retry;
  claim_status = CLAIM_DONE;
  vTaskDelete(nullptr);
}

// ------------------------------------------------------------ MQTT

static void mqttEvent(void*, esp_event_base_t, int32_t event_id, void* data) {
  auto e = (esp_mqtt_event_handle_t)data;
  switch ((esp_mqtt_event_id_t)event_id) {
    case MQTT_EVENT_CONNECTED:
      mqtt_connected = true;
      mqtt_auth_failures = 0;
      esp_mqtt_client_subscribe(e->client, UA_GW_PREFIX "/packets/+", 1);
      esp_mqtt_client_enqueue(e->client, topic_status, "{\"online\":true,\"radio\":true}", 0, 1, 1, true);
      break;
    case MQTT_EVENT_DISCONNECTED:
      mqtt_connected = false;
      break;
    case MQTT_EVENT_ERROR:
      if (e->error_handle && e->error_handle->error_type == MQTT_ERROR_TYPE_CONNECTION_REFUSED &&
          (e->error_handle->connect_return_code == MQTT_CONNECTION_REFUSE_BAD_USERNAME ||
           e->error_handle->connect_return_code == MQTT_CONNECTION_REFUSE_NOT_AUTHORIZED)) {
        mqtt_auth_failures++;
      }
      break;
    case MQTT_EVENT_DATA: {
      if (!inbox || e->current_data_offset != 0 || e->data_len != e->total_data_len || e->data_len >= (int)sizeof(InMsg::data)) break;
      if (!in_event) break;
      InMsg& m = *in_event;
      const char* slash = nullptr;
      for (int i = e->topic_len - 1; i >= 0; i--) if (e->topic[i] == '/') { slash = e->topic + i; break; }
      int src_len = slash ? e->topic_len - (int)(slash - e->topic) - 1 : 0;
      if (src_len <= 0 || src_len >= (int)sizeof(m.source)) break;
      memcpy(m.source, slash + 1, src_len);
      m.source[src_len] = 0;
      memcpy(m.data, e->data, e->data_len);
      m.data[e->data_len] = 0;
      m.len = e->data_len;
      xQueueSend(inbox, &m, 0);
      break;
    }
    default:
      break;
  }
}

static void startMqtt() {
  snprintf(topic_own, sizeof(topic_own), UA_GW_PREFIX "/packets/%s", creds.user);
  snprintf(topic_status, sizeof(topic_status), UA_GW_PREFIX "/status/%s", creds.user);
  esp_mqtt_client_config_t cfg = {};
  cfg.uri = UA_GW_MQTT_URI;
  cfg.client_id = creds.user;
  cfg.username = creds.user;
  cfg.password = creds.pass;
  cfg.cert_pem = UA_GW_CA_PEM;
  cfg.keepalive = 60;
  cfg.lwt_topic = topic_status;
  cfg.lwt_msg = "{\"online\":false,\"radio\":false}";
  cfg.lwt_qos = 1;
  cfg.lwt_retain = 1;
  cfg.buffer_size = 1024;
  cfg.out_buffer_size = 1024;
  cfg.task_stack = 6144;
  mqtt = esp_mqtt_client_init(&cfg);
  if (!mqtt) return;
  esp_mqtt_client_register_event(mqtt, (esp_mqtt_event_id_t)ESP_EVENT_ANY_ID, mqttEvent, nullptr);
  esp_mqtt_client_start(mqtt);
}

static void stopMqtt() {
  if (!mqtt) return;
  esp_mqtt_client_stop(mqtt);
  esp_mqtt_client_destroy(mqtt);
  mqtt = nullptr;
  mqtt_connected = false;
}

// ------------------------------------------------------------ життєвий цикл

static void setup() {
  esp_log_level_set("*", ESP_LOG_NONE);   // USB-порт зайнятий протоколом companion
  memset(secret, 0, sizeof(secret));
  mesh::Utils::sha256(secret, 16, (const uint8_t*)UA_GW_CHANNEL, strlen(UA_GW_CHANNEL));
  uint8_t h[32];
  mesh::Utils::sha256(h, 32, secret, 16);
  channel_hash = h[0];
  seen = (Seen*)calloc(UA_GW_SEEN, sizeof(Seen));
  pending = (Pending*)calloc(UA_GW_PENDING, sizeof(Pending));
  sources = (Source*)calloc(UA_GW_SOURCES, sizeof(Source));
  in_event = (InMsg*)calloc(1, sizeof(InMsg));
  in_loop = (InMsg*)calloc(1, sizeof(InMsg));
  scratch = (char*)calloc(1, UA_GW_SCRATCH);
  if (!seen || !pending || !sources || !in_event || !in_loop || !scratch) return;   // без пам'яті шлюз вимкнено
  inbox = xQueueCreate(4, sizeof(InMsg));
  loadCreds();
  configTime(0, 0, "pool.ntp.org", "time.google.com");
}

static void loop() {
  if (!scratch) return;
  bool online = wifi_enabled && WiFi.status() == WL_CONNECTED;

  // Час з інтернету потрібен для перевірки віку пакетів.
  if (online && !time_ok) {
    time_t t = time(nullptr);
    if (t > 1700000000) {
      the_mesh.getRTCClock()->setCurrentTime((uint32_t)t);
      time_ok = true;
    }
  }

  // Заявка / облікові дані.
  if (claim_status == CLAIM_DONE) {
    claim_status = CLAIM_IDLE;
    claim_last = millis();
    claim_done_once = true;
  }
  if (online && time_ok && !have_creds && claim_status == CLAIM_IDLE && (!claim_done_once || millis() - claim_last > claim_retry_ms)) {
    claim_status = CLAIM_RUNNING;
    if (xTaskCreate(claimTask, "ua_claim", 8192, nullptr, 1, nullptr) != pdPASS) claim_status = CLAIM_DONE;
  }

  // MQTT.
  if (online && have_creds && !mqtt) startMqtt();
  if (mqtt && mqtt_auth_failures >= 3) {   // шлюз видалено або пароль змінено — питаємо сайт знову
    stopMqtt();
    clearCreds();
    mqtt_auth_failures = 0;
    claim_done_once = false;
  }

  while (inbox && in_loop && xQueueReceive(inbox, in_loop, 0) == pdTRUE) downlink(*in_loop);
  transmitNext();
}

}  // namespace ua_gw

// Хуки з MyMesh.cpp.
void ua_gateway_on_rx(const uint8_t* raw, int len) { if (ua_gw::scratch) ua_gw::uplink(raw, len); }
void ua_gateway_on_tx(const mesh::Packet* pkt) {
  if (pkt->getPayloadType() != PAYLOAD_TYPE_GRP_TXT || pkt->payload_len > MAX_PACKET_PAYLOAD) return;
  uint8_t raw[2 + MAX_PACKET_PAYLOAD];
  raw[0] = 0x15;
  raw[1] = 0x00;
  memcpy(&raw[2], pkt->payload, pkt->payload_len);
  if (ua_gw::scratch) ua_gw::uplink(raw, pkt->payload_len + 2);
}
void ua_gateway_setup() { ua_gw::setup(); }
void ua_gateway_loop() { ua_gw::loop(); }

#endif  // UA_GATEWAY
