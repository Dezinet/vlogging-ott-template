'use client';

export default function ContactPage() {
  return (
    <div className="auth-container" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="form-card glass" style={{ maxWidth: '600px', padding: '4rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em', marginBottom: '1.2rem' }}>Contact me</h1>
        <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '3rem' }}>
          Do you have a question or a story to share? Send me a message.
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="John Doe" className="input-field" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="john@example.com" className="input-field" />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea 
              placeholder="Write your message here" 
              className="input-field" 
              style={{ minHeight: '150px', borderRadius: '24px', resize: 'none', padding: '20px' }}
            />
          </div>

          <button className="btn-primary" style={{ padding: '18px 0', borderRadius: '50px', width: '100%', fontSize: '1rem' }}>Send →</button>
        </form>

        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'center' }}>
          <div className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', border: 'none' }}>
             <span style={{ fontSize: '0.6rem', fontWeight: 900, color: 'var(--accent-primary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>FOR BUSINESS</span>
             <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>collab@creator.com</p>
          </div>
          <div className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', border: 'none' }}>
             <span style={{ fontSize: '0.6rem', fontWeight: 900, color: 'var(--accent-primary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>FOR HELP</span>
             <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>help@creator.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
