export const siteUrl = 'https://arstechsolutions.com'
export const socialImageUrl = `${siteUrl}/og-image.png`

const caseStudySeo = [
  { slug: 'kiss-web-inventory-system', name: 'KISS-Web Inventory and Warehouse Management System', title: 'Warehouse Management System Case Study | ARS Tech Solutions', description: 'See how ARS planned and built KISS-Web, a responsive warehouse application for inventory, pallets, orders, fulfilment, reporting and QR scanning.', relatedService: 'Custom Web Applications', relatedServiceUrl: '/web-development#custom-web-applications' },
  { slug: 'digital-wedding-invitation', name: 'Aries & Jade Digital Wedding Invitation', title: 'Digital Wedding Invitation Case Study | ARS Tech Solutions', description: 'See the design and development of a mobile-friendly wedding website with online RSVPs, guest management and Google Sheets integration.', relatedService: 'Business Websites', relatedServiceUrl: '/web-development#business-websites' },
  { slug: 'noble-innsync-hotel-system', name: 'Noble InnSync Hotel Booking System', title: 'Hotel Booking System Case Study | ARS Tech Solutions', description: 'Explore a hotel management application connecting bookings, room availability, payments, maintenance, inventory and staff workflows.', relatedService: 'Custom Web Applications', relatedServiceUrl: '/web-development#custom-web-applications' },
]

