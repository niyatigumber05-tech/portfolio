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
  resume: '#',
};

export const aboutSections = [
  {
    heading: 'Hello, I\'m Niyati.',
    body:
      'I am a narrative-driven fashion designer studying at NIFT. My practice sits at the intersection of architectural form, emotional storytelling and the soft systems of the natural world — shells, light, gardens, weather.',
  },
  {
    heading: 'Practice',
    body:
      'Each collection begins as a question about structure. I research the way a nautilus grows, the way bioluminescence breathes, the way a piece of architecture holds quiet — and translate that into garments that feel both engineered and intimate.',
  },
  {
    heading: 'Approach',
    body:
      'Storytelling first, silhouette second. Every garment is preceded by a written concept, a research wall, and a slow process of material study. The clothes should arrive feeling inevitable.',
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
    sections: { ...lorem },
    desktopSlot: 0,
  },
  {
    id: 'self-radiance',
    name: 'Self Radiance',
    iconKey: 'orb',
    accent: '#A695C4',
    short: 'Bioluminescent garments that glow with inner light.',
    sections: {
      ...lorem,
      concept:
        'A meditation on inner light — translating the quiet glow of deep-sea bioluminescence into garments that breathe. The wearer carries their own radiance.',
      inspiration:
        'Bioluminescent plankton, fireflies at dusk, the soft phosphor of a CRT screen. References to Iris van Herpen and the architecture of light.',
    },
    desktopSlot: 1,
  },
  {
    id: 'recess-club',
    name: 'Recess Club',
    iconKey: 'tennis',
    accent: '#9CAF88',
    short: 'A doodled, soft-tailored sportswear capsule.',
    sections: {
      ...lorem,
      concept:
        'Recess Club is a soft-tailored sportswear capsule built around the rituals of recreation — a tennis afternoon, a notebook in the grass, a kept-secret club.',
    },
    desktopSlot: 2,
  },
  {
    id: 'initials-enough',
    name: 'When Your Initials Are Enough',
    iconKey: 'bag',
    accent: '#C8A47E',
    short: 'A study in monogram, woven leather and quiet luxury.',
    sections: {
      ...lorem,
      concept:
        'A meditation on identity reduced to two letters. The collection studies how monogram, when handled with restraint, becomes the loudest form of luxury.',
    },
    desktopSlot: 3,
  },
  {
    id: 'floral-allure',
    name: 'Floral Allure',
    iconKey: 'flower',
    accent: '#D89AAE',
    short: 'Organic bloom translated into sculpted silhouettes.',
    sections: {
      ...lorem,
      concept:
        'A botanical study — how a single bloom unfolds, layer by layer, and how that unfolding can be sewn into a sleeve, a hem, a bodice.',
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
  { id: 'projects', label: 'Projects', iconKey: 'sketchbook' },
  { id: 'writing', label: 'Writing', iconKey: 'typewriter' },
  { id: 'resume', label: 'Resume', iconKey: 'document' },
  { id: 'behance', label: 'Behance', iconKey: 'be' },
  { id: 'email', label: 'Email', iconKey: 'envelope' },
  { id: 'instagram', label: 'Instagram', iconKey: 'ig' },
];

export const desktopIcons = [
  ...projects,
  { id: 'about-me', name: 'About Me', iconKey: 'silhouette', accent: '#7A4B57', desktopSlot: 7, isAbout: true },
  { id: 'contact', name: 'Contact', iconKey: 'envelope', accent: '#B07585', desktopSlot: 8, isContact: true },
];
