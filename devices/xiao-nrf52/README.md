# Seeed Studio XIAO nRF52840 + Wio-SX1262

nRF52 · MeshCore Україна **1.18.0-ua.3** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.3](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.3)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/bluetooth/Xiao_nrf52_companion_radio_ble-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/bluetooth/Xiao_nrf52_companion_radio_ble-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/usb/Xiao_nrf52_companion_radio_usb-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/usb/Xiao_nrf52_companion_radio_usb-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/repeater/Xiao_nrf52_repeater-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/repeater/Xiao_nrf52_repeater-v1.18.0-ua.3.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/room-server/Xiao_nrf52_room_server-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/xiao-nrf52/room-server/Xiao_nrf52_room_server-v1.18.0-ua.3.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `Xiao_nrf52_companion_radio_ble-v1.18.0-ua.3.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package Xiao_nrf52_companion_radio_ble-v1.18.0-ua.3.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
f81f080eb3f7f049c126095a9b1ad8f106e174e5e63cbcd188e737a27bedfdba  Xiao_nrf52_companion_radio_ble-v1.18.0-ua.3.uf2
99e384c9fea6a6d08014afe948826b667c23715258b291758d054eaf18b54da4  Xiao_nrf52_companion_radio_ble-v1.18.0-ua.3.zip
c17cc18491ccae6fe619ce80359b9674e529438ffe785c9327f1ff79df77970f  Xiao_nrf52_companion_radio_usb-v1.18.0-ua.3.uf2
4fd2aa9f6c7843fa47bee14b83fbc74096e4772183a5558a6f8f5a138f4ed5d4  Xiao_nrf52_companion_radio_usb-v1.18.0-ua.3.zip
60670b2009d3539b6987311ee132f88847c1b4962a9441fe38c9fe41fbd735fc  Xiao_nrf52_repeater-v1.18.0-ua.3.uf2
044038347da0ee837052a05abe1d1afe53b66abc34bc51a1f838825322102fdf  Xiao_nrf52_repeater-v1.18.0-ua.3.zip
797b73e4a9cf7246a8497da2215fa75a3da31f080f7e414f67f719d3f4ab50f4  Xiao_nrf52_room_server-v1.18.0-ua.3.uf2
f3a57987600278812accbb4a5d64ffe2961426b84bcf3b49eb91e1dba8e6b66e  Xiao_nrf52_room_server-v1.18.0-ua.3.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
