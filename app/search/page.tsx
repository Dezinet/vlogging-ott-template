'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import HomeImage from '../components/HomeImage';
import videosData from '../data/video.json';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = videosData.filter(v => 
    v.title.toLowerCase().includes(query.toLowerCase()) || 
    v.category.toLowerCase().includes(query.toLowerCase()) ||
    v.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="responsive-section" style={{ minHeight: '80vh', paddingTop: '120px' }}>
      <div style={{ marginBottom: '4rem' }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', display: 'block', marginBottom: '1rem' }}>Search Results</span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em' }}>
          {query ? `Found ${results.length} results for "${query}"` : 'Everything in our library'}
        </h1>
      </div>

      {results.length > 0 ? (
        <div className="grid-3" style={{ gap: 'var(--grid-gap)' }}>
          {results.map(v => (
            <Link 
              key={v.id} 
              href={`/videos/${v.id}`}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textDecoration: 'none' }}
            >
               <div style={{ position: 'relative', height: '240px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', backgroundColor: 'var(--bg-deep)' }} className="glass-hover">
                  <HomeImage src={v.thumbnail} alt={v.id} />
                  <span style={{ position: 'absolute', bottom: '0.8rem', right: '0.8rem', background: 'rgba(0,0,0,0.85)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800 }}>{v.duration}</span>
               </div>
               <div style={{ padding: '0 0.5rem' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--accent-primary)', letterSpacing: '0.2em', marginBottom: '0.6rem', display: 'block', textTransform: 'uppercase' }}>{v.category}</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.6rem', lineHeight: 1.2 }}>{v.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 700 }}>
                     <span>{v.views} VIEWS</span>
                  </div>
               </div>
            </Link>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '100px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
           <div style={{ fontSize: '4rem', opacity: 0.2 }}>🔍</div>
           <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '1rem' }}>No videos found.</h2>
              <p style={{ color: 'var(--text-dim)', fontWeight: 500 }}>Try searching for "Sahara", "Tech", or "Life".</p>
           </div>
           <Link href="/videos" className="btn-primary" style={{ padding: '14px 32px', borderRadius: '40px' }}>Browse All Videos</Link>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="responsive-section" style={{ paddingTop: '120px' }}>Searching...</div>}>
      <SearchResults />
    </Suspense>
  );
}
