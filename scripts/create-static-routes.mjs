import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist');
const indexPath = join(distDir, 'index.html');
const siteUrl = 'https://brookersystems.com.au';
const imageUrl = `${siteUrl}/brooker-logo.png`;

const routes = [
  {
    route: '',
    title: 'Brooker Systems | Apps, Agents & Automations',
    description: 'Brooker Systems helps Australian businesses build apps, agents and automations for real business workflows.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Brooker Systems',
      url: siteUrl,
      logo: imageUrl,
      founder: { '@type': 'Person', name: 'Max Brooker' },
      areaServed: ['Australia', 'Western Australia', 'Perth'],
      serviceType: ['Apps', 'Agents', 'Automations'],
    },
  },
  {
    route: 'apps',
    title: 'Apps for Business Workflows | Brooker Systems',
    description: 'Brooker Systems builds web apps, portals, product builds and internal tools for Australian businesses that need practical software.',
    service: 'Apps',
  },
  {
    route: 'agents',
    title: 'AI Agents for Business Workflows | Brooker Systems',
    description: 'Brooker Systems builds supervised AI agents and agentic workflows for document review, research, operations, reporting and internal business processes.',
    service: 'Agents',
  },
  {
    route: 'automations',
    title: 'Business Automations Australia | Brooker Systems',
    description: 'Brooker Systems automates repeated admin, reporting, data movement and system integration work for Australian businesses.',
    service: 'Automations',
  },

  {
    route: 'construction-software-integrations',
    title: 'Construction Software Automation WA | Brooker Systems',
    description: 'Automation and software integrations for WA construction businesses. Connect tools, reduce repeated admin and build practical internal workflows.',
    service: 'Construction Software Automation',
  },
  {
    route: 'admin-automation',
    title: 'Business Automation Consultant Australia | Brooker Systems',
    description: 'Practical automation for repeated computer work, reports, spreadsheets, documents and business systems. Built by Brooker Systems in Australia.',
    service: 'Business Automation',
  },
  {
    route: 'app-prototype',
    title: 'App Prototype Development Australia | Brooker Systems',
    description: 'Turn an app idea into a polished working prototype. Brooker Systems builds fast app prototypes and MVPs for Australian founders, consultants and small teams.',
    service: 'App Prototype Development',
  },
  {
    route: 'api-integrations',
    title: 'API Integrations for Australian Businesses | Brooker Systems',
    description: 'Connect CRMs, practice management systems, accounting tools, spreadsheets and internal software using APIs and practical workflow automation.',
    service: 'API Integrations',
  },
  {
    route: 'business-automation',
    title: 'Business Process Automation Australia | Brooker Systems',
    description: 'Practical automation and internal tools for Australian businesses with repeated computer work, messy handoffs and spreadsheet-heavy processes.',
    service: 'Business Process Automation',
  },
  {
    route: 'technical-operations-retainer',
    title: 'Technical Operations Retainer Australia | Brooker Systems',
    description: 'Ongoing technical operations retainers for businesses that need API integrations, automation, reporting and internal software support without hiring full-time.',
    service: 'Technical Operations Retainer',
  },
  {
    route: 'case-studies',
    title: 'Case Studies | Brooker Systems',
    description: 'Anonymised examples of Brooker Systems work across construction workflow automation, client intake apps and fast app prototypes.',
  },
  {
    route: 'thank-you',
    title: 'Thank You | Brooker Systems',
    description: 'Thanks for contacting Brooker Systems.',
  },
];

const serviceSchema = (meta) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: meta.service,
  description: meta.description,
  provider: {
    '@type': 'ProfessionalService',
    name: 'Brooker Systems',
    url: siteUrl,
  },
  areaServed: ['Australia', 'Western Australia', 'Perth'],
  url: `${siteUrl}/${meta.route}`,
});

const upsertHead = (html, meta) => {
  const path = meta.route ? `/${meta.route}` : '/';
  const canonical = `${siteUrl}${path === '/' ? '/' : path}`;
  const schema = meta.schema || (meta.service ? serviceSchema(meta) : null);
  const jsonLd = schema ? `\n    <script type="application/ld+json">${JSON.stringify(schema)}</script>` : '';

  let next = html
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${meta.description}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${meta.title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${meta.description}" />`);

  if (!next.includes('rel="canonical"')) {
    next = next.replace('</head>', `    <link rel="canonical" href="${canonical}" />\n  </head>`);
  } else {
    next = next.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonical}" />`);
  }

  const extraMeta = `
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />${jsonLd}
`;

  next = next.replace('</head>', `${extraMeta}  </head>`);
  return next;
};

if (!existsSync(indexPath)) {
  throw new Error(`Cannot create static route fallbacks: ${indexPath} does not exist. Run vite build first.`);
}

const baseHtml = readFileSync(indexPath, 'utf8');

for (const meta of routes) {
  const html = upsertHead(baseHtml, meta);
  if (!meta.route) {
    writeFileSync(indexPath, html);
    continue;
  }
  const routeDir = join(distDir, meta.route);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, 'index.html'), html);
}

console.log(`Created static route fallbacks for: ${routes.filter((item) => item.route).map((item) => `/${item.route}/`).join(', ')}`);
