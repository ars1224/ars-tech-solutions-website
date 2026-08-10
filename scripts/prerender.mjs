import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'
import { canonicalUrl, pageConfig, socialImageUrl, structuredData } from '../src/seo/siteConfig.js'

const distDir = resolve('dist')
const ssrDir = resolve('.ssr')
const template = await readFile(resolve(distDir, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

for (const [path, page] of Object.entries(pageConfig)) {
  const canonical = canonicalUrl(path)
  const metadata = `<title>${escape(page.title)}</title>
    <meta name="description" content="${escape(page.description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${escape(page.title)}" />
    <meta property="og:description" content="${escape(page.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${socialImageUrl}" />
    <meta name="twitter:title" content="${escape(page.title)}" />
    <meta name="twitter:description" content="${escape(page.description)}" />
    <meta name="twitter:image" content="${socialImageUrl}" />`
  const output = template
    .replace(/\s*<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta name="description"[^>]*>/, '')
    .replace(/\s*<link rel="canonical"[^>]*>/, '')
    .replace(/\s*<meta property="og:title"[^>]*>/, '')
    .replace(/\s*<meta property="og:description"[^>]*>/, '')
    .replace(/\s*<meta property="og:url"[^>]*>/, '')
    .replace(/\s*<meta property="og:image"[^>]*>/, '')
    .replace(/\s*<meta name="twitter:title"[^>]*>/, '')
    .replace(/\s*<meta name="twitter:description"[^>]*>/, '')
    .replace(/\s*<meta name="twitter:image"[^>]*>/, '')
    .replace('<!--seo-head-->', metadata)
    .replace('<script id="structured-data" type="application/ld+json"></script>', `<script id="structured-data" type="application/ld+json">${JSON.stringify(structuredData(path)).replaceAll('<', '\\u003c')}</script>`)
    .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`)
  const outputDir = path === '/' ? distDir : resolve(distDir, path.slice(1))
  await mkdir(outputDir, { recursive: true })
  await writeFile(resolve(outputDir, 'index.html'), output)
}
await rm(ssrDir, { recursive: true, force: true })
