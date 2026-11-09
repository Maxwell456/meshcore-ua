# LilyGO T-Beam S3 Supreme

ESP32 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`gateway/`](gateway) — шлюз #ukraine.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Шлюз #ukraine**<br><sub>компаньйон Bluetooth + Wi-Fi, з’єднує місто з каналом #ukraine</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t-beam-s3-supreme-sx1262/gateway/T_Beam_S3_Supreme_SX1262_companion_radio_gateway-v1.18.0-ua.2-merged.bin) · 1,9 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/t-beam-s3-supreme-sx1262/gateway/T_Beam_S3_Supreme_SX1262_companion_radio_gateway-v1.18.0-ua.2.bin) · 1,8 МБ |

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
   esptool.py write_flash 0x0 T_Beam_S3_Supreme_SX1262_companion_radio_gateway-v1.18.0-ua.2-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 T_Beam_S3_Supreme_SX1262_companion_radio_gateway-v1.18.0-ua.2.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
528dd95dc9a6000bef2ab0e2a86712de84c2506ec0a934c007a09798fcc4e4cc  T_Beam_S3_Supreme_SX1262_companion_radio_gateway-v1.18.0-ua.2-merged.bin
835784a804b5f07e3a7852b41400eed5b9c6a370db7dea87627f30ad1e3a7453  T_Beam_S3_Supreme_SX1262_companion_radio_gateway-v1.18.0-ua.2.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
