# Seeed Studio Wio Tracker L1

nRF52 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/bluetooth/WioTrackerL1_companion_radio_ble-v1.18.0-ua.2.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/bluetooth/WioTrackerL1_companion_radio_ble-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/usb/WioTrackerL1_companion_radio_usb-v1.18.0-ua.2.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/usb/WioTrackerL1_companion_radio_usb-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/repeater/WioTrackerL1_repeater-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/repeater/WioTrackerL1_repeater-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/room-server/WioTrackerL1_room_server-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/room-server/WioTrackerL1_room_server-v1.18.0-ua.2.zip) · 0,4 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `WioTrackerL1_companion_radio_ble-v1.18.0-ua.2.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package WioTrackerL1_companion_radio_ble-v1.18.0-ua.2.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
484da370e62cf8511c113d5ab50466079f1b7e4f9f173fb8b79877ff6e4a1aeb  WioTrackerL1_companion_radio_ble-v1.18.0-ua.2.uf2
b5f65445c0566394f2fc311715058f4812d66db903e742a70cff298940ca6ae4  WioTrackerL1_companion_radio_ble-v1.18.0-ua.2.zip
5c63aa25746f8e2d0d36aa636f74fc9cc6023795cb1fce93585ede58134423ea  WioTrackerL1_companion_radio_usb-v1.18.0-ua.2.uf2
39d558c2435ebc91bace872eddccbb2063b40a46099d0adedaf60330b3507870  WioTrackerL1_companion_radio_usb-v1.18.0-ua.2.zip
91f3c8ba7c55b9f9b24d3524b42e8dcbafd20b5f333ebb25bd2a6ac75ce6889b  WioTrackerL1_repeater-v1.18.0-ua.2.uf2
9c4415a06206251caedf5eebe58304691649ea33a14e6ab5d2767ac2cc4be436  WioTrackerL1_repeater-v1.18.0-ua.2.zip
5c21e2336f65b21ef55e715142547cbaa454ea392dcfe05306397fe8a6e9ebda  WioTrackerL1_room_server-v1.18.0-ua.2.uf2
a8e3655b6f3f95eeb85bb721180ee3f7f75b662b658d5c4f1c472bf900001066  WioTrackerL1_room_server-v1.18.0-ua.2.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
