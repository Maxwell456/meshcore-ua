# Heltec WiFi LoRa 32 V3

ESP32 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`bluetooth/`](bluetooth) — компаньйон Bluetooth, [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната, [`gateway/`](gateway) — шлюз #ukraine.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон Bluetooth** ✓<br><sub>для телефона, застосунок MeshCore</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/bluetooth/Heltec_v3_companion_radio_ble-v1.18.0-ua.4-merged.bin) · 1,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/bluetooth/Heltec_v3_companion_radio_ble-v1.18.0-ua.4.bin) · 1,6 МБ |
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/usb/Heltec_v3_companion_radio_usb-v1.18.0-ua.4-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/usb/Heltec_v3_companion_radio_usb-v1.18.0-ua.4.bin) · 0,6 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/repeater/Heltec_v3_repeater-v1.18.0-ua.4-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/repeater/Heltec_v3_repeater-v1.18.0-ua.4.bin) · 1,1 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/room-server/Heltec_v3_room_server-v1.18.0-ua.4-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/room-server/Heltec_v3_room_server-v1.18.0-ua.4.bin) · 1,1 МБ |
| **Шлюз #ukraine**<br><sub>компаньйон Bluetooth + Wi-Fi, з’єднує місто з каналом #ukraine</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/gateway/Heltec_v3_companion_radio_gateway-v1.18.0-ua.4-merged.bin) · 1,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-v3/gateway/Heltec_v3_companion_radio_gateway-v1.18.0-ua.4.bin) · 1,8 МБ |

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
   esptool.py write_flash 0x0 Heltec_v3_companion_radio_ble-v1.18.0-ua.4-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 Heltec_v3_companion_radio_ble-v1.18.0-ua.4.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
776d7e0db6a6dfa1053740020b6a2b6ecbb4c10d2b0779d3e41718c0e80dddf1  Heltec_v3_companion_radio_ble-v1.18.0-ua.4-merged.bin
eadf13f2ee517f0a2585c82ae5930016567df9cca712c1188501ad0006a6d201  Heltec_v3_companion_radio_ble-v1.18.0-ua.4.bin
a23066504979f962b07e6d7aca226bdd2028414bb0e3d09bba980b78e52445ff  Heltec_v3_companion_radio_gateway-v1.18.0-ua.4-merged.bin
1528dcc2e1d978dea9146a2c3c30fe99655974b530373476e80e096bbfb942e1  Heltec_v3_companion_radio_gateway-v1.18.0-ua.4.bin
a0b3108fef515017f6b480fe4ddb30aa010e6479ccdc7be214b5ba6f38a77fd8  Heltec_v3_companion_radio_usb-v1.18.0-ua.4-merged.bin
256b89c493c7846b59a3a5da999c764279b0fe1669ed400903bddd9f3e4dd29d  Heltec_v3_companion_radio_usb-v1.18.0-ua.4.bin
ba82c5b5f0efd933f9cc529edbfcf5a9b8fbede7d92812a640f2cf3ddde11998  Heltec_v3_repeater-v1.18.0-ua.4-merged.bin
6a108c53eb948b438fe32d7b255f6fe2f64125c55b6bce6edba9ba2b528c1192  Heltec_v3_repeater-v1.18.0-ua.4.bin
aada742188f0b0ac38dd65a395920cd93f7b745428836e8562a5cac20378507c  Heltec_v3_room_server-v1.18.0-ua.4-merged.bin
909d4165ead013952e7c281e95dcbaed7e733f79bd6bc01b76165b803755410c  Heltec_v3_room_server-v1.18.0-ua.4.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
