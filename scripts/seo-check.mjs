// Verificare SEO pe build: titluri, descrieri, canonical, JSON-LD, H1, linkuri interne.
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = 'dist';
const BASE = '/hanu-tamplaru';

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

const decode = (s) =>
  s?.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n)).replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const pick = (html, re) => decode((html.match(re) || [])[1]);
const pages = [];
for await (const file of walk(DIST)) {
  const html = await readFile(file, 'utf8');
  const route = '/' + relative(DIST, file).replace(/index\.html$/, '').replace(/\.html$/, '');
  pages.push({
    route,
    file,
    title: pick(html, /<title>([\s\S]*?)<\/title>/),
    desc: pick(html, /<meta name="description" content="([^"]*)"/),
    canonical: pick(html, /<link rel="canonical" href="([^"]*)"/),
    ogImage: pick(html, /<meta property="og:image" content="([^"]*)"/),
    h1: (html.match(/<h1[\s\S]*?<\/h1>/g) || []).length,
    noindex: /name="robots" content="noindex/.test(html),
    ld: (html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || []).map((s) =>
      s.replace(/^<script[^>]*>/, '').replace(/<\/script>$/, ''),
    ),
    links: [...new Set([...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]))],
  });
}

let problems = 0;
const fail = (msg) => { console.log('  ✗', msg); problems++; };

console.log(`\n${pages.length} pagini HTML în ${DIST}/\n`);

// 1. Titluri și descrieri unice
const seenT = new Map(), seenD = new Map();
for (const p of pages) {
  if (!p.title) fail(`${p.route} — fără <title>`);
  if (!p.desc && !p.noindex) fail(`${p.route} — fără meta description`);
  if (!p.canonical) fail(`${p.route} — fără canonical`);
  if (!p.ogImage) fail(`${p.route} — fără og:image`);
  if (p.h1 !== 1) fail(`${p.route} — ${p.h1} elemente <h1> (trebuie exact 1)`);
  if (p.title) (seenT.get(p.title) ?? seenT.set(p.title, []).get(p.title)).push(p.route);
  if (p.desc) (seenD.get(p.desc) ?? seenD.set(p.desc, []).get(p.desc)).push(p.route);
}
for (const [t, routes] of seenT) if (routes.length > 1) fail(`Titlu duplicat „${t}" pe: ${routes.join(', ')}`);
for (const [d, routes] of seenD) if (routes.length > 1) fail(`Descriere duplicată pe: ${routes.join(', ')}`);

// 2. Lungimi
console.log('Lungimi title / description:');
for (const p of pages.sort((a, b) => (b.title?.length ?? 0) - (a.title?.length ?? 0)).slice(0, 5)) {
  const flagT = (p.title?.length ?? 0) > 62 ? ' ⚠ lung' : '';
  console.log(`  ${String(p.title?.length).padStart(3)}${flagT}  ${p.route}  „${p.title}"`);
}
const longDesc = pages.filter((p) => (p.desc?.length ?? 0) > 160);
const shortDesc = pages.filter((p) => p.desc && p.desc.length < 70);
if (longDesc.length) console.log(`  ⚠ descriere > 160 caractere: ${longDesc.map((p) => `${p.route} (${p.desc.length})`).join(', ')}`);
if (shortDesc.length) console.log(`  ⚠ descriere < 70 caractere: ${shortDesc.map((p) => p.route).join(', ')}`);

// 3. JSON-LD valid
let ldCount = 0;
const types = new Map();
for (const p of pages) {
  for (const raw of p.ld) {
    try {
      const obj = JSON.parse(raw);
      ldCount++;
      const t = Array.isArray(obj['@type']) ? obj['@type'].join('+') : obj['@type'];
      types.set(t, (types.get(t) ?? 0) + 1);
    } catch (e) {
      fail(`${p.route} — JSON-LD invalid: ${e.message}`);
    }
  }
  if (!p.noindex && p.ld.length < 2) fail(`${p.route} — doar ${p.ld.length} bloc(uri) JSON-LD`);
}
console.log(`\n${ldCount} blocuri JSON-LD valide:`);
for (const [t, n] of [...types].sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(3)} × ${t}`);

// 4. Linkuri interne moarte
const routes = new Set(pages.map((p) => BASE + (p.route === '/' ? '/' : p.route)));
// Fișierele din rădăcina dist/ (favicon, logo, icoane, manifest, robots…) sunt linkuri valide.
const assets = new Set(
  (await readdir(DIST, { withFileTypes: true }))
    .filter((e) => e.isFile() && !e.name.endsWith('.html'))
    .map((e) => `${BASE}/${e.name}`),
);
const broken = new Map();
for (const p of pages) {
  for (const l of p.links) {
    if (l.startsWith('/_astro/') || assets.has(l) || l.startsWith('/hanu-tamplaru/_astro')) continue;
    const norm = l.endsWith('/') ? l : `${l}/`;
    if (!routes.has(norm) && !routes.has(l)) {
      if (!broken.has(l)) broken.set(l, []);
      broken.get(l).push(p.route);
    }
  }
}
if (broken.size) {
  console.log('\nLinkuri interne moarte:');
  for (const [l, from] of broken) fail(`${l} ← ${[...new Set(from)].slice(0, 4).join(', ')}`);
} else {
  console.log('\n✓ Niciun link intern mort.');
}

// 5. Sitemap vs pagini
const sitemap = await readFile(join(DIST, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const indexable = pages.filter((p) => !p.noindex).map((p) => BASE + (p.route === '/' ? '/' : p.route));
const missing = indexable.filter((r) => !locs.includes(r));
const extra = locs.filter((l) => !indexable.includes(l));
console.log(`\nSitemap: ${locs.length} URL-uri · pagini indexabile: ${indexable.length}`);
if (missing.length) fail(`lipsesc din sitemap: ${missing.join(', ')}`);
if (extra.length) fail(`în sitemap dar fără pagină: ${extra.join(', ')}`);

console.log(problems === 0 ? '\n✓ Nicio problemă SEO.\n' : `\n${problems} probleme de rezolvat.\n`);
process.exit(problems ? 1 : 0);
