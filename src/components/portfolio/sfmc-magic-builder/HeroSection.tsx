'use client';

import { CaseStudyHero } from '@/components/portfolio/ui';

export function HeroSection() {
    return (
        <CaseStudyHero
            brand="lime"
            badge="UX Engineering Case Study"
            title="SFMC Magic Builder"
            subtitle="I was the designer producing campaign emails at Serasa Experian. Every change took too long — so I built the tool that cut production from 80 minutes to 10."
            image={{
                src: '/portfolios/sfmc-magic-builder/cover.png',
                alt: 'SFMC Magic Builder Interface'
            }}
        />
    );
}
