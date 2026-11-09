# LilyGO T-Echo

nRF52 · MeshCore Україна **1.18.0-ua.3** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.3](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.3)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/bluetooth/LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/bluetooth/LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/usb/LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/usb/LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/repeater/LilyGo_T-Echo_repeater-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/repeater/LilyGo_T-Echo_repeater-v1.18.0-ua.3.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/room-server/LilyGo_T-Echo_room_server-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/room-server/LilyGo_T-Echo_room_server-v1.18.0-ua.3.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.3.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.3.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
f96f153a6c2ee8288837ae4d73741defca9ae9ce8db472b70514ab4a76e28e0a  LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.3.uf2
780fea5f55d291e84649da15d2d5d8a094f5b79e9a00d1c61db4323f98dddbbc  LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.3.zip
83acf31ec8c6a28fc3850d4ad40ab9e735deb7d81cf8c85b7abf5cbea4b401f8  LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.3.uf2
38fed9f5058b24051c959aaffc4bfdeea98d39c4a3810a756fd5b388be673d3d  LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.3.zip
594f8edcc9749ea3082bc2f6b76ce875686cd07708705562577801942d8caef4  LilyGo_T-Echo_repeater-v1.18.0-ua.3.uf2
bee28324d91b4e0592b6ce59d640c4bb2aa030bc0cdeaa0a63fe2e327041fbad  LilyGo_T-Echo_repeater-v1.18.0-ua.3.zip
b8f387650c58a412b93c1a53653b1349c7a1f965e9d96715296503cb3539be5d  LilyGo_T-Echo_room_server-v1.18.0-ua.3.uf2
91b86d977d297d89ddaba1a20b461f9879e70c1928a8e75259bdf3c5bb4ba80a  LilyGo_T-Echo_room_server-v1.18.0-ua.3.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
