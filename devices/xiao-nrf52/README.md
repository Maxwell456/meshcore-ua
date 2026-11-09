# Seeed Studio XIAO nRF52840 + Wio-SX1262

nRF52 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/bluetooth/Xiao_nrf52_companion_radio_ble-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/bluetooth/Xiao_nrf52_companion_radio_ble-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/usb/Xiao_nrf52_companion_radio_usb-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/usb/Xiao_nrf52_companion_radio_usb-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/repeater/Xiao_nrf52_repeater-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/repeater/Xiao_nrf52_repeater-v1.18.0-ua.4.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/room-server/Xiao_nrf52_room_server-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/room-server/Xiao_nrf52_room_server-v1.18.0-ua.4.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `Xiao_nrf52_companion_radio_ble-v1.18.0-ua.4.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package Xiao_nrf52_companion_radio_ble-v1.18.0-ua.4.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
ab0d86b3f6d64dce2243c007a2b7d846e71d32965b6504f48d1a821613f905ca  Xiao_nrf52_companion_radio_ble-v1.18.0-ua.4.uf2
e7fb4106b44dd62ef79d908b7f6b6ca6fedd116a6fba0aef3d079470ade07b3a  Xiao_nrf52_companion_radio_ble-v1.18.0-ua.4.zip
b230981372aa01925b324fc9b1bcce6cf1591cfebac7bece6aebfbdf5bb9cadf  Xiao_nrf52_companion_radio_usb-v1.18.0-ua.4.uf2
8af2376058e3d6729b51b73f5ae72d7b5fa4d5b2bd424f683e8d76b65fbe9a57  Xiao_nrf52_companion_radio_usb-v1.18.0-ua.4.zip
cf31e81736c75c769c5a1b7162bfb30576c702989e5a974bbf42a0fae7d6e61e  Xiao_nrf52_repeater-v1.18.0-ua.4.uf2
4bae939a41d6383e9d8d69e81a96c79f836da7dadd764ff07d3a55b3e9d80a43  Xiao_nrf52_repeater-v1.18.0-ua.4.zip
65c2422242c348e50ead57e85c1dc6b53be71de56064ae0214e804add9bed913  Xiao_nrf52_room_server-v1.18.0-ua.4.uf2
685fb76d55fecf874af66ab1db4723807e5e022364dd825f33f88fe35666397a  Xiao_nrf52_room_server-v1.18.0-ua.4.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
