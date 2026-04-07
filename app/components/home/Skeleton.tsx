'use client';

export function VideoCardSkeleton() {
  return (
    <div style={{ 
      minWidth: '280px', 
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      scrollSnapAlign: 'start'
    }}>
      {/* Thumbnail Skeleton */}
      <div style={{ 
        height: '200px', 
        borderRadius: 'var(--radius-lg)', 
        backgroundColor: '#f1f5f9',
        animation: 'skeleton-pulse 1.5s infinite ease-in-out'
      }}></div>
      
      {/* Info Skeleton */}
      <div style={{ padding: '0 0.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <div style={{ width: '40px', height: '10px', backgroundColor: '#f1f5f9', borderRadius: '4px', animation: 'skeleton-pulse 1.5s infinite ease-in-out' }}></div>
        <div style={{ width: '100%', height: '18px', backgroundColor: '#f1f5f9', borderRadius: '4px', animation: 'skeleton-pulse 1.5s infinite ease-in-out' }}></div>
        <div style={{ width: '60%', height: '14px', backgroundColor: '#f1f5f9', borderRadius: '4px', animation: 'skeleton-pulse 1.5s infinite ease-in-out' }}></div>
      </div>
    </div>
  );
}

export function SliderSkeleton({ count = 4 }: { count?: number }) {
  return (
    <section className="responsive-section" style={{ backgroundColor: 'white' }}>
      {/* Header Skeleton */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div style={{ width: 'clamp(150px, 40vw, 250px)', height: '32px', backgroundColor: '#f1f5f9', borderRadius: '8px', animation: 'skeleton-pulse 1.5s infinite ease-in-out' }}></div>
          <div className="hide-mobile" style={{ width: '150px', height: '16px', backgroundColor: '#f1f5f9', borderRadius: '4px', animation: 'skeleton-pulse 1.5s infinite ease-in-out' }}></div>
        </div>
        <div style={{ width: '80px', height: '16px', backgroundColor: '#f1f5f9', borderRadius: '4px', animation: 'skeleton-pulse 1.5s infinite ease-in-out' }}></div>
      </div>

      {/* Cards Scroll Skeleton */}
      <div style={{ display: 'flex', gap: 'var(--grid-gap)', overflow: 'hidden' }}>
        {Array.from({ length: count }).map((_, i) => <VideoCardSkeleton key={i} />)}
      </div>

      <style>{`
        @keyframes skeleton-pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
