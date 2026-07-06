import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist');
const indexPath = join(distDir, 'index.html');

const routes = [
  'construction-software-integrations',
  'admin-automation',
  'app-prototype',
  'thank-you',
];

if (!existsSync(indexPath)) {
  throw new Error(`Cannot create static route fallbacks: ${indexPath} does not exist. Run vite build first.`);
}

for (const route of routes) {
  const routeDir = join(distDir, route);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(indexPath, join(routeDir, 'index.html'));
}

console.log(`Created static route fallbacks for: ${routes.map((route) => `/${route}/`).join(', ')}`);
