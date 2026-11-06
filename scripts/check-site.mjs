import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../public/', import.meta.url));
const files = await readdir(root);
const pages = new Map();
const errors = [];
const decoder = new TextDecoder('utf-8', { fatal: true });

for (const name of files.filter(name => name.endsWith('.html'))) {
  const html = decoder.decode(await readFile(path.join(root, name)));
  pages.set(name, html);
  if (!/<meta\b[^>]*charset=["']utf-8["']/i.test(html)) errors.push(`${name}: missing UTF-8 declaration`);
  if ((html.match(/<h1\b/gi) ?? []).length !== 1) errors.push(`${name}: expected one main heading`);
  const text = html.replace(/<[^>]*>/g, ' ');
  if (/\uFFFD|\p{L}\?\p{L}/u.test(text)) errors.push(`${name}: damaged text encoding`);
  if (!/name=["']robots["'][^>]*content=["']noindex|content=["']noindex[^>]*name=["']robots/i.test(html)) {
    errors.push(`${name}: missing noindex metadata`);
  }
}

for (const [name, html] of pages) {
  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    const url = match[1];
    if (/^[a-z][a-z0-9+.-]*:|^\/\//i.test(url)) continue;
    const [pathname, fragment] = url.split('#');
    const relative = pathname.split('?')[0];
    let target = relative ? path.resolve(root, relative.replace(/^\//, '')) : path.join(root, name);
    if (target !== path.resolve(root) && !target.startsWith(root)) { errors.push(`${name}: path outside public: ${url}`); continue; }
    try {
      if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
      await stat(target);
    } catch { errors.push(`${name}: missing ${url}`); continue; }
    if (fragment && target.endsWith('.html')) {
      const linked = await readFile(target, 'utf8');
      if (!linked.includes(`id="${fragment}"`) && !linked.includes(`id='${fragment}'`)) {
        errors.push(`${name}: missing anchor ${url}`);
      }
    }
  }
  for (const match of html.matchAll(/<(?:input|select|textarea)\b[^>]*\bid=["']([^"']+)["']/g)) {
    if (!html.includes(`for="${match[1]}"`)) errors.push(`${name}: missing label for ${match[1]}`);
  }
  if (/instagram\.com\/wix|facebook\.com\/wix/i.test(html)) errors.push(`${name}: leftover Wix social link`);
}

for (const required of ['index.html', 'about.html', 'services.html', '404.html', 'app.js', 'styles.css']) {
  try { await stat(path.join(root, required)); } catch { errors.push(`Missing required file: ${required}`); }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked ${pages.size} pages: UTF-8, local assets, navigation, anchors, form labels, and indexing metadata passed.`);
}
