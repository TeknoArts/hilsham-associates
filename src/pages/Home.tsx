import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  HardHat,
  Landmark,
  MessageCircle,
  Receipt,
  Rocket,
  ShieldCheck,
  House,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { FaqAccordion } from '../components/FaqAccordion'
import {
  Float,
  MaskReveal,
  ParallaxImage,
  Reveal,
  Stagger,
  StaggerItem,
} from '../components/Reveal'
import { ServiceCard } from '../components/ServiceCard'
import { ARTICLES } from '../data/articles'
import {
  GOOGLE_RATING,
  GOOGLE_REVIEWS,
  PHONE,
  WHATSAPP_URL,
} from '../data/constants'
import { HOME_FAQS } from '../data/faq'
import { SERVICES } from '../data/services'

const WHO = [
  {
    num: '01',
    title: 'First-time founders',
    copy: 'Ready to register a company and stop trading in the grey.',
    icon: Rocket,
  },
  {
    num: '02',
    title: 'Contractors',
    copy: 'Chasing NCA accreditation so formal sites stay open to you.',
    icon: HardHat,
  },
  {
    num: '03',
    title: 'Growing owners',
    copy: 'Confused about KRA, VAT, or compliance certificates.',
    icon: BriefcaseBusiness,
  },
  {
    num: '04',
    title: 'Landlords',
    copy: 'Earning from rent and wanting rental taxes explained calmly.',
    icon: House,
  },
  {
    num: '05',
    title: 'New employers',
    copy: 'Hiring a team and needing PAYE to run without guesswork.',
    icon: Users,
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Tell us what you need',
    copy: 'WhatsApp a short note — registration, KRA, NCA, PAYE, or something else.',
  },
  {
    num: '02',
    title: 'Get a plain-language plan',
    copy: 'We explain what applies and what to verify on official sources.',
  },
  {
    num: '03',
    title: 'Move through the paperwork',
    copy: 'Prepare, file, and keep records so the next period is easier.',
  },
]

const OFFER_ITEMS = [
  { label: 'Company & business registration', icon: Building2 },
  { label: 'KRA PIN, taxes & compliance', icon: Landmark },
  { label: 'NCA accreditation & renewal', icon: HardHat },
  { label: 'AGPO certificate guidance', icon: ShieldCheck },
  { label: 'PAYE, VAT & withholding', icon: Receipt },
  { label: 'Annual returns & filings', icon: ClipboardCheck },
]

