'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/site'
import CTAButton from './CTAButton'

export default function NavBar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-white/5 bg-navy/85 backdrop-blur-md'
          : 'bg-gradient-to-b from-navy/70 to-transparent'
      }`}
    >
      <nav
        className="container-wide flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="rounded-md bg-gold px-2 py-1 font-display text-navy">
            o7
          </span>
          <span className="hidden sm:inline text-starwhite">citizen.com</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname?.startsWith(link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-navyLight text-gold'
                      : 'text-starwhite/80 hover:bg-navyLight hover:text-starwhite'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
          <li className="ml-2">
            <CTAButton size="sm" trackingLabel="nav-cta">
              Get 50K UEC
            </CTAButton>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-starwhite md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="md:hidden">
          <ul className="container-wide flex flex-col gap-1 pb-4">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-md px-3 py-2 text-base font-medium ${
                      active ? 'bg-navyLight text-gold' : 'text-starwhite/85 hover:bg-navyLight'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li className="pt-2">
              <CTAButton className="w-full" trackingLabel="nav-cta-mobile">
                Get 50K UEC
              </CTAButton>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
