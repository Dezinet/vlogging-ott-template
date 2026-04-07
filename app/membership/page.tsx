'use client';

import Link from 'next/link';
import HomeImage from '../components/HomeImage';

export default function MembershipPage() {
  const tiers = [
    { name: 'FREE', price: 'FREE', per: 'FOREVER', features: ['Watch in 1080p', 'Access public videos', 'See videos in order'], btn: 'Current Plan', active: false },
    { name: 'MONTHLY', price: '$8.99', per: 'MONTHLY', features: ['Watch in 4K', 'No ads', 'Behind the scenes videos', 'Watch videos early', 'Private member area'], btn: 'CHOOSE MONTHLY', active: true },
    { name: 'YEARLY', price: '$89.90', per: 'YEARLY', features: ['Everything in Monthly', 'Member badge', 'Ask me questions', 'Uncut videos', '15% discount on gear'], btn: 'CHOOSE YEARLY', active: false },
  ];

  const lockedVlogs = [
    { id: 'ex1', title: 'Deep Dive: Behind the Scenes of The Future AI Suite', category: 'TECH', thumb: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0' },
    { id: 'ex2', title: 'Mountain Peak Meditation - 4K Premium Experience', category: 'NATURE', thumb: 'https://images.unsplash.com/photo-1519681393784-d120267933ba' },
    { id: 'ex3', title: 'Sahara Survival: The Raw Lost Tapes', category: 'SURVIVAL', thumb: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35' },
  ];

  return (
    <main style={{ backgroundColor: 'white', minHeight: '100vh', paddingBottom: '120px' }}>
      
      {/* 🚀 MEMBERSHIP HERO */}
      <div style={{ 
        padding: 'clamp(60px, 12vh, 120px) var(--section-px) 80px', 
        background: 'linear-gradient(to bottom, rgba(79, 70, 229, 0.05) 0%, transparent 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--accent-primary)', letterSpacing: '0.4rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>MEMBERSHIP</span>
          <h1 className="hero-h1" style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.06em', marginBottom: '1.5rem', lineHeight: 1.0 }}>
            The <span style={{ color: 'var(--accent-primary)' }}>Membership</span>.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-dim)', fontWeight: 600, lineHeight: 1.6, marginBottom: '40px' }}>
             Join our membership to see our best videos in 4K. There are no ads and everything is high quality.
          </p>
        </div>
      </div>

      {/* 🚀 PRICING TIERS */}
      <div className="responsive-section">
         <div className="grid-3" style={{ maxWidth: '1200px', margin: '0 auto', gap: '2rem' }}>
            {tiers.map((t, i) => (
               <div key={i} className="glass" style={{ 
                 padding: '3rem 2rem', 
                 borderRadius: 'var(--radius-lg)', 
                 textAlign: 'center',
                 border: t.active ? '2px solid var(--accent-primary)' : '1px solid var(--border-light)',
                 background: t.active ? 'white' : 'var(--bg-card)',
                 transform: t.active ? 'scale(1.05)' : 'none',
                 zIndex: t.active ? 10 : 1,
                 display: 'flex',
                 flexDirection: 'column'
               }}>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.2rem', marginBottom: '1.5rem', color: t.active ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{t.name}</h4>
                  <div style={{ marginBottom: '2.5rem' }}>
                     <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text-main)' }}>{t.price}</span>
                     {t.per && <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600 }}> / {t.per}</span>}
                  </div>
                  
                  <div style={{ flex: 1, marginBottom: '3rem' }}>
                     {t.features.map((f, j) => (
                        <div key={j} style={{ padding: '0.8rem 0', borderBottom: '1px solid var(--border-light)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dim)' }}>
                           {f}
                        </div>
                     ))}
                  </div>

                  <button className={t.active ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%', padding: '16px', borderRadius: '50px', fontSize: '0.85rem', letterSpacing: '0.1rem' }}>
                    {t.btn}
                  </button>
               </div>
            ))}
         </div>
      </div>

      {/* 🚀 EXCLUSIVE PREVIEW WALL */}
      <div className="responsive-section" style={{ backgroundColor: 'var(--bg-deep)', marginTop: '80px' }}>
         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em', marginBottom: '1rem' }}>Members Only Videos</h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '60px' }}>Videos you can watch when you join.</p>

            <div className="grid-3">
               {lockedVlogs.map(v => (
                  <div key={v.id} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                     <div style={{ 
                       position: 'relative', 
                       height: '240px', 
                       borderRadius: 'var(--radius-lg)', 
                       overflow: 'hidden', 
                       boxShadow: 'var(--shadow-lg)' 
                     }}>
                        <img src={v.thumb} alt={v.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(20px) saturate(0.2)' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', textAlign: 'center' }}>
                           <div className="glass" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.5rem' }}>🔒</div>
                           <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.2 }}>{v.title}</h4>
                        </div>
                     </div>
                     <p style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 900, color: 'var(--accent-primary)', letterSpacing: '0.15em' }}>FOR MEMBERS</p>
                  </div>
               ))}
            </div>
         </div>
      </div>

    </main>
  );
}
