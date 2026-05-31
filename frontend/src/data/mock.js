// Mock data for Niyati OS 2026 — pixel-art fashion portfolio
// All copy below is placeholder content shaped to match Niyati's tone.
// Replace with real project write-ups + images when she shares the folders.

export const designer = {
  name: 'NIYATI GUMBER',
  title: 'Fashion Design Student · NIFT',
  tagline: 'Transforming nature, emotion, and structure into wearable stories.',
  email: 'niyati.gumber@nift.ac.in',
  behance: 'https://www.behance.net/niyatigumber',
  instagram: '#',
  resume: 'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/urhxmmgo_portfolio%20%282%29.jpg',
};

export const aboutSections = [
  {
    heading: "Hello, I'm Niyati.",
    body:
      'I am a fashion design student driven by a passion for storytelling through design. My work focuses on clean, minimal aesthetics combined with strong conceptual narratives, translating ideas and emotions into thoughtfully constructed garments.\n\nI am particularly interested in surface development, structure, and the interplay of form and movement, constantly exploring ways to create designs that are both visually compelling and meaningful.',
  },
];

const lorem = {
  concept:
    'A study in stillness — translating an architectural quality of light, line and weight into wearable form. The collection asks what a garment can borrow from a building it has stood beside.',
  inspiration:
    'Sunlit corridors, weathered stone, the geometry of a cloister at dusk. Research drew from Brutalist domestic spaces, mid-century Japanese interiors and the soft volumes of Tadao Ando.',
  research:
    'A six-week archive of architectural photography, material swatches, and pattern studies. Notes on how seams could behave like load-bearing walls; how a hem could hold a threshold.',
  process:
    'Iterative draping on the half-scale dressform. Two muslins, three calicos, and a final toile in raw linen. Every seam is hand-finished; every fastening is concealed.',
  garmentDevelopment:
    'A three-piece capsule — an architectural overcoat, a sculpted shift, and an enveloping mantle. Colour palette pulled from limewash plaster and aged brass.',
  finalOutcome:
    'The pieces photograph as quiet objects first and garments second. They are intended to be lived in slowly.',
  reflection:
    'The collection taught me that calm is a discipline. Restraint produced more emotion than ornament ever could.',
};

export const projects = [
  {
    id: 'architectural-serenity',
    name: 'Architectural Serenity',
    iconKey: 'shell',
    accent: '#B07585',
    short: 'A study in stillness — architecture worn close to the skin.',
    inspirationImage: 'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/cce1v3ws_portfolio.jpg',
    processImage: 'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/f9hvofjq_portfolio%20%284%29.jpg',
    finalOutcomeImages: [
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/7lo3hnig_portfolio%20%286%29.jpg',
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/h30j86b3_portfolio%20%285%29.jpg',
    ],
    tabLabels: { process: 'Final Range' },
    hideTabs: ['research', 'garmentDevelopment'],
    sections: { ...lorem },
    desktopSlot: 0,
  },
  {
    id: 'self-radiance',
    name: 'Self Radiance',
    iconKey: 'orb',
    accent: '#A695C4',
    short: 'Bioluminescent garments that glow with inner light.',
    inspirationImage: 'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/xb1v0j6c_portfolio%20%281%29.jpg',
    processImage: 'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/4bqbltyz_portfolio%20%287%29.jpg',
    finalOutcomeImages: [
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/defd30qy_29.jpg',
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/fm6bjasb_30.jpg',
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/mrlvfgpf_31.jpg',
    ],
    hideTabs: ['garmentDevelopment'],
    sections: {
      ...lorem,
      concept:
        'A meditation on inner light — translating the quiet glow of deep-sea bioluminescence into garments that breathe. The wearer carries their own radiance.',
      inspiration:
        'Bioluminescent plankton, fireflies at dusk, the soft phosphor of a CRT screen. References to Iris van Herpen and the architecture of light.',
      finalOutcome:
        'The complete Self Radiance lookbook — concept, process, and final looks — opens directly inside the window as a scrollable portfolio.',
    },
    desktopSlot: 1,
  },
  {
    id: 'digital-atelier',
    name: 'Digital Atelier',
    iconKey: 'monitor',
    accent: '#7A8FA8',
    short: 'A digital lookbook — Tommy Hilfiger SS27, viewed through the screen.',
    tabLabels: { research: 'Brand Research', reflection: 'Technical Drawing' },
    researchImages: [
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/m33ditn2_20.jpg',
    ],
    processImages: [
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/6fq8psel_21.jpg',
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/c42am2q0_22.jpg',
    ],
    finalOutcomeImages: [
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/sbgsaayb_23.jpg',
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/0qdxdo24_24.jpg',
    ],
    reflectionImages: [
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/rzp2204g_25.jpg',
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/swbicujs_26.jpg',
    ],
    hideTabs: ['garmentDevelopment'],
    sections: {
      ...lorem,
      concept:
        'Digital Atelier is a screen-first lookbook for a Tommy Hilfiger SS27 capsule — heritage tailoring re-cut through a digital, post-runway lens. The collection is designed to live on a monitor before it ever lives on a body.',
      inspiration:
        'Heritage Americana, mid-century catalogue layouts, the visual grammar of early web fashion editorials. References to the Hilfiger archive viewed through a CRT.',
      finalOutcome:
        'The collection arrives as a digital portfolio — pages, looks, and process documentation embedded directly inside the Atelier window.',
    },
    desktopSlot: 2,
  },
  {
    id: 'reimagining-jo-march',
    name: 'Reimagining Jo March',
    iconKey: 'bag',
    accent: '#C8A47E',
    short: 'A study in monogram, woven leather and quiet luxury.',
    tabLabels: { finalOutcome: 'Final Snapshots' },
    hideTabs: ['concept', 'inspiration', 'process', 'garmentDevelopment', 'reflection'],
    researchImages: [
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/h9s331ka_portfolio%20%289%29.jpg',
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/1clbm7sn_portfolio%20%288%29.jpg',
    ],
    finalOutcomeImages: [
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/kbpx2hum_portfolio%20%2812%29.jpg',
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/ks4wfyme_portfolio%20%2811%29.jpg',
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/s5cdo2vl_portfolio%20%2810%29.jpg',
    ],
    sections: {
      ...lorem,
      concept:
        'A meditation on identity reduced to two letters. The collection studies how monogram, when handled with restraint, becomes the loudest form of luxury.',
    },
    desktopSlot: 3,
  },
  {
    id: 'floral-allure',
    name: 'Stories of Heirloom',
    iconKey: 'flower',
    accent: '#D89AAE',
    short: 'Seed-to-stitch craft — heirloom narratives woven through living indigo and rural Indian ateliers.',
    researchImages: [
      'https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/1o6kpco0_portfolio%20%2813%29.jpg',
    ],
    sections: {
      ...lorem,
      concept:
        'A study of 11:11 — a brand that treats clothing as a bridge between wearer, artisan and nature. The collection learns from a seed-to-stitch philosophy, where decentralised craft clusters, natural indigo and embroidered artisan signatures replace corporate tags.',
    },
    desktopSlot: 4,
  },
  {
    id: 'visual-storytelling',
    name: 'Visual Storytelling',
    iconKey: 'sketchbook',
    accent: '#7A4B57',
    short: 'Editorial illustrations, moodboards and process pages.',
    sections: {
      ...lorem,
      concept:
        'A growing archive of illustration, collage and moodboard work — the visual language that precedes every collection.',
    },
    desktopSlot: 5,
  },
  {
    id: 'writing',
    name: 'Writing & Creative Work',
    iconKey: 'typewriter',
    accent: '#6B6259',
    short: 'Essays, design notes and short reflections.',
    sections: {
      ...lorem,
      concept:
        'Long-form writing on quiet luxury, narrative design and the philosophy that sits behind each collection.',
    },
    desktopSlot: 6,
  },
];

