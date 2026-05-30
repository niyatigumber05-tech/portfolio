import React, { useState } from 'react';
import PixelIcon from './PixelIcon';

export default function TrashCan({ onOpen }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      className="clickable absolute flex flex-col items-center gap-1 outline-none"
      style={{
        right: 24, bottom: 22, zIndex: 12,
        background: 'transparent', border: 'none',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onOpen}
    >
      <div
        style={{
          width: 56, height: 56,
          background: 'rgba(250,246,240,0.7)',
          border: '2px solid #2d2a26',
          boxShadow: '3px 3px 0 rgba(45,42,38,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: hover ? 'translateY(-2px)' : 'none',
          transition: 'transform 160ms ease',
        }}
      >
        <PixelIcon name="trash" size={40} />
      </div>
      <span
        className="pixel"
        style={{
          fontSize: 8, lineHeight: '12px', color: '#2d2a26',
          background: 'rgba(250,246,240,0.75)',
          padding: '2px 4px', border: '1px solid rgba(45,42,38,0.15)',
        }}
      >
        REJECTED CONCEPTS
      </span>
    </button>
  );
}
