'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';

// 🚀 HIGH-VISIBILITY PREMIUM ICONS
const Back10 = React.memo(() => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C9.64687 3 7.50294 3.90483 5.928 5.394M2.5 5V9H6.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="50%" y="62%" textAnchor="middle" fontSize="6px" fontWeight="900" fill="white" style={{ fontFamily: 'Inter, sans-serif' }}>10</text>
  </svg>
));

const Forward10 = React.memo(() => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.3531 3 16.4971 3.90483 18.072 5.394M21.5 5V9H17.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="50%" y="62%" textAnchor="middle" fontSize="6px" fontWeight="900" fill="white" style={{ fontFamily: 'Inter, sans-serif' }}>10</text>
  </svg>
));

const CustomPlayer = ({ src, poster }: { src: string; poster?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [seekFeedback, setSeekFeedback] = useState<{ type: string; val: string } | null>(null);
  
  // 🎟️ AD SYSTEM
  const adUrl = "https://cdn.dezinet.com/dummyvideos/advideo.mp4";
  const [isAdPlaying, setIsAdPlaying] = useState(true);
  const [adTimeLeft, setAdTimeLeft] = useState(5);
  const [canSkipAd, setCanSkipAd] = useState(false);

  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [quality, setQuality] = useState('1080p');

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout|null>(null);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) { videoRef.current.pause(); setIsPlaying(false); }
      else { 
        videoRef.current.play().catch(() => {});
        setIsPlaying(true); 
      }
    }
  }, [isPlaying]);

  const jump = useCallback((offset: number) => {
    if (videoRef.current && !isAdPlaying && isFinite(videoRef.current.duration)) {
      videoRef.current.currentTime += offset;
      setSeekFeedback({ type: offset > 0 ? 'forward' : 'backward', val: `${Math.abs(offset)}s` });
      setTimeout(() => setSeekFeedback(null), 600);
    }
  }, [isAdPlaying]);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => console.error(err));
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
      if (isAdPlaying) return;

      switch(e.key.toLowerCase()) {
        case ' ':
        case 'k': e.preventDefault(); togglePlay(); break;
        case 'f': e.preventDefault(); toggleFullscreen(); break;
        case 'm': e.preventDefault(); toggleMute(); break;
        case 'arrowright':
        case 'l': e.preventDefault(); jump(10); break;
        case 'arrowleft':
        case 'j': e.preventDefault(); jump(-10); break;
        default:
          if (/^[0-9]$/.test(e.key)) {
            if (videoRef.current && isFinite(videoRef.current.duration)) {
              videoRef.current.currentTime = (parseInt(e.key) / 10) * videoRef.current.duration;
            }
          }
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, jump, toggleMute, toggleFullscreen, isAdPlaying]);

  useEffect(() => {
    if (isAdPlaying && isPlaying) {
      const timer = setInterval(() => {
        setAdTimeLeft(prev => { if (prev <= 1) { setCanSkipAd(true); clearInterval(timer); return 0; } return prev - 1; });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isAdPlaying, isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => { setIsPlaying(true); })
        .catch(() => { setIsPlaying(false); });
      }
    }
    const handleFsChange = () => setIsFullScreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, [src, isAdPlaying]);

  const formatTime = useCallback((t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }, []);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current && !isAdPlaying) {
      const dur = videoRef.current.duration;
      if (isFinite(dur)) {
        const val = Number(e.target.value);
        videoRef.current.currentTime = (val / 100) * dur;
        setProgress(val);
      }
    }
  };

  const formattedTime = useMemo(() => formatTime(currentTime), [currentTime, formatTime]);
  const formattedDuration = useMemo(() => formatTime(duration), [duration, formatTime]);

  return (
    <div 
      ref={containerRef}
      style={{ 
        position: 'relative', width: '100%', 
        aspectRatio: '16/9', 
        backgroundColor: '#000', borderRadius: isFullScreen ? '0' : '0', overflow: 'hidden',
        boxShadow: isFullScreen ? 'none' : '0 20px 80px rgba(0,0,0,0.5)', cursor: showControls || isAdPlaying || showSettings ? 'default' : 'none'
      }}
      onMouseMove={() => {
        setShowControls(true);
        if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
      }}
      onClick={() => { setShowSettings(false); setShowControls(true); }}
      onDoubleClick={toggleFullscreen}
    >
      <video
        ref={videoRef} src={isAdPlaying ? adUrl : src} poster={isAdPlaying ? "" : poster}
        onTimeUpdate={(e) => { 
          if (!isAdPlaying) {
            setCurrentTime(e.currentTarget.currentTime);
            const dur = e.currentTarget.duration;
            if (isFinite(dur)) setProgress((e.currentTarget.currentTime / dur) * 100);
          } 
        }}
        onLoadedMetadata={(e) => {
           const dur = e.currentTarget.duration;
           if (isFinite(dur)) setDuration(dur);
           // Force autoplay attempt
           videoRef.current?.play().catch(() => {
             if (videoRef.current) {
               videoRef.current.muted = true;
               videoRef.current.play();
             }
           });
        }}
        onEnded={() => isAdPlaying ? setIsAdPlaying(false) : setIsPlaying(false)}
        onClick={(e) => { e.stopPropagation(); togglePlay(); }}
        playsInline autoPlay
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 1 }}
      />

      {/* 🚀 SEEK FEEDBACK */}
      {seekFeedback && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200, pointerEvents: 'none' }}>
           <div className="glass" style={{ padding: '20px 40px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '15px', background: 'rgba(0,0,0,0.8)', border: 'none' }}>
              <span style={{ fontSize: '2.5rem' }}>{seekFeedback.type === 'forward' ? '▶▶' : '◀◀'}</span>
              <span style={{ fontWeight: 900, fontSize: '1.5rem', color: 'white' }}>{seekFeedback.val}</span>
           </div>
        </div>
      )}

      {/* 🎟️ AD OVERLAY */}
      {isAdPlaying && isPlaying && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 100, pointerEvents: 'none' }}>
           <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.85)', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '10px', fontWeight: 900, border: '1px solid rgba(255,255,255,0.1)', letterSpacing: '0.1em', opacity: 0.8 }}>AD</div>
           <div onClick={(e) => { e.stopPropagation(); if (canSkipAd) setIsAdPlaying(false); }} className="skip-ad-btn" style={{ 
             position: 'absolute', bottom: 'clamp(5rem, 25%, 8rem)', right: '0', background: 'rgba(0,0,0,0.9)', color: 'white', padding: '10px 20px', 
             borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px', fontSize: '12px', fontWeight: 900, cursor: canSkipAd ? 'pointer' : 'default', 
             pointerEvents: 'auto', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', minWidth: '100px', display: 'flex', justifyContent: 'flex-start'
           }}>
              {canSkipAd ? <span style={{ color: 'var(--accent-primary)' }}>SKIP AD ⮞</span> : <span>SKIP IN {adTimeLeft}s</span>}
           </div>
        </div>
      )}

      {/* SETTINGS MENU */}
      {showSettings && !isAdPlaying && (
        <div 
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute', bottom: 'clamp(4rem, 20%, 8rem)', right: '1rem', width: 'clamp(200px, 40vw, 280px)', backgroundColor: 'rgba(15,15,20,0.98)', 
            backdropFilter: 'blur(30px)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', 
            boxShadow: '0 20px 80px rgba(0,0,0,0.9)', zIndex: 200, padding: '15px 0'
          }}
        >
          <div style={{ padding: '0 20px 10px', fontSize: '0.65rem', fontWeight: 900, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em' }}>PLAYBACK SPEED</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', padding: '0 15px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            {[0.5, 1, 1.5, 2].map(s => (
              <button key={s} onClick={() => { if(videoRef.current) videoRef.current.playbackRate = s; setPlaybackSpeed(s); setShowSettings(false); }}
                style={{ background: playbackSpeed === s ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 0', fontSize: '0.75rem', fontWeight: 900, cursor: 'pointer' }}>{s}x</button>
            ))}
          </div>
        </div>
      )}

      {/* 🚀 MAIN CONTROLS OVERLAY */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: isFullScreen ? 'calc(1rem + 2vw) var(--section-px)' : '1rem',
        background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)',
        zIndex: 10, opacity: showControls && !isAdPlaying ? 1 : 0, transition: 'all 0.5s ease',
        display: 'flex', flexDirection: 'column', gap: '0.8rem', pointerEvents: isAdPlaying ? 'none' : 'auto'
      }}>
        
        {/* PROGRESS SYSTEM */}
        <div style={{ position: 'relative', width: '100%', height: '4px', display: 'flex', alignItems: 'center' }}>
          <input type="range" min="0" max="100" value={progress} onChange={handleSeek} 
            style={{ width: '100%', height: '20px', opacity: 0, position: 'absolute', zIndex: 10, cursor: isFinite(duration) ? 'pointer' : 'wait' }} />
          <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.2)', position: 'absolute', borderRadius: '10px' }}></div>
          <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'var(--accent-primary)', position: 'relative', borderRadius: '10px', boxShadow: '0 0 15px var(--accent-primary)' }}>
             <div style={{ position: 'absolute', right: '-6px', top: 'calc(50% - 8px)', width: '16px', height: '16px', borderRadius: '50%', background: 'white', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}></div>
          </div>
        </div>

        {/* TOOLBAR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem, 3vw, 2rem)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem, 2vw, 1.5rem)' }}>
                <button onClick={(e) => { e.stopPropagation(); jump(-10); }} style={{ background: 'none', border: 'none', cursor: 'pointer' }} className="control-btn"><Back10 /></button>
                <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', width: 'auto', minWidth: '30px' }}>{isPlaying ? '⏸' : '▶'}</button>
                <button onClick={(e) => { e.stopPropagation(); jump(10); }} style={{ background: 'none', border: 'none', cursor: 'pointer' }} className="control-btn"><Forward10 /></button>
            </div>
            <button onClick={(e) => { e.stopPropagation(); toggleMute(); }} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }} className="hide-mobile-small">{isMuted ? '🔇' : '🔊'}</button>
            <span style={{ color: 'white', fontSize: 'clamp(0.65rem, 1.5vw, 0.85rem)', fontWeight: 900, fontFamily: 'monospace' }}>{formattedTime} / {formattedDuration}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.8rem, 2vw, 1.5rem)' }}>
            <button onClick={(e) => { e.stopPropagation(); setShowSettings(!showSettings); }} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>⚙️</button>
            <button onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
               </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        video::-webkit-media-controls { display:none !important; }
        .control-btn { padding: 0; display: flex; align-items: center; transition: all 0.2s; }
        .control-btn svg { width: clamp(24px, 4vw, 34px); height: clamp(24px, 4vw, 34px); }
        .control-btn:hover { transform: scale(1.1); }
        .control-btn:active { transform: scale(0.9); }
        @keyframes pulse-play { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
        
        @media (max-width: 600px) {
           .hide-mobile-small { display: none !important; }
           .skip-ad-btn { padding: 8px 16px !important; min-width: 80px !important; bottom: 20% !important; scale: 0.9; }
        }
      `}</style>
    </div>
  );
};

export default React.memo(CustomPlayer);
