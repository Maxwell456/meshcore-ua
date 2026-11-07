# LilyGO T-Echo

nRF52 · MeshCore Україна **1.18.0-ua.1** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.1](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.1)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/bluetooth/LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/bluetooth/LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/usb/LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/usb/LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/repeater/LilyGo_T-Echo_repeater-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/repeater/LilyGo_T-Echo_repeater-v1.18.0-ua.1.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/room-server/LilyGo_T-Echo_room_server-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/lilygo-t-echo/room-server/LilyGo_T-Echo_room_server-v1.18.0-ua.1.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.1.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.1.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
3a3857c6b6b71346ebb3f531832df2235b80c5cd18f19bdfa9c42e98e2704ea5  LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.1.uf2
d53adec192c98637a19e9e95656a28fbcc11e74f61cb2fa3653312bc3e98ebf4  LilyGo_T-Echo_companion_radio_ble-v1.18.0-ua.1.zip
34a14a6acc0bf5e71eba7dc9c7deb6459c1482793dd10290af645db5fd9bf4d5  LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.1.uf2
8aeff69721ec59996b6b74747911a3538fa20528823317c90fdc324e459c08bf  LilyGo_T-Echo_companion_radio_usb-v1.18.0-ua.1.zip
0db81f1d6c7d00059ae74933d51a16a736b7640069dea1cb524122c554a71a02  LilyGo_T-Echo_repeater-v1.18.0-ua.1.uf2
5815a70b35436023e4c81fc62b656ce37ff91b88643b7d4615bb228feb513fbe  LilyGo_T-Echo_repeater-v1.18.0-ua.1.zip
09bb591e7e76a539f9b63c82df337b254abdfdf66b4f0e8ee9937b87ee3c53cb  LilyGo_T-Echo_room_server-v1.18.0-ua.1.uf2
1427968e409aa5719a6a8f5b761719f2b9a6a5a54771bcffafbb61b65ff82833  LilyGo_T-Echo_room_server-v1.18.0-ua.1.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
