# Elecrow ThinkNode M1

nRF52 · MeshCore Україна **1.18.0-ua.3** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.3](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.3)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/bluetooth/ThinkNode_M1_companion_radio_ble-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/bluetooth/ThinkNode_M1_companion_radio_ble-v1.18.0-ua.3.zip) · 0,3 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/usb/ThinkNode_M1_companion_radio_usb-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/usb/ThinkNode_M1_companion_radio_usb-v1.18.0-ua.3.zip) · 0,3 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/repeater/ThinkNode_M1_repeater-v1.18.0-ua.3.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/repeater/ThinkNode_M1_repeater-v1.18.0-ua.3.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/room-server/ThinkNode_M1_room_server-v1.18.0-ua.3.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/thinknode-m1/room-server/ThinkNode_M1_room_server-v1.18.0-ua.3.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `ThinkNode_M1_companion_radio_ble-v1.18.0-ua.3.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package ThinkNode_M1_companion_radio_ble-v1.18.0-ua.3.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
d01c76e6c0f887cdeccfbbc005f4b124f35a832ab2fbc5c55071ae98e44efc22  ThinkNode_M1_companion_radio_ble-v1.18.0-ua.3.uf2
b573bb36687d1cdf4ec086f2c48f5685f0b9f4bd10a0b40a515a0e4980be01ba  ThinkNode_M1_companion_radio_ble-v1.18.0-ua.3.zip
3070148a46fced7fa6e2610628ac7e4426e73d83422dd8247961b5ee787adc2f  ThinkNode_M1_companion_radio_usb-v1.18.0-ua.3.uf2
318de8a1a3432f59d354459856b3948092d93fb08a2428d3e6e11dec4526be87  ThinkNode_M1_companion_radio_usb-v1.18.0-ua.3.zip
90dad31f32314a620cfac1dbb96142d924c3249eafc18c1d266e7802296fce66  ThinkNode_M1_repeater-v1.18.0-ua.3.uf2
fd4875f953f2b31b9d89ddfac807034454d011b7f72e34c57d7b482b850517fc  ThinkNode_M1_repeater-v1.18.0-ua.3.zip
73a968be632f52b59373244f7753e4a38caf36d3032d2d7b572a61bc8903ef8b  ThinkNode_M1_room_server-v1.18.0-ua.3.uf2
cd6fe541cfc629caabfaa4a9266cc9580b2c98eeaeacf8466f61dc24c8f2bf64  ThinkNode_M1_room_server-v1.18.0-ua.3.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
