import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from '../dist-server/entry-server.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const sitemapPath = path.join(distDir, 'sitemap.xml');
const templatePath = path.join(distDir, 'index.html');
const origin = 'https://veravladimirovna.com';

function stripBaseSeoHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/gi, '')
    .replace(/<meta\s+(?:name|property)=["'](?:description|keywords|robots|og:[^"']+|twitter:[^"']+)["'][^>]*>\s*/gi, '')
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, '')
    .replace(/<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>\s*/gi, '');
}

function headFromHelmet(helmet) {
  return [
    helmet?.title?.toString() || '',
    helmet?.meta?.toString() || '',
    helmet?.link?.toString() || '',
    helmet?.script?.toString() || '',
  ].filter(Boolean).join('\n    ');
}

function outputPathForRoute(route) {
  if (route === '/') return path.join(distDir, 'index.html');
  return path.join(distDir, route.replace(/^\//, ''), 'index.html');
}

function routeFromLoc(loc) {
  const url = new URL(loc);
  if (url.origin !== origin) return null;
  if (url.pathname.endsWith('.md')) return null;
  return url.pathname;
}

const sitemap = await fs.readFile(sitemapPath, 'utf8');
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => routeFromLoc(match[1]))
  .filter(Boolean);

const template = await fs.readFile(templatePath, 'utf8');
const cleanedTemplate = stripBaseSeoHead(template);

for (const route of routes) {
  const { html, helmet } = render(route);
  const staticHead = headFromHelmet(helmet);
  const pageHtml = cleanedTemplate
    .replace('</head>', `    ${staticHead}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const outputPath = outputPathForRoute(route);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, pageHtml);
}

const { html: notFoundHtml, helmet: notFoundHelmet } = render('/404');
const notFoundPage = cleanedTemplate
  .replace('</head>', `    ${headFromHelmet(notFoundHelmet)}\n  </head>`)
  .replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`);
await fs.writeFile(path.join(distDir, '404.html'), notFoundPage);

console.log(`Prerendered ${routes.length} routes and 404.html`);
