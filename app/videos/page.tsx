'use client';

import Link from 'next/link';
import HomeImage from '../components/HomeImage';
import videosData from '../data/video.json';

export default function VlogsPage() {
  return (
    <main style={{ backgroundColor: 'white', minHeight: '100vh', paddingBottom: '100px' }}>
      
      {/* 🚀 HERO HEADER */}
      <div style={{ 
        padding: 'clamp(40px, 8vh, 80px) var(--section-px) 40px', 
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.03) 0%, transparent 100%)',
        borderBottom: '1px solid var(--border-light)' 
      }}>
        <div style={{ maxWidth: '1800px', margin: '0 auto' }}>
          <h1 className="hero-h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.06em', marginBottom: '1rem' }}>
            All our <span style={{ color: 'var(--accent-primary)' }}>videos</span>.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-dim)', fontWeight: 600, maxWidth: '600px', lineHeight: 1.5 }}>
            Explore 50+ cinematic adventures. Real, raw, and unfiltered footage from across the world.
          </p>
        </div>
      </div>

      {/* 🚀 VIDEO GRID */}
      <div style={{ padding: '40px var(--section-px)' }}>
        <div style={{ 
          maxWidth: '1800px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(280px, 30vw, 340px), 1fr))', 
          gap: '40px var(--grid-gap)' 
        }}>
          {videosData.map(v => (
            <Link 
              key={v.id} 
              href={`/videos/${v.id}`}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textDecoration: 'none' }}
            >
               <div style={{ 
                 position: 'relative', 
                 paddingTop: '56.25%', // 16:9 
                 borderRadius: 'var(--radius-lg)', 
                 overflow: 'hidden', 
                 boxShadow: 'var(--shadow-md)', 
                 backgroundColor: 'var(--bg-deep)'
               }} className="glass-hover">
                  <div style={{ position: 'absolute', inset: 0 }}>
                    <HomeImage src={v.thumbnail} alt={v.id} />
                  </div>
                  <span style={{ position: 'absolute', bottom: '0.8rem', right: '0.8rem', background: 'rgba(0,0,0,0.85)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800 }}>
                    {v.duration}
                  </span>
                  {v.isPremium && (
                    <span style={{ position: 'absolute', top: '0.8rem', left: '0.8rem', background: 'var(--accent-primary)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 800 }}>
                      PREMIUM
                    </span>
                  )}
               </div>
               <div style={{ padding: '0 0.5rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--accent-primary)', letterSpacing: '0.2em', marginBottom: '0.6rem', display: 'block', textTransform: 'uppercase' }}>
                    {v.category}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.6rem', lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {v.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 700 }}>
                     <span>{v.views} VIEWS</span>
                     <span>•</span>
                     <span>DEZINET</span>
                  </div>
               </div>
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}
