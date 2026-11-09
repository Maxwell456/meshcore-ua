# Heltec WiFi LoRa 32 V4 — з tft-екраном

ESP32 · MeshCore Україна **1.18.0-ua.3** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.3](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.3)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната, [`gateway/`](gateway) — шлюз #ukraine.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/bluetooth/heltec_v4_tft_companion_radio_ble-v1.18.0-ua.3-merged.bin) · 1,3 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/bluetooth/heltec_v4_tft_companion_radio_ble-v1.18.0-ua.3.bin) · 1,2 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/usb/heltec_v4_tft_companion_radio_usb-v1.18.0-ua.3-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/usb/heltec_v4_tft_companion_radio_usb-v1.18.0-ua.3.bin) · 0,6 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/repeater/heltec_v4_tft_repeater-v1.18.0-ua.3-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/repeater/heltec_v4_tft_repeater-v1.18.0-ua.3.bin) · 1,1 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/room-server/heltec_v4_tft_room_server-v1.18.0-ua.3-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/room-server/heltec_v4_tft_room_server-v1.18.0-ua.3.bin) · 1,1 МБ |
| **Шлюз #ukraine**<br><sub>компаньйон Bluetooth + Wi-Fi, з’єднує місто з каналом #ukraine</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/gateway/heltec_v4_tft_companion_radio_gateway-v1.18.0-ua.3-merged.bin) · 1,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/gateway/heltec_v4_tft_companion_radio_gateway-v1.18.0-ua.3.bin) · 1,8 МБ |

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
   esptool.py write_flash 0x0 heltec_v4_tft_companion_radio_ble-v1.18.0-ua.3-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 heltec_v4_tft_companion_radio_ble-v1.18.0-ua.3.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
19ad0494efd51dbbe4135673e653621fd1a7dd24269d6bddf2cdf3c287d27f9f  heltec_v4_tft_companion_radio_ble-v1.18.0-ua.3-merged.bin
f17b0880e85f430052ceacebf0e175ecddeb8d3e3ed2d0fdee3974109bf21c46  heltec_v4_tft_companion_radio_ble-v1.18.0-ua.3.bin
49be60f246b11c5eb73cac29343dfc486fe9c68581ceffd3a3c554be57a8e8b4  heltec_v4_tft_companion_radio_gateway-v1.18.0-ua.3-merged.bin
da86cc0544583791cf6fa90c159549f0a3c73fa48da8e0bae8b8e95e89ba297f  heltec_v4_tft_companion_radio_gateway-v1.18.0-ua.3.bin
4f072875517ebee1954353bffb0180a8303c63749a593bf7b96be7bab5160601  heltec_v4_tft_companion_radio_usb-v1.18.0-ua.3-merged.bin
5e9b4d45de0bada94019b732f0fa53dcb7e8bb7b802eaba8f1a13b80c9d9500d  heltec_v4_tft_companion_radio_usb-v1.18.0-ua.3.bin
13b6cf5577c7a1ba4837d2e4581f1e964669862a2420fddfbdfef79b35f22cd9  heltec_v4_tft_repeater-v1.18.0-ua.3-merged.bin
345bca3001b93e90146c893b67a43b9ebb56d4fdc371fa4e68ef2c328204340a  heltec_v4_tft_repeater-v1.18.0-ua.3.bin
fb885de8fd411276a70911777f13ccccdf6111c9dd4b6d4365e7a7a40d274e83  heltec_v4_tft_room_server-v1.18.0-ua.3-merged.bin
a9e21b3e6dd7a269ac3251143a66eb89551d5d58f1127c6f8e95d3f85f665e2e  heltec_v4_tft_room_server-v1.18.0-ua.3.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
