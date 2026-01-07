'use client';

import { m, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isExpanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
  totalCards: number;
  expandedId: number | null;
}

export default function ProjectCard({
  project,
  index,
  isExpanded,
  onExpand,
  onCollapse,
  totalCards,
  expandedId
}: ProjectCardProps) {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Disable body scroll when popup is open on mobile
  useEffect(() => {
    if (isMobile && isExpanded) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        // Restore scroll position
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMobile, isExpanded]);

  const handleInteraction = () => {
    if (isExpanded) {
      onCollapse();
    } else {
      onExpand();
    }
  };

  // Desktop: stack layout
  const expandedWidth = '720px';
  const collapsedWidth = '140px';
  const cardHeight = '520px';

  // Mobile: Normal grid layout, popup when expanded

  return (
    <>
      {/* Mobile Popup - Fixed overlay via Portal */}
      {isMobile && isExpanded && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={onCollapse}
        >
          {/* Backdrop Blur */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Popup Card */}
          <m.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md z-10 max-h-[90vh] overflow-y-auto"
            style={{
              maxHeight: '90vh',
              scrollbarWidth: 'thin',
            }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-gray-900 shadow-2xl border border-white/10">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 90vw, 450px"
                  priority
                  quality={60}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
              </div>

              {/* Close Button */}
              <button
                onClick={onCollapse}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center border border-white/20"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="relative min-h-[500px] flex flex-col justify-end p-6 pt-20">
                {/* Expanded Content */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm font-medium bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      className={`flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r ${project.color} text-white rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-shadow group`}
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>,
        document.body
      )}

      {/* Normal Card */}
      <m.div
        className={`relative ${isMobile && expandedId && expandedId !== project.id ? 'opacity-50 blur-sm' : ''}`}
        onMouseEnter={!isMobile ? onExpand : undefined}
        onMouseLeave={!isMobile ? onCollapse : undefined}
        onClick={isMobile ? handleInteraction : undefined}
        layout={!isMobile}
        transition={prefersReducedMotion ? { duration: 0 } : {
          layout: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
          },
        }}
      >
        <m.div
          className={`relative rounded-3xl overflow-hidden cursor-pointer bg-gray-900 shadow-2xl ${isMobile ? 'w-full' : ''}`}
          animate={!isMobile ? {
            width: isExpanded ? expandedWidth : collapsedWidth,
            height: cardHeight,
          } : {
            height: '280px',
            width: '100%',
          }}
          transition={prefersReducedMotion ? { duration: 0 } : {
            type: 'spring',
            stiffness: 280,
            damping: 28,
            mass: 0.8,
          }}
          style={isMobile ? {
            height: '280px',
            width: '100%',
          } : {}}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover"
              fill
              // Optimized sizes for stack layout vs mobile grid
              sizes="(max-width: 768px) 90vw, 300px"
              loading="lazy"
              quality={60}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          </div>

          {/* Content Container */}
          <div className={`relative ${isMobile ? 'h-[280px]' : 'h-full'} flex flex-col justify-between ${isMobile ? 'p-4' : 'p-6'}`}>
            {/* Number Badge */}
            <m.div
              className="self-start"
              animate={!isMobile && !prefersReducedMotion ? {
                scale: isExpanded ? 0.85 : 1,
              } : {}}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform duration-300 origin-center`}
                style={{
                  transform: isMobile ? 'scale(0.7)' : (isExpanded ? 'scale(0.85)' : 'scale(1)')
                }}
              >
                <span
                  className={`text-white font-bold text-xl transition-transform duration-300`}
                  style={{
                    transform: isMobile ? 'scale(0.8)' : (isExpanded ? 'scale(0.9)' : 'scale(1)')
                  }}
                >
                  {index + 1}
                </span>
              </div>
            </m.div>

            {/* Bottom Content */}
            <div>
              <AnimatePresence mode="wait">
                {/* Collapsed State - Only on desktop */}
                {!isMobile && !isExpanded && (
                  <m.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {project.title}
                    </h3>
                  </m.div>
                )}

                {/* Mobile Collapsed State - Show title and first tag */}
                {isMobile && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white leading-tight mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    {project.tags.length > 0 && (
                      <div className="flex gap-1.5">
                        <span className="px-2 py-0.5 text-xs font-medium bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20">
                          {project.tags[0]}
                        </span>
                        {project.tags.length > 1 && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20">
                            +{project.tags.length - 1}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Expanded State - Only on desktop (mobile uses popup) */}
                {!isMobile && isExpanded && (
                  <m.div
                    key="expanded"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeOut',
                      staggerChildren: 0.1,
                    }}
                    className="space-y-3"
                  >
                    <m.h3
                      className="text-3xl font-bold text-white leading-tight"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {project.title}
                    </m.h3>

                    <m.p
                      className="text-white/90 text-base leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.description}
                    </m.p>

                    <m.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.tags.map((tag, idx) => (
                        <m.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          className="px-3 py-1.5 text-sm font-medium bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20"
                        >
                          {tag}
                        </m.span>
                      ))}
                    </m.div>

                    <m.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-full font-semibold text-sm shadow-xl hover:shadow-2xl transition-shadow group`}
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </m.button>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Glow Effect - Only on desktop */}
          {!isMobile && (
            <m.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              animate={prefersReducedMotion ? {} : {
                boxShadow: isExpanded
                  ? '0 0 40px rgba(139, 92, 246, 0.4)'
                  : '0 0 0px rgba(139, 92, 246, 0)',
              }}
              transition={{ duration: 0.3 }}
              style={{ willChange: 'box-shadow' }}
            />
          )}
        </m.div>
      </m.div>
    </>
  );
}
