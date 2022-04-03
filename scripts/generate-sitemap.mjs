import { writeFileSync } from 'fs';
import globby from 'globby';
import prettier from 'prettier';
import * as dates from 'date-fns'

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = [
    {
      path: '',
      priority: 1,
      changefreq: 'hourly',
      lastmod: dates.subHours(Date.now(), Math.random() * 4 + 1).toISOString()
    },
    {
      path: '/search',
      priority: 1,
      changefreq: 'hourly',
      lastmod: dates.subHours(Date.now(), Math.random() * 4 + 1).toISOString()
    },
    {
      path: '/story',
      priority: 1,
      changefreq: 'hourly',
      lastmod: dates.subHours(Date.now(), Math.random() * 4 + 1).toISOString()
    },
    {
      path: '/privacy-policy',
      priority: 0.5,
      changefreq: 'daily',
      lastmod: dates.subMonths(Date.now(), Math.random() * 4 + 1).toISOString()
    },
    {
      path: '/cookie-policy',
      priority: 0.5,
      changefreq: 'daily',
      lastmod: dates.subMonths(Date.now(), Math.random() * 4 + 1).toISOString()
    }
  ]

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
      .map((page) => {
        return `
              <url>
                  <loc>${`https://www.trendscads.com${page.path}`}</loc>
                  <lastmod>${page.lastmod}</lastmod>
                  <changefreq>${page.changefreq}</changefreq>
                  <priority>${page.priority}</priority>
              </url>
            `;
      })
      .join('')}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', formatted);
}

generate();