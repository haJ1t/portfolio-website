'use client';

import dynamic from 'next/dynamic';

const CursorTrail = dynamic(() => import('./CursorTrail'), {
    ssr: false,
    loading: () => null,
});

export default function LazyCursorTrail() {
    return <CursorTrail />;
}
