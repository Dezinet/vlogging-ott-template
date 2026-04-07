'use client';

import HomeImage from '../components/HomeImage';

export default function GearPage() {
  const GEAR = [
    { id: 1, name: 'The Body', model: 'Sony A7S III', use: 'The cinematic soul of the Vlogging/OTT. 10-bit 4:2:2 recording for unmatched dynamic range.', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32' },
    { id: 2, name: 'The Eyes', model: '24-70mm GM II', use: 'The only lens we need. Fast, light, and sharp enough for the driest deserts.', img: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35' },
    { id: 3, name: 'The Wings', model: 'DJI Mavic 3 Pro', use: 'Triple camera system for impossible aerial perspectives.', img: 'https://images.unsplash.com/photo-1473960104354-4ca988358911' },
    { id: 4, name: 'The Audio', model: 'Rode NTG5', use: 'Capturing the silence of the Sahara and the roar of the city in high-fidelity.', img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc' },
    { id: 5, name: 'The Rugged', model: 'GoPro Hero 12', use: 'Underwater casing and crash-resistant for the "Danger" category.', img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e' },
    { id: 6, name: 'The Storage', model: 'Sandisk Extreme V90', use: 'The library is built on these. Zero dropped frames, zero data loss.', img: 'https://images.unsplash.com/photo-1544333323-537a39626359' }
  ];

  return (
    <div className="responsive-section" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', display: 'block', marginBottom: '1.2rem' }}>The Logistics</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '2.5rem' }}>
          The gear we <br/> <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>use to film.</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-dim)', lineHeight: 1.6, fontWeight: 500 }}>
          The Vlogging/OTT is not just about the destination. It's about the tools that capture the authentic, raw, and unfiltered reality of our world. Here is our official vlogging kit.
        </p>
      </div>

      <div className="grid-3" style={{ gap: 'var(--grid-gap)' }}>
        {GEAR.map(g => (
          <div key={g.id} className="glass glass-hover" style={{ padding: '0', borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
             <div style={{ height: '240px', width: '100%', overflow: 'hidden' }}>
                <HomeImage src={g.img} alt={g.name} />
             </div>
             <div style={{ padding: '2rem' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--accent-primary)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem', display: 'block' }}>{g.name}</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '0.8rem' }}>{g.model}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', fontWeight: 500, lineHeight: 1.5 }}>{g.use}</p>
             </div>
          </div>
        ))}
      </div>

      <div className="glass" style={{ margin: '80px 0', padding: '4rem', borderRadius: 'var(--radius-2xl)', textAlign: 'center', backgroundColor: 'var(--bg-secondary)', border: 'none' }}>
         <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Questions about the setup?</h2>
         <p style={{ fontSize: '1rem', color: 'var(--text-dim)', marginBottom: '2.5rem', fontWeight: 500 }}>We're always updating the kit. Ask us anything.</p>
         <button className="btn-primary" style={{ padding: '14px 32px', borderRadius: '40px' }}>Contact Tech Team</button>
      </div>
    </div>
  );
}
