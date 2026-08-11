import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useRef, useState } from 'react'
import { trackEvent } from '../utils/analytics'

const initialForm = { name: '', email: '', location: '', expertise: '', portfolio: '', github: '', linkedin: '', introduction: '', projectInterests: '', botField: '' }
const expertiseOptions = ['Full-Stack Development', 'Sales / Client Acquisition', 'Web Design', 'Marketing', 'Other technology specialty']

const isUrl = value => !value.trim() || /^https?:\/\/\S+$/i.test(value.trim())

export default function ContractorInterestForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const successRef = useRef(null)

  const update = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
    setErrors({ ...errors, [event.target.name]: undefined })
    if (status === 'error') setStatus('idle')
  }

  const submit = async event => {
    event.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address.'
    if (!form.location.trim()) next.location = 'Please enter your location or country.'
    if (!form.expertise) next.expertise = 'Please choose your primary area of expertise.'
    if (!form.introduction.trim()) next.introduction = 'Please tell us about your experience.'
    if (!form.projectInterests.trim()) next.projectInterests = 'Please describe the projects that interest you.'
    for (const field of ['portfolio', 'github', 'linkedin']) if (!isUrl(form[field])) next[field] = 'Please enter a full URL beginning with http:// or https://.'
    setErrors(next)
    if (Object.keys(next).length) return

    setStatus('submitting')
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contractor-interest', 'enquiry-context': 'contractor-network', ...form, 'bot-field': form.botField }).toString(),
      })
      if (!response.ok) throw new Error('Submission failed')
      trackEvent('contractor_interest_submission', { context: 'contractor-network', expertise: form.expertise })
      setForm(initialForm)
      setStatus('success')
      requestAnimationFrame(() => successRef.current?.focus())
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return <div className="success contractor-success" role="status" tabIndex="-1" ref={successRef}><CheckCircle2 /><h3>Thanks for your interest.</h3><p>Your contractor network enquiry has been sent to ARS Tech Solutions. We’ll be in touch if a suitable opportunity comes up.</p><button className="button button--secondary" onClick={() => setStatus('idle')}>Send another enquiry</button></div>

  return <form name="contractor-interest" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit} noValidate>
    <input type="hidden" name="form-name" value="contractor-interest" />
    <input type="hidden" name="enquiry-context" value="contractor-network" />
    <div className="honeypot" aria-hidden="true"><label htmlFor="contractor-bot-field">Do not fill this out</label><input id="contractor-bot-field" name="bot-field" value={form.botField} onChange={event => setForm({ ...form, botField: event.target.value })} tabIndex="-1" autoComplete="off" /></div>
    <div className="form-grid">
      <Field label="Full name" name="name" value={form.name} onChange={update} error={errors.name} required />
      <Field label="Email address" name="email" type="email" value={form.email} onChange={update} error={errors.email} required />
      <Field label="Location / country" name="location" value={form.location} onChange={update} error={errors.location} required />
      <Select label="Area of expertise" name="expertise" value={form.expertise} onChange={update} options={expertiseOptions} error={errors.expertise} required />
      <Field label="Portfolio URL" name="portfolio" type="url" value={form.portfolio} onChange={update} error={errors.portfolio} hint="Optional" />
      <Field label="GitHub URL" name="github" type="url" value={form.github} onChange={update} error={errors.github} hint="Optional" />
      <Field label="LinkedIn URL" name="linkedin" type="url" value={form.linkedin} onChange={update} error={errors.linkedin} hint="Optional" />
      <div aria-hidden="true" />
      <TextArea label="Short introduction / experience" name="introduction" value={form.introduction} onChange={update} error={errors.introduction} required />
      <TextArea label="Types of projects you’re interested in" name="projectInterests" value={form.projectInterests} onChange={update} error={errors.projectInterests} required />
    </div>
    {status === 'error' && <p className="form-submit-error" role="alert">We could not send your enquiry right now. Please try again or email contact@arstechsolutions.com.</p>}
    <button className="button form-submit" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Join the ARS Contractor Network'} {status !== 'submitting' && <ArrowRight />}</button>
    <p className="form-note">Your information will only be used to consider future collaboration opportunities with ARS Tech Solutions.</p>
  </form>
}

function Field({ label, hint, name, type = 'text', value, onChange, error, required }) {
  const errorId = `${name}-error`
  return <div className="field"><label htmlFor={name}>{label} {required && <span>*</span>} {hint && <small>({hint})</small>}</label><input id={name} name={name} type={type} value={value} onChange={onChange} required={required} aria-invalid={!!error} aria-describedby={error ? errorId : undefined} />{error && <small className="field-error" id={errorId}>{error}</small>}</div>
}

function Select({ label, name, value, onChange, options, error, required }) {
  return <div className="field"><label htmlFor={name}>{label} <span>*</span></label><select id={name} name={name} value={value} onChange={onChange} required={required} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined}><option value="">Choose an option</option>{options.map(option => <option key={option}>{option}</option>)}</select>{error && <small className="field-error" id={`${name}-error`}>{error}</small>}</div>
}

function TextArea({ label, name, value, onChange, error, required }) {
  return <div className="field field--full"><label htmlFor={name}>{label} <span>*</span></label><textarea id={name} name={name} rows="5" value={value} onChange={onChange} required={required} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} />{error && <small className="field-error" id={`${name}-error`}>{error}</small>}</div>
}
