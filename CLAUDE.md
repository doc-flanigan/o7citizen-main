# CLAUDE.md — o7citizen.com

## Project Overview
Build the primary hub site for o7citizen.com — an unofficial Star Citizen fan site
created by Doc_Flanigan. Target audience: brand new players with zero experience in
Star Citizen or "the 'Verse." Tone: friendly, plain-English, no jargon without
explanation. Think of it as "Star Citizen explained by a helpful veteran to a
curious newcomer."

## Plain-English Standard (NON-NEGOTIABLE)

The entire purpose of this site is to explain Star Citizen to people who have
never played the game. Every piece of user-facing copy on every page must
pass these rules. This standard applies to all pages, all sections, all
agent output rendered to the site, and every future weekly update.

Rules — apply without exception:

1. **Every abbreviation and every game term that exists in
   `src/data/glossary.ts` must be wrapped in
   `<Term name="...">display text</Term>` on its first mention in any page
   or section.** The Term component renders the term with a dotted
   underline, links to the full glossary entry, and shows the plain-English
   definition on hover. This replaces the older "spell it out inline" rule
   for glossary-backed terms — the reader still gets the definition without
   sacrificing the digest's 800–1,100 word budget. Example:
   `<Term name="UEC">UEC</Term>`, `<Term name="ASOP">ASOP terminal</Term>`,
   `<Term name="the 'Verse">the &lsquo;Verse</Term>`.
2. **For any term that is NOT in the glossary, the original rule still
   applies.** Spell it out inline on first mention, in the same sentence.
   Examples: "Comm-Link, the official RSI blog," "Spectrum, the official
   Star Citizen forum," "Bar Citizen — the community's name for an
   in-person meet-up," "loadout — your ship's configured weapons, shields
   and parts," "blueprint — an in-game recipe used to craft items." If a
   term recurs often enough to be worth a tooltip, add it to the glossary
   and wrap it.
3. **Ship and place names that aren't in the glossary still get a one-line
   context on first mention.** Drake Caterpillar = a large cargo ship.
   Idris = a capital warship. Nyx = a recently opened star system. Vanduul
   Swarm = a wave-based combat activity. Tactical Strike Groups = a new
   co-operative mission type. (Stanton, Pyro, the 'Verse, and most named
   ships already live in the glossary — wrap those instead.)
4. **Avoid gaming verbs.** "Released," not "shipped" or "went live." "Update,"
   not "patch" or "hotfix." "Reward," not "drop." "Players," not "users."
   Never "meta," "nerf," "buff," "grind," "carry," "kit."
5. **Numbers under 100 in words** — *one hundred*, *ten*, *twenty-five* — but
   keep version numbers (Alpha 4.7.2) and dates (April 30, 2026) as digits.
6. **Sentences under twenty-five words.** If a sentence runs longer, split it.
7. **Every claim cites a source.** Wrap any factual statement that came from
   sc-news in a `<SourceLink>` to the originating RSI blog post or official
   forum post. Use plain labels like "Official RSI blog post" or
   "Official forum post," not "Comm-Link" or "Spectrum reply."

### Rendering rule for sc-news output

When publishing the sc-news agent's digest to the site, **do not paraphrase
or tighten the prose**. Render the agent's text into the page structure as
written. The agent has already done the plain-English work; condensing it
is the fastest way to lose the standard. Only adjust formatting (HTML
structure, link wrappers, section headings to match site sections).

### Pre-commit checklist for any user-facing copy change

Before committing, re-read every changed sentence and confirm:

