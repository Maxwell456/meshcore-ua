# Heltec Mesh Node T114 — без екрана

nRF52 · MeshCore Україна **1.18.0-ua.1** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.1](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.1)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/bluetooth/Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/bluetooth/Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/usb/Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/usb/Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/repeater/Heltec_t114_without_display_repeater-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/repeater/Heltec_t114_without_display_repeater-v1.18.0-ua.1.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/room-server/Heltec_t114_without_display_room_server-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114-without-display/room-server/Heltec_t114_without_display_room_server-v1.18.0-ua.1.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.1.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.1.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
a69b1da9c42ecb9eda741c3e3af9f29189bdf93446ab8fd667ab0aa258e2edbc  Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.1.uf2
07ba312c2abdfa76eedd4c17e3cb1ed63bcda77c6cb5c512d81476c1527a095b  Heltec_t114_without_display_companion_radio_ble-v1.18.0-ua.1.zip
3fecb8cca242739318b6f94a488eabbf913b332a8af62c93acb513f990054f01  Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.1.uf2
8c470eb28819fc346faedcf9c2d40cc736ea14c74d1c8fb41bc1405e30fe7053  Heltec_t114_without_display_companion_radio_usb-v1.18.0-ua.1.zip
47ec8216f0c243a73d69d898f6222f03c8b7fc2e6b1ba7145cefadc976e39ac3  Heltec_t114_without_display_repeater-v1.18.0-ua.1.uf2
c6411709dd383913220dd4b84640447c7d39cba432ac93fdfbe5a0ca299719db  Heltec_t114_without_display_repeater-v1.18.0-ua.1.zip
1b6dfd5552d6637ae9d93287335372f54c0e79558414586e2cbbedc9bba5af15  Heltec_t114_without_display_room_server-v1.18.0-ua.1.uf2
ef180f547a32c423d2a66b6921175770cb418671a303d19cb9fe9847f33d9740  Heltec_t114_without_display_room_server-v1.18.0-ua.1.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
