'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Code2, Brain, Zap, Rocket, Award, ArrowUpRight, Sparkles, X, Download, Mail, Phone, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';
import { siteConfig } from '@/config/site';

export default function SplitPanel() {
  const [showResume, setShowResume] = useState(false);

  const stats = [
    { label: 'Years Experience', value: '5+', icon: Zap },
    { label: 'Projects Completed', value: '50+', icon: Code2 },
    { label: 'AI/ML Projects', value: '15+', icon: Brain },
    { label: 'Technologies', value: '20+', icon: Rocket },
  ];

  // Skills from site.ts
  const topSkills = [
    { name: 'SvelteKit & React', level: 95 },
    { name: 'Django REST & FastAPI', level: 95 },
    { name: 'AI/ML (scikit-learn)', level: 90 },
    { name: 'PostgreSQL & SQL', level: 90 },
  ];

  return (
    <>
      <div className="w-full px-3 sm:px-4 py-4 sm:py-6">
        <div className="grid md:grid-cols-2 gap-2.5 sm:gap-3 max-w-7xl mx-auto">
          {/* LEFT PANEL */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2.5 sm:space-y-3 flex flex-col"
          >
            {/* Avatar Card - Elegant & Minimal */}
            <TiltCard>
              <div className="relative p-4 sm:p-5 rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden group">
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-700" />
                
                {/* Scanline effect */}
                <motion.div
                  animate={{ y: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-32 pointer-events-none"
                />

                <div className="relative flex flex-col items-center">
                  {/* Minimal Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 mb-2.5 sm:mb-3"
                  >
                    {/* Rotating border */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="1"
                        strokeDasharray="283"
                        initial={{ strokeDashoffset: 283 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Avatar */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-3xl sm:text-4xl border border-white/10">
                      👨‍💻
                    </div>

                    {/* Pulse ring */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border border-blue-500/30"
                    />
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-1 tracking-tight text-center">
                    {siteConfig.name}
                  </h3>
                  
                  {/* Role with underline animation */}
                  <div className="relative mb-2.5 sm:mb-3">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium text-center">
                      {siteConfig.title}
                    </p>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent origin-left"
                    />
                  </div>

                  {/* Social Links - Minimal */}
                  <div className="flex gap-2.5 sm:gap-3">
                    {[
                      { name: 'GitHub', href: siteConfig.social.github },
                      { name: 'LinkedIn', href: siteConfig.social.linkedin },
                    ].map((social, i) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        whileHover={{ y: -2 }}
                        className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors relative group/link"
                      >
                        {social.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 group-hover/link:w-full transition-all duration-300" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Stats Grid - Clean & Minimal */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 flex-1">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex"
                >
                  <TiltCard intensity={0.3}>
                    <div className="relative p-3 sm:p-3.5 rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden group hover:border-white/20 transition-colors h-full flex flex-col justify-center">
                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ rotate: 15 }}
                          className="inline-flex p-1.5 rounded-lg bg-white/5 mb-1.5 sm:mb-2"
                        >
                          <stat.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400" />
                        </motion.div>

                        {/* Value */}
                        <div className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-0.5 tracking-tight">
                          {stat.value}
                        </div>

                        {/* Label */}
                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight">
                          {stat.label}
                        </div>
                      </div>

                      {/* Hover line */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                      />
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2.5 sm:space-y-3 flex flex-col"
          >
            {/* Bio Card - Typography Focus */}
            <TiltCard>
              <div className="relative p-4 sm:p-5 rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden group flex-1 flex flex-col">
                {/* Gradient line accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                
                <div className="relative flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 sm:h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white tracking-tight">
                        {siteConfig.about.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: [0, 90, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                    </motion.div>
                  </div>
                  
                  {/* Bio Text - First 3 paragraphs */}
                  <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                    {siteConfig.about.description.slice(0, 3).map((text, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className="relative pl-2.5 sm:pl-3 border-l border-white/10"
                      >
                        {text}
                      </motion.p>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => setShowResume(true)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2.5 sm:mt-3 flex items-center gap-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group/btn"
                  >
                    <span className="font-medium">View Full Resume</span>
                    <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </TiltCard>

            {/* Skills Card - Minimalist Bars */}
            <TiltCard>
              <div className="relative p-4 sm:p-5 rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
                {/* Gradient line accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                    <div className="w-1 h-4 sm:h-5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white tracking-tight">
                      Top Skills
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2.5 sm:space-y-3">
                    {topSkills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-baseline mb-1">
                          <motion.span 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            {skill.name}
                          </motion.span>
                          <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="text-xs text-gray-500 dark:text-gray-400 font-mono"
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        
                        {/* Minimal progress bar */}
                        <div className="relative h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative"
                          >
                            {/* Shimmer */}
                            <motion.div
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      {/* RESUME POP-UP MODAL */}
      <AnimatePresence>
        {showResume && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResume(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Modal */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Gradient Header */}
                <div className="relative h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                  {/* Animated circles */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"
                  />
                  <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                    className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"
                  />

                  {/* Close button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowResume(false)}
                    className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full transition-colors z-10"
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.button>

                  {/* Avatar */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="relative w-24 h-24 rounded-full bg-white dark:bg-gray-800 p-1 shadow-xl"
                    >
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-4xl">
                        👨‍💻
                      </div>
                      {/* Online indicator */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-16 pb-8 px-8">
                  {/* Name & Title */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mb-6"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {siteConfig.name}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {siteConfig.title}
                    </p>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
                  >
                    {siteConfig.contact.info.map((item, i) => {
                      const IconComponent = item.icon === 'Mail' ? Mail : item.icon === 'Phone' ? Phone : MapPin;
                      return (
                        <motion.a
                          key={i}
                          href={item.href || undefined}
                          whileHover={{ y: -2 }}
                          className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group cursor-pointer"
                        >
                          <IconComponent className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors" />
                          <span className="text-xs text-gray-700 dark:text-gray-300">
                            {item.value}
                          </span>
                        </motion.a>
                      );
                    })}
                  </motion.div>

                  {/* Summary */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-6"
                  >
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      Professional Summary
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {siteConfig.about.description[0]}
                    </p>
                  </motion.div>

                  {/* Download Button */}
                  <motion.a
                    href={siteConfig.about.resume}
                    download
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow group"
                  >
                    <Download className="w-4 h-4 group-hover:animate-bounce" />
                    Download Full Resume (PDF)
                  </motion.a>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-full" />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Minimal 3D Tilt
function TiltCard({ children, intensity = 1 }: { children: React.ReactNode; intensity?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5 * intensity, -5 * intensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5 * intensity, 5 * intensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative flex-1"
    >
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
}
