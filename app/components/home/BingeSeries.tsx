'use client';

import Link from 'next/link';
import seriesData from '../../data/series.json';

export default function BingeSeries() {
  // Show 12 series for a much richer homepage content experience
  const series = seriesData.slice(0, 12);

  return (
    <section className="responsive-section" style={{ backgroundColor: 'var(--bg-deep)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em' }}>Popular Web Series</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '1rem', fontWeight: 500 }}>Watch our longest and favorite multi-episode sagas.</p>
        </div>
        <Link href="/series" style={{ color: 'var(--accent-primary)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1rem', textTransform: 'uppercase' }}>See all series →</Link>
      </div>

      <div className="grid-3" style={{ gap: 'var(--grid-gap)' }}>
        {series.map((s, i) => (
          <Link key={s.id} href={`/series/${s.id}`} style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ 
              height: '240px', 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url(${s.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-lg)',
              transition: 'transform 0.3s ease'
            }} className="glass-hover">
               <span style={{ fontSize: '0.65rem', color: 'white', fontWeight: 900, background: 'var(--accent-primary)', padding: '5px 12px', borderRadius: '4px', alignSelf: 'flex-start', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>SERIES</span>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'white', marginBottom: '0.4rem' }}>{s.title}</h3>
               <p style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '0.9rem' }}>{s.episodesCount} Episodes</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
