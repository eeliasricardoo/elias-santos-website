'use client';

import { PROJECT_BRANDS, type BrandColor } from '@/constants/project-brands';
import type { CSSProperties } from 'react';

interface CaseStudyLayoutProps {
    children: React.ReactNode;
    /** Brand color for this case study — exposed as `--brand` to descendants. */
    brand?: BrandColor;
}

export function CaseStudyLayout({ children, brand }: CaseStudyLayoutProps) {
    const brandStyle = brand
        ? ({ '--brand': PROJECT_BRANDS[brand].bg } as CSSProperties)
        : undefined;

    return (
        <main
            className="max-w-4xl mx-auto py-12 px-4 flex flex-col gap-24 pt-24 min-h-screen"
            style={brandStyle}
        >
            {/* header removed as it only contained the BackButton */}

            {children}
        </main>
    );
}
