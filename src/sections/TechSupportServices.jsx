import { Check } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { techSupportServices } from '../data/siteData'

export default function TechSupportServices() {
  return <section className="section" id="tech-support-services"><div className="container"><SectionHeading eyebrow="Tech support services" title="Practical support for everyday technology" text="Clear assistance for common computer problems, new setups and the technology small businesses rely on." /><div className="cards services-grid">{techSupportServices.map(({title,description,features,icon:Icon}) => <article className="service-card" key={title}><span className="icon-box"><Icon /></span><h3>{title}</h3><p>{description}</p><ul>{features.map(item => <li key={item}><Check />{item}</li>)}</ul></article>)}</div><div className="section-action"><a className="button" href="#contact">Request Tech Support</a></div></div></section>
}
