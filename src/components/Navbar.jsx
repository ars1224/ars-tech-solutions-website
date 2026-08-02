import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data/siteData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
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
            {navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
          </div>
          <a className="button button--small" href="#contact" onClick={() => setOpen(false)}>Get a Free Consultation</a>
        </nav>
      </div>
    </header>
  )
}
