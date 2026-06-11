'use client';

import { CaseStudySection } from '@/components/portfolio/ui';

export function JourneySection() {
    return (
        <CaseStudySection title="4. The Journey: UX Engineering with Lovable & Cursor">
            <p>
                I realized that if the tool I needed didn't exist, I had to build it — without asking for budget, a dev team, or permission. I started an AI-assisted development cycle:
            </p>
            <ul className="list-disc pl-6 space-y-4">
                <li>
                    <strong className="text-foreground">Functional Ideation (Lovable):</strong> I prototyped the interface focusing on <strong className="text-foreground">Utility UX</strong>. The design had to &quot;disappear&quot; so the function could shine: raw code in, polished code out.
                </li>
                <li>
                    <strong className="text-foreground">Precision Engineering (Cursor):</strong> I moved the project to Cursor to code rigid business rules. I created sanitization algorithms that AI alone couldn't maintain consistently, ensuring the HTML followed global rendering standards.
                </li>
            </ul>
        </CaseStudySection>
    );
}
