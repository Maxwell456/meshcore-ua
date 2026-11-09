# Heltec WiFi LoRa 32 V4 — з tft-екраном

ESP32 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната, [`gateway/`](gateway) — шлюз #ukraine.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон Bluetooth**<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/bluetooth/heltec_v4_tft_companion_radio_ble-v1.18.0-ua.2-merged.bin) · 1,3 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/bluetooth/heltec_v4_tft_companion_radio_ble-v1.18.0-ua.2.bin) · 1,2 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/usb/heltec_v4_tft_companion_radio_usb-v1.18.0-ua.2-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/usb/heltec_v4_tft_companion_radio_usb-v1.18.0-ua.2.bin) · 0,6 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/repeater/heltec_v4_tft_repeater-v1.18.0-ua.2-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/repeater/heltec_v4_tft_repeater-v1.18.0-ua.2.bin) · 1,1 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/room-server/heltec_v4_tft_room_server-v1.18.0-ua.2-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/room-server/heltec_v4_tft_room_server-v1.18.0-ua.2.bin) · 1,1 МБ |
| **Шлюз #ukraine**<br><sub>компаньйон Bluetooth + Wi-Fi, з’єднує місто з каналом #ukraine</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/gateway/heltec_v4_tft_companion_radio_gateway-v1.18.0-ua.2-merged.bin) · 1,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v4-tft/gateway/heltec_v4_tft_companion_radio_gateway-v1.18.0-ua.2.bin) · 1,8 МБ |

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
   esptool.py write_flash 0x0 heltec_v4_tft_companion_radio_ble-v1.18.0-ua.2-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 heltec_v4_tft_companion_radio_ble-v1.18.0-ua.2.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
dad77c48e1d00d96736d9db18604c5bf7133c474575062bc437bdd4c4bc91db2  heltec_v4_tft_companion_radio_ble-v1.18.0-ua.2-merged.bin
c5e02d694cd0c8c6b68793573ba80381a581a081f0df89deda8e49ed464f3460  heltec_v4_tft_companion_radio_ble-v1.18.0-ua.2.bin
b00c398564fb31ec3dcfa9c0e13246211dcd2939c8498db58145aaad2460de3e  heltec_v4_tft_companion_radio_gateway-v1.18.0-ua.2-merged.bin
a73439a6a4281498be8846f63295d9472f9b5c44b734f92c286a7bc8301676c0  heltec_v4_tft_companion_radio_gateway-v1.18.0-ua.2.bin
be15c2e432ad02f0d995931033aac6b233e7df0f1f3027b4d08d43c833353a65  heltec_v4_tft_companion_radio_usb-v1.18.0-ua.2-merged.bin
66cb0563a50cf0a7701320718edf860a15470422803b9f0a57324b89ded37934  heltec_v4_tft_companion_radio_usb-v1.18.0-ua.2.bin
149cb88cb4557b9e79774605638a1adffcc3a2a0d6c2988f4445610855b4fe5e  heltec_v4_tft_repeater-v1.18.0-ua.2-merged.bin
6c58157fddc27a6dae1b5c67e21e8565730d363252dfd3366c53f86cd4551a4b  heltec_v4_tft_repeater-v1.18.0-ua.2.bin
da38f866378d1866217147a4128b59a033ac006832850513fd90016a7a464c43  heltec_v4_tft_room_server-v1.18.0-ua.2-merged.bin
3468dee004fcc8fab16641e11b60b56b69613db837867ed5f36fa2a53c8bce1c  heltec_v4_tft_room_server-v1.18.0-ua.2.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
