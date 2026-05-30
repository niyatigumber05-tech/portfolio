import React, { useEffect, useState } from 'react';

export default function BootScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + (Math.random() * 9 + 4);
        if (next >= 100) {
          clearInterval(id);
          setTimeout(() => {
            setHide(true);
            setTimeout(onDone, 480);
          }, 420);
          return 100;
        }
        return next;
      });
    }, 140);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center"
      style={{
        zIndex: 500,
        background: 'linear-gradient(180deg, #f5d6dc 0%, #f7e1c9 40%, #e9dcf1 80%, #d8e7d6 100%)',
        opacity: hide ? 0 : 1,
        transition: 'opacity 480ms ease',
        pointerEvents: hide ? 'none' : 'auto',
      }}
    >
      {/* Soft pixel logo — N monogram */}
      <svg width="112" height="112" viewBox="0 0 16 16" className="crisp mb-8" style={{ imageRendering: 'pixelated' }}>
        <rect width="16" height="16" fill="#faf6f0" stroke="#2d2a26" strokeWidth="0"/>
        <rect x="0" y="0" width="16" height="1" fill="#2d2a26"/>
        <rect x="0" y="15" width="16" height="1" fill="#2d2a26"/>
        <rect x="0" y="0" width="1" height="16" fill="#2d2a26"/>
        <rect x="15" y="0" width="1" height="16" fill="#2d2a26"/>
        {/* N letterform */}
        <rect x="3" y="3" width="2" height="10" fill="#7a4b57"/>
        <rect x="11" y="3" width="2" height="10" fill="#7a4b57"/>
        <rect x="5" y="4" width="1" height="2" fill="#7a4b57"/>
        <rect x="6" y="6" width="1" height="2" fill="#7a4b57"/>
        <rect x="7" y="7" width="1" height="2" fill="#7a4b57"/>
        <rect x="8" y="8" width="1" height="2" fill="#7a4b57"/>
        <rect x="9" y="9" width="1" height="2" fill="#7a4b57"/>
        <rect x="10" y="10" width="1" height="2" fill="#7a4b57"/>
      </svg>

      <div className="pixel text-[12px] mb-2" style={{ color: '#2d2a26' }}>NIYATI OS</div>
      <div className="pixel text-[9px] mb-8" style={{ color: '#6b6259' }}>VERSION 2026</div>

      <div className="relative" style={{ width: 280, height: 14, border: '2px solid #2d2a26', background: '#faf6f0' }}>
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: 'repeating-linear-gradient(90deg, #7a4b57 0 8px, #c8a47e 8px 16px)',
            transition: 'width 140ms linear',
          }}
        />
      </div>
      <div className="pixel text-[8px] mt-4" style={{ color: '#6b6259' }}>
        Loading {Math.floor(progress)}% — preparing the atelier…
      </div>

      {/* Tiny credit */}
      <div className="absolute bottom-8 pixel text-[8px]" style={{ color: '#6b6259' }}>
        © Niyati Gumber · A creative operating system
      </div>
    </div>
  );
}
