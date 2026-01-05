'use client';

import { CaseStudySection, MetricsGrid, type MetricItem } from '@/components/portfolio/ui';

const metrics: MetricItem[] = [
  { value: '1', label: 'Week Development' },
  { value: '75%', label: 'Cost Reduction', color: 'text-green-500' },
  { value: '20%', label: 'Efficiency Increase', color: 'text-blue-500' },
  { value: '9.5/10', label: 'Security Score', color: 'text-purple-500' },
];

export function IntroductionSection() {
  return (
    <CaseStudySection title="The Challenge: Forging My Own Tool">
      <p>
        During a career transition moment, I faced a challenge that drove my
        creativity: the need for cutting-edge AI tools for my personal
        projects, but without the prohibitive costs of subscriptions. Market
        solutions were a paradox: free ones were limited, and paid ones were
        a financial drain.
      </p>

      <p>
        It was in this scenario that ChatAI was born, not as an academic
        exercise, but as a pragmatic solution to a real and immediate
        problem: <strong className="text-foreground">mine</strong>.
      </p>

      <p>
        <strong className="text-foreground">The goal was clear:</strong>{' '}
        design and build, in one week, a personal AI ecosystem that was
        radically cheaper, fully customizable, and superior to the workflow
        offered by existing tools.
      </p>

      <MetricsGrid metrics={metrics} />
    </CaseStudySection>
  );
}
