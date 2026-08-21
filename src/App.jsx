import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import WebDevelopmentPage from './pages/WebDevelopmentPage'
import TechSupportPage from './pages/TechSupportPage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import CaseStudyPage from './pages/CaseStudyPage'
import WorkWithUsPage from './pages/WorkWithUsPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import { caseStudyBySlug } from './data/caseStudies'
import { trackEvent } from './utils/analytics'
import { canonicalUrl, normalisePath, pageConfig, socialImageUrl, structuredData } from './seo/siteConfig'

const pageComponents = {
  '/': HomePage,
  '/web-development': WebDevelopmentPage,
  '/tech-support': TechSupportPage,
  '/about': AboutPage,
  '/work': WorkPage,
  '/work-with-us': WorkWithUsPage,
  '/privacy': PrivacyPage,
  '/terms': TermsPage,
}

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector)
  if (element) element.setAttribute(attribute, value)
}

export default function App({ pathname: suppliedPathname }) {
  const pathname = normalisePath(suppliedPathname ?? (typeof window !== 'undefined' ? window.location.pathname : '/')) || '/'
  const page = pageConfig[pathname]
  const caseStudy = pathname.startsWith('/work/') ? caseStudyBySlug[pathname.split('/').pop()] : null
  const Page = caseStudy ? CaseStudyPage : pageComponents[pathname]
  useEffect(() => {
    const canonical = canonicalUrl(pathname)
    document.title = page.title
    setMeta('meta[name="description"]', 'content', page.description)
    setMeta('link[rel="canonical"]', 'href', canonical)
    setMeta('meta[property="og:title"]', 'content', page.title)
    setMeta('meta[property="og:description"]', 'content', page.description)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[property="og:type"]', 'content', page.ogType || 'website')
    setMeta('meta[property="og:image"]', 'content', socialImageUrl)
    setMeta('meta[name="twitter:title"]', 'content', page.title)
    setMeta('meta[name="twitter:description"]', 'content', page.description)
    setMeta('meta[name="twitter:image"]', 'content', socialImageUrl)
    const jsonLd = document.getElementById('structured-data')
    if (jsonLd) jsonLd.textContent = JSON.stringify(structuredData(pathname))
    const trackClick = event => {
      const link = event.target.closest('a')
      if (!link) return
      const explicit = link.dataset.event
      const href = link.getAttribute('href') || ''
      const label = link.textContent.trim()
      if (explicit) trackEvent(explicit, { href, label, path: pathname })
      else if (href.startsWith('tel:')) trackEvent('phone_click', { href, path: pathname })
      else if (href.startsWith('mailto:')) trackEvent('email_click', { href, path: pathname })
      else if (label.includes('Request a Discovery Call')) trackEvent('discovery_call_click', { href, path: pathname })
      else if (href === '/web-development' || href.startsWith('/web-development#')) trackEvent('service_page_cta', { href, label, path: pathname })
    }
    document.addEventListener('click', trackClick)
    return () => document.removeEventListener('click', trackClick)
  }, [page, pathname])
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Navbar pathname={pathname} />
      <main id="main"><Page {...(caseStudy ? { study: caseStudy } : {})} /></main>
      <Footer />
    </>
  )
}
