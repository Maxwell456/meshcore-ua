# Seeed Studio SenseCAP Solar Node P1 / P1 Pro

nRF52 · MeshCore Україна **1.18.0-ua.1** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.1](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.1)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/bluetooth/SenseCap_Solar_companion_radio_ble-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/bluetooth/SenseCap_Solar_companion_radio_ble-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/usb/SenseCap_Solar_companion_radio_usb-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/usb/SenseCap_Solar_companion_radio_usb-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/repeater/SenseCap_Solar_repeater-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/repeater/SenseCap_Solar_repeater-v1.18.0-ua.1.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/room-server/SenseCap_Solar_room_server-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/room-server/SenseCap_Solar_room_server-v1.18.0-ua.1.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `SenseCap_Solar_companion_radio_ble-v1.18.0-ua.1.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package SenseCap_Solar_companion_radio_ble-v1.18.0-ua.1.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
9f38bc150aa939ad217a71ab223d3f3e9aa7b8030c7d61254f325ba60c22cc58  SenseCap_Solar_companion_radio_ble-v1.18.0-ua.1.uf2
54f63d497bae747e78f640d04edc7ba9f61b48b8f40bd2b8e0fed1a198b29182  SenseCap_Solar_companion_radio_ble-v1.18.0-ua.1.zip
d9c0a1d535e959b2a3070fc1d7bb3972ae3ba59fe689abf0630b8755b42c0922  SenseCap_Solar_companion_radio_usb-v1.18.0-ua.1.uf2
7bd615a9f20df8ada0094491167eda3a1dcb7158f8964b24276ce58cac4134a8  SenseCap_Solar_companion_radio_usb-v1.18.0-ua.1.zip
9f79d036bf11ec0a53958b98edacaf923320f82b88f21d187c4cdae3758d445a  SenseCap_Solar_repeater-v1.18.0-ua.1.uf2
663000f708958a3f3a2ad16c5b5663e5118b75f64952594758e8827a689c7204  SenseCap_Solar_repeater-v1.18.0-ua.1.zip
849d67abd3c4a8dc5f5bfcfe779a12c1e92945852149dc4842d971738903010f  SenseCap_Solar_room_server-v1.18.0-ua.1.uf2
35ebcadf7166543c28b8d94d7944ded48e8cd794b2e63da56ca4bcbae25e653f  SenseCap_Solar_room_server-v1.18.0-ua.1.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
