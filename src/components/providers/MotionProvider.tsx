'use client';

import { LazyMotion } from 'framer-motion';

// Load only the features we need
const loadFeatures = () =>
    import('framer-motion').then((mod) => mod.domAnimation);

export default function MotionProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LazyMotion features={loadFeatures} strict>
            {children}
        </LazyMotion>
    );
}
