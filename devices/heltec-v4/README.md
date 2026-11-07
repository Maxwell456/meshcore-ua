# Heltec WiFi LoRa 32 V4

ESP32 · MeshCore Україна **1.18.0-ua.1** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.1](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.1)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/bluetooth/heltec_v4_companion_radio_ble-v1.18.0-ua.1-merged.bin) · 1,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/bluetooth/heltec_v4_companion_radio_ble-v1.18.0-ua.1.bin) · 1,6 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/usb/heltec_v4_companion_radio_usb-v1.18.0-ua.1-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/usb/heltec_v4_companion_radio_usb-v1.18.0-ua.1.bin) · 0,6 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/repeater/heltec_v4_repeater-v1.18.0-ua.1-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/repeater/heltec_v4_repeater-v1.18.0-ua.1.bin) · 1,1 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/room-server/heltec_v4_room_server-v1.18.0-ua.1-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/room-server/heltec_v4_room_server-v1.18.0-ua.1.bin) · 1,1 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

**Нова установка** — для нового пристрою або переходу з іншої прошивки. **Оновлення** — якщо на платі вже MeshCore і налаштування треба зберегти.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

1. Встановіть esptool: `pip install esptool`.
2. Підключіть плату кабелем для даних. Якщо порт не з’являється — затисніть кнопку BOOT і натисніть RST.
3. **Нова установка** (стирає налаштування, ключі й контакти; налаштування мережі застосуються одразу):
   ```sh
   esptool.py erase_flash
   esptool.py write_flash 0x0 heltec_v4_companion_radio_ble-v1.18.0-ua.1-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 heltec_v4_companion_radio_ble-v1.18.0-ua.1.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
d9d556f1ed8f5d9fa4d8bd99d28611a8265ad2fc3edeafa0ae65f376c6943965  heltec_v4_companion_radio_ble-v1.18.0-ua.1-merged.bin
f092794bd0cdc0dfb90ca6fd3cea956564a45a3f14425f60911ef58dd6e1eaeb  heltec_v4_companion_radio_ble-v1.18.0-ua.1.bin
fd4f4f20d4dc688ac20c629bb2fb230bcdb4b506b787cf4c0d8044f35c31721e  heltec_v4_companion_radio_usb-v1.18.0-ua.1-merged.bin
27f6478f953f72a1ee5a14f55ccefc41bcc447e4fea57ca4105aad3737895765  heltec_v4_companion_radio_usb-v1.18.0-ua.1.bin
716eecc6d973f7b8239547e4bfdf3cfa971a044eac022c901e5ea163d20c6285  heltec_v4_repeater-v1.18.0-ua.1-merged.bin
2916c95d9d69594d42934e0403474068bd35f98e1ccdfa50fb688f969e58f817  heltec_v4_repeater-v1.18.0-ua.1.bin
4883a5989263881a14471a14663d31c6711d9cf990baa27b268f4d462fb9569e  heltec_v4_room_server-v1.18.0-ua.1-merged.bin
da754397b6600f8e4c7bce1e690e6bffe9b3f0acdddb2d7811fd93d1a2768579  heltec_v4_room_server-v1.18.0-ua.1.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
