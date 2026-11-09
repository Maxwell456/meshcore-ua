# Heltec WiFi LoRa 32 V4

ESP32 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната, [`gateway/`](gateway) — шлюз #ukraine.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/bluetooth/heltec_v4_companion_radio_ble-v1.18.0-ua.2-merged.bin) · 1,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/bluetooth/heltec_v4_companion_radio_ble-v1.18.0-ua.2.bin) · 1,6 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/usb/heltec_v4_companion_radio_usb-v1.18.0-ua.2-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/usb/heltec_v4_companion_radio_usb-v1.18.0-ua.2.bin) · 0,6 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/repeater/heltec_v4_repeater-v1.18.0-ua.2-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/repeater/heltec_v4_repeater-v1.18.0-ua.2.bin) · 1,1 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/room-server/heltec_v4_room_server-v1.18.0-ua.2-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/room-server/heltec_v4_room_server-v1.18.0-ua.2.bin) · 1,1 МБ |
| **Шлюз #ukraine**<br><sub>компаньйон Bluetooth + Wi-Fi, з’єднує місто з каналом #ukraine</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/gateway/heltec_v4_companion_radio_gateway-v1.18.0-ua.2-merged.bin) · 1,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4/gateway/heltec_v4_companion_radio_gateway-v1.18.0-ua.2.bin) · 1,8 МБ |

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
   esptool.py write_flash 0x0 heltec_v4_companion_radio_ble-v1.18.0-ua.2-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 heltec_v4_companion_radio_ble-v1.18.0-ua.2.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
c40a515292e7120a95c23f85a93b7c716a2fdcfd788d310b75a05533780185da  heltec_v4_companion_radio_ble-v1.18.0-ua.2-merged.bin
1f8456d75c91c1e9768c04b3f9daf0701a765dd75fd0281de70f64b61aa6e4f9  heltec_v4_companion_radio_ble-v1.18.0-ua.2.bin
1be892b2c9cabc68c3589442b760494a31e7d0f8973c367894f9aca958f1789d  heltec_v4_companion_radio_gateway-v1.18.0-ua.2-merged.bin
b194f28f9c2b1d321585962bf76e6137c8ee68c550d786eeae3649c4c171bef4  heltec_v4_companion_radio_gateway-v1.18.0-ua.2.bin
a5c2881b52c86dd6bc7ec4d8d5bbe24d453ea2d4d63ad8384b9075ca5d482239  heltec_v4_companion_radio_usb-v1.18.0-ua.2-merged.bin
6270d42bbe8dcd7bd077475240e4d6ba3b5ab21a5371ff4d77a9dc31c117a729  heltec_v4_companion_radio_usb-v1.18.0-ua.2.bin
02e2c4bc64088e84899fe80849e72675c3fa6af913de40425dc31bb811854869  heltec_v4_repeater-v1.18.0-ua.2-merged.bin
53a0694e28bca21fb863ca42c424e058030929046c6202ac085bce680f5421de  heltec_v4_repeater-v1.18.0-ua.2.bin
04159f8d0003e12bcbd44b234e41f65a8acb023f5d4fc6cffc8a3e32c22d4b48  heltec_v4_room_server-v1.18.0-ua.2-merged.bin
56e55425ec73eb09a20f4e4310a4508b758bd793f872d6b3e47681a86ba2a928  heltec_v4_room_server-v1.18.0-ua.2.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
