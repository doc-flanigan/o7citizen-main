import type { Metadata, Viewport } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SITE } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
  weight: ['500', '600', '700', '800'],
})

export const viewport: Viewport = {
  themeColor: '#0a0e1a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "dayonecitizen.com — Star Citizen for Day-One Players. Plain English, No Jargon.",
    template: '%s | dayonecitizen.com',
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.author }],
  creator: SITE.author,
  publisher: SITE.author,
  keywords: [
    'Star Citizen',
    'Star Citizen for beginners',
    'Day One Citizen',
    'Star Citizen new player guide',
    'Star Citizen referral code',
    'UEC',
    'Free Fly',
    "the 'Verse",
    'Star Citizen first flight',
    'how to start Star Citizen',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    url: SITE.url,
    title:
      "dayonecitizen.com — Star Citizen for Day-One Players. Plain English, No Jargon.",
    description: SITE.description,
    images: [
      {
        url: '/images/hero/hero-01.jpg',
        width: 1600,
        height: 900,
        alt: "Star Citizen — the 'Verse",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dayonecitizen.com — Star Citizen, plain and simple.',
    description: SITE.description,
    images: ['/images/hero/hero-01.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'gaming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/made-by-community.png`,
    sameAs: [],
    founder: { '@type': 'Person', name: SITE.author },
    description: SITE.description,
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/glossary?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-navy text-starwhite antialiased">
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  )
}
