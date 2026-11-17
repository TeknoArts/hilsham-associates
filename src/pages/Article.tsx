import { Link, Navigate, useParams } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { getArticle } from '../data/articles'
import { PHONE, WHATSAPP_URL } from '../data/constants'
import { getService } from '../data/services'

const TOPIC_CLASS: Record<string, string> = {
  Registration: 'topic-label--registration',
  PAYE: 'topic-label--paye',
  AGPO: 'topic-label--agpo',
}

export function Article() {
  const { slug } = useParams()
  const article = slug ? getArticle(slug) : undefined

  if (!article) {
    return <Navigate to="/resources" replace />
  }

  const related = article.relatedService ? getService(article.relatedService) : undefined
  const headings = article.body.filter((b) => b.type === 'h2')

  return (
    <article className="magazine-article">
      <header className="magazine-article__hero">
        <div className="container magazine-article__header">
          <p className="section__eyebrow">
            <Link to="/resources">Resources</Link>
          </p>
          <span className={`topic-label ${TOPIC_CLASS[article.topic] ?? ''}`}>
            {article.topic}
          </span>
          <h1 className="magazine-article__title">{article.title}</h1>
          <p className="magazine-article__deck">{article.deck}</p>
          <p className="magazine-article__meta">{article.readMinutes} min read</p>
        </div>
      </header>

      <div className="magazine-article__lead-wrap">
        <img className="magazine-article__lead" src={article.image} alt="" />
        <p className="magazine-article__credit">{article.imageCredit}</p>
      </div>

      <div className="container magazine-article__layout">
        {headings.length > 0 && (
          <aside className="magazine-article__toc" aria-label="Table of contents">
            <p className="magazine-article__toc-title">In this article</p>
            <ol>
              {headings.map((h, i) =>
                h.type === 'h2' ? (
                  <li key={i}>
                    <a href={`#section-${i}`}>{h.text}</a>
                  </li>
                ) : null,
              )}
            </ol>
            {related && (
              <div className="magazine-article__related">
                <p className="magazine-article__toc-title">Related service</p>
                <Link to={`/services/${related.slug}`}>{related.label} →</Link>
              </div>
            )}
          </aside>
        )}

        <div className="magazine-article__body">
          {(() => {
            let h2Index = 0
            return article.body.map((block, i) => {
              if (block.type === 'p') return <p key={i}>{block.text}</p>
              if (block.type === 'h2') {
                const id = `section-${h2Index}`
                h2Index += 1
                return (
                  <h2 key={i} id={id}>
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={i} className="magazine-article__quote">
                    {block.text}
                  </blockquote>
                )
              }
              if (block.type === 'note') {
                return (
                  <aside key={i} className="magazine-article__note">
                    <strong>Important</strong>
                    <p>{block.text}</p>
                  </aside>
                )
              }
              if (block.type === 'sources') {
                return (
                  <div key={i} className="magazine-article__sources">
                    <strong>Official sources</strong>
                    <ul>
                      {block.items.map((s) => (
                        <li key={s.href}>
                          <a href={s.href} target="_blank" rel="noreferrer">
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              }
              return null
            })
          })()}

          <div className="inline-cta">
            <h2 style={{ margin: 0, color: 'inherit' }}>Need this explained for your business?</h2>
            <p style={{ margin: '0.5rem 0 0' }}>
              WhatsApp Hilsham — we will help you take the next step.
            </p>
            <a className="btn btn--accent" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              WhatsApp {PHONE}
            </a>
          </div>
        </div>
      </div>

      <CtaBand tone="green" />
    </article>
  )
}
