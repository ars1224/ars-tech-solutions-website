import { discoveryCallHref, siteSettings } from '../config/siteSettings'

export default function BookingLink({ children = 'Book a Discovery Call', className = 'button', eventName = 'discovery_call_click', onClick, ...props }) {
  const external = Boolean(siteSettings.discoveryCallUrl)
  const trackedEvent = className.includes('service-text-link') ? 'service_page_cta' : eventName
  return <a className={className} href={discoveryCallHref()} data-event={trackedEvent} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} onClick={onClick} {...props}>{children}</a>
}
