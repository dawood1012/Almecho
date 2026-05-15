import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="scroll-progress-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        backgroundColor: 'transparent',
        zIndex: 10000,
        pointerEvents: 'none'
      }}
    >
      <div 
        className="scroll-progress-bar"
        style={{
          width: `${scrollProgress}%`,
          height: '100%',
          backgroundColor: 'var(--accent-red)',
          transition: 'width 0.1s ease-out',
          boxShadow: '0 0 10px var(--accent-red-glow)'
        }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
