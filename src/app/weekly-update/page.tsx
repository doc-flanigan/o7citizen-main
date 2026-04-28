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
                <strong><Term name="Stanton">Stanton</Term> Alpha 4.7.2 was released on Wednesday, April 22.</strong>{' '}
                It expands Nyx — a recently opened third star system beyond <Term name="Stanton">Stanton</Term> and <Term name="Pyro">Pyro</Term> — with nearly one hundred new contracts spanning thirteen job types. These include transport runs, combat missions, cargo recovery, resource gathering, and missing-persons cases. Beginner-friendly Courier and Delivery Pilot contracts invite new players to haul packages and start building a career. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21125-Star-Citizen-Alpha-472">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Some Nyx contracts reward blueprints.</strong>{' '}
                Blueprints are in-game recipes used to craft equipment. Completing these contracts is valuable for both new players learning the game and veterans hunting crafting materials. <Term name="CIG">CIG</Term> noted that some courier missions are currently unavailable due to a known issue being addressed. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21125-Star-Citizen-Alpha-472">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Alpha 4.8 testing began this week.</strong> The first wave goes to a small invited group called <Term name="EPTU">Evocati</Term> testers. They sign an NDA — a non-disclosure agreement — and are the first outside the development team to try new content. <Term name="CIG">CIG</Term> distributed multiple test builds across the week. (
                <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-8-ptu-patch-notes-1/8786552">
                  Official forum post
                </SourceLink>
                )
              </Bullet>
            </ul>
          </Section>

          <Section title="New ships and vehicles">
            <p>
              <strong>The Aegis Hammerhead is receiving a gold standard pass.</strong>{' '}
              A gold standard pass means a full visual and functional overhaul to bring it in line with the game&rsquo;s current quality bar. The Hammerhead is a large, heavily armed gunship with six crewed weapon turrets designed to protect a fleet from smaller attacking ships. This work is confirmed for Alpha 4.8. (
              <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21132-Roadmap-Roundup-April-22-2026">
                Official RSI blog post
              </SourceLink>
              )
            </p>
            <p>
              <strong>The Drake <Term name="Caterpillar">Caterpillar</Term> gains a new ownership mechanic in Alpha 4.8.</strong>{' '}
              The Vehicle Command Module introduces a new way to fly the large cargo hauler: without a small docked command ship attached, the <Term name="Caterpillar">Caterpillar</Term> cannot be piloted at all. The smaller ship connects and transfers navigation control to the larger vessel. (
              <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-8-ptu-patch-notes-2/8793999">
                Official forum post
              </SourceLink>
              )
            </p>
          </Section>

          <Section title="What's new for new players">
            <p>
              If you are just starting, the ninety-odd new contracts added to Nyx are your biggest break this week. Courier and Delivery Pilot missions are beginner-friendly transport work with no combat required. Accept a job from the Contract Manager on your <Term name="mobiGlas">mobiGlas</Term>, fly to a pickup location, collect a package, and deliver it to the marked destination for payment in <Term name="aUEC">aUEC</Term>, the in-game test currency.
            </p>
            <p>
              These missions require no combat skill and no large ship. They teach you flying, navigation, and money-making from day one. Nyx is a region of space now accessible from <Term name="Stanton">Stanton</Term>, where most new players start. (
              <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21125-Star-Citizen-Alpha-472">
                Official RSI blog post
              </SourceLink>
              )
            </p>
          </Section>

          <Section title="What's new for veterans">
            <p>
              <strong>Tactical Strike Groups is a new co-operative combat mission now in Alpha 4.8 testing.</strong>{' '}
              It is designed for organized groups of seven or more ships attacking a fortified asteroid base in Nyx. Different phases require different ship sizes and combat roles — a smaller escort fighter handles different objectives than a large gunship, rewarding balanced mixed fleets. The mission culminates in an attack on an <Term name="Idris">Idris</Term>-class frigate controlled by hostile forces. (
              <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-8-ptu-patch-notes-1/8786552">
                Official forum post
              </SourceLink>
              )
            </p>
            <p>
              <strong>Xenothreat is returning in Alpha 4.8 testing.</strong>{' '}
              This recurring faction event lets players take five concurrent mercenary contracts: four completable alone or in small groups, and a fifth — an assault on a Xenothreat-controlled <Term name="Idris">Idris</Term> frigate — designed for ten or more coordinated players. Completing contracts earns progress on shared reward tracks giving out blueprints at milestones. (
              <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-8-ptu-patch-notes-1/8786552">
                Official forum post
              </SourceLink>
              )
            </p>
          </Section>

          <Section title="Events and community">
            <ul className="space-y-3">
              <Bullet>
                <strong>CLX Gaming PC Giveaway (open now, ends May 4)</strong> — <Term name="CIG">CIG</Term> partnered with hardware manufacturer CLX to run a giveaway open worldwide. Five winners receive an in-game package including an <Term name="Aurora">Aurora</Term> Mk II with <Term name="LTI">Lifetime Insurance</Term>. The grand prize winner also gets a physical CLX gaming PC. The giveaway runs until May 4, 2026 at 11:59 AM <abbr title="Eastern Daylight Time">EDT</abbr>. (
                <SourceLink href="https://robertsspaceindustries.com/comm-link/transmission/21104-CLX-Gaming-PC-Giveaway">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>LVL UP EXPO — Las Vegas (April 24–26, now concluded)</strong> — <Term name="CIG">CIG</Term> hosted a booth at LVL UP EXPO at the Las Vegas Convention Center. Attendees could try Star Citizen on hardware from Virpil and Tobii — companies that make flight sticks and eye-tracking devices. The event included cosplay competitions, giveaway entries, and a Bar Citizen — the community&rsquo;s name for an in-person meet-up — on Saturday evening. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21144-This-Week-In-Star-Citizen">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Bar Citizen — Xi&rsquo;an, China (Saturday, May 2)</strong> — A community meet-up is scheduled for Saturday, May 2 at the Gaoxin International Conference Center in Xi&rsquo;an, China. <Term name="CIG">CIG</Term> staff will be present. The event carries a theme of friendly meeting between the human <Term name="UEE">UEE</Term> and the Xi&rsquo;an alien civilisation — two in-fiction factions. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21144-This-Week-In-Star-Citizen">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>XGR Divisions Racing (Sunday, April 27)</strong> — XGR Divisions is a player-run racing series. This Sunday&rsquo;s race on the New Babbage City Tour track on <Term name="microTech">microTech</Term>, a frozen tundra planet, uses the <Term name="Origin">Origin</Term> 350R — a single-seat racing ship. Signups are open to paid backers. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21144-This-Week-In-Star-Citizen">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
            </ul>
          </Section>

          <Section title="Developer news">
            <p>
              <strong>Ray tracing is in development for <Term name="Squadron 42">Squadron 42</Term>.</strong>{' '}
              A <Term name="CIG">CIG</Term> graphics engineer confirmed this on <Term name="Spectrum">Spectrum</Term>. Ray-traced global illumination — a visual technology simulating realistic light bouncing — is being developed first for <Term name="Squadron 42">Squadron 42</Term>, the game&rsquo;s single-player campaign. After stabilizing there, bringing it to the online multiplayer world will require additional work. Reflections on metallic and opaque surfaces will use ray tracing in the high-spec version; transparent surfaces like water and glass will use an older technique due to performance constraints. (
              <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/50259/thread/ray-traced-reflections/8798846">
                Official forum post
              </SourceLink>
              )
            </p>
            <p>
              <strong>The New Flight Model continues development.</strong>{' '}
              A developer on the flight model team confirmed that distributing power to engines will affect ship performance in the redesigned system. Even at minimum power, a ship remains fully flyable — the performance difference between minimum and maximum power sits at roughly ten to fifteen percent depending on the ship. The model has not yet been released publicly. (
              <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/50259/thread/can-we-combine-acceleration-limiter-and-engine-pip/8780197">
                Official forum post
              </SourceLink>
              )
            </p>
            <p>
              <strong>Three Alpha 4.8 items moved to Tentative status.</strong>{' '}
              The Roadmap Roundup published April 22 marked the <Term name="FPS">FPS</Term> Weapons Art Refactor, the Tailwind Flight Suit, and Vehicle Loadout recovery as Tentative — meaning the team is working on them but not committing them to Alpha 4.8. (
              <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21132-Roadmap-Roundup-April-22-2026">
                Official RSI blog post
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
            Compiled by sc-news for o7citizen.com — Monday 28 April 2026
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
