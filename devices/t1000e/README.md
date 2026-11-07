# Seeed Studio SenseCAP T1000-E

nRF52 · MeshCore Україна **1.18.0-ua.1** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.1](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.1)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/bluetooth/t1000e_companion_radio_ble-v1.18.0-ua.1.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/bluetooth/t1000e_companion_radio_ble-v1.18.0-ua.1.zip) · 0,3 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/usb/t1000e_companion_radio_usb-v1.18.0-ua.1.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/usb/t1000e_companion_radio_usb-v1.18.0-ua.1.zip) · 0,3 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/repeater/t1000e_repeater-v1.18.0-ua.1.uf2) · 0,6 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/repeater/t1000e_repeater-v1.18.0-ua.1.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/room-server/t1000e_room_server-v1.18.0-ua.1.uf2) · 0,5 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t1000e/room-server/t1000e_room_server-v1.18.0-ua.1.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `t1000e_companion_radio_ble-v1.18.0-ua.1.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package t1000e_companion_radio_ble-v1.18.0-ua.1.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
724e3f66b27ff7b32fd4ccf5733398d1f540d9b825bffcf253fef00119dbe610  t1000e_companion_radio_ble-v1.18.0-ua.1.uf2
cef57fa43ce77183eedadb53e06906a131aacb8838e3fb293b41d60566b4eaff  t1000e_companion_radio_ble-v1.18.0-ua.1.zip
68735116c7dbee0eae33833b4bf123b2f7dbca6ebe4a4ad0cb32edc0d034c5e2  t1000e_companion_radio_usb-v1.18.0-ua.1.uf2
dabfc682a8e775c943bd2c4ac5cc2dcfd9b0ffcb31116b029fd59d420a655f98  t1000e_companion_radio_usb-v1.18.0-ua.1.zip
4870ef83a6885a826e2008ac3fdc52bc72897b1d3d371f5a7cf08e35d732000e  t1000e_repeater-v1.18.0-ua.1.uf2
53d211db744c8a557d4955655328727b4a59d70035d15a4aa720e5833a61eb12  t1000e_repeater-v1.18.0-ua.1.zip
1b91cb3bf565c5b24bc7f050005fc8070250ed23cc82d96f5290af9863347a9c  t1000e_room_server-v1.18.0-ua.1.uf2
122a49b9a48e432f8a8e94fd04fbd5b1e00b0cfb79c7640ef21ff883a5fcebbe  t1000e_room_server-v1.18.0-ua.1.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
