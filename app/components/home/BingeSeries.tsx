'use client';

import Link from 'next/link';

export default function BingeSeries() {
  const series = [
    { title: 'Travel India 🇮🇳', count: '12 Episodes', bg: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da' },
    { title: 'The Startup Journey', count: '8 Episodes', bg: 'https://images.unsplash.com/photo-1556761175-b413da4baf72' },
    { title: 'Sahara Chronicles', count: '6 Episodes', bg: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8' },
    { title: 'Solo Roots', count: '10 Episodes', bg: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429' },
    { title: 'Desert Kings', count: '4 Episodes', bg: 'https://images.unsplash.com/photo-1542401886-65d6c61db217' },
    { title: 'Alps in 7 Days', count: '7 Episodes', bg: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b' },
  ];

  return (
    <section className="responsive-section" style={{ backgroundColor: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em' }}>Great Stories</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '1rem', fontWeight: 500 }}>Watch our longest and favorite videos.</p>
        </div>
        <Link href="/series" style={{ color: 'var(--accent-primary)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1rem', textTransform: 'uppercase' }}>See all stories →</Link>
      </div>

      <div className="grid-3" style={{ gap: 'var(--grid-gap)' }}>
        {series.map((s, i) => (
          <div key={i} style={{ 
            height: '240px', 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url(${s.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-lg)'
          }} className="glass-hover">
             <span style={{ fontSize: '0.65rem', color: 'white', fontWeight: 900, background: 'var(--accent-primary)', padding: '5px 12px', borderRadius: '4px', alignSelf: 'flex-start', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>SERIES</span>
             <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'white', marginBottom: '0.4rem' }}>{s.title}</h3>
             <p style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '0.9rem' }}>{s.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
