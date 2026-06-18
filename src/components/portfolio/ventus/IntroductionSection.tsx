'use client';

import { CaseStudySection, MetricsGrid, type MetricItem } from '@/components/portfolio/ui';

const metrics: MetricItem[] = [
  { value: '4+', label: 'AI Models Orchestrated' },
  { value: 'Streaming', label: 'Real-time Multimodal' },
  { value: '1 wk', label: 'Concept → Working Lab' },
  { value: '100%', label: 'Patterns Reused in Client Work' },
];

export function IntroductionSection() {
  return (
    <CaseStudySection title="Why I built my own lab">
      <p>
        Reading docs only gets you so far. To trust a pattern in production —
        token streaming, multimodal generation, switching models mid-conversation —
        I need to have built it, broken it, and fixed it myself first.
      </p>

      <p>
        So I built ChatAI: a personal workspace where I run new AI capabilities
        end to end before a client deadline forces me to. It&apos;s not a product
        pitch — it&apos;s the place I de-risk the techniques I later ship for real.
      </p>

      <p>
        <strong className="text-foreground">The constraint I set myself:</strong>{' '}
        design and build a working multimodal AI workspace in one week — chat,
        image analysis, generation, persistent history — and only keep patterns
        clean enough to reuse on real work.
      </p>

      <MetricsGrid metrics={metrics} />
    </CaseStudySection>
  );
}
