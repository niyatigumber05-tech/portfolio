import React, { useState } from 'react';
import { designer } from '../../data/mock';
import { Mail, ExternalLink, Send } from 'lucide-react';

export default function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // Frontend-only mock — stash in localStorage so the interaction feels real.
    const entries = JSON.parse(localStorage.getItem('niyati_contact') || '[]');
    entries.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem('niyati_contact', JSON.stringify(entries));
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <div className="px-8 py-8">
      <div className="pixel text-[9px] mb-2" style={{ color: '#7a4b57' }}>CONTACT</div>
      <h2 className="pixel text-[12px] mb-2" style={{ color: '#2d2a26' }}>SAY&nbsp;HELLO</h2>
      <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: 16, color: '#4a4540', marginBottom: 18 }}>
        For collaborations, internships or to receive the latest portfolio PDF.
      </p>

      <div className="flex flex-col gap-2 mb-6">
        <a className="clickable flex items-center gap-2 text-[14px]" href={`mailto:${designer.email}`} style={{ color: '#7a4b57' }}>
          <Mail size={14}/> {designer.email}
        </a>
        <a className="clickable flex items-center gap-2 text-[14px]" href={designer.behance} target="_blank" rel="noreferrer" style={{ color: '#7a4b57' }}>
          <ExternalLink size={14}/> behance.net/niyatigumber
        </a>
      </div>

      <form onSubmit={submit} className="flex flex-col gap-3">
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          className="px-3 py-2"
          style={{ border: '2px solid #2d2a26', background: '#faf6f0', fontFamily: "'Crimson Pro', serif", fontSize: 16, outline: 'none' }}
        />
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Your email"
          className="px-3 py-2"
          style={{ border: '2px solid #2d2a26', background: '#faf6f0', fontFamily: "'Crimson Pro', serif", fontSize: 16, outline: 'none' }}
        />
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="A short message…"
          className="px-3 py-2 resize-none"
          style={{ border: '2px solid #2d2a26', background: '#faf6f0', fontFamily: "'Crimson Pro', serif", fontSize: 16, outline: 'none' }}
        />
        <button
          type="submit"
          className="clickable pixel flex items-center justify-center gap-2 px-4 py-2 self-start"
          style={{ background: '#7a4b57', color: '#faf6f0', border: '2px solid #2d2a26', fontSize: 9 }}
        >
          <Send size={12}/> SEND&nbsp;NOTE
        </button>
        {sent && (
          <p className="pixel text-[8px]" style={{ color: '#7a4b57' }}>· NOTE&nbsp;SAVED&nbsp;—&nbsp;Thank&nbsp;you.</p>
        )}
      </form>
    </div>
  );
}
