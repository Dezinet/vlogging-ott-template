'use client';

import { useRef } from 'react';
import Link from 'next/link';
import HomeImage from '../HomeImage';
import videosData from '../../data/video.json';

export default function MembersOnly() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Filter for Premium Content
  const vlogs = videosData.filter(v => v.isPremium);

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
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em' }}>For Members Only 🔒</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '1rem', fontWeight: 500 }}>Videos only for our members.</p>
        </div>
        <Link href="/membership" style={{ color: 'var(--accent-primary)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1rem', textTransform: 'uppercase' }}>Join us →</Link>
      </div>

      <div style={{ position: 'relative' }}>
          <button onClick={() => scroll('left')} className="glass glass-hover mobile-scroll-btn" style={{ left: '0' }}>←</button>
          <button onClick={() => scroll('right')} className="glass glass-hover mobile-scroll-btn" style={{ right: '0' }}>→</button>

          <div ref={scrollRef} style={{ display: 'flex', gap: 'var(--grid-gap)', overflowX: 'auto', paddingTop: '1.5rem', paddingBottom: '2.5rem', scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' }}>
            {vlogs.map(v => (
              <Link 
                key={v.id} 
                href={`/videos/${v.id}`}
                style={{ 
                  minWidth: '280px',
                  width: 'calc(25% - 1.5rem)',
                  flexShrink: 0,
                  cursor: 'pointer', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.25rem', 
                  scrollSnapAlign: 'start',
                  textDecoration: 'none'
                }}
              >
                 <div style={{ position: 'relative', height: '200px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', backgroundColor: 'var(--bg-deep)' }} className="glass-hover">
                    <HomeImage src={v.thumbnail} alt={v.id} style={{ filter: 'blur(8px)', transform: 'scale(1.05)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
                       <span style={{ fontSize: '2rem' }}>🔒</span>
                    </div>
                    <span style={{ position: 'absolute', top: '0.8rem', left: '0.8rem', background: 'var(--accent-primary)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 800 }}>MEMBER VIDEO</span>
                    <span style={{ position: 'absolute', bottom: '0.8rem', right: '0.8rem', background: 'rgba(0,0,0,0.85)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800 }}>{v.duration}</span>
                 </div>
                 <div style={{ padding: '0 0.5rem' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--accent-primary)', letterSpacing: '0.2em', marginBottom: '0.6rem', display: 'block', textTransform: 'uppercase' }}>{v.category}</span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.6rem', lineHeight: 1.2, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{v.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 700 }}>
                       <span>BECOME A MEMBER TO WATCH</span>
                    </div>
                 </div>
              </Link>
            ))}
          </div>
      </div>
    </section>
  );
}
