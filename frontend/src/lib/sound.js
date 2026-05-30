// Web Audio synthesized retro 8-bit sounds. No external files.
// Royalty-free by definition — generated entirely on the client.
class SoundManager {
  constructor() {
    this.muted = false;
    this.ctx = null;
  }
  init() {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      this.ctx = null;
    }
  }
  setMuted(m) { this.muted = m; }

  _beep({ freq = 440, type = 'square', dur = 0.08, gain = 0.06, slide = 0 }) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const t0 = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t0 + dur);
    g.gain.setValueAtTime(gain, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g); g.connect(this.ctx.destination);
    osc.start(t0); osc.stop(t0 + dur + 0.02);
  }

  play(kind) {
    switch (kind) {
      case 'startup':
        this._beep({ freq: 392, dur: 0.12, gain: 0.05 });
        setTimeout(() => this._beep({ freq: 523, dur: 0.12, gain: 0.05 }), 110);
        setTimeout(() => this._beep({ freq: 659, dur: 0.18, gain: 0.05 }), 220);
        break;
      case 'open':
        this._beep({ freq: 660, dur: 0.06, gain: 0.04, slide: 200 });
        break;
      case 'close':
        this._beep({ freq: 520, dur: 0.06, gain: 0.04, slide: -200 });
        break;
      case 'hover':
        this._beep({ freq: 880, dur: 0.025, gain: 0.012, type: 'triangle' });
        break;
      case 'trash':
        this._beep({ freq: 220, dur: 0.18, gain: 0.05, type: 'sawtooth', slide: -100 });
        break;
      default:
        break;
    }
  }
}

export const sound = new SoundManager();
