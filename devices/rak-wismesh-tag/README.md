# RAK Wireless WisMesh Tag

nRF52 · MeshCore Україна **1.18.0-ua.1** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.1](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.1)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/bluetooth/RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/bluetooth/RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/usb/RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/usb/RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/repeater/RAK_WisMesh_Tag_repeater-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/repeater/RAK_WisMesh_Tag_repeater-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/room-server/RAK_WisMesh_Tag_room_server-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/room-server/RAK_WisMesh_Tag_room_server-v1.18.0-ua.1.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.1.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.1.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
eaa3868bf6c8264cb8b6b763a61d2bb258cba020f44ea533e3a84d5b42f3c53c  RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.1.uf2
48e7018e1f400a3ff43dbfce11fa392ade032ed87f90ad67bb149c2e16d8fc28  RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.1.zip
2f1e425d8ca62112fed06326b7b5841ea209b7a9ad76cea0b3eb11e7c30ef886  RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.1.uf2
97e09874ca28ad55d9f832fbbf397151d5a614f1121aa2d4657684dbe9d9e33b  RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.1.zip
e6f0dba974aae83c3ec59181cc92d56b3b73da870a976d9199e9eb742f2fc07c  RAK_WisMesh_Tag_repeater-v1.18.0-ua.1.uf2
dc158b5f6859752b83060f35a5440669e14a6ed6c4a541cd9d5ad1717e23c02d  RAK_WisMesh_Tag_repeater-v1.18.0-ua.1.zip
83e8b944520e88941a732ddbe55c9ddb2bde33465f73b2f33519bd11dc4aff6c  RAK_WisMesh_Tag_room_server-v1.18.0-ua.1.uf2
b570f965ea8b4b82e04c5d568c9c1b8354bb5ff2827f7afdad879ab32cd760b4  RAK_WisMesh_Tag_room_server-v1.18.0-ua.1.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
