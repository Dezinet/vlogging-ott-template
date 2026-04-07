'use client';

export default function AboutCreator() {
  return (
    <section className="responsive-section" style={{ backgroundColor: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-2" style={{ maxWidth: '1200px', margin: '0 auto', alignItems: 'center' }}>
         {/* Image */}
         <div style={{ position: 'relative', width: '100%' }}>
            <div style={{
               width: '100%',
               height: 'clamp(300px, 40vh, 400px)',
               borderRadius: 'var(--radius-lg)',
               backgroundImage: 'url("https://i.pravatar.cc/800?u=kai")',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               boxShadow: 'var(--shadow-xl)',
               position: 'relative',
               zIndex: 2,
               filter: 'contrast(1.05) saturate(1.1)'
            }}></div>
            <div className="hide-mobile" style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '100%', height: '100%', border: '2px solid var(--border-light)', borderRadius: 'var(--radius-lg)', zIndex: 1 }}></div>
         </div>

         {/* Content */}
         <div style={{ padding: '20px 0' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4rem', display: 'block', marginBottom: '1.2rem' }}>About Us</span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.0, color: 'var(--text-main)', letterSpacing: '-0.04em' }}>Just Real Stories.</h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2.5rem', fontWeight: 500 }}>
               We spend our time filming what we see around the world. Everything is real and we don't use any scripts.
            </p>

            <div className="grid-3" style={{ borderLeft: '1px solid var(--border-light)', paddingLeft: '2rem', gap: '2rem' }}>
                <div>
                   <h4 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1 }}>2.4M</h4>
                   <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 800, marginTop: '0.4rem' }}>FOLLOWERS</p>
                </div>
                <div>
                   <h4 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1 }}>800+</h4>
                   <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 800, marginTop: '0.4rem' }}>VIDEOS</p>
                </div>
                <div>
                   <h4 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1 }}>150M</h4>
                   <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 800, marginTop: '0.4rem' }}>VIEWS</p>
                </div>
            </div>
         </div>
      </div>
    </section>
  );
}
