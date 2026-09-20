import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sitemap = new URL(`${base}/sitemap.xml`, site);
  return new Response(
    `User-agent: *\nAllow: /\n\n# Crawlere AI — conținutul poate fi citat cu atribuire\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: ClaudeBot\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nSitemap: ${sitemap.href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
