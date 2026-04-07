'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
      setQuery('');
    }
  };

  return (
    <>
      <nav className="glass" style={{
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--section-px)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none'
      }}>
        {/* LOGO */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: 'clamp(1rem, 4vw, 1.4rem)', fontWeight: 900, letterSpacing: '-0.06em', color: 'var(--text-main)', textTransform: 'uppercase' }}>
            DEZINET<span style={{ color: 'var(--accent-primary)' }}>VERSE</span>
          </Link>
        </div>

        {/* 🚀 UNIFIED NAVIGATION TRIGGER */}
        <div 
           onClick={() => setIsOpen(!isOpen)}
           style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', zIndex: 1100 }}
        >
           {/* Only show 'EXPLORE' on Desktop */}
           <span className="hide-mobile" style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--text-main)', opacity: 0.8 }}>MENU</span>
           <div style={{ fontSize: '1.8rem', color: 'var(--text-main)', lineHeight: 1 }}>{isOpen ? '✕' : '☰'}</div>
        </div>
      </nav>

      {/* 🚀 PREMIUM FULL-SCREEN DISCOVERY DASHBOARD */}
      <div className="no-scrollbar" style={{ 
        position: 'fixed', 
        inset: 0, 
        backgroundColor: 'rgba(255,255,255,0.98)', 
        backdropFilter: 'blur(30px)',
        zIndex: 900, 
        transform: isOpen ? 'translateY(0)' : 'translateY(-100%)', 
        opacity: isOpen ? 1 : 0,
        transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
        display: 'flex',
        flexDirection: 'column',
        padding: '100px var(--section-px) 40px',
        overflowY: 'auto',
      }}>
         
         {/* 🔎 SEARCH (Inside Hamburger) */}
         <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 900, letterSpacing: '0.4rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block', textAlign: 'center' }}>Find a video</span>
            <div style={{ position: 'relative' }}>
               <form onSubmit={handleSearch}>
                 <input 
                   type="text" 
                   placeholder="Search here..." 
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                   autoFocus={isOpen}
                   style={{
                     width: '100%',
                     background: 'transparent',
                     border: 'none',
                     borderBottom: '2px solid var(--text-main)',
                     padding: '16px 10px',
                     fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)',
                     fontWeight: 900,
                     color: 'var(--text-main)',
                     outline: 'none',
                     letterSpacing: '-0.04em'
                   }}
                 />
               </form>
               <div 
                 onClick={() => handleSearch()}
                 style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '2rem', opacity: 0.8, cursor: 'pointer' }}
               >
                 →
               </div>
            </div>
         </div>

         {/* MAIN NAVIGATION */}
         <div className="grid-3" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', gap: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               <span style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--accent-primary)', letterSpacing: '0.2rem' }}>DISCOVER</span>
               <Link onClick={() => setIsOpen(false)} href="/videos" style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em' }} className="glass-hover">All Videos</Link>
               <Link onClick={() => setIsOpen(false)} href="/about" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dim)' }}>About</Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               <span style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--accent-primary)', letterSpacing: '0.2rem' }}>STORIES</span>
               <Link onClick={() => setIsOpen(false)} href="/series" style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em' }} className="glass-hover">Series</Link>
               <Link onClick={() => setIsOpen(false)} href="/about" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dim)' }}>Gear</Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               <span style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--accent-primary)', letterSpacing: '0.2rem' }}>MEMBERSHIP</span>
               <Link onClick={() => setIsOpen(false)} href="/membership" style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em' }} className="glass-hover">Join us 🔒</Link>
               <div style={{ display: 'flex', gap: '20px', marginTop: '1rem' }}>
                  <Link onClick={() => setIsOpen(false)} href="/login" style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)' }}>Log in</Link>
                  <Link onClick={() => setIsOpen(false)} href="/signup" style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--accent-primary)' }}>Sign up</Link>
               </div>
            </div>
         </div>

         <div style={{ marginTop: 'auto', paddingTop: '40px', textAlign: 'center', opacity: 0.4, fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.3rem' }}>
            DEZINETVERSE © 2026 / REAL STORIES.
         </div>
      </div>
    </>
  );
}
