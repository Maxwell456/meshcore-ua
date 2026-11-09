# Heltec Mesh Node T114

nRF52 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/bluetooth/Heltec_t114_companion_radio_ble-v1.18.0-ua.4.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/bluetooth/Heltec_t114_companion_radio_ble-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/usb/Heltec_t114_companion_radio_usb-v1.18.0-ua.4.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/usb/Heltec_t114_companion_radio_usb-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/repeater/Heltec_t114_repeater-v1.18.0-ua.4.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/repeater/Heltec_t114_repeater-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/room-server/Heltec_t114_room_server-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/room-server/Heltec_t114_room_server-v1.18.0-ua.4.zip) · 0,4 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `Heltec_t114_companion_radio_ble-v1.18.0-ua.4.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package Heltec_t114_companion_radio_ble-v1.18.0-ua.4.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
a813a7acc628c69a7a8c98c0aa2fde5c37cb1b0a3f83216299340a156c1324a9  Heltec_t114_companion_radio_ble-v1.18.0-ua.4.uf2
1ee652c04695c91d81caa0a5778617cbd7138e0f5414d6861a001095e2e37cec  Heltec_t114_companion_radio_ble-v1.18.0-ua.4.zip
38b9856f188cb51c04dc77683dd597b9535acdd760a8f01b526dcc49b613387b  Heltec_t114_companion_radio_usb-v1.18.0-ua.4.uf2
ae813af20a0045976121f893707e1a52230137d4ae23ccdd9101998b7fb9133c  Heltec_t114_companion_radio_usb-v1.18.0-ua.4.zip
96dbf8d13786f48da5b2314e9e12d3f48b544c786e119e99c39529b1e2a6c3f2  Heltec_t114_repeater-v1.18.0-ua.4.uf2
e31140c267538c73281c99ff41739e1ff615930203284b09844e8fdc0b9bbbef  Heltec_t114_repeater-v1.18.0-ua.4.zip
bb69ed0f0fe1b8bee75ad9e353a7dbadaf71ba9e82d7e9eb276b91cd1136b821  Heltec_t114_room_server-v1.18.0-ua.4.uf2
c69e8e573b198dbcbc8b440c742150926c3535058102b4f34c5f6e474f8ce7ba  Heltec_t114_room_server-v1.18.0-ua.4.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
