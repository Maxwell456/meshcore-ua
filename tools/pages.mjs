#!/usr/bin/env node
/**
 * Генерує вміст репозиторію з dist/manifest.json (після tools/build.mjs assemble):
 *   README.md — огляд, таблиця пристроїв, налаштування, інструкції;
 *   devices/<плата>/README.md і файли поточної версії в теках за типом вузла (bluetooth, usb, repeater, room-server);
 *   RELEASE-NOTES.md — опис релізу (не комітиться).
 * Старі файли в devices/ замінюються новими; попередні версії лишаються в релізах.
 */
import { readFile, writeFile, mkdir, rm, copyFile } from 'node:fs/promises';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const p = JSON.parse(await readFile(join(dist, 'manifest.json'), 'utf8'));
const repo = process.env.GITHUB_REPOSITORY || 'Maxwell456/meshcore-ua';
const tag = `v${p.version}`;
const site = 'https://meshcore.com.ua';
const ghUrl = `https://github.com/${repo}`;
const dl = (name) => `${ghUrl}/releases/download/${tag}/${name}`;

const ROLES = [
  ['companion', 'Компаньйон Bluetooth', 'для телефона, застосунок MeshCore'],
  ['companion_usb', 'Компаньйон USB', 'для комп’ютера, веб-застосунок через кабель'],
  ['repeater', 'Ретранслятор', 'пересилає повідомлення, розширює покриття'],
  ['room_server', 'Кімната', 'зберігає історію повідомлень для учасників'],
];
const ROLE_DIR = { companion: 'bluetooth', companion_usb: 'usb', repeater: 'repeater', room_server: 'room-server' };
const raw = (b, role, name) => `${ghUrl}/raw/main/devices/${b.slug}/${ROLE_DIR[role]}/${name}`;
const slug = (board) => board.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const boards = Object.entries(p.boards)
  .map(([key, e]) => ({ key, slug: slug(key), name: e.name || key, chip: e.chip, roles: e.roles }))
  .sort((a, b) => a.name.localeCompare(b.name, 'en'));
const allFiles = boards.flatMap((b) => Object.values(b.roles).flatMap((r) => Object.values(r.files)));
const tested = boards.flatMap((b) => Object.entries(b.roles).filter(([, r]) => r.hardwareTested).map(([role]) => `${b.name} · ${ROLES.find(([k]) => k === role)[1]}`));
const n = p.network;
const changes = [
  `- **Усі ролі:** радіопараметри за замовчуванням — пресет ${n.presetName}: ${n.frequencyMHz} МГц, ${n.bandwidthKHz} кГц, SF${n.spreadingFactor}, CR${n.codingRate}.`,
  `- **Компаньйони (Bluetooth і USB):** на чистому пристрої вже додано канали ${p.channels.map((c) => c.name).join(', ')}. Public лишається в слоті 0.`,
  '- Рядок версії й дата збірки. Більше нічого: ключі особистості генеруються на кожному пристрої, паролів, Wi-Fi чи приватних ключів у збірці немає.',
].join('\n');
const testedNote = `Перевірено на фізичному пристрої: ${tested.join('; ') || 'поки нічого'}. Решта зібрана з того самого коду й пройшла автоматичну перевірку образів (чип, таблиця розділів, версія, канали), але на залізі ще не запускалась.`;

const mb = (bytes) => `${(bytes / 1048576).toFixed(1).replace('.', ',')} МБ`;
const chipName = (b) => (b.chip === 'esp32' ? 'ESP32' : 'nRF52');
const espBoards = () => boards.filter((b) => b.chip === 'esp32').map((b) => b.name.replace(/^Heltec WiFi LoRa 32 /, 'Heltec ').replace(/^Unit Engineering /, '')).join(', ');
const nrfBoards = () => [...new Set(boards.filter((b) => b.chip !== 'esp32').map((b) => b.name.split(' ')[0]))].join(', ');

const flashEsp = (merged = '<файл>-merged.bin', bin = '<файл>.bin') => `1. Встановіть esptool: \`pip install esptool\`.
2. Підключіть плату кабелем для даних. Якщо порт не з’являється — затисніть кнопку BOOT і натисніть RST.
3. **Нова установка** (стирає налаштування, ключі й контакти; налаштування мережі застосуються одразу):
   \`\`\`sh
   esptool.py erase_flash
   esptool.py write_flash 0x0 ${merged}
   \`\`\`
4. **Оновлення** (зберігає налаштування, канали й ключі):
   \`\`\`sh
   esptool.py write_flash 0x10000 ${bin}
   \`\`\``;

