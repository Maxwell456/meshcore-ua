# Seeed Studio SenseCAP Solar Node P1 / P1 Pro

nRF52 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/bluetooth/SenseCap_Solar_companion_radio_ble-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/bluetooth/SenseCap_Solar_companion_radio_ble-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/usb/SenseCap_Solar_companion_radio_usb-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/usb/SenseCap_Solar_companion_radio_usb-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/repeater/SenseCap_Solar_repeater-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/repeater/SenseCap_Solar_repeater-v1.18.0-ua.2.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/room-server/SenseCap_Solar_room_server-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/room-server/SenseCap_Solar_room_server-v1.18.0-ua.2.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `SenseCap_Solar_companion_radio_ble-v1.18.0-ua.2.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package SenseCap_Solar_companion_radio_ble-v1.18.0-ua.2.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
ece759fc92c9eb8d3272a5fedd25c83149297f0f6660dd533a7b4c56bd826c5f  SenseCap_Solar_companion_radio_ble-v1.18.0-ua.2.uf2
18952f6beaa7e2e516df36b6030ad073c8beb43b2f6c6b5c4a8afda9ec98e5c8  SenseCap_Solar_companion_radio_ble-v1.18.0-ua.2.zip
4e9a7ac66cdc7599c4d2d9f3a01ed70b522c7d64e54926fe1374145fbb730230  SenseCap_Solar_companion_radio_usb-v1.18.0-ua.2.uf2
080c8add65d3a0f91cb65d75e34f867072de0ff63c8f997cb2e33038f3a1ecad  SenseCap_Solar_companion_radio_usb-v1.18.0-ua.2.zip
08330135ca2b2433afe322d516e06ba524d2ea85fb2685938da27051edb45e2c  SenseCap_Solar_repeater-v1.18.0-ua.2.uf2
d2d8fe02fa8ebf6a27fffd3dc4fe051669001f3473ccbd60f141ee8cd82f87dd  SenseCap_Solar_repeater-v1.18.0-ua.2.zip
c7452406862d0356a8dccb452627b78928dff4be4840407dd8de098e79e7cfca  SenseCap_Solar_room_server-v1.18.0-ua.2.uf2
675fa63918a4ae8372fe54f8c6bc1f12f341124f096278e89eba68cfee34294a  SenseCap_Solar_room_server-v1.18.0-ua.2.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
