'use client';

import { CaseStudyHero } from '@/components/portfolio/ui';

export function HeroSection() {
  return (
    <CaseStudyHero
      badge="UX/UI Design Case Study"
      title="Post & Carousel Generator"
      subtitle="Revolutionizing carousel creation for social media with AI-powered content generation and professional templates"
      image={{
        src: '/portfolios/carousel-builder/Captura de tela 2025-08-01 001703.png',
        alt: 'Post & Carousel Generator Interface'
      }}
    />
  );
}
