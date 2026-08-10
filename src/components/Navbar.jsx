import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data/siteData'
import BookingLink from './BookingLink'

export default function Navbar({ pathname: suppliedPathname }) {
  const [open, setOpen] = useState(false)
  const pathname = suppliedPathname ?? (typeof window !== 'undefined' ? (window.location.pathname.replace(/\/$/, '') || '/') : '/')
  const contextualLinks = navLinks
  const consultationLabel = pathname === '/tech-support' ? 'Request Tech Support' : 'Book a Discovery Call'
  useEffect(() => {
    const close = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <button className="menu-button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <nav id="primary-navigation" className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary navigation">
          <div className="nav__links">
            {contextualLinks.map(({label, href}) => <a key={`${label}-${href}`} href={href} aria-current={href === pathname ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
          </div>
          {pathname === '/tech-support' ? <a className="button button--small" href="#contact" onClick={() => setOpen(false)}>{consultationLabel}</a> : <BookingLink className="button button--small" onClick={() => setOpen(false)}>{consultationLabel}</BookingLink>}
        </nav>
      </div>
    </header>
  )
}
