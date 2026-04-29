import type { Metadata } from 'next'
import Link from 'next/link'
import { Compass } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'

export const metadata: Metadata = {
  title:
    'Day One Citizen — Your First Hour in Star Citizen',
  description:
    "Star Citizen, plain English, from before you've bought the game to your first flight. System specs, pledge vs purchase, picking a starter package, the RSI launcher, key binds, getting around your first city, taking off.",
  alternates: { canonical: '/day-one-citizen' },
  openGraph: {
    title: 'Day One Citizen — Your First Hour in Star Citizen',
    description:
      "From 'should I even buy this?' through your first take-off — every step a brand-new player needs.",
    url: '/day-one-citizen',
    type: 'article',
  },
  twitter: {
    title: 'Day One Citizen — Your First Hour in Star Citizen',
    description:
      "From 'should I even buy this?' through your first take-off.",
    card: 'summary_large_image',
  },
}

type Section = {
  id: string
  number: string
  title: string
  stub: React.ReactNode
}

const SECTIONS: Section[] = [
  {
    id: 'worth-buying',
    number: '01',
    title: 'Is Star Citizen worth buying?',
    stub: (
      <>
        Star Citizen is in alpha and has been since 2012. It is ambitious,
        beautiful, and sometimes broken. This section covers what you actually
        get for the entry price today, what you don&rsquo;t, and the questions
        worth asking yourself before you pledge.
      </>
    ),
  },
  {
    id: 'system-specs',
    number: '02',
    title: 'System specs and hardware',
    stub: (
      <>
        Star Citizen is a demanding PC game. This section lists the official
        minimum and recommended specs, what you actually want for a smooth
        experience, and the hardware traps to avoid (low RAM, slow drives,
        outdated GPUs).
      </>
    ),
  },
  {
    id: 'buying-the-game',
    number: '03',
    title: 'How to actually buy the game',
    stub: (
      <>
        You buy through{' '}
        <Term name="RSI">robertsspaceindustries.com</Term> — not Steam, not the
        Epic store, not anywhere else. This section walks through creating an
        account, applying a <Term name="Referral Code">referral code</Term>{' '}
        for the 50,000 <Term name="UEC">UEC</Term> bonus, and finishing
        checkout.
      </>
    ),
  },
  {
    id: 'pledge-vs-purchase',
    number: '04',
    title: 'Pledge vs purchase — what&rsquo;s the difference?',
    stub: (
      <>
        Star Citizen is crowdfunded, so the community calls buying a game
        package a <Term name="Pledge">pledge</Term> rather than a purchase.
        Functionally it&rsquo;s the same — money moves, you get a ship and
        access — but the wording matters when you read forum posts.
      </>
    ),
  },
  {
    id: 'starter-package',
    number: '05',
    title: 'Which starter package should you buy?',
    stub: (
      <>
        The cheapest packages start around $45 and include a small ship plus
        access to both Star Citizen and{' '}
        <Term name="Squadron 42">Squadron 42</Term>. This section compares the
        common starter ships (Aurora MR, Mustang Alpha) and explains which is
        the best fit for a first-time player.
      </>
    ),
  },
  {
    id: 'install',
    number: '06',
    title: 'Installing the game',
    stub: (
      <>
        After you&rsquo;ve pledged, you download a small installer from{' '}
        robertsspaceindustries.com that pulls down the actual launcher. This
        section covers the install paths, disk space requirements (90+ GB),
        and the firewall prompts you&rsquo;ll see along the way.
      </>
    ),
  },
  {
    id: 'rsi-launcher',
    number: '07',
    title: 'Using the RSI launcher',
    stub: (
      <>
        The RSI launcher is what you open every time you want to play. This
        section explains the difference between the Live build, the{' '}
        <Term name="PTU">PTU</Term> build, and the{' '}
        <Term name="EPTU">EPTU</Term> build — and how to switch between them.
      </>
    ),
  },
  {
    id: 'first-launch',
    number: '08',
    title: 'Launching the game for the first time',
    stub: (
      <>
        Click <strong>Launch</strong>, wait through the load screens, and
        you&rsquo;ll land in your character&rsquo;s personal hab room — a tiny
        in-game apartment in one of four major cities. This section explains
        which character options matter on day one and which can be deferred.
      </>
    ),
  },
  {
    id: 'keybinds',
    number: '09',
    title: 'Key binds you need to know',
    stub: (
      <>
        Star Citizen has hundreds of key binds. You only need about a dozen on
        day one: open mobiGlas, open inventory, interact, sprint, summon ship,
        flight controls. This section lists them and points to where the full
        binding map lives in the options menu.
      </>
    ),
  },
  {
    id: 'first-day',
    number: '10',
    title: 'Your first day in the &lsquo;Verse',
    stub: (
      <>
        What does day one actually look like? You wake up in your hab room.
        You walk outside. You see other players. You panic, briefly. This
        section is a calm, ordered list of the first ten things to do — and
        what to ignore until later.
      </>
    ),
  },
  {
    id: 'getting-around',
    number: '11',
    title: 'Getting from your hab to the hangar',
    stub: (
      <>
        Your hab is in a city. Your ship is in a hangar at the spaceport. The
        hangar is reached by tram, train, or shuttle depending on the city.
        This section walks the route in each of the four major cities so
        you&rsquo;re never lost on day one.
      </>
    ),
  },
  {
    id: 'first-flight',
    number: '12',
    title: 'Your first flight',
    stub: (
      <>
        Power on. Strap in. Lift the landing gear. Burn for orbit. This
        section covers the take-off sequence, basic flight controls, and how
        not to crash into the hangar door on the way out.
      </>
    ),
  },
]

