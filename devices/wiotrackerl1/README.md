# Seeed Studio Wio Tracker L1

nRF52 · MeshCore Україна **1.18.0-ua.3** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.3](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.3)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/bluetooth/WioTrackerL1_companion_radio_ble-v1.18.0-ua.3.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/bluetooth/WioTrackerL1_companion_radio_ble-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/usb/WioTrackerL1_companion_radio_usb-v1.18.0-ua.3.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/usb/WioTrackerL1_companion_radio_usb-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/repeater/WioTrackerL1_repeater-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/repeater/WioTrackerL1_repeater-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/room-server/WioTrackerL1_room_server-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/room-server/WioTrackerL1_room_server-v1.18.0-ua.3.zip) · 0,4 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `WioTrackerL1_companion_radio_ble-v1.18.0-ua.3.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package WioTrackerL1_companion_radio_ble-v1.18.0-ua.3.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
7d69fbe84ece00762d30b41c18f23a9634f8a34ccc23437cb37ececbfccddcf3  WioTrackerL1_companion_radio_ble-v1.18.0-ua.3.uf2
319bbee61ce94da53ab1cb597f1ebf4fa68b58db681fc20e415b797438046a62  WioTrackerL1_companion_radio_ble-v1.18.0-ua.3.zip
b3f9f21d4892cfb787ead6ba1496bd3e904d2095e7e0c80764f9fdaeddb1a607  WioTrackerL1_companion_radio_usb-v1.18.0-ua.3.uf2
e44beb9964d379c3258872cab4e637e6c6dde4f31eecadac64fdca2c913ddc0f  WioTrackerL1_companion_radio_usb-v1.18.0-ua.3.zip
21b81ccf688290c9a16f84a7d07a28e1cdc76ebf3346d3b62e2680b3fc4bf077  WioTrackerL1_repeater-v1.18.0-ua.3.uf2
456f3790ff5d17694542c45d09fa81e1f0496cbd8b8bcd4b1dae522647f5f9e1  WioTrackerL1_repeater-v1.18.0-ua.3.zip
f3c103dd3ad0f49e0df563180a73a0a495f85d6bc4353b3ef7e445911935f792  WioTrackerL1_room_server-v1.18.0-ua.3.uf2
2c96eb126858e5c762983628a0accc55bed9179bbef6a34ed4b768bab4ace545  WioTrackerL1_room_server-v1.18.0-ua.3.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
