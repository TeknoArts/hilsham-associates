export const PHONE = '+254 702 216717'
export const PHONE_TEL = 'tel:+254702216717'
export const WHATSAPP_URL = 'https://wa.me/254702216717'
export const GOOGLE_RATING = '5.0'
export const GOOGLE_REVIEWS = 10
export const BRAND = 'Hilsham & Associates'

/**
 * Official contact email — leave empty until the client provides one.
 * Override at build/runtime via VITE_CONTACT_EMAIL.
 */
export const CONTACT_EMAIL =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CONTACT_EMAIL) || ''

export const NAV_LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const
