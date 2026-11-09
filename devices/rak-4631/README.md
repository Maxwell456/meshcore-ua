# RAK Wireless WisBlock RAK4631

nRF52 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/bluetooth/RAK_4631_companion_radio_ble-v1.18.0-ua.4.uf2) · 0,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/bluetooth/RAK_4631_companion_radio_ble-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/usb/RAK_4631_companion_radio_usb-v1.18.0-ua.4.uf2) · 0,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/usb/RAK_4631_companion_radio_usb-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/repeater/RAK_4631_repeater-v1.18.0-ua.4.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/repeater/RAK_4631_repeater-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/room-server/RAK_4631_room_server-v1.18.0-ua.4.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/room-server/RAK_4631_room_server-v1.18.0-ua.4.zip) · 0,4 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `RAK_4631_companion_radio_ble-v1.18.0-ua.4.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package RAK_4631_companion_radio_ble-v1.18.0-ua.4.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
7393bb336de4e15ebcac67419d849e265bc905b53a2e63f7a2c05ade299cf1df  RAK_4631_companion_radio_ble-v1.18.0-ua.4.uf2
e83d74b4a2ea49c2cac27d4ab0c2bc6fa2f9d128d3aea0b91c8364b3d63f8ee4  RAK_4631_companion_radio_ble-v1.18.0-ua.4.zip
2642c0478d66aaa25b84f7dc1e711ed3b0929d943cb4d43ba23d0626ae9fcf88  RAK_4631_companion_radio_usb-v1.18.0-ua.4.uf2
95f42eeae84b959ce32fb6267e70fbbac1f7982f65991442f612f0d03ffb7e0d  RAK_4631_companion_radio_usb-v1.18.0-ua.4.zip
3fa7953ecda34a9fabf165b4f4eeaaef4c9dca7461032d46f501dee4cbae286f  RAK_4631_repeater-v1.18.0-ua.4.uf2
6db85403ddfbc44de60b0671d25b90c682c4fe9bdb21264ec1fda983a973033a  RAK_4631_repeater-v1.18.0-ua.4.zip
07c245b23a5f017dbca30e73d09c03e98fb7a4c769bf3fb8b4ab06b025337c07  RAK_4631_room_server-v1.18.0-ua.4.uf2
f39f472a085a4a1e431e39780aaff56e5e3855e1552b80ec6fc21348d092c702  RAK_4631_room_server-v1.18.0-ua.4.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
