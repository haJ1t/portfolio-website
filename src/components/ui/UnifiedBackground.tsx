'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load SpaceField with no SSR to assume it's a visual enhancement
const SpaceField = dynamic(() => import('./SpaceField'), {
    ssr: false,
    loading: () => null
});

export default function UnifiedBackground() {
    const prefersReducedMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030014]">
            {/* Deep Space Background Layer */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#030014] to-[#030014]" />

            {/* Atmospheric Glows - disabled on mobile */}
            {!isMobile && (
                <>
                    <motion.div
                        animate={prefersReducedMotion ? {} : {
                            opacity: [0.15, 0.25, 0.15],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[120px]"
                        style={{ willChange: 'opacity, transform' }}
                    />
                    <motion.div
                        animate={prefersReducedMotion ? {} : {
                            opacity: [0.1, 0.2, 0.1],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[120px]"
                        style={{ willChange: 'opacity, transform' }}
                    />
                </>
            )}

            {/* Star Field */}
            <div className="absolute inset-0">
                <SpaceField />
            </div>

            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")' }} />
        </div>
    );
}
