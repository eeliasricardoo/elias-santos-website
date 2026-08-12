'use client';

import { CaseStudyHero } from '@/components/portfolio/ui';

export function HeroSection() {
  return (
    <CaseStudyHero
      brand="red"
      badge="Real Client Project · UX/UI & Accessibility Case Study"
      title="Streaming Platform"
      subtitle="A premium video streaming platform built for a real streaming client (name withheld for confidentiality), designed from scratch with a rigorous focus on accessibility for older adults. Engineered with oversized buttons, simplified visual paths, and a high-performance system actively supporting 300 concurrent users."
      image={{
        src: '/portfolios/netflix/hero-featured.jpg',
        alt: 'Accessible streaming platform interface'
      }}
      video={{
        src: '/portfolios/netflix/a_da_ca_fba_dmp_.mp4'
      }}
    />
  );
}
