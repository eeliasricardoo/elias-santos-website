'use client';

import { CaseStudySection } from '@/components/portfolio/ui';

export function ProductAnalysisSection() {
    return (
        <CaseStudySection title="5. Product Analysis: SFMC Magic Builder">
            <p>
                The result is{' '}
                <a
                    href="https://sfmc-magic-builder.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                >
                    sfmc-magic-builder.vercel.app
                </a>
                , a high-performance Single Page Application.
            </p>
            <ul className="list-disc pl-6 space-y-4">
                <li>
                    <strong className="text-foreground">Zero-Friction Interface:</strong> A one-click workflow that cleans code, injects logic, and audits assets simultaneously.
                </li>
                <li>
                    <strong className="text-foreground">Audit Dashboard:</strong> Instead of hunting for errors in the code, the app extracts all links and images into an organized table. This allows for an instant visual scan of protocols (HTTPS) and tracking (UTMs).
                </li>
                <li>
                    <strong className="text-foreground">Trust Layer:</strong> The site shows a detailed &quot;Processing Log.&quot; Knowing exactly what was removed or injected replaces the anxiety of &quot;did it work?&quot; with technical certainty.
                </li>
            </ul>
        </CaseStudySection>
    );
}
