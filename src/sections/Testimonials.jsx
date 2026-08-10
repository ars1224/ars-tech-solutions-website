import { verifiedTestimonials } from '../config/siteSettings'

export default function Testimonials() {
  const approved = verifiedTestimonials.filter(item => item.publicationApproved === true)
  if (!approved.length) return null
  return <section className="section testimonials" aria-label="Customer testimonials">{approved.map(item => <blockquote key={`${item.customerName}-${item.quote}`}><p>{item.quote}</p><footer>{item.customerName}{item.role && `, ${item.role}`}{item.business && ` · ${item.business}`}</footer></blockquote>)}</section>
}
