# Heltec WiFi LoRa 32 V4 — з tft-екраном

ESP32 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната, [`gateway/`](gateway) — шлюз #ukraine.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/bluetooth/heltec_v4_tft_companion_radio_ble-v1.18.0-ua.4-merged.bin) · 1,3 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/bluetooth/heltec_v4_tft_companion_radio_ble-v1.18.0-ua.4.bin) · 1,2 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/usb/heltec_v4_tft_companion_radio_usb-v1.18.0-ua.4-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/usb/heltec_v4_tft_companion_radio_usb-v1.18.0-ua.4.bin) · 0,6 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/repeater/heltec_v4_tft_repeater-v1.18.0-ua.4-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/repeater/heltec_v4_tft_repeater-v1.18.0-ua.4.bin) · 1,1 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/room-server/heltec_v4_tft_room_server-v1.18.0-ua.4-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/room-server/heltec_v4_tft_room_server-v1.18.0-ua.4.bin) · 1,1 МБ |
| **Шлюз #ukraine**<br><sub>компаньйон Bluetooth + Wi-Fi, з’єднує місто з каналом #ukraine</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/gateway/heltec_v4_tft_companion_radio_gateway-v1.18.0-ua.4-merged.bin) · 1,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/gateway/heltec_v4_tft_companion_radio_gateway-v1.18.0-ua.4.bin) · 1,8 МБ |

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
   esptool.py write_flash 0x0 heltec_v4_tft_companion_radio_ble-v1.18.0-ua.4-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 heltec_v4_tft_companion_radio_ble-v1.18.0-ua.4.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
1d92a32527fc7baaa01e79b9b5c00198c1d2bffb5858d3cde54b5779c41559f9  heltec_v4_tft_companion_radio_ble-v1.18.0-ua.4-merged.bin
d23997848e7e7e21b4dce6c2c7a2415d8b65e0c2926b268acae3528b8cdc2583  heltec_v4_tft_companion_radio_ble-v1.18.0-ua.4.bin
fd69159c0d2519e8c36551bf3adac274452b2815a0c33912efabdca931a20c2c  heltec_v4_tft_companion_radio_gateway-v1.18.0-ua.4-merged.bin
b4c756b4a489d9c0c89491e07681a0d4e152df7d6292f6615a7bf108752bc23d  heltec_v4_tft_companion_radio_gateway-v1.18.0-ua.4.bin
6e9bf293044ae1ec85569122a9efeaef6c714b0366fe42eafb9d7104ab9c2102  heltec_v4_tft_companion_radio_usb-v1.18.0-ua.4-merged.bin
5666797ec5587e8d6657d90436150de994f7606035e0240c2ce51f2268bffb89  heltec_v4_tft_companion_radio_usb-v1.18.0-ua.4.bin
3accabf506582fc5c1c0850bbf800899eb547c34028f0e547166ee8cbc0f8eb6  heltec_v4_tft_repeater-v1.18.0-ua.4-merged.bin
e3ad0497c74b2fafde286a549e8ea2e2f4fb2b23e3c4007ad3befa17a622fd67  heltec_v4_tft_repeater-v1.18.0-ua.4.bin
525e6ec64c3cd8620f9eb965b9f0ecbad3e2bd3af10c2b96ad1474da6cfa07c2  heltec_v4_tft_room_server-v1.18.0-ua.4-merged.bin
a17ba40df9abbee59eae23b02f0ffa619c01e06b50447a3bf0b1efd8ca587d9b  heltec_v4_tft_room_server-v1.18.0-ua.4.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
