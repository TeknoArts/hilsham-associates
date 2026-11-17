import { Link } from 'react-router-dom'
import { PHONE, WHATSAPP_URL } from '../data/constants'

export function NotFound() {
  return (
    <div className="legal-page">
      <div className="container container--narrow">
        <h1>Page not found</h1>
        <p>That link does not lead anywhere — but we can still help.</p>
        <div className="btn-row">
          <Link className="btn btn--primary" to="/services">
            Browse services
          </Link>
          <Link className="btn btn--secondary" to="/contact">
            Contact
          </Link>
          <a className="btn btn--secondary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp {PHONE}
          </a>
        </div>
      </div>
    </div>
  )
}
