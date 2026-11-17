import { Link } from 'react-router-dom'
import { PHONE, WHATSAPP_URL } from '../data/constants'

export function Terms() {
  return (
    <div className="legal-page">
      <div className="container container--narrow">
        <h1>Terms</h1>
        <p>
          This is a placeholder terms page until counsel or the client provides final copy.
        </p>
        <p>
          Information on this website is general guidance for Kenyan business owners. It is not a
          substitute for official instructions from authorities such as KRA, eCitizen, NCA, or AGPO.
          We do not publish tax rates, deadlines, or eligibility rules here because those change —
          always verify on official sources.
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
