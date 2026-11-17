import { Link } from 'react-router-dom'
import { PHONE, WHATSAPP_URL } from '../data/constants'

export function Privacy() {
  return (
    <div className="legal-page">
      <div className="container container--narrow">
        <h1>Privacy</h1>
        <p>
          This is a placeholder privacy notice until counsel or the client provides final copy.
        </p>
        <p>
          When you contact Hilsham & Associates via WhatsApp, phone, or the website form, we use the
          details you share to respond to your enquiry. We do not invent or publish a public office
          address on this site until it is confirmed.
        </p>
        <p>
          Questions?{' '}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp {PHONE}
          </a>
          .
        </p>
        <p>
          <Link to="/">Back home</Link>
        </p>
      </div>
    </div>
  )
}
