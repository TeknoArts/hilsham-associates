import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import {
  BRAND,
  GOOGLE_RATING,
  GOOGLE_REVIEWS,
  NAV_LINKS,
  PHONE,
  WHATSAPP_URL,
} from '../data/constants'
import { Wordmark } from './Wordmark'

export function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container site-header__inner">
          <Wordmark />
          <nav className="nav-desktop" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
            <a className="nav-desktop__wa" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              WhatsApp {PHONE}
            </a>
          </nav>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
        <div
          id="mobile-nav"
          className={`container nav-mobile${open ? ' is-open' : ''}`}
        >
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            WhatsApp {PHONE}
          </a>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container site-footer__grid">
          <div>
            <Wordmark />
            <p className="site-footer__meta">
              Building a business in Kenya is already hard. We help with paperwork, tax, and
              compliance so you can focus on growth.
            </p>
            <p className="site-footer__meta">
              Rated {GOOGLE_RATING} on Google · {GOOGLE_REVIEWS} reviews
            </p>
          </div>
          <div>
            <strong>Explore</strong>
            <div className="site-footer__nav" style={{ marginTop: '0.75rem' }}>
              {NAV_LINKS.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <strong>Talk to us</strong>
            <div className="site-footer__nav" style={{ marginTop: '0.75rem' }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                WhatsApp {PHONE}
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`}>Call {PHONE}</a>
            </div>
          </div>
        </div>
        <div className="container site-footer__bottom">
          <span>© {new Date().getFullYear()} {BRAND}</span>
          <span>
            <Link to="/privacy">Privacy</Link>
            {' · '}
            <Link to="/terms">Terms</Link>
          </span>
          <span>Services verified from Google Business Profile</span>
        </div>
      </footer>

      <a className="mobile-wa-bar" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        WhatsApp {PHONE}
      </a>
    </div>
  )
}
