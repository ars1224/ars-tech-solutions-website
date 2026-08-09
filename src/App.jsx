import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import WebDevelopmentPage from './pages/WebDevelopmentPage'
import TechSupportPage from './pages/TechSupportPage'
import AboutPage from './pages/AboutPage'

const pages = {
  '/': { component: HomePage, title: 'ARS Tech Solutions | Web Development & Tech Support NZ' },
  '/web-development': { component: WebDevelopmentPage, title: 'Website & Web App Development NZ | ARS Tech Solutions' },
  '/tech-support': { component: TechSupportPage, title: 'Tech Support Rolleston & Canterbury | ARS Tech Solutions' },
  '/about': { component: AboutPage, title: 'About ARS Tech Solutions | Rolleston, Canterbury' },
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'
  const page = pages[pathname] || pages['/']
  const Page = page.component
  useEffect(() => { document.title = page.title }, [page.title])
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Navbar />
      <main id="main"><Page /></main>
      <Footer />
    </>
  )
}