- [ ] Every glossary-backed abbreviation or term is wrapped in `<Term>` on
      its first mention (and ideally only the first or second mention per
      page — the tooltip is unobtrusive but don't spam it)
- [ ] Any term NOT in the glossary is spelled out inline on first mention
- [ ] First mention of any ship, place, or system not in the glossary has a
      one-line context
- [ ] No gaming verbs (`shipped`, `dropped`, `went live`, `patch`, `nerf`)
- [ ] Numbers under 100 are spelled out
- [ ] No sentence over 25 words
- [ ] Every factual claim has a `<SourceLink>` to an official source

If any item fails, fix it before commit. The rule is: **a curious friend who
has never played a video game should be able to read the page and understand
every sentence.** That is the product.

---

## Agentic Build Instructions
IMPORTANT: Use an agentic, incremental approach. Complete each subtask fully and
confirm success before proceeding. Do not attempt to build everything in one pass.
If any subtask exceeds reasonable scope, break it into smaller agents.

### Agent 1 — Project Scaffold
- Initialize Next.js 14 project with App Router, TypeScript, Tailwind CSS
- Install dependencies: next, react, react-dom, tailwindcss, autoprefixer,
  postcss, @next/font, lucide-react, framer-motion
- Configure tailwind.config.ts with custom color palette:
    navy: '#0a0e1a'
    navyLight: '#141c2e'
    gold: '#f0c040'
    goldDark: '#c49a20'
    starwhite: '#e8eaf0'
    muted: '#8892a4'
- Set up /public/images/hero/ folder with 12 placeholder images (solid color
  placeholders with text "Hero Image N — Replace Me")
- Place placeholder at /public/images/made-by-community.png
- Confirm scaffold runs with `npm run dev` before proceeding

### Agent 2 — Shared Components
Build these reusable components in /components/:
  - HeroCarousel.tsx: rotating image carousel, 12 slides, auto-advance 5s,
    fade transition, accepts overlay title + subtitle + optional CTA button
  - CTAButton.tsx: primary gold button linking to referral URL
    https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
  - NavBar.tsx: sticky top nav, logo "o7citizen.com", links: Home, Glossary,
    Weekly Update, Free Fly Events, About, Newsletter. Mobile hamburger menu.
  - Footer.tsx: three-section footer (see shared spec below)
  - NewsletterSignup.tsx: email capture form with CTA "Get the Weekly Update"
  - GlossaryCard.tsx: term + plain-English definition card component
  - UpdateCard.tsx: weekly update card with date, title, summary, "read in 5
    minutes" badge
Confirm all components render without errors before proceeding.

### Agent 3 — Homepage (/)
Build app/page.tsx:
  Section 1: HeroCarousel with overlay "Star Citizen — No Jargon. No Fluff.
    Just the 'Verse, Plain and Simple." + CTA "Claim Your Free 50,000 UEC"
  Section 2: "New to the 'Verse?" — 3-column grid explaining what SC is,
    what the 'Verse means, and what UEC is. Each card links to Glossary.
  Section 3: Latest Weekly Update preview — UpdateCard component, "Read This
    Week's Update" button
  Section 4: "Why o7citizen.com?" — brief origin story callout block mentioning
    Doc_Flanigan (links to About page)
  Section 5: NewsletterSignup component
  Section 6: Referral CTA banner — "Ready to Jump In? Use a Referral Code and
    Start with 50,000 UEC Free" + CTAButton
  Footer: Footer component
Confirm page renders fully on mobile and desktop before proceeding.

### Agent 4 — Glossary Page (/glossary)
Build app/glossary/page.tsx:
  - SEO meta: title="Star Citizen Glossary — Plain English Definitions |
    o7citizen.com" description="New to Star Citizen? Plain-English definitions
    of every term, acronym, and piece of 'Verse slang you'll encounter."
  - Search/filter bar at top
  - Alphabetical index (A-Z anchor links)
  - GlossaryCard grid — pre-populate with at least 40 terms including:
    o7, UEC, aUEC, PTU, PU, CIG, RSI, Pledge, LTI, CCU, the 'Verse,
    Free Fly, Hangar, ASOP, Quantum Travel, Referral Code, Org, Mobiglas,
    mobiGlas, Armor, FPS, PvP, PvE, Aurora, Mustang, Origin, Anvil, Drake,
    MISC, Aegis, Hull, Bounty, Salvage, Mining, Cargo, Escort, Piracy,
    Bunker, Derelict, Jumpgate, Stanton, Pyro, Squadron 42
  - Each term has: name, plain-English definition (2-4 sentences max),
    category tag (Currency, Ships, Gameplay, Community, Technical)
  - CTA button after every 10 cards: "New to the 'Verse? Claim 50,000 UEC Free"
Confirm page and search function work before proceeding.

### Agent 5 — Weekly Update Page (/weekly-update)
Build app/weekly-update/page.tsx:
  - SEO meta: title="Star Citizen Weekly Update — Plain English in 5 Minutes |
    o7citizen.com"
  - Hero: "This Week in the 'Verse" with "5-minute read" badge
  - Placeholder update content with realistic structure:
      * Patch Notes Summary (plain English)
      * What's New for New Players
      * What's New for Veterans
      * Upcoming Events This Week
      * Referral Bonus Status (active/inactive badge)
  - Archive section: previous updates listed by date
  - NewsletterSignup: "Never miss a weekly update"
  - CTAButton at bottom
Confirm page renders before proceeding.

### Agent 6 — Free Fly Events Page (/free-fly-events)
Build app/free-fly-events/page.tsx:
  - SEO meta: title="Star Citizen Free Fly Events — Play Free, No Purchase
    Needed | o7citizen.com"
  - Explainer: What is a Free Fly event, how to join, what you can do
  - Current event banner (placeholder with "Check Back Soon" state)
  - Upcoming events timeline (placeholder)
  - "During Free Fly: Use a Referral Code to Start With 50,000 UEC" CTA block
  - Historical events table
  - CTAButton
Confirm page renders before proceeding.

### Agent 7 — About Page (/about)
Build app/about/page.tsx:
  - SEO meta: title="About o7citizen.com — Why This Site Exists"
  - Hero: "What Does o7 Mean? And Why I Built This Site."
  - Story section written in first person as Doc_Flanigan:
    "When I first heard 'o7' in a Star Citizen community channel, I had no idea
    what it meant. It turned out to be one of the most common questions new
    players ask — and one of the hardest to find a straight answer for. That
    moment is why I built o7citizen.com: a plain-English guide to Star Citizen
    for anyone who's curious about the 'Verse but doesn't know where to start.
    I'm Doc_Flanigan, a veteran Star Citizen backer, and this is my unofficial
    love letter to the game and its community."
  - "What This Site Is" section: unofficial fan site, no jargon, updated weekly
  - "What This Site Is Not" section: not affiliated with CIG, not official
  - Referral disclosure section (FTC-compliant explanation)
  - o7 Meaning section: full explanation with the salute emoji origin
  - CTAButton at bottom
Confirm page renders before proceeding.

### Agent 8 — o7 Meaning Page (/o7-meaning)
Build app/o7-meaning/page.tsx:
  - This page is SEO critical — optimize heavily
  - SEO meta: title="What Does o7 Mean? The Star Citizen Salute Explained"
    description="o7 is an emoticon salute used across Star Citizen and gaming
    communities. The 'o' is a head, the '7' is a raised arm. Here's everything
    you need to know."
  - Schema markup: FAQPage with 5 common o7 questions
  - H1: "What Does o7 Mean?"
  - Full explanation of origin, usage in SC, usage on Twitch/Discord
  - "o7 in Star Citizen" section
  - "o7 in Other Games" section  
  - "How to Use o7" section
  - Related terms section (links to Glossary)
  - "New to Star Citizen?" CTA block → CTAButton
Confirm page and schema render before proceeding.

### Agent 9 — SEO & Technical
  - Generate /app/sitemap.ts with all routes
  - Generate /app/robots.ts
  - Add Open Graph and Twitter card meta to all pages
  - Add canonical URLs to all pages
  - Add JSON-LD Organization schema to layout.tsx
  - Optimize all images with next/image
  - Add /app/manifest.ts for PWA basics
  - Ensure all pages have unique, keyword-rich title and description
  - Generate _redirects or next.config.js redirects:
      o7citizens.com → o7citizen.com
      o7citizen.gg → o7citizen.com
  - Confirm Lighthouse SEO score > 95 (run with `npx lighthouse`)
Confirm SEO audit passes before proceeding.

### Agent 10 — Final Polish & README
  - Audit all pages for mobile responsiveness
  - Add smooth scroll behavior
  - Add loading states to carousel
  - Add 404 page (app/not-found.tsx) themed to the site
  - Run `npm run build` — fix any TypeScript or build errors
  - Confirm build passes cleanly
  - Generate README.md (see README section below)

## Referral URL
https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC

## Footer Spec
Three mandatory sections:
1. Fan site disclaimer: "This is an unofficial fan site and is not affiliated
   with, endorsed by, or connected to Cloud Imperium Games, Roberts Space
   Industries, or the Star Citizen franchise in any way."
2. FTC disclosure: "Affiliate Disclosure: This site contains referral links.
   If you create a Star Citizen account using our referral code, the site owner
   (Doc_Flanigan) will receive an in-game bonus reward at no cost to you."
3. RSI Fankit badge: <Image src="/images/made-by-community.png" alt="Made by
   the Star Citizen Community" width={120} height={40} />

## Color Palette
  --navy: #0a0e1a
  --navy-light: #141c2e
  --gold: #f0c040
  --gold-dark: #c49a20
  --starwhite: #e8eaf0
  --muted: #8892a4

## Commit Message Convention
feat: [component/page] — brief description
fix: [component/page] — brief description
seo: [page] — brief description
docs: update README

## PR/Merge Description Template
### What this PR does
[summary]
### Pages/components affected
[list]
### SEO impact
[description]
### Testing
- [ ] npm run build passes
- [ ] Mobile responsive
- [ ] All links verified
