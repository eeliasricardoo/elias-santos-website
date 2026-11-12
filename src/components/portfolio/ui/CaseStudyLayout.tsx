'use client';

import { PROJECT_BRANDS, type BrandColor } from '@/constants/project-brands';
import { useEffect, type CSSProperties } from 'react';
import { MotionGlobalConfig } from 'framer-motion';
import { useMotionOff } from '@/components/pixel/motion-prefs';
import { CaseChapterNav } from './CaseChapterNav';

interface CaseStudyLayoutProps {
    children: React.ReactNode;
    /** Brand color for this case study — exposed as `--brand` to descendants. */
    brand?: BrandColor;
}

/**
 * Case-study canvas. Same container as the landing (max-w-6xl, same gutters);
 * text keeps a reading measure and media uses the full width (see `.px-case`
 * rules in pixel.css). Top-level sections are separated by a hairline rhythm.
 */
export function CaseStudyLayout({ children, brand }: CaseStudyLayoutProps) {
    // Section islands share one framer-motion instance: skipping here skips everywhere,
    // for both the OS "reduce motion" setting and the site's pause toggle.
    const motionOff = useMotionOff();
    useEffect(() => {
        MotionGlobalConfig.skipAnimations = motionOff;
    }, [motionOff]);

    const brandStyle = brand ? ({ '--brand': PROJECT_BRANDS[brand].bg } as CSSProperties) : undefined;

    return (
        <div className="px-case relative overflow-x-clip" style={brandStyle}>
            <CaseChapterNav motionOff={motionOff} />
            <main
                id="main-content"
                className="px-case-main relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-20 pt-10 sm:px-6 sm:pt-16 md:px-12 md:pb-28"
            >
                {children}
            </main>
        </div>
    );
}
