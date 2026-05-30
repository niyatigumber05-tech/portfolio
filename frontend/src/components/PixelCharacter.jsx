import React, { useEffect, useState } from 'react';

// Pixel-art tailor's dress-form / mannequin that lives above the dock.
// No head — classic fashion studio shape: neck peg, fabric torso, base & stand.
// Idle animation: gentle sway, a flickering pin and a measuring tape that
// occasionally drapes around the neck.
export default function PixelCharacter() {
  const [pose, setPose] = useState('idle'); // idle | pin | tape
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const pi = setInterval(() => {
      const poses = ['idle', 'idle', 'pin', 'idle', 'tape'];
      setPose(poses[Math.floor(Math.random() * poses.length)]);
    }, 4200);
    const ti = setInterval(() => setTick((t) => t + 1), 1200);
    return () => { clearInterval(pi); clearInterval(ti); };
  }, []);

  // sway: small horizontal pixel offset, alternates every tick
  const sway = tick % 2 === 0 ? 0 : 1;

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 pointer-events-none"
      style={{ bottom: 72, zIndex: 15 }}
      data-testid="pixel-mannequin"
    >
      <svg
        width="120"
        height="160"
        viewBox="0 0 30 40"
        className="crisp"
        style={{
          imageRendering: 'pixelated',
          transition: 'transform 600ms ease-in-out',
          transform: `translateX(${sway}px)`,
        }}
      >
        {/* floor shadow */}
        <ellipse cx="15" cy="39" rx="9" ry="0.9" fill="rgba(45,42,38,0.20)" />

        {/* === Base / foot === */}
        {/* wooden disc */}
        <g fill="#7a5436">
          <rect x="9" y="36" width="12" height="2" />
          <rect x="10" y="38" width="10" height="1" />
        </g>
        {/* base highlight */}
        <rect x="10" y="36" width="10" height="1" fill="#a07a52" />
        {/* base outline */}
        <g fill="#3a2616">
          <rect x="9" y="35" width="12" height="1" />
          <rect x="9" y="38" width="1" height="1" />
          <rect x="20" y="38" width="1" height="1" />
        </g>

        {/* === Vertical stand pole === */}
        <rect x="14" y="30" width="2" height="6" fill="#3a2616" />
        <rect x="14" y="30" width="1" height="6" fill="#5a3a22" />
        {/* small adjuster knob */}
        <rect x="13" y="33" width="4" height="1" fill="#c0a060" />
        <rect x="13" y="33" width="1" height="1" fill="#fff0b0" />

        {/* === Torso (fabric form) === */}
        {/* main body — pear / hourglass shape, built row by row */}
        <g fill="#f0d8c4">
          {/* shoulders */}
          <rect x="9" y="11" width="12" height="2" />
          {/* upper torso widening */}
          <rect x="8" y="13" width="14" height="3" />
          {/* bust */}
          <rect x="8" y="16" width="14" height="3" />
          {/* waist tapers */}
          <rect x="9" y="19" width="12" height="2" />
          <rect x="10" y="21" width="10" height="2" />
          {/* hips flare */}
          <rect x="9" y="23" width="12" height="3" />
          <rect x="8" y="26" width="14" height="2" />
          {/* hem cut */}
          <rect x="9" y="28" width="12" height="2" />
        </g>

        {/* torso shading (right side, subtle depth) */}
        <g fill="#d9b89e" opacity="0.85">
          <rect x="19" y="13" width="3" height="3" />
          <rect x="20" y="16" width="2" height="3" />
          <rect x="18" y="19" width="3" height="2" />
          <rect x="18" y="21" width="2" height="2" />
          <rect x="19" y="23" width="2" height="3" />
          <rect x="20" y="26" width="2" height="2" />
          <rect x="19" y="28" width="2" height="2" />
        </g>
        {/* torso highlight (left side) */}
        <g fill="#fbe8d6" opacity="0.9">
          <rect x="9" y="13" width="2" height="3" />
          <rect x="9" y="16" width="1" height="3" />
          <rect x="11" y="19" width="2" height="1" />
        </g>
        {/* center seam */}
        <g fill="#c89878" opacity="0.55">
          <rect x="15" y="11" width="1" height="17" />
        </g>
        {/* waist sash */}
        <g fill="#7a4b57">
          <rect x="9" y="21" width="12" height="1" />
        </g>
        <rect x="14" y="21" width="2" height="1" fill="#c0a060" />

        {/* === Neck peg (no head) === */}
        <g fill="#7a5436">
          <rect x="13" y="8" width="4" height="3" />
        </g>
        <rect x="13" y="8" width="1" height="3" fill="#a07a52" />
        <rect x="13" y="7" width="4" height="1" fill="#3a2616" />
        {/* peg top knob */}
        <rect x="14" y="6" width="2" height="1" fill="#c0a060" />
        <rect x="14" y="5" width="2" height="1" fill="#fff0b0" />

        {/* === Outline (pixel-art crisp dark edge) === */}
        <g fill="#2d2a26">
          {/* torso outline */}
          <rect x="9" y="10" width="12" height="1" />
          <rect x="9" y="11" width="1" height="2" />
          <rect x="20" y="11" width="1" height="2" />
          <rect x="8" y="13" width="1" height="3" />
          <rect x="21" y="13" width="1" height="3" />
          <rect x="8" y="16" width="1" height="3" />
          <rect x="21" y="16" width="1" height="3" />
          <rect x="9" y="19" width="1" height="2" />
          <rect x="20" y="19" width="1" height="2" />
          <rect x="10" y="21" width="1" height="2" />
          <rect x="19" y="21" width="1" height="2" />
          <rect x="9" y="23" width="1" height="3" />
          <rect x="20" y="23" width="1" height="3" />
          <rect x="8" y="26" width="1" height="2" />
          <rect x="21" y="26" width="1" height="2" />
          <rect x="9" y="28" width="1" height="2" />
          <rect x="20" y="28" width="1" height="2" />
          <rect x="9" y="30" width="12" height="1" />
        </g>

        {/* === Pinned details / pose: a sewing pin on the bust === */}
        {(pose === 'pin' || pose === 'idle') && (
          <g>
            <rect x="12" y="17" width="1" height="1" fill="#c0a060" />
            <rect x="12" y="18" width="1" height="1" fill="#7a5436" />
            <rect x="12" y="16" width="1" height="1" fill="#fff0b0" />
          </g>
        )}

        {/* === Measuring tape draped around neck === */}
        {pose === 'tape' && (
          <g>
            {/* tape behind neck */}
            <rect x="11" y="11" width="8" height="1" fill="#f5d76e" />
            <rect x="11" y="12" width="1" height="3" fill="#f5d76e" />
            <rect x="18" y="12" width="1" height="4" fill="#f5d76e" />
            {/* tape markings */}
            <rect x="13" y="11" width="1" height="1" fill="#2d2a26" />
            <rect x="15" y="11" width="1" height="1" fill="#2d2a26" />
            <rect x="17" y="11" width="1" height="1" fill="#2d2a26" />
            {/* tape end */}
            <rect x="18" y="16" width="2" height="1" fill="#e3b94e" />
          </g>
        )}

        {/* === Sparkle near top knob (occasionally) === */}
        {tick % 4 === 0 && (
          <g fill="#fff8d0">
            <rect x="17" y="4" width="1" height="1" />
            <rect x="18" y="3" width="1" height="1" opacity="0.6" />
          </g>
        )}
      </svg>
    </div>
  );
}
