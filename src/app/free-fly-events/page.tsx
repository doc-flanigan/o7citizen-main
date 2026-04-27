import type { Metadata } from 'next'
import { Calendar, Clock, AlertCircle, Plane, Download, Wallet } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import NewsletterSignup from '@/components/NewsletterSignup'
import Term from '@/components/Term'

export const metadata: Metadata = {
  title: 'Star Citizen Free Fly Events — Play Free, No Purchase Needed',
  description:
    "Star Citizen Free Fly events let you download and play the entire game free for a limited time. Track every upcoming Free Fly window, what ships are flyable, and how to make the most of it.",
  alternates: { canonical: '/free-fly-events' },
}

const HISTORY = [
  { date: 'Nov 2025', name: 'IAE 2025 Free Fly', length: '12 days', ships: 'Every ship in the game' },
  { date: 'May 2025', name: 'Invictus Launch Week', length: '10 days', ships: 'All military ships flyable' },
  { date: 'Mar 2025', name: 'Spring Free Fly', length: '7 days', ships: 'Starter + popular trade ships' },
  { date: 'Nov 2024', name: 'IAE 2024', length: '14 days', ships: 'Manufacturer-of-the-day rotation' },
  { date: 'May 2024', name: 'Invictus 2024', length: '10 days', ships: 'Combat-focused selection' },
]

