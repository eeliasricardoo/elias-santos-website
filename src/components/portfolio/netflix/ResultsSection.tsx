'use client';

import { CaseStudySection, MetricsGrid, type MetricItem } from '@/components/portfolio/ui';

const metrics: MetricItem[] = [
    { value: '300', label: 'Concurrent Active Users' },
    { value: '48px+', label: 'Min Touch Target' },
    { value: '92% ↓', label: 'Hosting/DB Costs' },
    { value: '<0.8s', label: 'LCP Loading Time' },
];

export function ResultsSection() {
    return (
        <CaseStudySection eyebrow="Impact" index={5} title="Results and performance">
            <p>
                Migrating to our custom serverless stack and building with high accessibility principles created significant visual and infrastructure results:
            </p>

            <MetricsGrid metrics={metrics} />

            <ul className="list-disc pl-6 space-y-4 mt-8">
                <li>
                    <strong className="text-foreground">Simultaneous Users:</strong> The platform easily supports more than <strong className="text-foreground">300 concurrent users</strong> actively streaming videos simultaneously with zero buffering.
                </li>
                <li>
                    <strong className="text-foreground">Acessibilidade UI:</strong> Reached full compliance on tap dimensions, using minimum <strong className="text-foreground">48px targets</strong> to provide comfort for elder hands and prevent input errors.
                </li>
                <li>
                    <strong className="text-foreground">Hosting Efficiency:</strong> Operating costs were slashed from an average of $25/mo to <strong className="text-foreground">$0-$19/mo (a 92% reduction)</strong>, driven by serverless Neon DB sleep-on-idle behaviors.
                </li>
                <li>
                    <strong className="text-foreground">Database Speeds:</strong> Eliminating O(n) loops inside Deno Webhooks in favor of indexed direct lookup SQL routines boosted lookup performance by <strong className="text-foreground">15,000x</strong> (O(1) search complexity).
                </li>
            </ul>
        </CaseStudySection>
    );
}
