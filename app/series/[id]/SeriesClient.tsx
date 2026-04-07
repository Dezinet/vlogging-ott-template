'use client';

import Link from 'next/link';
import HomeImage from '../../components/HomeImage';
import seriesData from '../../data/series.json';
import videosData from '../../data/video.json';

export default function SeriesClient({ id }: { id: string }) {
  const series = seriesData.find(s => s.id === id) || seriesData[0] || { title: '', description: '', thumbnail: '' };
  const episodes = (videosData as any[])
    .filter(v => v.seriesId === id)
    .sort((a, b) => (a.episode || 0) - (b.episode || 0));

  return (
    <main style={{ backgroundColor: 'white', minHeight: '100vh', paddingBottom: '120px' }}>
      
      <section className="hero-container" style={{ height: '70vh', minHeight: '500px' }}>
         <div style={{ position: 'absolute', inset: 0, filter: 'brightness(0.4) saturate(1.2)' }}>
            <HomeImage src={series.thumbnail} alt={series.title} />
         </div>
         
         <div className="hero-content" style={{ width: '100%', maxWidth: '900px', textAlign: 'left', alignItems: 'flex-start' }}>
            <span style={{ display: 'inline-block', padding: '8px 16px', background: 'var(--accent-primary)', color: 'white', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.15em', marginBottom: '20px' }}>DEZINET ORIGINALS</span>
            <h1 className="hero-h1" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.06em', marginBottom: '20px', lineHeight: 0.9 }}>{series.title}</h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600, lineHeight: 1.6, marginBottom: '40px', maxWidth: '600px' }}>{series.description}</p>
            
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
               <Link href={`/videos/${episodes[0]?.id || ''}`} style={{ padding: '18px 44px', background: 'white', color: 'black', borderRadius: '50px', fontWeight: 900, fontSize: '0.95rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>▶ WATCH EPISODE 1</Link>
               <button style={{ padding: '18px 44px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(20px)', borderRadius: '50px', fontWeight: 900, fontSize: '0.95rem', cursor: 'pointer' }}>+ MY LIST</button>
            </div>
         </div>
      </section>

      <div className="responsive-section" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em', marginBottom: '60px' }}>The Chronicle ({episodes.length} Episodes)</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {episodes.map((ep, index) => (
              <Link key={ep.id} href={`/videos/${ep.id}`} className="episode-link" style={{ textDecoration: 'none' }}>
                <div style={{ display: 'flex', gap: 'var(--grid-gap)', alignItems: 'center', flexWrap: 'wrap', borderBottom: '1px solid var(--border-light)', paddingBottom: '40px' }}>
                   <div className="hide-mobile" style={{ fontSize: '4rem', fontWeight: 900, color: 'rgba(0,0,0,0.05)', minWidth: '80px' }}>{index + 1}</div>
                   <div className="episode-thumb" style={{ flexShrink: 0, position: 'relative' }}>
                      <HomeImage src={ep.thumbnail} alt={ep.title} />
                      <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(0,0,0,0.85)', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 900 }}>{ep.duration}</div>
                   </div>
                   <div style={{ flex: 1, minWidth: '280px' }}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '12px' }}>{ep.title}</h3>
                      <p style={{ fontSize: '1rem', color: 'var(--text-dim)', fontWeight: 600, lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{ep.description}</p>
                      <div style={{ marginTop: '16px', display: 'flex', gap: '16px', color: 'var(--accent-primary)', fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.1em' }}>
                         <span>{ep.views} VIEWS</span>
                         {ep.isPremium && <span style={{ background: '#000', color: '#fff', padding: '2px 8px', borderRadius: '4px' }}>MEMBERSHIP</span>}
                      </div>
                   </div>
                </div>
              </Link>
            ))}
          </div>
      </div>

      <style>{`
        .episode-thumb { width: 400px; height: 225px; border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-md); }
        @media (max-width: 768px) {
          .episode-thumb { width: 100%; height: auto; aspect-ratio: 16/9; }
          .episode-link { padding: 0; }
        }
      `}</style>
    </main>
  );
}
