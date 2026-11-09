# Heltec Mesh Node T114

nRF52 · MeshCore Україна **1.18.0-ua.3** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.3](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.3)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/bluetooth/Heltec_t114_companion_radio_ble-v1.18.0-ua.3.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/bluetooth/Heltec_t114_companion_radio_ble-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/usb/Heltec_t114_companion_radio_usb-v1.18.0-ua.3.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/usb/Heltec_t114_companion_radio_usb-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/repeater/Heltec_t114_repeater-v1.18.0-ua.3.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/repeater/Heltec_t114_repeater-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/room-server/Heltec_t114_room_server-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/room-server/Heltec_t114_room_server-v1.18.0-ua.3.zip) · 0,4 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `Heltec_t114_companion_radio_ble-v1.18.0-ua.3.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package Heltec_t114_companion_radio_ble-v1.18.0-ua.3.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
6ae0bfbd96ae69e6bfc03f019c813be3db462c6409e201c45b10eb4a22843671  Heltec_t114_companion_radio_ble-v1.18.0-ua.3.uf2
29af04ef3f1292e4f437b037564da9a22e67b5ca19176e71e833a892f5d1301b  Heltec_t114_companion_radio_ble-v1.18.0-ua.3.zip
612c2ab51d359ffe56b17fac6b2521364cab79e94e7612523b6326b070e63bf2  Heltec_t114_companion_radio_usb-v1.18.0-ua.3.uf2
c2c4e9878c6b483f32ae1c85791f7950b34994c1cf3b97e18fd13c5ffe675a54  Heltec_t114_companion_radio_usb-v1.18.0-ua.3.zip
c7b4c69b20f3a5ebe202739d287b808a3fb96ffd378bba314e8c1f3307caaaf5  Heltec_t114_repeater-v1.18.0-ua.3.uf2
75b20bbad6cb60595dfd4275bd01b905ee0333869b167ee652b74e1916acd524  Heltec_t114_repeater-v1.18.0-ua.3.zip
23cf5a3ab25852146ba4ac89b931fedca5eb3141aee9b12907b8b7ed9939a24f  Heltec_t114_room_server-v1.18.0-ua.3.uf2
a94a1be3cfc2120d8522e73fbc0aba2737a18d88543d2fdaafd66c9496c2df3c  Heltec_t114_room_server-v1.18.0-ua.3.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
