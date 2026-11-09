# Heltec WiFi LoRa 32 V3

ESP32 · MeshCore Україна **1.18.0-ua.3** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.3](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.3)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната, [`gateway/`](gateway) — шлюз #ukraine.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон Bluetooth** ✓<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/bluetooth/Heltec_v3_companion_radio_ble-v1.18.0-ua.3-merged.bin) · 1,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/bluetooth/Heltec_v3_companion_radio_ble-v1.18.0-ua.3.bin) · 1,6 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/usb/Heltec_v3_companion_radio_usb-v1.18.0-ua.3-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/usb/Heltec_v3_companion_radio_usb-v1.18.0-ua.3.bin) · 0,6 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/repeater/Heltec_v3_repeater-v1.18.0-ua.3-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/repeater/Heltec_v3_repeater-v1.18.0-ua.3.bin) · 1,1 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/room-server/Heltec_v3_room_server-v1.18.0-ua.3-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/room-server/Heltec_v3_room_server-v1.18.0-ua.3.bin) · 1,1 МБ |
| **Шлюз #ukraine**<br><sub>компаньйон Bluetooth + Wi-Fi, з’єднує місто з каналом #ukraine</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/gateway/Heltec_v3_companion_radio_gateway-v1.18.0-ua.3-merged.bin) · 1,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/gateway/Heltec_v3_companion_radio_gateway-v1.18.0-ua.3.bin) · 1,8 МБ |

✓ — перевірено на фізичному пристрої.

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.
- **Шлюз #ukraine** — ваша нода для телефона, яка ще й сама по Wi-Fi з’єднує ваше місто з каналом #ukraine. Прошивається й підключається на meshcore.com.ua/gateway/.

**Нова установка** — для нового пристрою або переходу з іншої прошивки. **Оновлення** — якщо на платі вже MeshCore і налаштування треба зберегти.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

1. Встановіть esptool: `pip install esptool`.
2. Підключіть плату кабелем для даних. Якщо порт не з’являється — затисніть кнопку BOOT і натисніть RST.
3. **Нова установка** (стирає налаштування, ключі й контакти; налаштування мережі застосуються одразу):
   ```sh
   esptool.py erase_flash
   esptool.py write_flash 0x0 Heltec_v3_companion_radio_ble-v1.18.0-ua.3-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 Heltec_v3_companion_radio_ble-v1.18.0-ua.3.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
daf5111a5a13c0080c9b2d9d6e8ca2d5c831dfb1e6b893221de90ab68ed64727  Heltec_v3_companion_radio_ble-v1.18.0-ua.3-merged.bin
965df5acaeaec3eef0ce4e1639b871ab526786c4126e64b977d9b18b420cd95a  Heltec_v3_companion_radio_ble-v1.18.0-ua.3.bin
69fe387e91cf0fe61280e90fda3d4a3aeafa83057f9627228bb2e1700ee02741  Heltec_v3_companion_radio_gateway-v1.18.0-ua.3-merged.bin
966494a3f761bd6099809276ad20e977d85b47007cdc74cbd8511360b51e6040  Heltec_v3_companion_radio_gateway-v1.18.0-ua.3.bin
f828d4e57c02bbb9b375def1d72590e76c503f1dbe5cb2fc0204b3a817f3dbdf  Heltec_v3_companion_radio_usb-v1.18.0-ua.3-merged.bin
71e2a8023091545418d52cb6b5bf5f83f1cb7f6c5b2550bb918717f9627a8f38  Heltec_v3_companion_radio_usb-v1.18.0-ua.3.bin
fa6f2f00c741c586b5bfb8f53873fee22e7aafe6a78f0cd25f6669611359ba5d  Heltec_v3_repeater-v1.18.0-ua.3-merged.bin
f32e53bda8c68e15d6b3e3a5cb50aca3183b52706d1178ab727e471c341ac253  Heltec_v3_repeater-v1.18.0-ua.3.bin
4c62a458c8928d2817ca663b312b80be043bc3a3bb498ed9eb721b5a8785ec96  Heltec_v3_room_server-v1.18.0-ua.3-merged.bin
36cbf790c50c2f3abfdebda23c5c99418d636930e721a31f3d570de9b614f7cb  Heltec_v3_room_server-v1.18.0-ua.3.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
