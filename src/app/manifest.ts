import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0e1a',
    theme_color: '#0a0e1a',
    icons: [
      {
        src: '/images/brand/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/brand/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/images/brand/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
