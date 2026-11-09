# RAK Wireless WisMesh Tag

nRF52 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/bluetooth/RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/bluetooth/RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/usb/RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/usb/RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/repeater/RAK_WisMesh_Tag_repeater-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/repeater/RAK_WisMesh_Tag_repeater-v1.18.0-ua.4.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/room-server/RAK_WisMesh_Tag_room_server-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/room-server/RAK_WisMesh_Tag_room_server-v1.18.0-ua.4.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.4.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.4.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
1075b0d393ebf8707532327b506ac2e71164830496013315277a1bb5d68e4e31  RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.4.uf2
33889eec2712b15df9410824738ac40a3680bdc460b27c860dffaeef5c7430e6  RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.4.zip
fa4df5fd519e658eb5a852ea1743f4753ad90d2dc449ce3c6642a841cebcd3f8  RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.4.uf2
c1efe50a6b9277523454e1765cff3a550e673aa17ffdda9d787579e7d4693e9f  RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.4.zip
671f4a533b74b4a6da3a7f19c0f9164317ab3ede0bd035bb900ec270c69718ad  RAK_WisMesh_Tag_repeater-v1.18.0-ua.4.uf2
231e49803cac0fc08ea5c721cc6975b8692998e7e40eb4831fffbfaa61a082b6  RAK_WisMesh_Tag_repeater-v1.18.0-ua.4.zip
5229b1dcc93db89de9d8d2af889f93782993e230c9778f25e4434d7d71eedbf7  RAK_WisMesh_Tag_room_server-v1.18.0-ua.4.uf2
e0515a1d0eeb4132b1820ea1e49816ed8da24b5e56552273093903840cc4fd21  RAK_WisMesh_Tag_room_server-v1.18.0-ua.4.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
