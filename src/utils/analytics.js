export function trackEvent(name, detail = {}) {
  if (typeof window === 'undefined') return
  const payload = { name, detail, timestamp: new Date().toISOString() }
  window.dispatchEvent(new CustomEvent('ars:analytics', { detail: payload }))
  if (typeof window.arsAnalytics === 'function') window.arsAnalytics(payload)
}