const flashNrf = (uf2 = '<файл>.uf2', zip = '<файл>.zip') => `**UF2 (найпростіше)**
1. Підключіть пристрій кабелем для даних і двічі швидко натисніть Reset.
2. З’явиться диск (наприклад, \`RAK4631\`, \`TECHOBOOT\` чи \`T1000-E\`). Скопіюйте на нього \`${uf2}\`.
3. Пристрій перезавантажиться сам.

**DFU через USB**
\`\`\`sh
pip install adafruit-nrfutil
adafruit-nrfutil dfu serial --package ${zip} -p <порт> -b 115200 --touch 1200
\`\`\`

Прошивка на nRF52 не стирає налаштування. Якщо пристрій уже працював з MeshCore, після прошивки скиньте його до заводських налаштувань у застосунку — тоді з’являться канали спільноти.`;

const ROLE_HINT = {
  companion: 'особистий пристрій для телефона. Повідомлення пишете в застосунку MeshCore через Bluetooth.',
  companion_usb: 'особистий пристрій для комп’ютера. Повідомлення — у веб-застосунку через USB-кабель, Bluetooth вимкнено.',
  repeater: 'ставиться високо з постійним живленням і пересилає чужі повідомлення. Телефоном не користуються.',
  room_server: 'зберігає історію повідомлень, щоб учасники отримали пропущене, коли з’являться в мережі.',
};

function boardPage(b) {
  const esp = b.chip === 'esp32';
  const roles = ROLES.filter(([k]) => b.roles[k]);
  const link = (f, role) => `[Завантажити](${raw(b, role, f.name)}) · ${mb(f.size)}`;
  const head = esp ? '| Тип вузла | Нова установка | Оновлення |' : '| Тип вузла | UF2 | DFU-пакет (ZIP) |';
  const rows = roles.map(([k, title, hint]) => {
    const f = b.roles[k].files;
    const [a, c] = esp ? [f.merged, f.bin] : [f.uf2, f.zip];
    return `| **${title}**${b.roles[k].hardwareTested ? ' ✓' : ''}<br><sub>${hint}</sub> | ${link(a, k)} | ${link(c, k)} |`;
  });
  const files = roles.flatMap(([k]) => Object.values(b.roles[k].files)).sort((x, y) => x.name.localeCompare(y.name));
  const ex = b.roles[roles[0][0]].files;
  return `# ${b.name}

${chipName(b)} · MeshCore Україна **${p.version}** · MeshCore ${p.upstream.version}

[← Усі пристрої](../../README.md) · [Прошити в браузері](${site}/install/) · [Реліз ${tag}](${ghUrl}/releases/tag/${tag})

Файли лежать у теках за типом вузла: ${roles.map(([k, title]) => `[\`${ROLE_DIR[k]}/\`](${ROLE_DIR[k]}) — ${title[0].toLowerCase() + title.slice(1)}`).join(', ')}.

## Завантажити

${head}
|---|---|---|
${rows.join('\n')}
${rows.some((r) => r.includes('✓')) ? '\n✓ — перевірено на фізичному пристрої.\n' : ''}
## Яку прошивку обрати

${roles.map(([k, title]) => `- **${title}** — ${ROLE_HINT[k]}`).join('\n')}
${esp ? '\n**Нова установка** — для нового пристрою або переходу з іншої прошивки. **Оновлення** — якщо на платі вже MeshCore і налаштування треба зберегти.\n' : ''}
## Як прошити

Найпростіше — у браузері на [meshcore.com.ua/install](${site}/install/): Chrome або Edge, USB-кабель, без встановлення програм. Вручну:

${esp ? flashEsp(ex.merged.name, ex.bin.name) : flashNrf(ex.uf2.name, ex.zip.name)}

## Контрольні суми

<details>
<summary>SHA-256 файлів цього пристрою</summary>

\`\`\`text
${files.map((f) => `${f.sha256}  ${f.name}`).join('\n')}
\`\`\`

</details>

Попередні версії — у [релізах](${ghUrl}/releases).
`;
}

