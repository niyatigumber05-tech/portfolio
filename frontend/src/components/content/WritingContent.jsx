import React from 'react';
import { writingPieces } from '../../data/mock';

export default function WritingContent() {
  return (
    <div className="px-10 py-10 max-w-3xl mx-auto">
      <div className="pixel text-[9px] mb-2" style={{ color: '#6b6259' }}>WRITING & CREATIVE WORK</div>
      <h1 className="pixel text-[12px] mb-4" style={{ color: '#2d2a26' }}>NOTES&nbsp;FROM&nbsp;THE&nbsp;ATELIER</h1>
      <div style={{ height: 2, background: '#2d2a26', width: 60, marginBottom: 24 }}/>

      <div className="flex flex-col">
        {writingPieces.map((w, i) => (
          <article
            key={w.id}
            className="py-6"
            style={{ borderBottom: i === writingPieces.length - 1 ? 'none' : '1px dashed #2d2a26' }}
          >
            <div className="pixel text-[8px]" style={{ color: '#7a4b57' }}>{w.date.toUpperCase()}</div>
            <h3 className="pixel text-[11px] mt-1 mb-3" style={{ color: '#2d2a26' }}>{w.title.toUpperCase()}</h3>
            <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: 17, lineHeight: 1.6, color: '#2d2a26', fontStyle: 'italic' }}>
              “{w.excerpt}”
            </p>
            <button className="clickable pixel text-[8px] mt-3" style={{ color: '#7a4b57', background: 'transparent', border: 'none' }}>
              READ&nbsp;FULL&nbsp;→
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
