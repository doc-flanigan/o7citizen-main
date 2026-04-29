import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, Heart } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import { SITE } from '@/lib/site'

const FAQ = [
  {
    q: 'What does o7 mean?',
    a: "o7 is a salute. The 'o' is a head and the '7' is an arm raised to the brow. Tilt your head sideways and you'll see it. It's used to say hello, goodbye, respect, or 'fly safe' across many online gaming and military sci-fi communities.",
  },
  {
    q: 'Where did o7 originate?',
    a: "o7 originated in EVE Online in the early 2000s, where pilots used it as a quick respect emoticon in local chat. It has since spread to most online sci-fi gaming communities, including Star Citizen, Elite Dangerous, the X-series, and military aviation circles.",
  },
  {
    q: 'How do you respond to o7?',
    a: "Respond with o7 back. It's a mutual salute. You can also use \\o (a hand wave) or o7o (saluting with both hands) for variety. Some people add the recipient's name, like 'o7 Doc' for a more personal greeting.",
  },
  {
    q: 'Is o7 only used in Star Citizen?',
    a: 'No. o7 is common across many gaming communities — EVE Online (where it started), Elite Dangerous, Star Citizen, World of Warships, military flight sims, and any community with a strong "fly safe" culture. It also appears on Twitch, Discord, and gaming Twitter.',
  },
  {
    q: 'What does \\o mean vs. o7?',
    a: '\\o is a wave (open hand raised, casual hello or goodbye). o7 is a salute (formal respect, fly safe, godspeed). \\o\\ /o/ are dancing/cheering. o7o is a two-handed salute. They are all from the same family of typed emoticons.',
  },
]

export const metadata: Metadata = {
  title: 'What Does o7 Mean? The Star Citizen Salute Explained',
  description:
    "o7 is an emoticon salute used across Star Citizen and gaming communities. The 'o' is a head, the '7' is a raised arm. Here's everything you need to know.",
  alternates: { canonical: '/o7-meaning' },
  openGraph: {
    title: 'What Does o7 Mean? The Star Citizen Salute Explained',
    description:
      "o7 is an emoticon salute. The 'o' is a head, the '7' is a raised arm. Originated in EVE Online, now used across all of sci-fi gaming.",
    url: '/o7-meaning',
    type: 'article',
  },
  twitter: {
    title: 'What Does o7 Mean? The Star Citizen Salute Explained',
    description:
      "o7 is an emoticon salute. 'o' is a head, '7' is a raised arm.",
    card: 'summary_large_image',
  },
}

