export default function ContinueWatching() {
  const vlogs = [
    { title: "Building a Platform in 24h", progress: 65, thumb: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" },
    { title: "Solo in Tokyo: Night Edition", progress: 20, thumb: "https://images.unsplash.com/photo-1540959733332-e94e270b4d48" },
  ];

  return (
    <section style={{ padding: '60px 4rem 20px' }}>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Pick up where you left</h2>
      <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '20px' }}>
        {vlogs.map((v, i) => (
          <div key={i} className="glass" style={{ minWidth: '340px', padding: '1rem', borderRadius: 'var(--radius-lg)', cursor: 'pointer' }}>
             <div style={{ 
               height: '180px', 
               borderRadius: 'var(--radius-md)', 
               backgroundImage: `url(${v.thumb})`,
               backgroundSize: 'cover',
               marginBottom: '1rem', 
               position: 'relative',
               overflow: 'hidden'
             }}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '4px', background: 'rgba(255,255,255,0.2)' }}></div>
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  width: `${v.progress}%`, 
                  height: '4px', 
                  background: 'var(--accent-primary)', 
                  borderRadius: '4px',
                  boxShadow: '0 0 10px var(--accent-primary)'
                }}></div>
             </div>
             <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{v.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
