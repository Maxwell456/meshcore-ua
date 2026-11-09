# RAK Wireless WisMesh Tag

nRF52 · MeshCore Україна **1.18.0-ua.3** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.3](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.3)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/bluetooth/RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/bluetooth/RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/usb/RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/usb/RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/repeater/RAK_WisMesh_Tag_repeater-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/repeater/RAK_WisMesh_Tag_repeater-v1.18.0-ua.3.zip) · 0,4 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/room-server/RAK_WisMesh_Tag_room_server-v1.18.0-ua.3.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-wismesh-tag/room-server/RAK_WisMesh_Tag_room_server-v1.18.0-ua.3.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.3.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.3.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
14a4bd2a8543d3397ad29a95bb5867779a693cc3b03bfad9d593d06865401935  RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.3.uf2
431aab8809b8939d95e7dc4b81338d95b84745063c91d9d5ec50790e16026252  RAK_WisMesh_Tag_companion_radio_ble-v1.18.0-ua.3.zip
45f36364080fd441d963b2b6ab4f02cdf67559c769a9b4aa8028a57a67ee68cb  RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.3.uf2
5369a84b5b9cdea22b7f905fba1aa19db88c822d954147bad9c1fd3eb50e1f3b  RAK_WisMesh_Tag_companion_radio_usb-v1.18.0-ua.3.zip
c4f0b719b16dd3566a7d6279b487eb6791112b1d4a1a7f7de7926a8a4bab724a  RAK_WisMesh_Tag_repeater-v1.18.0-ua.3.uf2
9fb15a0b585827a6f33d1cb96b0f11fcacb526f2076f8cee0486f31f322e26e5  RAK_WisMesh_Tag_repeater-v1.18.0-ua.3.zip
7f38f40e4ddb35f68dd1d519c6c6de8ef29400ccb5a29ef82da24c0bf1614143  RAK_WisMesh_Tag_room_server-v1.18.0-ua.3.uf2
7bfa3be87e25425c1792adae4f323325179de378aa75a1e852e42834d7929007  RAK_WisMesh_Tag_room_server-v1.18.0-ua.3.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
