# Збірка своїми руками ProMicro nRF52840 + E22

nRF52 · MeshCore Україна **1.18.0-ua.1** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.1](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.1)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/bluetooth/ProMicro_companion_radio_ble-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/bluetooth/ProMicro_companion_radio_ble-v1.18.0-ua.1.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/usb/ProMicro_companion_radio_usb-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/usb/ProMicro_companion_radio_usb-v1.18.0-ua.1.zip) · 0,3 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/repeater/ProMicro_repeater-v1.18.0-ua.1.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/repeater/ProMicro_repeater-v1.18.0-ua.1.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/room-server/ProMicro_room_server-v1.18.0-ua.1.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/room-server/ProMicro_room_server-v1.18.0-ua.1.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `ProMicro_companion_radio_ble-v1.18.0-ua.1.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package ProMicro_companion_radio_ble-v1.18.0-ua.1.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
f081235e8ac56ceca21e09a7625a1c9078413127a1f1e6e166c055dd1de66017  ProMicro_companion_radio_ble-v1.18.0-ua.1.uf2
562fb4b7ff7e3ab522b25ec00620e39785ea3d0b821015b9cd449800d6357452  ProMicro_companion_radio_ble-v1.18.0-ua.1.zip
399302ba9adc475fe692343260af663518087b38cd55f75feb74c64bcb2ef196  ProMicro_companion_radio_usb-v1.18.0-ua.1.uf2
633268ceb0d7250d7b9490f5624a0496b75c150b4e53208f762f077c6ba9f5fe  ProMicro_companion_radio_usb-v1.18.0-ua.1.zip
2aad83f4fde4d4180f6f0499e9dbb364f91ee4f9bc1a5d34fab8a31df845b160  ProMicro_repeater-v1.18.0-ua.1.uf2
304b4c5ccfce455b2a345c04025ac595c3e70c1b1673e9dae4eecf649bcccae3  ProMicro_repeater-v1.18.0-ua.1.zip
e913edfa88fc788bf089c52489551c6d8d9606886a8e110d1445960566ebe7e3  ProMicro_room_server-v1.18.0-ua.1.uf2
455f4956c530b980268a385a313300571492d05beb6862a9fbb8bfd7fbe9481b  ProMicro_room_server-v1.18.0-ua.1.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
