# Unit Engineering Station G2

ESP32 · MeshCore Україна **1.18.0-ua.1** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.1](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.1)

Файли лежать у теках за типом вузла: [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/usb/Station_G2_companion_radio_usb-v1.18.0-ua.1-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/usb/Station_G2_companion_radio_usb-v1.18.0-ua.1.bin) · 0,7 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/repeater/Station_G2_repeater-v1.18.0-ua.1-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/repeater/Station_G2_repeater-v1.18.0-ua.1.bin) · 1,2 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/room-server/Station_G2_room_server-v1.18.0-ua.1-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/room-server/Station_G2_room_server-v1.18.0-ua.1.bin) · 1,1 МБ |

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
   esptool.py write_flash 0x0 Station_G2_companion_radio_usb-v1.18.0-ua.1-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 Station_G2_companion_radio_usb-v1.18.0-ua.1.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
9884f1a0559035d5b5f11e551f04557c1245ead1e7032fe2266bb5019d60befa  Station_G2_companion_radio_usb-v1.18.0-ua.1-merged.bin
d54b32f7ec27ef56e31220a6aa9c8dfcc71d053c4671e0b2fc9e1fa41cded5f0  Station_G2_companion_radio_usb-v1.18.0-ua.1.bin
50ed5db9ef8f797f468124aa6d9a37cad08e3eae735bad8445cfbe975d6947f6  Station_G2_repeater-v1.18.0-ua.1-merged.bin
3d69053906f1495b598d95bff1c6e3476416cb18969503c7fbfeda21e89016f4  Station_G2_repeater-v1.18.0-ua.1.bin
5bd848d198b8d881f2457b41ca9042f2e7866151ac27b472d9c74211a28cf75e  Station_G2_room_server-v1.18.0-ua.1-merged.bin
5f817578a5f74fb1158ea096970f5157999b1f504c721e15bd7e670496e5bf15  Station_G2_room_server-v1.18.0-ua.1.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
