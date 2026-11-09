# RAK Wireless WisBlock RAK4631

nRF52 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/bluetooth/RAK_4631_companion_radio_ble-v1.18.0-ua.2.uf2) · 0,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/bluetooth/RAK_4631_companion_radio_ble-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/usb/RAK_4631_companion_radio_usb-v1.18.0-ua.2.uf2) · 0,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/usb/RAK_4631_companion_radio_usb-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/repeater/RAK_4631_repeater-v1.18.0-ua.2.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/repeater/RAK_4631_repeater-v1.18.0-ua.2.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/room-server/RAK_4631_room_server-v1.18.0-ua.2.uf2) · 0,8 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-4631/room-server/RAK_4631_room_server-v1.18.0-ua.2.zip) · 0,4 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `RAK_4631_companion_radio_ble-v1.18.0-ua.2.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package RAK_4631_companion_radio_ble-v1.18.0-ua.2.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
3e9bf12ed646f25131ec76f1daf1e8a344d378c524a6a5128fbdd0937fecb9a0  RAK_4631_companion_radio_ble-v1.18.0-ua.2.uf2
ad1b560e222ed32db046946b6ceb03bb746a8ff4cff3c846d3d658c44ef72827  RAK_4631_companion_radio_ble-v1.18.0-ua.2.zip
ea85aaf987dfbe4b899578a923a3fcb117d78a9af17729b1f9095c0e0580c119  RAK_4631_companion_radio_usb-v1.18.0-ua.2.uf2
c8627e2eef5063a7e03406f745178b0974063b07f9bf2b09f7838440b570abcc  RAK_4631_companion_radio_usb-v1.18.0-ua.2.zip
23d9704fcf6c02f1023fe5388782bd65125e7e42152de909d4ce27fea046fb88  RAK_4631_repeater-v1.18.0-ua.2.uf2
27af56cd37ce74c6790d354ed6777d515431959e46c099fe7689afd8fa96b844  RAK_4631_repeater-v1.18.0-ua.2.zip
830900f4ca7ad75b327e758a52e3463db70f37f229660052ca3de3186c78d091  RAK_4631_room_server-v1.18.0-ua.2.uf2
0ba3d8219266c259e608cf83b8d596b6703da5a86782e45e77ec267e2a8138b9  RAK_4631_room_server-v1.18.0-ua.2.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
