'use client';

import { CaseStudyHero } from '@/components/portfolio/ui';

export function HeroSection() {
    return (
        <CaseStudyHero
            brand="violet"
            badge="UX Engineering Case Study"
            title="EmailFlow Pro"
            subtitle="I was the designer producing campaign emails at Serasa Experian. Every change took too long — so I designed and built the tool that reduced campaign production from approximately 80 minutes to 10–20."
            image={{
                src: '/portfolios/sfmc-magic-builder/interface-top.webp',
                alt: 'EmailFlow Pro interface — HTML editor, image log processor and AMPScript block'
            }}
        />
    );
}
