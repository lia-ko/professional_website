// Project data — the source of truth for the Night edition and the /projects/* pages.
// `grad` maps to a gradient class in app.css; swap these for real screenshots later.

export const projects = {
  wander: {
    slug: 'wander',
    title: 'Wander',
    tagline: 'The whole trip on one canvas',
    flabel: 'Feature — the whole trip, one canvas',
    medium: 'Map-first trip planner',
    stack: ['Next.js', 'React', 'TypeScript', 'Leaflet', 'Zustand'],
    grad: 'g-wander',
    cover: '/projects/wander/itinerary.png',
    shots: [
      { src: '/projects/wander/itinerary.png', caption: 'A full day in Prague — timed stops, route lines, and the timeline bar along the bottom.' },
      { src: '/projects/wander/budget.png', caption: 'Budget by category with live CZK → CAD conversion on every expense.' },
      { src: '/projects/wander/stats.png', caption: 'Trip stats — spend breakdown, busiest day, and biggest expense at a glance.' },
      { src: '/projects/wander/wishlist.png', caption: 'A wishlist of maybes you can drag straight onto a day.' },
      { src: '/projects/wander/discover.png', caption: 'Discover places nearby — restaurants, grocers and sights pulled live from OpenStreetMap.' }
    ],
    blurb:
      'Drag an entire multi-day journey across a live map — stops, budgets, and place discovery in one place, with real-time currency and a printable itinerary.',
    body: [
      'Wander started from a simple frustration: planning a trip means juggling a map, a spreadsheet, and a dozen browser tabs. I wanted one canvas where the map is the plan.',
      'You drop stops onto a live map, drag them between days, and the app fills in the connective tissue — travel segments with times, walking-radius rings from your hotel, opening hours pulled from OpenStreetMap, and a running budget that converts foreign spending to your home currency in real time.',
      'Everything persists locally and exports to JSON or a formatted PDF, so a plan survives past the browser session.'
    ],
    features: [
      'Drag-and-drop multi-day itineraries',
      'Place discovery via OpenStreetMap / Overpass',
      'Live-currency budget tracking',
      'PDF & JSON export'
    ],
    links: { repo: '#', live: '#' }
  },

  tessellate: {
    slug: 'tessellate',
    title: 'Tessellate',
    tagline: 'A game made of light',
    flabel: 'Feature — a game made of light',
    medium: 'Meditative game · Godot 4 · C#',
    stack: ['Godot 4', 'C#', 'iOS', 'Android'],
    grad: 'g-tess',
    blurb:
      'Build a stained-glass window one irregular piece at a time. No score, no timer, no right answer — just glass, light, and the quiet of making something only you would make.',
    body: [
      'Tessellate is a calm, freeform game inspired by the craft of stained glass. Irregular glass pieces arrive one at a time; you rotate, flip, and nestle each into a window of your own composition.',
      'There is no target image and no score. Two players given the same pieces make completely different windows — that is the whole point. As the canvas fills, a warm backlight grows, as if sunlight is beginning to pour through.',
      'It is built solo in Godot 4 with C#, designed mobile-first for iOS and Android, with subtle haptics that make each piece feel like it settles into lead came.'
    ],
    features: [
      'One-piece-at-a-time placement with magnetic snap',
      'No timers, no fail states — calm by design',
      'A personal gallery of finished windows',
      'Tactile haptic feedback'
    ],
    links: { repo: '#', live: '#' }
  },

  veles: {
    slug: 'veles',
    title: 'Veles',
    tagline: 'A home for imaginary people',
    flabel: 'Feature — a home for imaginary people',
    medium: 'Worldbuilding studio · Svelte · Electron',
    stack: ['Svelte', 'Electron', 'Vite'],
    grad: 'g-veles',
    blurb:
      'A codex for the stories in your head — characters, lore, portraits and relationships, organised the way writers actually think instead of the way tools usually force.',
    body: [
      'Veles is a studio for worldbuilders. It holds projects full of characters — each with a portrait, biography, personality, relationships, and the little excerpts and tropes that make them feel real.',
      'The interface is built around how writers actually work: a codex you can jump around, multiple layouts for the same entry, and a reader/export view for sharing a finished world.',
      'It runs as both a desktop app (Electron) and on the web, built in Svelte with Vite.'
    ],
    features: [
      'Characters with portraits, lore & relationships',
      'Multiple entry layouts (split · hero · codex · outline)',
      'Reader & export renderer',
      'Desktop and web from one codebase'
    ],
    links: { repo: '#', live: '#' }
  },

  'world-of-darkness': {
    slug: 'world-of-darkness',
    title: 'World of Darkness',
    tagline: 'The tabletop, shipped as software',
    flabel: 'Feature — the tabletop, shipped as software',
    medium: 'Foundry VTT system · Svelte',
    stack: ['Svelte', 'Foundry VTT', 'TypeScript'],
    grad: 'g-wod',
    blurb:
      'A modern, data-driven Vampire: V6 system for the virtual tabletop, built on one engine designed to grow into the whole World of Darkness.',
    body: [
      'This is where my love of tabletop games meets the day job. It is a data-driven game system for Foundry VTT — a proper piece of software, with character sheets, rules, and mechanics rendered from structured data rather than hand-built HTML.',
      'It targets the Vampire: V6 playtest first, but the engine is shared, so other World of Darkness splats can grow on the same foundation.',
      'Built in Svelte on top of Foundry, it is the project that proves the "engineer by day, maker by night" idea is really one person.'
    ],
    features: [
      'Data-driven character sheets & mechanics',
      'Vampire: V6 first, shared engine for more',
      'Custom fonts & styling in-app',
      'Real, in-production tabletop tooling'
    ],
    links: { repo: '#', live: '#' }
  }
};

export const projectOrder = ['tessellate', 'wander', 'veles', 'world-of-darkness'];
