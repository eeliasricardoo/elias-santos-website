'use client';

import { CaseStudyHero } from '@/components/portfolio/ui';

export function HeroSection() {
  return (
    <CaseStudyHero
      brand="cyan"
      badge="R&D / Engineering Case Study"
      title="ChatAI — My AI R&D Lab"
      subtitle="Where I master new AI patterns hands-on — streaming, multimodal generation, model orchestration — before they reach client work. Built so I'm never learning a pattern for the first time on a production deadline."
      video={{
        src: '/portfolios/ventus/new_recording_-_7_18_2025,_5_39_16_pm (1080p).mp4'
      }}
    />
  );
}
