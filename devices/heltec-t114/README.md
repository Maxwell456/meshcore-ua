# Heltec Mesh Node T114

nRF52 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/bluetooth/Heltec_t114_companion_radio_ble-v1.18.0-ua.2.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/bluetooth/Heltec_t114_companion_radio_ble-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/usb/Heltec_t114_companion_radio_usb-v1.18.0-ua.2.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/usb/Heltec_t114_companion_radio_usb-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/repeater/Heltec_t114_repeater-v1.18.0-ua.2.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/repeater/Heltec_t114_repeater-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/room-server/Heltec_t114_room_server-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/room-server/Heltec_t114_room_server-v1.18.0-ua.2.zip) · 0,4 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `Heltec_t114_companion_radio_ble-v1.18.0-ua.2.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package Heltec_t114_companion_radio_ble-v1.18.0-ua.2.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
17bcc42617ce02ec8bbcc469484f2da31a4c9daa75e01f067aef84e6e4b030ff  Heltec_t114_companion_radio_ble-v1.18.0-ua.2.uf2
7116dab8b98ffbe5113cdcfb0030879b19644a643436f70793bf5b4cc3d3f810  Heltec_t114_companion_radio_ble-v1.18.0-ua.2.zip
3874a25f058b5ff31bb540a24bf7d434e3abcd3e4563076b328923bb3d66f784  Heltec_t114_companion_radio_usb-v1.18.0-ua.2.uf2
9ed2dc33ef38c51f037750b51919103b17c6a0fd54e55c78b8248f9e845294d6  Heltec_t114_companion_radio_usb-v1.18.0-ua.2.zip
7d35dae19cf290324fd6dff17083cd69937fd03546fbb79fef18a65cdcd834b4  Heltec_t114_repeater-v1.18.0-ua.2.uf2
6ab1f9c6ec6bb1cf0e710894d39b2bae69c77d1da08c3932a6979c7657fe0e51  Heltec_t114_repeater-v1.18.0-ua.2.zip
e792dab9df1b182c9119cc189aa599d760119eb25c57e94ed0609d7d1514c664  Heltec_t114_room_server-v1.18.0-ua.2.uf2
ff69b44cec020daa70c1a4c6b699c8f8fc178ea73d6a72a1f240086e65f03689  Heltec_t114_room_server-v1.18.0-ua.2.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
