import React, { useRef, useState } from 'react';

export default function StickyNote() {
  const [pos, setPos] = useState({ x: 60, y: 100 });
  const [z, setZ] = useState(20);
  const dragRef = useRef(null);

  const start = (e) => {
    setZ(40);
    dragRef.current = { sx: e.clientX, sy: e.clientY, ox: pos.x, oy: pos.y };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', end);
  };
  const move = (e) => {
    if (!dragRef.current) return;
    setPos({
      x: Math.max(8, Math.min(window.innerWidth - 220, dragRef.current.ox + (e.clientX - dragRef.current.sx))),
      y: Math.max(36, Math.min(window.innerHeight - 180, dragRef.current.oy + (e.clientY - dragRef.current.sy))),
    });
  };
  const end = () => {
    dragRef.current = null;
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', end);
  };

  return (
    <div
      onMouseDown={start}
      className="absolute select-none"
      style={{
        left: pos.x, top: pos.y, zIndex: z,
        width: 200, padding: '16px 14px',
        background: '#fff3a8',
        border: '2px solid #2d2a26',
        boxShadow: '4px 4px 0 rgba(45,42,38,0.22)',
        transform: 'rotate(-2deg)',
        cursor: 'grab',
      }}
    >
      <div
        className="pixel text-[8px] mb-2"
        style={{ color: '#7a4b57' }}
      >
        — a note to self
      </div>
      <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 15, lineHeight: 1.35, color: '#2d2a26' }}>
        Transforming nature, emotion, and structure into wearable stories.
      </div>
      <div className="pixel text-[8px] mt-3" style={{ color: '#7a4b57' }}>n.g.</div>
    </div>
  );
}
