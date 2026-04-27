import type { WeeklyUpdate } from '@/components/UpdateCard'

export const UPDATES: WeeklyUpdate[] = [
  {
    slug: 'apr-27-2026',
    date: '2026-04-27',
    title: 'Alpha 4.7.2 Released, 4.8 Test Build Begins, Xenothreat Event Returns',
    summary:
      "Cloud Imperium Games — the studio behind Star Citizen — released a small game update this week called Alpha 4.7.2. It adds nearly one hundred new jobs in a region of space called the Nyx star system. A closed test version of the next major update, Alpha 4.8, also reached its first invited testers. It brings saved ship configurations, a way to dock two ships and fly them as one, and the return of a large co-operative combat event called Xenothreat.",
    readMinutes: 5,
    tag: 'Alpha 4.7.2',
  },
]

export const FEATURED_UPDATE = UPDATES[0]
