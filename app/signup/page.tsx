import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="auth-container">
      <div className="glass form-card">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em', marginBottom: '0.8rem' }}>Sign up</h1>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', fontWeight: 600 }}>Create your account here.</p>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div className="input-group" style={{ flex: 1, minWidth: '160px' }}>
              <label htmlFor="first_name">First name</label>
              <input type="text" id="first_name" className="input-field" placeholder="Your first name" required />
            </div>
            <div className="input-group" style={{ flex: 1, minWidth: '160px' }}>
              <label htmlFor="last_name">Last name</label>
              <input type="text" id="last_name" className="input-field" placeholder="Your last name" required />
            </div>
          </div>
          
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="input-field" placeholder="Your email" required />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="input-field" placeholder="At least 8 characters" required />
          </div>

          <button type="submit" className="btn-primary" style={{ marginTop: '1rem', padding: '16px' }}>Create account</button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-dim)', marginTop: '2.5rem', fontWeight: 600 }}>
          Already have an account? <Link href="/login" style={{ color: 'var(--accent-primary)', fontWeight: 800 }}>Log in</Link>
        </p>
      </div>
    </div>
  );
}
