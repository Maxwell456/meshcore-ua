# Unit Engineering Station G2

ESP32 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/usb/Station_G2_companion_radio_usb-v1.18.0-ua.4-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/usb/Station_G2_companion_radio_usb-v1.18.0-ua.4.bin) · 0,7 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/repeater/Station_G2_repeater-v1.18.0-ua.4-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/repeater/Station_G2_repeater-v1.18.0-ua.4.bin) · 1,2 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/room-server/Station_G2_room_server-v1.18.0-ua.4-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/room-server/Station_G2_room_server-v1.18.0-ua.4.bin) · 1,1 МБ |

## Яку прошивку обрати

- **Компаньйон USB** — особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.
- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

**Нова установка** — для нового пристрою або переходу з іншої прошивки. **Оновлення** — якщо на платі вже MeshCore і налаштування треба зберегти.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

1. Встановіть esptool: `pip install esptool`.
2. Підключіть плату кабелем для даних. Якщо порт не з’являється — затисніть кнопку BOOT і натисніть RST.
3. **Нова установка** (стирає налаштування, ключі й контакти; налаштування мережі застосуються одразу):
   ```sh
   esptool.py erase_flash
   esptool.py write_flash 0x0 Station_G2_companion_radio_usb-v1.18.0-ua.4-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 Station_G2_companion_radio_usb-v1.18.0-ua.4.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
6f7b8ed916ec5e3b08bb4ccc4281b0d6ac1927af4691236675bde925c68d7164  Station_G2_companion_radio_usb-v1.18.0-ua.4-merged.bin
2e46346b8b42707c49f72af5a7295de601b523642986702d52231edfe01a89b9  Station_G2_companion_radio_usb-v1.18.0-ua.4.bin
854219bbdd419fb5791b406e1d2b00312f06f84ab1ed74a47012192e83ecdbf6  Station_G2_repeater-v1.18.0-ua.4-merged.bin
2bb19d2c7fb288d798d6140da3c93d0cf63a2abacf0655674d62e2a1b3f49622  Station_G2_repeater-v1.18.0-ua.4.bin
97898e5d1611a4a9c3b9ddaa0ed122d0e4941282ebd008be1db7a2cc0d0e5e67  Station_G2_room_server-v1.18.0-ua.4-merged.bin
c508a967e7b2e0b986596c97686ec81c434fb8200f64a0e607ee9f7cfb0f33ab  Station_G2_room_server-v1.18.0-ua.4.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
