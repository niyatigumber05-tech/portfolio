import React from 'react';

// Compact pixel-art icon set rendered as SVG with crisp edges.
// Each icon is drawn on a 16x16 pixel grid scaled to the requested size.
export default function PixelIcon({ name, size = 40, accent }) {
  const Comp = ICONS[name] || ICONS.sketchbook;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className="crisp"
      style={{ imageRendering: 'pixelated' }}
    >
      <Comp accent={accent} />
    </svg>
  );
}

// shorthand pixel
const px = (x, y, c, w = 1, h = 1) => <rect key={`${x}-${y}-${c}-${w}-${h}`} x={x} y={y} width={w} height={h} fill={c} />;

const ICONS = {
  // Nautilus shell — architectural serenity
  shell: ({ accent = '#B07585' }) => (
    <g>
      {px(2, 6, accent, 12, 6)}
      {px(3, 5, accent, 10, 1)}
      {px(4, 4, accent, 8, 1)}
      {px(5, 3, accent, 6, 1)}
      {px(6, 12, accent, 4, 1)}
      {/* inner spiral */}
      {px(5, 7, '#faf6f0', 6, 4)}
      {px(6, 8, accent, 4, 2)}
      {px(7, 8, '#faf6f0', 2, 2)}
      {px(7, 9, accent, 1, 1)}
      {px(2, 11, '#2d2a26', 12, 1)}
      {px(2, 6, '#2d2a26', 1, 6)}
      {px(13, 6, '#2d2a26', 1, 6)}
    </g>
  ),
  // Glowing orb — self radiance
  orb: ({ accent = '#A695C4' }) => (
    <g>
      {/* outer halo */}
      {px(3, 3, '#f7eedf', 10, 10)}
      {px(2, 5, '#f7eedf', 12, 6)}
      {px(5, 2, '#f7eedf', 6, 12)}
      {/* sphere */}
      {px(5, 4, accent, 6, 8)}
      {px(4, 5, accent, 8, 6)}
      {px(5, 4, '#2d2a26', 6, 1)}
      {px(5, 11, '#2d2a26', 6, 1)}
      {px(4, 5, '#2d2a26', 1, 6)}
      {px(11, 5, '#2d2a26', 1, 6)}
      {/* highlight */}
      {px(6, 6, '#faf6f0', 2, 1)}
      {px(6, 7, '#faf6f0', 1, 1)}
    </g>
  ),
  // Tennis ball & notebook — recess club
  tennis: ({ accent = '#9CAF88' }) => (
    <g>
      {/* notebook */}
      {px(2, 4, '#faf6f0', 9, 10)}
      {px(2, 4, '#2d2a26', 9, 1)}
      {px(2, 13, '#2d2a26', 9, 1)}
      {px(2, 4, '#2d2a26', 1, 10)}
      {px(10, 4, '#2d2a26', 1, 10)}
      {px(3, 6, '#c8a47e', 6, 1)}
      {px(3, 8, '#c8a47e', 6, 1)}
      {px(3, 10, '#c8a47e', 4, 1)}
      {/* ball */}
      {px(10, 9, accent, 4, 4)}
      {px(11, 8, accent, 2, 1)}
      {px(11, 13, accent, 2, 1)}
      {px(10, 9, '#2d2a26', 1, 4)}
      {px(13, 9, '#2d2a26', 1, 4)}
      {px(11, 8, '#2d2a26', 2, 1)}
      {px(11, 13, '#2d2a26', 2, 1)}
      {px(11, 10, '#faf6f0', 2, 1)}
    </g>
  ),
  // Luxury bag
  bag: ({ accent = '#C8A47E' }) => (
    <g>
      {/* handle */}
      {px(5, 3, '#2d2a26', 1, 2)}
      {px(6, 2, '#2d2a26', 4, 1)}
      {px(10, 3, '#2d2a26', 1, 2)}
      {/* body */}
      {px(3, 5, accent, 10, 8)}
      {px(3, 5, '#2d2a26', 10, 1)}
      {px(3, 12, '#2d2a26', 10, 1)}
      {px(3, 5, '#2d2a26', 1, 8)}
      {px(12, 5, '#2d2a26', 1, 8)}
      {/* weave texture */}
      {px(4, 7, '#a48863', 8, 1)}
      {px(4, 9, '#a48863', 8, 1)}
      {px(5, 6, '#a48863', 1, 6)}
      {px(8, 6, '#a48863', 1, 6)}
      {px(11, 6, '#a48863', 1, 6)}
      {/* monogram */}
      {px(7, 9, '#2d2a26', 1, 1)}
      {px(8, 10, '#2d2a26', 1, 1)}
    </g>
  ),
  // Flower
  flower: ({ accent = '#D89AAE' }) => (
    <g>
      {/* petals */}
      {px(6, 2, accent, 4, 2)}
      {px(2, 6, accent, 2, 4)}
      {px(12, 6, accent, 2, 4)}
      {px(6, 12, accent, 4, 2)}
      {px(5, 3, accent, 6, 1)}
      {px(5, 12, accent, 6, 1)}
      {px(3, 5, accent, 1, 6)}
      {px(12, 5, accent, 1, 6)}
      {/* center */}
      {px(6, 6, '#c8a47e', 4, 4)}
      {px(7, 7, '#faf6f0', 2, 2)}
      {/* stem outline */}
      {px(7, 13, '#9caf88', 2, 2)}
    </g>
  ),
  // Sketchbook (open)
  sketchbook: ({ accent = '#7A4B57' }) => (
    <g>
      {px(2, 4, '#faf6f0', 12, 9)}
      {px(2, 4, '#2d2a26', 12, 1)}
      {px(2, 12, '#2d2a26', 12, 1)}
      {px(2, 4, '#2d2a26', 1, 9)}
      {px(13, 4, '#2d2a26', 1, 9)}
      {px(7, 4, '#2d2a26', 2, 9)}
      {/* sketch lines */}
      {px(3, 6, accent, 4, 1)}
      {px(3, 8, accent, 3, 1)}
      {px(3, 10, accent, 2, 1)}
      {px(9, 6, accent, 4, 1)}
      {px(9, 8, accent, 3, 1)}
    </g>
  ),
  // Typewriter
  typewriter: ({ accent = '#6B6259' }) => (
    <g>
      {/* paper */}
      {px(5, 1, '#faf6f0', 6, 4)}
      {px(5, 1, '#2d2a26', 6, 1)}
      {px(5, 1, '#2d2a26', 1, 4)}
      {px(10, 1, '#2d2a26', 1, 4)}
      {/* body */}
      {px(2, 5, accent, 12, 6)}
      {px(2, 5, '#2d2a26', 12, 1)}
      {px(2, 11, '#2d2a26', 12, 1)}
      {px(2, 5, '#2d2a26', 1, 6)}
      {px(13, 5, '#2d2a26', 1, 6)}
      {/* keys */}
      {px(3, 8, '#faf6f0', 10, 2)}
      {px(4, 8, '#2d2a26', 1, 2)}
      {px(6, 8, '#2d2a26', 1, 2)}
      {px(8, 8, '#2d2a26', 1, 2)}
      {px(10, 8, '#2d2a26', 1, 2)}
      {/* base */}
      {px(4, 12, '#2d2a26', 8, 2)}
    </g>
  ),
  // Designer silhouette / about
  silhouette: ({ accent = '#7A4B57' }) => (
    <g>
      {px(6, 3, accent, 4, 3)}
      {px(7, 2, accent, 2, 1)}
      {px(4, 7, accent, 8, 6)}
      {px(3, 8, accent, 10, 4)}
      {px(5, 13, accent, 6, 1)}
      {/* face highlight */}
      {px(7, 4, '#faf6f0', 2, 1)}
    </g>
  ),
  // Envelope
  envelope: ({ accent = '#B07585' }) => (
    <g>
      {px(2, 4, '#faf6f0', 12, 8)}
      {px(2, 4, '#2d2a26', 12, 1)}
      {px(2, 11, '#2d2a26', 12, 1)}
      {px(2, 4, '#2d2a26', 1, 8)}
      {px(13, 4, '#2d2a26', 1, 8)}
      {/* fold */}
      {px(3, 5, '#2d2a26', 1, 1)}
      {px(12, 5, '#2d2a26', 1, 1)}
      {px(4, 6, '#2d2a26', 1, 1)}
      {px(11, 6, '#2d2a26', 1, 1)}
      {px(5, 7, '#2d2a26', 1, 1)}
      {px(10, 7, '#2d2a26', 1, 1)}
      {px(6, 8, '#2d2a26', 1, 1)}
      {px(9, 8, '#2d2a26', 1, 1)}
      {px(7, 9, '#2d2a26', 2, 1)}
      {/* wax seal */}
      {px(7, 9, accent, 2, 2)}
    </g>
  ),
  // Document / resume
  document: ({ accent = '#7A4B57' }) => (
    <g>
      {px(3, 2, '#faf6f0', 10, 12)}
      {px(3, 2, '#2d2a26', 10, 1)}
      {px(3, 13, '#2d2a26', 10, 1)}
      {px(3, 2, '#2d2a26', 1, 12)}
      {px(12, 2, '#2d2a26', 1, 12)}
      {px(5, 4, accent, 6, 1)}
      {px(5, 6, accent, 6, 1)}
      {px(5, 8, accent, 4, 1)}
      {px(5, 10, accent, 6, 1)}
      {px(5, 11, accent, 3, 1)}
    </g>
  ),
  // Behance B
  be: () => (
    <g>
      {px(2, 4, '#2d2a26', 5, 1)}
      {px(2, 5, '#2d2a26', 1, 6)}
      {px(2, 10, '#2d2a26', 6, 1)}
      {px(7, 5, '#2d2a26', 1, 2)}
      {px(7, 8, '#2d2a26', 1, 2)}
      {px(9, 6, '#2d2a26', 5, 1)}
      {px(9, 7, '#2d2a26', 1, 3)}
      {px(9, 9, '#2d2a26', 5, 1)}
    </g>
  ),
  // Instagram
  ig: ({ accent = '#7A4B57' }) => (
    <g>
      {px(2, 2, accent, 12, 12)}
      {px(2, 2, '#2d2a26', 12, 1)}
      {px(2, 13, '#2d2a26', 12, 1)}
      {px(2, 2, '#2d2a26', 1, 12)}
      {px(13, 2, '#2d2a26', 1, 12)}
      {px(5, 5, '#faf6f0', 6, 6)}
      {px(6, 6, accent, 4, 4)}
      {px(7, 7, '#faf6f0', 2, 2)}
      {px(11, 4, '#faf6f0', 1, 1)}
    </g>
  ),
  // CRT monitor / desktop computer — digital atelier
  monitor: ({ accent = '#7A8FA8' }) => (
    <g>
      {/* case fill */}
      {px(1, 2, '#f1ebe1', 14, 9)}
      {/* case border */}
      {px(1, 2, '#2d2a26', 14, 1)}
      {px(1, 10, '#2d2a26', 14, 1)}
      {px(1, 2, '#2d2a26', 1, 9)}
      {px(14, 2, '#2d2a26', 1, 9)}
      {/* screen */}
      {px(3, 4, accent, 10, 5)}
      {px(3, 4, '#2d2a26', 10, 1)}
      {px(3, 8, '#2d2a26', 10, 1)}
      {px(3, 4, '#2d2a26', 1, 5)}
      {px(12, 4, '#2d2a26', 1, 5)}
      {/* scanline highlight */}
      {px(4, 5, '#faf6f0', 2, 1)}
      {px(4, 6, '#faf6f0', 1, 1)}
      {px(5, 7, '#faf6f0', 4, 1)}
      {/* power LED */}
      {px(12, 9, '#9caf88', 1, 1)}
      {/* neck */}
      {px(7, 11, '#2d2a26', 2, 1)}
      {/* base */}
      {px(4, 12, '#2d2a26', 8, 1)}
      {px(3, 13, '#2d2a26', 10, 1)}
    </g>
  ),
  // Trash can — chrome wireframe
  trash: () => (
    <g>
      {/* lid */}
      {px(3, 3, '#2d2a26', 10, 1)}
      {px(6, 2, '#2d2a26', 4, 1)}
      {/* body */}
      {px(3, 4, '#faf6f0', 10, 10)}
      {px(3, 4, '#2d2a26', 1, 10)}
      {px(12, 4, '#2d2a26', 1, 10)}
      {px(3, 13, '#2d2a26', 10, 1)}
      {/* vertical lines */}
      {px(6, 5, '#7a4b57', 1, 8)}
      {px(8, 5, '#7a4b57', 1, 8)}
      {px(10, 5, '#7a4b57', 1, 8)}
      {/* highlight */}
      {px(4, 5, '#f1ebe1', 1, 8)}
    </g>
  ),
};
