'use client';

import { CaseStudySection, MetricsGrid, type MetricItem } from '@/components/portfolio/ui';

const metrics: MetricItem[] = [
    { value: '10 min', label: 'Production Time (from 80m)' },
    { value: '-87.5%', label: 'Efficiency Gain' },
    { value: 'Zero', label: 'Human/AI Errors' },
    { value: 'Instant', label: 'Client-Side Processing' },
];

export function ResultsSection() {
    return (
        <CaseStudySection title="6. Results and Performance">
            <p>
                The efficiency of the <strong className="text-foreground">UX + AI + Code</strong> triad was measured in real-time:
            </p>

            <MetricsGrid metrics={metrics} />

            <ul className="list-disc pl-6 space-y-4 mt-8">
                <li>
                    <strong className="text-foreground">Production Time:</strong> From 80 minutes to <strong className="text-foreground">10 minutes</strong> per email (<strong className="text-foreground">-87.5%</strong>).
                </li>
                <li>
                    <strong className="text-foreground">Data Quality:</strong> Human errors and AI hallucinations were reduced to <strong className="text-foreground">zero</strong>.
                </li>
                <li>
                    <strong className="text-foreground">Vercel Performance:</strong> Processing happens <em>client-side</em>. This means it's instant and secure (data never leaves the browser).
                </li>
            </ul>
        </CaseStudySection>
    );
}
