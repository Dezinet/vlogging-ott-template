export default function Categories() {
  const cats = [
    { name: 'Travel', icon: '🎒', color: '#6366f1' },
    { name: 'Tech', icon: '💻', color: '#a855f7' },
    { name: 'Food', icon: '🍜', color: '#f59e0b' },
    { name: 'Lifestyle', icon: '🎥', color: '#ec4899' },
  ];

  return (
    <section style={{ padding: '60px 4rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        {cats.map(c => (
           <div key={c.name} className="glass glass-hover" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{c.icon}</div>
              <h4 style={{ fontWeight: 700, fontSize: '1.25rem' }}>{c.name}</h4>
           </div>
        ))}
      </div>
    </section>
  );
}
