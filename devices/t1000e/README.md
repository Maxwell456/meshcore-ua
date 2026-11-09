# Seeed Studio SenseCAP T1000-E

nRF52 · MeshCore Україна **1.18.0-ua.3** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.3](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.3)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/bluetooth/t1000e_companion_radio_ble-v1.18.0-ua.3.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/bluetooth/t1000e_companion_radio_ble-v1.18.0-ua.3.zip) · 0,3 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/usb/t1000e_companion_radio_usb-v1.18.0-ua.3.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/usb/t1000e_companion_radio_usb-v1.18.0-ua.3.zip) · 0,3 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/repeater/t1000e_repeater-v1.18.0-ua.3.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/repeater/t1000e_repeater-v1.18.0-ua.3.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/room-server/t1000e_room_server-v1.18.0-ua.3.uf2) · 0,5 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/room-server/t1000e_room_server-v1.18.0-ua.3.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `t1000e_companion_radio_ble-v1.18.0-ua.3.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package t1000e_companion_radio_ble-v1.18.0-ua.3.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
df4c4029e09a78dd8c8dbd32d7aaa64ac223139b559ae61a4e552c471231ec62  t1000e_companion_radio_ble-v1.18.0-ua.3.uf2
cc0e10af86a29684687ffc6cac3bb243e71e5d1a3257c0fd1f2f0ddb7195a255  t1000e_companion_radio_ble-v1.18.0-ua.3.zip
bcdd27157d63315bc740e6e58fad22972e117c567e968991762b9b9471f461c5  t1000e_companion_radio_usb-v1.18.0-ua.3.uf2
61e9c298895c6b3f5afb1a2afeffabb93ace89179ef620b2a13b3087c2747c97  t1000e_companion_radio_usb-v1.18.0-ua.3.zip
73a99a5ce7d171185b066103d885e3e80b99a8673bd2f26ed03fcbdec9eb8a94  t1000e_repeater-v1.18.0-ua.3.uf2
8443ea7f5969649d06fc4e7a11075f93da64a1c8138d184cacf1f45056fd0fe5  t1000e_repeater-v1.18.0-ua.3.zip
340372f4db8f07cef7421d474be5c8a1de7c9ae6dc7971616fbf28875405beff  t1000e_room_server-v1.18.0-ua.3.uf2
1f477d2034e23995673bcda7aa93068754386e6975761edf262437a94171ae21  t1000e_room_server-v1.18.0-ua.3.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
