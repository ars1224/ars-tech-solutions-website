import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CaseStudyCard from '../components/CaseStudyCard'
import { caseStudies } from '../data/caseStudies'

export default function WorkPreview() {
  return <section className="section section--tint" id="work"><div className="container"><div className="work-heading"><SectionHeading eyebrow="Related case studies" title="See the work behind the service" text="Explore real website and application projects, including the problem, approach and technology." align="left" /><a href="/work">View All Case Studies <ArrowRight /></a></div><div className="case-grid case-grid--preview">{caseStudies.slice(0,2).map(study => <CaseStudyCard key={study.slug} study={study} />)}</div></div></section>
}
