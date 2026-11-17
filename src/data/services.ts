export type ServiceTone =
  | 'peach'
  | 'sage'
  | 'ivory'
  | 'white'
  | 'yellow'
  | 'terracotta'
  | 'green'

export type Service = {
  slug: string
  /** UI display label — meaning matches GBP; casing normalized for readability */
  label: string
  /** Exact GBP listing text as provided */
  gbpName: string
  verifiedFromGbp: true
  oneLiner: string
  whoFor: string
  tone: ServiceTone
  what: string
  why: string
  who: string
  docsNote: string
  steps: string[]
  mistakes: string[]
  howWeHelp: string
  related: string[]
}

/**
 * Verified from Hilsham & Associates Google Business Profile.
 * Client supplied 15 service lines (earlier “14” count was incomplete) — use all.
 */
export const SERVICES: Service[] = [
  {
    slug: 'tax-advisor',
    label: 'Tax advisor',
    gbpName: 'Tax Advisor',
    verifiedFromGbp: true,
    oneLiner: 'Plain-language advice when tax choices feel unclear — before you file or commit.',
    whoFor: 'Owners who need clarity on options, not a jargon dump.',
    tone: 'yellow',
    what: 'Tax advisor support means sitting with your situation and explaining what tends to apply, what to verify on official sources, and what a sensible next step looks like. It is conversation and guidance — not invented rates or guaranteed outcomes.',
    why: 'Good decisions start with understanding. Guessing from chat groups is how businesses create expensive rework.',
    who: 'Founders, growing teams, and anyone facing a tax decision they want explained in Kenyan-business English.',
    docsNote: 'Bring what you already have — returns, notices, bank summaries. Exact document needs depend on your question. Always verify figures and deadlines on kra.go.ke.',
    steps: [
      'Tell us the decision or confusion on WhatsApp.',
      'We map options in plain language.',
      'You verify critical numbers on official KRA sources with us.',
      'Choose a path and we help with the paperwork side if needed.',
    ],
    mistakes: [
      'Treating informal “rates someone quoted” as law.',
      'Making a structural change without understanding tax knock-ons.',
      'Waiting for a notice before asking for clarity.',
    ],
    howWeHelp: 'We translate tax topics into owner language, flag what to double-check on KRA, and stay with you through the next practical step.',
    related: ['kra-taxes', 'income-tax'],
  },
  {
    slug: 'agpo-certificate',
    label: 'AGPO certificate',
    gbpName: 'AGPO certificate',
    verifiedFromGbp: true,
    oneLiner: 'Understand AGPO and prepare for certification through official government channels.',
    whoFor: 'Enterprises exploring Access to Government Procurement Opportunities.',
    tone: 'sage',
    what: 'AGPO certificate support helps you understand what the certificate is for, who government schemes are aimed at, and how to approach registration honestly through official portals. Eligibility is defined by government — not by us.',
    why: 'Public procurement can open doors, but only if you meet official criteria and keep documents truthful and current.',
    who: 'Youth-, women-, and persons-with-disability–owned enterprises exploring preference schemes — and any owner preparing procurement-ready papers.',
    docsNote: 'Categories, ownership rules, and forms change. Confirm current criteria on agpo.go.ke and related official sites. We do not invent eligibility.',
    steps: [
      'Learn what AGPO covers and whether it may apply to you.',
      'Confirm ownership and structure against official criteria.',
      'Prepare documents and apply through official channels.',
      'Keep your profile and compliance papers ready for tenders.',
    ],
    mistakes: [
      'Assuming a certificate alone wins tenders.',
      'Misrepresenting ownership or capacity.',
      'Letting compliance documents lapse after registration.',
    ],
    howWeHelp: 'We explain AGPO in plain language, help you prepare thoughtfully, and point you to official sources for eligibility decisions.',
    related: ['business-registration', 'nca-accreditation'],
  },
  {
    slug: 'annual-returns',
    label: 'Annual returns',
    gbpName: 'Annual returns',
    verifiedFromGbp: true,
    oneLiner: 'Keep company annual returns on track so formal compliance does not become a scramble.',
    whoFor: 'Registered companies that need returns filed calmly and correctly.',
    tone: 'white',
    what: 'Annual returns are the recurring company filings that keep your registered business in good standing with the relevant registries. We help you understand what is due and prepare submissions through official channels.',
    why: 'Missed returns create avoidable stress and can block banking, tenders, or later filings. A simple rhythm beats catch-up mode.',
    who: 'Directors and owners of registered companies — especially those who have fallen behind or are filing for the first time.',
    docsNote: 'Required forms and due timing are set by the registry and can change. Confirm current requirements on official Business Registration Service / eCitizen guidance — we do not publish invented deadlines here.',
    steps: [
      'Confirm your company details and last filing status.',
      'Gather director and company information the return needs.',
      'Prepare and submit through official channels.',
      'Store acknowledgements for next year.',
    ],
    mistakes: [
      'Ignoring reminders until a penalty panic.',
      'Using outdated company details (addresses, directors).',
      'Filing without keeping proof of submission.',
    ],
    howWeHelp: 'We help you prepare accurate returns and submit through the proper portals — with clear explanations along the way.',
    related: ['company-registration', 'business-registration'],
  },
  {
    slug: 'business-registration',
    label: 'Business registration',
    gbpName: 'BUSINESS REGISTRATION',
    verifiedFromGbp: true,
    oneLiner: 'Register and structure the business so you can trade with clarity.',
    whoFor: 'People formalising a business name or structure to trade properly.',
    tone: 'terracotta',
    what: 'Business registration is the path from informal trading to a recognised business identity you can bank, invoice, and grow with. We walk you through the practical steps and official channels in plain language.',
    why: 'Without registration, every next step — contracts, tax, hiring, tenders — gets harder. Getting it right early saves rework.',
    who: 'First-time owners, sole traders formalising, and teams that need a cleaner registration path.',
    docsNote: 'Document lists and fees change. Confirm current forms on eCitizen and Business Registration Service (brs.go.ke). Treat any prep list we share as guidance to verify, not a frozen checklist.',
    steps: [
      'Clarify what you are building and how you want to own it.',
      'Prepare registration details and required documents.',
      'Complete registration through official channels.',
      'Set up follow-on basics (tax identity, banking, records).',
    ],
    mistakes: [
      'Rushing a name or structure without thinking about partners and growth.',
      'Leaving tax registration for “later.”',
      'Mixing personal and business money from day one.',
    ],
    howWeHelp: 'We explain the registration path, help you prepare, and stay with you through the steps that usually slow owners down.',
    related: ['company-registration', 'kra-pin'],
  },
  {
    slug: 'company-registration',
    label: 'Company registration',
    gbpName: 'Company registration',
    verifiedFromGbp: true,
    oneLiner: 'Incorporate a company through official channels — with the structure explained up front.',
    whoFor: 'Founders ready for a limited company rather than an informal setup.',
    tone: 'yellow',
    what: 'Company registration is incorporating a limited company so you can operate with a clear legal structure. We help you understand what that means in practice and prepare the official application path.',
    why: 'A company structure affects ownership, liability, banking, and how you grow. Understanding the choice matters as much as the form.',
    who: 'Founders incorporating for the first time, and owners converting from another trading style.',
    docsNote: 'Use Business Registration Service / eCitizen for current incorporation requirements. We help you prepare — we do not replace official instructions.',
    steps: [
      'Agree ownership, directors, and share structure in plain language.',
      'Prepare names and supporting details.',
      'File through official registration channels.',
      'Collect certificates and set up tax and banking follow-ons.',
    ],
    mistakes: [
      'Copying a friend’s share structure without understanding it.',
      'Skipping director ID or address details that portals will reject.',
      'Forgetting post-incorporation tax steps.',
    ],
    howWeHelp: 'We make incorporation understandable, prepare your submission carefully, and point you to official sources for current fees and forms.',
    related: ['business-registration', 'annual-returns'],
  },
  {
    slug: 'income-tax',
    label: 'Income tax',
    gbpName: 'Income tax',
    verifiedFromGbp: true,
    oneLiner: 'Stay oriented on income tax obligations — and file through official KRA channels.',
    whoFor: 'Individuals and businesses with income tax filings to get right.',
    tone: 'sage',
    what: 'Income tax support means understanding what may apply to how you earn, preparing records, and filing through KRA’s official processes. We explain in owner language; figures and due dates come from KRA.',
    why: 'Income tax confusion burns time and confidence. Clear obligations let you plan and avoid last-minute scrambles.',
    who: 'Business owners, professionals, and anyone unsure which income tax steps apply to them.',
    docsNote: 'Rates, bands, and calendars change. Always verify on kra.go.ke / iTax. We do not publish tax rates or deadlines on this site.',
    steps: [
      'Map income sources and available records.',
      'Confirm what applies using official KRA guidance.',
      'Prepare and file through iTax or the current official method.',
      'Keep acknowledgements and working papers.',
    ],
    mistakes: [
      'Using last year’s numbers as this year’s law.',
      'Filing without supporting records.',
      'Ignoring notices until they escalate.',
    ],
    howWeHelp: 'We help you prepare filings calmly and check critical details against current KRA guidance.',
    related: ['tax-advisor', 'kra-taxes'],
  },
  {
    slug: 'kra-pin',
    label: 'KRA PIN',
    gbpName: 'KRA PIN',
    verifiedFromGbp: true,
    oneLiner: 'Get or sort your KRA PIN so you can use iTax and meet tax obligations.',
    whoFor: 'Anyone who needs a PIN issued, recovered, or clarified.',
    tone: 'ivory',
    what: 'A KRA PIN is your tax identity with the Kenya Revenue Authority. We help you understand the PIN process and complete the practical steps through official KRA channels.',
    why: 'Without a working PIN and portal access, almost every other tax step stalls — registration follow-ons, filings, and compliance certificates.',
    who: 'New business owners, individuals registering for tax, and people locked out of an existing PIN.',
    docsNote: 'PIN registration and recovery steps are defined by KRA and can change. Follow current instructions on kra.go.ke — we guide you through them.',
    steps: [
      'Confirm whether you need a new PIN or help accessing an existing one.',
      'Prepare identification and details KRA requires.',
      'Complete the process on official KRA channels.',
      'Secure your login details and next compliance steps.',
    ],
    mistakes: [
      'Sharing PINs and passwords carelessly.',
      'Creating duplicate registrations instead of recovering access.',
      'Stopping after PIN issuance without planning filings.',
    ],
    howWeHelp: 'We walk you through PIN setup or recovery in plain language and help you take the next tax step afterward.',
    related: ['kra-tax-compliance', 'business-registration'],
  },
  {
    slug: 'kra-tax-compliance',
    label: 'KRA tax compliance',
    gbpName: 'KRA TAX COMPLIANCE',
    verifiedFromGbp: true,
    oneLiner: 'Work toward tax compliance status with clear steps — verified against official KRA processes.',
    whoFor: 'Owners who need compliance for tenders, banking, or peace of mind.',
    tone: 'terracotta',
    what: 'KRA tax compliance support helps you understand what “compliant” means in practice, close gaps in filings or payments, and pursue official compliance status through KRA channels.',
    why: 'Many opportunities — contracts, finance, procurement — ask for proof of tax compliance. Getting there is a process, not a shortcut.',
    who: 'Businesses preparing for tenders or banking, and owners catching up on outstanding obligations.',
    docsNote: 'Compliance certificates and status checks are issued through KRA systems under their rules. We help you prepare; we cannot invent status. Confirm current process on kra.go.ke.',
    steps: [
      'Review filing and payment status on official portals.',
      'Identify gaps in plain language.',
      'File, pay, or correct through official channels as required.',
      'Request or download compliance proof when KRA systems allow.',
    ],
    mistakes: [
      'Assuming a single payment fixes every obligation.',
      'Applying for proof before filings are current.',
      'Using expired screenshots as “compliance.”',
    ],
    howWeHelp: 'We help you see the real gap list, close it through official channels, and aim for compliance status the honest way.',
    related: ['kra-taxes', 'kra-pin'],
  },
  {
    slug: 'kra-taxes',
    label: 'KRA taxes',
    gbpName: 'KRA taxes',
    verifiedFromGbp: true,
    oneLiner: 'Stay on top of KRA obligations without drowning in jargon.',
    whoFor: 'Owners who want a clear map of what KRA expects from how they trade.',
    tone: 'white',
    what: 'KRA taxes support is broad help with the tax obligations that sit under the Kenya Revenue Authority — understanding what applies, preparing records, and filing or paying through official channels.',
    why: 'Tax confusion slows growth. A clear map of obligations lets you focus on the business again.',
    who: 'New registrants, growing businesses, and owners who feel behind and want a calm reset.',
    docsNote: 'Which taxes apply depends on your activities. Verify current rules, rates, and dates on kra.go.ke — we help you interpret and act, not invent figures.',
    steps: [
      'Map which obligations apply to how you trade.',
      'Gather records and portal access.',
      'File and pay through official channels.',
      'Keep a simple rhythm for the next period.',
    ],
    mistakes: [
      'Copying a friend’s tax approach when your business differs.',
      'Ignoring portal notices.',
      'Relying on unofficial rate sheets from social media.',
    ],
    howWeHelp: 'We translate KRA requirements into a plan for your business and help you execute filings carefully.',
    related: ['tax-advisor', 'vat'],
  },
  {
    slug: 'nca-accreditation',
    label: 'NCA accreditation',
    gbpName: 'NCA ACCREDITATION',
    verifiedFromGbp: true,
    oneLiner: 'For contractors who need the NCA accreditation path explained in plain language.',
    whoFor: 'Contractors and construction firms preparing for National Construction Authority accreditation.',
    tone: 'green',
    what: 'NCA accreditation is the compliance path many contractors need to work formally on construction projects. We help you understand categories, preparation, and official submission — without jargon fog.',
    why: 'Accreditation unlocks formal work. Getting stuck on paperwork keeps capable contractors off sites they could win.',
    who: 'Contractors seeking accreditation and firms that need a clearer compliance path.',
    docsNote: 'Categories, fees, and checklists are set by the National Construction Authority. Confirm current requirements on nca.go.ke — orientation here is not a substitute for official guidance.',
    steps: [
      'Confirm which category fits the work you do.',
      'Gather company, personnel, and project evidence required.',
      'Submit through official NCA channels.',
      'Track follow-ups and keep records for renewal.',
    ],
    mistakes: [
      'Applying under the wrong category because a peer did.',
      'Submitting incomplete personnel or project evidence.',
      'Waiting until a tender deadline to start.',
    ],
    howWeHelp: 'We map the accreditation path, organise what you need, and stay oriented while you work with official NCA requirements.',
    related: ['nca-registration-renewal', 'agpo-certificate'],
  },
  {
    slug: 'nca-registration-renewal',
    label: 'NCA registration and renewal',
    gbpName: 'NCA REGISTRATION AND RENEWAL',
    verifiedFromGbp: true,
    oneLiner: 'Register with NCA or renew on time — with the process explained clearly.',
    whoFor: 'Contractors handling first registration or keeping an existing NCA status current.',
    tone: 'white',
    what: 'NCA registration and renewal covers getting onto the Authority’s register and keeping that status up to date through official renewal cycles. We help you prepare and submit without the last-minute rush.',
    why: 'Lapsed registration blocks formal work. Renewals are easier when documents and calendars are tended early.',
    who: 'Newly registering contractors and firms approaching renewal windows.',
    docsNote: 'Renewal timing and document packs are defined by NCA. Check nca.go.ke for current instructions — we do not invent deadlines here.',
    steps: [
      'Confirm whether you need first registration or renewal.',
      'Assemble the current document set from official guidance.',
      'Submit through NCA channels.',
      'Diary the next renewal early.',
    ],
    mistakes: [
      'Starting renewal when the window is almost closed.',
      'Reusing expired supporting documents.',
      'Ignoring category changes in your actual work.',
    ],
    howWeHelp: 'We help you prepare registration or renewal packs and submit through the proper NCA process.',
    related: ['nca-accreditation', 'company-registration'],
  },
  {
    slug: 'paye-filing',
    label: 'PAYE filing',
    gbpName: 'PAYE FILING',
    verifiedFromGbp: true,
    oneLiner: 'File PAYE correctly for the people you employ — without guessing every month.',
    whoFor: 'Employers who need payroll deductions filed and remitted through KRA.',
    tone: 'yellow',
    what: 'PAYE filing is how employers report and remit Pay As You Earn through official KRA processes. If you have people on payroll, this is the monthly (or periodic) rhythm that keeps you right with KRA.',
    why: 'Payroll mistakes affect your team’s trust and your standing with KRA. A calm filing rhythm beats catch-up crises.',
    who: 'First-time employers, growing teams, and owners who have been handling PAYE informally.',
    docsNote: 'PAYE bands, reliefs, and filing dates are set by KRA and can change. Verify figures and calendars on kra.go.ke — we help you operate the process correctly.',
    steps: [
      'Confirm who counts as an employee for PAYE purposes.',
      'Set up payroll records and iTax access.',
      'Calculate, deduct, file, and remit each period.',
      'Keep payslips and filings organised.',
    ],
    mistakes: [
      'Paying “net only” without a clear PAYE process.',
      'Using outdated tax figures from a chat group.',
      'Missing filing periods because nobody owns the calendar.',
    ],
    howWeHelp: 'We help you set a practical PAYE filing rhythm and prepare submissions against current KRA guidance.',
    related: ['withholding-taxes', 'kra-taxes'],
  },
  {
    slug: 'rental-taxes',
    label: 'Rental taxes',
    gbpName: 'Rental taxes',
    verifiedFromGbp: true,
    oneLiner: 'Landlords: know what KRA expects from rental earnings — and how to file.',
    whoFor: 'Property owners earning from rent who want clarity, not scare stories.',
    tone: 'sage',
    what: 'Rental taxes cover what KRA expects when you earn from letting property. We help landlords understand the obligation in plain language and set up a workable way to track and file.',
    why: 'Rental income is easy to under-document. Clear records protect you and make filing straightforward.',
    who: 'Landlords with one or many units, and owners who have never filed rental income before.',
    docsNote: 'Applicable rates and filing rules are set by KRA. Confirm current treatment on kra.go.ke — do not rely on informal percentages shared online.',
    steps: [
      'List properties and rental income clearly.',
      'Keep tenant and payment records organised.',
      'File through official KRA channels as required.',
      'Review periodically so nothing drifts.',
    ],
    mistakes: [
      'Mixing rental cash with personal spending with no trail.',
      'Ignoring rental obligations until a notice arrives.',
      'Using outdated rate rumours instead of official guidance.',
    ],
    howWeHelp: 'We help you understand what applies, organise records, and file with confidence — always checking official KRA sources for current rules.',
    related: ['income-tax', 'kra-taxes'],
  },
  {
    slug: 'vat',
    label: 'VAT',
    gbpName: 'VAT',
    verifiedFromGbp: true,
    oneLiner: 'Understand VAT registration and returns in plain language — then file through KRA.',
    whoFor: 'Businesses approaching or already in VAT who want the process demystified.',
    tone: 'sage',
    what: 'VAT support means helping you understand when VAT tends to matter, how returns work at a high level, and how to file through official KRA channels. Thresholds and rates are set by law and KRA — verify them officially.',
    why: 'VAT errors are costly and stressful. Clear processes and tidy invoices make returns manageable.',
    who: 'Growing traders, service businesses, and owners unsure whether VAT applies yet.',
    docsNote: 'Registration thresholds, rates, and return calendars change. Confirm on kra.go.ke before you act. This site does not publish VAT rates or deadlines.',
    steps: [
      'Clarify whether VAT may apply to how you trade (verify on KRA).',
      'Prepare invoicing and record habits that support returns.',
      'File returns through official channels when required.',
      'Keep input and output records reconcilable.',
    ],
    mistakes: [
      'Issuing invoices that cannot support a return.',
      'Guessing whether you should register instead of checking official thresholds.',
      'Filing without reconciling purchases and sales.',
    ],
    howWeHelp: 'We explain VAT in owner language, help you prepare returns, and keep you pointed at current KRA rules.',
    related: ['kra-taxes', 'withholding-taxes'],
  },
  {
    slug: 'withholding-taxes',
    label: 'Withholding taxes',
    gbpName: 'Withholding taxes',
    verifiedFromGbp: true,
    oneLiner: 'Handle withholding tax deductions and filings when payments require them.',
    whoFor: 'Businesses that pay suppliers or professionals where withholding may apply.',
    tone: 'ivory',
    what: 'Withholding taxes are amounts you may need to deduct from certain payments and remit to KRA, with matching filings. We help you understand when withholding often arises and how to file through official channels.',
    why: 'Missed withholding creates problems for you and for the people you pay. Getting the rhythm right protects relationships and compliance.',
    who: 'Companies paying contractors, landlords paying certain incomes, and finance teams building a withholding process.',
    docsNote: 'Which payments attract withholding, and at what rates, is defined in tax law and KRA guidance. Verify current rules on kra.go.ke — we do not invent rates here.',
    steps: [
      'Identify payment types that may require withholding (confirm on KRA).',
      'Set a process to deduct and record.',
      'Remit and file through official channels.',
      'Issue or retain the certificates and proofs counterparties need.',
    ],
    mistakes: [
      'Paying gross when withholding was required.',
      'Deducting but forgetting to file or remit.',
      'Using outdated rate tables from unofficial blogs.',
    ],
    howWeHelp: 'We help you build a clear withholding process and file correctly against current official guidance.',
    related: ['paye-filing', 'vat'],
  },
]

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}

export const SERVICES_SOURCE_NOTE =
  'Service list verified from Hilsham & Associates Google Business Profile (all client-supplied items). Display names use readable casing; meaning matches the GBP listing.'
