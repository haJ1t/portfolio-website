'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  color: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative group"
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden cursor-pointer"
        animate={{
          width: isExpanded ? '140%' : '100%',
          height: isExpanded ? 'auto' : '320px',
          zIndex: isExpanded ? 50 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      >
        {/* Card Container */}
        <div className="relative bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
          {/* Image Section */}
          <motion.div
            className="relative overflow-hidden"
            animate={{
              height: isExpanded ? '200px' : '320px',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Background Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{
                scale: isExpanded ? 1 : 1.1,
              }}
              transition={{ duration: 0.6 }}
            />

            {/* Gradient Overlay */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-multiply`}
              animate={{
                opacity: isExpanded ? 0.3 : 0.6,
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Category Badge - Always visible */}
            <motion.div
              className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
              animate={{
                scale: isExpanded ? 0.9 : 1,
                opacity: isExpanded ? 0.8 : 1,
              }}
            >
              <span className="text-xs font-medium text-white">
                {project.category}
              </span>
            </motion.div>

            {/* Title - Always visible at bottom when collapsed */}
            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80">
                    <Sparkles className="w-3 h-3" />
                    <span className="text-xs">Hover to explore</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="p-5"
              >
                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
                >
                  {project.description}
                </motion.p>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.25 + index * 0.05 }}
                      className="px-2.5 py-1 text-xs font-medium bg-white/10 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-full border border-white/10"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-3"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${project.color} text-white rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-shadow group/btn`}
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  </motion.button>
                </motion.div>

                {/* Decorative corner accent */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${project.color} opacity-10 rounded-tl-full`}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hover glow effect */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-2xl`}
          />

          {/* Border glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{
              boxShadow: isExpanded
                ? `0 0 30px rgba(139, 92, 246, 0.3)`
                : '0 0 0px rgba(139, 92, 246, 0)',
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Backdrop when expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            style={{ pointerEvents: 'none' }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
