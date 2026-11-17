import { Link, Navigate, useParams } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '../components/Reveal'
import { PHONE, WHATSAPP_URL } from '../data/constants'
import { getService, SERVICES } from '../data/services'

export function ServiceDetail() {
  const { slug } = useParams()
  const service = slug ? getService(slug) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const related = service.related
    .map((s) => SERVICES.find((x) => x.slug === s))
    .filter(Boolean)

  const waHref = `${WHATSAPP_URL}?text=${encodeURIComponent(`Hi Hilsham — I need help with ${service.label}.`)}`

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section__eyebrow">
            <Link to="/services">Services</Link> · Verified from Google Business Profile
          </p>
          <h1>{service.label}</h1>
          <p className="section__support">{service.whoFor}</p>
          <div className="btn-row" style={{ marginTop: '1.25rem' }}>
            <a className="btn btn--primary" href={waHref} target="_blank" rel="noreferrer">
              WhatsApp about {service.label}
            </a>
            <Link className="btn btn--secondary" to={`/contact?service=${service.slug}`}>
              Contact form
            </Link>
          </div>
        </div>
      </section>

      {[
        { title: 'What it is', body: service.what },
        { title: 'Why it matters for your business', body: service.why },
        { title: 'Who typically needs it', body: service.who },
      ].map((block) => (
        <section key={block.title} className="service-detail__section">
          <div className="container">
            <Reveal>
              <h2>{block.title}</h2>
              <p className="prose-block">{block.body}</p>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="service-detail__section">
        <div className="container">
          <Reveal>
            <h2>Documents & prep</h2>
            <p className="prose-block">{service.docsNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="service-detail__section">
        <div className="container">
          <Reveal>
            <h2>A simple process</h2>
            <ol className="numbered prose-block">
              {service.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="service-detail__section">
        <div className="container">
          <Reveal>
            <h2>Common mistakes</h2>
            <ul className="numbered prose-block">
              {service.mistakes.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="service-detail__section">
        <div className="container">
          <Reveal>
            <h2>How Hilsham helps</h2>
            <p className="prose-block">{service.howWeHelp}</p>
            <p className="prose-block">
              Prefer a faster start?{' '}
              <a href={waHref} target="_blank" rel="noreferrer">
                WhatsApp {PHONE}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section band-ivory">
          <div className="container">
            <h2>Related services</h2>
            <ul className="related-list">
              {related.map((r) =>
                r ? (
                  <li key={r.slug}>
                    <Link to={`/services/${r.slug}`}>{r.label}</Link>
                  </li>
                ) : null,
              )}
            </ul>
          </div>
        </section>
      )}

      <CtaBand
        title={`Talk about ${service.label}`}
        support="Message us on WhatsApp — no need for a perfect brief."
      />
    </>
  )
}
