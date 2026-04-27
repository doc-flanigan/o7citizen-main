import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Rocket, Coins, Globe2 } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import HeroCarousel from '@/components/HeroCarousel'
import CTAButton from '@/components/CTAButton'
import NewsletterSignup from '@/components/NewsletterSignup'
import UpdateCard from '@/components/UpdateCard'
import { FEATURED_UPDATE } from '@/data/updates'
import { SITE } from '@/lib/site'

export default function Home() {
  const startHere = [
    {
      icon: Rocket,
      title: 'What is Star Citizen?',
      body: "An always-online sci-fi sandbox built by Cloud Imperium Games. Pilot ships, explore planets, trade, fight, mine, salvage — all in one persistent universe.",
      href: '/glossary#term-the-verse',
      cta: 'Learn the basics',
    },
    {
      icon: Globe2,
      title: "What's the 'Verse?",
      body: "Slang for the Star Citizen universe — the lore, the in-game world, and the community combined. When someone says 'see you in the 'Verse,' they mean it.",
      href: "/glossary#term-the-verse",
      cta: "Read more",
    },
    {
      icon: Coins,
      title: 'What is UEC?',
      body: "United Earth Credits — the in-game money. New accounts that use a referral code start with 50,000 UEC free, enough to buy gear and your first weapons.",
      href: '/glossary#term-uec',
      cta: 'See currency terms',
    },
  ]

  return (
    <>
      <NavBar />
      <main>
        <HeroCarousel
          title={
            <>
              Star Citizen — <span className="text-gold-gradient">No Jargon. No Fluff.</span>
              <br className="hidden sm:block" /> Just the &lsquo;Verse, plain and simple.
            </>
          }
          subtitle="A new-player guide to the most ambitious space sim ever made — written by a veteran backer for someone who has never even seen the game."
          ctaLabel={`Claim Your Free ${SITE.ueecBonus}`}
          ctaHref={SITE.referralUrl}
          height="full"
        />

        {/* Section 2: Start Here */}
        <section
          id="start-here"
          className="border-t border-white/5 bg-navy py-20 sm:py-28"
        >
          <div className="container-wide">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Start Here
              </p>
              <h2 className="heading-display text-3xl sm:text-4xl">
                New to the &lsquo;Verse?
              </h2>
              <p className="mt-4 text-base text-muted">
                Three questions every new Star Citizen player asks first. Plain
                English. No 200-page wiki rabbit hole.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {startHere.map(({ icon: Icon, title, body, href, cta }) => (
                <article
                  key={title}
                  className="card-surface group flex flex-col p-7 transition-all hover:-translate-y-1 hover:border-gold/40 hover:ring-gold"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="heading-display text-xl">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-starwhite/85">
                    {body}
                  </p>
                  <Link
                    href={href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-goldDark"
                  >
                    {cta} <ArrowRight size={14} aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Latest Weekly Update */}
        <section className="border-t border-white/5 bg-gradient-to-b from-navy to-navyLight/30 py-20 sm:py-24">
          <div className="container-wide grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
            <UpdateCard update={FEATURED_UPDATE} featured />
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Weekly Update
              </p>
              <h2 className="heading-display text-3xl sm:text-4xl">
                The whole week, in five minutes.
              </h2>
              <p className="mt-4 text-base text-muted">
                Every Friday we publish a plain-English breakdown of what
                changed in Star Citizen — patch notes translated, events
                flagged, rumors filtered. No hype, no doomposting. Built for
                people who actually have day jobs.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CTAButton
                  href="/weekly-update"
                  variant="ghost"
                  trackingLabel="home-weekly-cta"
                  showIcon={false}
                >
                  Read this week&rsquo;s update
                </CTAButton>
                <Link
                  href="/weekly-update#archive"
                  className="inline-flex items-center gap-1.5 self-center text-sm font-medium text-starwhite/80 hover:text-gold"
                >
                  Browse archive <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Why o7citizen */}
        <section className="border-t border-white/5 bg-starfield py-20 sm:py-24">
          <div className="container-narrow">
            <div className="card-surface relative overflow-hidden p-8 sm:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
              <div className="relative">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Why this site exists
                </p>
                <h2 className="heading-display text-3xl sm:text-4xl">
                  &ldquo;What does o7 mean?&rdquo;
                </h2>
                <p className="mt-5 text-base leading-relaxed text-starwhite/85">
                  When I first heard <strong>o7</strong> in a Star Citizen
                  community channel, I had no idea what it meant. It turned out
                  to be one of the most common questions new players ask — and
                  one of the hardest to find a straight answer for. That moment
                  is why I built o7citizen.com.
                </p>
                <p className="mt-4 text-base leading-relaxed text-starwhite/85">
                  Plain-English Star Citizen for anyone who&rsquo;s curious
                  about the &lsquo;Verse but doesn&rsquo;t know where to start.
                  No gatekeeping. No wiki dives. Just answers.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-navyLight/50 px-5 py-2.5 text-sm font-semibold text-starwhite hover:border-gold/40 hover:text-gold"
                  >
                    Read the full story
                  </Link>
                  <span className="text-sm text-muted">
                    — {SITE.author}, veteran SC backer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Newsletter */}
        <section className="border-t border-white/5 bg-navy py-20 sm:py-24">
          <div className="container-narrow">
            <NewsletterSignup variant="full" />
          </div>
        </section>

        {/* Section 6: Referral CTA banner */}
        <section className="border-t border-white/5 bg-gradient-to-r from-navyLight via-navyLight/80 to-navy py-20 sm:py-24">
          <div className="container-wide flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="md:max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Ready to jump in?
              </p>
              <h2 className="heading-display text-3xl sm:text-4xl">
                Use a referral code. Start with{' '}
                <span className="text-gold-gradient">{SITE.ueecBonus}</span>{' '}
                free.
              </h2>
              <p className="mt-4 text-base text-muted">
                Every new account that uses a referral code gets a 50,000 UEC
                bonus on day one. It&rsquo;s the difference between buying your
                first decent armor set and grinding for two evenings. The code
                below is mine — no extra cost to you.
              </p>
              <p className="mt-2 font-mono text-sm text-gold">
                {SITE.referralCode}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <CTAButton size="lg" trackingLabel="home-bottom-cta" />
              <span className="text-center text-xs text-muted">
                Opens rsi.com in a new tab
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
