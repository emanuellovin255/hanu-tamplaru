/**
 * Derivă toate variantele de logo din src/assets/brand/logo-original.png.
 *
 *   node scripts/make-logo.mjs
 *
 * Logoul original e desenat cu culori plate peste fundalul verde. Scriptul
 * „decupează” fundalul: fiecare pixel e descompus în culoarea de bază + alfa,
 * așa că umbrele (aceeași culoare la 50%) și marginile antialiasate rămân
 * curate pe orice fundal.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'src/assets/brand/logo-original.png');
const BRAND = join(root, 'src/assets/brand');
const PUBLIC = join(root, 'public');

/** Culorile din logo: verdele de fundal + straturile desenate peste el. */
const BG = [11, 49, 43];
const BROWN = [118, 79, 50];
const TAN = [163, 121, 71];
const GRAY = [107, 107, 107];

/** Perechi culoare + opacitate care apar efectiv în imagine. */
const LAYERS = [
  { rgb: BG, a: 0 },
  { rgb: BROWN, a: 1 },
  { rgb: TAN, a: 1 },
  { rgb: GRAY, a: 1 },
  { rgb: BROWN, a: 0.5 },
  { rgb: GRAY, a: 0.5 },
  { rgb: TAN, a: 0.5 },
].map((l) => ({
  ...l,
  // cum arată stratul compus peste verde (ce vedem în fișierul original)
  over: l.rgb.map((c, i) => c * l.a + BG[i] * (1 - l.a)),
  // premultiplicat, pentru interpolarea marginilor
  pm: [...l.rgb.map((c) => c * l.a), l.a],
}));

/** Scoate fundalul verde, păstrând umbrele ca straturi semi-transparente. */
async function knockout(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.alloc(data.length);

  for (let i = 0; i < data.length; i += 4) {
    const p = [data[i], data[i + 1], data[i + 2]];

    // cele mai apropiate două straturi; între ele interpolăm marginile
    let b1 = null;
    let b2 = null;
    for (const layer of LAYERS) {
      const d = Math.hypot(p[0] - layer.over[0], p[1] - layer.over[1], p[2] - layer.over[2]);
      if (!b1 || d < b1.d) {
        b2 = b1;
        b1 = { d, layer };
      } else if (!b2 || d < b2.d) {
        b2 = { d, layer };
      }
    }

    const t = b1.d < 1 ? 0 : b1.d / (b1.d + b2.d);
    const pm = b1.layer.pm.map((v, k) => v * (1 - t) + b2.layer.pm[k] * t);
    const a = pm[3];

    out[i] = a > 0.002 ? Math.round(Math.min(255, pm[0] / a)) : 0;
    out[i + 1] = a > 0.002 ? Math.round(Math.min(255, pm[1] / a)) : 0;
    out[i + 2] = a > 0.002 ? Math.round(Math.min(255, pm[2] / a)) : 0;
    out[i + 3] = Math.round(a * 255);
  }

  return sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } });
}

/** Conturul desenului (fără fundal), ca să putem tăia marginile goale. */
async function artBox(input, region) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const x0 = region?.left ?? 0;
  const y0 = region?.top ?? 0;
  const x1 = region ? region.left + region.width : info.width;
  const y1 = region ? region.top + region.height : info.height;

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -1;
  let maxY = -1;

  for (let y = y0; y < y1; y++) {
    for (let x = x0; x < x1; x++) {
      const i = (y * info.width + x) * 4;
      const d = Math.abs(data[i] - BG[0]) + Math.abs(data[i + 1] - BG[1]) + Math.abs(data[i + 2] - BG[2]);
      if (d > 25) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

const png = (q = 100) => ({ compressionLevel: 9, quality: q });

await mkdir(BRAND, { recursive: true });
await mkdir(PUBLIC, { recursive: true });

// 1. Lockup complet, fundal transparent — pentru header, footer, intro.
const box = await artBox(SRC);
const lockup = await (await knockout(SRC)).extract(box).png(png()).toBuffer();
await sharp(lockup).toFile(join(BRAND, 'logo.png'));

// 2. Lockup pe verde, pentru rețele sociale și schema.org (1200×630, cu aer).
await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: BG[0], g: BG[1], b: BG[2], alpha: 1 },
  },
})
  .composite([{ input: await sharp(lockup).resize({ width: 940 }).toBuffer(), gravity: 'centre' }])
  .png(png())
  .toFile(join(PUBLIC, 'logo.png'));

// 3. Semnul (pătratul cu inele) — sursa pentru favicon și icoanele de aplicație.
const markBox = await artBox(SRC, { left: 1290, top: 555, width: 210, height: 190 });
const markT = await (await knockout(SRC)).extract(markBox).png(png()).toBuffer();
await sharp(markT).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toFile(join(BRAND, 'mark.png'));

const iconBase = await sharp({
  create: {
    width: 640,
    height: 640,
    channels: 4,
    background: { r: BG[0], g: BG[1], b: BG[2], alpha: 1 },
  },
})
  .composite([{ input: await sharp(markT).resize(452, 452, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer(), gravity: 'centre' }])
  .png(png())
  .toBuffer();

for (const [name, size] of [
  ['icon-512.png', 512],
  ['icon-192.png', 192],
  ['apple-touch-icon.png', 180],
]) {
  await sharp(iconBase).resize(size, size).png(png()).toFile(join(PUBLIC, name));
}

console.log('Logo generat:');
console.log(`  src/assets/brand/logo.png       ${box.width}×${box.height} (transparent)`);
console.log('  src/assets/brand/mark.png       512×512 (transparent)');
console.log('  public/logo.png                 1200×630');
console.log('  public/icon-512.png, icon-192.png, apple-touch-icon.png');
