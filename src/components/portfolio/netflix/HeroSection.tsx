'use client';

import { CaseStudyHero } from '@/components/portfolio/ui';

export function HeroSection() {
  return (
    <CaseStudyHero
      brand="red"
      badge="UX/UI & Accessibility Case Study"
      title="DramaFlix"
      subtitle="A premium video streaming platform designed from scratch with a rigorous focus on accessibility for older adults. Engineered with oversized buttons, simplified visual paths, and a high-performance system actively supporting 300 concurrent users."
      image={{
        src: '/portfolios/netflix/hero-featured.jpg',
        alt: 'DramaFlix accessible streaming platform'
      }}
      video={{
        src: '/portfolios/netflix/a_da_ca_fba_dmp_.mp4'
      }}
    />
  );
}
