'use client';

import { CaseStudySection, MetricsGrid, type MetricItem } from '@/components/portfolio/ui';

const metrics: MetricItem[] = [
    { value: '300', label: 'Concurrent Active Users' },
    { value: '48px+', label: 'Min Touch Target' },
    { value: '100%', label: 'Contrast Compliance' },
    { value: '<0.8s', label: 'Playback Start Time' },
];

export function ResultsSection() {
    return (
        <CaseStudySection eyebrow="Impact" index={6} title="Results and performance">
            <p>
                Focusing on senior-first design principles combined with an optimized serverless system created substantial results for both usability and active scale:
            </p>

            <MetricsGrid metrics={metrics} />

            <ul className="list-disc pl-6 space-y-4 mt-8">
                <li>
                    <strong className="text-foreground">Active Streaming Audience:</strong> The platform actively supports over <strong className="text-foreground">300 concurrent users</strong> browsing and playing classic cinema streams simultaneously with zero buffering.
                </li>
                <li>
                    <strong className="text-foreground">Tactile Accessibility:</strong> Integrated a strict spacing design system ensuring every primary interactive control uses touch dimensions exceeding <strong className="text-foreground">48px</strong>.
                </li>
                <li>
                    <strong className="text-foreground">Visual Inclusivity:</strong> Complies with WCAG AA requirements for typographic color contrast, preventing visual fatigue and text blur for senior eyes.
                </li>
                <li>
                    <strong className="text-foreground">Instantaneous Feedback:</strong> Compressed playback start latencies to under <strong className="text-foreground">0.8 seconds</strong>, giving users instant confirmation of their actions.
                </li>
            </ul>
        </CaseStudySection>
    );
}
