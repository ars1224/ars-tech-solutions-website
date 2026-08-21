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
  check(html.includes(`property="og:type" content="${page.ogType || 'website'}"`), `${path} has the correct Open Graph type`)
  check((html.match(/property="og:type"/g) || []).length === 1, `${path} has one Open Graph type`)
  check(html.includes('property="og:image:width" content="1200"') && html.includes('property="og:image:height" content="630"'), `${path} declares social-image dimensions`)
  check(html.includes('name="twitter:card" content="summary_large_image"'), `${path} has X/Twitter card metadata`)
  check(!html.includes('<div id="root"><link rel="preload"'), `${path} keeps automatic image preloads outside the hydration root`)
  check(html.slice(0, html.indexOf('</head>')).includes('<link rel="preload" as="image"'), `${path} keeps automatic image preloads in the document head`)
  check(html.includes('type="application/ld+json">{"@context":"https://schema.org"'), `${path} has JSON-LD`)
  const jsonLdText = html.match(/<script id="structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1]
  const jsonLd = JSON.parse(jsonLdText)
  check(Array.isArray(jsonLd['@graph']) && jsonLd['@graph'].length > 0, `${path} has a valid structured-data graph`)
  check(!jsonLdText.includes('AggregateRating') && !jsonLdText.includes('Review'), `${path} structured data contains no invented review data`)
  check((html.match(/<h1[ >]/g) || []).length === 1, `${path} has exactly one H1 in initial HTML`)
  check(html.includes('<form name="contact" data-netlify="true"') && html.includes('name="form-name" value="contact"'), `${path} keeps the working contact form`)
  check(html.includes('contact@arstechsolutions.com'), `${path} exposes business information before JavaScript`)
  seenTitles.add(page.title)
  seenDescriptions.add(page.description)
  check(page.title.length >= 25 && page.title.length <= 65, `${path} title length is search-friendly`)
  check(page.description.length >= 70 && page.description.length <= 165, `${path} description length is search-friendly`)
}
check(seenTitles.size === Object.keys(pageConfig).length, 'all page titles are unique')
check(seenDescriptions.size === Object.keys(pageConfig).length, 'all page descriptions are unique')

const webDevelopmentHtml = await readFile(routeFile('/web-development'), 'utf8')
const pricingSection = webDevelopmentHtml.match(/<section class="section" id="pricing">[\s\S]*?<\/section>/)?.[0] || ''
const packageOrder = ['One-Page Website', 'Starter Website', 'Business Website', 'Custom Web Application']
check(packageOrder.every((name, index) => index === 0 || pricingSection.indexOf(name) > pricingSection.indexOf(packageOrder[index - 1])), 'website packages appear in the required progression')
for (const price of ['NZ$399', 'NZ$699', 'NZ$1,499', 'NZ$2,999']) check(pricingSection.includes(`aria-label="From ${price}"`), `${price} is presented as a starting price`)
const duplicateQuoteLabel = ['Custom', 'Quote'].join(' ')
check(!pricingSection.includes(duplicateQuoteLabel), 'custom application pricing has no duplicate quote label')
check(pricingSection.includes('Businesses mainly relying on Facebook or Instagram'), 'the one-page package includes its intended audience')
check(pricingSection.includes('Final pricing depends on project requirements and scope.'), 'custom work has one concise scope clarification')
check(pricingSection.includes('Most Popular'), 'the Business Website retains its Most Popular label')

const primaryNavigation = webDevelopmentHtml.match(/<nav id="primary-navigation"[\s\S]*?<\/nav>/)?.[0] || ''
check(primaryNavigation.includes('>Pricing<'), 'primary navigation links to pricing')
check(!primaryNavigation.includes('Work With ARS'), 'Work With ARS is absent from primary navigation')
check(webDevelopmentHtml.includes('<a href="/work-with-us">Work With ARS Tech Solutions</a>'), 'footer links to Work With ARS')
const aboutHtml = await readFile(routeFile('/about'), 'utf8')
check(aboutHtml.includes('href="https://builtbyars.dev"') && aboutHtml.includes('>Developer Portfolio '), 'about founder section links to the separate developer portfolio')
check(aboutHtml.includes('target="_blank" rel="noopener noreferrer"'), 'developer portfolio link opens securely')
const homeHtml = await readFile(routeFile('/'), 'utf8')
check(homeHtml.includes('"@type":"FAQPage"'), 'homepage visible FAQs have matching FAQ structured data')

const robots = await readFile(resolve(dist, 'robots.txt'), 'utf8')
check(robots.includes('Sitemap: https://arstechsolutions.com/sitemap.xml'), 'robots.txt references the production sitemap')
const sitemap = await readFile(resolve(dist, 'sitemap.xml'), 'utf8')
check((sitemap.match(/<url>/g) || []).length === Object.keys(pageConfig).length, 'sitemap contains every public route and no extras')
for (const path of Object.keys(pageConfig)) check(sitemap.includes(`<loc>${path === '/' ? 'https://arstechsolutions.com/' : `https://arstechsolutions.com${path}`}</loc>`), `sitemap includes ${path}`)
const redirects = await readFile(resolve(dist, '_redirects'), 'utf8')
check(redirects.includes('/*                   /404.html                     404'), 'Netlify fallback returns the custom page with HTTP 404')
check(redirects.includes('/work-with-us      /work-with-us/index.html      200'), 'Work With ARS has an explicit production redirect')

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
