'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface HomeImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function HomeImage({ src, alt, className, style }: HomeImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100%', 
      backgroundColor: '#f1f5f9',
      overflow: 'hidden',
      ...style 
    }} className={className}>
      
      {/* Shimmer Skeleton - Disappears only when image is actually rendered */}
      {!loaded && (
        <div className="shimmer-wrapper" style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 1,
          background: 'linear-gradient(90deg, #f1f5f9 25%, #e8edf2 50%, #f1f5f9 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite'
        }}></div>
      )}
      
      <Image
        src={src}
        alt={alt}
        fill
        onLoad={() => setLoaded(true)}
        className="thumb-image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ 
          objectFit: 'cover',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease-out',
          zIndex: 2
        }}
      />

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
