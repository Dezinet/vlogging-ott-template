'use client';

import CustomPlayer from '../../components/player/CustomPlayer';
import HomeImage from '../../components/HomeImage';
import Link from 'next/link';
import videosData from '../../data/video.json';

interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  duration: string;
  category: string;
  views: string;
  publishedAt: string;
  isPremium: boolean;
}

export default function VideoClient({ id }: { id: string }) {
  const video: Video = (videosData as Video[]).find(v => v.id === id) || (videosData[0] as Video);
  const recommended = (videosData as Video[]).filter(v => v.id !== video.id).slice(0, 15);

  const isLoggedIn = false; 

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', paddingBottom: '100px' }}>
      
      <div className="discovery-container" style={{ 
        maxWidth: '1600px', 
        margin: '0 auto', 
        padding: '24px var(--section-px)',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) 400px',
        gap: '24px'
      }}>
         
         <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: '#000', boxShadow: 'var(--shadow-lg)' }}>
               {video.isPremium && !isLoggedIn ? (
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                     <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${video.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(50px)', opacity: 0.3 }}></div>
                     <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center', zIndex: 10, padding: '24px' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>🔒</div>
                        <span style={{ fontSize: '0.7rem', fontWeight: 950, color: 'var(--accent-primary)', letterSpacing: '0.4em', textTransform: 'uppercase' }}>Exclusive Record</span>
                        <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.04em', maxWidth: '500px' }}>Locked for Elite Members</h2>
                        <div style={{ display: 'flex', gap: '12px', marginTop: '1rem' }}>
                           <Link href="/membership" className="btn-primary" style={{ padding: '12px 32px', borderRadius: '40px', background: 'white', color: 'var(--text-main)', fontSize: '0.8rem' }}>Join Us</Link>
                           <Link href="/login" className="btn-secondary" style={{ padding: '12px 32px', borderRadius: '40px', color: 'white', borderColor: 'rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)', fontSize: '0.8rem' }}>Login</Link>
                        </div>
                     </div>
                  </div>
               ) : (
                  <CustomPlayer src={video.url} poster={video.thumbnail} />
               )}
            </div>

            <div style={{ padding: '4px 0' }}>
               <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.85rem)', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '12px' }}>
                  {video.title}
               </h1>
               
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dim)', fontSize: '0.9rem', fontWeight: 700 }}>
                     <span>{video.views} Views</span>
                     <span>•</span>
                     <span>{new Date(video.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                     <button className="glass glass-hover" style={{ padding: '10px 20px', borderRadius: '40px', fontWeight: 800, fontSize: '0.8rem', border: '1px solid var(--border-light)' }}>👍 Liked</button>
                     <button className="glass glass-hover" style={{ padding: '10px 20px', borderRadius: '40px', fontWeight: 800, fontSize: '0.8rem', border: '1px solid var(--border-light)' }}>↪ Share</button>
                  </div>
               </div>
            </div>

            <hr style={{ border: 'none', borderTop: '2px solid var(--bg-secondary)' }} />

            <div className="glass" style={{ padding: '24px', borderRadius: 'var(--radius-md)', background: 'var(--bg-secondary)', border: 'none' }}>
               <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 550, lineHeight: 1.6 }}>
                  {video.description}
                  <br /><br />
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.7rem' }}>#BeyondTheAlgorithm #DezinetVerse #{video.category}</span>
               </p>
            </div>

            <div style={{ marginTop: '20px' }}>
               <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '24px' }}>2.4K Comments</h3>
               <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', flexShrink: 0 }}></div>
                  <input 
                    type="text" 
                    placeholder="Join the dezinet conversation..." 
                    style={{ width: '100%', border: 'none', borderBottom: '1px solid var(--bg-secondary)', background: 'transparent', padding: '10px 0', outline: 'none', fontWeight: 700, color: 'var(--text-main)' }}
                  />
               </div>
            </div>
         </div>

         <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 950, color: 'var(--text-muted)', letterSpacing: '0.2rem', textTransform: 'uppercase', marginBottom: '4px' }}>Up Next</span>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
               {recommended.map(rv => (
                 <Link key={rv.id} href={`/videos/${rv.id}`} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '12px', textDecoration: 'none' }}>
                    <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 'var(--radius-sm)', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)' }}>
                       <HomeImage src={rv.thumbnail} alt={rv.id} />
                       <span style={{ position: 'absolute', bottom: '4px', right: '4px', background: 'rgba(0,0,0,0.85)', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 800 }}>{rv.duration}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                       <h4 style={{ fontSize: '0.9rem', fontWeight: 850, color: 'var(--text-main)', lineHeight: 1.25, marginBottom: '2px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{rv.title}</h4>
                       <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-dim)' }}>Dezinet Verse</span>
                    </div>
                 </Link>
               ))}
            </div>
         </div>

      </div>

      <style>{`
        @media (max-width: 1200px) {
           .discovery-container { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 768px) {
           .discovery-container { padding: 12px var(--section-px) !important; }
        }
      `}</style>
    </main>
  );
}
