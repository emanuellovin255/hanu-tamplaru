// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Pe Vercel site-ul stă în rădăcina domeniului; pe GitHub Pages, în /hanu-tamplaru.
const onVercel = !!process.env.VERCEL;

export default defineConfig({
  site: onVercel ? 'https://hanu-tamplaru.vercel.app' : 'https://emanuellovin255.github.io',
  base: onVercel ? '/' : '/hanu-tamplaru',
  build: {
    // CSS și JS în fișiere externe, fără blocuri inline în HTML
    inlineStylesheets: 'never',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0,
    },
  },
});
