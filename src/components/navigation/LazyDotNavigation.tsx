'use client';

import dynamic from 'next/dynamic';

const DotNavigation = dynamic(() => import('./DotNavigation'), {
    ssr: false,
    loading: () => null,
});

export default function LazyDotNavigation() {
    return <DotNavigation />;
}
