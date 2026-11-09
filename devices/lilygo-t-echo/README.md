# LilyGO T-Echo

nRF52 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/bluetooth/LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/bluetooth/LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/usb/LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/usb/LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/repeater/LilyGo_T-Echo_repeater-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/repeater/LilyGo_T-Echo_repeater-v1.18.0-ua.2.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/room-server/LilyGo_T-Echo_room_server-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/room-server/LilyGo_T-Echo_room_server-v1.18.0-ua.2.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.2.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.2.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
1496c06f64664301875b04b14791b23dabb68c8f9f994218c9c6773f4a414964  LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.2.uf2
a4eeb5373bf74b67f4518ed96819ba60fd38ed53882e682abc75ff3b8c52996a  LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.2.zip
fa99f08658a48a6d011795a5b019af9e3b1741cbaa8f74f3a621caf37fc1bf31  LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.2.uf2
e2f99b2742e54f679fc9e70d381465c0f74ad28cf5b8142d839062e2ddd135d5  LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.2.zip
18af50bb87e5f14c5e99f45e8774634408ff6312d29b1c3466a63e168b340541  LilyGo_T-Echo_repeater-v1.18.0-ua.2.uf2
65579e7521d18cc28a939d46529ce1eee081a64e27608817403ac4af8ca11a01  LilyGo_T-Echo_repeater-v1.18.0-ua.2.zip
0b29cac5a1dc7abb3d9406b95a584cbb454d67879f9f2a83724ce26d267df09a  LilyGo_T-Echo_room_server-v1.18.0-ua.2.uf2
6a7b21a5688d94649220dd541a7ddf93a68fa3fd7d2463901ca92f49efde4161  LilyGo_T-Echo_room_server-v1.18.0-ua.2.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
