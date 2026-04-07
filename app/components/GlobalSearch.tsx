'use client';

import { useState, useEffect } from 'react';

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="glass" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(40px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '2rem'
    }} onClick={() => setIsOpen(false)}>
      
      <div 
        className="glass" 
        style={{ 
          width: '100%', 
          maxWidth: '700px', 
          background: 'white', 
          borderRadius: 'var(--radius-lg)', 
          padding: '2.5rem', 
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border-light)',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem'
        }} 
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', paddingBottom: '1.5rem', borderBottom: '2px solid var(--bg-secondary)' }}>
           <span style={{ fontSize: '2rem', opacity: 0.5 }}>🔍</span>
           <input 
             autoFocus
             placeholder="Search vlogs, series, or gear..." 
             style={{ 
               flex: 1, 
               fontSize: '1.5rem', 
               border: 'none', 
               outline: 'none', 
               background: 'transparent', 
               color: 'var(--text-main)',
               fontWeight: 500
             }} 
           />
           <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 800 }}>ESC</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
           <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>Recent Searches</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                 <p style={{ fontWeight: 600, color: 'var(--text-dim)', fontSize: '0.95rem' }}>Hiking in the Alps</p>
                 <p style={{ fontWeight: 600, color: 'var(--text-dim)', fontSize: '0.95rem' }}>Sahara survival tips</p>
                 <p style={{ fontWeight: 600, color: 'var(--text-dim)', fontSize: '0.95rem' }}>Ramen Osaka episode</p>
              </div>
           </div>
           <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-secondary)', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>Suggested Categories</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                 <span className="glass" style={{ padding: '6px 14px', borderRadius: '40px', fontSize: '0.85rem', fontWeight: 600 }}>#Adventure</span>
                 <span className="glass" style={{ padding: '6px 14px', borderRadius: '40px', fontSize: '0.85rem', fontWeight: 600 }}>#Tech</span>
                 <span className="glass" style={{ padding: '6px 14px', borderRadius: '40px', fontSize: '0.85rem', fontWeight: 600 }}>#Survival</span>
                 <span className="glass" style={{ padding: '6px 14px', borderRadius: '40px', fontSize: '0.85rem', fontWeight: 600 }}>#Series</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
