import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="auth-container">
      <div className="glass form-card">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em', marginBottom: '0.8rem' }}>Log in</h1>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', fontWeight: 600 }}>Log in to your account here.</p>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="input-field" placeholder="Your email" required />
          </div>
          
          <div className="input-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label htmlFor="password">Password</label>
              <Link href="#" style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 800 }}>Forgot password?</Link>
            </div>
            <input type="password" id="password" className="input-field" placeholder="••••••••" required />
          </div>

          <button type="submit" className="btn-primary" style={{ marginTop: '1rem', padding: '16px' }}>Log in</button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-dim)', marginTop: '2.5rem', fontWeight: 600 }}>
          Don't have an account? <Link href="/signup" style={{ color: 'var(--accent-primary)', fontWeight: 800 }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}
