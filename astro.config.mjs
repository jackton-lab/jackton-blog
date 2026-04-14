import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blog.jackton.xyz/',
  integrations: [sitemap()],
  image: {
    domains: ['images.unsplash.com', 'i.ibb.co', 'ibb.co'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.unsplash.com' },
      { protocol: 'https', hostname: 'i.ibb.co' },
      { protocol: 'https', hostname: '**.ibb.co' },
    ],
  },
});
