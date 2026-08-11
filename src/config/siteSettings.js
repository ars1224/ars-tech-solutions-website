export const siteSettings = {
  discoveryCallUrl: null,
  enquiryFallback: '/#contact',
}

export function discoveryCallHref() {
  return siteSettings.discoveryCallUrl || siteSettings.enquiryFallback
}

export const founder = {
  name: 'Aries Tayao',
  role: 'Founder, ARS Tech Solutions',
  shortBiography: null,
  longBiography: null,
  photograph: null,
  experience: [],
  qualifications: [
    'New Zealand Certificate in Information Technology (Level 5)',
    'Diploma in Software Development (Level 6)',
  ],
  linkedin: 'https://www.linkedin.com/in/ariestayao/',
  github: 'https://github.com/ars1224',
  location: 'Rolleston, Canterbury, New Zealand',
  philosophy: 'Clear communication, practical decisions and digital solutions shaped around real business needs.',
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
