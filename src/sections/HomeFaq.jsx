import SectionHeading from '../components/SectionHeading'

const faqs = [
  ['How long does a website take?', 'Timing depends on the number of pages, content readiness and any custom functionality. ARS Tech Solutions will discuss the likely timeline after understanding the scope.'],
  ['Can you redesign my existing website?', 'Yes. ARS Tech Solutions can review what is working, identify what needs to improve and plan a responsive redesign around your current business goals.'],
  ['Do you work with businesses outside Canterbury?', 'Yes. ARS Tech Solutions is based in Canterbury and works with businesses across New Zealand.'],
  ['Is hosting included?', 'Hosting, domains and any premium third-party services are discussed and quoted according to the needs of the project.'],
  ['Can you maintain the website after launch?', 'Yes. Website care, content updates, bug fixes and ongoing improvements are available after launch.'],
  ['Who owns the website after completion?', 'Ownership, access and any third-party licensing are clarified in the project scope before work begins. Ask about the arrangement that best fits your project.'],
  ['What information do you need from me?', 'A useful first conversation covers your business, audience, goals, current website if you have one, required features and any content already available.'],
  ['How do we get started?', 'Book a discovery call or send a short project enquiry. ARS Tech Solutions will review what you need and recommend a practical next step.'],
]

export default function HomeFaq() {
  return <section className="section section--tint faq-section"><div className="container faq-layout"><SectionHeading eyebrow="Common questions" title="A few things you may want to know" text="If your question is not covered, send a short enquiry and ARS Tech Solutions will point you in the right direction." align="left" /><div className="faq-list">{faqs.map(([question,answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
}
