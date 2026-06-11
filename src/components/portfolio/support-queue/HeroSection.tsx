'use client';

import { CaseStudyHero } from '@/components/portfolio/ui';

export function HeroSection() {
  return (
    <CaseStudyHero
      brand="pink"
      badge="UX/UI Design • Case Study"
      title="Feat UX/UI — Support Queue — Omnichannel Chat"
      subtitle="We reduced ~30s delays between customer arrival and first human contact through two targeted improvements: waiting-time queue ordering and a pop-up for immediate assignment."
      image={{
        src: '/portfolios/fila-atendimento/1.png',
        alt: 'Support Queue — Omnichannel Chat overview'
      }}
    />
  );
}
