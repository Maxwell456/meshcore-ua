# Seeed Studio SenseCAP Solar Node P1 / P1 Pro

nRF52 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/bluetooth/SenseCap_Solar_companion_radio_ble-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/bluetooth/SenseCap_Solar_companion_radio_ble-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/usb/SenseCap_Solar_companion_radio_usb-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/usb/SenseCap_Solar_companion_radio_usb-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/repeater/SenseCap_Solar_repeater-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/repeater/SenseCap_Solar_repeater-v1.18.0-ua.4.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/room-server/SenseCap_Solar_room_server-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/room-server/SenseCap_Solar_room_server-v1.18.0-ua.4.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `SenseCap_Solar_companion_radio_ble-v1.18.0-ua.4.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package SenseCap_Solar_companion_radio_ble-v1.18.0-ua.4.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
d9917c1768f0d3676c33f7e7fc83f11121427ed5c0c133690cf9ff8533ee83e0  SenseCap_Solar_companion_radio_ble-v1.18.0-ua.4.uf2
83a5b4a5e6300d155eba35369f55655696e7693205e698c3a47ea35162a23c1e  SenseCap_Solar_companion_radio_ble-v1.18.0-ua.4.zip
ce138edf12d21f10495efd207969adf9c8122ab1ff950da52c76e9a4128dea18  SenseCap_Solar_companion_radio_usb-v1.18.0-ua.4.uf2
25c2872fcaafb0f35523db50409f3a31abe82afc6d33cfc6c03b37467cd20cf5  SenseCap_Solar_companion_radio_usb-v1.18.0-ua.4.zip
6ae9eefb75ca9dcad94921abc320acf35c95d317591dce003e41352109d5c59b  SenseCap_Solar_repeater-v1.18.0-ua.4.uf2
97ad5ae49cc60e520aad56da1cca214fbd708160b6ec2b07d7a51f69fe4b43ab  SenseCap_Solar_repeater-v1.18.0-ua.4.zip
4a47c72cf6bb13c7042a12050e8303c5bb504ab97a2e7c294a82a517a7e80a49  SenseCap_Solar_room_server-v1.18.0-ua.4.uf2
5d8b21d6d87313df35461b88d6f019bacf43fbd60f108b81ad9f81339b6a33ce  SenseCap_Solar_room_server-v1.18.0-ua.4.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
