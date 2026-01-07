'use client';

import { m, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function HeroBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());

    // Generate random stars - fewer on mobile for performance
    const generateStars = () => {
      const mobile = checkMobile();
      const starCount = prefersReducedMotion ? 0 : (mobile ? 30 : 100);
      const newStars: Star[] = [];
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        });
      }
      setStars(newStars);
    };

    generateStars();
    
    const handleResize = () => {
      const mobile = checkMobile();
      setIsMobile(mobile);
      generateStars();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [prefersReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs - Reduced animation on mobile */}
      <m.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          x: isMobile ? 0 : [0, 50, 0],
          y: isMobile ? 0 : [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ willChange: 'transform, opacity' }}
      />
      <m.div
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
        animate={prefersReducedMotion ? {} : {
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
          x: isMobile ? 0 : [0, -30, 0],
          y: isMobile ? 0 : [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ willChange: 'transform, opacity' }}
      />
      <m.div
        className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl"
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
          x: isMobile ? 0 : [0, -50, 0],
          y: isMobile ? 0 : [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <m.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Shooting Stars - Disabled on mobile for performance */}
      {!isMobile && !prefersReducedMotion && (
        <>
          <m.div
            className="absolute top-1/4 left-0 w-1 h-1 bg-white rounded-full"
            animate={{
              x: [0, 300],
              y: [0, 150],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 5,
              ease: 'easeOut',
            }}
            style={{
              boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)',
              willChange: 'transform, opacity',
            }}
          />
          <m.div
            className="absolute top-1/3 right-0 w-1 h-1 bg-white rounded-full"
            animate={{
              x: [0, -250],
              y: [0, 125],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 7,
              ease: 'easeOut',
            }}
            style={{
              boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)',
              willChange: 'transform, opacity',
            }}
          />
        </>
      )}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-gray-950/50" />
    </div>
  );
}
