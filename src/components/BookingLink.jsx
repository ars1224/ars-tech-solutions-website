import { contactCtaHref, siteSettings } from '../config/siteSettings'

export default function BookingLink({ children, className = 'button', eventName = 'discovery_call_click', fallbackHref, onClick, ...props }) {
  const external = Boolean(siteSettings.bookingUrl)
  const trackedEvent = className.includes('service-text-link') ? 'service_page_cta' : eventName
  const label = children ?? (external ? 'Book a Call' : 'Let’s Chat')
  return <a className={className} href={contactCtaHref(fallbackHref)} data-event={trackedEvent} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} onClick={onClick} {...props}>{label}</a>
}
