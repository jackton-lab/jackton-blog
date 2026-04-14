import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://blog.jackton.xyz/';
const BLOG_CONTENT_DIR = 'src/content/blog';
const PUBLIC_DIR = 'public';

async function generate() {
  const posts = fs.readdirSync(BLOG_CONTENT_DIR).filter(f => f.endsWith('.md'));
  
  const urls = [
    { loc: SITE_URL, priority: '1.0' },
    ...posts.map(file => {
      const slug = file.replace('.md', '');
      return { loc: `${SITE_URL}blog/${slug}/`, priority: '0.8' };
    })
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <priority>${url.priority}</priority>
    <changefreq>daily</changefreq>
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml);
  console.log('✅ Sitemap manual berhasil dibuat!');
}

generate();
