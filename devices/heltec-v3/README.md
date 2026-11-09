# Heltec WiFi LoRa 32 V3

ESP32 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната, [`gateway/`](gateway) — шлюз #ukraine.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон Bluetooth** ✓<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/bluetooth/Heltec_v3_companion_radio_ble-v1.18.0-ua.2-merged.bin) · 1,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/bluetooth/Heltec_v3_companion_radio_ble-v1.18.0-ua.2.bin) · 1,6 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/usb/Heltec_v3_companion_radio_usb-v1.18.0-ua.2-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/usb/Heltec_v3_companion_radio_usb-v1.18.0-ua.2.bin) · 0,6 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/repeater/Heltec_v3_repeater-v1.18.0-ua.2-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/repeater/Heltec_v3_repeater-v1.18.0-ua.2.bin) · 1,1 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/room-server/Heltec_v3_room_server-v1.18.0-ua.2-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/room-server/Heltec_v3_room_server-v1.18.0-ua.2.bin) · 1,1 МБ |
| **Шлюз #ukraine**<br><sub>компаньйон Bluetooth + Wi-Fi, з’єднує місто з каналом #ukraine</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/gateway/Heltec_v3_companion_radio_gateway-v1.18.0-ua.2-merged.bin) · 1,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/gateway/Heltec_v3_companion_radio_gateway-v1.18.0-ua.2.bin) · 1,8 МБ |

✓ — перевірено на фізичному пристрої.

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
   esptool.py write_flash 0x0 Heltec_v3_companion_radio_ble-v1.18.0-ua.2-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 Heltec_v3_companion_radio_ble-v1.18.0-ua.2.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
8968dfdc01d3c914b605da7dd43b27f4bcf82aea259f1ca3d40830c8aca755fa  Heltec_v3_companion_radio_ble-v1.18.0-ua.2-merged.bin
58d01365ed1acfdc505ffeb901abc02892ab0ceb287832693069c64f55adb4c4  Heltec_v3_companion_radio_ble-v1.18.0-ua.2.bin
2ddd32e2e071a32a69abc5d5dc4cac483d901dcb8fa6f33f895f88b8a91810ac  Heltec_v3_companion_radio_gateway-v1.18.0-ua.2-merged.bin
69a81a56ae3b8bd35bc1a07be8237b93d0d2566259eeac6454d17b07f9b7eb49  Heltec_v3_companion_radio_gateway-v1.18.0-ua.2.bin
7c8ddbdceb05f3c76155c360335db87b10f7d1cc049c51f088a4fdba9a14c790  Heltec_v3_companion_radio_usb-v1.18.0-ua.2-merged.bin
cf2cd17ee3d33c23660e6fd68944bfd46f476ba382037b7b9158edd4d2013270  Heltec_v3_companion_radio_usb-v1.18.0-ua.2.bin
190a6ac34101730e4693861b88b77b3055360324f49a01be91719cac204dfa3a  Heltec_v3_repeater-v1.18.0-ua.2-merged.bin
c6e865fe57b87f06f53cd7e754ff80f9d468056198220daed0e9c93f927ae466  Heltec_v3_repeater-v1.18.0-ua.2.bin
40537f0c97bf86e40196ff1363595461959c3573f9746d96b85583e2f10bb975  Heltec_v3_room_server-v1.18.0-ua.2-merged.bin
558ecfa5bc4a270810ce0f52a80b79fe317644e4e3d242880cda1a5c0d7f7da4  Heltec_v3_room_server-v1.18.0-ua.2.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
