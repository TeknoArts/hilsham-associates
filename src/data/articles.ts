export type Article = {
  slug: string
  title: string
  deck: string
  topic: string
  readMinutes: number
  image: string
  imageCredit: string
  relatedService?: string
  body: ArticleBlock[]
}

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'sources'; items: { label: string; href: string }[] }
  | { type: 'note'; text: string }

/**
 * Magazine articles — high-level guidance only.
 * No invented rates, deadlines, or eligibility. Prefer official sources.
 */
export const ARTICLES: Article[] = [
  {
    slug: 'starting-a-company-in-kenya',
    title: 'Starting a company in Kenya: a calm first map',
    deck: 'What “getting registered” usually involves — and where to verify the official steps.',
    topic: 'Registration',
    readMinutes: 6,
    image: '/images/planning.jpg',
    imageCredit: 'Professional photography via Pexels',
    relatedService: 'company-registration',
    body: [
      {
        type: 'p',
        text: 'Starting a company in Kenya is exciting — and the paperwork can feel like a second job. This guide is a high-level map of the journey, not a substitute for official instructions. Always confirm current forms and fees on government portals before you act.',
      },
      {
        type: 'h2',
        text: 'Begin with clarity, not forms',
      },
      {
        type: 'p',
        text: 'Before you open a portal, write down what the business does, who owns it, and how you want decisions made. Those answers shape the structure you choose and the documents you will need. Rushing a name or partnership without that conversation is one of the most common early regrets.',
      },
      {
        type: 'quote',
        text: 'Registration is a milestone — not the whole business. Build the habit of tidy records from day one.',
      },
      {
        type: 'h2',
        text: 'Use official channels',
      },
      {
        type: 'p',
        text: 'Company registration and related services are offered through official government digital channels, including eCitizen and the Business Registration Service. Processes and required documents can change — download current checklists from those sources rather than relying on screenshots from social media.',
      },
      {
        type: 'h2',
        text: 'After registration: tax and banking basics',
      },
      {
        type: 'p',
        text: 'Once you are registered, most owners need a clear tax identity with KRA and a practical way to separate business money from personal spending. Exact obligations depend on how you trade. Check kra.go.ke for current guidance, and set a simple bookkeeping rhythm early so the first filing is not a scavenger hunt.',
      },
      {
        type: 'note',
        text: 'Verified against official sources for orientation only. Hilsham does not publish rates, deadlines, or eligibility claims here — we confirm those with you against current official guidance.',
      },
      {
        type: 'sources',
        items: [
          { label: 'eCitizen', href: 'https://www.ecitizen.go.ke/' },
          { label: 'Business Registration Service', href: 'https://brs.go.ke/' },
          { label: 'Kenya Revenue Authority', href: 'https://www.kra.go.ke/' },
        ],
      },
    ],
  },
  {
    slug: 'paye-for-first-time-employers',
    title: 'PAYE for first-time employers: what it means in plain language',
    deck: 'If you have people on payroll, PAYE is how you stay right with KRA — without guessing every month.',
    topic: 'PAYE',
    readMinutes: 5,
    image: '/images/documents.jpg',
    imageCredit: 'Professional photography via Pexels',
    relatedService: 'paye-filing',
    body: [
      {
        type: 'p',
        text: 'Hiring your first employee is a proud moment. It is also when PAYE becomes real. PAYE (Pay As You Earn) is the system for deducting and remitting employment taxes through KRA’s channels. This article explains the idea — not the latest tax bands.',
      },
      {
        type: 'h2',
        text: 'What PAYE is trying to do',
      },
      {
        type: 'p',
        text: 'In simple terms, you calculate what should be deducted from an employee’s pay for a period, deduct it, and remit and file through official KRA processes. Your team gets clarity on net pay; you stay aligned with the law.',
      },
      {
        type: 'h2',
        text: 'Do not guess the numbers',
      },
      {
        type: 'p',
        text: 'Tax bands, personal reliefs, and filing calendars are set by KRA and can change with finance legislation. Chat groups and old PDFs go stale quickly. When you need a figure or a due date, check the current information on kra.go.ke or confirm with a qualified helper who is looking at the same official source with you.',
      },
      {
        type: 'quote',
        text: 'A calm monthly rhythm beats a year-end scramble — own the calendar, keep the payslips.',
      },
      {
        type: 'h2',
        text: 'A practical rhythm',
      },
      {
        type: 'p',
        text: 'Keep a simple employee list, capture gross pay consistently, file and remit on time through iTax (or the current official method), and store payslips and acknowledgements where you can find them. If something is unclear — who counts as an employee, how a benefit is treated — pause and verify rather than improvising.',
      },
      {
        type: 'note',
        text: 'No tax rates or deadlines are published in this article on purpose. Always verify current PAYE rules on the Kenya Revenue Authority website.',
      },
      {
        type: 'sources',
        items: [
          { label: 'Kenya Revenue Authority', href: 'https://www.kra.go.ke/' },
          { label: 'KRA iTax', href: 'https://itax.kra.go.ke/' },
        ],
      },
    ],
  },
  {
    slug: 'what-is-agpo',
    title: 'What AGPO is — and what it is not',
    deck: 'A plain-language introduction to Access to Government Procurement Opportunities for Kenyan entrepreneurs.',
    topic: 'AGPO',
    readMinutes: 5,
    image: '/images/collaboration.jpg',
    imageCredit: 'Professional photography via Pexels',
    relatedService: 'agpo-certificate',
    body: [
      {
        type: 'p',
        text: 'AGPO stands for Access to Government Procurement Opportunities. It is a government initiative aimed at increasing the participation of eligible enterprises — including those owned by youth, women, and persons with disability — in public procurement. This piece is an orientation. Eligibility is defined by government, not by consultancies.',
      },
      {
        type: 'h2',
        text: 'What it can help with',
      },
      {
        type: 'p',
        text: 'For businesses that meet official criteria, AGPO registration is part of positioning for certain preference schemes in government tenders. It is not a guarantee that you will win work. Tenders still require capacity, compliance, and competitive bids.',
      },
      {
        type: 'h2',
        text: 'What to verify yourself',
      },
      {
        type: 'p',
        text: 'Categories, ownership rules, documents, and registration steps change. Use the official AGPO portal and related government sites for current criteria. Be wary of anyone who promises guaranteed awards or asks you to misrepresent ownership.',
      },
      {
        type: 'quote',
        text: 'Registration opens a door. Integrity and readiness decide whether you can walk through it.',
      },
      {
        type: 'h2',
        text: 'Prepare beyond the certificate',
      },
      {
        type: 'p',
        text: 'Winning public work usually needs tidy company documents, tax compliance, and the ability to deliver. If you are also exploring contractor accreditation (for example through the National Construction Authority), treat that as a parallel track with its own official checklist on nca.go.ke.',
      },
      {
        type: 'note',
        text: 'Hilsham does not determine AGPO eligibility. Confirm requirements on official government sources before you apply.',
      },
      {
        type: 'sources',
        items: [
          { label: 'AGPO', href: 'https://agpo.go.ke/' },
          { label: 'National Construction Authority', href: 'https://nca.go.ke/' },
          { label: 'Kenya Revenue Authority', href: 'https://www.kra.go.ke/' },
        ],
      },
    ],
  },
]

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug)
}
