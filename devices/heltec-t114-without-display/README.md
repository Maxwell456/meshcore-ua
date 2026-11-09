# Heltec Mesh Node T114 — без екрана

nRF52 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/bluetooth/Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/bluetooth/Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/usb/Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/usb/Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/repeater/Heltec_t114_without_display_repeater-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/repeater/Heltec_t114_without_display_repeater-v1.18.0-ua.2.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/room-server/Heltec_t114_without_display_room_server-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/room-server/Heltec_t114_without_display_room_server-v1.18.0-ua.2.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.2.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.2.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
e75b8ac1eba5e2c6e391b3f07332f250db0eb0df186b54618ce351c8264f35c9  Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.2.uf2
601dcb048fe8a7380a45eb1df8aa78313b2318ce821470f57ea4f883cb2b1fdf  Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.2.zip
37961afeeb180aa7d4695968cc9ab9c86bd0f5b03d43b3c349f82b295a374f9f  Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.2.uf2
16a3e0dfb7c5f16a56fe54b3f50cb30e7e65b2c6f01fd1a9c0e8b5020f6285b2  Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.2.zip
6aecc17f6499ee4dddb1a1167b0f0291f3d042fbfe644bf201581f923b82cff1  Heltec_t114_without_display_repeater-v1.18.0-ua.2.uf2
a140d0abb32513fbdb8f1bae3b7c69aec10cdbbe2452b3c1eab055481d88ba33  Heltec_t114_without_display_repeater-v1.18.0-ua.2.zip
14bdf15856cb3a4bc2a61b9eaeaa7d30272e8730b2efed87b619717a15a3a9a8  Heltec_t114_without_display_room_server-v1.18.0-ua.2.uf2
d7dfff03021af21ac9e51d7c6d6534104b0c0d8885d3dc6632ab66367a1816ba  Heltec_t114_without_display_room_server-v1.18.0-ua.2.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
