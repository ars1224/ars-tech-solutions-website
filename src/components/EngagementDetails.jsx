import { commercialInformation } from '../config/siteSettings'

const labels = {
  typicalTimeline: 'Typical project timeline', startingPrice: 'Starting price', paymentStructure: 'Deposit and payments',
  hostingArrangements: 'Hosting', domainArrangements: 'Domains', websiteOwnership: 'Website ownership',
  sourceCodeHandover: 'Source-code handover', maintenance: 'Maintenance', postLaunchSupport: 'Post-launch support',
}

export default function EngagementDetails() {
  const approved = Object.entries(commercialInformation).filter(([, value]) => value)
  if (!approved.length) return null
  return <section className="section engagement-details"><div className="container"><p className="eyebrow">Engagement details</p><h2>Practical information before you begin</h2><dl>{approved.map(([key,value]) => <div key={key}><dt>{labels[key]}</dt><dd>{value}</dd></div>)}</dl></div></section>
}