export const sideProjects = [
  { id: 'cyber-tailoring', name: 'Cyber-Tailoring', note: 'A study in digital pattern-making.' },
  { id: 'self-sustaining', name: 'Self-Sustaining Radiance', note: 'Solar-charged garment systems.' },
  { id: 'material-transformations', name: 'Material Transformations', note: 'Discarded textiles, rebuilt.' },
  { id: 'editorial-lens', name: 'The Editorial Lens', note: 'Styling & art direction work.' },
];

export const writingPieces = [
  {
    id: 'quiet-luxury',
    title: 'On Quiet Luxury',
    date: 'March 2025',
    excerpt:
      'Quiet luxury is not the absence of ornament. It is the discipline of letting one perfect detail carry the whole garment.',
  },
  {
    id: 'architecture-as-pattern',
    title: 'Architecture as Pattern Block',
    date: 'January 2025',
    excerpt:
      'A cloister is a sleeve. A threshold is a hem. The longer I study buildings, the more I draft like a mason.',
  },
  {
    id: 'bioluminescence',
    title: 'A Note on Bioluminescence',
    date: 'November 2024',
    excerpt:
      'The deep sea taught me that the most luminous things are also the quietest. Glow lives in patience.',
  },
];

export const rejectedConcepts = [
  { title: 'Inflatable Couture', reason: 'Beautiful but unsittable.' },
  { title: 'Garments made of Glass', reason: 'A poem; not a wardrobe.' },
  { title: 'Edible Embroidery', reason: 'The moodboard was sticky.' },
  { title: 'Hologram Wedding Dress', reason: 'Saved for later.' },
  { title: '7am Runway Show', reason: 'No one woke up.' },
];

export const dockItems = [
  { id: 'about', label: 'About', iconKey: 'silhouette' },
  { id: 'resume', label: 'Resume', iconKey: 'document' },
  { id: 'projects', label: 'Projects', iconKey: 'sketchbook' },
  { id: 'behance', label: 'Behance', iconKey: 'be' },
  { id: 'email', label: 'Email', iconKey: 'envelope' },
  { id: 'instagram', label: 'Instagram', iconKey: 'ig' },
];

export const desktopIcons = [
  ...projects,
  { id: 'about-me', name: 'About Me', iconKey: 'silhouette', accent: '#7A4B57', desktopSlot: 7, isAbout: true },
  { id: 'cv', name: 'CV', iconKey: 'cv', accent: '#7A4B57', desktopSlot: 8, isCv: true },
  { id: 'contact', name: 'Contact', iconKey: 'envelope', accent: '#B07585', desktopSlot: 9, isContact: true },
];
