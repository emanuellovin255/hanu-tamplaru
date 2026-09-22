import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { url } from '../lib/url';

/** Manifest PWA minimal: nume, icoane și culorile de brand. */
export const GET: APIRoute = () => {
  const manifest = {
    name: `${site.name} – ${site.tagline}`,
    short_name: site.shortName,
    description: site.metaDescription,
    lang: 'ro-RO',
    start_url: url('/'),
    scope: url('/'),
    display: 'standalone',
    background_color: '#0b312b',
    theme_color: '#1d1713',
    icons: [
      { src: url('/icon-192.png'), sizes: '192x192', type: 'image/png' },
      { src: url('/icon-512.png'), sizes: '512x512', type: 'image/png' },
      { src: url('/icon-512.png'), sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  });
};
