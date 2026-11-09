# Unit Engineering Station G2

ESP32 · MeshCore Україна **1.18.0-ua.2** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.2](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.2)

Файли лежать у теках за типом вузла: [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/usb/Station_G2_companion_radio_usb-v1.18.0-ua.2-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/usb/Station_G2_companion_radio_usb-v1.18.0-ua.2.bin) · 0,7 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/repeater/Station_G2_repeater-v1.18.0-ua.2-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/repeater/Station_G2_repeater-v1.18.0-ua.2.bin) · 1,2 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/room-server/Station_G2_room_server-v1.18.0-ua.2-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/room-server/Station_G2_room_server-v1.18.0-ua.2.bin) · 1,1 МБ |

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
   esptool.py write_flash 0x0 Station_G2_companion_radio_usb-v1.18.0-ua.2-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 Station_G2_companion_radio_usb-v1.18.0-ua.2.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
46cba149eed8fc0608d6378b312f38a9095122ee56e7f31fdd150a6a1ec3c22e  Station_G2_companion_radio_usb-v1.18.0-ua.2-merged.bin
5878dab00df40438474ad911851b058b1662adc91271db06b10bf05239d1b9ae  Station_G2_companion_radio_usb-v1.18.0-ua.2.bin
e88c27ca63808b797bb517610a28bf1cf2bb4603d1a82e7f0cb05e8bfc2af4c4  Station_G2_repeater-v1.18.0-ua.2-merged.bin
859f30e3f58a3927588ff2868c31bd8d3617101955379480c3d9a72789a5e9d3  Station_G2_repeater-v1.18.0-ua.2.bin
ecc67cedffa66e749401a9a43023fe732132677f84a6305446597f2d511e6d61  Station_G2_room_server-v1.18.0-ua.2-merged.bin
7c2dd46446c7aebcbf4a4e8f458c1d6e28541892dc319d264a1b02a584705d77  Station_G2_room_server-v1.18.0-ua.2.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
