export const siteSettings = {
  bookingUrl: null,
  enquiryFallback: '#contact',
}

export function contactCtaHref(fallbackHref = siteSettings.enquiryFallback) {
  return siteSettings.bookingUrl || fallbackHref
}

export const founder = {
  name: 'Jhon Aries Tayao',
  role: 'Founder & Web Developer',
  shortBiography: 'ARS Tech Solutions is led by Jhon Aries Tayao, a web developer in Rolleston, Canterbury. Clients work directly with Jhon from planning through launch.',
  photograph: '/jhon-aries-tayao.jpg',
  experience: [],
  linkedin: 'https://www.linkedin.com/in/ariestayao/',
  github: 'https://github.com/ars1224',
  developerPortfolio: 'https://builtbyars.dev',
  location: 'Rolleston, Canterbury, New Zealand',
  philosophy: 'Clear communication, practical decisions and websites shaped around real business goals.',
}

export const commercialInformation = {
  typicalTimeline: null,
  startingPrice: null,
  paymentStructure: null,
  hostingArrangements: null,
  domainArrangements: null,
  websiteOwnership: null,
  sourceCodeHandover: null,
  maintenance: null,
  postLaunchSupport: null,
}

/**
 * Approved entries may include: customerName, role, business, quote,
 * projectOrService, logoOrPhoto, externalReviewUrl and publicationApproved.
 */
export const verifiedTestimonials = []
