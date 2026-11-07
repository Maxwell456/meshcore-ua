# Seeed Studio XIAO nRF52840 + Wio-SX1262

nRF52 · MeshCore Україна **1.18.0-ua.1** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.1](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.1)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/bluetooth/Xiao_nrf52_companion_radio_ble-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/bluetooth/Xiao_nrf52_companion_radio_ble-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/usb/Xiao_nrf52_companion_radio_usb-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/usb/Xiao_nrf52_companion_radio_usb-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/repeater/Xiao_nrf52_repeater-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/repeater/Xiao_nrf52_repeater-v1.18.0-ua.1.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/room-server/Xiao_nrf52_room_server-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/room-server/Xiao_nrf52_room_server-v1.18.0-ua.1.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `Xiao_nrf52_companion_radio_ble-v1.18.0-ua.1.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package Xiao_nrf52_companion_radio_ble-v1.18.0-ua.1.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
6380c55d3114d5b2c52dd6970ddc50bb19ef148a262593b338f63ea54e0f633b  Xiao_nrf52_companion_radio_ble-v1.18.0-ua.1.uf2
2899478afc5e85aee9b8bcdcea0b5e1d251cf70df23fef3f82632253b46bd0ea  Xiao_nrf52_companion_radio_ble-v1.18.0-ua.1.zip
67c1a9c7a6bccf38130cb3b83958dd50f66ac1ebdb4335366457a95564163448  Xiao_nrf52_companion_radio_usb-v1.18.0-ua.1.uf2
ca13eba69609d77d48ceaef4bb2d1b9bdcfc25a3699641565514cf09d0c0703a  Xiao_nrf52_companion_radio_usb-v1.18.0-ua.1.zip
ce14936c9b197c47748ab881a5583bbe18965ab1dd82b62e74fb58d993bbee40  Xiao_nrf52_repeater-v1.18.0-ua.1.uf2
1e5393201b6eee362a050b3ee4c2e27f710cc0d54114e8124ee4f7d92b35fff5  Xiao_nrf52_repeater-v1.18.0-ua.1.zip
862a2730c26cab5bfc5f05c629805c253ad5bbc2a18103a619d256d72a57958b  Xiao_nrf52_room_server-v1.18.0-ua.1.uf2
7b530c24c7b5a2d451eb1bdb9923167107a3cc12d99423af3cc5932df138fbf0  Xiao_nrf52_room_server-v1.18.0-ua.1.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
