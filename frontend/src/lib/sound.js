// Plays pre-made royalty-free 8-bit WAVs (Kenney UI Audio, CC0).
// Files live under /public/sounds/.
class SoundManager {
  constructor() {
    this.muted = false;
    this.unlocked = false;
    // Pre-create Audio objects for snappy playback. We clone on play so
    // overlapping triggers (e.g. rapid hover) don't cut each other off.
    const base = '/sounds/';
    this.assets = {
      startup: new Audio(base + 'switch.wav'),
      open: new Audio(base + 'click.wav'),
      close: new Audio(base + 'close.wav'),
      hover: new Audio(base + 'rollover.wav'),
      click: new Audio(base + 'mouseclick.wav'),
      trash: new Audio(base + 'close.wav'),
    };
    // Per-kind output gain (relative to file). 0..1
    this.gains = {
      startup: 0.55,
      open: 0.35,
      close: 0.4,
      hover: 0.18,
      click: 0.4,
      trash: 0.45,
    };
    Object.values(this.assets).forEach((a) => { a.preload = 'auto'; });
  }

  setMuted(m) { this.muted = m; }

  // Browsers block audio until a user gesture. Call this on first interaction.
  unlock() {
    if (this.unlocked) return;
    this.unlocked = true;
    Object.values(this.assets).forEach((a) => {
      try {
        a.muted = true;
        const p = a.play();
        if (p && p.then) {
          p.then(() => { a.pause(); a.currentTime = 0; a.muted = false; })
            .catch(() => { a.muted = false; });
        } else {
          a.pause(); a.currentTime = 0; a.muted = false;
        }
      } catch (e) { /* noop */ }
    });
  }

  play(kind) {
    if (this.muted) return;
    const src = this.assets[kind];
    if (!src) return;
    try {
      const a = src.cloneNode(true);
      a.volume = this.gains[kind] ?? 0.3;
      const p = a.play();
      if (p && p.catch) p.catch(() => { /* user gesture needed */ });
    } catch (e) { /* noop */ }
  }
}

export const sound = new SoundManager();

// Unlock audio on the first user gesture so subsequent .play() works.
if (typeof window !== 'undefined') {
  const unlock = () => {
    sound.unlock();
    window.removeEventListener('pointerdown', unlock);
    window.removeEventListener('keydown', unlock);
  };
  window.addEventListener('pointerdown', unlock, { once: true });
  window.addEventListener('keydown', unlock, { once: true });
}
