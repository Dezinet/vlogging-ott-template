'use client';

export default function SponsoredProducts() {
  const products = [
    { id: 'sp1', name: 'Sony ZV-E10 Camera', brand: 'Sony', price: '$699', tag: 'I USE THIS', thumb: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32', link: 'https://www.amazon.com/s?k=sony+zv-e10' },
    { id: 'sp2', name: 'DJI Osmo Pocket 3', brand: 'DJI', price: '$519', tag: 'FOR TRAVEL', thumb: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f', link: 'https://www.amazon.com/s?k=dji+osmo+pocket+3' },
    { id: 'sp3', name: 'Peak Design Backpack', brand: 'Peak Design', price: '$299', tag: 'EVERY DAY', thumb: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62', link: 'https://www.peakdesign.com' },
    { id: 'sp4', name: 'Rode Wireless GO II', brand: 'Rode', price: '$299', tag: 'FOR AUDIO', thumb: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26', link: 'https://www.amazon.com/s?k=rode+wireless+go+ii' },
    { id: 'sp5', name: 'GoPro Hero 12 Black', brand: 'GoPro', price: '$399', tag: 'FOR ACTION', thumb: 'https://images.unsplash.com/photo-1530989528232-7d4c4ef4f8cb', link: 'https://www.amazon.com/s?k=gopro+hero+12' },
    { id: 'sp6', name: 'MacBook Pro M3', brand: 'Apple', price: '$1999', tag: 'FOR EDITING', thumb: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8', link: 'https://www.apple.com/macbook-pro/' },
    { id: 'sp7', name: 'Manfrotto Travel Tripod', brand: 'Manfrotto', price: '$149', tag: 'FOR STEADY VIDEO', thumb: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd', link: 'https://www.amazon.com/s?k=manfrotto+tripod' },
    { id: 'sp8', name: 'Insta360 X4', brand: 'Insta360', price: '$499', tag: '360 CAMERA', thumb: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc', link: 'https://www.amazon.com/s?k=insta360+x4' },
    { id: 'sp9', name: 'LG UltraWide Monitor', brand: 'LG', price: '$599', tag: 'SCREEN', thumb: 'https://images.unsplash.com/photo-1527443224154-c4a573d5e359', link: 'https://www.amazon.com/s?k=lg+ultrawide+monitor' },
    { id: 'sp10', name: 'DJI Mini 4 Pro Drone', brand: 'DJI', price: '$759', tag: 'DRONE', thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', link: 'https://www.amazon.com/s?k=dji+mini+4+pro' },
    { id: 'sp11', name: 'Aputure 600D Light', brand: 'Aputure', price: '$1399', tag: 'LIGHT', thumb: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04', link: 'https://www.amazon.com/s?k=aputure+600d' },
    { id: 'sp12', name: 'Samsung T9 SSD 4TB', brand: 'Samsung', price: '$299', tag: 'FOR STORAGE', thumb: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea', link: 'https://www.amazon.com/s?k=samsung+t9+ssd' },
  ];

  const doubled = [...products, ...products];

  return (
    <section className="responsive-section" style={{ backgroundColor: 'var(--bg-deep)', overflow: 'hidden', paddingBottom: '60px' }}>
      <div style={{ marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 800, letterSpacing: '0.3rem', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem' }}>★ PRODUCTS</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em' }}>My Gear</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '1rem', fontWeight: 500 }}>The tools I use to make my videos.</p>
      </div>

      <div style={{ position: 'relative', marginTop: '2rem' }}>
        <div className="hide-mobile" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, var(--bg-deep), transparent)', zIndex: 10, pointerEvents: 'none' }}></div>
        <div className="hide-mobile" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, var(--bg-deep), transparent)', zIndex: 10, pointerEvents: 'none' }}></div>

        <div className="ticker-track" style={{
          display: 'flex',
          gap: 'var(--grid-gap)',
          animation: 'scroll-x 60s linear infinite',
          width: 'max-content'
        }}>
          {doubled.map((p, i) => (
            <a
              key={`${p.id}-${i}`}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '280px', flexShrink: 0, textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', cursor: 'pointer' }}
            >
              <div style={{ position: 'relative', height: '200px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', backgroundColor: 'white' }} className="glass-hover">
                <img src={p.thumb} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '0.8rem', left: '0.8rem', background: 'rgba(0,0,0,0.75)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.08em' }}>{p.tag}</span>
              </div>
              <div style={{ padding: '0 0.5rem' }}>
                <span style={{ fontSize: '0.6rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.15em', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase' }}>{p.brand}</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '0.5rem', lineHeight: 1.2, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{p.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--accent-primary)' }}>{p.price}</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--accent-primary)' }}>Buy here →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <p style={{ textAlign: 'center', marginTop: '2.5rem', fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500 }}>
        * Some links help me earn a little money if you buy something. It doesn't cost you extra.
      </p>

      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
