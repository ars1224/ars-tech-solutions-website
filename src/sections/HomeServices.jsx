import { ArrowRight, Building2, RefreshCw, PanelsTopLeft, Wrench, Check } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import BookingLink from '../components/BookingLink'

const services = [
  { icon: Building2, title: 'Business Websites', forWho: 'For new and growing service businesses', problem: 'Turn your offer into a clear, credible online presence that helps the right people take action.', provides: ['Responsive page design', 'Enquiry pathways', 'SEO foundations'] },
  { icon: RefreshCw, title: 'Website Redesigns', forWho: 'For businesses outgrowing an older website', problem: 'Improve clarity, usability and mobile experience without losing what already works for your brand.', provides: ['Content and structure review', 'Modern responsive rebuild', 'Clearer conversion journey'] },
  { icon: PanelsTopLeft, title: 'Custom Web Applications', forWho: 'For teams with a process to simplify', problem: 'Replace awkward manual workflows with a focused digital tool built around the way your business works.', provides: ['Workflow planning', 'Custom interface', 'Database and integrations'] },
  { icon: Wrench, title: 'Website Care & Improvements', forWho: 'For businesses that need dependable follow-through', problem: 'Keep your website useful, current and improving after launch.', provides: ['Content and feature updates', 'Bug fixes', 'Ongoing improvements'] },
]

export default function HomeServices() {
  return <section className="section section--tint home-services" id="services"><div className="container"><SectionHeading eyebrow="Core web services" title="The right website for where your business is going" text="Start with the business need. ARS Tech Solutions shapes the structure, experience and technology around it." align="left" /><div className="service-list">{services.map(({icon:Icon,title,forWho,problem,provides}, i) => <article key={title}><div className="service-list__number">0{i+1}</div><div className="service-list__intro"><span><Icon /></span><div><p>{forWho}</p><h3>{title}</h3></div></div><p className="service-list__problem">{problem}</p><ul>{provides.map(item => <li key={item}><Check />{item}</li>)}</ul><BookingLink className="service-booking-link">Book a Discovery Call <ArrowRight /></BookingLink></article>)}</div><aside className="tech-support-path"><div><p className="eyebrow">A separate ARS Tech Solutions service</p><h3>Looking for computer or IT support?</h3><p>Get straightforward help with Windows, devices, troubleshooting and everyday small-business technology.</p></div><a className="button button--secondary" href="/tech-support">Visit Tech Support <ArrowRight /></a></aside></div></section>
}
