import { Link } from 'react-router-dom'
import { PHONE, WHATSAPP_URL } from '../data/constants'
import { Reveal } from './Reveal'

type Props = {
  title?: string
  support?: string
  tone?: 'terracotta' | 'green'
}

export function CtaBand({
  title = 'Ready to talk?',
  support = 'Message Hilsham on WhatsApp — tell us what you are trying to get done.',
  tone = 'green',
}: Props) {
  return (
    <section className={`section band-${tone}`}>
      <div className="container">
        <Reveal>
          <h2 className="section__title">{title}</h2>
          <p className="section__support">{support}</p>
          <div className="btn-row" style={{ marginTop: '1.5rem' }}>
            <a className="btn btn--accent" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              WhatsApp {PHONE}
            </a>
            <Link className="btn btn--secondary btn--on-dark" to="/contact">
              Contact form
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
