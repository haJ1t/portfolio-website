'use client';

import dynamic from 'next/dynamic';

// Lazy load SpaceField with no SSR to assume it's a visual enhancement
const SpaceField = dynamic(() => import('./SpaceField'), {
    ssr: false,
    loading: () => null
});

export default function UnifiedBackground() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030014]">
            {/* Deep Space Background Layer */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#030014] to-[#030014]" />

            {/* Atmospheric Glows - Hidden on mobile via CSS, static on desktop */}
            <div className="hidden md:block">
                <div
                    className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[120px] animate-breathe motion-reduce:animate-none"
                />
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[120px] animate-breathe motion-reduce:animate-none"
                    style={{ animationDelay: '2s' }}
                />
            </div>

            {/* Star Field */}
            <div className="absolute inset-0">
                <SpaceField />
            </div>

            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")' }} />
        </div>
    );
}
