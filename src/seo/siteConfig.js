export const siteUrl = 'https://arstechsolutions.com'
export const socialImageUrl = `${siteUrl}/og-image.png`

const caseStudySeo = [
  { slug: 'kiss-web-inventory-system', title: 'KISS-Web Inventory and Warehouse Management System', overview: 'A full-stack warehouse application focused on stock visibility, product movement and day-to-day operational records.' },
  { slug: 'digital-wedding-invitation', title: 'Aries & Jade Digital Wedding Invitation', overview: 'A personalised event website combining guest information, online responses and simple guest-management workflows.' },
  { slug: 'noble-innsync-hotel-system', title: 'Noble InnSync Hotel Booking System', overview: 'A hotel management platform connecting guest bookings with room and operational management functions.' },
]

export const pageConfig = {
  '/': {
    title: 'ARS Tech Solutions | Web Development & Tech Support NZ',
    description: 'ARS Tech Solutions provides modern website and web application development plus practical computer and IT support from Rolleston, Canterbury.',
    pageName: 'ARS Tech Solutions',
  },
  '/web-development': {
    title: 'Website & Web App Development NZ | ARS Tech Solutions',
    description: 'Modern websites, custom web applications and ongoing website support for New Zealand businesses, delivered by ARS Tech Solutions in Rolleston.',
    pageName: 'Web Development',
    service: { name: 'Website and Web Application Development', description: 'Website development, custom web applications and ongoing website care for New Zealand businesses.' },
  },
  '/tech-support': {
    title: 'Tech Support Rolleston & Canterbury | ARS Tech Solutions',
    description: 'Practical tech support in Rolleston and Canterbury for Windows setup, slow computers, software, email, devices and small business IT.',
    pageName: 'Tech Support',
    service: { name: 'Technology Support', description: 'Practical Windows, computer, device and small business IT support from Rolleston, Canterbury.' },
  },
  '/about': {
    title: 'About ARS Tech Solutions | Rolleston, Canterbury',
    description: 'Learn about ARS Tech Solutions, a Rolleston-based provider of practical web development and technology support for New Zealand businesses.',
    pageName: 'About ARS Tech Solutions',
  },
  '/work': {
    title: 'Selected Work & Development Projects | ARS Tech Solutions',
    description: 'Explore clearly labelled web development and personal projects by ARS Tech Solutions, including websites and custom web applications.',
    pageName: 'Work',
  },
  '/work-with-us': {
    title: 'Work With ARS Tech Solutions',
    description: 'Interested in collaborating with ARS Tech Solutions? Join our network of independent web developers, designers, marketers and technology specialists.',
    pageName: 'Work With ARS Tech Solutions',
  },
  ...Object.fromEntries(caseStudySeo.map(study => [`/work/${study.slug}`, {
    title: `${study.title} | ARS Tech Solutions Work`,
    description: study.overview,
    pageName: study.title,
    caseStudy: study,
  }])),
}

export function normalisePath(pathname = '/') {
  const path = pathname.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/'
  return pageConfig[path] ? path : null
}

export function canonicalUrl(path) {
  return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`
}

export function structuredData(path) {
  const page = pageConfig[path]
  const canonical = canonicalUrl(path)
  const organization = {
    '@type': ['Organization', 'ProfessionalService'], '@id': `${siteUrl}/#organization`, name: 'ARS Tech Solutions', url: `${siteUrl}/`,
    logo: `${siteUrl}/apple-touch-icon.png`, image: socialImageUrl, email: 'contact@arstechsolutions.com', telephone: '+64 27 207 8245',
    address: { '@type': 'PostalAddress', addressLocality: 'Rolleston', addressRegion: 'Canterbury', addressCountry: 'NZ' },
    areaServed: { '@type': 'Country', name: 'New Zealand' },
    sameAs: ['https://facebook.com/ARStechsolutions', 'https://www.instagram.com/ars.techsolutions/'],
  }
  const graph = [organization]
  if (path === '/') graph.push({ '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`, name: 'ARS Tech Solutions', description: page.description, publisher: { '@id': `${siteUrl}/#organization` }, inLanguage: 'en-NZ' })
  if (page.service) graph.push({ '@type': 'Service', '@id': `${canonical}#service`, name: page.service.name, description: page.service.description, url: canonical, provider: { '@id': `${siteUrl}/#organization` }, areaServed: { '@type': 'Country', name: 'New Zealand' } })
  if (page.caseStudy) graph.push({ '@type': 'CreativeWork', '@id': `${canonical}#project`, name: page.caseStudy.title, description: page.caseStudy.overview, url: canonical, creator: { '@id': `${siteUrl}/#organization` }, image: socialImageUrl, inLanguage: 'en-NZ' })
  if (path !== '/') graph.push({ '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`, itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
    ...(page.caseStudy ? [{ '@type': 'ListItem', position: 2, name: 'Work', item: `${siteUrl}/work` }] : []),
    { '@type': 'ListItem', position: page.caseStudy ? 3 : 2, name: page.pageName, item: canonical },
  ] })
  return { '@context': 'https://schema.org', '@graph': graph }
}
