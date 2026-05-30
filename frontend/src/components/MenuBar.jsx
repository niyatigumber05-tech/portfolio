import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Wifi, BatteryMedium, Cloud } from 'lucide-react';

export default function MenuBar({ activeSection, muted, onToggleMute }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  const fmt = time.toLocaleString(undefined, { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });

  return (
    <div
      className="fixed top-0 left-0 right-0 glass-chrome flex items-center justify-between px-4"
      style={{ height: 30, borderBottom: '2px solid #2d2a26', zIndex: 200 }}
    >
      <div className="flex items-center gap-5">
        <span className="pixel text-[9px]" style={{ color: '#2d2a26' }}>
          NIYATI&nbsp;GUMBER™
        </span>
        <span className="pixel text-[9px]" style={{ color: '#6b6259' }}>File</span>
        <span className="pixel text-[9px]" style={{ color: '#6b6259' }}>Edit</span>
        <span className="pixel text-[9px]" style={{ color: '#6b6259' }}>View</span>
        <span className="pixel text-[9px]" style={{ color: '#6b6259' }}>Window</span>
        <span className="pixel text-[9px]" style={{ color: '#6b6259' }}>Help</span>
      </div>

      <div className="pixel text-[9px]" style={{ color: '#2d2a26' }}>
        {activeSection}
      </div>

      <div className="flex items-center gap-4">
        <button onClick={onToggleMute} className="clickable flex items-center gap-1" title={muted ? 'Sound off' : 'Sound on'}>
          {muted ? <VolumeX size={14} color="#2d2a26"/> : <Volume2 size={14} color="#2d2a26"/>}
        </button>
        <span className="flex items-center gap-1"><Cloud size={14} color="#2d2a26"/><span className="pixel text-[9px]" style={{ color: '#2d2a26' }}>23°</span></span>
        <Wifi size={14} color="#2d2a26"/>
        <BatteryMedium size={14} color="#2d2a26"/>
        <span className="pixel text-[9px]" style={{ color: '#2d2a26' }}>{fmt}</span>
      </div>
    </div>
  );
}
