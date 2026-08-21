import SectionHeading from '../components/SectionHeading'
import { homeFaqs } from '../data/faqs'

export default function HomeFaq() {
  return <section className="section section--tint faq-section"><div className="container faq-layout"><SectionHeading eyebrow="Common questions" title="A few things you may want to know" text="If your question is not covered, send a short enquiry and ARS Tech Solutions will point you in the right direction." align="left" /><div className="faq-list">{homeFaqs.map(([question,answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
}
