import type { Metadata } from 'next'
import { Clock, CheckCircle2, AlertCircle, Calendar } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import NewsletterSignup from '@/components/NewsletterSignup'
import UpdateCard from '@/components/UpdateCard'
import { UPDATES, FEATURED_UPDATE } from '@/data/updates'

export const metadata: Metadata = {
  title: 'Star Citizen Weekly Update — Plain English in 5 Minutes',
  description:
    "Every Friday: a 5-minute, plain-English summary of what changed in Star Citizen. Patch notes translated, events flagged, no hype. Built by Doc_Flanigan.",
  alternates: { canonical: '/weekly-update' },
}

export default function WeeklyUpdatePage() {
  const dateLabel = new Date(FEATURED_UPDATE.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <header className="border-b border-white/5 bg-gradient-to-b from-navy via-navy to-navyLight/40 pb-16 pt-32 sm:pt-40">
          <div className="container-narrow">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Weekly Update · {dateLabel}
            </p>
            <h1 className="heading-display text-4xl sm:text-5xl">
              This week in the &lsquo;Verse.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted">
              Five-minute, plain-English summary of what changed in Star
              Citizen — patch notes translated, events flagged, no hype, no
              doomposting.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
                <Clock size={14} aria-hidden /> {FEATURED_UPDATE.readMinutes ?? 5}-minute read
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
                <CheckCircle2 size={14} aria-hidden /> Referral bonus active
              </span>
              {FEATURED_UPDATE.tag ? (
                <span className="rounded-full bg-navyLight px-4 py-1.5 text-xs text-starwhite/80">
                  {FEATURED_UPDATE.tag}
                </span>
              ) : null}
            </div>
          </div>
        </header>

        <article className="container-narrow py-16">
          <h2 className="heading-display text-3xl">
            {FEATURED_UPDATE.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-starwhite/85">
            {FEATURED_UPDATE.summary}
          </p>

          <Section title="Patch Notes Summary (plain English)">
            <ul className="space-y-3">
              <Bullet>
                Pyro salvage payouts went up about 18% across the board.
                Reclaimer and Vulture pilots: it&rsquo;s your week.
              </Bullet>
              <Bullet>
                Drake Cutter Rampage hit hangar-ready status. Flyable test on
                EPTU &laquo;within weeks,&raquo; per CIG.
              </Bullet>
              <Bullet>
                Quantum drive recalibration after a server crash now correctly
                returns full fuel. (Yes, finally.)
              </Bullet>
              <Bullet>
                ASOP terminal stutter on busy stations is mitigated. Not fixed
                — mitigated. Use a less-trafficked station if you can.
              </Bullet>
            </ul>
          </Section>

          <Section title="What's new for new players">
            <p>
              The new player tutorial got a lighting pass and clearer
              objectives — you&rsquo;ll spend less time wondering where the
              mission marker went. Tutorial completion now grants a guaranteed
              first-bounty mission ping on entry to Stanton, which is a much
              gentler on-ramp than &laquo;here&rsquo;s a planet, good luck.&raquo;
            </p>
          </Section>

          <Section title="What's new for veterans">
            <p>
              EPTU has the Aegis Idris in a controlled flight test for select
              Concierge backers. Expect leaks, expect bugs, and don&rsquo;t
              expect this to land in live for a while. Meanwhile, the Pyro mining
              yield buff persists into 4.0.3 — keep an eye on Quantanium
              prices, the markets are still digesting the change.
            </p>
          </Section>

          <Section title="Upcoming events this week">
            <ul className="space-y-3">
              <Bullet>
                <strong>Tuesday</strong> — community bounty hunting night,
                hosted by the Anvil Discord. New players welcome.
              </Bullet>
              <Bullet>
                <strong>Friday</strong> — Inside Star Citizen drops at 8AM
                Pacific. Topic: &laquo;Engineering gameplay deep dive.&raquo;
              </Bullet>
              <Bullet>
                <strong>Saturday</strong> — rumored Free Fly window opens.
                Watch <a href="https://freeflyevent.com" className="text-gold underline-offset-4 hover:underline">freeflyevent.com</a> for confirmation.
              </Bullet>
            </ul>
          </Section>

          <Section title="Referral bonus status">
            <div className="card-surface flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 text-emerald-400" size={22} aria-hidden />
                <div>
                  <p className="text-base font-semibold text-starwhite">
                    Referral bonus is currently <span className="text-emerald-300">ACTIVE</span>
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    New accounts get 50,000 UEC free when using a referral
                    code. CIG has not announced an end date for this promo.
                  </p>
                </div>
              </div>
              <CTAButton size="md" trackingLabel="weekly-referral">
                Claim 50,000 UEC
              </CTAButton>
            </div>
          </Section>

          <div className="mt-12 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 text-yellow-300" size={20} aria-hidden />
              <p className="text-sm text-starwhite/90">
                <strong className="text-yellow-300">Heads up:</strong> Star
                Citizen is in active alpha development. Patch notes change
                weekly and bugs are real. Always check in-game and on
                spectrum.robertsspaceindustries.com before assuming a feature
                works as described.
              </p>
            </div>
          </div>
        </article>

        {/* Archive */}
        <section
          id="archive"
          className="border-t border-white/5 bg-navyLight/20 py-20"
        >
          <div className="container-wide">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Archive
                </p>
                <h2 className="heading-display text-3xl sm:text-4xl">
                  Previous weeks
                </h2>
              </div>
              <Calendar className="hidden text-muted sm:block" size={36} aria-hidden />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {UPDATES.slice(1).map((u) => (
                <UpdateCard key={u.slug} update={u} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 py-20">
          <div className="container-narrow">
            <NewsletterSignup
              variant="full"
              heading="Never miss a weekly update"
              subheading="Friday morning, in your inbox. 5 minutes of the 'Verse, no jargon. Unsubscribe anytime."
            />
          </div>
        </section>

        <section className="border-t border-white/5 bg-gradient-to-r from-navyLight to-navy py-16">
          <div className="container-narrow flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="heading-display text-2xl">
                Reading along but haven&rsquo;t pledged yet?
              </h3>
              <p className="mt-2 text-sm text-muted">
                Use a referral code on signup for 50,000 UEC free.
              </p>
            </div>
            <CTAButton size="lg" trackingLabel="weekly-bottom-cta" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h3 className="heading-display text-xl text-gold">{title}</h3>
      <div className="mt-4 space-y-3 text-base leading-relaxed text-starwhite/85">
        {children}
      </div>
    </section>
  )
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-5">
      <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-gold" />
      <span>{children}</span>
    </li>
  )
}
