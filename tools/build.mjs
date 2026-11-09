#!/usr/bin/env node
/**
 * Збірка MeshCore Україна з офіційного MeshCore.
 *
 *   node tools/build.mjs resolve [--force] [--version=1.18.0]
 *       Знаходить останню стабільну версію MeshCore, складає план (.work/plan.json):
 *       які плати й ролі збирати, коміт, офіційні файли для порівняння. needed=false, якщо реліз уже є.
 *   node tools/build.mjs compile <env>
 *       Готує вихідний код з патчем, збирає одне середовище PlatformIO, перевіряє образ → .work/out/<env>/
 *   node tools/build.mjs assemble
 *       Зводить зібране в dist/: файли, source.zip, LICENSE.txt, manifest.json, SHA256SUMS.txt.
 *
 * Патч: радіопараметри мережі для всіх ролей (platformio.ini), канали спільноти для компаньйонів
 * на чистому пристрої (UaBootstrap.h), рядок версії й дата. Якщо контекст патча в новій версії MeshCore
 * змінився — збірка зупиняється, а не збирає щось незрозуміле.
 *
 * Потрібні Node.js 22, Python і PlatformIO 6.1.19. GITHUB_TOKEN (необов’язково) підвищує ліміт GitHub API.
 */
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { readFile, writeFile, mkdir, copyFile, rm, readdir, appendFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, resolve, join, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { unzipSync, zipSync } from 'fflate';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const work = join(root, '.work');
const source = join(work, 'src');
const outRoot = join(work, 'out');
const dist = join(root, 'dist');
const python = process.env.PYTHON || 'python3';
const config = JSON.parse(await readFile(join(root, 'config.json'), 'utf8'));
const REPO = config.upstream;
const ROLE_ENV = { companion: 'companion_radio_ble', companion_usb: 'companion_radio_usb', repeater: 'repeater', room_server: 'room_server' };
const COMPANION = new Set(['companion', 'companion_usb', 'gateway']);
/** Вбудований шлюз #ukraine: збирається з BLE-компаньйона плати, перевіряється за його офіційною збіркою. */
const GATEWAY = config.gateway ?? { boards: {} };
const gatewayBoard = (b) => (typeof GATEWAY.boards[b] === 'string' ? { name: GATEWAY.boards[b], flags: [], unflags: [] } : { flags: [], unflags: [], ...GATEWAY.boards[b] });
const ESP_CHIPS = { 0: 'esp32', 2: 'esp32s2', 5: 'esp32c3', 9: 'esp32s3', 13: 'esp32c6' };
const ASSET_RE = /^(?<board>.+?)_(?<role>companion_radio_ble|companion_radio_usb|repeater|room_server)-v(?<ver>\d+\.\d+\.\d+)-(?<hash>[0-9a-f]+)(?<merged>-merged)?\.(?<ext>bin|zip|uf2)$/;
const TAG_RE = /^(companion|repeater|room-server)-v(\d+\.\d+\.\d+)$/;

const sha256 = (data) => createHash('sha256').update(data).digest('hex');
const args = process.argv.slice(2);
const option = (name) => args.find((a) => a.startsWith(`--${name}=`))?.split('=')[1];
const check = (ok, message) => { if (!ok) throw new Error(message); };

function run(command, argv, cwd = root, capture = false) {
  const r = spawnSync(command, argv, { cwd, stdio: capture ? 'pipe' : 'inherit', encoding: 'utf8', maxBuffer: 64 << 20, env: { ...process.env, PYTHONUTF8: '1' } });
  if (r.error) throw r.error;
  if (r.status) throw new Error(`${command} ${argv.join(' ')} → код ${r.status}\n${r.stderr ?? ''}`);
  return r.stdout;
}

async function gh(path, repo = REPO) {
  const headers = { 'User-Agent': 'meshcore-ua-build', Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const res = await fetch(`https://api.github.com/repos/${repo}${path}`, { headers });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub ${path}: HTTP ${res.status}`);
  return res.json();
}

async function download(url) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'meshcore-ua-build' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (e) {
      if (attempt >= 4) throw new Error(`${url}: ${e.message}`);
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
}

function channels() {
  const names = config.channels;
  check(names.length === new Set(names).size && names.length + 1 <= 40, 'Неправильна кількість каналів');
  for (const name of names) check(/^#[a-z0-9_-]+$/.test(name) && Buffer.byteLength(name) < 32, `Неправильна назва каналу: ${name}`);
  return names.map((name, i) => {
    const key = createHash('sha256').update(name, 'utf8').digest().subarray(0, 16);
    return { slot: i + 1, name, keyHex: key.toString('hex'), keyBase64: key.toString('base64') };
  });
}

// ---------------------------------------------------------------- resolve

async function resolvePlan() {
  const releases = (await gh('/releases?per_page=60')).filter((r) => !r.draft && !r.prerelease);
  const byVersion = new Map();
  for (const rel of releases) {
    const m = TAG_RE.exec(rel.tag_name);
    if (m) byVersion.set(m[2], [...(byVersion.get(m[2]) ?? []), { ...rel, kind: m[1] }]);
  }
  const complete = [...byVersion.keys()].filter((v) => {
    const kinds = new Set(byVersion.get(v).map((r) => r.kind));
    return kinds.has('companion') && kinds.has('repeater');
  }).sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
  const upstreamVersion = option('version') ?? complete[0];
  check(upstreamVersion && byVersion.has(upstreamVersion), `Немає повного релізу MeshCore ${upstreamVersion ?? ''}`);

  const assets = new Map();
  let shortHash = null;
  for (const rel of byVersion.get(upstreamVersion)) for (const a of rel.assets) {
    const m = ASSET_RE.exec(a.name);
    if (!m || m.groups.ver !== upstreamVersion) continue;
    shortHash ??= m.groups.hash;
    const env = `${m.groups.board}_${m.groups.role}`;
    const kind = m.groups.ext === 'bin' ? (m.groups.merged ? 'merged' : 'bin') : m.groups.ext;
    assets.set(env, { ...(assets.get(env) ?? {}), [kind]: { name: a.name, url: a.browser_download_url, size: a.size } });
  }
  check(shortHash, 'Не вдалося визначити коміт офіційної збірки');
  const commit = (await gh(`/commits/${shortHash}`)).sha;

  const targets = [];
  for (const board of Object.keys(config.boards)) for (const [role, suffix] of Object.entries(ROLE_ENV)) {
    const env = `${board}_${suffix}`;
    const official = assets.get(env);
    if (!official) continue;
    const chip = official.merged ? 'esp32' : official.zip ? 'nrf52' : null;
    if (chip) targets.push({ board, role, chip, env, official });
  }
  for (const board of Object.keys(GATEWAY.boards)) {
    const official = assets.get(`${board}_companion_radio_ble`);
    if (official?.merged) targets.push({ board, role: 'gateway', chip: 'esp32', env: `${board}_companion_radio_gateway`, official });
    else console.warn(`Увага: немає офіційної BLE-збірки ${board} — шлюз для неї не збирається`);
  }
  const missing = Object.keys(config.boards).filter((b) => !targets.some((t) => t.board === b));
  if (missing.length) console.warn(`Увага: в офіційному релізі немає файлів для ${missing.join(', ')}`);
  check(targets.length, 'Немає плат для збірки');

  const version = `${upstreamVersion}-ua.${config.revision}`;
  const self = process.env.GITHUB_REPOSITORY;
  const exists = self ? Boolean(await gh(`/releases/tags/v${version}`, self)) : false;
  const plan = {
    version, tag: `v${version}`, revision: config.revision,
    upstream: { version: upstreamVersion, commit },
    buildDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    needed: args.includes('--force') || !exists,
    targets,
  };
  await mkdir(work, { recursive: true });
  await writeFile(join(work, 'plan.json'), JSON.stringify(plan, null, 2));
  if (process.env.GITHUB_OUTPUT) {
    await appendFile(process.env.GITHUB_OUTPUT, `needed=${plan.needed}\nversion=${version}\ntag=${plan.tag}\ncommit=${commit}\nmatrix=${JSON.stringify({ include: targets.map((t) => ({ env: t.env, chip: t.chip })) })}\n`);
  }
  console.log(`MeshCore ${upstreamVersion} (${commit.slice(0, 7)}) → ${version}: ${targets.length} прошивок; ${plan.needed ? 'збираємо' : 'реліз уже є'}.`);
  return plan;
}

const loadPlan = async () => JSON.parse(await readFile(join(work, 'plan.json'), 'utf8'));

// ---------------------------------------------------------------- вихідний код і патч

/** Замінює рівно одне входження; якщо upstream змінився — зупиняє збірку. */
function replaceOnce(text, pattern, replacement, label) {
  const count = pattern instanceof RegExp
    ? (text.match(new RegExp(pattern.source, pattern.flags.replace('g', '') + 'g')) ?? []).length
    : text.split(pattern).length - 1;
  check(count === 1, `Патч «${label}»: очікувалось 1 входження, знайдено ${count}. MeshCore змінився — оновіть патч у tools/build.mjs.`);
  return text.replace(pattern, replacement);
}

async function prepareSource(plan) {
  const n = config.network, ch = channels();
  const archive = join(work, `${plan.upstream.commit}.zip`);
  if (!existsSync(archive)) {
    console.log(`Завантажую MeshCore ${plan.upstream.version} (${plan.upstream.commit.slice(0, 7)})…`);
    await mkdir(work, { recursive: true });
    await writeFile(archive, await download(`https://codeload.github.com/${REPO}/zip/${plan.upstream.commit}`));
  }
  const bytes = await readFile(archive);
  const files = unzipSync(bytes);
  const prefix = `MeshCore-${plan.upstream.commit}/`;
  const marker = join(source, '.ua-commit');
  if (!existsSync(marker) || (await readFile(marker, 'utf8')).trim() !== plan.upstream.commit) {
    await rm(source, { recursive: true, force: true });
    for (const [name, data] of Object.entries(files)) {
      if (!name.startsWith(prefix)) continue;
      const target = resolve(source, name.slice(prefix.length));
      if (!target.startsWith(source + sep)) continue;
      if (name.endsWith('/')) await mkdir(target, { recursive: true });
      else { await mkdir(dirname(target), { recursive: true }); await writeFile(target, data); }
    }
    await writeFile(marker, plan.upstream.commit + '\n');
  }
  const original = (path) => {
    const data = files[prefix + path];
    check(data, `У вихідному коді немає ${path}`);
    return Buffer.from(data).toString('utf8');
  };
  const patched = [];
  async function patch(path, edits) {
    let text = original(path);
    for (const [pattern, replacement, label] of edits) text = replaceOnce(text, pattern, replacement, label ?? path);
    await writeFile(join(source, path), text);
    patched.push(path);
  }

  const ini = original('platformio.ini');
  await patch('platformio.ini', [
    [/-D LORA_FREQ=[\d.]+/, `-D LORA_FREQ=${n.frequencyMHz}`, 'LORA_FREQ'],
    [/-D LORA_BW=[\d.]+/, `-D LORA_BW=${n.bandwidthKHz}`, 'LORA_BW'],
    ...(/-D LORA_CR=\d+/.test(ini)
      ? [[/-D LORA_SF=\d+/, `-D LORA_SF=${n.spreadingFactor}`, 'LORA_SF'], [/-D LORA_CR=\d+/, `-D LORA_CR=${n.codingRate}`, 'LORA_CR']]
      : [[/-D LORA_SF=\d+/, `-D LORA_SF=${n.spreadingFactor}\n  -D LORA_CR=${n.codingRate}`, 'LORA_SF+CR']]),
  ]);
  for (const example of ['companion_radio', 'simple_repeater', 'simple_room_server']) {
    const path = `examples/${example}/MyMesh.h`;
    const edits = [[/(#define\s+FIRMWARE_VERSION\s+)"[^"]*"/, `$1"v${plan.version}"`, `${path}: FIRMWARE_VERSION`]];
    if (/#define\s+FIRMWARE_BUILD_DATE\s+"/.test(original(path))) edits.push([/(#define\s+FIRMWARE_BUILD_DATE\s+)"[^"]*"/, `$1"${plan.buildDate}"`, `${path}: FIRMWARE_BUILD_DATE`]);
    await patch(path, edits);
  }
  await patch('examples/companion_radio/DataStore.h', [
    ['  void loadPrefs(NodePrefs& prefs);', '  bool hasSavedConfiguration() const;\n  void loadPrefs(NodePrefs& prefs);'],
  ]);
  await patch('examples/companion_radio/DataStore.cpp', [
    ['#include "DataStore.h"', '#include "DataStore.h"\n#include "MeshcoreUaDefaults.h"\n#include "UaBootstrap.h"'],
    ['void DataStore::loadPrefs(NodePrefs& prefs) {', `bool DataStore::hasSavedConfiguration() const {
  return !meshcore_ua::isUnconfigured(_fs->exists("/prefs.json"),
    _fs->exists("/new_prefs"), _getContactsChannelsFS()->exists("/channels2"));
}

void DataStore::loadPrefs(NodePrefs& prefs) {`],
  ]);
  await patch('examples/companion_radio/MyMesh.cpp', [
    ['#include "MyMesh.h"', '#include "MyMesh.h"\n#include "MeshcoreUaDefaults.h"\n#include "UaBootstrap.h"'],
    ['  _store->loadChannels(this);', `  _store->loadChannels(this);
  if (meshcore_ua::seedChannelsIfUnconfigured(*_store, *this)) {
    _store->savePrefs(_prefs);
  }`],
  ]);
  await writeFile(join(source, 'examples/companion_radio/MeshcoreUaDefaults.h'), `#pragma once
// Generated from config.json. Public stays at slot 0.
namespace meshcore_ua {
struct Channel { const char* name; const char* keyBase64; };
static constexpr Channel kChannels[] = {
${ch.map((c) => `  { ${JSON.stringify(c.name)}, ${JSON.stringify(c.keyBase64)} },`).join('\n')}
};
static constexpr unsigned kChannelCount = sizeof(kChannels) / sizeof(kChannels[0]);
}
#if defined(MAX_GROUP_CHANNELS)
static_assert(MAX_GROUP_CHANNELS >= meshcore_ua::kChannelCount + 1, "Not enough channel slots");
#endif
#if defined(LORA_FREQ)
static_assert(LORA_FREQ == ${n.frequencyMHz} && LORA_BW == ${n.bandwidthKHz} && LORA_SF == ${n.spreadingFactor} && LORA_CR == ${n.codingRate}, "UA radio defaults mismatch");
#endif
`);
  patched.push('examples/companion_radio/MeshcoreUaDefaults.h');
  await copyFile(join(root, 'tools/UaBootstrap.h'), join(source, 'examples/companion_radio/UaBootstrap.h'));
  patched.push('examples/companion_radio/UaBootstrap.h');
  await prepareGateway(original, patch, patched);
  return { patched, files, prefix, channels: ch };
}

/** Шлюз #ukraine: файли, хуки в MyMesh і main.cpp, середовища <плата>_companion_radio_gateway. */
async function prepareGateway(original, patch, patched) {
  const boards = Object.keys(GATEWAY.boards);
  if (!boards.length) return;
  check(/^mqtts:\/\/[\w.-]+:\d+$/.test(GATEWAY.mqttUri) && /^https:\/\/[\w./-]+$/.test(GATEWAY.claimUrl), 'gateway: неправильні mqttUri / claimUrl');
  const ca = (await readFile(join(root, GATEWAY.ca), 'utf8')).trim().split(/\r?\n/);
  check(ca[0] === '-----BEGIN CERTIFICATE-----' && ca.at(-1) === '-----END CERTIFICATE-----', 'gateway: ca не PEM');
  await writeFile(join(source, 'examples/companion_radio/UaGatewayConfig.h'), `#pragma once
// Generated from config.json (gateway).
#define UA_GW_MQTT_URI ${JSON.stringify(GATEWAY.mqttUri)}
#define UA_GW_CLAIM_URL ${JSON.stringify(GATEWAY.claimUrl)}
static const char UA_GW_CA_PEM[] =
${ca.map((l) => `  "${l}\\n"`).join('\n')};
`);
  await copyFile(join(root, 'tools/UaGateway.h'), join(source, 'examples/companion_radio/UaGateway.h'));
  patched.push('examples/companion_radio/UaGatewayConfig.h', 'examples/companion_radio/UaGateway.h');

  const mesh = await readFile(join(source, 'examples/companion_radio/MyMesh.h'), 'utf8');
  await writeFile(join(source, 'examples/companion_radio/MyMesh.h'), replaceOnce(mesh,
    '  bool hasPendingWork() const;\n',
    `  bool hasPendingWork() const;
#ifdef UA_GATEWAY
  // MeshCore Україна: вбудований шлюз #ukraine (UaGateway.h).
  void uaInject(const uint8_t* raw, int len, bool transmit);
  void logTx(mesh::Packet* packet, int len) override;
#endif
`, 'MyMesh.h: UA_GATEWAY'));
  patched.includes('examples/companion_radio/MyMesh.h') || patched.push('examples/companion_radio/MyMesh.h');

  let cpp = await readFile(join(source, 'examples/companion_radio/MyMesh.cpp'), 'utf8');
  // Діагностика в консолі застосунку: «get gw.status».
  const wifiStatus = '  if (strcmp(command, "get wifi.status") == 0) {\n';
  cpp = replaceOnce(cpp, wifiStatus, `#ifdef UA_GATEWAY
  if (strcmp(command, "get gw.status") == 0) {
    ua_gateway_status(reply);
    return true;
  }
#endif
${wifiStatus}`, 'MyMesh.cpp: get gw.status');
  const head = 'void MyMesh::logRxRaw(float snr, float rssi, const uint8_t raw[], int len) {\n';
  await writeFile(join(source, 'examples/companion_radio/MyMesh.cpp'), replaceOnce(cpp, head, `#ifdef UA_GATEWAY
void ua_gateway_on_rx(const uint8_t* raw, int len);
void ua_gateway_on_tx(const mesh::Packet* pkt);
void ua_gateway_status(char* reply);

void MyMesh::logTx(mesh::Packet* packet, int len) {
  ua_gateway_on_tx(packet);
}

// Пакет з MQTT: передати в ефір (якщо нода не ретранслює сама) і показати в застосунку як вхідний.
void MyMesh::uaInject(const uint8_t* raw, int len, bool transmit) {
  if (transmit) {
    auto out = obtainNewPacket();
    if (out) {
      if (tryParsePacket(out, raw, len)) sendPacket(out, 1, 0);
      else releasePacket(out);
    }
  }
  auto in = obtainNewPacket();
  if (in) {
    if (tryParsePacket(in, raw, len)) _mgr->queueInbound(in, futureMillis(0));
    else releasePacket(in);
  }
}
#endif

${head}#ifdef UA_GATEWAY
  ua_gateway_on_rx(raw, len);
#endif
`, 'MyMesh.cpp: UA_GATEWAY'));

  await patch('examples/companion_radio/main.cpp', [
    ['void setup() {\n', '#ifdef UA_GATEWAY\n  #include "UaGateway.h"\n#endif\n\nvoid setup() {\n', 'main.cpp: include'],
    ['  board.onBootComplete();\n}\n', '#ifdef UA_GATEWAY\n  ua_gateway_setup();\n#endif\n  board.onBootComplete();\n}\n', 'main.cpp: setup'],
    ['void loop() {\n  the_mesh.loop();\n', 'void loop() {\n  the_mesh.loop();\n#ifdef UA_GATEWAY\n  ua_gateway_loop();\n#endif\n', 'main.cpp: loop'],
  ]);

  const flag = (f) => check(/^-D [A-Z0-9_]+(=[\w.]+)?$/.test(f), `gateway: неправильний прапорець ${f}`) ?? `  ${f}\n`;
  const ini = boards.map((b) => `[env:${b}_companion_radio_gateway]
extends = env:${b}_companion_radio_ble
build_flags =
  \${env:${b}_companion_radio_ble.build_flags}
  -D UA_GATEWAY
  -D ENABLE_WIFI_INTERFACE
  -D ENABLE_USB_INTERFACE
${gatewayBoard(b).flags.map(flag).join('')}build_unflags =
  -D BLE_DEBUG_LOGGING=1
${gatewayBoard(b).unflags.map(flag).join('')}build_src_filter =
  \${env:${b}_companion_radio_ble.build_src_filter}
  +<helpers/wifi/*.cpp>
`).join('\n');
  await mkdir(join(source, 'variants/ua_gateway'), { recursive: true });
  await writeFile(join(source, 'variants/ua_gateway/platformio.ini'), `; Generated: MeshCore Україна gateway builds (companion BLE + Wi-Fi + MQTT).\n\n${ini}`);
  patched.push('variants/ua_gateway/platformio.ini');
}

/** Жодна плата не має перевизначати радіопараметри. */
function checkRadioFlags(envs) {
  const n = config.network;
  const cfg = JSON.parse(run(python, ['-m', 'platformio', 'project', 'config', '--json-output'], source, true));
  const all = new Map(cfg.filter(([s]) => s.startsWith('env:')).map(([s, o]) => [s.slice(4), Object.fromEntries(o)]));
  const want = { LORA_FREQ: n.frequencyMHz, LORA_BW: n.bandwidthKHz, LORA_SF: n.spreadingFactor, LORA_CR: n.codingRate };
  for (const env of envs) {
    check(all.has(env), `У MeshCore немає середовища ${env}`);
    const flags = [all.get(env).build_flags].flat().join(' ');
    for (const [key, value] of Object.entries(want)) {
      const found = [...flags.matchAll(new RegExp(`-D\\s*${key}=([\\d.]+)`, 'g'))].map((m) => Number(m[1]));
      check(found.length && found.every((v) => v === Number(value)), `${env}: ${key}=${found.join(',') || 'немає'}, очікувалось ${value}`);
    }
  }
}

// ---------------------------------------------------------------- compile

function checkContent(image, t, version, ch) {
  check(image.includes(Buffer.from(`v${version}`)), `${t.env}: немає рядка версії`);
  if (COMPANION.has(t.role)) for (const c of ch) check(image.includes(Buffer.from(c.name)) && image.includes(Buffer.from(c.keyBase64)), `${t.env}: немає каналу ${c.name}`);
}

async function collectEsp32(t, buildDir, version, ch) {
  const app = await readFile(join(buildDir, 'firmware.bin'));
  const merged = await readFile(join(buildDir, 'firmware-merged.bin'));
  check(app[0] === 0xe9, `${t.env}: не образ ESP32`);
  check(merged.subarray(0x10000, 0x10000 + app.length).equals(app), `${t.env}: образ у merged не за адресою 0x10000`);
  const chip = ESP_CHIPS[app.readUInt16LE(12)];
  check(chip, `${t.env}: невідомий чип`);
  const officialApp = await download(t.official.bin.url);
  const officialMerged = await download(t.official.merged.url);
  check(officialApp.readUInt16LE(12) === app.readUInt16LE(12), `${t.env}: чип не збігається з офіційною збіркою`);
  check(merged.subarray(0x8000, 0x9000).equals(officialMerged.subarray(0x8000, 0x9000)), `${t.env}: таблиця розділів відрізняється від офіційної`);
  if (!merged.subarray(0, 0x8000).equals(officialMerged.subarray(0, 0x8000))) console.warn(`${t.env}: завантажувач відрізняється від офіційного`);
  const esptool = join(process.env.PLATFORMIO_CORE_DIR || join(homedir(), '.platformio'), 'packages/tool-esptoolpy/esptool.py');
  const info = run(python, [esptool, '--chip', chip, 'image_info', join(buildDir, 'firmware.bin')], root, true);
  check(/Checksum:.*\(valid\)/.test(info), `${t.env}: контрольна сума образу неправильна`);
  if (/Validation Hash/.test(info)) check(/Validation Hash:.*\(valid\)/.test(info), `${t.env}: хеш образу неправильний`);
  checkContent(app, t, version, ch);
  return { merged, bin: app };
}

async function collectNrf52(t, buildDir, version, ch) {
  const uf2Path = join(buildDir, 'firmware.uf2');
  run(python, [join(source, 'bin/uf2conv/uf2conv.py'), join(buildDir, 'firmware.hex'), '-c', '-o', uf2Path, '-f', '0xADA52840'], source, true);
  const zip = await readFile(join(buildDir, 'firmware.zip'));
  const uf2 = await readFile(uf2Path);
  check(uf2.readUInt32LE(0) === 0x0a324655 && uf2.readUInt32LE(28) === 0xada52840, `${t.env}: неправильний UF2`);
  const pkg = unzipSync(zip);
  const app = JSON.parse(Buffer.from(pkg['manifest.json'] ?? []).toString() || '{}').manifest?.application;
  check(app && pkg[app.bin_file] && pkg[app.dat_file], `${t.env}: DFU-пакет без образу`);
  checkContent(Buffer.from(pkg[app.bin_file]), t, version, ch);
  const o = unzipSync(await download(t.official.zip.url));
  const oApp = JSON.parse(Buffer.from(o['manifest.json']).toString()).manifest.application;
  const ratio = pkg[app.bin_file].length / o[oApp.bin_file].length;
  check(ratio > 0.9 && ratio < 1.1, `${t.env}: розмір образу дуже відрізняється від офіційного (${ratio.toFixed(2)})`);
  return { zip, uf2 };
}

const fileName = (env, version, kind) => `${env}-v${version}${kind === 'merged' ? '-merged' : ''}.${kind === 'merged' || kind === 'bin' ? 'bin' : kind}`;

async function compile(env) {
  const plan = await loadPlan();
  const t = plan.targets.find((x) => x.env === env);
  check(t, `${env} немає в плані`);
  const { channels: ch } = await prepareSource(plan);
  checkRadioFlags([env]);
  run(python, ['-m', 'platformio', 'run', '--project-dir', source, '--environment', env, ...(t.chip === 'esp32' ? ['--target', 'mergebin'] : [])]);
  const buildDir = join(source, '.pio/build', env);
  const images = t.chip === 'esp32' ? await collectEsp32(t, buildDir, plan.version, ch) : await collectNrf52(t, buildDir, plan.version, ch);
  const out = join(outRoot, env);
  await rm(out, { recursive: true, force: true });
  await mkdir(out, { recursive: true });
  const files = {};
  for (const [kind, data] of Object.entries(images)) {
    const name = fileName(env, plan.version, kind);
    await writeFile(join(out, name), data);
    files[kind] = { name, size: data.length, sha256: sha256(data) };
  }
  await writeFile(join(out, 'fragment.json'), JSON.stringify({ board: t.board, role: t.role, chip: t.chip, env, files }, null, 2));
  console.log(`Готово: ${env} (${Object.values(files).map((f) => f.name).join(', ')})`);
}

// ---------------------------------------------------------------- assemble

async function assemble() {
  const plan = await loadPlan();
  const { patched, files, prefix, channels: ch } = await prepareSource(plan);
  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });
  const base = `/firmware/custom/${plan.tag}`;
  const boards = {};
  for (const t of plan.targets) {
    const dir = join(outRoot, t.env);
    check(existsSync(join(dir, 'fragment.json')), `Немає зібраної прошивки ${t.env}`);
    const frag = JSON.parse(await readFile(join(dir, 'fragment.json'), 'utf8'));
    const roleFiles = {};
    for (const [kind, f] of Object.entries(frag.files)) {
      const data = await readFile(join(dir, f.name));
      check(sha256(data) === f.sha256, `${f.name}: SHA-256 не збігається`);
      await writeFile(join(dist, f.name), data);
      roleFiles[kind] = { ...f, url: `${base}/${f.name}`, path: `${base}/${f.name}` };
    }
    const entry = (boards[t.board] ??= { name: config.boards[t.board] ?? gatewayBoard(t.board).name, chip: t.chip, roles: {} });
    entry.roles[t.role] = { env: t.env, hardwareTested: config.hardwareTested.includes(t.env), files: roleFiles };
  }
  const bundled = { ...files };
  for (const file of patched) bundled[prefix + file] = new Uint8Array(await readFile(join(source, file)));
  bundled[prefix + 'README-UA.md'] = new Uint8Array(await readFile(join(root, 'README.md')));
  const sourceZip = Buffer.from(zipSync(bundled, { level: 6 }));
  await writeFile(join(dist, 'source.zip'), sourceZip);
  await writeFile(join(dist, 'LICENSE.txt'), files[prefix + 'license.txt']);
  const manifest = {
    id: 'meshcore-ua', name: config.name, version: plan.version, revision: plan.revision,
    upstream: { ...plan.upstream, archiveSha256: sha256(await readFile(join(work, `${plan.upstream.commit}.zip`))) },
    network: { ...config.network },
    channels: ch.map(({ slot, name, keyHex }) => ({ slot, name, keyHex })),
    initialisation: 'Радіопараметри — значення за замовчуванням для всіх ролей. Канали компаньйона додаються лише на чистому пристрої (немає prefs.json, new_prefs і channels2); збережені налаштування мають пріоритет.',
    builtAt: new Date().toISOString(),
    source: { path: `${base}/source.zip`, sha256: sha256(sourceZip) },
    boards: Object.fromEntries(Object.entries(boards).sort(([a], [b]) => a.localeCompare(b, 'en'))),
  };
  await writeFile(join(dist, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  const sums = (await readdir(dist)).filter((f) => !['manifest.json', 'LICENSE.txt'].includes(f)).sort();
  await writeFile(join(dist, 'SHA256SUMS.txt'), (await Promise.all(sums.map(async (f) => `${sha256(await readFile(join(dist, f)))}  ${f}`))).join('\n') + '\n');
  console.log(`Зведено ${plan.version}: ${plan.targets.length} прошивок → dist/`);
}

// ---------------------------------------------------------------- CLI

const [command, arg] = args.filter((a) => !a.startsWith('--'));
try {
  if (command === 'resolve') await resolvePlan();
  else if (command === 'compile' && arg) await compile(arg);
  else if (command === 'assemble') await assemble();
  else { console.error('Використання: node tools/build.mjs resolve | compile <env> | assemble'); process.exitCode = 2; }
} catch (e) {
  console.error(e.message ?? e);
  process.exitCode = 1;
}
