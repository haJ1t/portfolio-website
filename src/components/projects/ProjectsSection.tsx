'use client';

import { m, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ProjectsGrid from './ProjectsGrid';



export default function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section id="projects" className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Animated Background Elements - REMOVED */}
      {/* Floating Dots - Hydration Safe - REMOVED (moved to unified) */}

      {/* Section Header */}
      <m.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-12 px-4"
      >
        {/* Title */}
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
            Projects
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Explore my latest work and creative solutions
        </p>

        {/* Decorative line */}
        <m.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-6"
        />
      </m.div>

      {/* Projects Grid - Tam Genişlik */}
      <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-6">
        <ProjectsGrid />
      </div>
    </section>
  );
}
