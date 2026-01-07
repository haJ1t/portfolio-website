'use client';

import { m, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SpaceField() {
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
    const [isMobile, setIsMobile] = useState(false);

    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
        // Significantly reduce stars on mobile for performance
        const count = mobile ? 15 : 100;

        // Generate stellar layers
        const newStars = Array.from({ length: count }).map((_, i) => {
            const typeRand = Math.random();
            // On mobile, only use static stars (no animations)
            let type: 'static' | 'twinkle' | 'travel' = 'static';
            if (!mobile) {
                if (typeRand > 0.6) type = 'twinkle';
                if (typeRand > 0.9) type = 'travel';
            }

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

    // On mobile, render only static stars for performance
    if (isMobile || prefersReducedMotion) {
        return (
            <>
                {stars.map((star) => (
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
                ))}
            </>
        );
    }

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
                if (star.type === 'twinkle') {
                    return (
                        <m.div
                            key={star.id}
                            className="absolute rounded-full bg-white"
                            style={{
                                left: `${star.x}%`,
                                top: `${star.y}%`,
                                width: star.size,
                                height: star.size,
                                willChange: 'opacity, transform',
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
                if (star.type === 'travel') {
                    return (
                        <m.div
                            key={star.id}
                            className="absolute rounded-full bg-blue-100"
                            style={{
                                left: `${star.x}%`,
                                top: `${star.y}%`,
                                width: star.size,
                                height: star.size,
                                boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
                                willChange: 'transform, opacity',
                            }}
                            animate={{
                                y: [0, 800],
                                opacity: [0, 1, 0],
                                scaleY: [1, 5, 1],
                            }}
                            transition={{
                                duration: star.duration * 1.5,
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
