'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
}

export default function DotNavigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false); // Navbar görünürlüğü
  const prefersReducedMotion = useReducedMotion();

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  // Navbar Visibility + Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Hero'dan çıkınca navbar'ı göster (Hero yüksekliği ~100vh)
      const heroHeight = window.innerHeight * 0.7; // Hero'nun %70'i
      setIsVisible(window.scrollY > heroHeight);

      // Sections'ı al
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      })).filter(section => section.element !== null);

      // En üstteyse kesinlikle home
      if (window.scrollY < 50) {
        setActiveSection('home');
        return;
      }

      // Her section'ı kontrol et
      let currentSection = 'home';

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;

          if (scrollPosition >= sectionTop - 100) {
            currentSection = section.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setActiveSection('home');
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        >
          <div className="flex flex-col gap-6">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative flex items-center cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 4 }}
                >
                  {/* Dot */}
                  <motion.div
                    className="relative"
                    animate={{
                      x: isActive ? 8 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Outer Glow Ring (only when active) */}
                    {isActive && !prefersReducedMotion && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute inset-0 -m-2"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="w-8 h-8 rounded-full bg-gradient-to-r from-[#006994] via-[#0077B6] to-[#00B4D8] blur-md"
                          style={{ willChange: 'transform, opacity' }}
                        />
                      </motion.div>
                    )}

                    {/* Main Dot */}
                    <motion.div
                      animate={{
                        scale: isActive ? 1.4 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`w-3 h-3 rounded-full relative ${isActive
                          ? 'bg-gradient-to-r from-[#006994] via-[#0077B6] to-[#00B4D8] shadow-lg shadow-[#0077B6]/50'
                          : 'bg-white/30 group-hover:bg-white/60'
                        } transition-colors duration-300`}
                    >
                      {/* Inner Shine - disabled if reduced motion */}
                      {isActive && !prefersReducedMotion && (
                        <motion.div
                          animate={{
                            scale: [0.5, 1, 0.5],
                            opacity: [0.8, 0.3, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 rounded-full bg-white/50"
                          style={{ willChange: 'transform, opacity' }}
                        />
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Label (appears on hover or when active) */}
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : -10,
                    }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute left-8 ml-4 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap pointer-events-none ${isActive
                        ? 'bg-gradient-to-r from-[#006994] via-[#0077B6] to-[#00B4D8] text-white shadow-lg shadow-[#0077B6]/30'
                        : 'bg-white/10 backdrop-blur-md text-white/80 border border-white/20'
                      }`}
                  >
                    {item.label}
                  </motion.span>

                  {/* Connecting Line (subtle) */}
                  {index < navItems.length - 1 && (
                    <div className="absolute left-1.5 top-6 w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Decorative Background Blur - disabled if reduced motion */}
          {!prefersReducedMotion && (
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-32 h-32 bg-gradient-to-r from-[#006994] to-[#0077B6] rounded-full"
                style={{ willChange: 'transform, opacity' }}
              />
            </div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
