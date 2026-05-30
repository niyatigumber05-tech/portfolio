import React, { useState } from 'react';
import PixelIcon from '../PixelIcon';

const ALL_TABS = [
  ['concept', 'Concept'],
  ['inspiration', 'Inspiration'],
  ['research', 'Research'],
  ['process', 'Process'],
  ['garmentDevelopment', 'Garment Development'],
  ['finalOutcome', 'Final Outcome'],
  ['reflection', 'Reflection'],
];

export default function ProjectContent({ project }) {
  const [tab, setTab] = useState('concept');
  if (!project) return null;

  const hasPdf = Boolean(project.pdfUrl);
  const hasFinalImages = Array.isArray(project.finalOutcomeImages) && project.finalOutcomeImages.length > 0;
  const hideTabs = new Set(project.hideTabs || []);
  const tabLabels = project.tabLabels || {};
  // When a project ships with a PDF lookbook, drop the Garment Development tab.
  const TABS = ALL_TABS
    .filter(([k]) => !(hasPdf && k === 'garmentDevelopment'))
    .filter(([k]) => !hideTabs.has(k))
    .map(([k, label]) => [k, tabLabels[k] || label]);
  const isPdfTab = hasPdf && tab === 'finalOutcome';
  const isFinalImagesTab = !hasPdf && hasFinalImages && tab === 'finalOutcome';
  const isInspirationImage = tab === 'inspiration' && Boolean(project.inspirationImage);
  const isProcessImage = tab === 'process' && Boolean(project.processImage);

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside
        className="shrink-0 flex flex-col"
        style={{ width: 200, borderRight: '2px solid #2d2a26', background: '#f1ebe1' }}
      >
        <div className="p-4 flex flex-col items-center text-center" style={{ borderBottom: '2px solid #2d2a26' }}>
          <div style={{ background: '#faf6f0', border: '2px solid #2d2a26', padding: 6 }}>
            <PixelIcon name={project.iconKey} size={48} accent={project.accent} />
          </div>
          <div className="pixel text-[9px] mt-3" style={{ color: project.accent }}>PROJECT</div>
          <h2 className="pixel text-[10px] mt-1 leading-snug" style={{ color: '#2d2a26' }}>{project.name.toUpperCase()}</h2>
          <p className="mt-3 text-[13px] italic" style={{ color: '#4a4540' }}>{project.short}</p>
        </div>
        <nav className="flex flex-col p-2 gap-1">
          {TABS.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className="clickable text-left px-3 py-1.5"
              style={{
                background: tab === key ? project.accent : 'transparent',
                color: tab === key ? '#faf6f0' : '#2d2a26',
                border: tab === key ? '2px solid #2d2a26' : '2px solid transparent',
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 8,
              }}
            >
              {label.toUpperCase()}
            </button>
          ))}
        </nav>
      </aside>

      {/* Reader */}
      <main className="flex-1 overflow-auto niyati-scroll" style={{ background: isPdfTab ? '#2d2a26' : (isInspirationImage || isProcessImage || isFinalImagesTab ? '#2d2a26' : 'transparent') }} data-testid={isPdfTab ? 'pdf-viewer-main' : 'project-reader-main'}>
        {isFinalImagesTab ? (
          <div className="w-full h-full flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 sticky top-0 z-10" style={{ background: '#f1ebe1', borderBottom: '2px solid #2d2a26' }}>
              <div className="pixel text-[9px]" style={{ color: project.accent }}>FINAL OUTCOME — LOOKBOOK</div>
              <span className="pixel text-[8px]" style={{ color: '#6b6259' }}>{project.finalOutcomeImages.length} PAGES</span>
            </div>
            <div className="flex flex-col" data-testid="final-outcome-stack">
              {project.finalOutcomeImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.name} final outcome page ${i + 1}`}
                  className="w-full block"
                  style={{ display: 'block', background: '#faf6f0' }}
                  data-testid={`final-outcome-image-${i}`}
                />
              ))}
            </div>
          </div>
        ) : isInspirationImage ? (
          <div className="w-full h-full flex flex-col">
            <div className="flex items-center justify-between px-4 py-2" style={{ background: '#f1ebe1', borderBottom: '2px solid #2d2a26' }}>
              <div className="pixel text-[9px]" style={{ color: project.accent }}>INSPIRATION — MOODBOARD</div>
              <a
                href={project.inspirationImage}
                target="_blank"
                rel="noreferrer"
                className="clickable pixel text-[8px] px-2 py-1"
                style={{ background: project.accent, color: '#faf6f0', border: '2px solid #2d2a26' }}
                data-testid="inspiration-open-new-tab"
              >
                OPEN IN NEW TAB
              </a>
            </div>
            <div
              className="flex-1 w-full"
              style={{
                background: '#faf6f0',
                backgroundImage: `url('${project.inspirationImage}')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              data-testid="inspiration-image"
              aria-label={`${project.name} inspiration board`}
            />
          </div>
        ) : isProcessImage ? (
          <div className="w-full h-full flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 sticky top-0 z-10" style={{ background: '#f1ebe1', borderBottom: '2px solid #2d2a26' }}>
              <div className="pixel text-[9px]" style={{ color: project.accent }}>
                {(tabLabels.process || 'PROCESS').toUpperCase()} — PAGE
              </div>
              <a
                href={project.processImage}
                target="_blank"
                rel="noreferrer"
                className="clickable pixel text-[8px] px-2 py-1"
                style={{ background: project.accent, color: '#faf6f0', border: '2px solid #2d2a26' }}
                data-testid="process-open-new-tab"
              >
                OPEN IN NEW TAB
              </a>
            </div>
            <img
              src={project.processImage}
              alt={`${project.name} process page`}
              className="w-full block"
              style={{ display: 'block', background: '#faf6f0' }}
              data-testid="process-image"
            />
          </div>
        ) : isPdfTab ? (
          <div className="w-full h-full flex flex-col">
            <div className="flex items-center justify-between px-4 py-2" style={{ background: '#f1ebe1', borderBottom: '2px solid #2d2a26' }}>
              <div className="pixel text-[9px]" style={{ color: project.accent }}>FINAL OUTCOME — PORTFOLIO.PDF</div>
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="clickable pixel text-[8px] px-2 py-1"
                style={{ background: project.accent, color: '#faf6f0', border: '2px solid #2d2a26' }}
                data-testid="pdf-open-new-tab"
              >
                OPEN IN NEW TAB
              </a>
            </div>
            <iframe
              src={project.pdfUrl}
              title={`${project.name} portfolio PDF`}
              className="flex-1 w-full"
              style={{ border: 'none', background: '#2d2a26' }}
              data-testid="pdf-iframe"
            />
          </div>
        ) : (
        <div className="max-w-2xl mx-auto px-10 py-10">
          <div className="pixel text-[9px] mb-2" style={{ color: project.accent }}>
            {TABS.find(([k]) => k === tab)[1].toUpperCase()}
          </div>
          <div style={{ height: 2, background: '#2d2a26', width: 60, marginBottom: 18 }}/>
          <p
            style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: 18,
              lineHeight: 1.6,
              color: '#2d2a26',
              fontWeight: 400,
            }}
          >
            {project.sections[tab]}
          </p>

          {tab === 'inspiration' && !project.inspirationImage && (
            <div className="mt-8">
              <div className="pixel text-[9px] mb-3" style={{ color: '#6b6259' }}>MOODBOARD — PENDING UPLOAD</div>
              <div className="grid grid-cols-3 gap-3">
                {[1,2,3,4,5,6].map((i) => (
                  <div
                    key={i}
                    style={{
                      aspectRatio: '1', background: `linear-gradient(135deg, ${project.accent}22, ${project.accent}44)`,
                      border: '2px solid #2d2a26', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <span className="pixel text-[8px]" style={{ color: project.accent }}>IMG&nbsp;0{i}</span>
                  </div>
                ))}
              </div>
              <p className="text-[12px] mt-3 italic" style={{ color: '#6b6259' }}>
                Replace these placeholders with your project moodboard images.
              </p>
            </div>
          )}

          {tab === 'finalOutcome' && !hasPdf && (
            <div className="mt-8">
              <div className="pixel text-[9px] mb-3" style={{ color: '#6b6259' }}>FINAL GARMENTS — PENDING UPLOAD</div>
              <div className="grid grid-cols-2 gap-4">
                {[1,2,3,4].map((i) => (
                  <div
                    key={i}
                    style={{
                      aspectRatio: '3 / 4',
                      background: `linear-gradient(180deg, ${project.accent}33, ${project.accent}66)`,
                      border: '2px solid #2d2a26',
                      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                      padding: 10,
                    }}
                  >
                    <span className="pixel text-[8px]" style={{ color: '#faf6f0' }}>LOOK&nbsp;0{i}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        )}
      </main>
    </div>
  );
}
