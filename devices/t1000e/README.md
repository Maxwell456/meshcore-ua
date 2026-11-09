# Seeed Studio SenseCAP T1000-E

nRF52 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/bluetooth/t1000e_companion_radio_ble-v1.18.0-ua.4.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/bluetooth/t1000e_companion_radio_ble-v1.18.0-ua.4.zip) · 0,3 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/usb/t1000e_companion_radio_usb-v1.18.0-ua.4.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/usb/t1000e_companion_radio_usb-v1.18.0-ua.4.zip) · 0,3 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/repeater/t1000e_repeater-v1.18.0-ua.4.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/repeater/t1000e_repeater-v1.18.0-ua.4.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/room-server/t1000e_room_server-v1.18.0-ua.4.uf2) · 0,5 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/room-server/t1000e_room_server-v1.18.0-ua.4.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `t1000e_companion_radio_ble-v1.18.0-ua.4.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package t1000e_companion_radio_ble-v1.18.0-ua.4.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
75cb6564b791031ed3679650933927ad52eb12b7f2304d7b9f4949c1d4f5e883  t1000e_companion_radio_ble-v1.18.0-ua.4.uf2
d59ae62fd1e60fb63781da4f33a8760338972428a868db6e36b13ad6a43e035e  t1000e_companion_radio_ble-v1.18.0-ua.4.zip
8b12d107f5f53a0af2201d64188bf1ad1bb8429d66f7bcfeaafda1af822da836  t1000e_companion_radio_usb-v1.18.0-ua.4.uf2
07d9487baef7e2b135575a58bc9c3dfdd40a111f48fa0a93763dfc75fa448ea0  t1000e_companion_radio_usb-v1.18.0-ua.4.zip
b6ed977da28e07620ed8f74c80021e3199eae4f0b8cd5d8cdfc929376f6a0e91  t1000e_repeater-v1.18.0-ua.4.uf2
40337ac59917fe7a5138890b0e995c39a0c0e24c6146d124f03f3375e9c8c35f  t1000e_repeater-v1.18.0-ua.4.zip
8353f89ce4b7cbc5dfbe1c5600182a15447210308fb68ae25bf1086b3148339e  t1000e_room_server-v1.18.0-ua.4.uf2
b3b7144654090b4091cbb59facad8624a4173aba045dc8067a87200e33ce8f3e  t1000e_room_server-v1.18.0-ua.4.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
