'use client';

import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function HeroContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } as Variants;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  } as Variants;

  // Name animation with particle assembly effect
  const nameVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
      },
    },
  } as Variants;

  const socialLinks = [
    { icon: Github, href: siteConfig.social.github },
    { icon: Linkedin, href: siteConfig.social.linkedin },
    { icon: Mail, href: `mailto:${siteConfig.email}` },
  ];

  return (
    <div className="relative z-30 flex flex-col items-center justify-between min-h-[calc(100vh-5rem)]">
      {/* Main Content - Centered */}
      <motion.div
        className="flex-1 flex items-center justify-center text-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-4">
          {/* Name with Particle Assembly + Gradient Wave */}
          <motion.div
            variants={nameVariants}
            className="relative"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold relative"
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                backgroundPosition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              <span
                className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% 100%',
                }}
              >
                {siteConfig.hero.name}
              </span>

              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-indigo-700/15 blur-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                aria-hidden="true"
              />
            </motion.h1>

            {/* Particle effects */}
            {[...Array(8)].map((_, i) => (
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
                style={{
                  left: '50%',
                  top: '50%',
                }}
              />
            ))}
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300"
          >
            {siteConfig.hero.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed px-4 pt-6"
          >
            {siteConfig.hero.description}
          </motion.p>

          {/* Social Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 pt-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="pb-12"
      >
        <motion.a
          href="#about"
          className="block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-400/30 dark:border-gray-500/30 flex items-start justify-center p-2 hover:border-blue-500/50 transition-colors">
            <motion.div
              className="w-1.5 h-1.5 bg-gray-400/50 dark:bg-gray-500/50 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.a>
      </motion.div>
    </div>
  );
}
