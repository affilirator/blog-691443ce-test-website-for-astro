
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://affilirator.github.io/blog-691443ce-test-website-for-astro/',
  integrations: [tailwind()],
  build: {
    format: 'directory'
  }
});
