import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useRef, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { contactDetails, socialLinks } from '../data/siteData'
import { trackEvent } from '../utils/analytics'

const initial = { name: '', email: '', phone: '', business: '', type: '', budget: '', description: '', preference: '' }
const webTypes = ['New business website', 'Website redesign', 'E-commerce website', 'Custom web application', 'Website maintenance', 'Other web project']
const supportTypes = ['Windows reformat or setup', 'Computer troubleshooting', 'Internet or Wi-Fi help', 'Printer or device setup', 'Small business IT support', 'Other technology issue']
const webBudgets = ['Under NZ$600', 'NZ$600–NZ$1,200', 'NZ$1,200–NZ$2,500', 'NZ$2,500–NZ$5,000', 'Over NZ$5,000', 'Not sure yet']
const supportBudgets = ['Under NZ$100', 'NZ$100–NZ$250', 'NZ$250–NZ$500', 'Over NZ$500', 'Not sure yet']

const contactContent = {
  home: {
    eyebrow: 'Start your web project',
    title: 'Let’s talk about what you want to build',
    text: 'Share a few details about your website or digital tool. ARS Tech Solutions will review the project and recommend a practical next step.',
    asideTitle: 'Let’s make your next step clear.',
    asideText: 'No pressure and no confusing sales pitch—just a practical conversation about what will work for you or your business.',
    typeLabel: 'Service required',
    descriptionLabel: 'Short project description',
    button: 'Send My Request',
  },
  web: {
    eyebrow: 'Web project enquiries',
    title: 'Tell us about your website project',
    text: 'Share your business goals, the type of website or application you need, and where you are in the planning process.',
    asideTitle: 'Let’s make your website plan clear.',
    asideText: 'Tell us what you want your website to achieve. We will explain the most practical scope, approach and next step.',
    typeLabel: 'Web service',
    descriptionLabel: 'Project details',
    button: 'Send My Request',
  },
  support: {
    eyebrow: 'Technology support enquiries',
    title: 'Need help with your technology?',
    text: 'Describe the device, problem or setup you need help with, and we will recommend the clearest next step.',
    asideTitle: 'Let’s get the problem sorted.',
    asideText: 'Explain what is happening and what you need working again. You will receive straightforward guidance without unnecessary jargon.',
    typeLabel: 'Support needed',
    descriptionLabel: 'Describe the issue',
    button: 'Send My Request',
  },
  about: {
    eyebrow: 'Contact ARS Tech Solutions',
    title: 'Let’s start a straightforward conversation',
    text: 'Whether you are planning a digital project or need practical technology support, tell us what you have in mind.',
    asideTitle: 'Work directly with ARS Tech Solutions.',
    asideText: 'Your enquiry goes directly to the person who will discuss, plan and deliver the work with you.',
    typeLabel: 'Enquiry type',
    descriptionLabel: 'How can we help?',
    button: 'Send My Request',
  },
}

