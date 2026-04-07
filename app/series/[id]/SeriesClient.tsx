'use client';

import { useState } from 'react';
import Link from 'next/link';
import HomeImage from '../../components/HomeImage';
import seriesData from '../../data/series.json';
import videosData from '../../data/video.json';

export default function SeriesClient({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState('episodes');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  
  const series = seriesData.find(s => s.id === id) || seriesData[0];
  const episodes = (videosData as any[])
    .filter(v => v.seriesId === id)
    .sort((a, b) => (a.episode || 0) - (b.episode || 0));

  const cast = [
    { name: "John Doe", role: "Protagonist", img: "https://i.pravatar.cc/150?u=1" },
    { name: "Jane Smith", role: "Lead Detective", img: "https://i.pravatar.cc/150?u=2" },
    { name: "Robert Fox", role: "Key Witness", img: "https://i.pravatar.cc/150?u=3" },
    { name: "Sarah Connor", role: "Special Agent", img: "https://i.pravatar.cc/150?u=4" }
  ];

  return (
    <main style={{ backgroundColor: 'var(--bg-deep)', minHeight: '100vh', color: 'var(--text-main)', fontFamily: 'var(--font-main)' }}>
      
      {/* 🏙️ PREMIUM LIGHT HERO */}
      <section style={{ position: 'relative', height: '80vh', minHeight: '650px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
         <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '100%', zIndex: 1, borderBottomLeftRadius: 'var(--radius-2xl)', overflow: 'hidden' }}>
            <HomeImage src={series.thumbnail} alt={series.title} />
            <div style={{ 
              position: 'absolute', inset: 0, 
              background: 'linear-gradient(to right, var(--bg-deep) 0%, transparent 60%), linear-gradient(to top, var(--bg-deep) 5%, transparent 30%)',
              zIndex: 2 
            }}></div>
         </div>
         
         <div className="responsive-section" style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1400px' }}>
            <div style={{ maxWidth: '650px', animation: 'fadeInUp 1s ease' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <span style={{ height: '2px', width: '30px', background: 'var(--text-main)' }}></span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '0.3rem', textTransform: 'uppercase' }}>STUDIO EXCLUSIVE</span>
               </div>
               
               <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 950, color: 'var(--text-main)', lineHeight: 0.95, letterSpacing: '-0.05em', marginBottom: '2rem' }}>{series.title}</h1>
               
               <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', fontSize: '0.85rem', fontWeight: 800 }}>
                  <span style={{ color: 'var(--accent-secondary)', background: 'rgba(79,70,229,0.06)', padding: '6px 12px', borderRadius: '8px' }}>★ 9.8</span>
                  <span style={{ color: 'var(--text-muted)' }}>2026</span>
                  <span style={{ border: '1px solid var(--text-muted)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.65rem' }}>U/A 16+</span>
                  <span style={{ color: 'var(--text-dim)', letterSpacing: '0.1em' }}>{series.category} • HD 4K</span>
               </div>

               <p style={{ fontSize: '1.15rem', color: 'var(--text-dim)', fontWeight: 500, lineHeight: 1.6, marginBottom: '3.5rem' }}>
                  {isDescriptionExpanded ? series.description : `${series.description.slice(0, 150)}...`}
                  <button onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)} style={{ background: 'none', border: 'none', color: 'var(--accent-secondary)', fontWeight: 900, cursor: 'pointer', marginLeft: '8px' }}>
                    {isDescriptionExpanded ? "Show Less" : "Read Full Story"}
                  </button>
               </p>
               
               <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href={`/videos/${episodes[0]?.id || ''}`} style={{ padding: '1.25rem 3.5rem', background: 'var(--text-main)', color: 'white', borderRadius: '12px', fontWeight: 950, fontSize: '0.95rem', textDecoration: 'none', boxShadow: 'var(--shadow-xl)' }}>▶ WATCH NOW</Link>
                  <button style={{ padding: '1.25rem 2.5rem', background: 'white', border: '1.5px solid var(--text-main)', borderRadius: '12px', color: 'var(--text-main)', fontWeight: 950, fontSize: '0.95rem', cursor: 'pointer' }}>+ WATCHLIST</button>
               </div>
            </div>
         </div>
      </section>

      {/* 📋 EPISODES & CAST HUB */}
      <section className="responsive-section" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '4rem', borderBottom: '1px solid var(--border-light)', marginBottom: '4rem' }}>
             {['episodes', 'cast', 'details'].map(tab => (
               <button 
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 style={{ 
                   background: 'none', border: 'none', 
                   color: activeTab === tab ? 'var(--text-main)' : 'var(--text-muted)', 
                   fontSize: '0.9rem', fontWeight: 900, padding: '1.5rem 0', 
                   cursor: 'pointer', position: 'relative', textTransform: 'uppercase', letterSpacing: '0.15em' 
                 }}
               >
                 {tab}
                 {activeTab === tab && <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'var(--text-main)' }}></div>}
               </button>
             ))}
          </div>
          
          {activeTab === 'episodes' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '4rem' }}>
              {episodes.map((ep, index) => (
                <Link key={ep.id} href={`/videos/${ep.id}`} style={{ textDecoration: 'none' }}>
                  <div className="premium-card">
                     <div style={{ position: 'relative', height: '220px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                        <HomeImage src={ep.thumbnail} alt={ep.title} />
                        <div className="play-badge">▶</div>
                        <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(255,255,255,0.95)', color: 'var(--text-main)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 950 }}>{ep.duration}</div>
                     </div>
                     <div style={{ padding: '1.5rem 0.5rem' }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>EPISODE {index + 1}</div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '0.75rem' }}>{ep.title}</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{ep.description}</p>
                     </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {activeTab === 'cast' && (
             <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                {cast.map((c, i) => (
                   <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{ width: '160px', height: '160px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '1.25rem', boxShadow: 'var(--shadow-md)' }}>
                         <img src={c.img} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <h4 style={{ fontWeight: 900, fontSize: '1.1rem' }}>{c.name}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{c.role}</p>
                   </div>
                ))}
             </div>
          )}
      </section>

      <style>{`
        .premium-card { transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); }
        .premium-card:hover { transform: translateY(-8px); }
        .premium-card:hover .play-badge { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        .play-badge { 
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.8);
          width: 50px; height: 50px; background: white; color: black; border-radius: 50%;
          display: flex; align-items: center; justifyContent: center; opacity: 0; transition: all 0.3s ease;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </main>
  );
}
