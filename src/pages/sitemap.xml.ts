import type { APIRoute } from 'astro';
import { products } from '../data/products';
import { areas } from '../data/areas';
import { guides } from '../data/guides';

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/servicii', priority: '0.9', changefreq: 'monthly' },
  ...products.map((p) => ({ path: `/servicii/${p.slug}`, priority: '0.9', changefreq: 'monthly' })),
  { path: '/mobila-la-comanda', priority: '0.9', changefreq: 'monthly' },
  ...areas.map((a) => ({ path: `/mobila-la-comanda/${a.slug}`, priority: '0.8', changefreq: 'monthly' })),
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  { path: '/portofoliu', priority: '0.8', changefreq: 'weekly' },
  { path: '/materiale-si-finisaje', priority: '0.7', changefreq: 'monthly' },
  { path: '/proces', priority: '0.7', changefreq: 'monthly' },
  { path: '/amenajari-complete', priority: '0.7', changefreq: 'monthly' },
  { path: '/montaj-livrare-garantie', priority: '0.6', changefreq: 'monthly' },
  { path: '/despre-noi', priority: '0.6', changefreq: 'yearly' },
  { path: '/intrebari-frecvente', priority: '0.7', changefreq: 'monthly' },
  { path: '/zone-deservite', priority: '0.7', changefreq: 'monthly' },
  { path: '/ghiduri', priority: '0.7', changefreq: 'weekly' },
  ...guides.map((g) => ({ path: `/ghiduri/${g.slug}`, priority: '0.6', changefreq: 'monthly' })),
];

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(({ path, priority, changefreq }) => {
      const loc = new URL(`${base}${path === '/' ? '/' : `${path}/`}`, site).href;
      return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
    })
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
