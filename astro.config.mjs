// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

const redirectPaths = [
  '/technology/',
  '/case-studies/',
  '/case-studies/better-call-steve-seo-rescue/',
  '/case-studies/mycornerstoneplan-seo-ready-life-insurance-funnel/',
  '/lab/',
  '/lab/building-indexlayer-on-astro-github-pages/',
  '/posts/better-call-steve-seo-rescue/',
  '/posts/chicago-fight-team-homepage-rebuild/',
  '/posts/mycornerstoneplan-seo-ready-life-insurance-funnel/',
  '/posts/stable-indexable-html/',
  '/posts/category/work/',
  '/posts/category/guide/',
];

// https://astro.build/config
export default defineConfig({
  site: 'https://indexlayer.pro',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;

        return !redirectPaths.includes(pathname) && !pathname.includes('/preview/');
      },
    }),
  ],
});
