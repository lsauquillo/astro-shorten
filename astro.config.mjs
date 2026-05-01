// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [vue()],
});