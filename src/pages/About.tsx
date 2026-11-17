import { Link } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { MaskReveal, ParallaxImage, Reveal } from '../components/Reveal'
import { GOOGLE_RATING, GOOGLE_REVIEWS } from '../data/constants'

const PERSONAS = [
  'Someone starting their first company',
  'A contractor seeking NCA accreditation',
  'A business owner confused about KRA requirements',
  'A landlord figuring out rental taxes',
  'An employer trying to handle PAYE correctly',
]

export function About() {
  return (
    <>
      <section className="page-hero page-hero--editorial">
        <div className="container">
          <p className="section__eyebrow">About</p>
          <h1 className="display-lg">A consultancy that understands Kenyan owners</h1>
          <p className="section__lead section__lead--wide">
            Building a business in Kenya is already hard. Hilsham & Associates helps you navigate
            paperwork, tax obligations, and compliance so you can focus on growth.
          </p>
        </div>
      </section>

      <section className="section band-ivory story-split">
        <div className="container story-split__inner">
          <Reveal className="story-split__text">
            <p className="section__eyebrow">Our promise</p>
            <h2 className="section__title">Warm, clear, and human — never intimidating</h2>
            <p className="section__body">
              We aim to feel contemporary and welcoming. Visitors should leave understood, educated,
              and confident about the next step — not buried in jargon.
            </p>
            <p className="section__body">
              Educate before selling. Explain what a service means to an ordinary owner. Point to
              official sources — KRA, eCitizen, NCA, AGPO — whenever rates, deadlines, or eligibility
              are involved. Prefer WhatsApp for a fast, human start.
            </p>
          </Reveal>
          <MaskReveal className="story-split__media">
            <ParallaxImage
              src="/images/workspace.jpg"
              alt="African entrepreneur in a creative workspace"
              imgClassName="story-split__img"
            />
          </MaskReveal>
        </div>
      </section>

      <section className="section band-peach">
        <div className="container container--narrow">
          <Reveal>
            <h2 className="section__title">What we share — and what we do not</h2>
            <p className="section__body">
              We do not invent staff bios, years in business, awards, or testimonials on this site.
              What we can say today: rated {GOOGLE_RATING} on Google from {GOOGLE_REVIEWS} reviews,
              and a service list verified from our Google Business Profile.
            </p>
            <p className="section__body">
              <Link to="/services">See the services we help with →</Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section band-sage">
        <div className="container">
          <Reveal>
            <p className="section__eyebrow">Who we design for</p>
            <h2 className="section__title">If you recognise yourself here, start a conversation</h2>
          </Reveal>
          <ul className="persona-list">
            {PERSONAS.map((line, i) => (
              <Reveal key={line} delay={i * 0.05}>
                <li className="persona-list__item">{line}</li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand tone="green" title="Let’s talk about your business" />
    </>
  )
}