export const pageConfig = {
  '/': {
    title: 'Web Design Rolleston & Christchurch | ARS Tech Solutions',
    description: 'Founder-led web design and development in Rolleston, serving Christchurch, Canterbury and New Zealand with business websites, redesigns and custom web apps.',
    pageName: 'ARS Tech Solutions',
  },
  '/web-development': {
    title: 'Web Development & Website Design NZ | ARS Tech Solutions',
    description: 'Business websites, website redesigns, custom web applications and website care from Rolleston for clients across Canterbury and New Zealand.',
    pageName: 'Web Development',
    service: { name: 'Web Design and Development', serviceType: 'Website and web application development', description: 'Business websites, website redesigns, custom web applications and website care for New Zealand businesses.', audience: 'Small and growing New Zealand businesses' },
  },
  '/tech-support': {
    title: 'Tech Support Rolleston & Canterbury | ARS Tech Solutions',
    description: 'Local tech support in Rolleston and Canterbury for Windows setup, slow computers, software, email, devices and everyday small-business IT.',
    pageName: 'Tech Support',
    service: { name: 'Technology Support', serviceType: 'Computer and small-business IT support', description: 'Windows, computer, device and small-business IT support from Rolleston, Canterbury.', audience: 'People and small businesses in Canterbury' },
  },
  '/about': {
    title: 'About ARS Tech Solutions | Rolleston Web Developer',
    description: 'Meet Jhon Aries Tayao, the Rolleston web developer behind ARS Tech Solutions, serving businesses across Canterbury and New Zealand.',
    pageName: 'About ARS Tech Solutions',
  },
  '/work': {
    title: 'Website & Web App Case Studies | ARS Tech Solutions',
    description: 'Explore ARS Tech Solutions case studies covering business websites, responsive interfaces and custom web applications built in New Zealand.',
    pageName: 'Work',
  },
  '/work-with-us': {
    title: 'Work With ARS Tech Solutions | Contractor Network',
    description: 'Interested in collaborating with ARS Tech Solutions? Join our network of independent web developers, designers, marketers and technology specialists.',
    pageName: 'Work With ARS Tech Solutions',
  },
  '/privacy': { title: 'Privacy | ARS Tech Solutions', description: 'Learn what personal information ARS Tech Solutions collects through this website and how enquiry information is used.', pageName: 'Privacy' },
  '/terms': { title: 'Website Terms | ARS Tech Solutions', description: 'Read the terms that apply when using the public ARS Tech Solutions website.', pageName: 'Website Terms' },
  ...Object.fromEntries(caseStudySeo.map(study => [`/work/${study.slug}`, {
    title: study.title,
    description: study.description,
    pageName: study.name,
    caseStudy: study,
    ogType: 'article',
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
  const organizationId = `${siteUrl}/#organization`
  const websiteId = `${siteUrl}/#website`
  const founderId = `${siteUrl}/about#founder`
  const serviceArea = [
    { '@type': 'Place', name: 'Rolleston' },
    { '@type': 'City', name: 'Christchurch' },
    { '@type': 'AdministrativeArea', name: 'Canterbury' },
    { '@type': 'Country', name: 'New Zealand' },
  ]
  const serviceCatalog = [
    ['Business Websites', '/web-development#business-websites'],
    ['Website Redesigns', '/web-development#website-redesigns'],
    ['Custom Web Applications', '/web-development#custom-web-applications'],
    ['Website Care and Improvements', '/web-development#website-care'],
    ['Technology Support', '/tech-support'],
  ]
  const organization = {
    '@type': ['Organization', 'ProfessionalService'], '@id': organizationId, name: 'ARS Tech Solutions', url: `${siteUrl}/`,
    description: 'Founder-led web design and development from Rolleston for businesses across Canterbury and New Zealand.',
    logo: `${siteUrl}/ars-tech-solutions-logo.png`, image: socialImageUrl, email: 'contact@arstechsolutions.com', telephone: '+64 27 207 8245',
    identifier: { '@type': 'PropertyValue', propertyID: 'NZBN', value: '9429053837134' },
    address: { '@type': 'PostalAddress', addressLocality: 'Rolleston', addressRegion: 'Canterbury', addressCountry: 'NZ' },
    areaServed: serviceArea,
    founder: { '@id': founderId },
    knowsAbout: ['Web design', 'Web development', 'Business websites', 'Website redesigns', 'Custom web applications', 'Website care'],
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer enquiries', telephone: '+64 27 207 8245', email: 'contact@arstechsolutions.com', areaServed: 'NZ', availableLanguage: 'English' },
    hasOfferCatalog: { '@type': 'OfferCatalog', name: 'ARS Tech Solutions services', itemListElement: serviceCatalog.map(([name, href]) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, url: `${siteUrl}${href}`, provider: { '@id': organizationId } } })) },
    sameAs: ['https://facebook.com/ARStechsolutions', 'https://www.instagram.com/ars.techsolutions/'],
  }
  const website = { '@type': 'WebSite', '@id': websiteId, url: `${siteUrl}/`, name: 'ARS Tech Solutions', publisher: { '@id': organizationId }, inLanguage: 'en-NZ' }
  const person = { '@type': 'Person', '@id': founderId, name: 'Jhon Aries Tayao', jobTitle: 'Founder & Web Developer', url: `${siteUrl}/about`, image: `${siteUrl}/jhon-aries-tayao.jpg`, alumniOf: { '@type': 'EducationalOrganization', name: 'Yoobee Colleges' }, address: { '@type': 'PostalAddress', addressLocality: 'Rolleston', addressRegion: 'Canterbury', addressCountry: 'NZ' }, sameAs: ['https://builtbyars.dev', 'https://www.linkedin.com/in/ariestayao/', 'https://github.com/ars1224'], worksFor: { '@id': organizationId } }
  const breadcrumb = path === '/' ? null : { '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`, itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
    ...(page.caseStudy ? [{ '@type': 'ListItem', position: 2, name: 'Work', item: `${siteUrl}/work` }] : []),
    { '@type': 'ListItem', position: page.caseStudy ? 3 : 2, name: page.pageName, item: canonical },
  ] }
  const webPage = {
    '@type': path === '/about' ? 'AboutPage' : path === '/work' ? 'CollectionPage' : 'WebPage',
    '@id': `${canonical}#webpage`, url: canonical, name: page.pageName, headline: page.title, description: page.description,
    isPartOf: { '@id': websiteId }, about: { '@id': organizationId }, publisher: { '@id': organizationId }, inLanguage: 'en-NZ',
    ...(breadcrumb ? { breadcrumb: { '@id': breadcrumb['@id'] } } : {}),
  }
  const graph = [organization, website, webPage]
  if (path === '/' || path === '/about') graph.push(person)
  if (path === '/') webPage.mainEntity = { '@id': organizationId }
  if (path === '/about') webPage.mainEntity = { '@id': founderId }
  if (page.service) {
    const serviceId = `${canonical}#service`
    webPage.mainEntity = { '@id': serviceId }
    graph.push({ '@type': 'Service', '@id': serviceId, name: page.service.name, serviceType: page.service.serviceType, description: page.service.description, url: canonical, provider: { '@id': organizationId }, areaServed: serviceArea, audience: { '@type': 'Audience', audienceType: page.service.audience } })
  }
  if (page.caseStudy) {
    const projectId = `${canonical}#project`
    webPage.mainEntity = { '@id': projectId }
    graph.push({ '@type': 'CreativeWork', '@id': projectId, name: page.caseStudy.name, description: page.description, url: canonical, creator: { '@id': organizationId }, about: { '@type': 'Service', name: page.caseStudy.relatedService, url: `${siteUrl}${page.caseStudy.relatedServiceUrl}` }, inLanguage: 'en-NZ' })
  }
  if (breadcrumb) graph.push(breadcrumb)
  return { '@context': 'https://schema.org', '@graph': graph }
}
