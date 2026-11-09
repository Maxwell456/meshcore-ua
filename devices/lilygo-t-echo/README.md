# LilyGO T-Echo

nRF52 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/bluetooth/LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/bluetooth/LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/usb/LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/usb/LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/repeater/LilyGo_T-Echo_repeater-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/repeater/LilyGo_T-Echo_repeater-v1.18.0-ua.4.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/room-server/LilyGo_T-Echo_room_server-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/room-server/LilyGo_T-Echo_room_server-v1.18.0-ua.4.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.4.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.4.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
e294d530b0862c2656c2b4655b937e93901c1b56164cb938888cdf7102ff9599  LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.4.uf2
3b3f31a8b9e8d2ba2e6c257d4c8eb4f01fb9d38c104593656d5d9d42bf5cf92c  LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.4.zip
8d535d0198efa236ad6983172bd445e1fa482d0d9ef42c6b6feb24c3360a317c  LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.4.uf2
737dd1fe440719c55be8c1fba6170a27276b556e1b7cb1d85aaae3161d34d49f  LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.4.zip
5e1faf8e78ef9b6e496b2f835172c9ecae793cd8144e0fed151eb3e32f5238ac  LilyGo_T-Echo_repeater-v1.18.0-ua.4.uf2
e4d8ed90945d1faefcaabe1e446218f6611a4ec6f27969c3b85da4b907360f20  LilyGo_T-Echo_repeater-v1.18.0-ua.4.zip
f8768c0a4e17ecf2dd36a8fdbbeed3c3f19d66bf804c2b664e2eb4b0315a7786  LilyGo_T-Echo_room_server-v1.18.0-ua.4.uf2
737933fa4b3fa5d9fca85a020f14e3a51bf7d74414579e81f98cba7ecbb54527  LilyGo_T-Echo_room_server-v1.18.0-ua.4.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
