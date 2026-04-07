'use client';

import { SliderSkeleton } from './components/home/Skeleton';

export default function Loading() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* 🚀 HERO SKELETON */}
      <div style={{ 
        height: 'clamp(500px, 80vh, 800px)', 
        backgroundColor: '#f1f5f9', 
        width: '100%', 
        marginBottom: '60px', 
        borderBottom: '1px solid var(--border-light)',
        animation: 'skeleton-pulse 1.5s infinite ease-in-out' 
      }}></div>
      
      {/* 5 Discovery Slider Skeletons for High-Impact Hydration */}
      <SliderSkeleton count={4} />
      <SliderSkeleton count={4} />
      <SliderSkeleton count={4} />
      <SliderSkeleton count={4} />
      <SliderSkeleton count={4} />

      <style>{`
        @keyframes skeleton-pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </main>
  );
}
