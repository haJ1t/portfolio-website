'use client';

import { m } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AboutHero() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-24 md:h-28 mb-8 md:mb-12 overflow-hidden">
      {/* Split Text Animation */}
      <div className="flex items-center justify-center h-full gap-3 md:gap-4">
        {/* Left Part - ABOUT */}
        <m.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <m.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black"
            animate={{ x: isRevealed ? -20 : 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
              ABOUT
            </span>
          </m.h2>
        </m.div>

        {/* Center Line */}
        <m.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative"
        >
          <div className="w-1 h-16 md:h-20 bg-gradient-to-b from-cyan-500 via-blue-600 to-indigo-700 rounded-full shadow-lg shadow-blue-500/50">
            {/* Glowing orb */}
            <m.div
              animate={{
                y: [0, 60, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -left-1.5 -top-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-blue-400/50"
            />
          </div>
        </m.div>

        {/* Right Part - ME */}
        <m.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <m.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black"
            animate={{ x: isRevealed ? 20 : 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              ME
            </span>
          </m.h2>
        </m.div>
      </div>

      {/* Animated Background Lines */}
      <m.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
      />
    </div>
  );
}
