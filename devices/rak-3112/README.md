# RAK Wireless RAK3112 (ESP32-S3)

ESP32 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`gateway/`](gateway) — шлюз #ukraine.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Шлюз #ukraine**<br><sub>компаньйон Bluetooth + Wi-Fi, з’єднує місто з каналом #ukraine</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-3112/gateway/RAK_3112_companion_radio_gateway-v1.18.0-ua.2-merged.bin) · 1,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/rak-3112/gateway/RAK_3112_companion_radio_gateway-v1.18.0-ua.2.bin) · 1,8 МБ |

## Яку прошивку обрати

- **Шлюз #ukraine** — ваша нода для телефона, яка ще й сама по Wi-Fi з’єднує ваше місто з каналом #ukraine. Прошивається й підключається на meshcore.com.ua/gateway/.

**Нова установка** — для нового пристрою або переходу з іншої прошивки. **Оновлення** — якщо на платі вже MeshCore і налаштування треба зберегти.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

1. Встановіть esptool: `pip install esptool`.
2. Підключіть плату кабелем для даних. Якщо порт не з’являється — затисніть кнопку BOOT і натисніть RST.
3. **Нова установка** (стирає налаштування, ключі й контакти; налаштування мережі застосуються одразу):
   ```sh
   esptool.py erase_flash
   esptool.py write_flash 0x0 RAK_3112_companion_radio_gateway-v1.18.0-ua.2-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 RAK_3112_companion_radio_gateway-v1.18.0-ua.2.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
981f2a905c59b5f20a58c3ae6b5482d6e3fa24e06754224ddd486317a07531d2  RAK_3112_companion_radio_gateway-v1.18.0-ua.2-merged.bin
6d2ca38d6ef3715164a699f535e8d71aa73a1067b4eb32dd2ed19c8dba77a5ed  RAK_3112_companion_radio_gateway-v1.18.0-ua.2.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