export default function Contact({ context = 'home' }) {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const formRef = useRef(null)
  const successRef = useRef(null)
  const content = contactContent[context] || contactContent.home
  const simpleWebEnquiry = context === 'home' || context === 'web'
  const typeOptions = context === 'web' ? webTypes : context === 'support' ? supportTypes : [...webTypes.slice(0, 5), ...supportTypes.slice(0, 5), 'Other']
  const budgetOptions = context === 'support' ? supportBudgets : webBudgets

  const update = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
    setSubmitError('')
  }

  const submit = async event => {
    event.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address.'
    if (!form.type) next.type = 'Please choose a project type.'
    if (!form.description.trim()) next.description = 'Please tell us a little about your project.'
    if (!simpleWebEnquiry && !form.preference) next.preference = 'Please choose a contact method.'
    setErrors(next)
    if (Object.keys(next).length) {
      requestAnimationFrame(() => formRef.current?.querySelector('[aria-invalid="true"]')?.focus())
      return
    }

    setSubmitting(true)
    setSubmitError('')
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          'enquiry-context': context,
          ...form,
          preference: simpleWebEnquiry ? 'Email' : form.preference,
        }).toString(),
      })
      if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`)
      trackEvent(context === 'support' ? 'tech_support_enquiry' : 'project_enquiry_submission', { context })
      setSent(true)
      setForm(initial)
      requestAnimationFrame(() => successRef.current?.focus())
    } catch {
      setSubmitError('We could not send your enquiry right now. Please try again or email contact@arstechsolutions.com.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          text={content.text}
        />
        <div className="contact-grid">
          <div className="contact-aside">
            <h3>{content.asideTitle}</h3>
            <p>{content.asideText}</p>
            {contactDetails.slice(0, 3).map(({ label, value, href, icon: Icon }) => (
              <div className="contact-detail" key={label}>
                <span><Icon /></span>
                <div>
                  <small>{label}</small>
                  {href ? <a href={href}>{value}</a> : <p>{value}</p>}
                </div>
              </div>
            ))}
            <div className="contact-socials" aria-label="ARS Tech Solutions social media">
              {socialLinks.slice(0, 2).map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  <Icon />{label}
                </a>
              ))}
            </div>
          </div>
          <div className="form-card">
            {sent ? (
              <div className="success" role="status" tabIndex="-1" ref={successRef}>
                <CheckCircle2 />
                <h3>Thanks for getting in touch.</h3>
                <p>Your request has been received. ARS Tech Solutions will review the details and contact you about the next step.</p>
                <button className="button button--secondary" onClick={() => setSent(false)}>Send another message</button>
              </div>
            ) : (
              <form ref={formRef} name="contact" method="POST" data-netlify="true" onSubmit={submit} noValidate aria-busy={submitting}>
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="enquiry-context" value={context} />
                <input type="hidden" name="bot-field" />
                <div className="form-grid">
                  <Field label="Full name" name="name" autoComplete="name" value={form.name} onChange={update} error={errors.name} required />
                  <Field label="Email address" name="email" type="email" inputMode="email" autoComplete="email" value={form.email} onChange={update} error={errors.email} required />
                  {!simpleWebEnquiry && <Field label="Phone number" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={update} />}
                  {!simpleWebEnquiry && <Field label="Business name" name="business" autoComplete="organization" value={form.business} onChange={update} />}
                  <Select label={content.typeLabel} name="type" value={form.type} onChange={update} options={typeOptions} error={errors.type} required />
                  {!simpleWebEnquiry && <Select label={context === 'support' ? 'Expected support budget' : 'Estimated budget'} name="budget" value={form.budget} onChange={update} options={budgetOptions} />}
                  <div className="field field--full">
                    <label htmlFor="description">{content.descriptionLabel} <span>*</span></label>
                    <textarea id="description" name="description" rows="5" value={form.description} onChange={update} required aria-invalid={!!errors.description} aria-describedby={errors.description ? 'description-error' : undefined} />
                    {errors.description && <small className="field-error" id="description-error">{errors.description}</small>}
                  </div>
                  {!simpleWebEnquiry && <div className="field field--full">
                    <label htmlFor="preference">Preferred contact method <span>*</span></label>
                    <select id="preference" name="preference" value={form.preference} onChange={update} required aria-invalid={!!errors.preference} aria-describedby={errors.preference ? 'preference-error' : undefined}>
                      <option value="">Choose an option</option>
                      <option>Email</option>
                      <option>Phone</option>
                      <option>Messenger</option>
                    </select>
                    {errors.preference && <small className="field-error" id="preference-error">{errors.preference}</small>}
                  </div>}
                  {simpleWebEnquiry && <input type="hidden" name="preference" value="Email" />}
                </div>
                {submitError && <p className="form-submit-error" role="alert">{submitError}</p>}
                <button className="button form-submit" type="submit" disabled={submitting}>{submitting ? 'Sending…' : content.button} {!submitting && <ArrowRight />}</button>
                <p className="form-note">Your information will only be used to respond to your enquiry. Read our <a href="/privacy">Privacy page</a>.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, error, required, autoComplete, inputMode }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label} {required && <span>*</span>}</label>
      <input id={name} name={name} type={type} value={value} onChange={onChange} required={required} autoComplete={autoComplete} inputMode={inputMode} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} />
      {error && <small className="field-error" id={`${name}-error`}>{error}</small>}
    </div>
  )
}

function Select({ label, name, value, onChange, options, error, required }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label} {required && <span>*</span>}</label>
      <select id={name} name={name} value={value} onChange={onChange} required={required} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined}>
        <option value="">Choose an option</option>
        {options.map(option => <option key={option}>{option}</option>)}
      </select>
      {error && <small className="field-error" id={`${name}-error`}>{error}</small>}
    </div>
  )
}
