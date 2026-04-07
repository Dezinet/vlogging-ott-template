export default function MerchDrop() {
  const products = [
    { name: 'VLOGVERSE Signature Hoodie', price: '$85.00', thumb: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7', tag: 'LIMITED' },
    { name: 'Creator Focus Hat', price: '$40.00', thumb: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f', tag: 'NEW' },
  ];

  return (
    <section style={{ padding: '160px 4rem', backgroundColor: 'white' }}>
      <div style={{ display: 'flex', gap: '5rem', maxWidth: '1400px', margin: '0 auto', alignItems: 'center' }}>
         <div style={{ flex: 1 }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 800, letterSpacing: '0.4rem', display: 'block', marginBottom: '2rem' }}>SIGNATURE DROPS</span>
            <h2 style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 0.95, marginBottom: '3rem', color: 'var(--text-main)', letterSpacing: '-0.04em' }}>
               Wear the <br/> <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Vision.</span>
            </h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '4rem', fontWeight: 500, maxWidth: '480px' }}>
               High-quality essentials designed for creators. Built for the world, tailored for the journey.
            </p>
            <button className="btn-secondary" style={{ padding: '18px 48px', fontSize: '1.1rem', borderRadius: '40px' }}>Full Collection →</button>
         </div>

         <div style={{ display: 'flex', gap: '3rem', flex: 1.5 }}>
            {products.map(p => (
               <div key={p.name} className="glass thumbnail-2xl" style={{ 
                 flex: 1, 
                 padding: '2rem', 
                 display: 'flex', 
                 flexDirection: 'column', 
                 gap: '2rem',
                 position: 'relative',
                 overflow: 'hidden',
                 transition: 'transform 0.4s ease'
               }}>
                  <div style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'var(--text-main)', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800 }}>{p.tag}</div>
                  <img src={p.thumb} alt={p.name} style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
                  <div>
                     <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>{p.name}</h4>
                     <p style={{ fontSize: '1rem', color: 'var(--accent-primary)', fontWeight: 800, marginTop: '0.5rem' }}>{p.price}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
}