export function Home() {
  const reduce = useReducedMotion()
  const featured = ARTICLES[0]
  const rest = ARTICLES.slice(1)

  const heroBits = [
    {
      key: 'brand',
      node: (
        <p className="hero-editorial__brand">
          Hilsham<span>& Associates</span>
        </p>
      ),
    },
    {
      key: 'headline',
      node: (
        <h1 className="hero-editorial__headline">
          Big Business Dreams.
          <br />
          Less Paperwork.
        </h1>
      ),
    },
    {
      key: 'support',
      node: (
        <p className="hero-editorial__support">
          We make tax, registration and compliance easier for Kenyan businesses.
        </p>
      ),
    },
    {
      key: 'cta',
      node: (
            <div className="btn-row">
          <a className="btn btn--primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp {PHONE}
          </a>
          <Link className="btn btn--secondary" to="/contact">
            Talk to Hilsham
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      ),
    },
  ]

  return (
    <>
      {/* ——— Editorial hero ——— */}
      <section className="hero-editorial" aria-label="Homepage hero">
        <Float className="hero-editorial__blob hero-editorial__blob--peach" />
        <Float className="hero-editorial__blob hero-editorial__blob--yellow" duration={9} distance={16} />
        <Float className="hero-editorial__blob hero-editorial__blob--sage" duration={11} distance={10} />

        <div className="hero-editorial__grid">
          <div className="hero-editorial__copy">
            {heroBits.map((item, i) =>
              reduce ? (
                <div key={item.key}>{item.node}</div>
              ) : (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.1 + 0.09 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {item.node}
                </motion.div>
              ),
            )}
          </div>

          <div className="hero-editorial__visual">
            {reduce ? (
              <img
                src="/images/entrepreneur.jpg"
                alt="Kenyan business owner smiling outdoors"
                width={1600}
                height={1200}
              />
            ) : (
              <motion.div
                className="hero-editorial__frame"
                initial={{ opacity: 0, clipPath: 'inset(8% 8% 8% 8%)' }}
                animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src="/images/entrepreneur.jpg"
                  alt="Kenyan business owner smiling outdoors"
                  width={1600}
                  height={1200}
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ——— Dream story ——— */}
      <section className="section band-ivory story-split">
        <div className="container story-split__inner">
          <Reveal className="story-split__text">
            <p className="section__eyebrow">Human first</p>
            <h2 className="section__title display-lg">
              Every Business Starts With a Dream.
            </h2>
            <p className="section__lead">
              You did not start a business to wrestle with portals, forms, and jargon.
              You started it to build something that matters — for your family, your team,
              your community.
            </p>
            <p className="section__body">
              Hilsham & Associates sits beside Kenyan owners at those moments when the
              paperwork feels heavier than the dream. We explain what is going on, point
              you to official sources, and help you move.
            </p>
          </Reveal>
          <MaskReveal className="story-split__media">
            <ParallaxImage
              src="/images/human-first.jpg"
              alt="Kenyan businessman smiling in a professional setting"
              imgClassName="story-split__img"
            />
          </MaskReveal>
        </div>
      </section>

      {/* ——— The offer ——— */}
      <section className="offer" aria-labelledby="offer-heading">
        <div className="offer__glow" aria-hidden="true" />
        <div className="container offer__grid">
          <Reveal className="offer__copy">
            <p className="offer__eyebrow">The offer</p>
            <h2 id="offer-heading" className="offer__title">
              Let&apos;s Take Care of the Paperwork.
            </h2>
            <p className="offer__lead">
              The names change — registration, KRA, NCA, AGPO, PAYE, VAT — the feeling
              is the same. You want clarity without a lecture. Tell us what you are
              trying to get done, and we will help you move.
            </p>
            <div className="btn-row offer__actions">
              <a className="btn btn--accent" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp Hilsham
              </a>
              <Link className="btn btn--secondary btn--on-dark" to="/services">
                Browse all services
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Stagger className="offer__list">
            {OFFER_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <StaggerItem key={item.label}>
                  <div className="offer__item">
                    <span className="offer__icon" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span>{item.label}</span>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* ——— Who we help ——— */}
      <section className="who-help" aria-labelledby="who-help-heading">
        <div className="container who-help__grid">
          <Reveal className="who-help__intro">
            <p className="section__eyebrow">Who we help</p>
            <h2 id="who-help-heading" className="who-help__title">
              If this sounds like you, you are in the right place.
            </h2>
            <p className="who-help__lead">
              Kenyan owners come to Hilsham at real moments — starting up, hiring,
              tendering, or catching up. We meet you there, in plain language.
            </p>
            <a className="who-help__link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Tell us your situation
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </Reveal>

          <Stagger className="who-help__list">
            {WHO.map((item) => {
              const Icon = item.icon
              return (
                <StaggerItem key={item.title}>
                  <article className="who-help__row">
                    <span className="who-help__num" aria-hidden="true">
                      {item.num}
                    </span>
                    <span className="who-help__icon" aria-hidden="true">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <div className="who-help__body">
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </article>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* ——— Keep pace ——— */}
      <section className="keep-pace" aria-labelledby="keep-pace-heading">
        <div className="container keep-pace__layout">
          <Reveal className="keep-pace__intro">
            <p className="section__eyebrow">Keep pace</p>
            <h2 id="keep-pace-heading" className="keep-pace__title">
              Your Business Is Growing. Your Compliance Should Keep Up.
            </h2>
            <p className="keep-pace__lead">
              Hiring, winning tenders, opening a second site — growth changes what KRA,
              registries, and regulators expect from you. We help you build a calm rhythm
              for filings and renewals, so compliance stays a habit instead of a crisis.
            </p>
          </Reveal>

          <MaskReveal className="keep-pace__media">
            <ParallaxImage
              src="/images/keep-pace.jpg"
              alt="Business team collaborating around a laptop as the company grows"
              imgClassName="keep-pace__img"
            />
          </MaskReveal>
        </div>

        <div className="container">
          <Stagger className="keep-pace__points">
            {[
              {
                title: 'Growth changes the paperwork',
                copy: 'New staff, new contracts, and new sites bring new filing rhythms.',
              },
              {
                title: 'Build a calm calendar',
                copy: 'We help you see what is due and keep acknowledgements organised.',
              },
              {
                title: 'Stay ready for opportunities',
                copy: 'Tenders and banking often ask for proof — better prepared than rushed.',
              },
            ].map((point) => (
              <StaggerItem key={point.title}>
                <article className="keep-pace__point">
                  <h3>{point.title}</h3>
                  <p>{point.copy}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ——— Services ——— */}
      <section className="services-home" aria-labelledby="services-heading">
        <div className="container">
          <Reveal className="services-home__intro">
            <div className="services-home__intro-copy">
              <p className="section__eyebrow">Services</p>
              <h2 id="services-heading" className="services-home__title">
                Practical help for real Kenyan business situations
              </h2>
              <p className="services-home__lead">
                Fifteen services verified from our Google Business Profile — each page
                explains what the work means for an ordinary owner.
              </p>
            </div>
            <Link className="btn btn--primary services-home__cta" to="/services">
              View all services
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Reveal>

          <Stagger className="service-grid service-grid--home">
            {SERVICES.map((service) => (
              <StaggerItem
                key={service.slug}
                className={
                  service.tone === 'terracotta' ? 'service-grid__feature' : undefined
                }
              >
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ——— Timeline how it works ——— */}
      <section className="section band-green">
        <div className="container">
          <Reveal>
            <p className="section__eyebrow">How it works</p>
            <h2 className="section__title">Three calm steps</h2>
            <p className="section__support">No fake timelines — just a human way to start.</p>
          </Reveal>
          <ol className="timeline">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <li className="timeline__item">
                  <span className="timeline__num">{step.num}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Proof ——— */}
      <section className="section band-yellow proof-band">
        <div className="container">
          <Reveal>
            <p className="proof-line">
              Rated {GOOGLE_RATING} on Google · {GOOGLE_REVIEWS} reviews from Kenyan clients
            </p>
          </Reveal>
        </div>
      </section>

      {/* ——— Magazine strip ——— */}
      <section className="section band-ivory magazine-home">
        <div className="container">
          <Reveal>
            <p className="section__eyebrow">Knowledge center</p>
            <h2 className="section__title display-lg">Read like a magazine. Act with confidence.</h2>
            <p className="section__lead">
              High-level guidance with links to official sources — no invented rates or deadlines.
            </p>
          </Reveal>

          {featured && (
            <Reveal>
              <Link className="mag-feature" to={`/resources/${featured.slug}`}>
                <div className="mag-feature__media">
                  <img src={featured.image} alt="" loading="lazy" />
                </div>
                <div className="mag-feature__copy">
                  <span className="topic-label topic-label--registration">{featured.topic}</span>
                  <h3>{featured.title}</h3>
                  <p>{featured.deck}</p>
                  <span className="mag-feature__meta">{featured.readMinutes} min read</span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="mag-grid">
            {rest.map((article) => (
              <Reveal key={article.slug}>
                <Link className="mag-card" to={`/resources/${article.slug}`}>
                  <div className="mag-card__media">
                    <img src={article.image} alt="" loading="lazy" />
                  </div>
                  <span className={`topic-label topic-label--${article.topic.toLowerCase()}`}>
                    {article.topic}
                  </span>
                  <h3>{article.title}</h3>
                  <p>{article.deck}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="services-home__more">
              <Link to="/resources">
                Open the knowledge center <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section className="section band-peach">
        <div className="container faq-layout">
          <Reveal>
            <p className="section__eyebrow">FAQ</p>
            <h2 className="section__title">Questions owners actually ask</h2>
            <p className="section__lead">
              Straight answers — including what we will not invent on this site.
            </p>
          </Reveal>
          <FaqAccordion items={HOME_FAQS} />
        </div>
      </section>

      <CtaBand
        tone="green"
        title="Ready when you are"
        support="Message Hilsham on WhatsApp — tell us what you are trying to get done. No perfect brief required."
      />
    </>
  )
}
