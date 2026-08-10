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
check(css.includes('.menu-button{min-width:44px;min-height:44px}'), 'mobile menu target is at least 44px')
check(css.includes('.contact-socials a{min-height:44px}'), 'contact social targets are at least 44px')

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
