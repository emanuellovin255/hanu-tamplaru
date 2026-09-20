// Descarcă imaginile de completare (Pexels, licență liberă, uz comercial permis)
// pentru categoriile la care nu avem încă poze proprii din atelier.
// Rulare: npm run fetch-stock
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const OUT = 'src/assets/photos/stock';
const MAX = 1920;

/** categorie → [id Pexels, descriere în română pentru alt + credite] */
const SETS = {
  atmosfera: [
    [14651024, 'Coridor cu perete din lamele de lemn întunecat și mobilier pe comandă'],
    [28057650, 'Perete din lamele de lemn cu aplică de perete caldă'],
    [39237329, 'Tavan din lamele de lemn, perspectivă arhitecturală'],
    [10132426, 'Panou din lamele de lemn, lumină razantă'],
  ],
  bucatarii: [
    [8089082, 'Bucătărie modernă gri antracit cu nișă din lemn și iluminare LED'],
    [35021550, 'Bucătărie contemporană din lemn deschis, cu insulă'],
    [6969863, 'Bucătărie din stejar cu pendule și blat deschis'],
  ],
  paturi: [
    [39338444, 'Dormitor cu tăblie din nuc și bandă LED ascunsă'],
    [4993094, 'Pat cu tăblie din lemn masiv în model spic, pe perete albastru'],
    [12289355, 'Dormitor cu tăblie din lamele de stejar și aplice'],
    [39338472, 'Pat din lemn masiv cu tăblie joasă și iluminare indirectă'],
  ],
  'usi-exterior': [
    [19227220, 'Ușă de intrare din lemn masiv, cu lumini laterale, la o casă modernă'],
    [21550545, 'Ușă de exterior arcuită din lemn masiv, pe fațadă albă'],
    [31737862, 'Intrare de casă modernă cu ușă din lemn, iluminată seara'],
    [10725864, 'Ușă dublă de exterior din lemn masiv, cu casete frezate'],
  ],
  'usi-interior': [
    [7166941, 'Uși de interior din lemn închis, pe hol cu iluminare LED'],
    [7166935, 'Hol cu uși de interior din lemn, cu iluminare ambientală'],
    [7587366, 'Hol cu uși de interior din stejar, într-un apartament modern'],
  ],
  scaune: [
    [12277202, 'Scaun din lemn masiv cu spătar din șipci, pe fundal deschis'],
    [7303800, 'Două scaune din lemn stratificat, cu șezut curbat'],
    [16037587, 'Scaune și taburet din lemn lângă un perete alb'],
  ],
  birouri: [
    [8082233, 'Birou din lemn într-un cabinet modern cu lambriu'],
    [38305964, 'Birou încastrat cu bibliotecă, într-o cameră de lucru'],
  ],
  atelier: [
    [13005858, 'Tâmplar care rindeluiește o scândură de lemn în atelier'],
    [5974285, 'Mâini de tâmplar lucrând lemnul cu ferăstrăul, printre așchii'],
    [313776, 'Tâmplar la bancul de lucru, într-un atelier cu lumină caldă'],
    [37663438, 'Unelte de tâmplărie pe bancul de lucru'],
  ],
  texturi: [
    [6544938, 'Textură de stejar deschis, fibră naturală'],
    [131639, 'Textură de nuc, fibră închisă la culoare'],
    [7504595, 'Textură de lemn masiv cu noduri și fibră pronunțată'],
  ],
};

const credits = ['# Credite foto\n', 'Pozele de proiect sunt realizate de Hanu Tâmplaru\'.', 'Imaginile de mai jos sunt preluate de pe **Pexels** (licență liberă, uz comercial permis, fără atribuire obligatorie) și pot fi înlocuite oricând cu fotografii proprii: ștergeți fișierul și puneți altul cu același nume.\n'];

let n = 0;
for (const [cat, items] of Object.entries(SETS)) {
  await mkdir(join(OUT, cat), { recursive: true });
  credits.push(`\n## ${cat}\n`);
  for (let i = 0; i < items.length; i++) {
    const [id, alt] = items[i];
    const src = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${MAX}`;
    const res = await fetch(src);
    if (!res.ok) {
      console.error(`✗ ${cat}/${id} → HTTP ${res.status}`);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const name = String(i + 1).padStart(2, '0');
    const out = join(OUT, cat, `${name}.jpg`);
    const info = await sharp(buf)
      .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(out);
    credits.push(`- \`stock/${cat}/${name}.jpg\` — ${alt} — https://www.pexels.com/photo/${id}/`);
    console.log(`✓ ${cat}/${name}.jpg  ${info.width}×${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
    n++;
  }
}

await writeFile('CREDITE-POZE.md', credits.join('\n') + '\n');
console.log(`\n${n} imagini descărcate în ${OUT}/ · credite în CREDITE-POZE.md`);
