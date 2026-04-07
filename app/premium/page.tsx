const EXCLUSIVE_VIDEOS = [
  { id: 'ex1', title: 'Deep Dive: Behind the Scenes of The Future AI Suite', creator: 'Tech Visionary', timeLimit: 'Exclusive access', thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0' },
  { id: 'ex2', title: 'Mountain Peak Meditation - 4K Premium Experience', creator: 'Extreme Explorer', timeLimit: 'Exclusive access', thumbnail: 'https://images.unsplash.com/photo-1519681393784-d120267933ba' },
];

export default function PremiumContent() {
  return (
    <div style={{ padding: '3rem 4rem' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(to right, #ffd700, #ffcc00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Members Only Content
        </h1>
        <p style={{ color: 'var(--text-dim)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          Exclusive behind-the-scenes vlogs and premium 4K experiences reserved for our members.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
        {EXCLUSIVE_VIDEOS.map((v) => (
          <div key={v.id} className="glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255, 215, 0, 0.2)' }}>
            <div style={{ 
              height: '300px', 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${v.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div className="glass" style={{ padding: '16px 24px', borderRadius: '50px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontSize: '1.2rem' }}>🔒</span>
                <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Unlock Premium</span>
              </div>
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', color: '#ffcc00', fontWeight: 800, textTransform: 'uppercase' }}>Exclusive</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{v.creator}</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>{v.title}</h3>
              <button className="btn-secondary" style={{ width: '100%', borderColor: '#ffcc00', color: '#ffcc00', fontWeight: 700 }}>
                Join Today to Watch
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
