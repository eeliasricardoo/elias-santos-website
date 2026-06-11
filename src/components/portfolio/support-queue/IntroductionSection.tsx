'use client';

import { CaseStudySection, MetricsGrid, type MetricItem } from '@/components/portfolio/ui';
import { Card, CardContent } from '@/components/ui/card';

const metrics: MetricItem[] = [
  { value: '22%', label: 'Response Time Reduction' },
  { value: '4.1 → 4.3', label: 'CSAT Improvement' },
  { value: '-9%', label: 'Reopened Tickets Drop' },
];

export function IntroductionSection() {
  return (
    <CaseStudySection title="Analysis & Results">
      <p>
        We identified ~
        <strong className="text-foreground">
          30s delay between customer arrival and first human contact
        </strong>
        . To reduce it, we combined two targeted improvements — waiting‑time
        queue ordering and a pop‑up for immediate assignment.
      </p>

      <p>
        Our goal was to make the experience smoother for both customers and
        agents, aiming to{' '}
        <strong className="text-foreground">
          reduce response time by ≥20%
        </strong>{' '}
        without increasing UI complexity or agent workload.
      </p>

      <MetricsGrid metrics={metrics} />

      {/* Project Context Card */}
      <div className="mt-8">
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">
                Project Context
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Product:</span>
                  <span className="text-foreground">
                    Support platform (web & mobile)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">My role:</span>
                  <span className="text-foreground">
                    UX/UI — research, flows, and metrics
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Origin:</span>
                  <span className="text-foreground">Client request</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Stakeholders:</span>
                  <span className="text-foreground">
                    Support, CS, QA, Engineering
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CaseStudySection>
  );
}
