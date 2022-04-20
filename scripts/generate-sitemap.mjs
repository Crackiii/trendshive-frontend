import { writeFileSync } from 'fs';
import globby from 'globby';
import prettier from 'prettier';
import * as dates from 'date-fns'



async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const more_pages = [
    {
      value: 'business',
    },
    {
      value: 'sports',
    },
    {
      value: 'entertainment',
    },
    {
      value: 'health',
    },
    {
      value: 'technology',
    },
    {
      value: 'news',
    },
    {
      value: 'trending',
    },
    {
      value: 'fashion',
    },
    {
      value: 'travel',
    },
    {
      value: 'food',
    },
    {
      value: 'culture',
    },
    {
      value: 'cryptocurrency',
    },
    {
      value: 'learning',
    },
    {
      value: 'gaming',
    },
    {
      value: 'live',
    },
    {
      value: 'jobs',
    },
    {
      value: 'shopping',
    }
  ]
  const pages = [
    {
      path: '',
      priority: 1,
      changefreq: 'hourly',
      lastmod: dates.subHours(Date.now(), Math.random() * 4 + 1).toISOString()
    },
    ...more_pages.map((item => ({
      path: '/categories/' + item.value,
      priority: 1,
      changefreq: 'hourly',
      lastmod: dates.subMonths(Date.now(), Math.random() * 4 + 1).toISOString()
    }))),
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