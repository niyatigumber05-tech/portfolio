import React, { useEffect, useState } from 'react';

// Pixel-art girl character that lives above the dock.
// Wavy dark hair, tote bag, coffee cup, sketchbook. Animates idle: blink, sip, sketch.
export default function PixelCharacter() {
  const [pose, setPose] = useState('idle'); // idle | sip | sketch
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const pi = setInterval(() => {
      const poses = ['idle', 'idle', 'sip', 'sketch'];
      setPose(poses[Math.floor(Math.random() * poses.length)]);
    }, 4200);
    const bi = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 160);
    }, 3400);
    return () => { clearInterval(pi); clearInterval(bi); };
  }, []);

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 pointer-events-none"
      style={{ bottom: 72, zIndex: 15 }}
    >
      <svg width="120" height="150" viewBox="0 0 30 38" className="crisp" style={{ imageRendering: 'pixelated' }}>
        {/* shadow */}
        <ellipse cx="15" cy="37" rx="8" ry="0.8" fill="rgba(45,42,38,0.18)"/>

        {/* Hair back */}
        <g fill="#2a1f1c">
          <rect x="8" y="3" width="14" height="2"/>
          <rect x="7" y="4" width="16" height="7"/>
          <rect x="6" y="6" width="2" height="10"/>
          <rect x="22" y="6" width="2" height="10"/>
          <rect x="7" y="16" width="1" height="2"/>
          <rect x="22" y="16" width="1" height="2"/>
        </g>

        {/* Face */}
        <g fill="#f0d3c0">
          <rect x="9" y="6" width="12" height="9"/>
        </g>
        {/* Bangs */}
        <g fill="#3a2925">
          <rect x="9" y="6" width="12" height="2"/>
          <rect x="9" y="8" width="3" height="1"/>
          <rect x="18" y="8" width="3" height="1"/>
        </g>

        {/* Eyes */}
        {blink ? (
          <g fill="#2d2a26">
            <rect x="12" y="10" width="2" height="1"/>
            <rect x="16" y="10" width="2" height="1"/>
          </g>
        ) : (
          <g fill="#2d2a26">
            <rect x="12" y="10" width="1" height="1"/>
            <rect x="17" y="10" width="1" height="1"/>
          </g>
        )}
        {/* Blush */}
        <g fill="#e8a8a0">
          <rect x="11" y="12" width="1" height="1"/>
          <rect x="18" y="12" width="1" height="1"/>
        </g>
        {/* Mouth */}
        <rect x="14" y="13" width="2" height="1" fill="#7a4b57"/>

        {/* Neck */}
        <rect x="13" y="15" width="4" height="2" fill="#e8c4ad"/>

        {/* Sweater */}
        <g fill="#7a4b57">
          <rect x="9" y="17" width="12" height="9"/>
          <rect x="7" y="18" width="2" height="7"/>
          <rect x="21" y="18" width="2" height="7"/>
        </g>
        {/* Sweater hem */}
        <g fill="#5d3845">
          <rect x="9" y="26" width="12" height="1"/>
        </g>

        {/* Hands */}
        <g fill="#f0d3c0">
          <rect x="7" y="24" width="2" height="2"/>
          <rect x="21" y="24" width="2" height="2"/>
        </g>

        {/* Skirt */}
        <g fill="#c8a47e">
          <rect x="10" y="27" width="10" height="5"/>
          <rect x="9" y="28" width="12" height="3"/>
        </g>
        {/* Skirt pleats */}
        <g fill="#a48863">
          <rect x="12" y="28" width="1" height="3"/>
          <rect x="15" y="28" width="1" height="3"/>
          <rect x="18" y="28" width="1" height="3"/>
        </g>

        {/* Legs */}
        <g fill="#e8c4ad">
          <rect x="12" y="32" width="2" height="4"/>
          <rect x="16" y="32" width="2" height="4"/>
        </g>
        {/* Shoes */}
        <g fill="#2d2a26">
          <rect x="11" y="36" width="4" height="1"/>
          <rect x="15" y="36" width="4" height="1"/>
        </g>

        {/* Tote bag (left hand) */}
        <g>
          <rect x="4" y="22" width="4" height="6" fill="#9caf88"/>
          <rect x="5" y="21" width="1" height="1" fill="#2d2a26"/>
          <rect x="6" y="21" width="1" height="1" fill="#2d2a26"/>
          <rect x="5" y="24" width="2" height="1" fill="#2d2a26"/>
        </g>

        {/* Coffee or sketchbook in right hand */}
        {pose === 'sip' && (
          <g style={{ transformOrigin: '23px 22px' }}>
            {/* coffee cup raised */}
            <rect x="22" y="18" width="4" height="5" fill="#faf6f0"/>
            <rect x="22" y="17" width="4" height="1" fill="#2d2a26"/>
            <rect x="22" y="23" width="4" height="1" fill="#2d2a26"/>
            <rect x="23" y="19" width="2" height="1" fill="#c8a47e"/>
            <rect x="24" y="15" width="1" height="1" fill="#faf6f0" opacity="0.7"/>
            <rect x="24" y="14" width="1" height="1" fill="#faf6f0" opacity="0.5"/>
          </g>
        )}
        {pose === 'sketch' && (
          <g>
            <rect x="22" y="23" width="5" height="4" fill="#faf6f0"/>
            <rect x="22" y="23" width="5" height="1" fill="#7a4b57"/>
            <rect x="23" y="25" width="3" height="1" fill="#2d2a26"/>
            <rect x="23" y="26" width="2" height="1" fill="#2d2a26"/>
            {/* pencil */}
            <rect x="27" y="22" width="2" height="1" fill="#c8a47e"/>
          </g>
        )}
        {pose === 'idle' && (
          <g>
            <rect x="22" y="23" width="3" height="4" fill="#faf6f0"/>
            <rect x="22" y="23" width="3" height="1" fill="#2d2a26"/>
            <rect x="22" y="27" width="3" height="1" fill="#2d2a26"/>
          </g>
        )}
      </svg>
    </div>
  );
}
