# Збірка своїми руками ProMicro nRF52840 + E22

nRF52 · MeshCore Україна **1.18.0-ua.3** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.3](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.3)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/bluetooth/ProMicro_companion_radio_ble-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/bluetooth/ProMicro_companion_radio_ble-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/usb/ProMicro_companion_radio_usb-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/usb/ProMicro_companion_radio_usb-v1.18.0-ua.3.zip) · 0,3 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/repeater/ProMicro_repeater-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/repeater/ProMicro_repeater-v1.18.0-ua.3.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/room-server/ProMicro_room_server-v1.18.0-ua.3.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/promicro/room-server/ProMicro_room_server-v1.18.0-ua.3.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `ProMicro_companion_radio_ble-v1.18.0-ua.3.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package ProMicro_companion_radio_ble-v1.18.0-ua.3.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
869901b514b61578a26120199a5b2a40d0b76f69c4b181c41b4d98963a843a59  ProMicro_companion_radio_ble-v1.18.0-ua.3.uf2
430db280f016f12983f9d9c9a68be27da8a566f365bd40c7d5d26c839da1a03b  ProMicro_companion_radio_ble-v1.18.0-ua.3.zip
edc394ab5f7c079d663b149a8e1f30e3bcef3796c4f998127e27d4b59c9ed741  ProMicro_companion_radio_usb-v1.18.0-ua.3.uf2
bd4a7e522079cb4359c475949a6b8e3bb96692b9154dca601bdeb9ae40ea12ed  ProMicro_companion_radio_usb-v1.18.0-ua.3.zip
b92044a6ca22c1d5956f2f697102911aea9259ca079a5dfc96315c57535293fa  ProMicro_repeater-v1.18.0-ua.3.uf2
abe08fd44136a248deef207a00c17203e70b4e14d23a15a7bee9f536dae2867e  ProMicro_repeater-v1.18.0-ua.3.zip
6d1d1464efe57e9704f090fa7e512a672410c7a78a552b4be880eb97e84e5669  ProMicro_room_server-v1.18.0-ua.3.uf2
91015e0a405f3e613b2101aab397eaef34c80e37afa4cd59f498ed31e40d7e81  ProMicro_room_server-v1.18.0-ua.3.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
