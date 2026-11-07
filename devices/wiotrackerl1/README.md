# Seeed Studio Wio Tracker L1

nRF52 · MeshCore Україна **1.18.0-ua.1** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.1](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.1)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/bluetooth/WioTrackerL1_companion_radio_ble-v1.18.0-ua.1.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/bluetooth/WioTrackerL1_companion_radio_ble-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/usb/WioTrackerL1_companion_radio_usb-v1.18.0-ua.1.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/usb/WioTrackerL1_companion_radio_usb-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/repeater/WioTrackerL1_repeater-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/repeater/WioTrackerL1_repeater-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/room-server/WioTrackerL1_room_server-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/wiotrackerl1/room-server/WioTrackerL1_room_server-v1.18.0-ua.1.zip) · 0,4 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `WioTrackerL1_companion_radio_ble-v1.18.0-ua.1.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package WioTrackerL1_companion_radio_ble-v1.18.0-ua.1.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
621d366963980112de9da84ccc659b9ce6164ab42141ba500421459df1ab0001  WioTrackerL1_companion_radio_ble-v1.18.0-ua.1.uf2
da0515a5e7e1d908b9b8eb83178feda491f7bd6079f7612abae881d234db4628  WioTrackerL1_companion_radio_ble-v1.18.0-ua.1.zip
7c07cc14e836ffe91c6f93ec14b52dd98ed2ff76fe7a1d428a6dee9c44cf2a01  WioTrackerL1_companion_radio_usb-v1.18.0-ua.1.uf2
539bf3a6c993f4fe228bca54b83896bf91627171e3e679a6836fce4a4d21ab3a  WioTrackerL1_companion_radio_usb-v1.18.0-ua.1.zip
224b6b6a01736ef373de06f66d7e97031892a31011ad96189bf3735234230ad3  WioTrackerL1_repeater-v1.18.0-ua.1.uf2
9924ddf368df8c9d4145874effa8f72eb9377441ef2e01d254280bceaa00c09f  WioTrackerL1_repeater-v1.18.0-ua.1.zip
29daf7352f3aae58ba1b62d6313bb014643ff985384de312a3445a8f093e88d0  WioTrackerL1_room_server-v1.18.0-ua.1.uf2
bf8ca0c77199d6f17cba552cfd97af4c3583f010d128c194895878575528658d  WioTrackerL1_room_server-v1.18.0-ua.1.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
