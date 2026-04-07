'use client';

export default function EmailCTA() {
  return (
    <section className="responsive-section">
       <div style={{ 
         textAlign: 'center', 
         padding: 'clamp(2rem, 10vw, 4rem) clamp(1rem, 5vw, 2rem)', 
         borderRadius: 'var(--radius-lg)', 
         background: 'var(--accent-gradient)', 
         position: 'relative', 
         overflow: 'hidden',
         boxShadow: '0 20px 40px rgba(79, 70, 229, 0.15)' 
       }}>
          {/* Decorative background elements for high-end feel */}
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '200px', height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '150px', height: '150px', background: 'rgba(0,0,0,0.05)', borderRadius: '50%', filter: 'blur(30px)' }}></div>

          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.8rem)', marginBottom: '1rem', fontWeight: 900, color: 'white', letterSpacing: '-0.04em', position: 'relative', zIndex: 2 }}>Get my new videos.</h2>
          <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', marginBottom: '2.5rem', opacity: 0.9, color: 'white', fontWeight: 500, maxWidth: '500px', margin: '0 auto 2.5rem', position: 'relative', zIndex: 2 }}>I will send you an email every week with my latest videos. No spam.</p>
          
          <div className="newsletter-form" style={{ maxWidth: '500px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
             <div style={{ display: 'flex', gap: '0.75rem', background: 'rgba(255, 255, 255, 0.1)', padding: '6px', borderRadius: '50px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <input type="email" placeholder="Email address" style={{ flex: 1, padding: '12px 24px', borderRadius: '40px', border: 'none', background: 'white', color: 'black', fontSize: '0.95rem', fontWeight: 600, outline: 'none' }} />
                <button className="hide-mobile" style={{ padding: '12px 32px', borderRadius: '40px', border: 'none', background: 'var(--text-main)', color: 'white', fontWeight: 800, cursor: 'pointer', fontSize: '0.9rem', transition: 'all 0.2s' }}>Join</button>
             </div>
             {/* Mobile only button for stacking */}
             <button className="show-mobile" style={{ width: '100%', marginTop: '1rem', padding: '16px', borderRadius: '40px', border: 'none', background: 'var(--text-main)', color: 'white', fontWeight: 800, fontSize: '0.95rem' }}>Join now</button>
          </div>
       </div>

       <style>{`
          @media (max-width: 768px) {
            .newsletter-form > div { background: none !important; border: none !important; padding: 0 !important; backdrop-filter: none !important; }
            .newsletter-form input { border: 1px solid rgba(255,255,255,0.3) !important; background: rgba(255,255,255,0.9) !important; width: 100%; box-shadow: var(--shadow-md); }
          }
       `}</style>
    </section>
  );
}
