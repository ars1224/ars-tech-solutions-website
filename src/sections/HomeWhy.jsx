import SectionHeading from '../components/SectionHeading'
import BookingLink from '../components/BookingLink'

const reasons = [
  ['Direct access to the developer', 'Discuss decisions with the person planning and building your website—without layers of account management.'],
  ['Clear scope and milestones', 'Understand what is included, what happens next and where your input is needed.'],
  ['Mobile-first development', 'Your experience is shaped for smaller screens from the outset, not treated as an afterthought.'],
  ['SEO and analytics foundations', 'Essential structure, metadata and measurement are considered as part of a responsible build.'],
  ['Transparent communication', 'Technical choices are explained in practical language so you can make informed decisions.'],
  ['Post-launch support', 'You have a clear path for maintenance, fixes and useful improvements after the site goes live.'],
]

export default function HomeWhy() {
  return <section className="section why-ars"><div className="container why-ars__layout"><div className="why-ars__sticky"><SectionHeading eyebrow="Why choose ARS Tech Solutions" title="A more direct way to build for the web" text="Custom-built does not need to mean complicated. The process stays grounded in your business, your customers and the job the website needs to do." align="left" /><BookingLink /></div><div className="why-ars__reasons">{reasons.map(([title,text],i) => <article key={title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
}
