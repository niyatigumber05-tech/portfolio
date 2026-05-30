import React from 'react';
import PixelIcon from './PixelIcon';

export default function Desktop({ icons, onOpen }) {
  // Right-side vertical grid of icons — classic mac arrangement
  return (
    <div className="absolute inset-0" style={{ zIndex: 10, paddingTop: 50 }}>
      <div
        className="absolute right-6 top-12 grid"
        style={{ gridTemplateColumns: '1fr', rowGap: 10 }}
      >
        {icons.map((icon) => (
          <DesktopIconItem key={icon.id} icon={icon} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}

function DesktopIconItem({ icon, onOpen }) {
  return (
    <button
      onDoubleClick={() => onOpen(icon)}
      onClick={(e) => {
        // single-click selects, double opens. To keep UX easy we open on single click too.
        if (e.detail === 1) onOpen(icon);
      }}
      className="clickable group flex flex-col items-center gap-1 w-[88px] outline-none"
      style={{ background: 'transparent', border: 'none' }}
      data-testid={`desktop-icon-${icon.id}`}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: 56, height: 56,
          background: 'rgba(250,246,240,0.7)',
          border: '2px solid #2d2a26',
          boxShadow: '3px 3px 0 rgba(45,42,38,0.18)',
          transition: 'transform 160ms ease, background 160ms ease',
        }}
      >
        <div className="group-hover:scale-110 transition-transform">
          <PixelIcon name={icon.iconKey} size={40} accent={icon.accent} />
        </div>
      </div>
      <span
        className="pixel text-center px-1"
        style={{
          fontSize: 8,
          lineHeight: '12px',
          color: '#2d2a26',
          background: 'rgba(250,246,240,0.75)',
          padding: '2px 4px',
          border: '1px solid rgba(45,42,38,0.15)',
          maxWidth: 96,
        }}
      >
        {icon.name.toUpperCase()}
      </span>
    </button>
  );
}