export default function DayOneCitizenPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <header className="border-b border-white/5 bg-gradient-to-b from-navy via-navy to-navyLight/40 pb-16 pt-32 sm:pt-40">
          <div className="container-narrow">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Compass size={14} aria-hidden /> Day One Citizen
            </p>
            <h1 className="heading-display text-4xl sm:text-5xl">
              Your first hour in <span className="text-gold-gradient">the &lsquo;Verse</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted">
              Star Citizen, plain English, in order. From &laquo;should I even buy
              this?&raquo; through your first take-off. No jargon, no
              gatekeeping, no assumptions about what you already know.
            </p>
            <p className="mt-4 max-w-2xl text-sm text-muted">
              Twelve short sections, written for someone who has never opened
              the launcher. Skip ahead via the table of contents, or read end
              to end in about thirty minutes.
            </p>
          </div>
        </header>

        <div className="container-wide grid gap-12 py-16 lg:grid-cols-[260px,1fr]">
          {/* Table of contents — sticky on desktop, accordion on mobile */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            {/* Mobile: collapsible */}
            <details className="lg:hidden">
              <summary className="cursor-pointer rounded-2xl border border-white/10 bg-navyLight/40 px-5 py-3 text-sm font-semibold text-starwhite hover:border-gold/40 hover:text-gold">
                Table of contents (12 sections)
              </summary>
              <ol className="mt-3 space-y-2 rounded-2xl border border-white/5 bg-navyLight/20 p-4 text-sm">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex items-baseline gap-3 text-starwhite/80 hover:text-gold"
                    >
                      <span className="font-mono text-xs text-gold">{s.number}</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </details>
            {/* Desktop: always-visible side rail */}
            <nav
              className="hidden lg:block"
              aria-label="Table of contents"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                On this page
              </p>
              <ol className="space-y-2 text-sm">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex items-baseline gap-3 text-starwhite/80 hover:text-gold"
                    >
                      <span className="font-mono text-xs text-gold">{s.number}</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="space-y-14">
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <p className="mb-2 font-mono text-xs text-gold">
                  Section {s.number}
                </p>
                <h2 className="heading-display text-2xl sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-starwhite/85">
                  {s.stub}
                </p>
                <p className="mt-3 text-xs italic text-muted">
                  Full guide coming soon.
                </p>
              </section>
            ))}

            <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8">
              <h2 className="heading-display text-2xl">
                Want this in your inbox as it&rsquo;s written?
              </h2>
              <p className="mt-3 text-sm text-starwhite/85">
                Each section ships as it&rsquo;s ready. The{' '}
                <Link href="/glossary" className="text-gold underline-offset-4 hover:underline">
                  glossary
                </Link>{' '}
                already covers most of the terms you&rsquo;ll meet along the
                way — start there if you&rsquo;re curious.
              </p>
              <div className="mt-6">
                <CTAButton size="lg" trackingLabel="day-one-bottom-cta">
                  Use my referral code
                </CTAButton>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
