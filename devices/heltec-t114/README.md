# Heltec Mesh Node T114

nRF52 · MeshCore Україна **1.18.0-ua.1** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.1](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.1)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/bluetooth/Heltec_t114_companion_radio_ble-v1.18.0-ua.1.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/bluetooth/Heltec_t114_companion_radio_ble-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/usb/Heltec_t114_companion_radio_usb-v1.18.0-ua.1.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/usb/Heltec_t114_companion_radio_usb-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/repeater/Heltec_t114_repeater-v1.18.0-ua.1.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/repeater/Heltec_t114_repeater-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/room-server/Heltec_t114_room_server-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-t114/room-server/Heltec_t114_room_server-v1.18.0-ua.1.zip) · 0,4 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `Heltec_t114_companion_radio_ble-v1.18.0-ua.1.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package Heltec_t114_companion_radio_ble-v1.18.0-ua.1.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
64d60b0dee0c929d1869e8e84809bdf91e95331336cfd55c7e19d82499a03103  Heltec_t114_companion_radio_ble-v1.18.0-ua.1.uf2
17de28a57585a7bfca0dda24a272fe71aee6b3001c99b2c30acf7c10fa95da54  Heltec_t114_companion_radio_ble-v1.18.0-ua.1.zip
e0a725a822225ade2d4023e07dbb583ccd3eb0ef8f4d6e30a9dc352e66e3389d  Heltec_t114_companion_radio_usb-v1.18.0-ua.1.uf2
686387fe9e9877f886d6493287b3f5d4da4cce4dab2dc5eba4aba4a60d02618d  Heltec_t114_companion_radio_usb-v1.18.0-ua.1.zip
09830124c10423f2f2317c52e4e5babf42471f088cc62873b2bc1e043f0806a7  Heltec_t114_repeater-v1.18.0-ua.1.uf2
4414a1dd7ae699c35e1cd891b21294a5d27ac787ad4f3f9dd474dfde10c6ddc2  Heltec_t114_repeater-v1.18.0-ua.1.zip
d7aad01a1c65443019ce7eb8ea27e5d59ac7d933f6f417edceea50f068fc6b91  Heltec_t114_room_server-v1.18.0-ua.1.uf2
eecd515d80857fcda61b37b9291078a4a1e40667ba7d3beda2ed1f3d7afdd942  Heltec_t114_room_server-v1.18.0-ua.1.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
