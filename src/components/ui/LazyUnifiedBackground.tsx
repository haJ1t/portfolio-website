'use client';

import dynamic from 'next/dynamic';

const UnifiedBackground = dynamic(() => import('./UnifiedBackground'), {
    ssr: false,
    loading: () => null,
});

export default function LazyUnifiedBackground() {
    return <UnifiedBackground />;
}
