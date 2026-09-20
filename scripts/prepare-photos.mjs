// Transformă screenshot-urile din Poze/ în JPEG-uri optimizate, pe categorii.
// Rulare: npm run prepare-photos
import { mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const SRC = 'Poze';
const OUT = 'src/assets/photos';
const MAX = 1800;

/** Screenshot → una sau mai multe destinații „categorie/NN". */
const MAP = {
  'Screenshot 2026-09-20 at 09.35.49.png': ['bucatarii/01'],
  'Screenshot 2026-09-20 at 09.36.06.png': ['bucatarii/02', 'scaune/01'],
  'Screenshot 2026-09-20 at 09.36.44.png': ['bucatarii/03'],
  'Screenshot 2026-09-20 at 09.37.41.png': ['bucatarii/04'],
  'Screenshot 2026-09-20 at 09.37.52.png': ['bucatarii/05'],
  'Screenshot 2026-09-20 at 09.36.22.png': ['dressinguri/01', 'usi-interior/01'],
  'Screenshot 2026-09-20 at 09.38.53.png': ['dressinguri/02', 'usi-interior/02'],
  'Screenshot 2026-09-20 at 09.39.14.png': ['dressinguri/03'],
  'Screenshot 2026-09-20 at 09.38.17.png': ['dressinguri/04', 'birouri/01'],
  'Screenshot 2026-09-20 at 09.39.53.png': ['dressinguri/05', 'birouri/02'],
  'Screenshot 2026-09-20 at 09.36.57.png': ['living/01'],
  'Screenshot 2026-09-20 at 09.38.39.png': ['living/02'],
  'Screenshot 2026-09-20 at 09.42.20.png': ['living/03'],
  'Screenshot 2026-09-20 at 09.38.29.png': ['living/04'],
  'Screenshot 2026-09-20 at 09.38.05.png': ['mese/01', 'scaune/02'],
  'Screenshot 2026-09-20 at 09.37.25.png': ['mese/02'],
};

await rm(join(OUT, 'bucatarii'), { recursive: true, force: true });
for (const dir of ['bucatarii', 'dressinguri', 'living', 'mese', 'scaune', 'birouri', 'usi-interior']) {
  await mkdir(join(OUT, dir), { recursive: true });
}

let n = 0;
for (const [file, targets] of Object.entries(MAP)) {
  const img = sharp(join(SRC, file)).rotate();
  const meta = await img.metadata();
  const resized = img.resize({
    width: meta.width >= meta.height ? MAX : undefined,
    height: meta.height > meta.width ? MAX : undefined,
    withoutEnlargement: true,
  });
  const buf = await resized.jpeg({ quality: 82, mozjpeg: true, chromaSubsampling: '4:4:4' }).toBuffer();
  for (const target of targets) {
    await sharp(buf).toFile(join(OUT, `${target}.jpg`));
    n++;
  }
  console.log(`✓ ${file} → ${targets.join(', ')}  (${meta.width}×${meta.height}, ${(buf.length / 1024).toFixed(0)} KB)`);
}
console.log(`\n${n} fișiere scrise în ${OUT}/`);
