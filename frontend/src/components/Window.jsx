import React, { useRef, useState, useEffect } from 'react';
import { X, Minus, Square } from 'lucide-react';
import { sound } from '../lib/sound';

export default function WindowFrame({ win, children, onClose, onMinimize, onFocus, onUpdate }) {
  const [pos, setPos] = useState({ x: win.x, y: win.y });
  const [size, setSize] = useState({ w: win.w, h: win.h });
  const [expanded, setExpanded] = useState(false);
  const dragState = useRef(null);
  const resizeState = useRef(null);

  useEffect(() => { setPos({ x: win.x, y: win.y }); }, [win.x, win.y]);

  const startDrag = (e) => {
    onFocus();
    if (expanded) return;
    dragState.current = { startX: e.clientX, startY: e.clientY, origX: pos.x, origY: pos.y };
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', endDrag);
  };
  const onDrag = (e) => {
    if (!dragState.current) return;
    const dx = e.clientX - dragState.current.startX;
    const dy = e.clientY - dragState.current.startY;
    setPos({
      x: Math.max(4, Math.min(window.innerWidth - 120, dragState.current.origX + dx)),
      y: Math.max(34, Math.min(window.innerHeight - 80, dragState.current.origY + dy)),
    });
  };
  const endDrag = () => {
    dragState.current = null;
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', endDrag);
    onUpdate({ x: pos.x, y: pos.y });
  };

  const startResize = (e) => {
    e.stopPropagation();
    onFocus();
    resizeState.current = { startX: e.clientX, startY: e.clientY, origW: size.w, origH: size.h };
    document.addEventListener('mousemove', onResize);
    document.addEventListener('mouseup', endResize);
  };
  const onResize = (e) => {
    if (!resizeState.current) return;
    const dw = e.clientX - resizeState.current.startX;
    const dh = e.clientY - resizeState.current.startY;
    setSize({
      w: Math.max(420, Math.min(window.innerWidth - 40, resizeState.current.origW + dw)),
      h: Math.max(320, Math.min(window.innerHeight - 100, resizeState.current.origH + dh)),
    });
  };
  const endResize = () => {
    resizeState.current = null;
    document.removeEventListener('mousemove', onResize);
    document.removeEventListener('mouseup', endResize);
  };

  const toggleExpand = () => {
    setExpanded((v) => !v);
    sound.play('click');
  };

  const dims = expanded
    ? { left: 12, top: 38, width: window.innerWidth - 24, height: window.innerHeight - 110 }
    : { left: pos.x, top: pos.y, width: size.w, height: size.h };

  return (
    <div
      className="fixed window-in"
      style={{
        ...dims,
        zIndex: win.z,
        background: '#faf6f0',
        border: '2px solid #2d2a26',
        boxShadow: '6px 6px 0 rgba(45,42,38,0.18), 0 18px 40px rgba(45,42,38,0.18)',
        display: 'flex', flexDirection: 'column',
      }}
      onMouseDown={onFocus}
    >
      {/* Titlebar */}
      <div
        className="flex items-center justify-between px-2"
        style={{
          height: 26,
          background: `linear-gradient(180deg, ${win.accent || '#c8a47e'}33, ${win.accent || '#c8a47e'}11)`,
          borderBottom: '2px solid #2d2a26',
          cursor: 'grab',
          userSelect: 'none',
        }}
        onMouseDown={startDrag}
      >
        <div className="flex items-center gap-1.5">
          <button
            onClick={(e) => { e.stopPropagation(); sound.play('close'); onClose(); }}
            onMouseEnter={() => sound.play('hover')}
            className="clickable flex items-center justify-center"
            style={{ width: 14, height: 14, background: '#e07a7a', border: '1.5px solid #2d2a26' }}
            title="Close"
          >
            <X size={8} strokeWidth={3} color="#2d2a26"/>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); sound.play('click'); onMinimize(); }}
            onMouseEnter={() => sound.play('hover')}
            className="clickable flex items-center justify-center"
            style={{ width: 14, height: 14, background: '#e3c976', border: '1.5px solid #2d2a26' }}
            title="Minimize"
          >
            <Minus size={8} strokeWidth={3} color="#2d2a26"/>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); toggleExpand(); }}
            onMouseEnter={() => sound.play('hover')}
            className="clickable flex items-center justify-center"
            style={{ width: 14, height: 14, background: '#9ec48f', border: '1.5px solid #2d2a26' }}
            title="Expand"
          >
            <Square size={7} strokeWidth={3} color="#2d2a26"/>
          </button>
        </div>

        <div className="pixel text-[9px]" style={{ color: '#2d2a26' }}>{win.title}</div>
        <div style={{ width: 56 }} />
      </div>

      {/* Body */}
      <div className="flex-1 overflow-auto niyati-scroll" style={{ background: '#faf6f0' }}>
        {children}
      </div>

      {/* Resize handle */}
      {!expanded && (
        <div
          onMouseDown={startResize}
          style={{
            position: 'absolute', right: 0, bottom: 0, width: 14, height: 14,
            background: 'repeating-linear-gradient(135deg, #2d2a26 0 2px, transparent 2px 4px)',
            cursor: 'nwse-resize',
          }}
        />
      )}
    </div>
  );
}
