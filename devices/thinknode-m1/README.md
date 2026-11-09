# Elecrow ThinkNode M1

nRF52 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/bluetooth/ThinkNode_M1_companion_radio_ble-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/bluetooth/ThinkNode_M1_companion_radio_ble-v1.18.0-ua.2.zip) · 0,3 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/usb/ThinkNode_M1_companion_radio_usb-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/usb/ThinkNode_M1_companion_radio_usb-v1.18.0-ua.2.zip) · 0,3 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/repeater/ThinkNode_M1_repeater-v1.18.0-ua.2.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/repeater/ThinkNode_M1_repeater-v1.18.0-ua.2.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/room-server/ThinkNode_M1_room_server-v1.18.0-ua.2.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/room-server/ThinkNode_M1_room_server-v1.18.0-ua.2.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `ThinkNode_M1_companion_radio_ble-v1.18.0-ua.2.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package ThinkNode_M1_companion_radio_ble-v1.18.0-ua.2.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
523e9cc3bfca0903002f21f6a5330501146a468b1f7daf245e7c9a3d6768ed46  ThinkNode_M1_companion_radio_ble-v1.18.0-ua.2.uf2
35659fc651e17111431934297b9ffc823a739087a097e91bb1bb4f44940f1ecf  ThinkNode_M1_companion_radio_ble-v1.18.0-ua.2.zip
78fcb0d478ecc9f03937517a71032edda603f45f30fc104bd6dc1c287bee23c0  ThinkNode_M1_companion_radio_usb-v1.18.0-ua.2.uf2
483a721a2a1d3a573fc6caf5a5d71a357238e65dda773da85a3fbd9cade3efba  ThinkNode_M1_companion_radio_usb-v1.18.0-ua.2.zip
fabef07ba88667a1cda84b359d5520a57b23881e9e61ef388e9f5cb2994262a9  ThinkNode_M1_repeater-v1.18.0-ua.2.uf2
7d161a8914340a18e6b8b70ef8fa687ba315faceb985d5c3e35f91ffa5d3de20  ThinkNode_M1_repeater-v1.18.0-ua.2.zip
56acd18cf7fdda265ea6e6ec365f5e17b09bc72c53d3833cbc5b515776946b23  ThinkNode_M1_room_server-v1.18.0-ua.2.uf2
ea46bfa987e04de21b4917272100ca01fe7b68c05e73a494858979868585be44  ThinkNode_M1_room_server-v1.18.0-ua.2.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
