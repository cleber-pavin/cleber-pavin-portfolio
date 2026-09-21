import { writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://cleber-pavin-portfolio.pages.dev';
const PAGES = [
  { path: '', changefreq: 'weekly', priority: 1.0 },
  { path: '/projetos', changefreq: 'weekly', priority: 0.9 },
  { path: '/servicos', changefreq: 'monthly', priority: 0.8 },
  { path: '/segmentos', changefreq: 'monthly', priority: 0.7 },
  { path: '/sobre', changefreq: 'yearly', priority: 0.5 },
  { path: '/orcamento', changefreq: 'monthly', priority: 0.6 },
];

const PROJECT_SLUGS = [
  'caixa-forte',
  'barber-noir',
  'nova-imports',
  'studio-lumina',
  'catalogo-inicial',
  'studiofly',
  'urbano-barber',
];

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const page of PAGES) {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${page.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  for (const slug of PROJECT_SLUGS) {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/projetos/${slug}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += '</urlset>\n';
  return xml;
}

function generateRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
}

const distDir = resolve('dist');
const sitemap = generateSitemap();
const robots = generateRobots();

writeFileSync(resolve(distDir, 'sitemap.xml'), sitemap);
writeFileSync(resolve(distDir, 'robots.txt'), robots);

console.log('✅ sitemap.xml and robots.txt generated');