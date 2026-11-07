# Heltec WiFi LoRa 32 V3

ESP32 · MeshCore Україна **1.18.0-ua.1** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.1](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.1)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон Bluetooth** ✓<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/bluetooth/Heltec_v3_companion_radio_ble-v1.18.0-ua.1-merged.bin) · 1,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/bluetooth/Heltec_v3_companion_radio_ble-v1.18.0-ua.1.bin) · 1,6 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/usb/Heltec_v3_companion_radio_usb-v1.18.0-ua.1-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/usb/Heltec_v3_companion_radio_usb-v1.18.0-ua.1.bin) · 0,6 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/repeater/Heltec_v3_repeater-v1.18.0-ua.1-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/repeater/Heltec_v3_repeater-v1.18.0-ua.1.bin) · 1,1 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/room-server/Heltec_v3_room_server-v1.18.0-ua.1-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/room-server/Heltec_v3_room_server-v1.18.0-ua.1.bin) · 1,1 МБ |

✓ — перевірено на фізичному пристрої.

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
   esptool.py write_flash 0x0 Heltec_v3_companion_radio_ble-v1.18.0-ua.1-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 Heltec_v3_companion_radio_ble-v1.18.0-ua.1.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
3bc6b1addab9c5b3fb981caff4f38e5db75428135b8383caa9d1a5c9e746a01f  Heltec_v3_companion_radio_ble-v1.18.0-ua.1-merged.bin
f446352c88d2679a8356b79e337cb1f0443783d76d7c04459993f185b935a3fc  Heltec_v3_companion_radio_ble-v1.18.0-ua.1.bin
6cc26942459dee37a6d3442fe7ffc496c7d2ab442965ab9460ef15187cd8cf6a  Heltec_v3_companion_radio_usb-v1.18.0-ua.1-merged.bin
281b3090fc6dcbe5d6798d47dc80e419bd0614e0cb605788cd473ffaa5ed7d68  Heltec_v3_companion_radio_usb-v1.18.0-ua.1.bin
94634b1fe316b735b760796a5c70678c23ce59d0efd77b3cce33ae96f4cfd004  Heltec_v3_repeater-v1.18.0-ua.1-merged.bin
e0fd9c4916d4802f837cc2f2c233d396bbae403c472f3da6d64200e59e547273  Heltec_v3_repeater-v1.18.0-ua.1.bin
802ddafe46415ccce125d7cca8c34dbd5fa3ee2c18d54ffce5fae64a09fcf024  Heltec_v3_room_server-v1.18.0-ua.1-merged.bin
c3373954ce7f631aef864c64d82a508eeff236f9d5c69dfc95b923181604f022  Heltec_v3_room_server-v1.18.0-ua.1.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
