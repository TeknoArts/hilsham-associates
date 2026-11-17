import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import {
  CONTACT_EMAIL,
  PHONE,
  WHATSAPP_URL,
} from '../data/constants'
import { SERVICES } from '../data/services'

export function Contact() {
  const [params] = useSearchParams()
  const preset = params.get('service') || ''
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [service, setService] = useState(
    SERVICES.some((s) => s.slug === preset) ? preset : '',
  )

  const emailConfigured = Boolean(CONTACT_EMAIL)

  const waPrefill = useMemo(() => {
    const label = SERVICES.find((s) => s.slug === service)?.label
    const text = label
      ? `Hi Hilsham — I need help with ${label}.`
      : 'Hi Hilsham — I would like to talk about my business.'
    return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`
  }, [service])

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const phone = String(data.get('phone') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name || !phone || !message) {
      setStatus('error')
      return
    }

    // No invented backend — prefer WhatsApp. If email is configured, open a mailto draft.
    if (emailConfigured) {
      const subject = encodeURIComponent(`Hilsham enquiry${service ? ` — ${service}` : ''}`)
      const body = encodeURIComponent(
        `Name: ${name}\nPhone: ${phone}\nEmail: ${String(data.get('email') || '')}\nService: ${service || 'Something else'}\n\n${message}`,
      )
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    }

    setStatus('success')
    form.reset()
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section__eyebrow">Contact</p>
          <h1>Talk to Hilsham</h1>
          <p className="section__support">
            WhatsApp is the fastest way to reach us. Prefer a form? Send a short note below — no
            need for a perfect brief.
          </p>
        </div>
      </section>

      <section className="section band-sage">
        <div className="container contact-layout">
          <Reveal>
            <h2>WhatsApp first</h2>
            <p>
              Message <strong>{PHONE}</strong> — we will help you take the next step.
            </p>
            <div className="btn-row" style={{ marginTop: '1rem' }}>
              <a className="btn btn--primary" href={waPrefill} target="_blank" rel="noreferrer">
                Open WhatsApp
              </a>
              <a className="btn btn--secondary" href={`tel:${PHONE.replace(/\s/g, '')}`}>
                Call {PHONE}
              </a>
            </div>
            {emailConfigured ? (
              <p style={{ marginTop: '1.25rem' }}>
                Email:{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            ) : (
              <p style={{ marginTop: '1.25rem', fontSize: '0.95rem', opacity: 0.85 }}>
                Official email will appear here once confirmed. Until then, use WhatsApp or the form
                (we will follow up by phone).
              </p>
            )}
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
              A public office address will be published when confirmed.
            </p>
          </Reveal>

          <Reveal>
            {status === 'success' ? (
              <div className="form-success" role="status">
                <h2 style={{ marginTop: 0 }}>Thanks — we will get back to you.</h2>
                <p>
                  Prefer faster?{' '}
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    WhatsApp {PHONE}
                  </a>
                  .
                </p>
                <button type="button" className="btn btn--secondary" onClick={() => setStatus('idle')}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit} noValidate>
                <h2 style={{ marginTop: 0 }}>Send a note</h2>
                {status === 'error' && (
                  <p className="notice-banner" role="alert">
                    Something didn’t send. Call us on {PHONE} or try again — name, phone, and message
                    are required.
                  </p>
                )}
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" autoComplete="tel" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email (optional)</label>
                  <input id="email" name="email" type="email" autoComplete="email" />
                </div>
                <div className="field">
                  <label htmlFor="service">What do you need help with?</label>
                  <select
                    id="service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="">Something else</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required />
                </div>
                <button type="submit" className="btn btn--primary">
                  Send message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
