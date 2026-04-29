import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    { url: '/', changeFrequency: 'weekly', priority: 1.0 },
    { url: '/day-one-citizen', changeFrequency: 'monthly', priority: 0.95 },
    { url: '/glossary', changeFrequency: 'weekly', priority: 0.9 },
    { url: '/o7-meaning', changeFrequency: 'monthly', priority: 0.95 },
    { url: '/free-fly-events', changeFrequency: 'weekly', priority: 0.85 },
  ] as const

  return routes.map((r) => ({
    url: `${SITE.url}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
