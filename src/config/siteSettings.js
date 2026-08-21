export const siteSettings = {
  discoveryCallUrl: null,
  enquiryFallback: '#contact',
}

export function discoveryCallHref() {
  return siteSettings.discoveryCallUrl || siteSettings.enquiryFallback
}

export const founder = {
  name: 'Jhon Aries Tayao',
  role: 'Founder & Web Developer',
  shortBiography: 'ARS Tech Solutions is led by Jhon Aries Tayao, a web developer based in Rolleston, Canterbury. Every project is handled directly from planning through development and launch, giving clients clear communication and fewer handovers.',
  photograph: '/jhon-aries-tayao.jpg',
  experience: [],
  qualifications: [
    { name: 'New Zealand Certificate in Information Technology (Level 5)', provider: 'Yoobee Colleges', status: 'Completed' },
  ],
  linkedin: 'https://www.linkedin.com/in/ariestayao/',
  github: 'https://github.com/ars1224',
  developerPortfolio: 'https://builtbyars.dev',
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
