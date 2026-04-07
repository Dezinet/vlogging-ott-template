'use client';

import { useRef } from 'react';
import Link from 'next/link';
import HomeImage from '../HomeImage';
import seriesData from '../../data/series.json';

export default function SeriesSpotlight() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({ left: direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="responsive-section" style={{ backgroundColor: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0 0.5rem' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em' }}>Featured Series</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '1rem', fontWeight: 500 }}>Watch our long-form stories here.</p>
        </div>
        <Link href="/series" style={{ color: 'var(--accent-primary)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1rem', textTransform: 'uppercase' }}>View all series →</Link>
      </div>

      <div style={{ position: 'relative' }}>
          <button onClick={() => scroll('left')} className="glass glass-hover mobile-scroll-btn" style={{ left: '0', top: '150px' }}>←</button>
          <button onClick={() => scroll('right')} className="glass glass-hover mobile-scroll-btn" style={{ right: '0', top: '150px' }}>→</button>

          <div ref={scrollRef} style={{ display: 'flex', gap: 'var(--grid-gap)', overflowX: 'auto', paddingTop: '2rem', paddingBottom: '3rem', scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' }}>
            {seriesData.map(s => (
              <Link 
                key={s.id} 
                href={`/series/${s.id}`}
                style={{ 
                  minWidth: '320px',
                  width: 'calc(33.33% - 1.7rem)',
                  flexShrink: 0,
                  cursor: 'pointer', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.5rem', 
                  scrollSnapAlign: 'start',
                  textDecoration: 'none'
                }}
              >
                 <div style={{ position: 'relative', height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', backgroundColor: 'var(--bg-deep)' }} className="glass-hover">
                    <HomeImage src={s.thumbnail} alt={s.title} />
                    
                    {/* Series Indicator Layer */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }}></div>
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--accent-primary)', color: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.1em' }}>SERIES</div>
                    <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                       <p style={{ color: 'white', fontSize: '0.8rem', fontWeight: 800, marginBottom: '4px', opacity: 0.8 }}>{s.category}</p>
                       <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.02em' }}>{s.title}</h3>
                    </div>
                    <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 900 }}>
                       {s.episodesCount}e
                    </div>
                 </div>
                 <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', fontWeight: 600, lineHeight: 1.5, padding: '0 0.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {s.description}
                 </p>
              </Link>
            ))}
          </div>
      </div>
    </section>
  );
}
