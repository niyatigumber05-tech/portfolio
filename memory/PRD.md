# Niyati OS — Pixel-Art Fashion Portfolio

## Original Problem Statement
Build a highly immersive pixel-art fashion portfolio website for Niyati Gumber (Fashion Design student) that feels like a nostalgic retro macOS-inspired operating system. Purely static frontend. Behance + Gmail integrated. Boot screen, top menu bar, draggable/resizable windows, custom pixel character (dress form), glass-like dock, custom sewing-machine cursor, subtle 8-bit sounds.

## Tech Stack
- React 19 + Tailwind CSS
- No backend, no DB — fully static
- Assets served from Emergent customer-assets CDN

## Architecture
```
/app/frontend/src/
├── App.js                   # State, background, window manager
├── data/mock.js             # Icons, projects, dock, config
├── lib/sound.js             # 8-bit audio manager
└── components/
    ├── BootScreen.jsx
    ├── Desktop.jsx
    ├── Dock.jsx
    ├── MenuBar.jsx
    ├── PixelCharacter.jsx
    ├── PixelIcon.jsx
    ├── Window.jsx
    └── content/
        ├── ProjectContent.jsx
        └── ...
```

## Project Data Schema (mock.js)
A project can declare:
- `pdfUrl`            → renders Final Outcome as embedded PDF (hides Garment Development tab)
- `finalOutcomeImages` (array) → renders Final Outcome as full-width stacked lookbook images
- `researchImages`   (array) → renders Research tab as full-width stacked lookbook images
- `inspirationImage`  → renders Inspiration tab as a single full-image board
- `processImage`      → renders Process tab as a single image
- `tabLabels.process` → custom label for Process tab
- `hideTabs`          → array of tab keys to hide entirely

## Changelog
- 2026-02 — Dock reordered (About · Resume · Projects), Writing menu removed.
- 2026-02 — Desktop background replaced with `cv.jpg`; sticky note removed.
- 2026-02 — `architectural serenity.pdf` added to Final Outcome (then replaced).
- 2026-02 — Architectural Serenity: Inspiration tab now displays `portfolio.jpg` (text removed).
- 2026-05-30 — **Architectural Serenity Final Outcome** replaced PDF with 3 stacked full-width lookbook images (`portfolio (4)`, `portfolio (6)`, `portfolio (5)`); Garment Development tab remains hidden.
- 2026-05-30 — **Self Radiance Process tab** now displays `portfolio.jpg` full-width (replaces text content).
- 2026-05-30 — **Self Radiance Process tab** updated to `portfolio (7).jpg` full-width.
- 2026-05-30 — **Self Radiance Final Outcome** replaced PDF with 3 stacked full-width images (`31.jpg`, `29.jpg`, `30.jpg`).
- 2026-05-30 — Project "When Your Initials Are Enough" renamed to **Reimagining Jo March**; tabs restricted to Research + Final Snapshots only.
- 2026-05-30 — **Reimagining Jo March Research tab** added with 2 stacked full-width images (`portfolio (9).jpg`, `portfolio (8).jpg`). New `researchImages` schema added to ProjectContent renderer.

## Roadmap
### P0
- ✅ Replace PDF with stacked lookbook images for Architectural Serenity

### P1
- Custom sewing-machine cursor states (hover / dragging / clicking) + mobile tap-burst animation
- Mobile responsiveness preserving the OS metaphor

### P2 / Backlog
- Real imagery + content for remaining projects (waiting on user uploads): Self Radiance, Digital Atelier, When Your Initials Are Enough, Floral Allure, Visual Storytelling
- Optional: per-project lookbook templates (cover page, page-numbers)

## Integrations
- Behance link (external)
- Gmail mailto link (external)
- No API keys required

## Health Check
- Broken: none
- Mocked: remaining 5 projects still placeholder content (awaiting user assets)
