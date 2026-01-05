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
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto py-8 md:py-12">
        <AboutHero />
        <SplitPanel />
      </div>
    </section>
  );
}
