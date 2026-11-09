# Heltec MeshSolar

nRF52 · MeshCore Україна **1.18.0-ua.4** · MeshCore 1.18.0

[← Усі пристрої](../../README.md) · [Прошити в браузері](https://meshcore.com.ua/install/) · [Реліз v1.18.0-ua.4](https://github.com/Maxwell456/meshcore-ua/releases/tag/v1.18.0-ua.4)

Файли лежать у теках за типом вузла: [`repeater/`](repeater) — ретранслятор, [`room-server/`](room-server) — кімната.

## Завантажити

| Тип вузла | UF2 | DFU-пакет (ZIP) |
|---|---|---|
| **Ретранслятор**<br><sub>пересилає повідомлення, розширює покриття</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-mesh-solar/repeater/Heltec_mesh_solar_repeater-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-mesh-solar/repeater/Heltec_mesh_solar_repeater-v1.18.0-ua.4.zip) · 0,3 МБ |
| **Кімната**<br><sub>зберігає історію повідомлень для учасників</sub> | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-mesh-solar/room-server/Heltec_mesh_solar_room_server-v1.18.0-ua.4.uf2) · 0,7 МБ | [Завантажити](https://github.com/Maxwell456/meshcore-ua/raw/main/devices/heltec-mesh-solar/room-server/Heltec_mesh_solar_room_server-v1.18.0-ua.4.zip) · 0,3 МБ |

## Яку прошивку обрати

- **Ретранслятор** — ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.
- **Кімната** — зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.

## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](https://meshcore.com.ua/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, `RAK4631`, `TECHOBOOT` чи `T1000-E`). Скопіюйте на нього `Heltec_mesh_solar_repeater-v1.18.0-ua.4.uf2`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
```sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package Heltec_mesh_solar_repeater-v1.18.0-ua.4.zip -p <порт> -b 115200 --touch 1200
```

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

```text
280a6212b54adc64f31ef78e940f4793abf3b90a63054c13f6b5c94ebc20b2e3  Heltec_mesh_solar_repeater-v1.18.0-ua.4.uf2
706b4ff07434ad58cb5a9d7bc908e1f64c664edcdd6bde8b51f94ab62160e5ca  Heltec_mesh_solar_repeater-v1.18.0-ua.4.zip
bbe0731f8b9566b4c0934b3112d53ec55cc5b46fd1b0651d202104d1151ad3b6  Heltec_mesh_solar_room_server-v1.18.0-ua.4.uf2
b816bc3f3777b063d47786683db6acdf27eeb429498b4c0ceebebf81c899046e  Heltec_mesh_solar_room_server-v1.18.0-ua.4.zip
```

</details>

Попередні версії — у [релізах](https://github.com/Maxwell456/meshcore-ua/releases).
