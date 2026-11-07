#!/usr/bin/env node
/**
 * MeshCore Україна: збірка для всіх плат, які сайт прошиває в браузері.
 *
 * Береться та сама версія MeshCore, що й в офіційному дзеркалі (src/data/firmware.json),
 * до неї застосовується невеликий патч:
 *   • усі ролі — радіопараметри мережі з src/config/site.ts;
 *   • компаньйони — канали спільноти на чистому пристрої (UaBootstrap.h).
 *
 *   node firmware/ua/build.mjs                  — зібрати все
 *   node firmware/ua/build.mjs --prepare-only   — лише підготувати й пропатчити вихідний код
 *   node firmware/ua/build.mjs --only=Heltec_v3_companion_radio_ble,RAK_4631_repeater
 *   node firmware/ua/build.mjs --parallel=4     — скільки плат збирати одночасно
 *
 * Результат: public/firmware/custom/v<версія>/ і src/data/custom-firmware.json.
 * Нічого не публікує на сервер.
 */
import { createHash } from 'node:crypto';
import { spawn, spawnSync } from 'node:child_process';
import { readFile, writeFile, mkdir, copyFile, rm, readdir, rename, cp } from 'node:fs/promises';
import { existsSync, createWriteStream } from 'node:fs';
import { homedir, cpus } from 'node:os';
import { dirname, resolve, join, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { unzipSync, zipSync } from 'fflate';

/** Номер нашої редакції патча. Збільшуйте, коли змінюється сам патч, а не версія MeshCore. */
const REVISION = 1;
/** Збірки, перевірені на фізичному пристрої. */
const HARDWARE_TESTED = new Set(['Heltec_v3_companion_radio_ble']);
const REPO = 'meshcore-dev/MeshCore';
const ROLE_ENV = { companion: 'companion_radio_ble', companion_usb: 'companion_radio_usb', repeater: 'repeater', room_server: 'room_server' };
const COMPANION_ROLES = new Set(['companion', 'companion_usb']);
const ESP_CHIPS = { 0: 'esp32', 2: 'esp32s2', 5: 'esp32c3', 9: 'esp32s3', 13: 'esp32c6' };

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const work = join(root, '.firmware-work');
const logs = join(work, 'logs');
const python = process.env.PYTHON || 'python';
const sha256 = (data) => createHash('sha256').update(data).digest('hex');
const args = process.argv.slice(2);
const option = (name) => args.find((a) => a.startsWith(`--${name}=`))?.split('=')[1];
const PARALLEL = Math.max(1, Number(option('parallel') ?? process.env.FIRMWARE_PARALLEL ?? 3));
const CPUS = cpus().length;

function run(command, argv, cwd = root, capture = false) {
  const result = spawnSync(command, argv, { cwd, stdio: capture ? 'pipe' : 'inherit', encoding: 'utf8', maxBuffer: 64 << 20, env: { ...process.env, PYTHONUTF8: '1' } });
  if (result.error) throw result.error;
  if (result.status) throw new Error(`${command} ${argv.join(' ')} → код ${result.status}\n${result.stderr ?? ''}`);
  return result.stdout;
}

/** Запускає процес, пише вивід у файл журналу, повертає код завершення. */
function runLogged(command, argv, cwd, logFile) {
  return new Promise((done) => {
    const out = createWriteStream(logFile);
    const child = spawn(command, argv, { cwd, env: { ...process.env, PYTHONUTF8: '1' } });
    child.stdout.pipe(out, { end: false });
    child.stderr.pipe(out, { end: false });
    child.on('close', (code) => out.end(() => done(code)));
  });
}

async function siteConfig() {
  const config = JSON.parse(run(process.execPath, ['--no-warnings', '--experimental-strip-types', '--input-type=module', '-e',
    "import {network,channels} from './src/config/site.ts'; console.log(JSON.stringify({network,channels:channels.map(c=>c.name)}));"], root, true));
  if (config.channels.length !== new Set(config.channels).size || config.channels.length + 1 > 40) throw new Error('Неправильна кількість каналів');
  for (const name of config.channels) if (!/^#[a-z0-9_-]+$/.test(name) || Buffer.byteLength(name) >= 32) throw new Error(`Неправильна назва каналу: ${name}`);
  const n = config.network;
  for (const value of [n.frequencyMHz, n.bandwidthKHz, n.spreadingFactor, n.codingRate]) if (!Number.isFinite(value)) throw new Error('Неправильний радіопараметр');
  const channels = config.channels.map((name, i) => {
    const key = createHash('sha256').update(name, 'utf8').digest().subarray(0, 16);
    return { slot: i + 1, name, keyHex: key.toString('hex'), keyBase64: key.toString('base64') };
  });
  return { network: n, channels };
}

/** Плати й ролі, для яких у дзеркалі є офіційна прошивка, яку сайт пише в браузері. */
async function targets() {
  const official = JSON.parse(await readFile(join(root, 'src/data/firmware.json'), 'utf8'));
  const upstreamVersion = option('version') ?? official.latest;
  const list = [];
  let shortHash = null;
  for (const [board, entry] of Object.entries(official.boards)) {
    // Лише плати з каталогу сайту (src/data/devices.mjs), а не всі 100+ плат MeshCore.
    if (!entry.recommended || !['esp32', 'nrf52'].includes(entry.chip)) continue;
    for (const [role, versions] of Object.entries(entry.roles)) {
      const files = versions[upstreamVersion];
      if (!files || !ROLE_ENV[role] || !Object.values(files).some((f) => f.path)) continue;
      const env = `${board}_${ROLE_ENV[role]}`;
      for (const f of Object.values(files)) {
        const m = new RegExp(`-v${upstreamVersion.replace(/\./g, '\\.')}-([0-9a-f]{6,40})`).exec(f.name);
        if (m) shortHash ??= m[1];
      }
      list.push({ board, role, chip: entry.chip, env, official: files });
    }
  }
  const only = option('only')?.split(',');
  return { upstreamVersion, shortHash, list: only ? list.filter((t) => only.includes(t.env)) : list };
}

async function resolveCommit(version, shortHash) {
  const previous = existsSync(join(root, 'src/data/custom-firmware.json'))
    ? JSON.parse(await readFile(join(root, 'src/data/custom-firmware.json'), 'utf8')) : null;
  if (previous?.upstream?.version === version && previous.upstream.commit?.startsWith(shortHash)) return previous.upstream;
  const headers = { 'User-Agent': 'meshcore-ua-firmware', Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const res = await fetch(`https://api.github.com/repos/${REPO}/commits/${shortHash}`, { headers });
  if (!res.ok) throw new Error(`GitHub: коміт ${shortHash} — HTTP ${res.status}`);
  return { version, commit: (await res.json()).sha, archiveSha256: null };
}

/** Замінює рівно одне входження; якщо upstream змінився — зупиняє збірку. */
function replaceOnce(text, pattern, replacement, label) {
  const re = pattern instanceof RegExp ? new RegExp(pattern.source, pattern.flags.replace('g', '') + 'g') : null;
  const count = re ? (text.match(re) ?? []).length : text.split(pattern).length - 1;
  if (count !== 1) throw new Error(`Патч «${label}»: очікувалось 1 входження, знайдено ${count}. Upstream змінився — перевірте патч.`);
  return text.replace(pattern, replacement);
}

export async function prepare() {
  const { network: n, channels } = await siteConfig();
  const { upstreamVersion, shortHash, list } = await targets();
  if (!list.length) throw new Error('Немає плат для збірки');
  if (!shortHash) throw new Error('Не вдалося визначити коміт офіційної збірки');
  const upstream = await resolveCommit(upstreamVersion, shortHash);
  const version = `${upstreamVersion}-ua.${REVISION}`;
  // Коротка назва теки: у Windows шлях до файлів бібліотек інакше перевищує 260 символів.
  const source = join(work, 'meshcore-src');
  const marker = join(source, '.ua-commit');
  await mkdir(logs, { recursive: true });

  // Інша версія MeshCore — розпаковуємо заново; старі архіви прибираємо.
  if (existsSync(source) && (!existsSync(marker) || (await readFile(marker, 'utf8')).trim() !== upstream.commit)) {
    await rm(source, { recursive: true, force: true });
  }
  for (const dir of await readdir(work)) {
    if (/^MeshCore-[0-9a-f]{40}$/.test(dir)) {
      await rm(join(work, dir), { recursive: true, force: true, maxRetries: 3 })
        .catch((error) => console.warn(`Не вдалося видалити стару теку ${dir} (${error.code}) — видаліть її вручну.`));
    }
    if (/^[0-9a-f]{40}\.zip$/.test(dir) && dir !== `${upstream.commit}.zip`) await rm(join(work, dir), { force: true });
  }

  const archive = join(work, `${upstream.commit}.zip`);
  if (!existsSync(archive)) {
    console.log(`Завантажую MeshCore ${upstreamVersion} (${upstream.commit.slice(0, 7)})…`);
    const response = await fetch(`https://codeload.github.com/${REPO}/zip/${upstream.commit}`);
    if (!response.ok) throw new Error(`Вихідний код: HTTP ${response.status}`);
    await writeFile(archive, Buffer.from(await response.arrayBuffer()));
  }
  const bytes = await readFile(archive);
  const archiveSha256 = sha256(bytes);
  if (upstream.archiveSha256 && upstream.archiveSha256 !== archiveSha256) throw new Error('SHA-256 архіву MeshCore не збігається із записаним раніше');
  upstream.archiveSha256 = archiveSha256;

  const files = unzipSync(bytes);
  const prefix = `MeshCore-${upstream.commit}/`;
  if (!existsSync(join(source, 'platformio.ini'))) {
    for (const [name, data] of Object.entries(files)) {
      if (!name.startsWith(prefix)) continue;
      const target = resolve(source, name.slice(prefix.length));
      if (!target.startsWith(source + sep)) continue;
      if (name.endsWith('/')) await mkdir(target, { recursive: true });
      else { await mkdir(dirname(target), { recursive: true }); await writeFile(target, data); }
    }
    await writeFile(marker, upstream.commit + '\n');
  }
  const original = (path) => {
    const data = files[prefix + path];
    if (!data) throw new Error(`У вихідному коді немає ${path}`);
    return Buffer.from(data).toString('utf8');
  };
  const patched = [];
  async function patch(path, edits) {
    let text = original(path);
    for (const [pattern, replacement, label] of edits) text = replaceOnce(text, pattern, replacement, label ?? path);
    await writeFile(join(source, path), text);
    patched.push(path);
  }

  const buildDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const ini = original('platformio.ini');
  const crEdit = /-D LORA_CR=\d+/.test(ini)
    ? [/-D LORA_CR=\d+/, `-D LORA_CR=${n.codingRate}`, 'LORA_CR']
    : [/-D LORA_SF=\d+/, `-D LORA_SF=${n.spreadingFactor}\n  -D LORA_CR=${n.codingRate}`, 'LORA_SF+CR'];
  await patch('platformio.ini', [
    [/-D LORA_FREQ=[\d.]+/, `-D LORA_FREQ=${n.frequencyMHz}`, 'LORA_FREQ'],
    [/-D LORA_BW=[\d.]+/, `-D LORA_BW=${n.bandwidthKHz}`, 'LORA_BW'],
    ...(crEdit[2] === 'LORA_CR' ? [[/-D LORA_SF=\d+/, `-D LORA_SF=${n.spreadingFactor}`, 'LORA_SF'], crEdit] : [crEdit]),
  ]);
  for (const example of ['companion_radio', 'simple_repeater', 'simple_room_server']) {
    const path = `examples/${example}/MyMesh.h`;
    const edits = [[/(#define\s+FIRMWARE_VERSION\s+)"[^"]*"/, `$1"v${version}"`, `${path}: FIRMWARE_VERSION`]];
    if (/#define\s+FIRMWARE_BUILD_DATE\s+"/.test(original(path))) edits.push([/(#define\s+FIRMWARE_BUILD_DATE\s+)"[^"]*"/, `$1"${buildDate}"`, `${path}: FIRMWARE_BUILD_DATE`]);
    await patch(path, edits);
  }
  await patch('examples/companion_radio/DataStore.h', [
    ['  void loadPrefs(NodePrefs& prefs);', '  bool hasSavedConfiguration() const;\n  void loadPrefs(NodePrefs& prefs);'],
  ]);
  await patch('examples/companion_radio/DataStore.cpp', [
    ['#include "DataStore.h"', '#include "DataStore.h"\n#include "MeshcoreUaDefaults.h"\n#include "UaBootstrap.h"'],
    ['void DataStore::loadPrefs(NodePrefs& prefs) {', `bool DataStore::hasSavedConfiguration() const {
  return !meshcore_ua::isUnconfigured(_fs->exists("/prefs.json"),
    _fs->exists("/new_prefs"), _getContactsChannelsFS()->exists("/channels2"));
}

void DataStore::loadPrefs(NodePrefs& prefs) {`],
  ]);
  await patch('examples/companion_radio/MyMesh.cpp', [
    ['#include "MyMesh.h"', '#include "MyMesh.h"\n#include "MeshcoreUaDefaults.h"\n#include "UaBootstrap.h"'],
    ['  _store->loadChannels(this);', `  _store->loadChannels(this);
  if (meshcore_ua::seedChannelsIfUnconfigured(*_store, *this)) {
    _store->savePrefs(_prefs);
  }`],
  ]);
  await writeFile(join(source, 'examples/companion_radio/MeshcoreUaDefaults.h'), `#pragma once
// Generated from src/config/site.ts. Public stays at slot 0.
namespace meshcore_ua {
struct Channel { const char* name; const char* keyBase64; };
static constexpr Channel kChannels[] = {
${channels.map((ch) => `  { ${JSON.stringify(ch.name)}, ${JSON.stringify(ch.keyBase64)} },`).join('\n')}
};
static constexpr unsigned kChannelCount = sizeof(kChannels) / sizeof(kChannels[0]);
}
#if defined(MAX_GROUP_CHANNELS)
static_assert(MAX_GROUP_CHANNELS >= meshcore_ua::kChannelCount + 1, "Not enough channel slots");
#endif
#if defined(LORA_FREQ)
static_assert(LORA_FREQ == ${n.frequencyMHz} && LORA_BW == ${n.bandwidthKHz} && LORA_SF == ${n.spreadingFactor} && LORA_CR == ${n.codingRate}, "UA radio defaults mismatch");
#endif
`);
  patched.push('examples/companion_radio/MeshcoreUaDefaults.h');
  await copyFile(join(root, 'firmware/ua/UaBootstrap.h'), join(source, 'examples/companion_radio/UaBootstrap.h'));
  patched.push('examples/companion_radio/UaBootstrap.h');
  if (existsSync(join(source, 'platformio.local.ini'))) await rm(join(source, 'platformio.local.ini'));

  // Перевіряємо, що жодна плата не перевизначає радіопараметри.
  const config = JSON.parse(run(python, ['-m', 'platformio', 'project', 'config', '--json-output'], source, true));
  const envs = new Map(config.filter(([s]) => s.startsWith('env:')).map(([s, opts]) => [s.slice(4), Object.fromEntries(opts)]));
  const want = { LORA_FREQ: n.frequencyMHz, LORA_BW: n.bandwidthKHz, LORA_SF: n.spreadingFactor, LORA_CR: n.codingRate };
  for (const t of list) {
    const env = envs.get(t.env);
    if (!env) throw new Error(`У MeshCore немає середовища ${t.env}`);
    const flags = [env.build_flags].flat().join(' ');
    for (const [key, value] of Object.entries(want)) {
      const found = [...flags.matchAll(new RegExp(`-D\\s*${key}=([\\d.]+)`, 'g'))].map((m) => Number(m[1]));
      if (!found.length || found.some((v) => v !== Number(value))) throw new Error(`${t.env}: ${key}=${found.join(',') || 'немає'}, очікувалось ${value}`);
    }
  }

  const profile = {
    id: 'meshcore-ua', name: 'MeshCore Україна', version, revision: REVISION, upstream,
    network: { presetName: n.presetName, frequencyMHz: n.frequencyMHz, bandwidthKHz: n.bandwidthKHz, spreadingFactor: n.spreadingFactor, codingRate: n.codingRate },
    channels: channels.map(({ slot, name, keyHex }) => ({ slot, name, keyHex })),
    initialisation: 'Радіопараметри — значення за замовчуванням для всіх ролей. Канали компаньйона додаються лише на чистому пристрої (немає prefs.json, new_prefs і channels2); збережені налаштування мають пріоритет.',
  };
  console.log(`Підготовлено ${version}: ${list.length} збірок; ${n.frequencyMHz}/${n.bandwidthKHz}/SF${n.spreadingFactor}/CR${n.codingRate}; Public + ${channels.length} каналів.`);
  return { profile, list, source, patched, channels };
}

// ---------------------------------------------------------------- перевірка образів

function check(condition, message) { if (!condition) throw new Error(message); }

/** Перейменування теки; у Windows антивірус чи індексатор можуть ненадовго тримати файли — тоді копіюємо. */
async function moveDir(from, to) {
  for (let attempt = 1; attempt <= 5; attempt++) {
    try { await rename(from, to); return; } catch (error) {
      if (!['EPERM', 'EBUSY', 'EACCES'].includes(error.code)) throw error;
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }
  await cp(from, to, { recursive: true });
  await rm(from, { recursive: true, force: true, maxRetries: 5 }).catch(() => {});
}

async function officialFile(ref) {
  return ref?.path && existsSync(join(root, 'public', ref.path)) ? readFile(join(root, 'public', ref.path)) : null;
}

function checkContent(image, t, version, channels) {
  check(image.includes(Buffer.from(`v${version}`)), `${t.env}: немає рядка версії`);
  if (COMPANION_ROLES.has(t.role)) for (const ch of channels) {
    check(image.includes(Buffer.from(ch.name)) && image.includes(Buffer.from(ch.keyBase64)), `${t.env}: немає каналу ${ch.name}`);
  }
}

async function collectEsp32(t, buildDir, version, channels) {
  const app = await readFile(join(buildDir, 'firmware.bin'));
  const merged = await readFile(join(buildDir, 'firmware-merged.bin'));
  check(app[0] === 0xe9, `${t.env}: не образ ESP32`);
  check(merged.subarray(0x10000, 0x10000 + app.length).equals(app), `${t.env}: образ у merged не за адресою 0x10000`);
  const chip = ESP_CHIPS[app.readUInt16LE(12)];
  check(chip, `${t.env}: невідомий чип ${app.readUInt16LE(12)}`);
  const officialApp = await officialFile(t.official.bin);
  const officialMerged = await officialFile(t.official.merged);
  if (officialApp) check(officialApp.readUInt16LE(12) === app.readUInt16LE(12), `${t.env}: чип не збігається з офіційною збіркою`);
  if (officialMerged) {
    check(merged.subarray(0x8000, 0x9000).equals(officialMerged.subarray(0x8000, 0x9000)), `${t.env}: таблиця розділів відрізняється від офіційної`);
    if (!merged.subarray(0, 0x8000).equals(officialMerged.subarray(0, 0x8000))) console.warn(`  ${t.env}: завантажувач відрізняється від офіційного (перевірте)`);
  }
  const esptool = join(process.env.PLATFORMIO_CORE_DIR || join(homedir(), '.platformio'), 'packages/tool-esptoolpy/esptool.py');
  const info = run(python, [esptool, '--chip', chip, 'image_info', join(buildDir, 'firmware.bin')], root, true);
  check(/Checksum:.*\(valid\)/.test(info), `${t.env}: контрольна сума образу неправильна`);
  if (/Validation Hash/.test(info)) check(/Validation Hash:.*\(valid\)/.test(info), `${t.env}: хеш образу неправильний`);
  checkContent(app, t, version, channels);
  return { merged, bin: app };
}

async function collectNrf52(t, buildDir, source, version, channels) {
  const hex = join(buildDir, 'firmware.hex');
  const uf2Path = join(buildDir, 'firmware.uf2');
  run(python, [join(source, 'bin/uf2conv/uf2conv.py'), hex, '-c', '-o', uf2Path, '-f', '0xADA52840'], source, true);
  const zip = await readFile(join(buildDir, 'firmware.zip'));
  const uf2 = await readFile(uf2Path);
  check(uf2.readUInt32LE(0) === 0x0a324655 && uf2.readUInt32LE(28) === 0xada52840, `${t.env}: неправильний UF2`);
  const pkg = unzipSync(zip);
  const manifest = JSON.parse(Buffer.from(pkg['manifest.json'] ?? []).toString() || '{}');
  const app = manifest.manifest?.application;
  check(app && pkg[app.bin_file] && pkg[app.dat_file], `${t.env}: DFU-пакет без образу`);
  checkContent(Buffer.from(pkg[app.bin_file]), t, version, channels);
  const officialZip = await officialFile(t.official.zip);
  if (officialZip) {
    const o = unzipSync(officialZip);
    const oApp = JSON.parse(Buffer.from(o['manifest.json']).toString()).manifest.application;
    const ratio = pkg[app.bin_file].length / o[oApp.bin_file].length;
    check(ratio > 0.9 && ratio < 1.1, `${t.env}: розмір образу дуже відрізняється від офіційного (${ratio.toFixed(2)})`);
  }
  return { zip, uf2 };
}

// ---------------------------------------------------------------- збірка

export async function build() {
  const { profile, list, source, patched, channels } = await prepare();
  if (args.includes('--prepare-only')) return profile;
  const version = profile.version;
  const pio = (t) => [python, ['-m', 'platformio', 'run', '--project-dir', source, '--environment', t.env,
    ...(t.chip === 'esp32' ? ['--target', 'mergebin'] : []), '--jobs', String(Math.max(1, Math.floor(CPUS / PARALLEL)))]];

  // Перша плата кожної платформи збирається окремо: PlatformIO встановлює інструменти.
  const warm = [...new Map(list.map((t) => [t.chip, t])).values()];
  const queue = [...warm.map((t) => ({ t, solo: true })), ...list.filter((t) => !warm.includes(t)).map((t) => ({ t }))];
  const failed = [];
  let done = 0;
  const started = Date.now();
  const buildOne = async ({ t }) => {
    const [cmd, argv] = pio(t);
    const code = await runLogged(cmd, argv, root, join(logs, `${t.env}.log`));
    done++;
    const min = ((Date.now() - started) / 60000).toFixed(1);
    if (code) { failed.push(t.env); console.log(`  [${done}/${list.length}] ПОМИЛКА ${t.env} — .firmware-work/logs/${t.env}.log`); }
    else console.log(`  [${done}/${list.length}] ${t.env} · ${min} хв`);
  };
  console.log(`Збираю ${list.length} прошивок, паралельно ${PARALLEL}…`);
  for (const item of queue.filter((q) => q.solo)) await buildOne(item);
  const rest = queue.filter((q) => !q.solo);
  await Promise.all(Array.from({ length: PARALLEL }, async () => {
    while (rest.length) await buildOne(rest.shift());
  }));
  if (failed.length) throw new Error(`Не зібрались: ${failed.join(', ')}`);

  // Пишемо в тимчасову теку й підміняємо лише після перевірки всіх образів:
  // якщо щось зламається, сайт лишається з попередньою робочою збіркою.
  const customDir = join(root, 'public/firmware/custom');
  const finalDir = join(customDir, `v${version}`);
  const outDir = join(customDir, '.staging');
  const previous = existsSync(join(root, 'src/data/custom-firmware.json'))
    ? JSON.parse(await readFile(join(root, 'src/data/custom-firmware.json'), 'utf8')) : null;
  // При частковій збірці (--only) решта вже зібраних файлів цієї версії зберігається.
  const partial = Boolean(option('only')) && previous?.version === version && previous.boards;
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });
  if (partial && existsSync(finalDir)) await cp(finalDir, outDir, { recursive: true });
  const boards = partial ? structuredClone(previous.boards) : {};

  for (const t of list) {
    const buildDir = join(source, '.pio/build', t.env);
    const images = t.chip === 'esp32' ? await collectEsp32(t, buildDir, version, channels) : await collectNrf52(t, buildDir, source, version, channels);
    const files = {};
    for (const [kind, data] of Object.entries(images)) {
      const name = `${t.env}-v${version}${kind === 'merged' ? '-merged' : ''}.${kind === 'merged' || kind === 'bin' ? 'bin' : kind}`;
      const path = `/firmware/custom/v${version}/${name}`;
      await writeFile(join(outDir, name), data);
      files[kind] = { name, size: data.length, url: path, path, sha256: sha256(data) };
    }
    ((boards[t.board] ??= { roles: {} }).roles)[t.role] = { env: t.env, hardwareTested: HARDWARE_TESTED.has(t.env), files };
  }
  const bundled = unzipSync(await readFile(join(work, `${profile.upstream.commit}.zip`)));
  const prefix = `MeshCore-${profile.upstream.commit}/`;
  for (const file of patched) bundled[prefix + file] = new Uint8Array(await readFile(join(source, file)));
  delete bundled[prefix + 'platformio.local.ini'];
  bundled[prefix + 'README-UA.md'] = new Uint8Array(await readFile(join(root, 'firmware/ua/README.md')));
  const sourceZip = Buffer.from(zipSync(bundled, { level: 6 }));
  await writeFile(join(outDir, 'source.zip'), sourceZip);
  await copyFile(join(source, 'license.txt'), join(outDir, 'LICENSE.txt'));

  profile.builtAt = new Date().toISOString();
  profile.source = { path: `/firmware/custom/v${version}/source.zip`, sha256: sha256(sourceZip) };
  profile.boards = Object.fromEntries(Object.entries(boards).sort(([a], [b]) => a.localeCompare(b, 'en')));
  await writeFile(join(outDir, 'manifest.json'), JSON.stringify(profile, null, 2) + '\n');
  await rm(finalDir, { recursive: true, force: true });
  await moveDir(outDir, finalDir);
  await writeFile(join(root, 'src/data/custom-firmware.json'), JSON.stringify(profile, null, 2) + '\n');

  // Прибираємо попередні версії нашої збірки.
  for (const dir of await readdir(customDir)) {
    if (dir !== `v${version}`) await rm(join(customDir, dir), { recursive: true, force: true });
  }
  const deps = run(python, ['-m', 'platformio', 'pkg', 'list', '--project-dir', source, ...[...new Map(list.map((t) => [t.chip, t])).values()].flatMap((t) => ['--environment', t.env])], root, true);
  await writeFile(join(root, 'firmware/ua/build-dependencies.txt'), deps);
  console.log(`Готово: ${list.length} прошивок ${version} перевірено → public/firmware/custom/v${version}/`);
  return profile;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  build().catch((error) => { console.error(error.message ?? error); process.exitCode = 1; });
}
