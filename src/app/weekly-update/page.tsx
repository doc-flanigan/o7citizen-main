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
                <strong>Alpha 4.7.2 arrived on April 22 with nearly one hundred new missions in Nyx.</strong>{' '}
                Nyx is a recently opened star system, and this update populates it with new work spanning thirteen types of contracts. These include courier runs, delivery jobs, cargo recovery, ship combat waves, salvage operations, and more. Some of these mission types were not previously available in Nyx. Courier and Delivery Pilot contracts are beginner-friendly and require only flying and package delivery — no combat. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21125-Star-Citizen-Alpha-472">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Some Nyx contracts reward blueprints instead of just currency.</strong>{' '}
                Blueprints are in-game recipes used to craft items. Several contracts pay in these recipes rather than purely in <Term name="aUEC">aUEC</Term>, the alpha currency. <Term name="CIG">CIG</Term> noted that some courier missions are currently not showing up correctly and the team is working on a fix. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21125-Star-Citizen-Alpha-472">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Alpha 4.8 <Term name="EPTU">Evocati PTU</Term> testing is underway.</strong> The earliest test wave of the next major update began this week with a small invited group of long-time backers. <Term name="CIG">CIG</Term> distributed multiple test builds, and new features including Tactical Strike Groups — a co-operative combat mission for organized teams — and the return of Xenothreat — a large-scale fleet battle event — are both in testing. (
                <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-8-ptu-patch-notes-2/8793999">
                  Official forum post
                </SourceLink>
                )
              </Bullet>
            </ul>
          </Section>

          <Section title="New ships and vehicles">
            <p>
              <strong>No new ships became flyable this week.</strong> However, the <Term name="Roadmap">roadmap</Term> update from April 22 confirmed that the Drake <Term name="Caterpillar">Caterpillar</Term> — a large modular cargo hauler — is receiving a major gameplay change in Alpha 4.8. A new feature called the Vehicle Command Module is being developed and tested. A smaller command ship will dock onto the Caterpillar, which cannot fly on its own without one attached. Once docked, the command ship pilot takes full control of the combined vessel as a single unit, with access to <Term name="Quantum Travel">quantum travel</Term>, landing, and combat. Undocking reverses the process. This is the first implementation of what <Term name="CIG">CIG</Term> is calling ship pairing. (
              <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21132-Roadmap-Roundup-April-22-2026">
                Official RSI blog post
              </SourceLink>
              )
            </p>
            <p>
              <strong>Several Alpha 4.8 items moved to tentative status.</strong>{' '}
              The roadmap flagged the UltiFlex Novia Crossbow — a near-silent precision hand weapon — a Tailwind flight suit, and a visual refresh of several ground weapons as tentative for Alpha 4.8. Tentative means the team is working on them but not committed to shipping them in this patch. (
              <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21132-Roadmap-Roundup-April-22-2026">
                Official RSI blog post
              </SourceLink>
              )
            </p>
          </Section>

          <Section title="What's new for new players">
            <p>
              If you are just getting started, Alpha 4.7.2 is the biggest reason to visit Nyx right now. The Nyx system — a new region of space with its own stations, missions, and resources — now has courier and delivery jobs designed for brand-new players. These are simple transport missions: pick up a package, fly it to a destination, collect payment. They are the lowest-stakes way to learn how the game works, earn some <Term name="aUEC">aUEC</Term>, and explore a region of <Term name="the 'Verse">the 'Verse</Term> that was barely populated before this week. No combat required, no large ship needed. (
              <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21125-Star-Citizen-Alpha-472">
                Official RSI blog post
              </SourceLink>
              )
            </p>
          </Section>

          <Section title="What's new for veterans">
            <p>
              <strong>The Item Recovery system for vehicle loadouts is being tested in Alpha 4.8.</strong>{' '}
              Players will be able to register their ship&rsquo;s configured weapons and components at an <Term name="ASOP">ASOP</Term> terminal. If that ship is then lost in the game, the registered configuration can be reclaimed. The trade-off: items looted from a claimed ship will eventually stop working — a mechanic the developers are calling bricking. <Term name="CIG">CIG</Term> confirmed that the goal is to end component duplication exploits. Pledged store ships are automatically registered and cannot be permanently lost. (
              <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-8-ptu-patch-notes-4/8800501">
                Official forum post
              </SourceLink>
              )
            </p>
            <p>
              <strong>Tactical Strike Groups and Xenothreat are both in Alpha 4.8 testing.</strong>{' '}
              Tactical Strike Groups is a new co-operative combat mission designed for organized groups of seven or more ships. Xenothreat — a recurring large-scale fleet battle event — is returning this week. Both are available to <Term name="EPTU">Evocati PTU</Term> testers only at this point. (
              <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-8-ptu-patch-notes-2/8793999">
                Official forum post
              </SourceLink>
              )
            </p>
          </Section>

          <Section title="Events and community">
            <ul className="space-y-3">
              <Bullet>
                <strong>CLX Gaming PC Giveaway (open now, ends May 4 at 11:59 AM EDT)</strong> — <Term name="CIG">CIG</Term> partnered with hardware manufacturer CLX to run a giveaway open globally. Five winners will receive an <Term name="Aurora">Aurora</Term> Mk II — a small starter ship — with <Term name="LTI">Lifetime Insurance</Term> and a game package. The grand prize winner also takes home a high-end CLX gaming PC. Anyone can enter from home at CLX&rsquo;s website; no purchase required. (
                <SourceLink href="https://robertsspaceindustries.com/comm-link/transmission/21104-CLX-Gaming-PC-Giveaway">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>Bar Citizen — Xi&rsquo;an, China (Saturday, May 2)</strong> — <Term name="CIG">CIG</Term> staff will attend a community meet-up — called a Bar Citizen — at the Gaoxin International Conference Center in Xi&rsquo;an, China on Saturday, May 2. A Bar Citizen is the community&rsquo;s name for an in-person social gathering open to any Star Citizen player in the area. This event&rsquo;s theme is a friendly visit between the human <Term name="UEE">UEE</Term> and the Xi&rsquo;an alien civilisation — two cultures in the game&rsquo;s lore. No advance ticket or registration was announced. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21144-This-Week-In-Star-Citizen">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>XGR Divisions Racing (Sunday, May 3)</strong> — A community-run racing series called XGR Divisions is holding a race on the New Babbage City Tour track, inside the city of <Term name="New Babbage">New Babbage</Term> on the frozen planet <Term name="microTech">microTech</Term>. The recommended ship is the <Term name="Origin">Origin</Term> 350R — a racing variant of Origin&rsquo;s three-hundred-series line. Signups were open as of April twenty-seven. This is an in-game event open to any player. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21144-This-Week-In-Star-Citizen">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
              <Bullet>
                <strong>United Danes Initiative — Gamebox Festival</strong> — A community group called the United Danes Initiative ran a Star Citizen booth at Gamebox Festival in Herning, Denmark this past weekend. The booth included a simulator cockpit, on-foot combat stations, and a Vanduul Swarm competition — a wave-based mode where players face AI-controlled alien attackers. A Bar Citizen followed on Saturday evening with players attending from Scandinavia, Germany, and the Netherlands. (
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21144-This-Week-In-Star-Citizen">
                  Official RSI blog post
                </SourceLink>
                )
              </Bullet>
            </ul>
          </Section>

          <Section title="Developer news">
            <p>
              <strong>Ray-traced global illumination is in development for <Term name="Squadron 42">Squadron 42</Term>.</strong>{' '}
              A <Term name="CIG">CIG</Term> graphics developer posted on the official <Term name="Spectrum">Spectrum</Term> forum this week confirming work on ray-traced reflections — a rendering technique that simulates how light bounces off surfaces to produce more accurate shadows and reflections. The high-specification version will also cover specular reflections on metallic and shiny surfaces. The current priority is getting the feature ready for <Term name="Squadron 42">Squadron 42</Term>, the game&rsquo;s single-player campaign. Additional work will be needed before it comes to the online multiplayer game. No release date was given for either. (
              <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/50259/thread/ray-traced-reflections/8798741">
                Official forum post
              </SourceLink>
              )
            </p>
            <p>
              <strong>DefenseCon twenty-fifty-six is coming soon.</strong>{' '}
              The April twenty-two <Term name="Roadmap">roadmap</Term> update teased DefenseCon twenty-fifty-six — a recurring in-game military showcase event. <Term name="CIG">CIG</Term> stated that details would be published on April twenty-nine, twenty twenty-six. Check the official RSI site for that announcement and the event details. (
              <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21144-This-Week-In-Star-Citizen">
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
            Compiled by Doc_Flanigan for o7citizen.com — Wednesday 29 April 2026
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
