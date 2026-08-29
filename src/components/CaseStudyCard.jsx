import { ArrowRight } from 'lucide-react'

export default function CaseStudyCard({ study, featured = false }) {
  return <article className={`case-card ${featured ? 'case-card--featured' : ''}`}><a className="case-card__image" href={`/work/${study.slug}`} data-event="selected_work_click"><img src={study.image} alt={`${study.title} interface preview`} width="1887" height="989" loading="lazy" decoding="async" /></a><div className="case-card__body"><div className="case-card__meta"><span>{study.category}</span><span>{study.status}</span></div><h2><a href={`/work/${study.slug}`} data-event="selected_work_click">{study.title}</a></h2><p>{study.overview}</p><div className="case-card__footer"><a className="case-card__service" href={study.relatedServiceHref}>{study.relatedService}</a><a href={`/work/${study.slug}`} data-event="selected_work_click">Read case study <ArrowRight /></a></div></div></article>
}
