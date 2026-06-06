import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// IMPORTANT : remplacez par votre vrai domaine avant déploiement
export default defineConfig({
  site: 'https://votredomaine.fr',
  integrations: [tailwind(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
