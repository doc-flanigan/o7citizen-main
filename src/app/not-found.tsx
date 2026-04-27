import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export const metadata = {
  title: 'Lost in the Black — 404',
  description: 'Page not found. The coordinates you entered are not in this system.',
}

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main className="bg-starfield">
        <div className="container-narrow flex min-h-[80vh] flex-col items-center justify-center py-20 text-center">
          <p className="font-display text-7xl text-gold">o7</p>
          <h1 className="heading-display mt-4 text-4xl sm:text-5xl">
            Lost in the black.
          </h1>
          <p className="mt-4 max-w-md text-base text-muted">
            That page doesn&rsquo;t exist in this system. Either the
            jumppoint moved, or your nav computer needs a recalibration.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/10 bg-navyLight px-6 py-3 font-semibold text-starwhite hover:border-gold/40 hover:text-gold"
            >
              Back to base
            </Link>
            <CTAButton href="/glossary" variant="ghost" showIcon={false}>
              Open the glossary
            </CTAButton>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
