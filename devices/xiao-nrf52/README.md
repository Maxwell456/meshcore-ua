# Seeed Studio XIAO nRF52840 + Wio-SX1262

nRF52 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/bluetooth/Xiao_nrf52_companion_radio_ble-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/bluetooth/Xiao_nrf52_companion_radio_ble-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/usb/Xiao_nrf52_companion_radio_usb-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/usb/Xiao_nrf52_companion_radio_usb-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/repeater/Xiao_nrf52_repeater-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/repeater/Xiao_nrf52_repeater-v1.18.0-ua.2.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/room-server/Xiao_nrf52_room_server-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/room-server/Xiao_nrf52_room_server-v1.18.0-ua.2.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `Xiao_nrf52_companion_radio_ble-v1.18.0-ua.2.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package Xiao_nrf52_companion_radio_ble-v1.18.0-ua.2.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
0c1eb8663acbc92fc6a3b42775998d5d590e265ff845cd4ad39e98367c9d5454  Xiao_nrf52_companion_radio_ble-v1.18.0-ua.2.uf2
dfa60dad3468e6ff85534b219ec06c18be30b7b8a7c47fa1b7a9e43c9b9b019e  Xiao_nrf52_companion_radio_ble-v1.18.0-ua.2.zip
3a4acd9f9f07215cbc61c4b7e6c9e9834bf8edd8e8d4291230d9b3775dfe0bfb  Xiao_nrf52_companion_radio_usb-v1.18.0-ua.2.uf2
3214f230ad08f6617ccb8e5b71b87dd26c8039ea52dda111c1d348eb86561db9  Xiao_nrf52_companion_radio_usb-v1.18.0-ua.2.zip
4f30ea427356027be5550afd871c0e81508c584869d8937c926a8fa29c235922  Xiao_nrf52_repeater-v1.18.0-ua.2.uf2
f8fae16bf92074bba013659dbcc46d5de417c043e0a6d2d44b68f047269c68c5  Xiao_nrf52_repeater-v1.18.0-ua.2.zip
ccece4f90988cbf598053c9a93798ce40b329ca2178fd61a8d245643446a387a  Xiao_nrf52_room_server-v1.18.0-ua.2.uf2
f8faa51596bbaaf8bd07b63f258cd6221d37d4e255df945eafbd0ec923c07131  Xiao_nrf52_room_server-v1.18.0-ua.2.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
