import SectionHeading from '../components/SectionHeading'
import BookingLink from '../components/BookingLink'

const reasons = [
  ['Work directly with the developer', 'Discuss the project with the person planning and building it.'],
  ['Know what happens next', 'The scope, milestones and decisions stay clear throughout the work.'],
  ['Get practical advice', 'Technical choices are explained in plain language and tied to your goals.'],
  ['Keep improving after launch', 'Website care, fixes and useful updates remain available when you need them.'],
]

export default function HomeWhy() {
  return <section className="section why-ars"><div className="container why-ars__layout"><div className="why-ars__sticky"><SectionHeading eyebrow="Why ARS Tech Solutions" title="Founder-led, clear and practical" text="Your website stays connected to the business problem it needs to solve." align="left" /><BookingLink>Let’s Chat</BookingLink></div><div className="why-ars__reasons">{reasons.map(([title,text],i) => <article key={title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
}