export default function O7MeaningPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Does o7 Mean? The Star Citizen Salute Explained',
    description:
      "o7 is an emoticon salute used across Star Citizen and gaming communities. The 'o' is a head, the '7' is a raised arm.",
    author: { '@type': 'Person', name: SITE.author },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/o7-meaning`,
    image: `${SITE.url}/images/hero/hero-01.jpg`,
  }

  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/30 pb-16 pt-32 sm:pt-40">
          <div className="container-narrow">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              The Star Citizen Salute
            </p>
            <h1 className="heading-display text-4xl sm:text-5xl">
              What does <span className="text-gold-gradient">o7</span> mean?
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-starwhite/85">
              <strong>o7</strong> is an emoticon salute. The lowercase{' '}
              <strong>o</strong> is a head. The <strong>7</strong> is an arm
              raised to the brow in salute. Tilt your head sideways and
              you&rsquo;ll see it.
            </p>
            <div className="mt-8 inline-flex items-center gap-6 rounded-2xl border border-gold/30 bg-gold/5 px-8 py-5">
              <span className="font-display text-6xl text-gold">o7</span>
              <span className="text-sm text-starwhite/80">
                Means: hello · goodbye · respect · fly safe
              </span>
            </div>
          </div>
        </header>

        <article className="container-narrow space-y-12 py-16">
          <section>
            <h2 className="heading-display text-2xl text-gold">
              o7 in Star Citizen
            </h2>
            <p className="mt-4 text-base leading-relaxed text-starwhite/85">
              In Star Citizen you&rsquo;ll see <strong>o7</strong> everywhere —
              global chat, in your <Term name="Org">org</Term> Discord, in{' '}
              <Term name="CIG">CIG</Term>&rsquo;s patch notes, even on streamer
              overlays. It&rsquo;s the community&rsquo;s shorthand for
              &laquo;respect.&raquo;
            </p>
            <ul className="mt-4 space-y-2 text-base text-starwhite/85">
              <li>
                A pilot rescues you from a crash landing on{' '}
                <Term name="Hurston">Hurston</Term>:{' '}
                <span className="font-mono text-gold">o7</span>
              </li>
              <li>
                You log off for the night:{' '}
                <span className="font-mono text-gold">o7 all, fly safe</span>
              </li>
              <li>
                A streamer asks for a salute on stream:{' '}
                <span className="font-mono text-gold">o7 in chat</span>
              </li>
              <li>
                <Term name="CIG">CIG</Term> announces a delay to a
                long-anticipated feature: chat fills with{' '}
                <span className="font-mono text-gold">o7</span> as gallows
                respect.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="heading-display text-2xl text-gold">
              o7 in other games
            </h2>
            <p className="mt-4 text-base leading-relaxed text-starwhite/85">
              <strong>o7</strong> originated in <strong>EVE Online</strong> in
              the early 2000s, where pilots used it as a respect gesture in
              local chat after a fight or a fleet engagement. It spread from
              there to most of online sci-fi gaming.
            </p>
            <ul className="mt-4 space-y-2 text-base text-starwhite/85">
              <li>
                <strong className="text-starwhite">EVE Online</strong> — the
                original. Still everywhere in null-sec and Jita 4-4 local.
              </li>
              <li>
                <strong className="text-starwhite">Elite Dangerous</strong> —
                CMDRs use it before and after combat encounters.
              </li>
              <li>
                <strong className="text-starwhite">X4: Foundations</strong> —
                in community Discords and streams.
              </li>
              <li>
                <strong className="text-starwhite">DCS World &amp; flight sims</strong>{' '}
                — adopted from the broader military aviation community.
              </li>
              <li>
                <strong className="text-starwhite">Twitch &amp; Discord</strong>{' '}
                — increasingly used outside gaming as a general &laquo;respect&raquo; emoticon.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="heading-display text-2xl text-gold">
              How to use o7
            </h2>
            <p className="mt-4 text-base leading-relaxed text-starwhite/85">
              Just type it. <strong className="font-mono text-gold">o7</strong>.
              Lowercase o, number 7, no spaces. That&rsquo;s the whole thing.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  variant: 'o7',
                  meaning: 'Standard salute. The default.',
                },
                {
                  variant: '\\o',
                  meaning: 'Wave. More casual hello/bye.',
                },
                {
                  variant: 'o7o',
                  meaning: 'Two-handed salute. Extra respect.',
                },
                {
                  variant: '\\o/',
                  meaning: 'Cheering. Excited celebration.',
                },
              ].map((row) => (
                <div
                  key={row.variant}
                  className="card-surface flex items-center gap-4 p-4"
                >
                  <span className="font-display text-3xl text-gold">
                    {row.variant}
                  </span>
                  <span className="text-sm text-starwhite/80">{row.meaning}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="heading-display text-2xl text-gold">
              Frequently asked questions
            </h2>
            <div className="mt-6 divide-y divide-white/5 rounded-2xl border border-white/5">
              {FAQ.map((item) => (
                <details key={item.q} className="group p-5 open:bg-navyLight/40">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-starwhite hover:text-gold">
                    {item.q}
                    <span
                      aria-hidden
                      className="text-gold transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-starwhite/85">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl text-gold">
              Related terms
            </h2>
            <p className="mt-4 text-base text-starwhite/85">
              While you&rsquo;re here, these are the other Star Citizen terms
              new players ask about most often:
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['UEC', 'aUEC', 'PTU', "the 'Verse", 'Free Fly', 'Pledge', 'Org', 'mobiGlas'].map((t) => (
                <Link
                  key={t}
                  href={`/glossary#term-${t.replace(/\s+/g, '-').toLowerCase()}`}
                  className="rounded-full border border-white/10 bg-navyLight/50 px-3.5 py-1.5 text-sm text-starwhite/85 hover:border-gold/40 hover:text-gold"
                >
                  {t}
                </Link>
              ))}
              <Link
                href="/glossary"
                className="rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-sm font-semibold text-gold hover:bg-gold/20"
              >
                See full glossary →
              </Link>
            </div>
          </section>

          {/* About this site (merged in from the former /about page). */}
          <section id="about" className="border-t border-white/5 pt-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              About this site
            </p>
            <h2 className="heading-display text-3xl">
              Why I built dayonecitizen.com.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                When I first heard <strong className="text-gold">o7</strong> in
                a Star Citizen community channel, I had no idea what it meant.
                It turned out to be one of the most common questions new
                players ask — and one of the hardest to find a straight answer
                for. That moment is why this site exists.
              </p>
              <p>
                I&rsquo;m {SITE.author}, a veteran Star Citizen{' '}
                <Term name="Backer">backer</Term>. The wiki is great if you
                already speak the language. The{' '}
                <Term name="Spectrum">Spectrum</Term> forums are great if you
                have time. This site is for everyone else — the friend
                who&rsquo;s curious, the partner who keeps hearing you say
                &laquo;<Term name="Pyro">Pyro</Term>,&raquo; the new player who
                Googled &laquo;what does o7 mean&raquo; and ended up here.
              </p>
              <p>
                No gatekeeping. No 200-page wiki dives. No assumptions about
                what you already know. Just plain English, written by someone
                who still remembers being new.
              </p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="card-surface p-7">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                <Check size={20} aria-hidden />
              </div>
              <h3 className="heading-display text-xl">What this site is</h3>
              <ul className="mt-4 space-y-3 text-sm text-starwhite/85">
                <li>
                  <strong className="text-starwhite">An unofficial fan site.</strong>{' '}
                  Made by a player, for players. Not a CIG product.
                </li>
                <li>
                  <strong className="text-starwhite">Plain-English.</strong>{' '}
                  Every term is defined the first time it&rsquo;s used. The
                  glossary is one click away from every page.
                </li>
                <li>
                  <strong className="text-starwhite">Honest about the game.</strong>{' '}
                  Star Citizen is in alpha. It&rsquo;s ambitious, beautiful,
                  and sometimes broken. We say so.
                </li>
                <li>
                  <strong className="text-starwhite">Free.</strong> The site,
                  the glossary, all of it.
                </li>
              </ul>
            </div>
            <div className="card-surface p-7">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-300">
                <X size={20} aria-hidden />
              </div>
              <h3 className="heading-display text-xl">What this site is not</h3>
              <ul className="mt-4 space-y-3 text-sm text-starwhite/85">
                <li>
                  <strong className="text-starwhite">Not affiliated with CIG.</strong>{' '}
                  <Term name="CIG">Cloud Imperium Games</Term> has nothing to
                  do with this site.
                </li>
                <li>
                  <strong className="text-starwhite">Not official.</strong> For
                  the source of truth go to robertsspaceindustries.com.
                </li>
                <li>
                  <strong className="text-starwhite">Not a hype machine.</strong>{' '}
                  We don&rsquo;t cheerlead delays or pretend everything is
                  fine when it&rsquo;s not.
                </li>
                <li>
                  <strong className="text-starwhite">Not a doomposting machine, either.</strong>{' '}
                  The constant &laquo;SC is a scam&raquo; rage-bait isn&rsquo;t
                  useful for anyone trying to decide if they want to play.
                </li>
                <li>
                  <strong className="text-starwhite">Not a wiki.</strong> Star
                  Citizen Wiki is excellent for deep dives. We&rsquo;re the
                  on-ramp, not the encyclopedia.
                </li>
              </ul>
            </div>
          </section>

          <section id="referral-disclosure" className="border-t border-white/5 pt-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              FTC disclosure
            </p>
            <h2 className="heading-display text-2xl">
              About the referral links.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-starwhite/85">
              <p>
                This site contains <strong>referral links</strong> to{' '}
                <Term name="RSI">Roberts Space Industries</Term>. If you create
                a Star Citizen account using the{' '}
                <Term name="Referral Code">referral code</Term> on this site,
                you receive{' '}
                <strong className="text-gold">50,000 UEC free</strong> on
                signup. I (the site owner, {SITE.author}) receive a small
                in-game bonus reward for referring you. There is no monetary
                kickback.
              </p>
              <p>
                <strong>Cost to you: zero.</strong> The bonus is from{' '}
                <Term name="CIG">CIG</Term> to you. You&rsquo;d pay the same
                amount whether you used my code, a friend&rsquo;s code, or no
                code at all. If you have a friend who already plays Star
                Citizen, use <em>their</em> code — they earned the
                introduction.
              </p>
              <div className="rounded-2xl border border-gold/20 bg-gold/5 p-4">
                <p className="font-mono text-sm text-gold">
                  Referral code: {SITE.referralCode}
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-white/5 pt-12">
            <div className="card-surface flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:gap-6">
              <Heart className="text-red-300" size={28} aria-hidden />
              <p className="text-sm text-starwhite/85">
                Built with absurd amounts of caffeine, an embarrassing number
                of <Term name="Vulture">Vulture</Term>{' '}
                <Term name="Salvage">salvage</Term> runs, and one stubborn
                belief: that Star Citizen, for all its bugs and delays, is the
                most ambitious game ever made — and it deserves a front door
                for newcomers.
              </p>
            </div>
          </section>
        </article>

        <section className="border-t border-white/5 bg-gradient-to-r from-navyLight to-navy py-16">
          <div className="container-narrow">
            <div className="card-surface flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  New to Star Citizen?
                </p>
                <h2 className="heading-display text-2xl">
                  Now you know the salute. Time to fly.
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Use a <Term name="Referral Code">referral code</Term> on
                  signup and start with 50,000 <Term name="UEC">UEC</Term> free.
                </p>
              </div>
              <CTAButton size="lg" trackingLabel="o7-bottom-cta">
                Use my referral code
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  )
}
