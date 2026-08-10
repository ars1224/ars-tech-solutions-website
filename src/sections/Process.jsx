import SectionHeading from '../components/SectionHeading'
import { processSteps } from '../data/siteData'

export default function Process() {
  return <section className="section section--navy" id="process"><div className="container"><SectionHeading eyebrow="A considered process" title="From first conversation to confident launch" text="You always know what is happening, what is needed from you and what comes next." /><ol className="process-timeline">{processSteps.map(({title,text}, i) => <li key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>
}
