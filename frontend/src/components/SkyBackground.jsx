import React, { useMemo } from 'react';

// Floating pixel clouds & particles
export default function SkyBackground() {
  const clouds = useMemo(() => [
    { top: '12%', delay: 0, dur: 90, scale: 1, opacity: 0.85 },
    { top: '22%', delay: -30, dur: 130, scale: 0.7, opacity: 0.7 },
    { top: '38%', delay: -55, dur: 110, scale: 1.2, opacity: 0.6 },
    { top: '58%', delay: -10, dur: 160, scale: 0.9, opacity: 0.55 },
    { top: '70%', delay: -80, dur: 140, scale: 0.6, opacity: 0.7 },
  ], []);

  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 28; i++) {
      arr.push({
        left: Math.random() * 100,
        delay: Math.random() * -14,
        dur: 14 + Math.random() * 18,
        size: 2 + Math.random() * 2,
        color: ['#faf6f0', '#fff3d6', '#f7d6e0', '#e2d2ee'][i % 4],
      });
    }
    return arr;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {/* Soft radial glow — sun */}
      <div
        style={{
          position: 'absolute', top: '-10%', right: '-8%', width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,235,200,0.6) 0%, rgba(255,235,200,0) 70%)',
          filter: 'blur(8px)'
        }}
      />

      {clouds.map((c, i) => (
        <PixelCloud key={i} {...c} />
      ))}

      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute"
          style={{
            left: `${p.left}%`,
            bottom: -20,
            width: p.size, height: p.size,
            background: p.color,
            boxShadow: `0 0 6px ${p.color}`,
            animation: `particle ${p.dur}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function PixelCloud({ top, delay, dur, scale, opacity }) {
  return (
    <svg
      className="absolute crisp"
      width={120 * scale}
      height={48 * scale}
      viewBox="0 0 30 12"
      style={{
        top, left: 0,
        opacity,
        animation: `driftSlow ${dur}s linear ${delay}s infinite`,
        imageRendering: 'pixelated',
        filter: 'drop-shadow(0 2px 0 rgba(45,42,38,0.05))',
      }}
    >
      {/* cloud shape via pixel blocks */}
      <g fill="#faf6f0">
        <rect x="4" y="4" width="22" height="4"/>
        <rect x="6" y="2" width="4" height="2"/>
        <rect x="12" y="1" width="6" height="3"/>
        <rect x="20" y="2" width="4" height="2"/>
        <rect x="2" y="6" width="26" height="2"/>
        <rect x="8" y="8" width="14" height="1"/>
      </g>
      <g fill="#f1ebe1">
        <rect x="4" y="7" width="22" height="1"/>
        <rect x="6" y="8" width="18" height="1"/>
      </g>
    </svg>
  );
}
