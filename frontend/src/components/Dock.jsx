import React, { useState, useRef } from 'react';
import PixelIcon from './PixelIcon';
import { sound } from '../lib/sound';

export default function Dock({ items, onOpen }) {
  const [hover, setHover] = useState(null);
  const ref = useRef(null);

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 flex items-end gap-2 glass-chrome px-3 py-2"
      style={{
        bottom: 16,
        zIndex: 50,
        border: '2px solid #2d2a26',
        boxShadow: '4px 4px 0 rgba(45,42,38,0.18)',
      }}
      ref={ref}
      onMouseLeave={() => setHover(null)}
    >
      {items.map((it, i) => {
        const dist = hover === null ? 999 : Math.abs(hover - i);
        const scale = dist === 0 ? 1.35 : dist === 1 ? 1.18 : dist === 2 ? 1.06 : 1;
        return (
          <button
            key={it.id}
            className="clickable relative flex flex-col items-center"
            onMouseEnter={() => { setHover(i); sound.play('hover'); }}
            onClick={() => onOpen(it)}
            style={{ background: 'transparent', border: 'none', transition: 'transform 140ms ease' }}
          >
            {hover === i && (
              <div
                className="pixel text-[8px] absolute"
                style={{
                  bottom: 64,
                  background: '#2d2a26',
                  color: '#faf6f0',
                  padding: '4px 6px',
                  whiteSpace: 'nowrap',
                }}
              >
                {it.label.toUpperCase()}
              </div>
            )}
            <div
              style={{
                width: 40, height: 40,
                background: '#faf6f0',
                border: '2px solid #2d2a26',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transform: `scale(${scale}) translateY(${hover === i ? -6 : 0}px)`,
                transformOrigin: 'bottom center',
                transition: 'transform 160ms ease',
              }}
            >
              <PixelIcon name={it.iconKey} size={28} />
            </div>
          </button>
        );
      })}
    </div>
  );
}
