import { readFile, readdir, stat } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pageConfig } from '../src/seo/siteConfig.js'

const dist = resolve('dist')
const source = resolve('src')
const results = []
const check = (condition, message) => { if (!condition) throw new Error(message); results.push(message) }
const routeFile = path => path === '/' ? resolve(dist, 'index.html') : resolve(dist, path.slice(1), 'index.html')

for (const path of Object.keys(pageConfig)) {
  const html = await readFile(routeFile(path), 'utf8')
  check(html.includes('<html lang="en-NZ">'), `${path} declares the page language`)
  check((html.match(/<h1[ >]/g) || []).length === 1, `${path} has one H1`)
  check(html.includes('class="skip-link" href="#main"'), `${path} has a skip link`)
  check(!/<img(?![^>]*\balt=)[^>]*>/i.test(html), `${path} gives every image an alt attribute`)
  check(html.includes('aria-label="Open navigation menu"'), `${path} labels the mobile menu control`)
}

const css = await readFile(resolve(source, 'styles/global.css'), 'utf8')
check(css.includes('@media(prefers-reduced-motion:reduce)'), 'reduced-motion preferences remain supported')
check(css.includes('body{margin:0;min-width:0;overflow-x:hidden}'), 'the document does not force overflow at 320px')
check(css.includes('.menu-button{min-width:44px;min-height:44px}'), 'mobile menu target is at least 44px')
check(css.includes('@media(max-width:840px){.site-header{height:70px}.menu-button{display:block}'), 'tablet header switches to the compact navigation before links become crowded')
check(css.includes('.contact-socials a{min-height:44px}'), 'contact social targets are at least 44px')
check(css.includes('.pricing-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr))'), 'desktop pricing uses four stable columns')
check(css.includes('.service-paths,.services-grid,.projects-grid,.pricing-grid{grid-template-columns:1fr}'), 'mobile pricing collapses to one column')
check(css.includes('.price-card h3,.price-purpose{min-height:0}'), 'mobile pricing removes desktop alignment constraints')
check(css.includes('.footer .socials a{width:44px;height:44px!important}'), 'footer social links have 44px touch targets')

const navigationSource = await readFile(resolve(source, 'data/siteData.js'), 'utf8')
const navigationBlock = navigationSource.match(/export const navLinks = \[[\s\S]*?\n\]/)?.[0] || ''
check(navigationBlock.includes("label: 'Pricing'"), 'shared navigation contains Pricing')
check(!navigationBlock.includes('Work With ARS'), 'shared primary navigation excludes Work With ARS')
const duplicateQuoteValue = `price: '${['Custom', 'Quote'].join(' ')}'`
check(!navigationSource.includes(duplicateQuoteValue), 'pricing data has no duplicate custom-price value')
for (const price of ['NZ$399', 'NZ$699', 'NZ$1,499', 'NZ$2,999']) check(navigationSource.includes(`price: '${price}'`), `pricing data contains ${price}`)

const luminance = hex => {
  const values = hex.match(/[a-f\d]{2}/gi).map(value => parseInt(value, 16) / 255).map(value => value <= .03928 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4)
  return .2126 * values[0] + .7152 * values[1] + .0722 * values[2]
}
const contrast = (a,b) => { const [lighter,darker] = [luminance(a),luminance(b)].sort((x,y) => y-x); return (lighter+.05)/(darker+.05) }
for (const [foreground,background,label] of [['172033','ffffff','body text'],['5e687b','ffffff','muted text'],['2864dc','ffffff','blue links'],['ffffff','2864dc','primary buttons'],['ffffff','0b1736','navy sections'],['9eacc5','0b1736','muted navy-section text']]) check(contrast(foreground,background) >= 4.5, `${label} meets WCAG AA contrast`)

const projectDir = resolve(source, 'assets/projects')
const files = await readdir(projectDir)
for (const webp of files.filter(file => file.endsWith('.webp'))) {
  const png = webp.replace(/\.webp$/, '.png')
  check(files.includes(png), `${webp} retains its original source image`)
  check((await stat(resolve(projectDir, webp))).size < (await stat(resolve(projectDir, png))).size, `${webp} is smaller than its PNG source`)
}
const builtAssets = await readdir(resolve(dist, 'assets'))
check(!builtAssets.some(file => /kiss-web|wedding-|explore-nz|noble-|nzftc|zenfit/.test(file) && file.endsWith('.png')), 'production project imagery uses modern formats')
console.log(`Verified ${results.length} accessibility and performance checks.`)
