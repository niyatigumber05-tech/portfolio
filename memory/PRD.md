# Niyati Gumber — Pixel-Art Fashion Portfolio (Retro macOS)

## Original Problem Statement
Build an immersive pixel-art fashion portfolio for Niyati Gumber (Fashion Design student, NIFT). The site should feel like a nostalgic retro operating system inspired by macOS:
- Soft pastel gradient sky background
- Boot screen + top menu bar + dock
- Desktop with custom pixel-art icons for projects
- Draggable / resizable window system
- A custom pixel-art character (mannequin / dress-form)
- Sticky note, glass-like dock, custom sewing-machine cursor
- Subtle 8-bit sounds (royalty-free pre-made WAVs)
- Behance: https://www.behance.net/niyatigumber
- Email: niyati.gumber@nift.ac.in

**Scope:** Purely static frontend (React). No backend. Real moodboard/garment images will be supplied later by the user.

## Architecture
```
/app/frontend/src/
├── App.js                       # OS state machine (boot → desktop, windows)
├── index.css                    # Pixel fonts, gradient sky, scanlines
├── data/mock.js                 # Project metadata, icons, dock + desktop items
├── lib/sound.js                 # Plays /public/sounds/*.wav (Kenney UI, CC0)
├── components/
│   ├── BootScreen.jsx           # Retro boot sequence
│   ├── Desktop.jsx              # Icon grid + drag/select
│   ├── Dock.jsx                 # Glass dock with magnify hover
│   ├── MenuBar.jsx              # Top bar: file/edit, clock, mute, weather
│   ├── PixelCharacter.jsx       # Tailor's dress-form mannequin (no head)
│   ├── PixelIcon.jsx            # SVG pixel icons
│   ├── StickyNote.jsx           # Draggable pastel post-it
│   ├── Window.jsx               # Draggable/resizable/expand windows w/ sound
│   └── content/                 # Per-window content views
└── public/sounds/               # click.wav, close.wav, mouseclick.wav,
                                 # rollover.wav, switch.wav  (CC0 Kenney)
```

## Implemented (✅)
- 2026-02 — Boot screen, desktop, menu bar, dock, draggable/resizable windows, pixel icons, sticky note, mock data, gradient sky background.
- 2026-02 — Royalty-free 8-bit WAVs wired through `sound.js` (hover/click/close/open/startup). Audio unlock on first user gesture.
- 2026-02 — Sticky note: removed the "n.g." signature line per user request.
- 2026-02 — `PixelCharacter` redesigned as a classic tailor's dress-form (torso + neck peg + wooden base/pole, **no head**) with idle sway, sewing-pin and measuring-tape poses.
- 2026-02 — Window controls (close / minimize / expand) and MenuBar mute button now trigger appropriate sound effects with hover cues.

## Backlog / Roadmap

### P1 — UX polish (next session)
- Custom "sewing-machine" cursor with hover / dragging / clicking states.
- Tap-burst micro-animation for touch / mobile interactions.
- Mobile responsiveness while keeping the full OS metaphor (no fallback layout).

### P2 — Content
- Drop real moodboard + final garment images into windows when user provides them.
- Add Behance + Gmail buttons on a dedicated "Contact" window with copy-to-clipboard.

### P3 — Nice-to-haves
- Minimize-to-dock animation.
- Trash can with a "delete sketch" gag.
- Window snap zones (left/right halves).

## Testing
- Frontend only (static). Visual smoke screenshot taken after each batch of changes.
- No backend / DB.

## Credentials
N/A — static site, no auth.
