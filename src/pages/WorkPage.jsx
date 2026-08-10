import SectionHeading from '../components/SectionHeading'
import CaseStudyCard from '../components/CaseStudyCard'
import BookingLink from '../components/BookingLink'
import Contact from '../sections/Contact'
import { caseStudies } from '../data/caseStudies'

export default function WorkPage() {
  return <><section className="work-hero section"><div className="container"><SectionHeading eyebrow="Work & development projects" title="Digital products built around real needs" text="Commercial work can join this collection as it becomes available. Current entries are clearly labelled development or personal projects, with no invented results." align="left" level={1} /></div></section><section className="section work-index"><div className="container"><div className="case-grid">{caseStudies.map((study,index) => <CaseStudyCard key={study.slug} study={study} featured={index === 0} />)}</div></div></section><section className="section work-cta"><div className="container work-cta__inner"><div><p className="eyebrow">Have a project in mind?</p><h2>Build something useful for your business.</h2><p>Share the problem you want to solve and ARS Tech Solutions will recommend a practical next step.</p></div><BookingLink /></div></section><Contact context="web" /></>
}
