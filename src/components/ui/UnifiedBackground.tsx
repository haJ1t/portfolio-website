'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Separate component for the star field to manage state
function SpaceField() {
    const [stars, setStars] = useState<Array<{
        id: number;
        x: number;
        y: number;
        size: number;
        opacity: number;
        duration: number;
        delay: number;
        type: 'static' | 'twinkle' | 'travel';
    }>>([]);

    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const count = isMobile ? 40 : 100;

        // Generate stellar layers
        const newStars = Array.from({ length: count }).map((_, i) => {
            const typeRand = Math.random();
            let type: 'static' | 'twinkle' | 'travel' = 'static';
            if (typeRand > 0.6) type = 'twinkle';
            if (typeRand > 0.9) type = 'travel';

            return {
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: type === 'travel' ? Math.random() * 2 + 1 : Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 5,
                type,
            };
        });

        setStars(newStars);
    }, []);

    return (
        <>
            {stars.map((star) => {
                // Static Stars (Background depth)
                if (star.type === 'static') {
                    return (
                        <div
                            key={star.id}
                            className="absolute rounded-full bg-white"
                            style={{
                                left: `${star.x}%`,
                                top: `${star.y}%`,
                                width: star.size,
                                height: star.size,
                                opacity: star.opacity * 0.5,
                            }}
                        />
                    );
                }

                // Twinkling Stars (Mid-ground)
                if (star.type === 'twinkle' && !prefersReducedMotion) {
                    return (
                        <motion.div
                            key={star.id}
                            className="absolute rounded-full bg-white"
                            style={{
                                left: `${star.x}%`,
                                top: `${star.y}%`,
                                width: star.size,
                                height: star.size,
                            }}
                            animate={{
                                opacity: [star.opacity, star.opacity * 0.2, star.opacity],
                                scale: [1, 0.8, 1],
                            }}
                            transition={{
                                duration: star.duration,
                                repeat: Infinity,
                                delay: star.delay,
                                ease: "easeInOut"
                            }}
                        />
                    );
                }

                // Travel Stars (Foreground movement effect)
                // Creates the "warp speed" or "passing by" effect
                if (star.type === 'travel' && !prefersReducedMotion) {
                    return (
                        <motion.div
                            key={star.id}
                            className="absolute rounded-full bg-blue-100"
                            style={{
                                left: `${star.x}%`,
                                top: `${star.y}%`,
                                width: star.size,
                                height: star.size,
                                boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`
                            }}
                            animate={{
                                y: [0, 800], // Move down (simulating forward movement if looking slightly down, or camera moving up)
                                opacity: [0, 1, 0],
                                scaleY: [1, 5, 1], // Stretch effect for speed
                            }}
                            transition={{
                                duration: star.duration * 1.5, // Faster than simple twinkling
                                repeat: Infinity,
                                delay: star.delay,
                                ease: "linear"
                            }}
                        />
                    );
                }

                return null;
            })}
        </>
    );
}

export default function UnifiedBackground() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030014]">
            {/* Deep Space Background Layer */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#030014] to-[#030014]" />

            {/* Atmospheric Glows (subtler) */}
            <motion.div
                animate={prefersReducedMotion ? {} : {
                    opacity: [0.15, 0.25, 0.15],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[120px]"
            />
            <motion.div
                animate={prefersReducedMotion ? {} : {
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[120px]"
            />

            {/* Star Field */}
            <div className="absolute inset-0">
                <SpaceField />
            </div>

            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")' }} />
        </div>
    );
}
