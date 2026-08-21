import { homeFaqs } from '../data/faqs.js'

export const siteUrl = 'https://arstechsolutions.com'
export const socialImageUrl = `${siteUrl}/og-image.png`

const caseStudySeo = [
  { slug: 'kiss-web-inventory-system', name: 'KISS-Web Inventory and Warehouse Management System', title: 'KISS-Web Inventory System | ARS Tech Solutions', description: 'See how the KISS-Web inventory and warehouse system was developed to support stock, location, order processing and operational reporting workflows.' },
  { slug: 'digital-wedding-invitation', name: 'Aries & Jade Digital Wedding Invitation', title: 'Digital Wedding Invitation | ARS Tech Solutions Work', description: 'Explore a responsive digital wedding invitation combining clear guest information, online RSVP handling and Google Sheets integration.' },
  { slug: 'noble-innsync-hotel-system', name: 'Noble InnSync Hotel Booking System', title: 'Noble InnSync Hotel System | ARS Tech Solutions', description: 'See how Noble InnSync connects hotel bookings, room availability, payment records, maintenance, inventory and staff workflows.' },
]

export const pageConfig = {
  '/': {
    title: 'Web Design & Development NZ | ARS Tech Solutions',
    description: 'ARS Tech Solutions builds professional websites and custom web applications for businesses in Canterbury and across New Zealand, with practical tech support.',
    pageName: 'ARS Tech Solutions',
  },
  '/web-development': {
    title: 'Web Development & Website Pricing NZ | ARS Tech Solutions',
    description: 'Explore one-page websites, business websites, redesigns, custom web applications and ongoing website improvements for New Zealand businesses.',
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
    title: 'About ARS Tech Solutions | Web Developer in Canterbury',
    description: 'Meet Jhon Aries Tayao, founder of ARS Tech Solutions in Rolleston, and learn how direct, practical web development supports businesses across New Zealand.',
    pageName: 'About ARS Tech Solutions',
  },
  '/work': {
    title: 'Web Development Portfolio NZ | ARS Tech Solutions',
    description: 'Explore ARS Tech Solutions case studies covering responsive websites, business interfaces and custom web applications developed in New Zealand.',
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
  const organization = {
    '@type': ['Organization', 'ProfessionalService'], '@id': `${siteUrl}/#organization`, name: 'ARS Tech Solutions', url: `${siteUrl}/`,
    logo: `${siteUrl}/apple-touch-icon.png`, image: socialImageUrl, email: 'contact@arstechsolutions.com', telephone: '+64 27 207 8245',
    identifier: { '@type': 'PropertyValue', propertyID: 'NZBN', value: '9429053837134' },
    address: { '@type': 'PostalAddress', addressLocality: 'Rolleston', addressRegion: 'Canterbury', addressCountry: 'NZ' },
    areaServed: [
      { '@type': 'Place', name: 'Rolleston' },
      { '@type': 'AdministrativeArea', name: 'Selwyn' },
      { '@type': 'City', name: 'Christchurch' },
      { '@type': 'AdministrativeArea', name: 'Canterbury' },
      { '@type': 'Country', name: 'New Zealand' },
    ],
    sameAs: ['https://facebook.com/ARStechsolutions', 'https://www.instagram.com/ars.techsolutions/'],
  }
  const graph = [organization]
  const person = { '@type': 'Person', '@id': `${siteUrl}/about#founder`, name: 'Jhon Aries Tayao', jobTitle: 'Founder & Web Developer', url: 'https://builtbyars.dev', address: { '@type': 'PostalAddress', addressLocality: 'Rolleston', addressRegion: 'Canterbury', addressCountry: 'NZ' }, sameAs: ['https://builtbyars.dev', 'https://www.linkedin.com/in/ariestayao/', 'https://github.com/ars1224'], worksFor: { '@id': `${siteUrl}/#organization` } }
  organization.founder = { '@id': person['@id'] }
  if (path === '/' || path === '/about') graph.push(person)
  if (path === '/') graph.push({ '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`, name: 'ARS Tech Solutions', description: page.description, publisher: { '@id': `${siteUrl}/#organization` }, inLanguage: 'en-NZ' })
  if (path === '/') graph.push({ '@type': 'FAQPage', '@id': `${siteUrl}/#faq`, mainEntity: homeFaqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) })
  if (page.service) graph.push({ '@type': 'Service', '@id': `${canonical}#service`, name: page.service.name, description: page.service.description, url: canonical, provider: { '@id': `${siteUrl}/#organization` }, areaServed: { '@type': 'Country', name: 'New Zealand' } })
  if (page.caseStudy) graph.push({ '@type': 'CreativeWork', '@id': `${canonical}#project`, name: page.caseStudy.name, description: page.description, url: canonical, creator: { '@id': `${siteUrl}/#organization` }, image: socialImageUrl, inLanguage: 'en-NZ' })
  if (path !== '/') graph.push({ '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`, itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
    ...(page.caseStudy ? [{ '@type': 'ListItem', position: 2, name: 'Work', item: `${siteUrl}/work` }] : []),
    { '@type': 'ListItem', position: page.caseStudy ? 3 : 2, name: page.pageName, item: canonical },
  ] })
  return { '@context': 'https://schema.org', '@graph': graph }
}
