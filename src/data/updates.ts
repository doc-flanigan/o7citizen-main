import type { WeeklyUpdate } from '@/components/UpdateCard'

export const UPDATES: WeeklyUpdate[] = [
  {
    slug: 'this-week',
    date: '2026-04-27',
    title: "This Week in the 'Verse — Pyro Salvage Rebalance & Free Fly Tease",
    summary:
      "Patch 4.0.3 lands with a Pyro salvage payout pass, Drake Cutter Rampage hangar-ready status, and CIG hints that the next Free Fly window opens before May. Plus: a fresh Aegis Idris flyable test on the EPTU.",
    readMinutes: 5,
    tag: 'Patch 4.0.3',
  },
  {
    slug: 'apr-20-2026',
    date: '2026-04-20',
    title: 'Wipe Survival Guide and the Quiet Pyro Buff',
    summary:
      "Everything you should sell before the next wipe, why CIG quietly doubled Pyro mining yields, and the new mission chain that pays out in component blueprints.",
    readMinutes: 5,
    tag: 'Wipe Prep',
  },
  {
    slug: 'apr-13-2026',
    date: '2026-04-13',
    title: 'Squadron 42 Beta Window, Confirmed (Sort Of)',
    summary:
      "CIG's quarterly letter pinned the Squadron 42 beta to a 12-month window. Here's what's actually committed, what's hedged, and what new players should care about.",
    readMinutes: 4,
    tag: 'Squadron 42',
  },
  {
    slug: 'apr-06-2026',
    date: '2026-04-06',
    title: 'New Player Loop: From Aurora to First Million aUEC',
    summary:
      "A repeatable, no-griefer-bait progression for absolute beginners — 90 minutes a night, three weeks, first million in the bank. Plus the ships to actually save for.",
    readMinutes: 6,
    tag: 'New Player',
  },
]

export const FEATURED_UPDATE = UPDATES[0]
