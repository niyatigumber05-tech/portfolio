import React from 'react';
import { aboutSections, designer } from '../../data/mock';

export default function AboutContent() {
  return (
    <div className="px-10 py-10 max-w-2xl mx-auto">
      <div className="pixel text-[9px] mb-2" style={{ color: '#7a4b57' }}>ABOUT</div>
      <h1 className="pixel text-[14px] mb-4" style={{ color: '#2d2a26' }}>NIYATI&nbsp;GUMBER</h1>
      <div style={{ height: 2, background: '#2d2a26', width: 60, marginBottom: 20 }}/>
      <p className="italic" style={{ fontFamily: "'Crimson Pro', serif", fontSize: 16, color: '#6b6259' }}>
        {designer.title}
      </p>

      <div className="mt-8 flex flex-col gap-6">
        {aboutSections.map((s, i) => (
          <section key={i}>
            <h3 className="pixel text-[10px] mb-2" style={{ color: '#7a4b57' }}>{s.heading.toUpperCase()}</h3>
            <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: 17, lineHeight: 1.6, color: '#2d2a26' }}>
              {s.body}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-10 pt-6" style={{ borderTop: '2px solid #2d2a26' }}>
        <p className="pixel text-[8px]" style={{ color: '#6b6259' }}>
          · Available for collaborations, internships, and editorial commissions.
        </p>
      </div>
    </div>
  );
}
