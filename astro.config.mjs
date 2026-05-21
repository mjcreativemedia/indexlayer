// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://indexlayer.pro',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/case-studies/') &&
        !page.includes('/guides/') &&
        !page.includes('/lab/') &&
        !page.includes('/preview/'),
    }),
  ],
});
