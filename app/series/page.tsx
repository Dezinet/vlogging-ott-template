'use client';

import Link from 'next/link';
import HomeImage from '../components/HomeImage';
import seriesData from '../data/series.json';

interface Series {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  episodesCount: number;
}

export default function AllSeriesPage() {
  return (
    <main style={{ backgroundColor: 'white', minHeight: '100vh', paddingBottom: '120px' }}>
      
      {/* 🚀 SERIES HERO */}
      <div style={{ 
        padding: 'clamp(60px, 10vh, 100px) var(--section-px) 60px', 
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.03) 0%, transparent 100%)',
        borderBottom: '1px solid var(--border-light)' 
      }}>
        <div style={{ maxWidth: '1800px', margin: '0 auto' }}>
          <h1 className="hero-h1" style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.06em', marginBottom: '1rem' }}>
            The <span style={{ color: 'var(--accent-primary)' }}>Chronologies</span>.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-dim)', fontWeight: 600, maxWidth: '650px', lineHeight: 1.6 }}>
            Binge-worthy episodic sagas. Deep dives into survival, technology, and the world's most hidden corners.
          </p>
        </div>
      </div>

      {/* 🚀 SERIES GRID */}
      <div className="responsive-section">
        <div style={{ 
          maxWidth: '1800px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(320px, 30vw, 420px), 1fr))', 
          gap: 'var(--grid-gap)' 
        }}>
          {(seriesData as Series[]).map(s => (
            <Link 
              key={s.id} 
              href={`/series/${s.id}`}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textDecoration: 'none' }}
            >
               <div style={{ 
                 position: 'relative', 
                 height: '320px', 
                 borderRadius: 'var(--radius-lg)', 
                 overflow: 'hidden', 
                 boxShadow: 'var(--shadow-xl)', 
                 backgroundColor: 'var(--bg-deep)'
               }} className="glass-hover">
                  <HomeImage src={s.thumbnail} alt={s.title} />
                  
                  {/* Series Indicator Overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}></div>
                  
                  <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', background: 'var(--accent-primary)', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.1rem' }}>
                    SERIES
                  </div>

                  <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                     <p style={{ color: 'white', fontSize: '0.85rem', fontWeight: 800, marginBottom: '6px', opacity: 0.8, textTransform: 'uppercase' }}>{s.category}</p>
                     <h3 style={{ color: 'white', fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{s.title}</h3>
                  </div>

                  {/* Episode Count Badge */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '2rem', 
                    right: '2rem', 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '50%', 
                    background: 'rgba(255,255,255,0.2)', 
                    backdropFilter: 'blur(20px)', 
                    color: 'white', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                     <span style={{ fontSize: '1.1rem', fontWeight: 900 }}>{s.episodesCount}</span>
                     <span style={{ fontSize: '0.55rem', fontWeight: 900, opacity: 0.8 }}>EPISODES</span>
                  </div>
               </div>

               <div style={{ padding: '0 0.5rem' }}>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-dim)', fontWeight: 600, lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {s.description}
                  </p>
                  <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)', fontWeight: 900, fontSize: '0.85rem' }}>
                     START CHRONICLE →
                  </div>
               </div>
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}
