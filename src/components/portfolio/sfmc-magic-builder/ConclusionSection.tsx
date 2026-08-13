'use client';

import { CaseStudySection } from '@/components/portfolio/ui';

export function ConclusionSection() {
    return (
        <CaseStudySection eyebrow="Reflection" index={10} title="The designer who builds">
            <p>
                EmailFlow Pro changed how I work: when a tool limits the team, I treat that as a design problem and fix it. The same loop — <strong className="text-foreground">understand, design, ship, measure</strong> — now runs through everything I build.
            </p>
            <div className="mt-8 p-6 bg-secondary/20 rounded-lg border border-border/50">
                <p className="text-xl font-medium text-foreground italic text-center">
                    &quot;Nobody asked me to build this. I was the user, I felt the pain, and I had the tools — so I built the infrastructure that gave me my time back.&quot;
                </p>
            </div>
        </CaseStudySection>
    );
}
