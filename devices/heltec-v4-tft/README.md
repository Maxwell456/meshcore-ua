# Heltec WiFi LoRa 32 V4 — з tft-екраном

ESP32 · MeshCore Україна **1.18.0-ua.1** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.1](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.1)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/bluetooth/heltec_v4_tft_companion_radio_ble-v1.18.0-ua.1-merged.bin) · 1,3 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/bluetooth/heltec_v4_tft_companion_radio_ble-v1.18.0-ua.1.bin) · 1,2 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/usb/heltec_v4_tft_companion_radio_usb-v1.18.0-ua.1-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/usb/heltec_v4_tft_companion_radio_usb-v1.18.0-ua.1.bin) · 0,6 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/repeater/heltec_v4_tft_repeater-v1.18.0-ua.1-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/repeater/heltec_v4_tft_repeater-v1.18.0-ua.1.bin) · 1,1 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/room-server/heltec_v4_tft_room_server-v1.18.0-ua.1-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/room-server/heltec_v4_tft_room_server-v1.18.0-ua.1.bin) · 1,1 МБ |

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
   esptool.py write_flash 0x0 heltec_v4_tft_companion_radio_ble-v1.18.0-ua.1-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 heltec_v4_tft_companion_radio_ble-v1.18.0-ua.1.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
d501f4c98da1930f7565906d96318d9d4e5f6f798b56ec60229818ff34b5d10c  heltec_v4_tft_companion_radio_ble-v1.18.0-ua.1-merged.bin
292c4b340c8f0cc7d85a1e0447f0a94cb27bb1b415ab62860d3c8f84ae00a14e  heltec_v4_tft_companion_radio_ble-v1.18.0-ua.1.bin
228b3b60058251e230b239351120157949ff8fce89b496a6ddc66cf3d4ba7025  heltec_v4_tft_companion_radio_usb-v1.18.0-ua.1-merged.bin
c3b33e10ac0802fd122c2482f6e2f27ef0a3e52692bdd45024521176274eab12  heltec_v4_tft_companion_radio_usb-v1.18.0-ua.1.bin
030deb5fd48a6fb4c831ef8b4700a3935f80ffd011e6b315f51013b890e53061  heltec_v4_tft_repeater-v1.18.0-ua.1-merged.bin
cd9efe76760fb5767239a516c093239557eea8f4a7627d3ae524f3e65ae86b2b  heltec_v4_tft_repeater-v1.18.0-ua.1.bin
92c6e95a458f1abe5ae05180aede6ffbb687cc083eaca783c9d7ad4ff589bce8  heltec_v4_tft_room_server-v1.18.0-ua.1-merged.bin
18b299d569bfe705b3d8dd24b58ec56f1577143848fcbec37fa25c3935821e79  heltec_v4_tft_room_server-v1.18.0-ua.1.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
