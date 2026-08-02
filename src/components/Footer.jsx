import Logo from './Logo'
import { contactDetails, navLinks, socialLinks } from '../data/siteData'

export default function Footer() {
  return <footer className="footer">
    <div className="container footer__grid">
      <div className="footer__brand"><Logo light /><p>Clear, reliable websites and web applications for small and growing New Zealand businesses.</p><div className="socials">{socialLinks.map(({label, href, icon: Icon}) => <a key={label} href={href} aria-label={`ARS Tech Solutions on ${label}`}><Icon /></a>)}</div></div>
      <div><h3>Explore</h3>{navLinks.slice(0, 6).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
      <div><h3>Services</h3><a href="#services">Website Development</a><a href="#services">Web Applications</a><a href="#services">Website Care</a><a href="#pricing">Pricing</a></div>
      <div><h3>Contact</h3>{contactDetails.slice(0, 3).map(({label, value, href}) => href ? <a key={label} href={href}>{value}</a> : <p key={label}>{value}</p>)}</div>
    </div>
    <div className="container footer__bottom"><span>© 2026 ARS Tech Solutions. All rights reserved.</span><span>Rolleston, Canterbury, New Zealand</span></div>
  </footer>
}
