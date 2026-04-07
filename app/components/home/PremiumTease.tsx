'use client';

import Link from 'next/link';

export default function PremiumTease() {
  const previews = [
    { id: 'p1', title: 'Uncut: My Most Dangerous Stunt', thumb: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4' },
    { id: 'p2', title: 'Private Jet Challenge: 5 Fans', thumb: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b' },
  ];

  return (
    <section className="responsive-section" style={{ backgroundColor: 'white' }}>
        <div className="grid-2" style={{ maxWidth: '1200px', margin: '0 auto', alignItems: 'center', gap: 'clamp(2rem, 5vw, 4rem)' }}>
           {/* Content Block */}
           <div style={{ padding: '1rem 0' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', fontWeight: 900, letterSpacing: '0.4rem', display: 'block', marginBottom: '1.2rem' }}>MEMBERSHIP</span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 0.95, marginBottom: '1.5rem', color: 'var(--text-main)', letterSpacing: '-0.04em' }}>Better Access. <br/> Better Videos.</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--text-dim)', marginBottom: '2.5rem', maxWidth: '440px', fontWeight: 600 }}>
                 Join our membership to see our best videos. There are no ads and everything is high quality.
              </p>
              <Link href="/membership" className="btn-primary" style={{ padding: '18px 48px', borderRadius: '100px', fontSize: '0.95rem', letterSpacing: '0.1rem', display: 'inline-block', textDecoration: 'none' }}>Join now 🔒</Link>
           </div>

           {/* Visual Stack - Creative Layout */}
           <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--grid-gap)' }}>
              {previews.map((p, i) => (
                 <div key={p.id} style={{ 
                    position: 'relative', 
                    height: 'clamp(280px, 40vh, 360px)', 
                    borderRadius: 'var(--radius-lg)', 
                    overflow: 'hidden', 
                    boxShadow: 'var(--shadow-xl)',
                    marginTop: i % 2 === 0 ? '0' : 'clamp(0px, 4vw, 40px)',
                    transition: 'all 0.5s ease'
                 }}>
                    <img src={p.thumb} alt={p.id} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(10px) saturate(0.2)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', textAlign: 'center' }}>
                       <div className="glass" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.5rem' }}>🔒</div>
                       <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.2 }}>{p.title}</h4>
                    </div>
                 </div>
              ))}
           </div>
        </div>
    </section>
  );
}
