import { ArrowRight, Code2, Wrench, Check } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const paths = [
  { icon: Code2, label: 'Build & grow', title: 'Web Development', text: 'Modern websites and custom web applications designed around your business, customers and workflow.', features: ['Business websites and redesigns', 'Booking systems and customer portals', 'Website care and ongoing improvements'], href: '/web-development', button: 'Explore Web Development' },
  { icon: Wrench, label: 'Fix & support', title: 'Tech Support', text: 'Friendly help with Windows computers, troubleshooting, device setup and everyday small-business IT needs.', features: ['Windows reformatting and setup', 'Computer and software troubleshooting', 'Practical small-business IT support'], href: '/tech-support', button: 'Explore Tech Support' },
]

export default function ServicePaths() {
  return <section className="section" id="services"><div className="container"><SectionHeading eyebrow="Two ways we can help" title="Web development and technology support" text="Choose the service you need today, with one straightforward local contact for both." /><div className="service-paths">{paths.map(({icon:Icon,label,title,text,features,href,button}) => <article className="service-path" key={title}><div className="service-path__top"><span className="icon-box"><Icon /></span><small>{label}</small></div><h3>{title}</h3><p>{text}</p><ul>{features.map(item => <li key={item}><Check />{item}</li>)}</ul><a className="button button--secondary" href={href}>{button}<ArrowRight /></a></article>)}</div></div></section>
}
