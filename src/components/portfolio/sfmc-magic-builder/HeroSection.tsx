'use client';

import { CaseStudyHero } from '@/components/portfolio/ui';

export function HeroSection() {
    return (
        <CaseStudyHero
            badge="UX Engineering Case Study"
            title="SFMC Magic Builder"
            subtitle="The Triad of UX, AI, and Code: How I built my own infrastructure to scale CRM production."
            image={{
                src: '/portfolios/sfmc-magic-builder/cover.png',
                alt: 'SFMC Magic Builder Interface'
            }}
        />
    );
}
