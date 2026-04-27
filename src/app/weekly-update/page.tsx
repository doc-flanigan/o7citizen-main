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

  const archive = UPDATES.slice(1)

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

          <Section title="Game updates">
            <ul className="space-y-3">
              <Bullet>
                <strong>Alpha 4.7.2 was released</strong> with nearly one
                hundred new jobs in the Nyx star system — a region of space
                inside the game. Beginner-friendly delivery and courier
                missions are back. A few of them now reward you with
                blueprints, which are in-game recipes you can use to craft
                items later. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21125-Star-Citizen-Alpha-472">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Testing began on the next major update, Alpha
                4.8.</strong> The first wave goes to a small invited group
                called Evocati (pronounced evo-CAH-tee). They sign a
                non-disclosure agreement and try the build before anyone
                else. Cloud Imperium Games — usually shortened to CIG —
                published two rounds of notes describing what changed in the
                test build, on Friday and Sunday. (
                <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-8-ptu-patch-notes-3/8797409">
                  Official forum post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Alpha 4.8 also brings saved ship configurations.</strong>{' '}
                In Star Citizen, you can fit your spaceship with different
                weapons, shields and parts — collectively called a loadout.
                The new feature lets you save a snapshot of that loadout at
                an in-game kiosk called an ASOP terminal, where you summon
                your ships. If your ship is destroyed, your insurance claim
                will then restore the same personalised setup, for an
                in-game fee. (
                <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-8-ptu-patch-notes-2/8793999">
                  Official forum post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Known issue in the test build:</strong> floating in
                zero gravity outside a ship — known as Extra-Vehicular
                Activity, or EVA — is currently broken when using a mouse.
                A game controller still works.
              </Bullet>
            </ul>
          </Section>

          <Section title="New ships and vehicles">
            <p>
              The Alpha 4.8 test build introduces a new feature called the{' '}
              <strong>Vehicle Command Module</strong>. It debuts on a large
              cargo ship called the Drake Caterpillar. The way it works: a
              smaller ship physically docks with the Caterpillar. After a
              brief linking process, the pilot of the smaller ship takes
              control of both vessels as one combined unit. Without a docked
              command ship attached, the Caterpillar cannot be flown at all
              under this system. There is a new keyboard shortcut for
              docking and undocking ships:{' '}
              <kbd className="rounded border border-white/10 bg-navy px-1.5 py-0.5 text-xs">Right Alt + N</kbd>
              . (
              <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-8-ptu-patch-notes-2/8793996">
                Official forum post
              </SourceLink>
              )
            </p>
            <p>
              CIG publishes a public update every two weeks called the{' '}
              <strong>Roadmap Roundup</strong>, which describes what features
              are in development. This Wednesday&rsquo;s edition moved a
              handful of Alpha 4.8 items into a status called{' '}
              <em>Tentative</em>. That means the feature is still being
              built, but the update it actually launches in may shift. The
              list includes a silent crossbow called the UltiFlex &laquo;Novia,&raquo;
              a wearable flight suit called the &laquo;Tailwind,&raquo; and
              visual upgrades to several handheld weapons including the
              Deadrig Shotgun and a number of Kastak Arms firearms. (
              <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21132-Roadmap-Roundup-April-22-2026">
                Official RSI blog post
              </SourceLink>
              )
            </p>
          </Section>

          <Section title="What's new for new players">
            <p>
              The new batch of jobs in the Nyx star system is shaped
              specifically for beginners. They are courier and delivery
              contracts that pay you to fly cargo from one location to
              another. No combat skill is required, you can do them on your
              own, and a few of them reward you with blueprints — in-game
              recipes you can use to craft items later. If you have been
              waiting for a low-pressure way to start earning in-game money,
              this is the week to dive in.
            </p>
          </Section>

          <Section title="What's new for veterans">
            <p>
              Two big arrivals in the Alpha 4.8 test build. First, the
              co-operative event called <strong>Xenothreat</strong> has
              returned. The story setup: an alien-sympathising human faction
              has shown up in the Stanton star system — the main region of
              space in the game — to fight players. The event runs as five
              contracts at once, with a final challenge that requires
              assaulting an enemy capital ship called an Idris. CIG says
              that final stage needs at least ten players co-ordinating
              together. Completing contracts earns progress on a reward
              track, with craftable item recipes given out at milestones.
              Second, the saved-loadout system finally closes a long-running
              insurance bug that let players duplicate components when they
              filed a claim, according to a forum reply from CIG team member
              Nicou. Both features are limited to the Evocati invited group
              for now. Wider access through the Public Test Universe — the
              open test version of the game any player can opt into — is
              planned &laquo;shortly.&raquo;
            </p>
          </Section>

          <Section title="Events and community">
            <ul className="space-y-3">
              <Bullet>
                <strong>LVL UP EXPO, Las Vegas, Friday April 24 through
                Sunday April 26</strong> — Cloud Imperium Games attended in
                person, alongside hardware partners AMD, CLX Gaming, Virpil
                and Tobii. Visitors at the show could try a wave-based space
                combat activity called Vanduul Swarm on high-end gaming
                hardware. A Bar Citizen — the community&rsquo;s name for an
                in-person meet-up at a bar or pub — followed on Saturday
                evening. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21137-This-Week-In-Star-Citizen">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Gamebox Festival, Herning, Denmark</strong> — the
                Danish player community ran their own booth and a Bar
                Citizen meet-up the same weekend, with a few Cloud Imperium
                Games developers attending in person.
              </Bullet>
              <Bullet>
                <strong>Organisation spotlight call</strong> — Cloud
                Imperium Games is collecting player-formed groups to feature
                alongside Alpha 4.8&rsquo;s new Tactical Strike Groups,
                which is a new co-operative combat mission type. In Star
                Citizen, players can form or join organisations, which work
                much like guilds or clans in other online games. Send a logo
                and a short English-language description to{' '}
                <a className="text-gold underline-offset-4 hover:underline" href="mailto:communityteam@cloudimperiumgames.com">
                  communityteam@cloudimperiumgames.com
                </a>{' '}
                by <strong>Wednesday April 30, 2026</strong> to be
                considered. (
                <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/1/thread/alpha-4-8-promote-your-organization/8754401">
                  Official forum post
                </SourceLink>
                )
              </Bullet>
            </ul>
          </Section>

          <Section title="Developer news">
            <p>
              The Roadmap Roundup confirmed that the second batch of Nyx
              jobs is now marked <em>Released</em> on the public roadmap.
              CIG team member Nicou said wider access to the saved-loadout
              feature, through the open Public Test Universe, is planned
              &laquo;shortly&raquo; after the closed Evocati round.
              Separately, a flight-controls developer who goes by YogiKlatt
              replied on the official forum that mouse aiming feels
              unresponsive at high zoom in{' '}
              <strong>Precision Targeting Mode</strong> — the in-cockpit
              weapon-aiming system used inside spacecraft. The developer
              said the team will look into applying an existing scaling
              rule, used in another aiming mode, to fix the issue. No
              timeline was given. (
              <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/50259/thread/can-we-combine-acceleration-limiter-and-engine-pip/8795829">
                Official forum reply
              </SourceLink>
              )
            </p>
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

          <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted">
            Compiled by sc-news for o7citizen.com — Monday 27 April 2026
          </p>
        </article>

        {archive.length > 0 ? (
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
                {archive.map((u) => (
                  <UpdateCard key={u.slug} update={u} />
                ))}
              </div>
            </div>
          </section>
        ) : null}

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

function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gold underline-offset-4 hover:underline"
    >
      {children}
    </a>
  )
}
