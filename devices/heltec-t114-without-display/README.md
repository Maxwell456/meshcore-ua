# Heltec Mesh Node T114 — без екрана

nRF52 · MeshCore Україна **1.18.0-ua.3** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.3](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.3)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/bluetooth/Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/bluetooth/Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/usb/Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/usb/Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/repeater/Heltec_t114_without_display_repeater-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/repeater/Heltec_t114_without_display_repeater-v1.18.0-ua.3.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/room-server/Heltec_t114_without_display_room_server-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/room-server/Heltec_t114_without_display_room_server-v1.18.0-ua.3.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.3.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.3.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
a1b005f0bdf6f4e6e1b49028e031b84cfd62cba0a1f701ef15d4f6d24c4ccc89  Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.3.uf2
477457ada1841f965cf147af929770c9bf0a2f85c22bc9dfd700a7e5342bdd59  Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.3.zip
0c0d6e5d37c9013eeb3e9c593836ddc6d24400c767a11a7da245901900353518  Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.3.uf2
3220b63937cd04ce50071f6d7dc43357adb6248fdf29e7fcf1e3ca0d683fd595  Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.3.zip
62ee0f9579e8a43e8b1013cdb9ae0d65c70d9826e27960da141971a6176329d4  Heltec_t114_without_display_repeater-v1.18.0-ua.3.uf2
2e51ca5ee7e29058066200042620cf112f694c2127cbdc6fdeef48f84d09195f  Heltec_t114_without_display_repeater-v1.18.0-ua.3.zip
a1d14381de188e48fb3db4f84b7669eaf882beefd4377c5bbeac3bce71c14c7b  Heltec_t114_without_display_room_server-v1.18.0-ua.3.uf2
bc5c78a7708ea5d45bbb28b56c0c196d9b0ec42b3749fb9844658b465be5ffc8  Heltec_t114_without_display_room_server-v1.18.0-ua.3.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
