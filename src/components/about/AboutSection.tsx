'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AboutHero from './AboutHero';
import SplitPanel from './SplitPanel';

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center px-4 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: '1s' }} 
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Animated Dots - Reduced on mobile */}
      {!prefersReducedMotion && [...Array(isMobile ? 4 : 8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
          style={{
            left: `${15 + (i * (isMobile ? 25 : 12))}%`,
            top: `${30 + (i % 2) * 40}%`,
            willChange: 'transform, opacity',
          }}
        />
      ))}

      {/* Diagonal Lines - Disabled on mobile for performance */}
      {!isMobile && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <motion.line
            x1="0%" y1="0%" x2="100%" y2="100%"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 1 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 2, repeat: Infinity, repeatDelay: 1 }}
            style={{ willChange: 'stroke-dasharray' }}
          />
          <motion.line
            x1="100%" y1="0%" x2="0%" y2="100%"
            stroke="url(#gradient2)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 1 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 2, delay: 1, repeat: Infinity, repeatDelay: 1 }}
            style={{ willChange: 'stroke-dasharray' }}
          />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      )}
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto py-8 md:py-12">
        <AboutHero />
        <SplitPanel />
      </div>
    </section>
  );
}
