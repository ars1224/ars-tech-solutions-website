import SectionHeading from '../components/SectionHeading'
import { processSteps } from '../data/siteData'

export default function Process() {
  return <section className="section section--navy" id="process"><div className="container"><SectionHeading eyebrow="Website development process" title="From discovery to launch" text="A clear five-step process keeps the project focused and easy to follow." /><ol className="process-timeline">{processSteps.map(({title,text}, i) => <li key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>
}
