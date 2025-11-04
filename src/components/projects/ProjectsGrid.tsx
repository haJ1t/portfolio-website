'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'AI Task Manager',
      category: 'SaaS Application',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      description: 'An intelligent task management system powered by AI that helps teams prioritize work, predict deadlines, and optimize productivity.',
      tags: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
      description: 'A comprehensive fitness tracking application with workout plans, nutrition tracking, and social features to keep users motivated.',
      tags: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      title: 'Real Estate Portal',
      category: 'Web Platform',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      description: 'A full-featured real estate platform with advanced search filters, virtual tours, and integrated mortgage calculators.',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'Maps API'],
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      title: 'Learning Management System',
      category: 'Education Tech',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
      description: 'An interactive LMS platform with video streaming, live classes, quizzes, and progress tracking for students and educators.',
      tags: ['Next.js', 'WebRTC', 'PostgreSQL', 'AWS'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      category: 'Analytics Tool',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      description: 'A unified dashboard for managing multiple social media accounts with analytics, scheduling, and engagement tracking.',
      tags: ['React', 'D3.js', 'Express', 'Redis'],
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}
