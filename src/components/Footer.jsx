import Logo from './Logo'
import { contactDetails, navLinks, socialLinks } from '../data/siteData'

export default function Footer() {
  return <footer className="footer">
    <div className="container footer__grid">
      <div className="footer__brand"><Logo light /><p>Clear, reliable websites and technology support for small and growing New Zealand businesses.</p><div className="socials">{socialLinks.map(({label, href, icon: Icon}) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`ARS Tech Solutions on ${label}`} title={label}><Icon /></a>)}</div></div>
      <div><h3>Explore</h3>{navLinks.slice(0, 6).map(({label, href}) => <a key={href} href={href}>{label}</a>)}<a href="/work-with-us">Work With ARS Tech Solutions</a></div>
      <div><h3>Services</h3><a href="/web-development">Website Development</a><a href="/web-development#services">Web Applications</a><a href="/tech-support">Tech Support</a><a href="/web-development#pricing">Web Pricing</a></div>
      <div><h3>Contact</h3>{contactDetails.slice(0, 3).map(({label, value, href}) => href ? <a key={label} href={href}>{value}</a> : <p key={label}>{value}</p>)}</div>
    </div>
    <div className="container footer__bottom"><span>© 2026 ARS Tech Solutions. All rights reserved. · NZBN 9429053837134</span><span><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · Rolleston, Canterbury, New Zealand</span></div>
  </footer>
}
