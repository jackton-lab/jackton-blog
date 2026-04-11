import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blog.jackton.xyz',
  image: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.unsplash.com' },
    ],
  },
});
