export type GlossaryCategory =
  | 'Currency'
  | 'Ships'
  | 'Gameplay'
  | 'Community'
  | 'Technical'
  | 'Locations'

export type GlossaryTerm = {
  term: string
  definition: string
  category: GlossaryCategory
  also?: string
  /**
   * ISO YYYY-MM-DD of the last time the entry's factual claims were
   * verified against an authoritative source. Maintained by the
   * glossary-audit workflow (see `.github/workflows/glossary-audit.yml`).
   * Absent on entries that have never been audited yet.
   */
  lastVerified?: string
}

export const GLOSSARY: GlossaryTerm[] = [
  // ─────────────── Community / Slang ───────────────
  {
    term: 'o7',
    category: 'Community',
    definition:
      "A salute. The 'o' is a head and the '7' is an arm raised to the brow. You'll see it in chat, on Discord, and in patch notes. It means respect, hello, goodbye, or 'fly safe.'",
    also: '\\o, o7o',
  },
  {
    term: 'Fly Safe',
    category: 'Community',
    definition:
      "The standard SC sign-off. Goes at the end of streams, posts, and DMs. Often paired with o7. The community's version of 'godspeed.'",
  },
  {
    term: "the 'Verse",
    category: 'Community',
    definition:
      "Slang for the Star Citizen universe — the in-game world, lore, and community combined. 'See you in the 'Verse' is a common sign-off.",
    also: 'Verse',
  },
  {
    term: 'The Black',
    category: 'Community',
    definition:
      "Slang for empty deep space — far from any planet, station, or jump point. 'Lost in the black' means stranded, drifting, or just out exploring with nothing nearby.",
  },
  {
    term: 'Backer',
    category: 'Community',
    definition:
      "Anyone who has pledged for Star Citizen. The community's preferred term over 'customer' or 'player' because the game is crowdfunded.",
  },
  {
    term: 'Concierge',
    category: 'Community',
    definition:
      "Top-tier backer status. Players who have pledged at least $1,000 USD lifetime get a Concierge badge, early access to certain sales, and perks like priority support. A status symbol.",
  },
  {
    term: 'Whale',
    category: 'Community',
    definition:
      "Slang for a backer who has pledged thousands of dollars. Sometimes self-deprecating, sometimes critical. There's an entire economy of capital ships built around whales.",
    also: 'Whaling',
  },
  {
    term: 'CIG',
    category: 'Community',
    definition:
      'Cloud Imperium Games — the studio building Star Citizen and Squadron 42. Founded by Chris Roberts in 2012.',
  },
  {
    term: 'RSI',
    category: 'Community',
    definition:
      "Roberts Space Industries — both the in-fiction ship manufacturer and CIG's publishing label. The website you pledge through is rsi.com.",
  },
  {
    term: 'Chris Roberts',
    category: 'Community',
    definition:
      "Founder and CEO of CIG, director of Squadron 42. Wing Commander creator, ambitious visionary, and the face of every major announcement. Often abbreviated 'CR.'",
    also: 'CR',
  },
  {
    term: 'Sandi Gardiner',
    category: 'Community',
    definition:
      "VP at CIG, frequent on-camera host of Inside Star Citizen and major shows. Married to Chris Roberts. Often just called 'Sandi.'",
  },
  {
    term: 'Inside Star Citizen',
    category: 'Community',
    definition:
      "Weekly Thursday CIG video show showcasing in-development features. The most reliable 'what's CIG working on right now' source. Pronounced 'I-S-C.'",
    also: 'ISC',
  },
  {
    term: 'Letter from the Chairman',
    category: 'Community',
    definition:
      "Periodic written update from Chris Roberts on direction, philosophy, and milestones. Reads like a state-of-the-game address. Watch for these ahead of CitizenCon.",
  },
  {
    term: 'Roadmap',
    category: 'Community',
    definition:
      "CIG's public progress tracker at rsi.com/roadmap. Lists features in development and target patches. Famously squishy on dates — read it as direction, not commitment.",
  },
  {
    term: 'Spectrum',
    category: 'Community',
    definition:
      "The official RSI community forum at robertsspaceindustries.com/spectrum. Ground zero for bug reports, org recruiting, and the occasional flame war.",
  },
  {
    term: 'CitizenCon',
    category: 'Community',
    definition:
      "CIG's annual fan convention. The biggest event on the SC calendar — usually in October. Major reveals, demos, and the next year's direction land here.",
  },
  {
    term: 'IAE',
    category: 'Community',
    definition:
      "Intergalactic Aerospace Expo — the in-game and IRL ship show held every November. Ships are free-fly each day and discounted for pledging.",
  },
  {
    term: 'Pledge',
    category: 'Community',
    definition:
      "What backers call buying a ship or game package. Star Citizen is crowdfunded, so you 'pledge' rather than 'purchase.' See pledgemeaning.com for more.",
  },
  {
    term: 'Referral Code',
    category: 'Community',
    definition:
      "A unique code another backer shares with you. Using one when you create your account gives you 50,000 UEC free, and the referrer earns a small bonus reward.",
    also: 'STAR-XXXX-XXXX',
  },
  {
    term: 'Org',
    category: 'Community',
    definition:
      "Short for organization — a player-run guild or clan. Orgs run trade convoys, mining ops, combat patrols, and community events.",
  },
  {
    term: 'Squadron 42',
    category: 'Community',
    definition:
      "The single-player cinematic campaign set in the same universe — a separate game with a Hollywood cast (Mark Hamill, Gary Oldman). Sold separately from Star Citizen.",
    also: 'SQ42',
  },
  {
    term: 'UEE',
    category: 'Community',
    definition:
      "United Empire of Earth — the in-fiction human government that controls most of explored space. Its Navy, Marines, and Advocacy show up in lore and missions.",
  },
  {
    term: 'Vanduul',
    category: 'Community',
    definition:
      "Hostile alien race — nomadic raiders who attack human systems. The main antagonists of Squadron 42 lore. You'll see Vanduul ships (Scythe, Glaive) as enemies.",
  },
  {
    term: 'Banu',
    category: 'Community',
    definition:
      "Alien trader race — pacifist merchants known for the Defender ship. Their ships look like polished sea creatures. Friendly to humans.",
  },
  {
    term: "Xi'an",
    category: 'Community',
    definition:
      "Long-lived alien race with sleek, organic ship designs. The Khartu-Al and Nox come from Xi'an culture. Diplomatic relations with humans are complicated.",
  },
  {
    term: 'Tevarin',
    category: 'Community',
    definition:
      "Alien race conquered by humans during the Tevarin Wars. Lore-heavy backstory; the Esperia Prowler is a Tevarin ship preserved by enthusiasts.",
  },
  {
    term: 'FireMedicSlim',
    category: 'Community',
    definition:
      "Doc_Flanigan's friend and the sole reason DayOneCitizen exists. FireMedicSlim had the patience to sit down and walk Doc through Star Citizen when Doc was ready to quit — at which point everything clicked. He is also the reason Doc is now broke. Introducing someone to this game is a financial liability.",
  },
  {
    term: 'Daymar Rally',
    category: 'Community',
    definition:
      "A famous community event — a vehicle rally across Daymar's surface using Cyclones, Greycats, Tonks, and anything else with wheels. Fan-organized, regularly recurring.",
  },
  {
    term: 'WeFan',
    category: 'Community',
    definition:
      "Slang reaction — 'we, the fans' — used in arguments about whether CIG owes the community something specific. Often ironic.",
  },
  {
    term: 'Polish Pass',
    category: 'Community',
    definition:
      "A patch focused on bug-fixing and stability rather than new features. Often used hopefully ('we just need a polish pass') or sarcastically ('that polish pass didn't polish much').",
  },

  // ─────────────── Currency ───────────────
  {
    term: 'UEC',
    category: 'Currency',
    definition:
      'United Earth Credits — the in-game currency used for buying ships, weapons, and gear in the live game. UEC carries between play sessions and patches.',
  },
  {
    term: 'aUEC',
    category: 'Currency',
    definition:
      'Alpha UEC — the test-server currency used during Star Citizen alpha. It usually wipes when CIG resets the player database between major patches.',
  },
  {
    term: 'REC',
    category: 'Currency',
    definition:
      "Rental Equipment Credits — earned by playing Arena Commander or Star Marine. Used to rent ships and weapons for 7-day windows. Doesn't apply in the PU.",
  },
  {
    term: 'Store Credit',
    category: 'Currency',
    definition:
      "Real-money credit on your RSI account, earned by melting pledges. Spendable on any pledge in the store, refunds back to your account, never expires.",
  },
  {
    term: 'Melt',
    category: 'Currency',
    definition:
      "To return a pledge for store credit. Unlike a real refund, melting is instant and the credit only spends inside the RSI store. Reversible via Buyback.",
    also: 'Melting',
  },
  {
    term: 'Buyback Token',
    category: 'Currency',
    definition:
      "Lets you re-buy a melted pledge with cash. Each account gets one free Buyback per quarter; more cost a few dollars each. Useful when you melt a ship and regret it.",
  },
  {
    term: 'CCU',
    category: 'Currency',
    definition:
      "Cross-Chassis Upgrade — a token that lets you upgrade one ship pledge to a more expensive ship by paying just the difference. Backers stockpile CCUs during sales.",
  },
  {
    term: 'CCU Game',
    category: 'Currency',
    definition:
      "The practice of buying long chains of CCUs during sales to upgrade a cheap starter ship up to an expensive one for less than full price. A backer mini-game in itself.",
    also: 'CCU Chain',
  },
  {
    term: 'LTI',
    category: 'Currency',
    definition:
      "Lifetime Insurance — a perk attached to certain ship pledges. It means if you lose the ship in-game, you can re-claim it indefinitely without paying an insurance premium.",
  },

  // ─────────────── Ships — Manufacturers ───────────────
  {
    term: 'Origin',
    category: 'Ships',
    definition:
      "Ship manufacturer known for sleek, luxury designs — the 300i, 600i, and the famous 890 Jump. Apple-meets-spaceship aesthetic.",
  },
  {
    term: 'Anvil',
    category: 'Ships',
    definition:
      "Military-grade ship manufacturer — Hornets, Carracks, the Valkyrie. Anvil ships are tough, utilitarian, and combat-focused.",
  },
  {
    term: 'Drake',
    category: 'Ships',
    definition:
      "Budget, rugged manufacturer — the Cutlass, Caterpillar, Corsair. Often described as the 'pickup truck' of the 'Verse. Loved by pirates and haulers alike.",
  },
  {
    term: 'MISC',
    category: 'Ships',
    definition:
      "Musashi Industrial and Starflight Concern — industrial manufacturer behind cargo ships like the Freelancer and Hull series, plus the Prospector miner.",
  },
  {
    term: 'Aegis',
    category: 'Ships',
    definition:
      "Older military manufacturer — the Avenger, Gladius, Vanguard, and Reclaimer. Aegis ships have a worn, military-surplus look.",
  },
  {
    term: 'Crusader Industries',
    category: 'Ships',
    definition:
      "Maker of the Mercury Star Runner, Ares, A1 Spirit, and the gigantic C2/A2 Hercules. Civilian-and-military-spec hardware out of Orison.",
  },
  {
    term: 'Argo',
    category: 'Ships',
    definition:
      "Industrial utility manufacturer — the MPUV ('the Argo'), MOLE mining ship, RAFT cargo hauler, and SRV recovery vehicle. Boxy and purposeful.",
  },
  {
    term: 'Tumbril',
    category: 'Ships',
    definition:
      "Ground vehicle manufacturer — the Cyclone scout buggy and the Nova heavy tank. Treads, wheels, guns. Owned by Aopoa parent group.",
  },
  {
    term: 'Greycat',
    category: 'Ships',
    definition:
      "Personal vehicle and utility manufacturer — the PTV (mini buggy), ROC mining vehicle, STV scout buggy, and the multi-tool. Small, useful, everywhere.",
  },
  {
    term: 'Esperia',
    category: 'Ships',
    definition:
      "Specialty manufacturer reproducing rare alien ships for human pilots — Talon (Xi'an), Prowler (Tevarin), Glaive (Vanduul). Limited-edition pledges.",
  },

  // ─────────────── Ships — Specific ───────────────
  {
    term: 'Aurora',
    category: 'Ships',
    definition:
      "The smallest, cheapest starter ship from RSI. Cramped but capable of light cargo, basic combat, and short hauls. A common first ship for new backers.",
    also: 'Aurora MR, Aurora LN, Aurora CL, Aurora ES',
  },
  {
    term: 'Mustang',
    category: 'Ships',
    definition:
      "A starter ship from Consolidated Outland. Slightly nimbler than the Aurora, popular with new pilots who want to dogfight early.",
    also: 'Mustang Alpha, Mustang Beta, Mustang Delta, Mustang Gamma',
  },
  {
    term: 'Hornet',
    category: 'Ships',
    definition:
      "Anvil's iconic light fighter — the F7C series. Variants include the F7A military, F7C-M (gimbaled), F7C-R (recon), and the wider F7-Mk II refresh. The 'workhorse' fighter.",
  },
  {
    term: 'Gladius',
    category: 'Ships',
    definition:
      "Aegis light fighter — fast, agile, light on cargo. Beloved by dogfighters and the meta darling for several patches running.",
  },
  {
    term: 'Avenger',
    category: 'Ships',
    definition:
      "Aegis multi-role light fighter — Titan (cargo), Stalker (bounty hunting cell), Warlock (EMP). Punches above its weight class for the price.",
    also: 'Avenger Titan, Avenger Stalker, Avenger Warlock',
  },
  {
    term: 'Vanguard',
    category: 'Ships',
    definition:
      "Aegis heavy fighter — Warden, Sentinel, Harbinger, Hoplite. Long-range, heavily armed, has a small living quarter behind the cockpit. The 'space SUV.'",
  },
  {
    term: 'Cutlass',
    category: 'Ships',
    definition:
      "Drake's iconic medium ship — Black (combat/transport), Red (medical), Blue (bounty), Steel (drop-ship). One of the most popular community ships.",
  },
  {
    term: 'Caterpillar',
    category: 'Ships',
    definition:
      "Drake's heavy cargo hauler — modular, ugly, beloved. Carries tons of SCU and a small fighter inside. The classic pirate ship.",
  },
  {
    term: 'Freelancer',
    category: 'Ships',
    definition:
      "MISC's medium freighter — DUR (explorer), MAX (cargo), MIS (combat), MAA (PvP). Popular trader ship for solo and small crews.",
  },
  {
    term: 'Constellation',
    category: 'Ships',
    definition:
      "RSI's flagship multi-crew ship line — Andromeda (combat), Aquila (exploration), Phoenix (luxury), Taurus (cargo). Comes with a parasite snub fighter.",
  },
  {
    term: 'Carrack',
    category: 'Ships',
    definition:
      "Anvil's premier exploration ship — long-range, jumppoint-survey-ready, has a Pisces snub, a med bay, a rover bay, and a hangar. The 'home in space.'",
  },
  {
    term: '890 Jump',
    category: 'Ships',
    definition:
      "Origin's super-yacht — luxury VIP transport with a hangar, pool, casino, and helipad. The signature 'whale' ship and a frequent piracy target.",
  },
  {
    term: 'Hammerhead',
    category: 'Ships',
    definition:
      "Aegis heavy gunship — six manned turrets, designed to anchor a fleet against fighter swarms. Anti-snub specialist.",
  },
  {
    term: 'Polaris',
    category: 'Ships',
    definition:
      "RSI's destroyer-class capital ship with torpedo tubes and a hangar. The smallest 'capital' and the practical ceiling for most active orgs.",
  },
  {
    term: 'Idris',
    category: 'Ships',
    definition:
      "Aegis frigate — large multi-crew capital with a railgun, hangar, multiple decks. Long-promised for player ownership; very expensive when it appears.",
  },
  {
    term: 'Javelin',
    category: 'Ships',
    definition:
      "Aegis destroyer — bigger than the Idris, requires a full org to crew. Sold during anniversary sales as a rare backer pledge.",
  },
  {
    term: 'Bengal',
    category: 'Ships',
    definition:
      "Massive UEE Navy carrier. NPC-only — players can't own one. The setpiece ship of Squadron 42.",
  },
  {
    term: 'Hull',
    category: 'Ships',
    definition:
      "MISC's modular cargo hauler line, from Hull A through Hull E. The biggest dedicated freighters in the game when fully loaded.",
  },
  {
    term: 'Reclaimer',
    category: 'Ships',
    definition:
      "Aegis large salvage ship — strips derelicts of hull plating and components. Multi-crew, slow, very profitable in Pyro.",
  },
  {
    term: 'Vulture',
    category: 'Ships',
    definition:
      "Drake's solo salvage ship. Smaller and more manageable than the Reclaimer. The new-player gateway into salvage gameplay.",
  },
  {
    term: 'Prospector',
    category: 'Ships',
    definition:
      "MISC solo mining ship — beam, scanner, ore cargo bays. The standard 'first miner' for new players in the mining loop.",
  },
  {
    term: 'MOLE',
    category: 'Ships',
    definition:
      "Argo Multi-Operator Laser Extractor — three-mining-laser group ship. Higher yield than the Prospector, but needs friends.",
  },
  {
    term: 'ROC',
    category: 'Ships',
    definition:
      "Greycat Remote Ore Collector — small ground vehicle for cracking and collecting gemstone deposits on planet surfaces. Easy money loop for new players.",
  },
  {
    term: 'Cyclone',
    category: 'Ships',
    definition:
      "Tumbril's small ground buggy. Variants: TR (turret), AA (anti-air), MT (missile turret), RC (recon), RN (light scout). Fits in most medium ship cargo bays.",
  },
  {
    term: 'Nova',
    category: 'Ships',
    definition:
      "Tumbril Nova — heavy ground tank with treads, a main gun, and a coaxial. Slow, brutal, used for bunker assaults and ground PvP. Community calls it the 'Tonk.'",
    also: 'Tonk, the Tank',
  },
  {
    term: 'Tonk',
    category: 'Community',
    definition:
      "Community slang for the Tumbril Nova heavy tank. Sometimes also extended to the Anvil Ballista (anti-air vehicle on tracks). When someone says 'roll out the tonk,' they mean a tank push.",
  },
  {
    term: 'Ballista',
    category: 'Ships',
    definition:
      "Anvil ground anti-air vehicle — quad missile launcher on an 8-wheeled chassis. Used to deny airspace during ground engagements. Sometimes lumped under the 'tonk' label.",
  },
  {
    term: 'Pisces',
    category: 'Ships',
    definition:
      "The Anvil C8 — a small parasite snub stored in the Carrack and Carrack-class ships. Variants: standard, Expedition, X1 racing. Used for short-range scouting.",
    also: 'C8',
  },
  {
    term: 'Merlin',
    category: 'Ships',
    definition:
      "Kruger Intergalactic snub fighter housed in the Constellation line. Tiny, fast, and only useful when launched from a parent ship.",
  },
  {
    term: 'Nox',
    category: 'Ships',
    definition:
      "Aopoa Nox — a Xi'an-design hover bike. Quick, exposed, a popular racing and recon vehicle.",
  },
  {
    term: 'Ursa Rover',
    category: 'Ships',
    definition:
      "RSI Ursa — armored 4-wheeled rover. Often comes with the Constellation Aquila or sold separately. Solid for moon-side expeditions.",
  },

  // ─────────────── Gameplay ───────────────
  {
    term: 'PU',
    category: 'Gameplay',
    definition:
      'Persistent Universe — the live, always-online Star Citizen world where most players spend their time. Your characters, ships, and credits live here.',
  },
  {
    term: 'Free Fly',
    category: 'Gameplay',
    definition:
      "A promotional event where Star Citizen is free to download and play for a limited window. The best way to try the game without pledging. See freeflyevent.com for the next one.",
  },
  {
    term: 'Hangar',
    category: 'Gameplay',
    definition:
      "Your personal in-game space at a station where your ships are stored. You can walk around, customize, and spawn ships to fly out from here.",
  },
  {
    term: 'ASOP',
    category: 'Gameplay',
    definition:
      'Automated Ship Operations and Placement — the in-game terminal where you retrieve, store, or insurance-claim your ships. Pronounced "A-sop."',
  },
  {
    term: 'Landing Pad',
    category: 'Gameplay',
    definition:
      "A numbered platform at a station or city spaceport where your ship is assigned when you request it from the ASOP terminal. Each pad has a number — finding the right one is a rite of passage for new players.",
    also: 'Pad',
  },
  {
    term: 'Global Chat',
    category: 'Gameplay',
    definition:
      "The server-wide text chat channel visible to all players on your game instance. The quickest way to ask a question, call for help, or trade o7s with strangers. Veterans are usually patient — ask away.",
    also: 'global',
  },
  {
    term: 'Hab',
    category: 'Gameplay',
    definition:
      "Short for habitation room — your character's personal room at a station or city. A place to store gear and set your respawn point. Press the bed to sleep and lock in your location.",
    also: 'Hab Room, Habitation',
  },
  {
    term: 'Loaner Ship',
    category: 'Gameplay',
    definition:
      "A temporary ship CIG provides when your pledged ship isn't yet flyable in the live game, or during Free Fly events. Loaners give everyone something to fly without an additional purchase.",
    also: 'Loaner',
  },
  {
    term: 'Quantum Travel',
    category: 'Gameplay',
    definition:
      "Faster-than-light travel between points in a star system. Your ship's quantum drive eats fuel and takes time, but it's how you cross planets and moons.",
    also: 'QT, jumping',
  },
  {
    term: 'Quantum Snare',
    category: 'Gameplay',
    definition:
      "A device — usually fitted to combat ships like the Mantis or Vanguard — that yanks ships out of quantum travel mid-flight. Pirates' favorite ambush tool.",
  },
  {
    term: 'mobiGlas',
    category: 'Gameplay',
    definition:
      "Your character's wrist-mounted computer. It opens missions, manages inventory, summons ships, and handles in-game messages. Press F1.",
    also: 'Mobiglas',
  },
  {
    term: 'PMA',
    category: 'Gameplay',
    definition:
      "Personal Manager App — the mobiGlas tab where you set your character's loadout, armor, and gear. Open with F1, then click the icon.",
  },
  {
    term: 'VMA',
    category: 'Gameplay',
    definition:
      "Vehicle Manager App — the mobiGlas tab where you customize ship loadouts (weapons, components, paint). Open at any ASOP terminal.",
  },
  {
    term: 'Loadout',
    category: 'Gameplay',
    definition:
      "Your kit — weapons, armor, ammo, healing items, mobiGlas attachments. Configurable per character via the PMA.",
  },
  {
    term: 'Inner Thought',
    category: 'Gameplay',
    definition:
      "The contextual interaction system — hold F to see the actions available on whatever you're looking at. Sit, pick up, repair, board.",
  },
  {
    term: 'Armor',
    category: 'Gameplay',
    definition:
      "Wearable protection for your character. Light armor for speed, medium for balance, heavy for high-threat zones like bunkers and PvP.",
  },
  {
    term: 'FPS',
    category: 'Gameplay',
    definition:
      "First-Person Shooter gameplay — the on-foot combat in Star Citizen. You'll do FPS in bunkers, derelict ships, and during ground missions.",
  },
  {
    term: 'PvP',
    category: 'Gameplay',
    definition:
      "Player vs. Player combat — fighting other real players in space or on the ground. Most of the 'Verse is open PvP, with safer law-enforced zones around major stations.",
  },
  {
    term: 'PvE',
    category: 'Gameplay',
    definition:
      "Player vs. Environment — missions and combat against AI enemies. Bounties, bunker clears, and cargo runs are mostly PvE.",
  },
  {
    term: 'Bounty',
    category: 'Gameplay',
    definition:
      "A mission to hunt down and kill a specific NPC criminal for credits. Comes in tiers — VLRT for newbies, ERT for endgame. A reliable income loop.",
  },
  {
    term: 'Salvage',
    category: 'Gameplay',
    definition:
      "Stripping derelict ships for hull material (RMC) and components. Ships like the Vulture and Reclaimer are built for salvage gameplay.",
  },
  {
    term: 'Mining',
    category: 'Gameplay',
    definition:
      "Extracting valuable rocks from asteroids or planet surfaces with a laser, then refining the ore for profit. Ships: Prospector (solo), MOLE (group), ROC (ground).",
  },
  {
    term: 'Refining',
    category: 'Gameplay',
    definition:
      "The post-mining step — drop raw ore at a refinery (Hurston's HDMS, ArcCorp's stations) and pay to convert it into sellable refined material. Affects price and weight.",
  },
  {
    term: 'Cargo',
    category: 'Gameplay',
    definition:
      "Buying goods cheap at one station and selling them high at another. The classic trader loop. Hangar size and SCU capacity are your limits.",
  },
  {
    term: 'SCU',
    category: 'Gameplay',
    definition:
      "Standard Cargo Unit — a 1.25m cube that's the standard cargo measurement in SC. Ship capacity is rated in SCU. 1 SCU = 100 microSCU.",
  },
  {
    term: 'Tractor Beam',
    category: 'Gameplay',
    definition:
      "Tool used to move cargo boxes and small objects through space. Comes as a handheld multi-tool attachment or a ship-mounted version (Hercules, Cutter).",
  },
  {
    term: 'Escort',
    category: 'Gameplay',
    definition:
      "Protecting another player's ship — usually a hauler — through dangerous space. A common org service and a way newer pilots earn from veterans.",
  },
  {
    term: 'Piracy',
    category: 'Gameplay',
    definition:
      "The dark side of trade — interdicting cargo ships and demanding their goods or credits. Legal in Pyro, illegal in Stanton. Carries a CrimeStat.",
  },
  {
    term: 'CrimeStat',
    category: 'Gameplay',
    definition:
      "Your wanted level. Range 1 to 5 — petty trespass to murder of UEE personnel. High CrimeStat blocks station landings and triggers NPC enforcers. Resets in Klescher prison.",
  },
  {
    term: 'Bedlogging',
    category: 'Gameplay',
    definition:
      "Logging out by lying down in your ship's bed. Saves your loadout, your ship state, and your inventory more reliably than logging out from anywhere else. The veteran sleep button.",
    also: 'Bedlog',
  },
  {
    term: 'Hot Drop',
    category: 'Gameplay',
    definition:
      "Inserting directly into combat — usually by quantum-jumping a drop ship into an active fight zone. Risky, fast, and how most bunker ops start.",
  },
  {
    term: 'Gimbal',
    category: 'Gameplay',
    definition:
      "Weapon mount that auto-tracks your reticle within a small cone. Lower DPS than fixed mounts but easier to land hits with. Most starter ships are gimbaled.",
  },
  {
    term: 'Fixed Mount',
    category: 'Gameplay',
    definition:
      "Weapon mount that points wherever the ship's nose points. Higher DPS but you have to actually aim. Pro pilots prefer fixed.",
  },
  {
    term: 'Component',
    category: 'Gameplay',
    definition:
      "A modular ship part — power plant, shield generator, cooler, quantum drive. Each comes in size 1-3 and Civilian/Industrial/Military/Competition tiers.",
  },
  {
    term: 'Power Triangle',
    category: 'Gameplay',
    definition:
      "The cockpit power-management balance between weapons, shields, and engines. Shift power one way mid-fight to dump shields into guns or escape.",
  },
  {
    term: 'MFD',
    category: 'Gameplay',
    definition:
      "Multi-Function Display — the configurable cockpit screens that show shields, power, comms, mining info. Different ships have different MFD layouts.",
  },
  {
    term: 'IFCS',
    category: 'Gameplay',
    definition:
      "Intelligent Flight Control System — the assist software that handles thrusters and stability. Toggle 'decoupled mode' for raw flight without IFCS smoothing.",
  },
  {
    term: 'Medgun',
    category: 'Gameplay',
    definition:
      "A handheld medical tool that revives a downed teammate in the field. Crucial in FPS engagements and bunker clears.",
  },
  {
    term: 'Hospital',
    category: 'Gameplay',
    definition:
      "Major-city medical facility where you respawn after death. Different cities have hospitals at different tiers; choosing a respawn point matters.",
  },
  {
    term: 'NPC',
    category: 'Gameplay',
    definition:
      "Non-Player Character. The AI inhabitants of bunkers, stations, and patrol fleets. Their behavior ranges from competent to comically broken.",
  },

  // ─────────────── Locations ───────────────
  {
    term: 'Stanton',
    category: 'Locations',
    definition:
      "The first playable star system — four corporate-owned planets (ArcCorp, Crusader, Hurston, microTech), each with cities and moons. Mostly safe, law-enforced.",
  },
  {
    term: 'Pyro',
    category: 'Locations',
    definition:
      "The second playable star system, opened in late 2024. Lawless, dangerous, with rougher rewards. Home to outlaws and the most ambitious haulers.",
  },
  {
    term: 'Hurston',
    category: 'Locations',
    definition:
      "Stanton I — a polluted industrial planet owned by Hurston Dynamics. Home of Lorville. Toxic atmosphere outside the city dome. Four moons.",
  },
  {
    term: 'Crusader',
    category: 'Locations',
    definition:
      "Stanton II — a gas giant home to Crusader Industries. The floating city of Orison sits in its atmosphere. Three notable moons: Yela, Daymar, Cellin.",
  },
  {
    term: 'ArcCorp',
    category: 'Locations',
    definition:
      "Stanton III — an entire planet covered in ArcCorp's industrial sprawl. Home of Area18. Two moons: Lyria and Wala.",
  },
  {
    term: 'microTech',
    category: 'Locations',
    definition:
      "Stanton IV — a frozen tundra planet owned by the microTech corporation. Home of New Babbage. Three moons: Calliope, Clio, Euterpe.",
  },
  {
    term: 'Lorville',
    category: 'Locations',
    definition:
      "The capital city of Hurston — heavy industrial dome under a polluted sky. Central Business District is the in-city hub. Locked behind security at the gates.",
  },
  {
    term: 'Area18',
    category: 'Locations',
    definition:
      "The capital city of ArcCorp — Blade Runner aesthetic, cyberpunk neon, multi-story shopping. Riker Memorial Spaceport is the landing zone. Often shortened to A18.",
    also: 'A18',
  },
  {
    term: 'New Babbage',
    category: 'Locations',
    definition:
      "The capital city of microTech — Apple-store-clean, glass and white walls. Home of microTech HQ and the Reach observatory. The most polished landing zone.",
  },
  {
    term: 'Orison',
    category: 'Locations',
    definition:
      "Crusader Industries' floating city in the gas-giant atmosphere of Crusader. A series of platforms connected by skybridges. Stunning sunsets, weak structural integrity.",
  },
  {
    term: 'GrimHEX',
    category: 'Locations',
    definition:
      "An outlaw station in an asteroid hollow near Yela. No questions asked, no laws enforced. The unofficial pirate hub of Stanton.",
  },
  {
    term: 'Klescher',
    category: 'Locations',
    definition:
      "A maximum-security prison on Aberdeen. Players with high CrimeStat get sent here on death. Mine prison ore to pay off your sentence — or escape through the tunnels.",
  },
  {
    term: 'Yela',
    category: 'Locations',
    definition:
      "Crusader's icy moon. Home to GrimHEX and the famous Jumptown drug lab outpost. Asteroid belt nearby — popular ambush territory.",
  },
  {
    term: 'Daymar',
    category: 'Locations',
    definition:
      "Crusader's reddish desert moon. Site of the community-run Daymar Rally. Bunkers, shipwrecks, and lots of nothing. A new-player favorite for ground exploration.",
  },
  {
    term: 'Cellin',
    category: 'Locations',
    definition:
      "Crusader's small grey moon. Bunkers, ROC mining sites, and several outposts. Lighter gravity makes ground vehicles drift fun.",
  },
  {
    term: 'Lyria',
    category: 'Locations',
    definition:
      "ArcCorp's icy moon — frozen tundra surface, scattered outposts. Mining sites for gemstone-rich rocks.",
  },
  {
    term: 'Wala',
    category: 'Locations',
    definition:
      "ArcCorp's other moon — barren and rocky. Site of several bounty bunker missions.",
  },
  {
    term: 'Aberdeen',
    category: 'Locations',
    definition:
      "Hurston moon — site of Klescher prison. Hot, ashy surface, very few visitors except prisoners and bounty hunters.",
  },
  {
    term: 'Calliope',
    category: 'Locations',
    definition:
      "microTech moon — frozen, scientific outposts, occasional bunkers. The least-populated moon in the system.",
  },
  {
    term: 'Clio',
    category: 'Locations',
    definition:
      "microTech moon — small icy body, mostly used for mining and bounty pickups.",
  },
  {
    term: 'Euterpe',
    category: 'Locations',
    definition:
      "microTech moon — frozen scientific outposts and a few abandoned facilities. Mostly cosmetic with light gameplay activity.",
  },
  {
    term: 'Pyro V',
    category: 'Locations',
    definition:
      "The largest playable planet in the Pyro system — a gas giant with several moons. Center of activity in lawless Pyro space.",
  },
  {
    term: 'Welcome Hub',
    category: 'Locations',
    definition:
      "The new-player landing area added in 4.0. A Stanton orientation station with tutorials, kiosks, and starter missions to help newbies before they head to the city.",
  },
  {
    term: 'Port Olisar',
    category: 'Locations',
    definition:
      "The original player-accessible station in Stanton, orbiting the gas giant Crusader. The first place most players ever landed. Removed from the game in 2021 and replaced by Orison and the current station network — but it lives on in every veteran's first-session story.",
  },
  {
    term: 'Bunker',
    category: 'Locations',
    definition:
      "Underground combat compounds on planet surfaces filled with NPC enemies. Mission targets include hostage rescues, bounties, and cargo recovery.",
  },
  {
    term: 'Derelict',
    category: 'Locations',
    definition:
      "Abandoned ships drifting in space, often stripped or filled with hostiles. Salvage them, loot them, or use them as ambush sites.",
  },
  {
    term: 'Jumpgate',
    category: 'Locations',
    definition:
      "A wormhole between star systems. The Pyro jumpgate from Stanton is the first one open to players. Eventually all systems will be linked this way.",
    also: 'Jump Point',
  },
  {
    term: 'Jumptown',
    category: 'Locations',
    definition:
      "An outlaw drug lab on Yela. Site of regular community-organized 'Jumptown 2.0' raid events — buy product, fight everyone else, profit. Pure chaos.",
    also: 'JT',
  },

  // ─────────────── Technical / Patches ───────────────
  {
    term: 'PTU',
    category: 'Technical',
    definition:
      'Public Test Universe — a test server where players try upcoming patches before they go live. Backers above a certain pledge tier or who get invited can access it.',
  },
  {
    term: 'EPTU',
    category: 'Technical',
    definition:
      "Evocati PTU — the earliest, NDA-bound test wave. Limited to a small group of long-time backers. Often the first to break, the first to feedback.",
    also: 'Evocati',
  },
  {
    term: 'Live',
    category: 'Technical',
    definition:
      "The main public branch — the version everyone plays by default. Distinguished from PTU/EPTU during testing windows.",
  },
  {
    term: 'Wipe',
    category: 'Technical',
    definition:
      "When CIG resets player progress — credits, aUEC, owned items — usually with a major patch. Pledged ships and UEC stay; everything earned in-game resets.",
  },
  {
    term: 'Hangar Ready',
    category: 'Technical',
    definition:
      "A status meaning the ship exists in your hangar but isn't yet flyable in the live game. CIG ships go from concept → hangar ready → flyable over time.",
  },
  {
    term: '30k',
    category: 'Technical',
    definition:
      "The infamous server crash error — '30000.' Means the server lost contact and your session is dead. Common enough that it's been a meme for years. Restart the client.",
    also: '30000',
  },
  {
    term: 'Server Meshing',
    category: 'Technical',
    definition:
      "CIG's long-promised tech that splits the universe across many servers seamlessly. The path from per-shard to a single 'Verse' for all players. Static meshing landed in 4.0.",
  },
  {
    term: 'PES',
    category: 'Technical',
    definition:
      "Persistent Entity Streaming — the database backbone that makes objects (your dropped weapons, that helmet on the floor) survive server crashes and reboots.",
    also: 'Persistent Entity Streaming',
  },
  {
    term: 'iCache',
    category: 'Technical',
    definition:
      "Item cache — the back-end that tracks every persistent object you own and where it is in the universe. Often blamed when items go missing.",
  },
  {
    term: 'Long Term Persistence',
    category: 'Technical',
    definition:
      "The system that keeps your character's inventory across patches without a wipe. Until LTP is solid, wipes happen.",
    also: 'LTP',
  },
  {
    term: 'Maelstrom',
    category: 'Technical',
    definition:
      "CIG's upcoming destruction tech — physically modeled ship damage. Hull plates fly off, components rip out, holes go through metal. In dev for years; partial features have shipped.",
  },
  {
    term: 'Quanta',
    category: 'Technical',
    definition:
      "CIG's planned AI economy entities — virtual NPCs that simulate trade, production, and demand across the universe in real time. Long-term feature, still mostly invisible.",
  },
  {
    term: 'Tier 0/1',
    category: 'Technical',
    definition:
      "CIG dev terminology. Tier 0 means a feature exists in barebones form; Tier 1 is the polished version. You'll see references in patch notes ('salvage Tier 1' etc.).",
  },
]

export const CATEGORIES: GlossaryCategory[] = [
  'Currency',
  'Ships',
  'Gameplay',
  'Community',
  'Technical',
  'Locations',
]
