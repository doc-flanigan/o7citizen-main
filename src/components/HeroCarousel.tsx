'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { HERO_IMAGES } from '@/lib/site'
import CTAButton from './CTAButton'

type Props = {
  title: React.ReactNode
  subtitle?: React.ReactNode
  ctaLabel?: string
  ctaHref?: string
  intervalMs?: number
  images?: string[]
  height?: 'short' | 'tall' | 'full'
}

const heightClasses = {
  short: 'min-h-[420px] sm:min-h-[480px]',
  tall: 'min-h-[560px] sm:min-h-[640px] lg:min-h-[720px]',
  full: 'min-h-[80vh] lg:min-h-[88vh]',
}

export default function HeroCarousel({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  intervalMs = 9000,
  images = HERO_IMAGES,
  height = 'tall',
}: Props) {
  const [index, setIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const advance = useCallback(() => {
    setIndex((current) => (current + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(advance, intervalMs)
    return () => clearInterval(id)
  }, [advance, intervalMs, images.length])

  return (
    <section
      className={`relative w-full overflow-hidden bg-navy ${heightClasses[height]}`}
      aria-label="Hero carousel"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover animate-slow-pan"
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {!isLoaded ? (
        <div className="absolute inset-0 animate-pulse bg-navyLight/50" aria-hidden />
      ) : null}

      <div className="container-wide relative z-10 flex h-full flex-col justify-end pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div className="max-w-3xl">
          <p className="mb-3 inline-block rounded-full border border-gold/40 bg-navy/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            o7 citizen
          </p>
          <h1 className="heading-display text-3xl leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-2xl text-base text-starwhite/85 sm:text-lg">
              {subtitle}
            </p>
          ) : null}
          {ctaLabel ? (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTAButton href={ctaHref} size="lg" trackingLabel="hero-primary">
                {ctaLabel}
              </CTAButton>
              <a
                href="#start-here"
                className="text-sm font-medium text-starwhite/80 underline-offset-4 hover:text-gold hover:underline"
              >
                or scroll down for the basics
              </a>
            </div>
          ) : null}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-gold' : 'w-3 bg-starwhite/40 hover:bg-starwhite/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
