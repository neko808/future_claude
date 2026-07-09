// Static content for the frontend-only build.
//
// This replaces the Payload CMS `home` global. Every field mirrors the
// fallback content that the original project rendered when the CMS was empty.
// Media fields are intentionally left `undefined` so the existing
// `mediaUrl(value, fallback)` calls in page.tsx resolve to the bundled
// `/assets/*` files in `public/`.

export type NavLink = { label: string }
export type MemoryRow = { addr: string; data: string }
export type Stat = { tag: string; num: string; label: string }
export type Card = { title: string; desc: string }
export type NewsItem = { date: string; title: string; url: string; image?: { url?: string | null } }
export type FooterLink = { label: string; url: string }
export type Social = { platform: string; url: string }

export type HomeContent = {
  // Media (undefined -> page.tsx falls back to /assets/* paths)
  logo?: { url?: string | null }
  heroBackground?: { url?: string | null }
  suitsVideo?: { url?: string | null }
  helmet?: { url?: string | null }
  footerLogo?: { url?: string | null }

  // Hero
  heroTag: string
  heroTitle: string
  heroLead: string
  heroCtaLabel: string

  // Suits panel
  suitsTitle: string
  suitsLead: string
  suitsCtaLabel: string
  panelLabel: string
  memoryTitle: string

  // HUD
  hudTitle: string
  hudLead: string
  hudLifeTitle: string
  hudLifeLead: string

  // Systems
  systemsTitle: string
  systemsLead: string
  systemsCtaLabel: string

  // Wide CTA
  wideTag: string
  wideTitle: string
  wideLead: string

  // News
  newsTitle: string

  // Footer
  copyright: string

  // Repeatable lists
  navLinks: NavLink[]
  memoryRows: MemoryRow[]
  stats: Stat[]
  cards: Card[]
  newsItems: NewsItem[]
  footerLinks: FooterLink[]
  footerSocials: Social[]
}

const LEAD = 'Pressure rated EVA systems engineered for missions beyond low orbit.'
const NEWS_HEADLINE = 'ATHER SYSTEM PARTNERS WITH JAXA FOR LUNAR MISSIONS'

export const HOME: HomeContent = {
  heroTag: 'THE VOID',
  heroTitle: 'BUILT FOR THE VOID',
  heroLead: LEAD,
  heroCtaLabel: 'MEET THE AX 09',

  suitsTitle: 'NEXT-GEN SPACE SUITS',
  suitsLead: LEAD,
  suitsCtaLabel: 'MEET THE AX 09',
  panelLabel: 'MF GR UNIT    LOW PRS\nANT SR 6823',
  memoryTitle: 'Memory',

  hudTitle: 'ADVANCED HUD SYSTEM',
  hudLead: LEAD,
  hudLifeTitle: 'LIFE SYSTEMS',
  hudLifeLead: LEAD,

  systemsTitle: 'LIFE SYSTEMS',
  systemsLead: LEAD,
  systemsCtaLabel: 'MEET THE AX 09',

  wideTag: 'THE VOID',
  wideTitle: 'BUILT FOR THE VOID',
  wideLead: LEAD,

  newsTitle: 'LATEST NEWS',

  copyright: '© Copyright 2026. Creative Technologies',

  navLinks: [
    { label: 'SOLUTIONS' },
    { label: 'COMPANY' },
    { label: 'PRESS' },
    { label: 'SUPPORT' },
  ],

  memoryRows: [
    { addr: '0x000689239835 b6', data: 'datax56' },
    { addr: '0x000689237395 a8', data: 'datax32' },
    { addr: '0x000689239576 d3', data: 'datax28' },
    { addr: '0x000689239827 a2', data: 'datax87' },
    { addr: '0x000689231875 b8', data: 'datax35' },
    { addr: '0x000689236987 s3', data: 'datax76' },
    { addr: '0x000689235698 c5', data: 'datax29' },
    { addr: '0x000689231368 a2', data: 'datax96' },
  ],

  stats: [
    { tag: 'THE VOID', num: '200', label: 'Missions suported' },
    { tag: 'THE VOID', num: '100', label: 'Pressure Integrity' },
    { tag: 'THE VOID', num: '0.01', label: 'Failure Rate' },
    { tag: 'THE VOID', num: 'x', label: 'Possibilities' },
  ],

  cards: [
    { title: 'MOBILITY', desc: 'Advanced material design for dexterity.' },
    { title: 'EVA SYSTEMS', desc: 'Testing this text' },
  ],

  newsItems: [
    { date: 'March 12, 2026', title: NEWS_HEADLINE, url: '#', image: { url: '/assets/rsa1.jpg' } },
    { date: 'March 12, 2026', title: NEWS_HEADLINE, url: '#', image: { url: '/assets/rsa2.jpg' } },
    { date: 'March 12, 2026', title: NEWS_HEADLINE, url: '#', image: { url: '/assets/rsa3.jpg' } },
  ],

  footerLinks: [
    { label: 'Solutions', url: '#' },
    { label: 'Company', url: '#' },
    { label: 'Press', url: '#' },
    { label: 'Support', url: '#' },
  ],

  footerSocials: [
    { platform: 'facebook', url: '#' },
    { platform: 'x', url: '#' },
    { platform: 'instagram', url: '#' },
    { platform: 'tiktok', url: '#' },
  ],
}
