import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CaseStudyCard from '../components/CaseStudyCard'
import { caseStudies } from '../data/caseStudies'

export default function WorkPreview() {
  return <section className="section section--tint" id="work"><div className="container"><div className="work-heading"><SectionHeading eyebrow="Selected development work" title="See how real project needs become working interfaces" text="Explore selected projects across business websites, custom applications and digital workflows." align="left" /><a href="/work">View Selected Work <ArrowRight /></a></div><div className="case-grid case-grid--preview">{caseStudies.slice(0,2).map(study => <CaseStudyCard key={study.slug} study={study} />)}</div></div></section>
}
