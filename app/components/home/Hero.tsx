'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Syncing with Real video.json IDs
const SLIDES = [
  { id: 'v_ser_01_1', title: 'Across the Sahara', category: 'EPISODE 01', hook: 'I crossed the Sahara alone with no gear or crew. This is how it went.', img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35' },
  { id: 'v_ser_02_1', title: 'The Modern Job Escape', category: 'TECH ORIGINALS', hook: 'I quit my job to make videos full-time. Here is my setup and what I plan to do.', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643' },
  { id: 'v_ser_03_1', title: 'Cooking on Lava: Iceland', category: 'FOOD ARCHIVE', hook: 'I traveled to find special recipes in nature. Here are the secrets I discovered.', img: 'https://images.unsplash.com/photo-1518005020951-ecc8a8ad66b1' },
  { id: 'v_ser_04_1', title: 'Solo Survival: Nordic', category: 'SURVIVAL SERIES', hook: 'I spent 24 hours in a very cold forest. It was a hard test for me.', img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5' }
];

export default function Hero({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current]!;

  const ProgressDots = ({ className }: { className?: string }) => (
    <div className={className} style={{ display: 'flex', gap: '0.8rem', padding: '12px 20px', borderRadius: '50px', background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', width: 'fit-content' }}>
      {SLIDES.map((_, i) => (
        <div key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? '32px' : '12px', height: '4px', background: i === current ? 'var(--accent-primary)' : 'rgba(0,0,0,0.1)', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.3s' }}></div>
      ))}
    </div>
  );

  return (
    <section className="hero-container">
      {/* 🧭 NAVIGATION BUTTONS */}
      <button onClick={handlePrev} className="glass glass-hover hide-mobile" style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', cursor: 'pointer', zIndex: 100, background: 'rgba(255,255,255,0.6)' }}>←</button>
      <button onClick={handleNext} className="glass glass-hover hide-mobile" style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', cursor: 'pointer', zIndex: 100, background: 'rgba(255,255,255,0.6)' }}>→</button>

      {/* Immersive Slide Backgrounds */}
      {SLIDES.map((s, i) => (
        <div key={s.id} className="hero-bg" style={{
          zIndex: i === current ? 5 : 1,
          opacity: i === current ? 1 : 0,
          transform: `scale(${i === current ? 1 : 1.05})`
        }}>
          <Image
            src={s.img}
            alt={s.title}
            fill
            style={{ objectFit: 'cover' }}
            priority={i === 0}
          />
          <div className="hero-mask"></div>
        </div>
      ))}

      {/* Hero Content Block */}
      <div className="hero-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.2rem', letterSpacing: '0.4em', fontSize: '0.65rem', fontWeight: 800, color: 'var(--accent-primary)', opacity: 0.8 }}>
          <div className="hide-mobile" style={{ width: '24px', height: '1px', backgroundColor: 'var(--accent-primary)' }}></div>
          {slide.category}
        </div>

        <h1 className="hero-h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.0, marginBottom: '1.2rem', color: 'var(--text-main)', letterSpacing: '-0.04em' }}>
          {slide.title}
        </h1>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', marginBottom: '2.5rem', maxWidth: '440px', lineHeight: 1.5, fontWeight: 500 }}>
          {slide.hook}
        </p>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'inherit', marginBottom: '2.5rem' }}>
          <Link href={`/videos/${slide.id}`} className="btn-primary" style={{ padding: '16px 40px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            ▶ Watch Now
          </Link>
          <Link href="/series" className="btn-secondary" style={{ padding: '16px 40px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Stories
          </Link>
        </div>

        {/* 🚀 PROGRESS DOTS - DESKTOP ALIGNMENT */}
        <ProgressDots className="hide-mobile" />
      </div>

      {/* 🚀 PROGRESS DOTS - MOBILE ALIGNMENT */}
      <div className="show-mobile" style={{ position: 'absolute', bottom: '60px', left: '50%', transform: 'translateX(-50%)', zIndex: 100 }}>
        <ProgressDots />
      </div>
    </section>
  );
}
