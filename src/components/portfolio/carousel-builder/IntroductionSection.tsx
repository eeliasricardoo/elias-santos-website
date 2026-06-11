'use client';

import { CaseStudySection, MetricsGrid, type MetricItem } from '@/components/portfolio/ui';

const metrics: MetricItem[] = [
  { value: '90%', label: 'Time Reduction' },
  { value: '15min', label: 'Creation Time' },
  { value: '50+', label: 'Templates' },
  { value: '4.8/5', label: 'User Rating' },
];

export function IntroductionSection() {
  return (
    <CaseStudySection title="The Challenge: Content Creation at Scale">
      <p>
        In the digital age, content creation has become a bottleneck for
        professionals and businesses. Creating engaging carousels for
        LinkedIn, Instagram, and other social platforms requires significant
        time investment, design skills, and creative thinking.
      </p>

      <p>
        The challenge was clear:{' '}
        <strong className="text-foreground">
          how to reduce the time and effort required to create
          professional-quality carousels while maintaining creativity and
          engagement?
        </strong>
      </p>

      <p>
        This case study explores the design and development of an AI-powered
        tool that revolutionizes carousel creation, reducing creation time
        by 90% while maintaining professional quality.
      </p>

      <MetricsGrid metrics={metrics} />
    </CaseStudySection>
  );
}
