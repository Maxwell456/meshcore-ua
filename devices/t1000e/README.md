# Seeed Studio SenseCAP T1000-E

nRF52 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/bluetooth/t1000e_companion_radio_ble-v1.18.0-ua.2.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/bluetooth/t1000e_companion_radio_ble-v1.18.0-ua.2.zip) · 0,3 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/usb/t1000e_companion_radio_usb-v1.18.0-ua.2.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/usb/t1000e_companion_radio_usb-v1.18.0-ua.2.zip) · 0,3 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/repeater/t1000e_repeater-v1.18.0-ua.2.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/repeater/t1000e_repeater-v1.18.0-ua.2.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/room-server/t1000e_room_server-v1.18.0-ua.2.uf2) · 0,5 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/room-server/t1000e_room_server-v1.18.0-ua.2.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `t1000e_companion_radio_ble-v1.18.0-ua.2.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package t1000e_companion_radio_ble-v1.18.0-ua.2.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
de0f990411b908c15104322ec783b88ffcd11bf9fe635e2dca0ee25fa00f5c16  t1000e_companion_radio_ble-v1.18.0-ua.2.uf2
6e37bc7b7e6c3f75c949d8034bd8ad424ed530efd19fbdca37c88f4088b4d255  t1000e_companion_radio_ble-v1.18.0-ua.2.zip
5a4fd6a61363399d00667364c4e2bb01e663ecd72e140df0e6fab0df9ea03dad  t1000e_companion_radio_usb-v1.18.0-ua.2.uf2
a30bdf67ef344ac835aa6575376dec198be997e682be7d8ea2c3505c9478f56e  t1000e_companion_radio_usb-v1.18.0-ua.2.zip
e8b87f2e013b108f14f2ea6e7baa774b0e6136aea9c8b4b92d47291681758312  t1000e_repeater-v1.18.0-ua.2.uf2
1da1a2814e15c297636f22271bb65c6402585fa09e9910b1c53dec5bcdc61f69  t1000e_repeater-v1.18.0-ua.2.zip
0be14ead5539ca9d46e26c0d79889b62a529ea5d392565a03159098093cb3559  t1000e_room_server-v1.18.0-ua.2.uf2
f0fc6ad8646eeedb3ef7e6cac0b837165ab0ffe57abecedb54d9443eed3e8987  t1000e_room_server-v1.18.0-ua.2.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
