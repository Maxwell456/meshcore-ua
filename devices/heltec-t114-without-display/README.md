# Heltec Mesh Node T114 — без екрана

nRF52 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/bluetooth/Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/bluetooth/Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/usb/Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/usb/Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/repeater/Heltec_t114_without_display_repeater-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/repeater/Heltec_t114_without_display_repeater-v1.18.0-ua.4.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/room-server/Heltec_t114_without_display_room_server-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/room-server/Heltec_t114_without_display_room_server-v1.18.0-ua.4.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.4.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.4.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
23e527ef8f2e2f21e20c3cea9348b2f66bcb066174d499528bb1bffe0ace0210  Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.4.uf2
7d900ae7b30ba0acd7bbad4126a977b0d7ad6982eacf392a769d25b6cfc33919  Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.4.zip
a4841935ec137756affac15600b47a7ba178cc16cfb138d650cf3475921434da  Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.4.uf2
240865b28c9a4c669a22b7b32096e49ffa7825e735a45008ee04b6cf6d3ce003  Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.4.zip
e64065679f138922db07e37ac5fd690bed14aba310b91441263d37828bbb81e6  Heltec_t114_without_display_repeater-v1.18.0-ua.4.uf2
f763730b546e7dacc8ae7a6cabb5189a6291a719a22d14b72403db6a5fd94241  Heltec_t114_without_display_repeater-v1.18.0-ua.4.zip
e4b706034c8c55bc9e5548475e5777d76992101c5fdb23f1e38f8e7ffccc330a  Heltec_t114_without_display_room_server-v1.18.0-ua.4.uf2
bcddb48ac4f5bab2874d4b18094b3e761fd49ac4cd3ed9cd80a2ff59951440df  Heltec_t114_without_display_room_server-v1.18.0-ua.4.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
