'use client';

import { CaseStudySection } from '@/components/portfolio/ui';

export function PhilosophySection() {
    return (
        <CaseStudySection title="1. The Philosophy: Solve your own pain first">
            <p>
                In Product Design, many people try to solve theoretical problems without feeling the friction themselves. My approach was pragmatic: <strong className="text-foreground">If I can’t use UX and AI to optimize my own daily work, how can I design efficient solutions for millions of people?</strong>
            </p>
            <p>
                Magic Builder wasn't born as a portfolio piece; it was a survival tool created while I was managing high-demand email marketing for <strong className="text-foreground">Serasa</strong> (a major Brazilian data company).
            </p>
        </CaseStudySection>
    );
}
