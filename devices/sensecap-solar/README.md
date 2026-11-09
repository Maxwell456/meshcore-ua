# Seeed Studio SenseCAP Solar Node P1 / P1 Pro

nRF52 · MeshCore Україна **1.18.0-ua.3** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.3](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.3)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/bluetooth/SenseCap_Solar_companion_radio_ble-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/bluetooth/SenseCap_Solar_companion_radio_ble-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/usb/SenseCap_Solar_companion_radio_usb-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/usb/SenseCap_Solar_companion_radio_usb-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/repeater/SenseCap_Solar_repeater-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/repeater/SenseCap_Solar_repeater-v1.18.0-ua.3.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/room-server/SenseCap_Solar_room_server-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/sensecap-solar/room-server/SenseCap_Solar_room_server-v1.18.0-ua.3.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `SenseCap_Solar_companion_radio_ble-v1.18.0-ua.3.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package SenseCap_Solar_companion_radio_ble-v1.18.0-ua.3.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
66d934954d1c5523b709239bdfdabfaa269181139613e94082d647e8547e594e  SenseCap_Solar_companion_radio_ble-v1.18.0-ua.3.uf2
e069f0d704eea0fa90bf4937df46cecab518a815b37532e50daacb9aac92baf2  SenseCap_Solar_companion_radio_ble-v1.18.0-ua.3.zip
644d325112516e5d9354e1c1c4c643916dbdf1c3f6e2a2210091a201e14bd26d  SenseCap_Solar_companion_radio_usb-v1.18.0-ua.3.uf2
9176738912a574890d276c38fc5cddba90e15f13a93cb707d557c46c3cde2f93  SenseCap_Solar_companion_radio_usb-v1.18.0-ua.3.zip
995cbe2206b34b33e81cbe0b32c26e50dcb82c9ec376e0ffec8e31798629aeae  SenseCap_Solar_repeater-v1.18.0-ua.3.uf2
74c3c5b9cf5362651a9a890ba5577101b17bdd4e4fdb98d1f095203dc4671e6b  SenseCap_Solar_repeater-v1.18.0-ua.3.zip
58f999cc412483ede108530c2279c2f0d1fc74eec1a79affac409761359f7f3d  SenseCap_Solar_room_server-v1.18.0-ua.3.uf2
4a05e6a57797723edb8204a3b5ea87cb4cf9ca25dc1b3036015563278355dfb3  SenseCap_Solar_room_server-v1.18.0-ua.3.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
