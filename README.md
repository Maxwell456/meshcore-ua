# MeshCore Україна · прошивки

Прошивки [MeshCore](https://github.com/meshcore-dev/MeshCore) для мережі MeshCore Україна: частота, пресет і канали спільноти вже налаштовані — пристрій працює в мережі одразу після прошивки.

[![версія](https://img.shields.io/badge/%D0%B2%D0%B5%D1%80%D1%81%D1%96%D1%8F-1.18.0--ua.2-2f6f4f)](https://github.com/Maxwell456/meshcore-ua/releases/latest) [![MeshCore](https://img.shields.io/badge/MeshCore-1.18.0-2f6f4f)](https://github.com/meshcore-dev/MeshCore/commit/81dbae592ffad40b4212bc0b37e82b38da08f4bc) [![ліцензія](https://img.shields.io/badge/%D0%BB%D1%96%D1%86%D0%B5%D0%BD%D0%B7%D1%96%D1%8F-MIT-2f6f4f)](LICENSE)

**Прошити в браузері: [meshcore.com.ua/install](https://meshcore.com.ua/install/)** — Chrome або Edge і USB-кабель, без встановлення програм.
Для ручної прошивки оберіть пристрій у таблиці — на його сторінці файли й інструкція.

## Пристрої

Версія **1.18.0-ua.2** на основі MeshCore 1.18.0 · пристроїв: 18 · прошивок: 66

| Пристрій | Чип | Компаньйон Bluetooth | Компаньйон USB | Ретранслятор | Кімната |
|---|---|:-:|:-:|:-:|:-:|
| [Elecrow ThinkNode M1](devices/thinknode-m1/README.md) | nRF52 | + | + | + | + | — |
| [Heltec Mesh Node T114](devices/heltec-t114/README.md) | nRF52 | + | + | + | + | — |
| [Heltec Mesh Node T114 — без екрана](devices/heltec-t114-without-display/README.md) | nRF52 | + | + | + | + | — |
| [Heltec MeshSolar](devices/heltec-mesh-solar/README.md) | nRF52 | — | — | + | + | — |
| [Heltec WiFi LoRa 32 V3](devices/heltec-v3/README.md) | ESP32 | + | + | + | + | + |
| [Heltec WiFi LoRa 32 V4](devices/heltec-v4/README.md) | ESP32 | + | + | + | + | + |
| [Heltec WiFi LoRa 32 V4 — з tft-екраном](devices/heltec-v4-tft/README.md) | ESP32 | + | + | + | + | + |
| [LilyGO T-Beam S3 Supreme](devices/t-beam-s3-supreme-sx1262/README.md) | ESP32 | — | — | — | — | + |
| [LilyGO T-Echo](devices/lilygo-t-echo/README.md) | nRF52 | + | + | + | + | — |
| [RAK Wireless RAK3112 (ESP32-S3)](devices/rak-3112/README.md) | ESP32 | — | — | — | — | + |
| [RAK Wireless WisBlock RAK4631](devices/rak-4631/README.md) | nRF52 | + | + | + | + | — |
| [RAK Wireless WisMesh Tag](devices/rak-wismesh-tag/README.md) | nRF52 | + | + | + | + | — |
| [Seeed Studio SenseCAP Solar Node P1 / P1 Pro](devices/sensecap-solar/README.md) | nRF52 | + | + | + | + | — |
| [Seeed Studio SenseCAP T1000-E](devices/t1000e/README.md) | nRF52 | + | + | + | + | — |
| [Seeed Studio Wio Tracker L1](devices/wiotrackerl1/README.md) | nRF52 | + | + | + | + | — |
| [Seeed Studio XIAO nRF52840 + Wio-SX1262](devices/xiao-nrf52/README.md) | nRF52 | + | + | + | + | — |
| [Unit Engineering Station G2](devices/station-g2/README.md) | ESP32 | — | + | + | + | — |
| [Збірка своїми руками ProMicro nRF52840 + E22](devices/promicro/README.md) | nRF52 | + | + | + | + | — |

Перевірено на фізичному пристрої: Heltec WiFi LoRa 32 V3 · Компаньйон Bluetooth. Решта зібрана з того самого коду й пройшла автоматичну перевірку образів (чип, таблиця розділів, версія, канали), але на залізі ще не запускалась.

## Що налаштовано

**Радіо — для всіх типів вузлів**

| Параметр | Значення |
|---|---|
| Пресет | EU/UK (Narrow) |
| Частота | 869.618 МГц |
| Ширина смуги | 62.5 кГц |
| Spreading factor | 8 |
| Coding rate | 8 |

**Канали — для компаньйонів (Bluetooth і USB)**

| Канал | Ключ (hex) |
|---|---|
| Public | стандартний MeshCore |
| #ukraine | `d03885a8ae36092f5c9cab8c1b148b9f` |
| #kyiv | `8f73dc0e638ceb63428ee64799c7258c` |
| #kharkiv | `904dac9a6eca663181b0b3c1cdc1866f` |
| #dnipro | `98073c89ed1af3404026158c2ddff482` |
| #lviv | `099dab1ffaeee7d5b412cd9b50093a93` |
| #odesa | `7f1c47d3ff60f9926721a6f0ab75d2a0` |

Ключ хештег-каналу — перші 16 байт SHA-256 від назви з `#`, тож у застосунку канал можна додати й вручну за назвою. Це публічні канали: їх може читати кожен, хто знає назву.

Більше нічого не змінено. Ключі особистості генеруються на кожному пристрої; паролів, Wi-Fi чи приватних ключів у прошивках немає.
Збережені налаштування мають пріоритет: оновлення без стирання не змінює радіопараметри й канали.

## Як прошити вручну

<details>
<summary><b>ESP32</b> — Heltec V3, Heltec V4, Heltec V4 — з tft-екраном, LilyGO T-Beam S3 Supreme, RAK Wireless RAK3112 (ESP32-S3), Station G2</summary>

1. Встановіть esptool: `pip install esptool`.
2. Підключіть плату кабелем для даних. Якщо порт не з’являється — затисніть кнопку BOOT і натисніть RST.
3. **Нова установка** (стирає налаштування, ключі й контакти; налаштування мережі застосуються одразу):
   ```sh
   esptool.py erase_flash
   esptool.py write_flash 0x0 <файл>-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 <файл>.bin
   ```

</details>

<details>
<summary><b>nRF52</b> — Elecrow, Heltec, LilyGO, RAK, Seeed, Збірка</summary>

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `<файл>.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package <файл>.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

</details>

## Перевірка файлів

Завантажте `SHA256SUMS.txt` з [релізу](https://github.com/Maxwell456/meshcore-ua/releases/latest) у теку з прошивками:

```sh
sha256sum -c SHA256SUMS.txt --ignore-missing
```

## Оновлення

Нова версія з’являється автоматично, щойно виходить стабільний реліз MeshCore: [GitHub Actions](https://github.com/Maxwell456/meshcore-ua/actions) збирає прошивки для всіх пристроїв, перевіряє кожен образ і публікує тут, а [meshcore.com.ua](https://meshcore.com.ua/firmware/) підтягує їх сам.
Щоб отримувати сповіщення — **Watch → Custom → Releases** угорі сторінки. Усі версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).

## Збірка з вихідного коду

Вихідний код MeshCore з нашим патчем — `source.zip` у кожному релізі:

```sh
pio run -e Heltec_v3_companion_radio_ble -t mergebin
pio run -e RAK_4631_companion_radio_ble
```

Налаштування мережі, каналів і список плат — у [`config.json`](config.json). Скрипт збірки й код початкових налаштувань з тестом — у [`tools/`](tools), сценарій збірки — у [`.github/workflows/build.yml`](.github/workflows/build.yml).

## Ліцензія

MeshCore — MIT, © Scott Powell / rippleradios.com ([LICENSE-MeshCore.txt](LICENSE-MeshCore.txt)). Скрипти збірки — MIT ([LICENSE](LICENSE)).

Спільнота: [meshcore.com.ua](https://meshcore.com.ua) · [Telegram](https://t.me/meshcore_ukraine)
