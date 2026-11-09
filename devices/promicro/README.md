# Збірка своїми руками ProMicro nRF52840 + E22

nRF52 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/bluetooth/ProMicro_companion_radio_ble-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/bluetooth/ProMicro_companion_radio_ble-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/usb/ProMicro_companion_radio_usb-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/usb/ProMicro_companion_radio_usb-v1.18.0-ua.2.zip) · 0,3 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/repeater/ProMicro_repeater-v1.18.0-ua.2.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/repeater/ProMicro_repeater-v1.18.0-ua.2.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/room-server/ProMicro_room_server-v1.18.0-ua.2.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/room-server/ProMicro_room_server-v1.18.0-ua.2.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `ProMicro_companion_radio_ble-v1.18.0-ua.2.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package ProMicro_companion_radio_ble-v1.18.0-ua.2.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
2f9b4af3fea23bf2d699853a7cc5a2fc6dd6f7c6368a90e5e5f2443048c1c00b  ProMicro_companion_radio_ble-v1.18.0-ua.2.uf2
2d3976b7f71b0092ffb534af16b5c50e1f9d3776abe33c9cb45bc78936d74dd5  ProMicro_companion_radio_ble-v1.18.0-ua.2.zip
f9893ca67d105fb2a3f5ddf3fe5eaa08d0e1a4e587702c7082347e60e62ed4f4  ProMicro_companion_radio_usb-v1.18.0-ua.2.uf2
8e1d1cb49e31f18efb58fdb40da5f5eb6c430157568181b93263af41d79263c0  ProMicro_companion_radio_usb-v1.18.0-ua.2.zip
0588a1b120a4d48e8597263b985b12f4ddd4f8852db0e4a1f0d12dda799b0b4b  ProMicro_repeater-v1.18.0-ua.2.uf2
617cddbe226c40a9822a48facbf9913f58b646a1805df2476afb1fbb0159f459  ProMicro_repeater-v1.18.0-ua.2.zip
d298908b441b6001df4f881ff11eefc8ed24803e65971b79d2443d9daf331a47  ProMicro_room_server-v1.18.0-ua.2.uf2
98b6fae2831246ab473e7371e79612046dc108d622d106fd76fdcc54d298871d  ProMicro_room_server-v1.18.0-ua.2.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
