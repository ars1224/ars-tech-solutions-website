import SectionHeading from '../components/SectionHeading'
import { supportSteps } from '../data/siteData'

export default function TechSupportProcess() {
  return <section className="section section--navy"><div className="container"><SectionHeading eyebrow="How tech support works" title="A clear path from problem to fix" text="You know the likely scope, cost and next step before work begins." /><div className="support-process">{supportSteps.map(({title,text,icon:Icon}, index) => <article key={title}><span className="support-process__number">0{index + 1}</span><div className="process-icon"><Icon /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
}
