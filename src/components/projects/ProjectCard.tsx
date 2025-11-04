'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
}

export default function ProjectCard({ 
  project, 
  index, 
  isExpanded, 
  onExpand, 
  onCollapse 
}: ProjectCardProps) {
  return (
    <motion.div
      className="relative"
      onHoverStart={onExpand}
      onHoverEnd={onCollapse}
      layout
      transition={{
        layout: {
          type: 'spring',
          stiffness: 300,
          damping: 30,
        },
      }}
    >
      <motion.div
        className="relative rounded-3xl overflow-hidden cursor-pointer bg-gray-900"
        animate={{
          width: isExpanded ? '720px' : '140px',
          height: '520px',
        }}
        transition={{
          type: 'spring',
          stiffness: 280,
          damping: 28,
          mass: 0.8,
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-between p-6">
          {/* Number Badge */}
          <motion.div
            className="self-start"
            animate={{
              scale: isExpanded ? 0.85 : 1,
            }}
          >
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <span className="text-white font-bold text-xl">{index + 1}</span>
            </div>
          </motion.div>

          {/* Bottom Content */}
          <div>
            <AnimatePresence mode="wait">
              {/* Collapsed State */}
              {!isExpanded && (
                <motion.div
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
                </motion.div>
              )}

              {/* Expanded State */}
              {isExpanded && (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="space-y-3"
                >
                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-white/90 text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + idx * 0.05 }}
                        className="px-3 py-1.5 text-sm font-medium bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-full font-semibold text-sm shadow-xl hover:shadow-2xl transition-shadow group`}
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={{
            boxShadow: isExpanded
              ? '0 0 40px rgba(139, 92, 246, 0.4)'
              : '0 0 0px rgba(139, 92, 246, 0)',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