function mainReadme() {
  const total = boards.reduce((s, b) => s + Object.keys(b.roles).length, 0);
  const table = boards.map((b) => `| [${b.name}](devices/${b.slug}/README.md) | ${chipName(b)} | ${ROLES.map(([k]) => (b.roles[k] ? '+' : '—')).join(' | ')} |`);
  const badge = (label, message, url) => `[![${label}](https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(message.replace(/-/g, '--'))}-2f6f4f)](${url})`;
  return `# MeshCore Україна · прошивки

Прошивки [MeshCore](https://github.com/meshcore-dev/MeshCore) для мережі MeshCore Україна: частота, пресет і канали спільноти вже налаштовані — пристрій працює в мережі одразу після прошивки.

${badge('версія', p.version, `${ghUrl}/releases/latest`)} ${badge('MeshCore', p.upstream.version, `https://github.com/meshcore-dev/MeshCore/commit/${p.upstream.commit}`)} ${badge('ліцензія', 'MIT', 'LICENSE')}

**Прошити в браузері: [meshcore.com.ua/install](${site}/install/)** — Chrome або Edge і USB-кабель, без встановлення програм.
Для ручної прошивки оберіть пристрій у таблиці — на його сторінці файли й інструкція.

## Пристрої

Версія **${p.version}** на основі MeshCore ${p.upstream.version} · пристроїв: ${boards.length} · прошивок: ${total}

| Пристрій | Чип | Компаньйон Bluetooth | Компаньйон USB | Ретранслятор | Кімната |
|---|---|:-:|:-:|:-:|:-:|
${table.join('\n')}

${testedNote}

## Що налаштовано

**Радіо — для всіх типів вузлів**

| Параметр | Значення |
|---|---|
| Пресет | ${n.presetName} |
| Частота | ${n.frequencyMHz} МГц |
| Ширина смуги | ${n.bandwidthKHz} кГц |
| Spreading factor | ${n.spreadingFactor} |
| Coding rate | ${n.codingRate} |

**Канали — для компаньйонів (Bluetooth і USB)**

| Канал | Ключ (hex) |
|---|---|
| Public | стандартний MeshCore |
${p.channels.map((c) => `| ${c.name} | \`${c.keyHex}\` |`).join('\n')}

Ключ хештег-каналу — перші 16 байт SHA-256 від назви з \`#\`, тож у застосунку канал можна додати й вручну за назвою. Це публічні канали: їх може читати кожен, хто знає назву.

Більше нічого не змінено. Ключі особистості генеруються на кожному пристрої; паролів, Wi-Fi чи приватних ключів у прошивках немає.
Збережені налаштування мають пріоритет: оновлення без стирання не змінює радіопараметри й канали.

## Як прошити вручну

<details>
<summary><b>ESP32</b> — ${espBoards()}</summary>

${flashEsp()}

</details>

<details>
<summary><b>nRF52</b> — ${nrfBoards()}</summary>

${flashNrf()}

</details>

## Перевірка файлів

Завантажте \`SHA256SUMS.txt\` з [релізу](${ghUrl}/releases/latest) у теку з прошивками:

\`\`\`sh
sha256sum -c SHA256SUMS.txt --ignore-missing
\`\`\`

## Оновлення

Нова версія з’являється автоматично, щойно виходить стабільний реліз MeshCore: [GitHub Actions](${ghUrl}/actions) збирає прошивки для всіх пристроїв, перевіряє кожен образ і публікує тут, а [meshcore.com.ua](${site}/firmware/) підтягує їх сам.
Щоб отримувати сповіщення — **Watch → Custom → Releases** угорі сторінки. Усі версії — у [релізах](${ghUrl}/releases).

## Збірка з вихідного коду

Вихідний код MeshCore з нашим патчем — \`source.zip\` у кожному релізі:

\`\`\`sh
pio run -e Heltec_v3_companion_radio_ble -t mergebin
pio run -e RAK_4631_companion_radio_ble
\`\`\`

Налаштування мережі, каналів і список плат — у [\`config.json\`](config.json). Скрипт збірки й код початкових налаштувань з тестом — у [\`tools/\`](tools), сценарій збірки — у [\`.github/workflows/build.yml\`](.github/workflows/build.yml).

## Ліцензія

MeshCore — MIT, © Scott Powell / rippleradios.com ([LICENSE-MeshCore.txt](LICENSE-MeshCore.txt)). Скрипти збірки — MIT ([LICENSE](LICENSE)).

Спільнота: [meshcore.com.ua](${site}) · [Telegram](https://t.me/meshcore_ukraine)
`;
}

function releaseNotes() {
  return `MeshCore Україна **${p.version}** на основі MeshCore [${p.upstream.version}](https://github.com/meshcore-dev/MeshCore/commit/${p.upstream.commit}).

Прошити в браузері: ${site}/install/

${changes}

**Пристрої** (сторінка кожної плати — з таблицею за типом вузла й інструкцією):
${boards.map((b) => `- [${b.name}](${ghUrl}/blob/main/devices/${b.slug}/README.md)`).join('\n')}

${testedNote}

ESP32: \`*-merged.bin\` — повна установка (0x0), \`*.bin\` — оновлення (0x10000). nRF52: \`*.uf2\` або \`*.zip\` (DFU). Суми — у SHA256SUMS.txt.`;
}


await rm(join(root, 'devices'), { recursive: true, force: true });
for (const b of boards) {
  await mkdir(join(root, 'devices', b.slug), { recursive: true });
  await writeFile(join(root, 'devices', b.slug, 'README.md'), boardPage(b));
  for (const [role, r] of Object.entries(b.roles)) {
    const dir = join(root, 'devices', b.slug, ROLE_DIR[role]);
    await mkdir(dir, { recursive: true });
    for (const f of Object.values(r.files)) await copyFile(join(dist, f.name), join(dir, f.name));
  }
}
await writeFile(join(root, 'README.md'), mainReadme());
await writeFile(join(root, 'manifest.json'), JSON.stringify(p, null, 2) + '\n');
await writeFile(join(dist, 'RELEASE-NOTES.md'), releaseNotes());
console.log(`Сторінки: ${boards.length} плат, ${tag}`);
