'use client';

import { CaseStudySection, InfoCard } from '@/components/portfolio/ui';

const evidence = [
    {
        title: 'My role',
        description:
            'I was the designer producing campaign emails at Serasa Experian and the person experiencing the workflow bottleneck. I took the idea from functional prototype to a tested internal tool.',
    },
    {
        title: 'What I designed',
        description:
            'A utility-focused one-screen workflow: HTML editor, image-log processing, AMPScript and link analysis, plus a visible processed-output panel. The interface was designed to make the transformation easy to verify.',
    },
    {
        title: 'What I engineered',
        description:
            'A React client-side app with deterministic sanitization, image-log parsing, filename normalization, AMPScript injection, link analysis, and output checks against real campaigns.',
    },
];

export function RoleSection() {
    return (
        <CaseStudySection eyebrow="My role" index={3} title="Design and implementation were one loop">
            <p>
                This was not a handoff exercise. I defined the workflow around the job I needed to complete, designed the interface that made the steps visible, and built the processing logic that made the result repeatable.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
                {evidence.map((item, index) => (
                    <InfoCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        animationDelay={index * 0.1}
                        variant={item.title === 'What I engineered' ? 'highlighted' : 'default'}
                    />
                ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border/30 pt-5">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Verified stack</span>
                {['React', 'Salesforce Marketing Cloud', 'HTML', 'AMPScript', 'Lovable', 'Cursor'].map((item) => (
                    <span key={item} className="rounded border border-border/40 bg-secondary/20 px-2.5 py-1 font-mono text-xs text-foreground/80">
                        {item}
                    </span>
                ))}
            </div>
        </CaseStudySection>
    );
}
