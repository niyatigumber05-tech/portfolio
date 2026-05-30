import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import BootScreen from './components/BootScreen';
import MenuBar from './components/MenuBar';
import SkyBackground from './components/SkyBackground';
import Desktop from './components/Desktop';
import Dock from './components/Dock';
import PixelCharacter from './components/PixelCharacter';
import TrashCan from './components/TrashCan';
import WindowFrame from './components/Window';
import { sound } from './lib/sound';
import { desktopIcons, projects, writingPieces, aboutSections, sideProjects, rejectedConcepts, designer, dockItems } from './data/mock';
import ProjectContent from './components/content/ProjectContent';
import AboutContent from './components/content/AboutContent';
import ContactContent from './components/content/ContactContent';
import WritingContent from './components/content/WritingContent';
import TrashContent from './components/content/TrashContent';
import CVContent from './components/content/CVContent';

export default function App() {
  const [booted, setBooted] = useState(false);
  const [windows, setWindows] = useState([]); // { id, title, content, x, y, w, h, z, minimized }
  const [zCounter, setZCounter] = useState(100);
  const [activeSection, setActiveSection] = useState('Desktop');
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    sound.setMuted(muted);
  }, [muted]);

  const openWindow = useCallback((cfg) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.id === cfg.id);
      if (existing) {
        return prev.map((w) => (w.id === cfg.id ? { ...w, minimized: false, z: zCounter + 1 } : w));
      }
      const offset = (prev.length % 6) * 26;
      return [
        ...prev,
        {
          id: cfg.id,
          title: cfg.title,
          renderKey: cfg.renderKey,
          payload: cfg.payload,
          x: cfg.x ?? 140 + offset,
          y: cfg.y ?? 90 + offset,
          w: cfg.w ?? 720,
          h: cfg.h ?? 480,
          z: zCounter + 1,
          minimized: false,
          accent: cfg.accent,
        },
      ];
    });
    setZCounter((z) => z + 1);
    setActiveSection(cfg.title);
    sound.play('open');
  }, [zCounter]);

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    sound.play('close');
  };
  const focusWindow = (id) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, z: zCounter + 1, minimized: false } : w)));
    setZCounter((z) => z + 1);
    const w = windows.find((x) => x.id === id);
    if (w) setActiveSection(w.title);
  };
  const minimizeWindow = (id) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
    sound.play('close');
  };
  const updateWindow = (id, patch) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, ...patch } : w)));
  };

  const handleIconOpen = (icon) => {
    if (icon.isAbout) {
      openWindow({ id: 'about-me', title: 'About Me', renderKey: 'about', accent: icon.accent, w: 680, h: 520 });
    } else if (icon.isContact) {
      openWindow({ id: 'contact', title: 'Contact', renderKey: 'contact', accent: icon.accent, w: 560, h: 440 });
    } else if (icon.isCv) {
      openWindow({ id: 'cv', title: 'CV', renderKey: 'cv', accent: '#7A4B57', w: 720, h: 560 });
    } else if (icon.id === 'writing') {
      openWindow({ id: 'writing', title: 'Writing & Creative Work', renderKey: 'writing', accent: icon.accent, w: 720, h: 520 });
    } else {
      openWindow({ id: icon.id, title: icon.name, renderKey: 'project', payload: icon, accent: icon.accent, w: 780, h: 540 });
    }
  };

  const handleDockOpen = (item) => {
    if (item.id === 'about') return handleIconOpen({ isAbout: true, accent: '#7A4B57' });
    if (item.id === 'email') return handleIconOpen({ isContact: true, accent: '#B07585' });
    if (item.id === 'projects') return openWindow({ id: 'projects-index', title: 'Projects', renderKey: 'projects-index', accent: '#7A4B57', w: 720, h: 500 });
    if (item.id === 'writing') return handleIconOpen({ id: 'writing', name: 'Writing & Creative Work', accent: '#6B6259' });
    if (item.id === 'resume') return handleIconOpen({ isCv: true });
    if (item.id === 'behance') return window.open(designer.behance, '_blank');
    if (item.id === 'instagram') return window.open(designer.instagram, '_blank');
  };

  const renderWindowContent = (w) => {
    switch (w.renderKey) {
      case 'project': return <ProjectContent project={w.payload} />;
      case 'about': return <AboutContent />;
      case 'contact': return <ContactContent />;
      case 'cv': return <CVContent />;
      case 'writing': return <WritingContent />;
      case 'trash': return <TrashContent items={rejectedConcepts} />;
      case 'projects-index': return <ProjectsIndex onOpen={handleIconOpen} />;
      default: return null;
    }
  };

  return (
    <div
      className="App niyati-os"
      style={{
        backgroundImage:
          "url('https://customer-assets.emergentagent.com/job_luxe-studio-6/artifacts/rc5mnole_cv.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundColor: '#f5d6dc',
      }}
    >
      <SkyBackground />

      {!booted && <BootScreen onDone={() => { setBooted(true); sound.play('startup'); }} />}

      {booted && (
        <>
          <MenuBar activeSection={activeSection} muted={muted} onToggleMute={() => setMuted((m) => !m)} />

          <Desktop icons={desktopIcons} onOpen={handleIconOpen} />

          <TrashCan onOpen={() => openWindow({ id: 'trash', title: 'Rejected Concepts', renderKey: 'trash', accent: '#6B6259', w: 540, h: 440 })} />

          <PixelCharacter />

          <Dock items={dockItems} onOpen={handleDockOpen} />

          {windows.filter((w) => !w.minimized).map((w) => (
            <WindowFrame
              key={w.id}
              win={w}
              onClose={() => closeWindow(w.id)}
              onMinimize={() => minimizeWindow(w.id)}
              onFocus={() => focusWindow(w.id)}
              onUpdate={(patch) => updateWindow(w.id, patch)}
            >
              {renderWindowContent(w)}
            </WindowFrame>
          ))}
        </>
      )}
    </div>
  );
}

function ProjectsIndex({ onOpen }) {
  return (
    <div className="p-6">
      <h2 className="pixel text-[13px] mb-4" style={{ color: '#2d2a26' }}>SELECT A PROJECT</h2>
      <div className="grid grid-cols-2 gap-3">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => onOpen(p)}
            className="clickable text-left bg-[#faf6f0] hover:bg-[#f1ebe1] transition-colors p-3 pixel-border"
            style={{ border: '2px solid #2d2a26' }}
          >
            <div className="pixel text-[10px] mb-1" style={{ color: p.accent }}>{p.name.toUpperCase()}</div>
            <div className="text-sm leading-snug" style={{ color: '#4a4540' }}>{p.short}</div>
          </button>
        ))}
      </div>
      <p className="text-xs mt-4" style={{ color: '#6b6259' }}>Additional studies: {sideProjects.map((s) => s.name).join(' · ')}</p>
    </div>
  );
}
