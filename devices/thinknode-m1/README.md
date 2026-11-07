# Elecrow ThinkNode M1

nRF52 · MeshCore Україна **1.18.0-ua.1** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.1](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.1)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/bluetooth/ThinkNode_M1_companion_radio_ble-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/bluetooth/ThinkNode_M1_companion_radio_ble-v1.18.0-ua.1.zip) · 0,3 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/usb/ThinkNode_M1_companion_radio_usb-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/usb/ThinkNode_M1_companion_radio_usb-v1.18.0-ua.1.zip) · 0,3 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/repeater/ThinkNode_M1_repeater-v1.18.0-ua.1.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/repeater/ThinkNode_M1_repeater-v1.18.0-ua.1.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/room-server/ThinkNode_M1_room_server-v1.18.0-ua.1.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/room-server/ThinkNode_M1_room_server-v1.18.0-ua.1.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `ThinkNode_M1_companion_radio_ble-v1.18.0-ua.1.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package ThinkNode_M1_companion_radio_ble-v1.18.0-ua.1.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
d91515cc463ebe17dbf3c04d1d0b6cf35fc05b8730c3e1db7d9a85264ad50880  ThinkNode_M1_companion_radio_ble-v1.18.0-ua.1.uf2
f70efa52558b8c7f2855e706bedf5dcab51ba26a9ea8f2df6dfd296948dc476a  ThinkNode_M1_companion_radio_ble-v1.18.0-ua.1.zip
1512541efeda3c0dd0153ab1a30d4a419d34f6bab914646c65d7050b0e72eb8e  ThinkNode_M1_companion_radio_usb-v1.18.0-ua.1.uf2
b8f1df4fcb3ce3ba295e8b21257eb77c4716f4e9ea1fa795870b98cd2c4e9436  ThinkNode_M1_companion_radio_usb-v1.18.0-ua.1.zip
8717f314e47c74f3e3706f95f41a7ee00edf3805c77e6b0352791631d04c2aea  ThinkNode_M1_repeater-v1.18.0-ua.1.uf2
fb2e701f89b7341d17d525fa3aca9d973b86a9d0d195153f83658bd14900f52f  ThinkNode_M1_repeater-v1.18.0-ua.1.zip
45ec445c50dd49b2d443437c0a1458aed6c91457e9243d9e7052740dcc2d6b84  ThinkNode_M1_room_server-v1.18.0-ua.1.uf2
3447d8c7727f9082f89e04e59bfa75691d983470598e2c61a5833edd51ae539f  ThinkNode_M1_room_server-v1.18.0-ua.1.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
