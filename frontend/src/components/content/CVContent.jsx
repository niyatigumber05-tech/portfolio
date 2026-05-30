import React from 'react';
import { designer } from '../../data/mock';

export default function CVContent() {
  const url = designer.resume;
  return (
    <div className="w-full h-full flex flex-col" data-testid="cv-content">
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{ background: '#f1ebe1', borderBottom: '2px solid #2d2a26' }}
      >
        <div className="pixel text-[9px]" style={{ color: '#7A4B57' }}>
          NIYATI_GUMBER — CV.PDF
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="clickable pixel text-[8px] px-2 py-1"
          style={{
            background: '#7A4B57',
            color: '#faf6f0',
            border: '2px solid #2d2a26',
          }}
          data-testid="cv-open-new-tab"
        >
          OPEN IN NEW TAB
        </a>
      </div>
      <iframe
        src={url}
        title="Niyati Gumber CV"
        className="flex-1 w-full"
        style={{ border: 'none', background: '#2d2a26' }}
        data-testid="cv-iframe"
      />
    </div>
  );
}
