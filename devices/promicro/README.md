# Збірка своїми руками ProMicro nRF52840 + E22

nRF52 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/bluetooth/ProMicro_companion_radio_ble-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/bluetooth/ProMicro_companion_radio_ble-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/usb/ProMicro_companion_radio_usb-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/usb/ProMicro_companion_radio_usb-v1.18.0-ua.4.zip) · 0,3 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/repeater/ProMicro_repeater-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/repeater/ProMicro_repeater-v1.18.0-ua.4.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/room-server/ProMicro_room_server-v1.18.0-ua.4.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/room-server/ProMicro_room_server-v1.18.0-ua.4.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `ProMicro_companion_radio_ble-v1.18.0-ua.4.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package ProMicro_companion_radio_ble-v1.18.0-ua.4.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
927dbfac119b44bd13c6a5c329cbfd54ea20a66cb852696d6462ecb74fef380c  ProMicro_companion_radio_ble-v1.18.0-ua.4.uf2
4c50adabc57a7f362932ecc6fdd7620ab839e97cfbb957a2e3e45b2c46a3b91e  ProMicro_companion_radio_ble-v1.18.0-ua.4.zip
d6c5ca18cba516216237a67f4908515da37a8125981258afe5bfa0a8d27bb1c7  ProMicro_companion_radio_usb-v1.18.0-ua.4.uf2
f5c30151b485be3f5516c06b1b098f3c2b333eea578be3b89dafe44e080247ee  ProMicro_companion_radio_usb-v1.18.0-ua.4.zip
f17f59ac6daa9c992c626838fcba74243fed654f98c97f278ce57d36d5657af7  ProMicro_repeater-v1.18.0-ua.4.uf2
dc4794902e3da1b48300de9a43140baa09d22ddf74dc484c9f8b5d61b2ef804e  ProMicro_repeater-v1.18.0-ua.4.zip
1e68e5d51b23d95b2fcc5740f548769801446f76ec35ffb4f0510fa2c2ad6815  ProMicro_room_server-v1.18.0-ua.4.uf2
9c574dcaaeb88c0cb8868e4b4734f6641d796f357a168316e2a4daa54f655067  ProMicro_room_server-v1.18.0-ua.4.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
