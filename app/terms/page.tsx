'use client';

export default function TermsPage() {
  return (
    <div className="responsive-section" style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', display: 'block', marginBottom: '1.2rem' }}>OUR RULES</span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '3rem' }}>
          Terms and Privacy
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
           <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>01. Real Content</h2>
              <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, fontWeight: 500 }}>
                All our videos are real and original. Please do not share or copy our videos without asking us first.
              </p>
           </section>

           <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>02. Membership Rules</h2>
              <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, fontWeight: 500 }}>
                Members can watch special videos. These videos are only for you to watch. If you share them with others, we will have to remove your account.
              </p>
           </section>

           <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>03. Your Privacy</h2>
              <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, fontWeight: 500 }}>
                We do not track you on other websites. We only save the information we need for your account and to remember which videos you have watched.
              </p>
           </section>

           <section style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', background: 'var(--bg-secondary)' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 700 }}>
                 Last Updated: April 2026 / Version 1.2
              </p>
           </section>
        </div>
      </div>
    </div>
  );
}