export default function FreeFlyPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/30 pb-16 pt-32 sm:pt-40">
          <div className="container-wide">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Free Fly Events
            </p>
            <h1 className="heading-display text-4xl sm:text-5xl">
              Star Citizen, free for a week.{' '}
              <span className="text-gold-gradient">No purchase needed.</span>
            </h1>
            <p className="mt-5 max-w-3xl text-base text-muted">
              Several times a year, <Term name="CIG">Cloud Imperium</Term>{' '}
              opens Star Citizen up for free. Download the full game, fly real
              ships, explore <Term name="the 'Verse">the &lsquo;Verse</Term>{' '}
              — no <Term name="Pledge">pledge</Term> required. This page tracks
              every <Term name="Free Fly">Free Fly</Term> window, past and
              future.
            </p>
          </div>
        </header>

        {/* What is a Free Fly */}
        <section className="border-b border-white/5 py-20">
          <div className="container-wide">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="card-surface p-6">
                <Download className="mb-4 text-gold" size={28} aria-hidden />
                <h2 className="heading-display text-xl">What it is</h2>
                <p className="mt-3 text-sm leading-relaxed text-starwhite/85">
                  A promotional window — usually 5 to 14 days — where the full
                  Star Citizen alpha is downloadable and playable for free.
                  You make a free <Term name="RSI">RSI</Term> account, download
                  the launcher, and start flying.
                </p>
              </div>
              <div className="card-surface p-6">
                <Plane className="mb-4 text-gold" size={28} aria-hidden />
                <h2 className="heading-display text-xl">What you can do</h2>
                <p className="mt-3 text-sm leading-relaxed text-starwhite/85">
                  Fly the loaner ships of the day, run missions, explore four
                  planets and <Term name="Pyro">Pyro</Term>, dogfight,{' '}
                  <Term name="Mining">mine</Term>,{' '}
                  <Term name="Salvage">salvage</Term>, trade. The whole game is
                  open. Your character is{' '}
                  <Term name="Wipe">wiped</Term> after the event ends.
                </p>
              </div>
              <div className="card-surface p-6">
                <Wallet className="mb-4 text-gold" size={28} aria-hidden />
                <h2 className="heading-display text-xl">What it costs</h2>
                <p className="mt-3 text-sm leading-relaxed text-starwhite/85">
                  Nothing. If you decide to keep playing after the event, the
                  cheapest game package is around $45 USD. Use a{' '}
                  <Term name="Referral Code">referral code</Term> on signup
                  for 50,000 <Term name="UEC">UEC</Term> free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current event banner */}
        <section className="border-b border-white/5 bg-gradient-to-br from-navyLight via-navy to-navyLight py-16">
          <div className="container-wide">
            <div className="card-surface relative overflow-hidden p-8 sm:p-10">
              <div className="absolute right-0 top-0 h-48 w-48 -translate-y-12 translate-x-16 rounded-full bg-gold/15 blur-3xl" />
              <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-300">
                    <Clock size={12} aria-hidden /> Current Status
                  </span>
                  <h2 className="heading-display mt-3 text-3xl">
                    No active Free Fly right now.
                  </h2>
                  <p className="mt-3 max-w-xl text-sm text-muted">
                    The next confirmed window is Invictus Launch Week, expected
                    in late May. We&rsquo;ll update this banner the moment it&rsquo;s
                    official.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <CTAButton variant="ghost" trackingLabel="freefly-newsletter" showIcon={false}>
                    Notify me when it starts
                  </CTAButton>
                  <span className="text-center text-xs text-muted">
                    via the weekly newsletter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming timeline */}
        <section className="border-b border-white/5 py-20">
          <div className="container-wide">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Upcoming
            </p>
            <h2 className="heading-display text-3xl sm:text-4xl">
              The next likely Free Fly windows
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-muted">
              <Term name="CIG">CIG</Term> hasn&rsquo;t officially announced
              these dates, but they follow a predictable annual pattern. Treat
              these as best-guess targets and check back for confirmation.
            </p>

            <ol className="mt-10 space-y-4">
              <TimelineItem
                date="May 2026"
                name="Invictus Launch Week (predicted)"
                detail={
                  <>
                    Annual military-themed event. Combat ships from{' '}
                    <Term name="Aegis">Aegis</Term>,{' '}
                    <Term name="Anvil">Anvil</Term>, and{' '}
                    <Term name="Drake">Drake</Term> typically rotate as
                    flyables. 7–10 days.
                  </>
                }
                badge="Predicted"
              />
              <TimelineItem
                date="Aug 2026"
                name="Foundation Festival (possible)"
                detail={
                  <>
                    Newer summer event focused on industrial gameplay —{' '}
                    <Term name="Mining">mining</Term>,{' '}
                    <Term name="Salvage">salvage</Term>, hauling. Loaner ships
                    often skew industrial.
                  </>
                }
                badge="Possible"
              />
              <TimelineItem
                date="Nov 2026"
                name="IAE 2026 (predicted)"
                detail="The biggest event of the year. Every flyable ship is free for at least one day during the rotation. 12–14 days."
                badge="Predicted"
              />
            </ol>
          </div>
        </section>

        {/* Referral CTA block */}
        <section className="border-b border-white/5 bg-gradient-to-r from-gold/10 via-navyLight to-navy py-16">
          <div className="container-wide flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="heading-display text-2xl sm:text-3xl">
                During Free Fly: use a referral code on signup.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-starwhite/85">
                You can use a <Term name="Referral Code">referral code</Term>{' '}
                <strong>only</strong> on a brand new account. If you create
                your free Star Citizen account during a{' '}
                <Term name="Free Fly">Free Fly</Term> and decide to{' '}
                <Term name="Pledge">pledge</Term> later, the 50,000{' '}
                <Term name="UEC">UEC</Term> bonus carries over to your real
                character. Don&rsquo;t skip this step.
              </p>
            </div>
            <CTAButton size="lg" trackingLabel="freefly-cta" />
          </div>
        </section>

        {/* History table */}
        <section className="border-b border-white/5 py-20">
          <div className="container-wide">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              History
            </p>
            <h2 className="heading-display text-3xl sm:text-4xl">
              Recent Free Fly events
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-muted">
              <Term name="CIG">CIG</Term> runs{' '}
              <Term name="Free Fly">Free Fly</Term> events two to four times a
              year. The table below shows recent windows so you can predict
              how long the next one might run.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full text-sm">
                <thead className="bg-navyLight/60 text-left text-xs uppercase tracking-wider text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">When</th>
                    <th className="px-4 py-3 font-semibold">Event</th>
                    <th className="px-4 py-3 font-semibold">Length</th>
                    <th className="px-4 py-3 font-semibold">Ships flyable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {HISTORY.map((row) => (
                    <tr key={row.date} className="hover:bg-navyLight/30">
                      <td className="px-4 py-4 font-mono text-gold">{row.date}</td>
                      <td className="px-4 py-4 font-medium text-starwhite">{row.name}</td>
                      <td className="px-4 py-4 text-starwhite/80">{row.length}</td>
                      <td className="px-4 py-4 text-starwhite/80">{row.ships}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 py-16">
          <div className="container-narrow">
            <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-0.5 text-yellow-300" size={20} aria-hidden />
                <div className="text-sm text-starwhite/90">
                  <strong className="text-yellow-300">Heads up:</strong>{' '}
                  <Term name="Free Fly">Free Fly</Term> servers get hammered.
                  Expect queue times, occasional crashes, and slightly degraded
                  performance. It&rsquo;s the best way to try the game, but
                  it&rsquo;s not a representative experience of normal weeks.
                  Stick around past the event for a fairer impression.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-narrow">
            <NewsletterSignup
              variant="full"
              heading="Never miss a Free Fly window"
              subheading="One email when an event starts, one when it ends. Plus the loaner-ship rotation. That's it."
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function TimelineItem({
  date,
  name,
  detail,
  badge,
}: {
  date: string
  name: string
  detail: React.ReactNode
  badge: string
}) {
  return (
    <li className="card-surface flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:gap-6">
      <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-start">
        <Calendar className="text-gold" size={22} aria-hidden />
        <div>
          <div className="font-mono text-base font-semibold text-gold">{date}</div>
          <span className="mt-1 inline-block rounded-full bg-navyLight px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
            {badge}
          </span>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="heading-display text-lg">{name}</h3>
        <p className="mt-1.5 text-sm text-starwhite/85">{detail}</p>
      </div>
    </li>
  )
}
