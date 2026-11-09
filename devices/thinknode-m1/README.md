# Elecrow ThinkNode M1

nRF52 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/bluetooth/ThinkNode_M1_companion_radio_ble-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/bluetooth/ThinkNode_M1_companion_radio_ble-v1.18.0-ua.4.zip) · 0,3 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/usb/ThinkNode_M1_companion_radio_usb-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/usb/ThinkNode_M1_companion_radio_usb-v1.18.0-ua.4.zip) · 0,3 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/repeater/ThinkNode_M1_repeater-v1.18.0-ua.4.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/repeater/ThinkNode_M1_repeater-v1.18.0-ua.4.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/room-server/ThinkNode_M1_room_server-v1.18.0-ua.4.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/room-server/ThinkNode_M1_room_server-v1.18.0-ua.4.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `ThinkNode_M1_companion_radio_ble-v1.18.0-ua.4.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package ThinkNode_M1_companion_radio_ble-v1.18.0-ua.4.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
ca79af5499358d01b9f718555caa1163909e3d09d489cdb2f1c081139c65c8d0  ThinkNode_M1_companion_radio_ble-v1.18.0-ua.4.uf2
1ad49f15eb70a4faae4152a1a53fe35ee80852e5bdf0b29f6fe0fdc6b67b3526  ThinkNode_M1_companion_radio_ble-v1.18.0-ua.4.zip
eda43b53d69bbb034803b8491801fd17bc4f7efb0efa6a7e17227701ff42e592  ThinkNode_M1_companion_radio_usb-v1.18.0-ua.4.uf2
97248a7e81a87f1e8b380cde5a8264c31a54e939b01db318153e8190de39c403  ThinkNode_M1_companion_radio_usb-v1.18.0-ua.4.zip
cfdaf518ccd4a5aab95012b0138e99e3bb039beaf517675eb4f626d6e4527c8c  ThinkNode_M1_repeater-v1.18.0-ua.4.uf2
a185dc4f80831d5ea76e9080e042a2f3698b1fa0882251eb4718d6b6a35ac41f  ThinkNode_M1_repeater-v1.18.0-ua.4.zip
07587e2c4099c5ac6da2d3e1e7c025f97e9bae7bad45a1551450b18676299c5f  ThinkNode_M1_room_server-v1.18.0-ua.4.uf2
49aca26e840786344b2564bf3988063c395b3cf645ff480f585c823ae0404a78  ThinkNode_M1_room_server-v1.18.0-ua.4.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
