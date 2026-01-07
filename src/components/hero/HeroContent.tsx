'use client';

import { m, cubicBezier, useReducedMotion, type Variants } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useEffect, useState } from 'react';

export default function HeroContent() {
  const heroEase = cubicBezier(0.6, 0.05, 0.01, 0.9);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const nameVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const socialLinks = [
    { icon: Github, href: siteConfig.social.github },
    { icon: Linkedin, href: siteConfig.social.linkedin },
    { icon: Mail, href: `mailto:${siteConfig.email}` },
  ];

  return (
    <section className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      {/* MAIN HERO */}
      <div className="flex-1 flex items-center justify-center text-center px-4">
        <div className="space-y-6">
          {/* NAME - Static for LCP */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold relative">
              <span
                className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent"
                style={{ backgroundPosition: '0% 50%', backgroundSize: isMobile ? '100% 100%' : '200% 100%' }}
              >
                {siteConfig.hero.name}
              </span>

              {/* Glow - Disabled on mobile */}
              {!isMobile && !prefersReducedMotion && (
                <m.span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-indigo-700/15 blur-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.4, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{ willChange: 'opacity' }}
                />
              )}
            </h1>

            {/* PARTICLES - Disabled on mobile for performance */}
            {!isMobile && !prefersReducedMotion && [...Array(8)].map((_, i) => (
              <m.div
                key={i}
                className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
                initial={{
                  x: Math.cos((i * Math.PI * 2) / 8) * 100,
                  y: Math.sin((i * Math.PI * 2) / 8) * 100,
                  opacity: 1,
                  scale: 1,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                  scale: 0,
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  ease: 'easeOut',
                }}
                style={{ left: '50%', top: '50%', willChange: 'transform, opacity' }}
              />
            ))}
          </div>

          {/* TITLE - Static for LCP */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
            {siteConfig.hero.title}
          </h2>

          {/* DESCRIPTION - Static for LCP */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {siteConfig.hero.description}
          </p>

          {/* SOCIALS - Can be animated */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center gap-4 pt-10"
          >
            {socialLinks.map((social, i) => (
              <m.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                style={{ willChange: 'transform' }}
              >
                <social.icon className="w-5 h-5" />
              </m.a>
            ))}
          </m.div>
        </div>
      </div>

      {/* SCROLL INDICATOR - Simplified on mobile */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="pb-8 md:pb-12 flex justify-center flex-shrink-0"
      >
        <m.a
          href="#about"
          animate={isMobile ? {} : { y: [0, 8, 0] }}
          transition={isMobile ? {} : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-400/30 flex items-start justify-center p-2">
            <m.div
              className="w-1.5 h-1.5 bg-gray-400/50 rounded-full"
              animate={isMobile ? {} : { y: [0, 12, 0] }}
              transition={isMobile ? {} : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </m.a>
      </m.div>
    </section>
  );
}