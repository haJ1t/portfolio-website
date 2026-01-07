'use client';

import { m } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, scalable e-commerce solution built with Next.js, featuring real-time inventory management, secure payment integration with Stripe, and an intuitive admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=60',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'AI Content Generator',
      description: 'An intelligent content creation tool powered by OpenAI GPT-4, helping businesses generate high-quality marketing copy, blog posts, and social media content in seconds.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=60',
      tags: ['React', 'OpenAI', 'Node.js', 'MongoDB'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Real Estate Dashboard',
      description: 'A comprehensive property management system with interactive maps, advanced search filters, virtual tours, and real-time market analytics for real estate professionals.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=60',
      tags: ['Vue.js', 'Mapbox', 'Firebase', 'Tailwind'],
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      title: 'Fitness Tracking App',
      description: 'A mobile-first fitness application with workout planning, nutrition tracking, progress analytics, and social features to keep users motivated and connected.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=60',
      tags: ['React Native', 'Express', 'MySQL', 'AWS'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`relative ${isMobile ? 'w-full' : ''}`}>
      <m.div
        className={`${isMobile ? 'grid grid-cols-1 gap-4 w-full' : 'flex gap-3 justify-center items-center'}`}
        layout={!isMobile}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isExpanded={expandedId === project.id}
            onExpand={() => setExpandedId(project.id)}
            onCollapse={() => setExpandedId(null)}
            totalCards={projects.length}
            expandedId={expandedId}
          />
        ))}
      </m.div>
    </div>
  );
}
