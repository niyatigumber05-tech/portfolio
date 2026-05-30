import React from 'react';
import { designer } from '../../data/mock';

export default function CVContent() {
  const url = designer.resume;
  return (
    <div
      className="w-full h-full overflow-auto niyati-scroll"
      style={{ background: '#faf6f0' }}
      data-testid="cv-content"
    >
      <img
        src={url}
        alt="Niyati Gumber — CV"
        className="block w-full h-auto"
        style={{ display: 'block' }}
        data-testid="cv-image"
      />
    </div>
  );
}
