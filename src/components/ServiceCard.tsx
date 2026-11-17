import { motion, useReducedMotion } from 'motion/react'
import {
  BadgeCheck,
  Building2,
  ClipboardList,
  FileText,
  HardHat,
  Landmark,
  Percent,
  Receipt,
  RefreshCw,
  Scale,
  ShieldCheck,
  Stamp,
  UserRound,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../data/services'

const ICONS: Record<string, LucideIcon> = {
  'tax-advisor': Scale,
  'agpo-certificate': BadgeCheck,
  'annual-returns': ClipboardList,
  'business-registration': Stamp,
  'company-registration': Building2,
  'income-tax': Wallet,
  'kra-pin': UserRound,
  'kra-tax-compliance': ShieldCheck,
  'kra-taxes': Landmark,
  'nca-accreditation': HardHat,
  'nca-registration-renewal': RefreshCw,
  'paye-filing': Receipt,
  'rental-taxes': FileText,
  vat: Percent,
  'withholding-taxes': Receipt,
}

export function ServiceCard({ service }: { service: Service }) {
  const reduce = useReducedMotion()
  const Icon = ICONS[service.slug] ?? FileText
  const isFeature = service.tone === 'terracotta'

  const inner = (
    <>
      <div className="service-card__top">
        <span className="service-card__icon" aria-hidden="true">
          <Icon size={22} strokeWidth={1.75} />
        </span>
        {isFeature && <span className="service-card__flag">Start here</span>}
      </div>
      <h3>{service.label}</h3>
      <p>{service.oneLiner}</p>
      <span className="service-card__link">
        {isFeature ? 'Start here →' : 'See how it works →'}
      </span>
    </>
  )

  if (reduce) {
    return (
      <Link
        to={`/services/${service.slug}`}
        className={`service-card service-card--${service.tone}`}
      >
        {inner}
      </Link>
    )
  }

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}>
      <Link
        to={`/services/${service.slug}`}
        className={`service-card service-card--${service.tone}`}
      >
        {inner}
      </Link>
    </motion.div>
  )
}
