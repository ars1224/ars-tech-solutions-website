import SectionHeading from '../components/SectionHeading'
import { homeFaqs } from '../data/faqs'

export default function HomeFaq() {
  return <section className="section section--tint faq-section"><div className="container faq-layout"><SectionHeading eyebrow="Website questions" title="Useful details before you start" text="Have another question? Send a short enquiry and I’ll give you a clear answer." align="left" /><div className="faq-list">{homeFaqs.map(([question,answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
}
