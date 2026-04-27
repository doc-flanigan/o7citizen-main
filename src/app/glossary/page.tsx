import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import GlossaryClient from './GlossaryClient'

export const metadata: Metadata = {
  title: 'Star Citizen Glossary — Plain English Definitions',
  description:
    "New to Star Citizen? Plain-English definitions of every term, acronym, and piece of 'Verse slang you'll encounter. 40+ terms, search and filter by category.",
  alternates: { canonical: '/glossary' },
  openGraph: {
    title: 'Star Citizen Glossary — Plain English Definitions',
    description:
      "Definitions of every Star Citizen term you'll encounter as a new player. Search and filter, A through Z.",
    url: '/glossary',
  },
}

export default function GlossaryPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <GlossaryClient />
      </main>
      <Footer />
    </>
  )
}
