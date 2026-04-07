'use client';

import Link from 'next/link';

export default function AboutPage() {
  const GEAR = [
    { id: 1, name: 'Main Camera', model: 'Sony A7S III', use: 'Best for videos', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32' },
    { id: 2, name: 'The Drone', model: 'DJI Mavic 3 Pro', use: 'For shots from above', img: 'https://images.unsplash.com/photo-1473960104354-4ca988358911' },
    { id: 3, name: 'Backup Body', model: 'Sony FX3', use: 'For fast action', img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e' },
    { id: 4, name: 'Lenses', model: '24-70mm GM II', use: 'Good for everything', img: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35' }
  ];

  return (
    <div className="responsive-section" style={{ paddingTop: '120px' }}>
      {/* 🚀 OUR STORY */}
      <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', display: 'block', marginBottom: '1.2rem' }}>About us</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '2.5rem' }}>
          Videos about <br/> <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>real life.</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-dim)', lineHeight: 1.6, fontWeight: 500, marginBottom: '2rem' }}>
          DezinetVerse is a small group of friends who love to travel and take videos. We started with one old camera and a dream to see the world. Today, we share our journeys with many people.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', lineHeight: 1.6, fontWeight: 500 }}>
          We don't use scripts or fake drama. It is just us, our cameras, and the most beautiful places on Earth. We want to show you that the world is big, exciting, and waiting for you.
        </p>
      </div>

      {/* 🛠️ THE GEAR REGISTRY */}
      <div style={{ marginBottom: '80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em' }}>My Gear</h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '1rem', fontWeight: 500 }}>The things I use to make my videos.</p>
          </div>
        </div>

        <div className="grid-4" style={{ gap: 'var(--grid-gap)' }}>
          {GEAR.map(g => (
            <div key={g.id} className="glass glass-hover" style={{ padding: '0', borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
               <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                  <img src={g.img} alt={g.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
               <div style={{ padding: '1.5rem' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--accent-primary)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>{g.name}</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>{g.model}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 500 }}>{g.use}</p>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🤝 JOIN US */}
      <div className="glass" style={{ padding: '4rem', borderRadius: 'var(--radius-2xl)', textAlign: 'center', background: 'var(--accent-gradient)', color: 'white', border: 'none' }}>
         <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Want to work with me?</h2>
         <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', opacity: 0.9, fontWeight: 500 }}>I am always looking for new stories and partners.</p>
         <Link href="/membership" className="btn-primary" style={{ background: 'white', color: 'var(--text-main)', padding: '16px 40px', borderRadius: '40px' }}>Join us</Link>
      </div>
    </div>
  );
}
