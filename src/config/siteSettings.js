export const siteSettings = {
  discoveryCallUrl: null,
  enquiryFallback: '/#contact',
}

export function discoveryCallHref() {
  return siteSettings.discoveryCallUrl || siteSettings.enquiryFallback
}

export const founder = {
  name: null,
  role: null,
  shortBiography: null,
  longBiography: null,
  photograph: null,
  experience: [],
  qualifications: [],
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
