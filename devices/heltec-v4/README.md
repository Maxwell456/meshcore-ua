# Heltec WiFi LoRa 32 V4

ESP32 · MeshCore Україна **1.18.0-ua.3** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.3](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.3)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната, [`gateway/`](gateway) — шлюз #ukraine.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/bluetooth/heltec_v4_companion_radio_ble-v1.18.0-ua.3-merged.bin) · 1,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/bluetooth/heltec_v4_companion_radio_ble-v1.18.0-ua.3.bin) · 1,6 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/usb/heltec_v4_companion_radio_usb-v1.18.0-ua.3-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/usb/heltec_v4_companion_radio_usb-v1.18.0-ua.3.bin) · 0,6 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/repeater/heltec_v4_repeater-v1.18.0-ua.3-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/repeater/heltec_v4_repeater-v1.18.0-ua.3.bin) · 1,1 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/room-server/heltec_v4_room_server-v1.18.0-ua.3-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/room-server/heltec_v4_room_server-v1.18.0-ua.3.bin) · 1,1 МБ |
| **Шлюз #ukraine**<br><sub>компаньйон Bluetooth + Wi-Fi, з’єднує місто з каналом #ukraine</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/gateway/heltec_v4_companion_radio_gateway-v1.18.0-ua.3-merged.bin) · 1,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/gateway/heltec_v4_companion_radio_gateway-v1.18.0-ua.3.bin) · 1,8 МБ |

## Яку прошивку обрати

- **Компаньйон Bluetooth** — особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.
- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.
- **Шлюз #ukraine** — ваша нода для телефона, яка ще й сама по Wi-Fi з’єднує ваше місто з каналом #ukraine. Прошивається й підключається на meshcore.com.ua/gateway/.

**Нова установка** — для нового пристрою або переходу з іншої прошивки. **Оновлення** — якщо на платі вже MeshCore і налаштування треба зберегти.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

1. Встановіть esptool: `pip install esptool`.
2. Підключіть плату кабелем для даних. Якщо порт не з’являється — затисніть кнопку BOOT і натисніть RST.
3. **Нова установка** (стирає налаштування, ключі й контакти; налаштування мережі застосуються одразу):
   ```sh
   esptool.py erase_flash
   esptool.py write_flash 0x0 heltec_v4_companion_radio_ble-v1.18.0-ua.3-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 heltec_v4_companion_radio_ble-v1.18.0-ua.3.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
5755aa3cea35b05bd1000b33bc95706dfc799010401bc845344cdf8c03e64288  heltec_v4_companion_radio_ble-v1.18.0-ua.3-merged.bin
bee07e63f85fa783a7e8a73838a103d74952aa2cddfcbc11af4698a50f8047b3  heltec_v4_companion_radio_ble-v1.18.0-ua.3.bin
a35ce0487de11cdfc4bc635f91fad82a0a729df09add0745d6d3dc5874c739cc  heltec_v4_companion_radio_gateway-v1.18.0-ua.3-merged.bin
fa2fc46500d5e7137f923a8febb73747b7ed2072b341aad3afe14bce1574a1d2  heltec_v4_companion_radio_gateway-v1.18.0-ua.3.bin
c1ebfe999eece96d681696a736446e80f825e603c448bb7d3ba2099cc3f90d9d  heltec_v4_companion_radio_usb-v1.18.0-ua.3-merged.bin
4cb60bc6e36d1dc1f82eb98c5c824ed8fb331976874f105dd55a9b28001ff90d  heltec_v4_companion_radio_usb-v1.18.0-ua.3.bin
cb89cd48b0ad0e6970a34e74ab5737a600ce7c61fe932ad50ffa98132fc780bc  heltec_v4_repeater-v1.18.0-ua.3-merged.bin
789f47634434170a665427e36c5cb12a515da73230ad5b31051fa496d6b9e602  heltec_v4_repeater-v1.18.0-ua.3.bin
e4b3aeeb57a6108fac050fbaa4a83f5342068fe2cf609ef5f046fad4904b2b0c  heltec_v4_room_server-v1.18.0-ua.3-merged.bin
1bd3fde434c996b7a468914ee18e65b6001d536e0811dc5bd7bd621ac5aec1b0  heltec_v4_room_server-v1.18.0-ua.3.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
