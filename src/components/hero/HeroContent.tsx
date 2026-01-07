'use client';

import { motion, cubicBezier, useReducedMotion, type Variants } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useEffect, useState } from 'react';

export default function HeroContent() {
  // ✅ Typed easing (TS-safe)
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
        delayChildren: 0.3,
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
      filter: 'blur(0px)', // Blur'u tamamen kaldır
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
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
      <motion.div
        className="flex-1 flex items-center justify-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6">
          {/* NAME */}
          <motion.div
            variants={nameVariants}
            transition={{
              duration: 1.2,
              ease: heroEase, // ✅ GUARANTEED SAFE
            }}
            className="relative"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold relative"
              initial={isMobile ? {} : { backgroundPosition: '0% 50%' }}
              animate={isMobile ? {} : {
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={isMobile ? {} : {
                backgroundPosition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              <span
                className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent"
                style={{ backgroundSize: isMobile ? '100% 100%' : '200% 100%' }}
              >
                {siteConfig.hero.name}
              </span>

              {/* Glow - Disabled on mobile */}
              {!isMobile && !prefersReducedMotion && (
                <motion.span
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
            </motion.h1>

            {/* PARTICLES - Disabled on mobile for performance */}
            {!isMobile && !prefersReducedMotion && [...Array(8)].map((_, i) => (
              <motion.div
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
          </motion.div>

          {/* TITLE */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300"
          >
            {siteConfig.hero.title}
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {siteConfig.hero.description}
          </motion.p>

          {/* SOCIALS */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 pt-10"
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR - Simplified on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="pb-8 md:pb-12 flex justify-center flex-shrink-0"
      >
        <motion.a
          href="#about"
          animate={isMobile ? {} : { y: [0, 8, 0] }}
          transition={isMobile ? {} : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-400/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-gray-400/50 rounded-full"
              animate={isMobile ? {} : { y: [0, 12, 0] }}
              transition={isMobile ? {} : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}