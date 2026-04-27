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
                <strong>Alpha 4.7.2 went live</strong> with nearly 100 new jobs
                and activities in the Nyx star system. Beginner-friendly
                delivery and courier missions are back, and some of them now
                pay out crafting blueprints. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21125-Star-Citizen-Alpha-472">
                  RSI Comm-Link
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Alpha 4.8 Evocati testing started</strong>. Evocati is
                a small invited group of NDA testers — the very first hands on
                a new build. Two patch-note rounds dropped on Friday and
                Sunday. (
                <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-8-ptu-patch-notes-3/8797409">
                  Spectrum patch notes
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Saved ship loadouts</strong> arrive in 4.8 as
                &laquo;Item Recovery: Vehicle Loadouts.&raquo; You can now save
                a snapshot of your ship&rsquo;s configured weapons and
                components at an ASOP terminal, so insurance claims restore
                the personalised setup for an in-game fee. (
                <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-8-ptu-patch-notes-2/8793999">
                  Spectrum
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Known issue:</strong> floating in zero-gravity outside
                a ship (called EVA) is currently broken on mouse in 4.8
                Evocati. Controller works.
              </Bullet>
            </ul>
          </Section>

          <Section title="New ships and vehicles">
            <p>
              The 4.8 test build introduces the <strong>Vehicle Command
              Module</strong>, debuting on the Drake Caterpillar. A smaller
              ship physically docks with the Caterpillar, and after a brief
              linking process the smaller pilot then controls both vessels as
              one unit. Without a docked command ship, the Caterpillar
              cannot be flown at all under this system. New keybind:{' '}
              <kbd className="rounded border border-white/10 bg-navy px-1.5 py-0.5 text-xs">Right Alt + N</kbd>{' '}
              docks and undocks. (
              <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-8-ptu-patch-notes-2/8793996">
                Spectrum
              </SourceLink>
              )
            </p>
            <p>
              The Wednesday <strong>Roadmap Roundup</strong> moved a handful
              of 4.8 items to <em>Tentative</em> — meaning still planned, but
              the version they ship in may slip. The list: a silent crossbow
              called the UltiFlex &laquo;Novia,&raquo; the &laquo;Tailwind&raquo;
              flight suit, and visual upgrades to the Deadrig Shotgun and
              several Kastak Arms firearms. (
              <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21132-Roadmap-Roundup-April-22-2026">
                RSI Comm-Link
              </SourceLink>
              )
            </p>
          </Section>

          <Section title="What's new for new players">
            <p>
              Pack 2 of the Nyx mission content is out and it&rsquo;s
              specifically beginner-shaped: courier and delivery contracts
              that pay you to fly cargo from one location to another. No
              combat skill required, you can do them solo, and a few of them
              drop blueprints — in-game recipes you can use to craft items
              later. If you&rsquo;ve been waiting for a low-pressure way to
              start earning credits, this is the week.
            </p>
          </Section>

          <Section title="What's new for veterans">
            <p>
              Two big ones in the 4.8 Evocati build. First, the cooperative{' '}
              <strong>Xenothreat</strong> event has returned to Stanton —
              five simultaneous contracts, a 10-player Idris assault as the
              capstone, and a reward track that drops craftable blueprints
              at milestones. Second, the saved-loadout system finally closes
              a long-running insurance claim duplication exploit, per CIG
              staff member Nicou&rsquo;s reply on Spectrum. Both are Evocati-only
              for now; wider PTU access is planned &laquo;shortly.&raquo;
            </p>
          </Section>

          <Section title="Events and community">
            <ul className="space-y-3">
              <Bullet>
                <strong>LVL UP EXPO, Las Vegas (Apr 24–26)</strong> — CIG was
                on the show floor with AMD, CLX Gaming, Virpil and Tobii.
                Players got hands-on with Vanduul Swarm and a Bar Citizen
                meetup followed Saturday night. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21137-This-Week-In-Star-Citizen">
                  This Week in Star Citizen
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Gamebox Festival, Herning, Denmark</strong> — the
                Danish community ran a booth and Bar Citizen the same
                weekend, with some CIG developers attending.
              </Bullet>
              <Bullet>
                <strong>Org spotlight call</strong> — CIG is collecting
                player-formed organisations to feature alongside 4.8&rsquo;s
                new Tactical Strike Groups feature. Submit a logo and short
                description to{' '}
                <a className="text-gold underline-offset-4 hover:underline" href="mailto:communityteam@cloudimperiumgames.com">
                  communityteam@cloudimperiumgames.com
                </a>{' '}
                by <strong>Wednesday April 30, 2026</strong>. (
                <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/1/thread/alpha-4-8-promote-your-organization/8754401">
                  Spectrum
                </SourceLink>
                )
              </Bullet>
            </ul>
          </Section>

          <Section title="Developer news">
            <p>
              The Roadmap Roundup confirmed Pack 2 of the Nyx missions is
              now flagged <em>Released</em> on the public roadmap. CIG&rsquo;s
              Nicou said wider PTU access for the saved-loadout feature is
              planned &laquo;shortly&raquo; after Evocati. Separately, flight
              controls developer YogiKlatt acknowledged on Spectrum that the
              high-zoom mouse sensitivity in <strong>Precision Targeting
              Mode</strong> needs work, and said the team will look at
              applying the existing turret-pointer scaling logic to it — no
              timing committed. (
              <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/50259/thread/can-we-combine-acceleration-limiter-and-engine-pip/8795829">
                Spectrum reply
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
