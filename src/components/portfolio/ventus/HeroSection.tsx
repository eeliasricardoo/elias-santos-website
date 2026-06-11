'use client';

import { CaseStudyHero } from '@/components/portfolio/ui';

export function HeroSection() {
  return (
    <CaseStudyHero
      brand="cyan"
      badge="Product Case Study"
      title="ChatAI - From Need to Innovation in One Week"
      subtitle="The journey of creating my own AI tool to solve a real problem: building a personal AI ecosystem that's radically cheaper, fully customizable, and superior to existing workflows"
      video={{
        src: '/portfolios/ventus/new_recording_-_7_18_2025,_5_39_16_pm (1080p).mp4'
      }}
    />
  );
}
