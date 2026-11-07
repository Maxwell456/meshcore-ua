# RAK Wireless WisBlock RAK4631

nRF52 · MeshCore Україна **1.18.0-ua.1** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.1](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.1)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/bluetooth/RAK_4631_companion_radio_ble-v1.18.0-ua.1.uf2) · 0,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/bluetooth/RAK_4631_companion_radio_ble-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/usb/RAK_4631_companion_radio_usb-v1.18.0-ua.1.uf2) · 0,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/usb/RAK_4631_companion_radio_usb-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/repeater/RAK_4631_repeater-v1.18.0-ua.1.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/repeater/RAK_4631_repeater-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/room-server/RAK_4631_room_server-v1.18.0-ua.1.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/room-server/RAK_4631_room_server-v1.18.0-ua.1.zip) · 0,4 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `RAK_4631_companion_radio_ble-v1.18.0-ua.1.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package RAK_4631_companion_radio_ble-v1.18.0-ua.1.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
75e6646d8d7b47381efc8e9f40ba4379fa76f94d727f47d6652a48d1228ebc3a  RAK_4631_companion_radio_ble-v1.18.0-ua.1.uf2
e682c336c6a36c4a90074f499cc6d51cd97d4221e7c16ebbdf9ec9b59a25bfce  RAK_4631_companion_radio_ble-v1.18.0-ua.1.zip
7d4ff070e01b75ddfe8e6f0ed6ef22d2de694af1816d51ce1694cbc6fc018a17  RAK_4631_companion_radio_usb-v1.18.0-ua.1.uf2
f35a29f326d49e83237bac46d34d7a94e0929fb9aa5cffedcfbafee728b7d7b8  RAK_4631_companion_radio_usb-v1.18.0-ua.1.zip
ca5c4a211cb48c9849de6f5198b97d91b38f3478d3fc0e4b9998f48bacadd853  RAK_4631_repeater-v1.18.0-ua.1.uf2
e45c2b7965a2dfde57467fef6e5bd32f109e7c5a641889e56e707bef11567e98  RAK_4631_repeater-v1.18.0-ua.1.zip
8fa6c30ac39df0b2289e6ea6bc6b0af3470c09089f82203340ab19cf89e9e41c  RAK_4631_room_server-v1.18.0-ua.1.uf2
5496650bac289aa5b806159e825675869aabca97c010e59c93849252d3202e51  RAK_4631_room_server-v1.18.0-ua.1.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
