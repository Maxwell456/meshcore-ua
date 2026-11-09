# RAK Wireless WisMesh Tag

nRF52 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/bluetooth/RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/bluetooth/RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/usb/RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/usb/RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/repeater/RAK_WisMesh_Tag_repeater-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/repeater/RAK_WisMesh_Tag_repeater-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/room-server/RAK_WisMesh_Tag_room_server-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/room-server/RAK_WisMesh_Tag_room_server-v1.18.0-ua.2.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.2.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.2.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
3879760b7be933f73687182a4e20de76f25367638d44c47f18adbb67e4ea5dac  RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.2.uf2
0704cbf9731a90997b464d1c4c696efd2d18cbcde384fc9ff8ffc90db04a0a29  RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.2.zip
4da852dd47a98912c332a2fbd5763d003ff227b926ce803e9aced3ba9f4d5992  RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.2.uf2
b3105b9f2bad5ede699feb1ef16027b9e8a1ce5415f824104eb077b9eb7af6c7  RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.2.zip
799d5917f015cd7f5a2a3034df0445b5ea52d960c6026ee62f5924b51cb31e99  RAK_WisMesh_Tag_repeater-v1.18.0-ua.2.uf2
7b444643f040816c0c0e0c27d2b15af9376e4b624dc5e6b690e96aaddbe637ce  RAK_WisMesh_Tag_repeater-v1.18.0-ua.2.zip
11f29833c7ad4da56858f4afca08aa03a90a938882ab802ae6be8400d25e6871  RAK_WisMesh_Tag_room_server-v1.18.0-ua.2.uf2
4a3b86f335ada8209265c1dce346ad7a7fda389388b6a60f0e735c442bc7a81c  RAK_WisMesh_Tag_room_server-v1.18.0-ua.2.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
