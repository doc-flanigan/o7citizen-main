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
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'o7',
    category: 'Community',
    definition:
      "A salute. The 'o' is a head and the '7' is an arm raised to the brow. You'll see it in chat, on Discord, and in patch notes. It means respect, hello, goodbye, or 'fly safe.'",
    also: '\\o, o7o',
  },
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
    term: 'PTU',
    category: 'Technical',
    definition:
      'Public Test Universe — a test server where players try upcoming patches before they go live. Backers above a certain pledge tier or who get invited can access it.',
  },
  {
    term: 'PU',
    category: 'Gameplay',
    definition:
      'Persistent Universe — the live, always-online Star Citizen world where most players spend their time. Your characters, ships, and credits live here.',
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
    term: 'LTI',
    category: 'Community',
    definition:
      "Lifetime Insurance — a perk attached to certain ship pledges. It means if you lose the ship in-game, you can re-claim it indefinitely without paying an insurance premium.",
  },
  {
    term: 'CCU',
    category: 'Community',
    definition:
      "Cross-Chassis Upgrade — a token that lets you upgrade one ship pledge to a more expensive ship by paying just the difference. Backers stockpile CCUs during sales.",
  },
  {
    term: "the 'Verse",
    category: 'Community',
    definition:
      "Slang for the Star Citizen universe — the in-game world, lore, and community combined. 'See you in the 'Verse' is a common sign-off.",
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
    term: 'Quantum Travel',
    category: 'Gameplay',
    definition:
      "Faster-than-light travel between points in a star system. Your ship's quantum drive eats fuel and takes time, but it's how you cross planets and moons.",
    also: 'QT, jumping',
  },
  {
    term: 'Org',
    category: 'Community',
    definition:
      "Short for organization — a player-run guild or clan. Orgs run trade convoys, mining ops, combat patrols, and community events.",
  },
  {
    term: 'mobiGlas',
    category: 'Gameplay',
    definition:
      "Your character's wrist-mounted computer. It opens missions, manages inventory, summons ships, and handles in-game messages. Press F1.",
    also: 'Mobiglas',
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
    term: 'Aurora',
    category: 'Ships',
    definition:
      "The smallest, cheapest starter ship. Cramped but capable of light cargo, basic combat, and short hauls. A common first ship for new backers.",
  },
  {
    term: 'Mustang',
    category: 'Ships',
    definition:
      "A starter ship from Consolidated Outland. Slightly nimbler than the Aurora, popular with new pilots who want to dogfight early.",
  },
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
    term: 'Hull',
    category: 'Ships',
    definition:
      "MISC's modular cargo hauler line, from Hull A through Hull E. The biggest cargo ships in the game when fully loaded.",
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
    term: 'Cargo',
    category: 'Gameplay',
    definition:
      "Buying goods cheap at one station and selling them high at another. The classic trader loop. Hangar size and SCU capacity are your limits.",
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
  },
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
    term: 'Squadron 42',
    category: 'Community',
    definition:
      "The single-player cinematic campaign set in the same universe — a separate game with a Hollywood cast (Mark Hamill, Gary Oldman). Sold separately from Star Citizen.",
    also: 'SQ42',
  },
  {
    term: 'CitizenCon',
    category: 'Community',
    definition:
      "CIG's annual fan convention where the studio shows what's been built and previews the year ahead. The biggest event on the SC calendar.",
  },
  {
    term: 'IAE',
    category: 'Community',
    definition:
      "Intergalactic Aerospace Expo — the in-game and in-real-life ship show held every November. Ships are free-fly each day and discounted for pledging.",
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
]

export const CATEGORIES: GlossaryCategory[] = [
  'Currency',
  'Ships',
  'Gameplay',
  'Community',
  'Technical',
  'Locations',
]
