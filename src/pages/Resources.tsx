import { Link } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { Reveal, Stagger, StaggerItem } from '../components/Reveal'
import { ARTICLES } from '../data/articles'

const TOPIC_CLASS: Record<string, string> = {
  Registration: 'topic-label--registration',
  PAYE: 'topic-label--paye',
  AGPO: 'topic-label--agpo',
}

export function Resources() {
  const [featured, ...rest] = ARTICLES

  return (
    <>
      <section className="mag-hero">
        <div className="container">
          <p className="section__eyebrow">Knowledge center</p>
          <h1 className="mag-hero__title">
            A modern business magazine
            <span> for Kenyan entrepreneurs</span>
          </h1>
          <p className="mag-hero__deck">
            Practical orientation with links to official sources. We do not invent tax rates,
            deadlines, or eligibility here — we help you understand the path.
          </p>
        </div>
        <div className="mag-hero__rule" aria-hidden="true" />
      </section>

      {featured && (
        <section className="section band-ivory" style={{ paddingTop: '2rem' }}>
          <div className="container">
            <Reveal>
              <p className="section__eyebrow">Featured</p>
              <Link className="mag-feature mag-feature--page" to={`/resources/${featured.slug}`}>
                <div className="mag-feature__media">
                  <img src={featured.image} alt="" />
                </div>
                <div className="mag-feature__copy">
                  <span className={`topic-label ${TOPIC_CLASS[featured.topic] ?? ''}`}>
                    {featured.topic}
                  </span>
                  <h2>{featured.title}</h2>
                  <p>{featured.deck}</p>
                  <span className="mag-feature__meta">{featured.readMinutes} min read · Start reading →</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section band-sage">
        <div className="container">
          <Reveal>
            <p className="section__eyebrow">Latest</p>
            <h2 className="section__title">More from the desk</h2>
          </Reveal>
          <Stagger className="mag-grid mag-grid--page">
            {rest.map((article) => (
              <StaggerItem key={article.slug}>
                <Link className="mag-card" to={`/resources/${article.slug}`}>
                  <div className="mag-card__media">
                    <img src={article.image} alt="" loading="lazy" />
                  </div>
                  <span className={`topic-label ${TOPIC_CLASS[article.topic] ?? ''}`}>
                    {article.topic}
                  </span>
                  <h3>{article.title}</h3>
                  <p>{article.deck}</p>
                  <span className="mag-feature__meta">{article.readMinutes} min read</span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section band-peach">
        <div className="container container--narrow">
          <Reveal>
            <h2 className="section__title">How we write</h2>
            <p className="section__lead">
              Every article is orientation — not a substitute for official guidance. When rates,
              deadlines, or eligibility matter, we send you to KRA, eCitizen, NCA, AGPO, and peers.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        tone="green"
        title="Want a human answer?"
        support="WhatsApp Hilsham with your situation — we will help you take the next step."
      />
    </>
  )
}
