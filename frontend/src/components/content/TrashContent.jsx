import React from 'react';
import PixelIcon from '../PixelIcon';

export default function TrashContent({ items }) {
  return (
    <div className="px-8 py-8">
      <div className="flex items-center gap-3 mb-4">
        <div style={{ background: '#faf6f0', border: '2px solid #2d2a26', padding: 4 }}>
          <PixelIcon name="trash" size={36} />
        </div>
        <div>
          <div className="pixel text-[9px]" style={{ color: '#6b6259' }}>EASTER EGG • /rejected_concepts</div>
          <h2 className="pixel text-[12px] mt-1" style={{ color: '#2d2a26' }}>REJECTED&nbsp;CONCEPTS</h2>
        </div>
      </div>
      <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: 15, color: '#4a4540', marginBottom: 18 }}>
        Every collection leaves behind the ideas that didn’t make it. Kept here, half-fondly.
      </p>

      <ul className="flex flex-col gap-2">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-start justify-between gap-4 px-3 py-2"
            style={{ background: '#f1ebe1', border: '2px solid #2d2a26' }}
          >
            <div>
              <div className="pixel text-[9px]" style={{ color: '#2d2a26' }}>{it.title.toUpperCase()}</div>
              <div className="text-[13px] italic mt-1" style={{ color: '#6b6259', fontFamily: "'Crimson Pro', serif" }}>
                — {it.reason}
              </div>
            </div>
            <span className="pixel text-[8px]" style={{ color: '#7a4b57' }}>· ARCHIVED</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
