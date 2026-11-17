import { Link } from 'react-router-dom'
import { BRAND } from '../data/constants'

type Props = {
  className?: string
  stacked?: boolean
  to?: string
}

export function Wordmark({ className = 'wordmark', stacked = true, to = '/' }: Props) {
  if (!stacked) {
    return (
      <Link to={to} className={className} aria-label={BRAND}>
        {BRAND}
      </Link>
    )
  }

  return (
    <Link to={to} className={className} aria-label={BRAND}>
      Hilsham
      <span>& Associates</span>
    </Link>
  )
}
