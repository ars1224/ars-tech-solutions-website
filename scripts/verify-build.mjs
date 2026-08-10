import { readFile } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, resolve } from 'node:path'
import { pageConfig } from '../src/seo/siteConfig.js'

const dist = resolve('dist')
const routeFile = path => path === '/' ? resolve(dist, 'index.html') : resolve(dist, path.slice(1), 'index.html')
const results = []
const check = (condition, message) => {
  if (!condition) throw new Error(message)
  results.push(message)
}

const seenTitles = new Set()
const seenDescriptions = new Set()
for (const [path, page] of Object.entries(pageConfig)) {
  const html = await readFile(routeFile(path), 'utf8')
  const canonical = path === '/' ? 'https://arstechsolutions.com/' : `https://arstechsolutions.com${path}`
  check(html.includes(`<title>${page.title.replaceAll('&', '&amp;')}</title>`), `${path} has its unique title`)
  check(html.includes(`content="${page.description}"`), `${path} has its unique description`)
  check(html.includes(`<link rel="canonical" href="${canonical}"`), `${path} has its self-referencing canonical`)
  check(html.includes(`property="og:url" content="${canonical}"`), `${path} has its route-specific Open Graph URL`)
  check(html.includes('name="twitter:card" content="summary_large_image"'), `${path} has X/Twitter card metadata`)
  check(html.includes('type="application/ld+json">{"@context":"https://schema.org"'), `${path} has JSON-LD`)
  check((html.match(/<h1[ >]/g) || []).length === 1, `${path} has exactly one H1 in initial HTML`)
  check(html.includes('<form name="contact" data-netlify="true"') && html.includes('name="form-name" value="contact"'), `${path} keeps the working contact form`)
  check(html.includes('contact@arstechsolutions.com'), `${path} exposes business information before JavaScript`)
  seenTitles.add(page.title)
  seenDescriptions.add(page.description)
}
check(seenTitles.size === Object.keys(pageConfig).length, 'all page titles are unique')
check(seenDescriptions.size === Object.keys(pageConfig).length, 'all page descriptions are unique')

const robots = await readFile(resolve(dist, 'robots.txt'), 'utf8')
check(robots.includes('Sitemap: https://arstechsolutions.com/sitemap.xml'), 'robots.txt references the production sitemap')
const sitemap = await readFile(resolve(dist, 'sitemap.xml'), 'utf8')
check((sitemap.match(/<url>/g) || []).length === Object.keys(pageConfig).length, 'sitemap contains every public route and no extras')
const redirects = await readFile(resolve(dist, '_redirects'), 'utf8')
check(redirects.includes('/*                   /404.html                     404'), 'Netlify fallback returns the custom page with HTTP 404')

const mime = file => ({ '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.html': 'text/html; charset=utf-8' }[extname(file)] || 'application/octet-stream')
const server = createServer(async (request, response) => {
  const path = new URL(request.url, 'http://localhost').pathname.replace(/\/$/, '') || '/'
  let file
  let status = 200
  if (pageConfig[path]) file = routeFile(path)
  else if (path === '/robots.txt' || path === '/sitemap.xml') file = resolve(dist, path.slice(1))
  else { file = resolve(dist, '404.html'); status = 404 }
  response.writeHead(status, { 'content-type': mime(file) })
  response.end(await readFile(file))
})
await new Promise(resolveReady => server.listen(0, '127.0.0.1', resolveReady))
const base = `http://127.0.0.1:${server.address().port}`
for (const path of Object.keys(pageConfig)) check((await fetch(`${base}${path}`)).status === 200, `${path} returns HTTP 200`)
const robotsResponse = await fetch(`${base}/robots.txt`)
check(robotsResponse.status === 200 && robotsResponse.headers.get('content-type').startsWith('text/plain'), '/robots.txt returns plain text')
const sitemapResponse = await fetch(`${base}/sitemap.xml`)
check(sitemapResponse.status === 200 && sitemapResponse.headers.get('content-type').includes('xml'), '/sitemap.xml returns XML')
check((await fetch(`${base}/this-page-does-not-exist`)).status === 404, 'an invalid URL returns HTTP 404')
server.close()
console.log(`Verified ${results.length} production checks.`)
