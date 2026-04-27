import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, Heart } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About o7citizen.com — Why This Site Exists',
  description:
    "Why I built o7citizen.com — a plain-English Star Citizen fan site for newcomers. Written by Doc_Flanigan, a veteran SC backer.",
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <header className="border-b border-white/5 bg-gradient-to-b from-navy via-navy to-navyLight/40 pb-16 pt-32 sm:pt-40">
          <div className="container-narrow">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              About
            </p>
            <h1 className="heading-display text-4xl sm:text-5xl">
              What does <span className="text-gold-gradient">o7</span> mean?
              <br className="hidden sm:block" />And why I built this site.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted">
              By {SITE.author} — veteran Star Citizen backer, plain-English
              evangelist, occasional Vulture pilot.
            </p>
          </div>
        </header>

        {/* Story */}
        <section className="border-b border-white/5 py-16">
          <div className="container-narrow space-y-5 text-base leading-relaxed text-starwhite/90">
            <p>
              When I first heard <strong className="text-gold">o7</strong> in a
              Star Citizen community channel, I had no idea what it meant. It
              turned out to be one of the most common questions new players ask
              — and one of the hardest to find a straight answer for.
            </p>
            <p>
              That moment is why I built o7citizen.com: a plain-English guide
              to Star Citizen for anyone who&rsquo;s curious about the
              &lsquo;Verse but doesn&rsquo;t know where to start.
            </p>
            <p>
              I&rsquo;m {SITE.author}, a veteran Star Citizen backer, and this is my
              unofficial love letter to the game and its community. The wiki
              is great if you already speak the language. The Spectrum forums
              are great if you have time. This site is for everyone else — the
              friend who&rsquo;s curious, the partner who keeps hearing you say
              &laquo;Pyro,&raquo; the new player who Googled &laquo;what does
              o7 mean&raquo; and ended up here.
            </p>
            <p>
              No gatekeeping. No 200-page wiki dives. No assumptions about what
              you already know. Just plain English, written by someone who
              still remembers being new.
            </p>
            <p className="font-display text-2xl text-gold">o7</p>
          </div>
        </section>

        {/* What this site is / isn't */}
        <section className="border-b border-white/5 bg-navyLight/20 py-16">
          <div className="container-wide grid gap-6 md:grid-cols-2">
            <div className="card-surface p-7">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                <Check size={20} aria-hidden />
              </div>
              <h2 className="heading-display text-2xl">What this site is</h2>
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
                  <strong className="text-starwhite">Updated weekly.</strong>{' '}
                  A 5-minute summary of what changed in Star Citizen, every Friday.
                </li>
                <li>
                  <strong className="text-starwhite">Honest about the game.</strong>{' '}
                  Star Citizen is in alpha. It&rsquo;s ambitious, beautiful, and
                  sometimes broken. We say so.
                </li>
                <li>
                  <strong className="text-starwhite">Free.</strong> The site,
                  the newsletter, the glossary, all of it.
                </li>
              </ul>
            </div>
            <div className="card-surface p-7">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-300">
                <X size={20} aria-hidden />
              </div>
              <h2 className="heading-display text-2xl">What this site is not</h2>
              <ul className="mt-4 space-y-3 text-sm text-starwhite/85">
                <li>
                  <strong className="text-starwhite">Not affiliated with CIG.</strong>{' '}
                  Cloud Imperium Games has nothing to do with this site.
                </li>
                <li>
                  <strong className="text-starwhite">Not official.</strong> We
                  paraphrase patch notes. For the source of truth go to
                  robertsspaceindustries.com.
                </li>
                <li>
                  <strong className="text-starwhite">Not a hype machine.</strong>{' '}
                  We don&rsquo;t cheerlead delays or pretend everything is
                  fine when it&rsquo;s not.
                </li>
                <li>
                  <strong className="text-starwhite">Not a doomposting machine, either.</strong>{' '}
                  The constant &laquo;SC is a scam&raquo; rage-bait isn&rsquo;t useful
                  for anyone trying to decide if they want to play.
                </li>
                <li>
                  <strong className="text-starwhite">Not a wiki.</strong> Star
                  Citizen Wiki is excellent for deep dives. We&rsquo;re the
                  on-ramp, not the encyclopedia.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Referral disclosure */}
        <section className="border-b border-white/5 py-16">
          <div className="container-narrow">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              FTC disclosure
            </p>
            <h2 className="heading-display text-3xl">
              About the referral links.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-starwhite/85">
              <p>
                This site contains <strong>referral links</strong> to Roberts
                Space Industries. If you create a Star Citizen account using
                the referral code on this site, you receive{' '}
                <strong className="text-gold">50,000 UEC free</strong> on
                signup. I (the site owner, {SITE.author}) receive a small
                in-game bonus reward — usually a cosmetic item or a few
                thousand UEC — for referring you. There is no monetary kickback.
              </p>
              <p>
                <strong>Cost to you: zero.</strong> The bonus is from CIG to
                you, courtesy of CIG&rsquo;s long-running referral program.
                You&rsquo;d pay the same amount whether you used my code, a
                friend&rsquo;s code, no code, or someone else&rsquo;s code
                entirely. If you have a friend who already plays Star Citizen,
                use <em>their</em> code — they earned the introduction.
              </p>
              <p>
                I disclose this on every page (see footer) and the disclosure
                is a permanent feature of the site. This is the FTC-required
                way of saying: yes, I get something out of it, and I&rsquo;m
                being upfront about it.
              </p>
              <div className="rounded-2xl border border-gold/20 bg-gold/5 p-5">
                <p className="font-mono text-sm text-gold">
                  Referral code: {SITE.referralCode}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* o7 meaning */}
        <section className="border-b border-white/5 bg-navyLight/20 py-16">
          <div className="container-narrow">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              The salute
            </p>
            <h2 className="heading-display text-3xl">
              Where &ldquo;o7&rdquo; comes from.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-starwhite/90">
              <p>
                <strong className="text-gold">o7</strong> is an emoticon
                salute. The lowercase <strong>o</strong> is a head. The
                <strong> 7</strong> is an arm raised to the brow in salute.
                Tilt your head sideways and you&rsquo;ll see it.
              </p>
              <p>
                The salute originated in EVE Online in the early 2000s, where
                pilots used it as a quick respect gesture in local chat.
                It&rsquo;s spread across most of online sci-fi gaming since —
                Elite Dangerous, X-series, and now Star Citizen, where
                you&rsquo;ll see it in chat, on Discord, in patch notes, and on
                streamer overlays.
              </p>
              <p>
                It means hello, goodbye, respect, fly safe, godspeed, and
                everything in between. If someone says <strong>o7</strong> to
                you, the right response is <strong>o7</strong> back.
              </p>
              <p>
                For the deep dive,{' '}
                <Link href="/o7-meaning" className="text-gold underline-offset-4 hover:underline">
                  read the full o7 meaning page
                </Link>
                .
              </p>
              <p className="pt-2 font-display text-3xl text-gold">o7</p>
            </div>
          </div>
        </section>

        {/* Built with */}
        <section className="py-16">
          <div className="container-narrow">
            <div className="card-surface flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:gap-6">
              <Heart className="text-red-300" size={28} aria-hidden />
              <p className="text-sm text-starwhite/85">
                Built with absurd amounts of caffeine, an embarrassing number
                of Vulture salvage runs, and one stubborn belief: that Star
                Citizen, for all its bugs and delays, is the most ambitious
                game ever made — and it deserves a front door for newcomers.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="heading-display text-2xl">
                Ready to see it for yourself?
              </h3>
              <CTAButton size="lg" trackingLabel="about-bottom-cta" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
