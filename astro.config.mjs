import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: change `site` to your real URL once the domain is set up.
// Netlify will give you something like https://kuia.netlify.app first.
export default defineConfig({
  site: 'https://kuia.netlify.app',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
