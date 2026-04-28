import type { Metadata } from 'next'
import { Clock, CheckCircle2, AlertCircle, Calendar } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import NewsletterSignup from '@/components/NewsletterSignup'
import UpdateCard from '@/components/UpdateCard'
import Term from '@/components/Term'
import { UPDATES, FEATURED_UPDATE } from '@/data/updates'
import {
  REFERRAL_BONUS,
  isReferralBonusActive,
} from '@/data/referral-bonus'

// Re-render this page once a day so the referral-bonus chip and card
// auto-shut-off the day after their endsAt without needing a deploy.
export const revalidate = 86400

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
  const bonusActive = isReferralBonusActive()

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
              {bonusActive ? (
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
                  <CheckCircle2 size={14} aria-hidden /> Bonus active: {REFERRAL_BONUS.itemName}
                </span>
              ) : null}
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
                <strong>Alpha 4.7.2 was released on Wednesday 22 April.</strong>{' '}
                It adds close to one hundred new contracts in the Nyx system, a
                recently opened region of space inside the game. The new
                contracts span thirteen job types, including beginner-friendly
                Courier and Delivery Pilot missions. These missions invite new
                players to haul packages between locations and start building a
                career in transport. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21125-Star-Citizen-Alpha-472">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Several of the new Nyx contracts reward blueprints.</strong>{' '}
                Blueprints are in-game recipes used to craft items. They were
                previously unavailable in Nyx. Other mission types now available
                in Nyx include wave-based ship combat assignments,{' '}
                <Term name="Cargo">cargo</Term> recovery work, and missing
                persons investigations. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21125-Star-Citizen-Alpha-472">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Alpha 4.8 testing began on Tuesday 21 April.</strong> The
                first wave goes to a small invited group called{' '}
                <Term name="Evocati">Evocati</Term>. They sign an NDA — a
                non-disclosure agreement, a legal obligation to keep what they
                see private — and are the first outside the development team
                to try new content. <Term name="CIG">Cloud Imperium Games</Term>{' '}
                distributed multiple test builds across the week. (
                <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-8-ptu-patch-notes-1/8786552">
                  Official forum post
                </SourceLink>
                )
              </Bullet>
            </ul>
          </Section>

          <Section title="New ships and vehicles">
            <p>
              No new ships or vehicles were released this week.
            </p>
          </Section>

          <Section title="What's new for new players">
            <p>
              If you are just starting, the new Courier and Delivery Pilot
              missions in Nyx are the most useful change this week. These are
              cargo-hauling contracts with no combat required. Pay is in{' '}
              <Term name="aUEC">aUEC</Term>, the in-game test currency.
            </p>
            <p>
              They require no combat skill and no large ship. They teach you
              flying, navigation, and money-making from day one. Nyx is a
              region of space accessible from{' '}
              <Term name="Stanton">Stanton</Term>, where most new players
              start. (
              <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21125-Star-Citizen-Alpha-472">
                Official RSI blog post
              </SourceLink>
              )
            </p>
          </Section>

          <Section title="What's new for veterans">
            <p>
              <strong>Alpha 4.8 testing introduces two major features.</strong> The
              first is Item Recovery: Vehicle Loadouts. This system lets players
              save and recover their ship&rsquo;s configured parts and weapons
              via <Term name="ASOP">ASOP terminals</Term>. It prevents a known
              bug where ships and components could be duplicated. If a claimed
              vehicle sits unclaimed for a period, its components deactivate
              and must be re-registered before use.
            </p>
            <p>
              The second feature is <strong>Tactical Strike Groups</strong>, a
              new co-operative combat mission type for organised teams. Xenothreat
              — a wave-based invasion event where players defend a station
              against a hostile faction — is also in testing but not yet ready
              for feedback. (
              <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-8-ptu-patch-notes-1/8786552">
                Official forum post
              </SourceLink>
              )
            </p>
          </Section>

          <Section title="Events and community">
            <ul className="space-y-3">
              <Bullet>
                <strong>LVL UP EXPO, Las Vegas</strong> — Cloud Imperium Games
                (CIG) attended from Friday 24 April through Sunday 26 April. The
                event was open to the public. Attendees could play Vanduul Swarm
                — a wave-based combat activity — on specialized hardware from
                Virpil and Tobii. A CLX Gaming PC giveaway offered extra entries
                for cosplay attendees. A Bar Citizen — the community&rsquo;s name for
                an in-person meet-up — was held on Saturday evening. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21137-This-Week-In-Star-Citizen">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Gamebox Festival, Herning, Denmark</strong> — The Danish
                Star Citizen community organised a booth at Gamebox Festival in
                Herning, Denmark on the weekend of 25-26 April. The event was
                open to the public. A Bar Citizen followed on Saturday evening.
                CIG staff attended on both days. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21137-This-Week-In-Star-Citizen">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Captains of Industry — In-game event</strong> — Captains
                of Industry is a month-long in-game celebration of the
                game&rsquo;s industrial careers — hauling,{' '}
                <Term name="Mining">mining</Term>, and{' '}
                <Term name="Salvage">salvage</Term> work. The event runs
                through Monday 27 April 2026 and is open to all paid backers.
                During the event, a selection of{' '}
                <Term name="Cargo">cargo</Term> and industrial ships is
                available for players to try, and themed cosmetic items are
                available in the in-game store. The{' '}
                <Term name="Free Fly">Free Fly</Term> period ran from 9 to 20
                April and has now closed. (
                <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/1/thread/captains-of-industry-2956/8748978">
                  Official forum post
                </SourceLink>
                )
              </Bullet>
            </ul>
          </Section>

          <Section title="Developer news">
            <p>
              The <strong>Roadmap Roundup</strong> is a public update{' '}
              <Term name="CIG">CIG</Term> publishes every two weeks describing
              what features are in development. The edition published on
              Wednesday 22 April confirmed several changes to Alpha
              4.8&rsquo;s development plan. Two items moved to
              &ldquo;Tentative&rdquo; status: the{' '}
              <Term name="FPS">FPS</Term> Weapons Art Refactor and the
              &ldquo;Tailwind&rdquo; Flight Suit. &ldquo;Tentative&rdquo; means
              they might not launch in Alpha 4.8. The Item Recovery: Vehicle
              Loadouts card also shifted to Tentative, though it is actively
              being tested this week. (
              <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21132-Roadmap-Roundup-April-22-2026">
                Official RSI blog post
              </SourceLink>
              )
            </p>
            <p>
              <strong>A new crossbow weapon appeared on the roadmap:</strong> the
              UltiFlex &ldquo;Novia&rdquo; Crossbow, described as a near-silent, high-power
              weapon with significant projectile drop requiring precise aim. It
              remains scheduled for Alpha 4.8. (
              <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21132-Roadmap-Roundup-April-22-2026">
                Official RSI blog post
              </SourceLink>
              )
            </p>
            <p>
              <strong>Ray-traced reflections are in development for Squadron
              42.</strong> On Monday 27 April, a{' '}
              <Term name="CIG">CIG</Term> graphics developer confirmed this on{' '}
              <Term name="Spectrum">Spectrum</Term>. Ray-traced reflections —
              a visual technology for realistic mirror-like surfaces — are
              being developed for{' '}
              <Term name="Squadron 42">Squadron 42</Term> (the game&rsquo;s
              single-player campaign). Performance is the current priority.
              After the single-player version is stable, bringing this feature
              to the online multiplayer world (the{' '}
              <Term name="PU">Persistent Universe</Term>) will require
              additional work. (
              <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/50259/thread/ray-traced-reflections/8798846">
                Official forum post
              </SourceLink>
              )
            </p>
          </Section>

          <Section title="Start with 50,000 UEC">
            <div className="card-surface flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className={`mt-0.5 ${bonusActive ? 'text-emerald-400' : 'text-gold'}`}
                  size={22}
                  aria-hidden
                />
                <div>
                  <p className="text-base font-semibold text-starwhite">
                    {bonusActive ? (
                      <>
                        Bonus <span className="text-emerald-300">ACTIVE</span>:
                        50,000 UEC plus a {REFERRAL_BONUS.itemName}
                      </>
                    ) : (
                      <>The standard new-player reward: 50,000 UEC free</>
                    )}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {bonusActive ? (
                      <>
                        Through{' '}
                        <strong className="text-starwhite">
                          {new Date(REFERRAL_BONUS.endsAt).toLocaleDateString(
                            'en-US',
                            { month: 'long', day: 'numeric', year: 'numeric' },
                          )}
                        </strong>
                        , new accounts that sign up with a{' '}
                        <Term name="Referral Code">referral code</Term> also
                        receive a {REFERRAL_BONUS.itemDescription}: the{' '}
                        <strong className="text-starwhite">
                          {REFERRAL_BONUS.itemName}
                        </strong>
                        . On top of the standard 50,000{' '}
                        <Term name="UEC">UEC</Term>.
                      </>
                    ) : (
                      <>
                        New accounts get 50,000 <Term name="UEC">UEC</Term>{' '}
                        when they sign up with a{' '}
                        <Term name="Referral Code">referral code</Term>. From
                        time to time <Term name="CIG">CIG</Term> announces an
                        extra bonus item — usually a small ship or ground
                        vehicle — on top of the standard reward. We light this
                        card up when that happens.
                      </>
                    )}
                  </p>
                </div>
              </div>
              <CTAButton size="md" trackingLabel="weekly-referral">
                {bonusActive ? 'Claim the bonus' : 'Take the 50K bonus'}
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
            Compiled by Doc_Flanigan for o7citizen.com — Monday 27 April 2026
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
                Use a <Term name="Referral Code">referral code</Term> on signup
                for 50,000 <Term name="UEC">UEC</Term> free.
              </p>
            </div>
            <CTAButton size="lg" trackingLabel="weekly-bottom-cta">
              Try Star Citizen
            </CTAButton>
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
