'use client';

import { CaseStudySection } from '@/components/portfolio/ui';

export function ConclusionSection() {
    return (
        <CaseStudySection title="7. Conclusion: The Designer Who Builds">
            <p>
                This project proves that the future of UX Design is <strong className="text-foreground">technical orchestration</strong>. I stopped being a victim of generic tool limits and became the architect of my own solutions. Magic Builder is now the engine that allows me to deliver with startup speed and enterprise quality.
            </p>
            <div className="mt-8 p-6 bg-secondary/20 rounded-lg border border-border/50">
                <p className="text-xl font-medium text-foreground italic text-center">
                    &quot;Nobody asked me to build this. I was the user, I felt the pain, and I had the tools — so I built the infrastructure that gave me my time back.&quot;
                </p>
            </div>
        </CaseStudySection>
    );
}
