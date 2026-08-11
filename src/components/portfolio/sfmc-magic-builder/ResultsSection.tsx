'use client';

import { CaseStudySection, MetricsGrid, type MetricItem } from '@/components/portfolio/ui';

const metrics: MetricItem[] = [
    { value: '80 → 10–20 min', label: 'Campaign production time' },
    { value: 'Client-side', label: 'Processing model' },
    { value: 'Deterministic', label: 'Transformation rules' },
];

export function ResultsSection() {
    return (
        <CaseStudySection eyebrow="Outcome" index={9} title="A shorter, more verifiable workflow">
            <p>
                The measurable result was a reduction in campaign production time from approximately <strong className="text-foreground">80 minutes to 10–20 minutes per campaign</strong>. The tool also moved the risky steps into visible, repeatable checks.
            </p>

            <MetricsGrid metrics={metrics} />

            <ul className="list-disc pl-6 space-y-4 mt-8">
                <li>
                    <strong className="text-foreground">Production time:</strong> Approximately 80 minutes to 10–20 minutes per campaign.
                </li>
                <li>
                    <strong className="text-foreground">Verification:</strong> Image URLs, links, AMPScript placement, and processed output became visible checks in the workflow.
                </li>
                <li>
                    <strong className="text-foreground">Processing:</strong> The app runs client-side, so customer HTML stays in the browser during processing.
                </li>
            </ul>
        </CaseStudySection>
    );
}
