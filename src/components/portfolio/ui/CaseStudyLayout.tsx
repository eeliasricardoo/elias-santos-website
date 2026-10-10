'use client';

import { PROJECT_BRANDS, type BrandColor } from '@/constants/project-brands';
import { Clouds } from '@/components/pixel/hero-fx';
import { useEffect, type CSSProperties } from 'react';
import { MotionGlobalConfig } from 'framer-motion';
import { useMotionOff } from '@/components/pixel/motion-prefs';

interface CaseStudyLayoutProps {
    children: React.ReactNode;
    /** Brand color for this case study — exposed as `--brand` to descendants. */
    brand?: BrandColor;
}

export function CaseStudyLayout({ children, brand }: CaseStudyLayoutProps) {
    // Section islands share one framer-motion instance: skipping here skips everywhere,
    // for both the OS "reduce motion" setting and the site's pause toggle.
    const motionOff = useMotionOff();
    useEffect(() => {
        MotionGlobalConfig.skipAnimations = motionOff;
    }, [motionOff]);

    const brandStyle = brand
        ? ({ '--brand': PROJECT_BRANDS[brand].bg } as CSSProperties)
        : undefined;

    return (
        <div className="px-case relative overflow-x-clip" style={brandStyle}>
            {/* Utopia sky behind the hero, fading into the cream page */}
            <div className="px-case-sky pointer-events-none absolute inset-x-0 top-0 h-[900px]" aria-hidden="true">
                <Clouds count={3} />
            </div>

            <main id="main-content" className="relative max-w-4xl mx-auto py-12 px-4 flex flex-col gap-24 pt-16 min-h-screen">
                {children}
            </main>
        </div>
    );
}
