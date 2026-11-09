# Seeed Studio Wio Tracker L1

nRF52 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/bluetooth/WioTrackerL1_companion_radio_ble-v1.18.0-ua.4.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/bluetooth/WioTrackerL1_companion_radio_ble-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/usb/WioTrackerL1_companion_radio_usb-v1.18.0-ua.4.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/usb/WioTrackerL1_companion_radio_usb-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/repeater/WioTrackerL1_repeater-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/repeater/WioTrackerL1_repeater-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/room-server/WioTrackerL1_room_server-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/room-server/WioTrackerL1_room_server-v1.18.0-ua.4.zip) · 0,4 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `WioTrackerL1_companion_radio_ble-v1.18.0-ua.4.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package WioTrackerL1_companion_radio_ble-v1.18.0-ua.4.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
28f1ab9979839a97f5975d7d23979b8ad711ad4d68fc92e503347c9ddf2cb9cb  WioTrackerL1_companion_radio_ble-v1.18.0-ua.4.uf2
997712004d6728b75a5a75db88443d58b3bdbd4d511c3310729454778596c30f  WioTrackerL1_companion_radio_ble-v1.18.0-ua.4.zip
90558a1ea3e6426f610d6d851fa54a4004802b6369cba1f75791053c6fd2621f  WioTrackerL1_companion_radio_usb-v1.18.0-ua.4.uf2
09ba9f3114492ddab0a2ee78b59205de3af6f1613aeda33e51ca83ca4a929468  WioTrackerL1_companion_radio_usb-v1.18.0-ua.4.zip
13f44e1d88b3731d222d91d3282bdbe0f5d2046236c037f55b234e191d611660  WioTrackerL1_repeater-v1.18.0-ua.4.uf2
f2ea1eb45bc5db87ca9c59453d006474c036b94ec128151fb487754a0d3e52e2  WioTrackerL1_repeater-v1.18.0-ua.4.zip
ee3171c32203468591e163422e3f11475811b9d543e9cc0cf8ae01b2198f7d29  WioTrackerL1_room_server-v1.18.0-ua.4.uf2
d4488a337b7552fdcda3b7794401f1c32f98628fa4c9730220d4c5a37f466084  WioTrackerL1_room_server-v1.18.0-ua.4.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
