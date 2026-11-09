# Heltec WiFi LoRa 32 V4

ESP32 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната, [`gateway/`](gateway) — шлюз #ukraine.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/bluetooth/heltec_v4_companion_radio_ble-v1.18.0-ua.4-merged.bin) · 1,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/bluetooth/heltec_v4_companion_radio_ble-v1.18.0-ua.4.bin) · 1,6 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/usb/heltec_v4_companion_radio_usb-v1.18.0-ua.4-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/usb/heltec_v4_companion_radio_usb-v1.18.0-ua.4.bin) · 0,6 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/repeater/heltec_v4_repeater-v1.18.0-ua.4-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/repeater/heltec_v4_repeater-v1.18.0-ua.4.bin) · 1,1 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/room-server/heltec_v4_room_server-v1.18.0-ua.4-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/room-server/heltec_v4_room_server-v1.18.0-ua.4.bin) · 1,1 МБ |
| **Шлюз #ukraine**<br><sub>компаньйон Bluetooth + Wi-Fi, з’єднує місто з каналом #ukraine</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/gateway/heltec_v4_companion_radio_gateway-v1.18.0-ua.4-merged.bin) · 1,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/gateway/heltec_v4_companion_radio_gateway-v1.18.0-ua.4.bin) · 1,8 МБ |

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
   esptool.py write_flash 0x0 heltec_v4_companion_radio_ble-v1.18.0-ua.4-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 heltec_v4_companion_radio_ble-v1.18.0-ua.4.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
255cca2f6723fc3341948a26cad4da8601fb4abc5cfc699e76fe407b209cecd3  heltec_v4_companion_radio_ble-v1.18.0-ua.4-merged.bin
58718fa01b1e13cdf8e45c5b68c9f5e952e1db7ae0f04b1cfc55260b47ecfef2  heltec_v4_companion_radio_ble-v1.18.0-ua.4.bin
6f00a46bbb77916079cd92d92975efbd79e138dc9cbfc19ea01297ef5445ece3  heltec_v4_companion_radio_gateway-v1.18.0-ua.4-merged.bin
4b1e760dedfd1450300f7fe24eab11f16160b92262bee8293c865a7e61926150  heltec_v4_companion_radio_gateway-v1.18.0-ua.4.bin
5ee621127ac4b0b3ced332aee08598cfaf539279c755bac56816163407bd20df  heltec_v4_companion_radio_usb-v1.18.0-ua.4-merged.bin
e6f99a6eea5957915af162620b96c98b18d9253aa0bdcee8b048cd785acd0d66  heltec_v4_companion_radio_usb-v1.18.0-ua.4.bin
41b8fbf96cdaa81391d9b86860f1989e20b601979676ad72cbf0af7aaa9ad568  heltec_v4_repeater-v1.18.0-ua.4-merged.bin
666063cb8ff8c0179697398a711abd46884318a11bcc2801aada9c8a1539eaf7  heltec_v4_repeater-v1.18.0-ua.4.bin
e4ec47d6014c9b746a630371205b1805352699ccd18709ca003dca47aa0f8f3c  heltec_v4_room_server-v1.18.0-ua.4-merged.bin
998aa6b646792a36d9abee73498e1b4488ac17386ce9f6ef8b4d912083b93ebf  heltec_v4_room_server-v1.18.0-ua.4.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
