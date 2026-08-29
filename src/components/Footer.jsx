import Logo from './Logo'
import { contactDetails, socialLinks } from '../data/siteData'
import { founder } from '../config/siteSettings'

export default function Footer() {
  return <footer className="footer">
    <div className="container footer__grid">
      <div className="footer__brand"><Logo light /><p>Founder-led web design and development from Rolleston for businesses across Canterbury and New Zealand.</p><div className="socials">{socialLinks.map(({label, href, icon: Icon}) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`ARS Tech Solutions on ${label}`} title={label}><Icon /></a>)}</div></div>
      <div><h3>Company</h3><a href="/">Home</a><a href="/about">About Us</a><a href="/work">Selected Work</a><a href="/work-with-us">Work With ARS Tech Solutions</a><a href={founder.developerPortfolio} target="_blank" rel="noopener noreferrer">Built by ARS · Developer Portfolio</a></div>
      <div><h3>Services</h3><a href="/web-development#business-websites">Business Websites</a><a href="/web-development#website-redesigns">Website Redesigns</a><a href="/web-development#custom-web-applications">Custom Web Applications</a><a href="/web-development#website-care">Website Care</a><a href="/tech-support">Tech Support</a><a href="/web-development#pricing">Website Pricing</a><a href="/#contact">Let’s Chat</a></div>
      <div><h3>Contact</h3>{contactDetails.slice(0, 3).map(({label, value, href}) => href ? <a key={label} href={href}>{value}</a> : <p key={label}>{value}</p>)}</div>
    </div>
    <div className="container footer__bottom"><span>© 2026 ARS Tech Solutions. All rights reserved. · NZBN 9429053837134</span><span><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · Rolleston, Canterbury, New Zealand</span></div>
  </footer>
}
