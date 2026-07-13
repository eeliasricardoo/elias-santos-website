'use client';

import { CaseStudySection, MetricsGrid, type MetricItem } from '@/components/portfolio/ui';

const metrics: MetricItem[] = [
    { value: '15,000+', label: 'Active Users Capacity' },
    { value: '92% ↓', label: 'Hosting/DB Costs' },
    { value: 'O(1)', label: 'Query Lookups Complexity' },
    { value: '<0.8s', label: 'LCP Loading Time' },
];

export function ResultsSection() {
    return (
        <CaseStudySection eyebrow="Impact" index={5} title="Results and performance">
            <p>
                Migrating away from pre-packaged auth services and Deno runtime loops resulted in measurable performance gains:
            </p>

            <MetricsGrid metrics={metrics} />

            <ul className="list-disc pl-6 space-y-4 mt-8">
                <li>
                    <strong className="text-foreground">User Scale:</strong> Seamlessly handles over <strong className="text-foreground">15,000 simultaneous users</strong>, compared to the initial platform's threshold of 50.
                </li>
                <li>
                    <strong className="text-foreground">Hosting Efficiency:</strong> Operating costs were slashed from an average of $25/mo to <strong className="text-foreground">$0-$19/mo (a 92% reduction)</strong>, driven by serverless Neon DB sleep-on-idle behaviors.
                </li>
                <li>
                    <strong className="text-foreground">Database Speeds:</strong> Eliminating O(n) loops inside Deno Webhooks in favor of indexed direct lookup SQL routines boosted lookup performance by <strong className="text-foreground">15,000x</strong>.
                </li>
                <li>
                    <strong className="text-foreground">LCP Speed:</strong> Optimizations to the static hydration layers and Bunny CDN media delivery resulted in a Largest Contentful Paint under <strong className="text-foreground">0.8 seconds</strong>.
                </li>
            </ul>
        </CaseStudySection>
    );
}
