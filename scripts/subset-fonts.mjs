/**
 * Taie fonturile la caracterele folosite efectiv de site.
 *
 *   node scripts/subset-fonts.mjs
 *
 * Fraunces și Manrope vin de la Fontsource cu tot alfabetul latin (peste 500 kB
 * pentru o pagină în română). Scriptul păstrează doar glifele care apar în
 * `src/` — restul axelor variabile și al funcțiilor OpenType rămân intacte — și
 * scrie fonturile în `src/assets/fonts/`, plus `src/styles/fonts.css`.
 *
 * Se rulează când se schimbă fontul sau când apare un caracter nou în texte.
 */
import subsetFont from 'subset-font';
import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_FONTS = join(root, 'src/assets/fonts');
const OUT_CSS = join(root, 'src/styles/fonts.css');

/** Subseturile de care avem nevoie pentru română. Restul (grec, chirilic,
 *  vietnamez) nu se descarcă niciodată, deci nici nu le generăm. */
const SUBSETS = ['latin-ext', 'latin']; // ordinea contează: „latin-ext" se verifică prima

const FAMILIES = [
  {
    package: '@fontsource-variable/fraunces',
    family: 'Fraunces Variable',
    css: ['full.css', 'full-italic.css'],
    prefix: 'fraunces',
    pin: true,
  },
  {
    package: '@fontsource-variable/manrope',
    family: 'Manrope Variable',
    css: ['index.css'],
    prefix: 'manrope',
  },
];

/** Funcțiile OpenType de care are nevoie un text în română. Restul (seturi
 *  stilistice, majuscule mici, fracții) trag după ele sute de glife nefolosite. */
const KEEP_FEATURES = ['ccmp', 'locl', 'liga', 'clig', 'rlig', 'calt', 'kern', 'mark', 'mkmk'];

/** Axele variabile pe care le fixăm, pentru că site-ul folosește o singură
 *  valoare. Fraunces italic apare doar prin `.italic-serif`
 *  (opsz 144, SOFT 100, WONK 1), iar varianta dreaptă nu folosește niciodată
 *  WONK. `wght` rămâne variabilă peste tot. */
const PINNED = {
  normal: { WONK: 0 },
  italic: { opsz: 144, SOFT: 100, WONK: 1 },
};

/** Caractere pe care le vrem mereu, chiar dacă azi nu apar în texte. */
const ALWAYS = [
  // ASCII tipăribil
  ...Array.from({ length: 0x7e - 0x20 + 1 }, (_, i) => String.fromCharCode(0x20 + i)),
  // română (și variantele cu sedilă, care mai apar în texte copiate)
  ...'ĂăÂâÎîȘșȚțŞşŢţ',
  // diacritice uzuale în nume proprii
  ...'ÀÁÄÅÉÈÊËÍÌÏÓÒÖÔŐÚÙÜÛŰÇÑŠŽàáäåéèêëíìïóòöôőúùüûűçñšž',
  // tipografie și simboluri
  ...'„”“‘’«»–—…·•°©®™×÷±≈≤≥€$£¢§¶№‰‹›←→↑↓✓✕✔✗½¼¾²³',
].join('');

/** Toate caracterele care apar în sursele site-ului. */
async function charsFromSources() {
  const chars = new Set(ALWAYS);
  const exts = new Set(['.astro', '.ts', '.tsx', '.js', '.mjs', '.md', '.json', '.css', '.html']);
  const skip = new Set(['node_modules', 'dist', '.git', '.astro', 'Poze']);

  async function walk(dir) {
    for (const e of await readdir(dir, { withFileTypes: true })) {
      if (skip.has(e.name)) continue;
      const p = join(dir, e.name);
      if (e.isDirectory()) await walk(p);
      else if (exts.has(extname(e.name))) {
        for (const ch of await readFile(p, 'utf8')) chars.add(ch);
      }
    }
  }

  await walk(join(root, 'src'));
  await walk(join(root, 'public'));
  return [...chars].filter((c) => c >= ' ').join('');
}

/** @font-face-urile din CSS-ul Fontsource: fișier + stil + unicode-range. */
async function faces(family) {
  const pkg = join(root, 'node_modules', family.package);
  const out = [];

  for (const cssName of family.css) {
    const css = await readFile(join(pkg, cssName), 'utf8');
    for (const block of css.split('@font-face').slice(1)) {
      const file = block.match(/url\(\.\/files\/([^)]+)\)/)?.[1];
      const range = block.match(/unicode-range:\s*([^;]+);/)?.[1]?.trim();
      const style = /font-style:\s*italic/.test(block) ? 'italic' : 'normal';
      const weight = block.match(/font-weight:\s*([^;]+);/)?.[1]?.trim() ?? '400';
      if (!file || !range) continue;

      const subset = SUBSETS.find((s) => file.includes(`-${s}-`));
      if (!subset) continue;

      out.push({ path: join(pkg, 'files', file), subset, style, weight, range });
    }
  }

  return out;
}

const text = await charsFromSources();
console.log(`Caractere păstrate: ${[...new Set(text)].length}\n`);

await rm(OUT_FONTS, { recursive: true, force: true });
await mkdir(OUT_FONTS, { recursive: true });

const rules = [
  '/* Generat de scripts/subset-fonts.mjs — nu se editează de mână. */',
  '',
];
let before = 0;
let after = 0;

for (const family of FAMILIES) {
  for (const face of await faces(family)) {
    const source = await readFile(face.path);
    const subsetted = await subsetFont(source, text, {
      targetFormat: 'woff2',
      keepFeatures: KEEP_FEATURES,
      ...(family.pin ? { variationAxes: PINNED[face.style] } : {}),
    });
    const name = `${family.prefix}-${face.subset}-${face.style}.woff2`;
    await writeFile(join(OUT_FONTS, name), subsetted);

    before += source.length;
    after += subsetted.length;
    console.log(
      `  ${name.padEnd(34)} ${(source.length / 1024).toFixed(0).padStart(4)} kB → ${(subsetted.length / 1024).toFixed(0).padStart(3)} kB`,
    );

    rules.push(
      '@font-face {',
      `  font-family: '${family.family}';`,
      `  font-style: ${face.style};`,
      '  font-display: swap;',
      `  font-weight: ${face.weight};`,
      `  src: url('../assets/fonts/${name}') format('woff2-variations');`,
      `  unicode-range: ${face.range};`,
      '}',
      '',
    );
  }
}

await writeFile(OUT_CSS, rules.join('\n'));
console.log(
  `\n${(before / 1024).toFixed(0)} kB → ${(after / 1024).toFixed(0)} kB (−${Math.round((1 - after / before) * 100)}%)`,
);
console.log('Scris: src/assets/fonts/, src/styles/fonts.css');
