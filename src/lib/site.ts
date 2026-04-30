export const SITE = {
  name: 'dayonecitizen.com',
  shortName: 'dayonecitizen',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dayonecitizen.com',
  hubUrl: process.env.NEXT_PUBLIC_HUB_URL ?? 'https://dayonecitizen.com',
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
    "Star Citizen for brand-new players — buying the game, installing it, your first flight. Plain English, no jargon. An unofficial fan site by Doc_Flanigan.",
  twitterHandle: '@dayonecitizen',
}

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/day-one-citizen', label: 'Day One Citizen' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/free-fly-events', label: 'Free Fly Events' },
  { href: '/about', label: 'About' },
] as const

export const HERO_IMAGES = Array.from({ length: 12 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0')
  return `/images/hero/hero-${num}.jpg`
})
