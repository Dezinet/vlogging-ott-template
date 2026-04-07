export default function GearSection() {
  const items = [
    { name: 'Leica Q3', type: 'Camera', icon: '📷', price: '$5,995' },
    { name: 'Rode PodMic', type: 'Microphone', icon: '🎤', price: '$99' },
    { name: 'MacBook Pro M3', type: 'Laptop', icon: '💻', price: '$2,499' },
  ];

  return (
    <section style={{ padding: '60px 4rem' }}>
      <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dim)', marginBottom: '2.5rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Creator Ecosystem Tools</h3>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {items.map(g => (
           <div key={g.name} className="glass glass-hover" style={{ padding: '1.5rem 2rem', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '1.5rem', minWidth: '280px', transition: 'all 0.3s ease' }}>
              <span style={{ fontSize: '2rem' }}>{g.icon}</span>
              <div>
                 <h5 style={{ fontSize: '1rem', fontWeight: 800 }}>{g.name}</h5>
                 <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{g.type} • {g.price}</p>
              </div>
           </div>
        ))}
      </div>
    </section>
  );
}
