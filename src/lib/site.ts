export const SITE = {
  name: 'o7citizen.com',
  shortName: 'o7citizen',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://o7citizen.com',
  hubUrl: process.env.NEXT_PUBLIC_HUB_URL ?? 'https://o7citizen.com',
  referralUrl:
    process.env.NEXT_PUBLIC_REFERRAL_URL ??
    'https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC',
  referralCode: 'STAR-GCQJ-N6NC',
  ueecBonus: '50,000 UEC',
  // Bonus state lives in src/data/referral-bonus.ts and is maintained
  // automatically by the sc-news agent. Use isReferralBonusActive() at
  // render time to check current status.
  author: 'Doc_Flanigan',
  description:
    "Star Citizen — no jargon, no fluff. Just the 'Verse, plain and simple. An unofficial fan site by Doc_Flanigan.",
  twitterHandle: '@o7citizen',
}

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/weekly-update', label: 'Weekly Update' },
  { href: '/free-fly-events', label: 'Free Fly Events' },
  { href: '/o7-meaning', label: 'o7 Meaning' },
  { href: '/about', label: 'About' },
] as const

export const HERO_IMAGES = Array.from({ length: 12 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0')
  return `/images/hero/hero-${num}.jpg`
})
