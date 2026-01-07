'use client';

import { m } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export default function SocialLinks() {
  const socials = [
    {
      icon: Mail,
      href: 'mailto:hello@example.com',
      label: 'Email Me',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      hoverGradient: 'hover:from-blue-400 hover:via-cyan-400 hover:to-teal-400'
    },
    {
      icon: Github,
      href: '#',
      label: 'GitHub',
      gradient: 'from-gray-700 via-gray-800 to-black',
      hoverGradient: 'hover:from-gray-600 hover:via-gray-700 hover:to-gray-900'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      gradient: 'from-blue-600 via-blue-700 to-blue-800',
      hoverGradient: 'hover:from-blue-500 hover:via-blue-600 hover:to-blue-700'
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
      gradient: 'from-sky-500 via-sky-600 to-blue-600',
      hoverGradient: 'hover:from-sky-400 hover:via-sky-500 hover:to-blue-500'
    },
    {
      icon: Instagram,
      href: '#',
      label: 'Instagram',
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
      hoverGradient: 'hover:from-purple-500 hover:via-pink-500 hover:to-orange-400'
    },
  ];

  return (
    <div className="space-y-3">
      {socials.map((social, index) => (
        <m.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1 + index * 0.08,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ scale: 1.02, x: 8 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center gap-3.5 p-4 bg-gradient-to-r ${social.gradient} ${social.hoverGradient} rounded-xl transition-all group relative overflow-hidden`}
        >
          {/* Animated Background Shine */}
          <m.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />

          {/* Icon */}
          <m.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 relative z-10"
          >
            <social.icon className="w-5 h-5 text-white" />
          </m.div>

          {/* Label */}
          <span className="text-white font-semibold text-base relative z-10">
            {social.label}
          </span>

          {/* Arrow */}
          <m.svg
            className="w-5 h-5 text-white/70 ml-auto relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </m.svg>
        </m.a>
      ))}
    </div>
  );
}
