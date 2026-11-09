# Unit Engineering Station G2

ESP32 · MeshCore Україна **1.18.0-ua.3** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.3](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.3)

Файли лежать у теках за типом вузла: [`usb/`](usb) — компаньйон USB, [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | Нова установка | Оновлення |
|---|---|---|
| **Компаньйон USB**<br><sub>для комп’ютера, веб-застосунок через кабель</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/usb/Station_G2_companion_radio_usb-v1.18.0-ua.3-merged.bin) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/usb/Station_G2_companion_radio_usb-v1.18.0-ua.3.bin) · 0,7 МБ |
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/repeater/Station_G2_repeater-v1.18.0-ua.3-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/repeater/Station_G2_repeater-v1.18.0-ua.3.bin) · 1,2 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/room-server/Station_G2_room_server-v1.18.0-ua.3-merged.bin) · 1,2 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/station-g2/room-server/Station_G2_room_server-v1.18.0-ua.3.bin) · 1,1 МБ |

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
   esptool.py write_flash 0x0 Station_G2_companion_radio_usb-v1.18.0-ua.3-merged.bin
   ```
4. **Оновлення** (зберігає налаштування, канали й ключі):
   ```sh
   esptool.py write_flash 0x10000 Station_G2_companion_radio_usb-v1.18.0-ua.3.bin
   ```

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
94587d5f13626901620de2f73a339ad18b238317fc8c3af95fae892fb51ec4c1  Station_G2_companion_radio_usb-v1.18.0-ua.3-merged.bin
9795e33077b23aceae9963a3f6a14a4262a53f174a7101c5a640a063a0d938a9  Station_G2_companion_radio_usb-v1.18.0-ua.3.bin
82678fad677087b8f4205c248c8e92392dc6cc3980dfe3639acbd88dfa82152a  Station_G2_repeater-v1.18.0-ua.3-merged.bin
6b980bfb5e84583a3c99261898187074560d52929eecb3713a39b07ea8d109ad  Station_G2_repeater-v1.18.0-ua.3.bin
0b073ce230d8d3f16e40c0dc14dcfa027baf6508c926d13820e9bd48b1d977ca  Station_G2_room_server-v1.18.0-ua.3-merged.bin
ceca98654ede9dfe3b6d908ee4675c22c439bfe52425b913173d7bf971e3fee2  Station_G2_room_server-v1.18.0-ua.3.bin
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
