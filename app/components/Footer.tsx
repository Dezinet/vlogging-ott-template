import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ 
      padding: '80px var(--section-px) 40px', 
      backgroundColor: '#0f172a', // Solid Dark Navy for contrast
      color: 'white',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="grid-4" style={{ gap: '4rem', marginBottom: '80px' }}>
        
        {/* BRAND & MISSION */}
        <div style={{ flex: 2 }}>
          <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 900, color: 'white', textDecoration: 'none', display: 'block', marginBottom: '1.5rem' }}>
            DEZINET<span style={{ color: 'var(--accent-primary)' }}>VERSE</span>.
          </Link>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', lineHeight: 1.6, fontWeight: 500 }}>
            We show the world as it really is. We film beautiful places without any filters or scripts.
          </p>
        </div>

        {/* EXPLORE */}
        <div>
          <h4 style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--accent-primary)', letterSpacing: '0.2em', marginBottom: '2rem', textTransform: 'uppercase' }}>Videos</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <li><Link href="/videos" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Watch Now</Link></li>
            <li><Link href="/series" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Series</Link></li>
            <li><Link href="/membership" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Join us</Link></li>
          </ul>
        </div>

        {/* SUPPORT / SOCIAL */}
        <div>
          <h4 style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--accent-primary)', letterSpacing: '0.2em', marginBottom: '2rem', textTransform: 'uppercase' }}>More Info</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <li><Link href="/about" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>About Us</Link></li>
            <li><Link href="/gear" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Gear I Use</Link></li>
            <li><Link href="/contact" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Contact</Link></li>
            <li><Link href="/terms" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Legal</Link></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--accent-primary)', letterSpacing: '0.2em', marginBottom: '2rem', textTransform: 'uppercase' }}>Follow Me</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Instagram</a></li>
            <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>YouTube</a></li>
            <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Twitter / X</a></li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div style={{ 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
        paddingTop: '40px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.85rem', fontWeight: 700 }}>© 2026 Vlogging/OTT.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
           <Link href="/terms" style={{ color: 'rgba(255, 255, 255, 0.4)', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 800 }}>Privacy</Link>
           <Link href="/terms" style={{ color: 'rgba(255, 255, 255, 0.4)', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 800 }}>Terms</Link>
        </div>
      </div>
    </footer>
  );
}
