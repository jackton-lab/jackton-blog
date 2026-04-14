import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blog.jackton.xyz/',
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
