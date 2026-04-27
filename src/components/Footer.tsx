import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, SITE } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-navyLight/40">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="inline-flex items-center gap-2 text-lg font-bold">
            <span className="rounded-md bg-gold px-2 py-1 font-display text-navy">o7</span>
            <span className="text-starwhite">citizen.com</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {SITE.description}
          </p>
          <div className="mt-6">
            <Image
              src="/images/made-by-community.png"
              alt="Made by the Star Citizen Community — RSI Fankit"
              width={120}
              height={40}
              className="opacity-90"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
            Site
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-starwhite/80 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
            Get Started
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={SITE.referralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-starwhite/80 hover:text-gold"
              >
                Use my code
              </a>
            </li>
            <li>
              <Link
                href="/glossary"
                className="text-starwhite/80 hover:text-gold"
              >
                Glossary A–Z
              </Link>
            </li>
            <li>
              <Link
                href="/weekly-update"
                className="text-starwhite/80 hover:text-gold"
              >
                This week&rsquo;s update
              </Link>
            </li>
            <li>
              <a href="#newsletter" className="text-starwhite/80 hover:text-gold">
                Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-wide grid gap-6 py-8 text-xs leading-relaxed text-muted md:grid-cols-3">
          <p>
            <strong className="text-starwhite/90">Fan site disclaimer.</strong>{' '}
            This is an unofficial fan site and is not affiliated with, endorsed
            by, or connected to Cloud Imperium Games, Roberts Space Industries,
            or the Star Citizen franchise in any way.
          </p>
          <p>
            <strong className="text-starwhite/90">Affiliate disclosure.</strong>{' '}
            This site contains referral links. If you create a Star Citizen
            account using our referral code, the site owner ({SITE.author}) will
            receive an in-game bonus reward at no cost to you.
          </p>
          <p>
            <strong className="text-starwhite/90">Trademarks.</strong> Star
            Citizen™ and Squadron 42™ are trademarks of Cloud Imperium Rights
            LLC. All in-game assets © Cloud Imperium Rights LLC.
          </p>
        </div>
        <div className="container-wide pb-8 text-xs text-muted/80">
          © {year} {SITE.name} · Built with o7 by {SITE.author}
        </div>
      </div>
    </footer>
  )
}
