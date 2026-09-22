# Hanu Tâmplaru'

Site de prezentare pentru atelierul de tâmplărie **Hanu Tâmplaru'** din Pârjol, județul Bacău.
Astro 7 static, Tailwind 4, GSAP + Lenis pentru animații, PhotoSwipe pentru galerii.

**35 de pagini indexabile**, toate cu titlu, descriere, canonical, OpenGraph și JSON-LD proprii.

## Rulare

```bash
npm install
npm run dev        # http://localhost:4321/hanu-tamplaru
npm run build      # generează dist/
npm run preview
```

Scripturi auxiliare:

```bash
npm run prepare-photos   # Poze/*.png → src/assets/photos/<categorie>/NN.jpg (sharp)
npm run fetch-stock      # descarcă imaginile de completare de pe Pexels
node scripts/seo-check.mjs   # verifică titluri, descrieri, JSON-LD, linkuri, sitemap
node scripts/make-logo.mjs   # regenerează variantele de logo din logo-original.png
```

## Structura site-ului

| Zonă | Rute |
|---|---|
| Acasă | `/` |
| Servicii | `/servicii` + 9 pagini de produs în `/servicii/<slug>` |
| Pagina-pilon | `/mobila-la-comanda` |
| SEO local | `/mobila-la-comanda/<localitate>` — 8 localități din județul Bacău |
| Ghiduri | `/ghiduri` + 5 articole |
| Informative | `/materiale-si-finisaje`, `/proces`, `/portofoliu`, `/despre-noi`, `/amenajari-complete`, `/montaj-livrare-garantie`, `/intrebari-frecvente`, `/zone-deservite` |
| Conversie | `/contact` |
| Tehnice | `/404`, `/sitemap.xml`, `/robots.txt` |

Paginile de produs și cele locale sunt generate din date, prin rute dinamice:
`src/pages/servicii/[slug].astro` ← `src/data/products.ts`,
`src/pages/mobila-la-comanda/[slug].astro` ← `src/data/areas.ts`,
`src/pages/ghiduri/[slug].astro` ← `src/data/guides.ts`.

## Ce trebuie completat

Toate se schimbă într-un **singur fișier**, `src/data/site.ts`:

- `email` — momentan `contact@hanutamplaru.ro` (placeholder).
- `social` — linkurile de Facebook / Instagram (array gol acum; când se completează, apar automat în `sameAs` din schema.org).
- `geo` — coordonatele exacte ale atelierului, dacă adresa se rafinează.
- `formEndpoint` — cheia de acces de la [web3forms.com](https://web3forms.com) (gratuit).
  **Cât timp e gol, formularul funcționează**: compune mesajul și îl deschide în WhatsApp,
  cu toate câmpurile completate. Cu cheia pusă, trimite direct pe email.

## Logo

Sursa e `src/assets/brand/logo-original.png` (lockup-ul pe fundal verde, așa cum a fost primit).
`node scripts/make-logo.mjs` decupează fundalul și generează restul variantelor — nu se editează de mână:

| Fișier | Unde se folosește |
|---|---|
| `src/assets/brand/logo.png` | header, footer, cortina de intro (transparent, servit ca WebP) |
| `src/assets/brand/mark.png` | semnul singur (pătratul cu inele), transparent |
| `public/logo.png` | `logo` din schema.org, partajări pe rețele (1200×630) |
| `public/favicon.svg` | favicon vectorial, versiunea simplificată a semnului |
| `public/icon-192.png`, `public/icon-512.png` | icoane PWA, din `site.webmanifest` |
| `public/apple-touch-icon.png` | icoana de pe ecranul iPhone/iPad |

Dacă logoul se schimbă, se înlocuiește `logo-original.png` și se rulează din nou scriptul.
Culorile de brand din logo: verde `#0b312b`, nuc `#764f32`, stejar `#a37947`, gri `#6b6b6b`.

## Imagini

- `src/assets/photos/<categorie>/` — fotografiile reale ale lucrărilor, procesate din `Poze/`.
- `src/assets/photos/stock/<categorie>/` — imagini de completare de pe Pexels
  (licență liberă, uz comercial permis). Sursele sunt listate în [CREDITE-POZE.md](CREDITE-POZE.md).
  Se înlocuiesc oricând cu fotografii proprii: ștergeți fișierul și puneți altul cu același nume.

## Publicare

- **Vercel** — importați repo-ul; `astro.config.mjs` detectează `process.env.VERCEL` și
  servește site-ul din rădăcina domeniului. Headerele de securitate și cache sunt în `vercel.json`.
- **GitHub Pages** — build-ul implicit folosește base path `/hanu-tamplaru`.
