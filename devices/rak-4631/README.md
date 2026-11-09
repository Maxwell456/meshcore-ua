# RAK Wireless WisBlock RAK4631

nRF52 · MeshCore Україна **1.18.0-ua.3** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.3](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.3)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/bluetooth/RAK_4631_companion_radio_ble-v1.18.0-ua.3.uf2) · 0,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/bluetooth/RAK_4631_companion_radio_ble-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/usb/RAK_4631_companion_radio_usb-v1.18.0-ua.3.uf2) · 0,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/usb/RAK_4631_companion_radio_usb-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/repeater/RAK_4631_repeater-v1.18.0-ua.3.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/repeater/RAK_4631_repeater-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/room-server/RAK_4631_room_server-v1.18.0-ua.3.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/room-server/RAK_4631_room_server-v1.18.0-ua.3.zip) · 0,4 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `RAK_4631_companion_radio_ble-v1.18.0-ua.3.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package RAK_4631_companion_radio_ble-v1.18.0-ua.3.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
fed928aad043e4a6028f358ac84c7a513824a413dd015d54a2f8e2b2a0da1d2d  RAK_4631_companion_radio_ble-v1.18.0-ua.3.uf2
16e509d882662a8de670f23e775c359671d5ff59dd67f4e0883d5092dd4cd101  RAK_4631_companion_radio_ble-v1.18.0-ua.3.zip
ce2ff94c3833a00cee59fe859e32a3ed2572db6fb74a307bb953b25bde7c3d1e  RAK_4631_companion_radio_usb-v1.18.0-ua.3.uf2
4c5bfe8db79837fc489675d3c8c06001b5cc6bc59812efd6f183c9156a68c675  RAK_4631_companion_radio_usb-v1.18.0-ua.3.zip
ae6856cf144de6d0f4d5fe7e5e85d04e2e0be037977e8cc02e5c1523e5a89503  RAK_4631_repeater-v1.18.0-ua.3.uf2
c0b1f1f2b96a77b59a7cdff27ecd78cd604abbcf15585ce31aab2123e32f99eb  RAK_4631_repeater-v1.18.0-ua.3.zip
e1a3117b83fc8c5d60569afcc46cf9eac3da80d27fbe702305de5dd38ce05701  RAK_4631_room_server-v1.18.0-ua.3.uf2
87aefab3fdb6ca64747a10a0d1f808a1168e6c56da047a27d4026e758691de60  RAK_4631_room_server-v1.18.0-ua.3.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
