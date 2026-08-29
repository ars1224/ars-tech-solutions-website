import SectionHeading from '../components/SectionHeading'
import CaseStudyCard from '../components/CaseStudyCard'
import Contact from '../sections/Contact'
import { caseStudies } from '../data/caseStudies'

export default function WorkPage() {
  return <><section className="work-hero section"><div className="container"><SectionHeading eyebrow="ARS Tech Solutions work" title="Website and web application case studies" text="Real projects showing the problem, solution, features and technology behind the work." align="left" level={1} /></div></section><section className="section work-index"><div className="container"><div className="case-grid">{caseStudies.map((study,index) => <CaseStudyCard key={study.slug} study={study} featured={index === 0} />)}</div></div></section><Contact context="work" /></>
}
