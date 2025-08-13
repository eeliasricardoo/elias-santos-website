'use client';

import { useRef } from 'react';
import { PortfolioCard } from './PortfolioCard';

const portfolioCards = [
  {
    id: 1,
    title: 'ChatAI: Personal AI Ecosystem',
    description:
      'Personal AI ecosystem with unified chat, screenshot analysis, and multimodal generation. Long‑term memory, reusable prompts, and context‑aware tools. Built with Next.js and streaming; ~75% cheaper than commercial alternatives. Productivity‑focused: fast responses, organized history, and reusable flows.',
    buttonText: 'View Case Study',
    image: '/portfolios/ventus/v9.png',
    imageAlt: 'Chat AI interface',
  },
  {
    id: 2,
    title: 'Carousel Builder: No‑Code Platform',
    description:
      'No‑code tool to create professional carousels in minutes: drag‑and‑drop, ready‑made templates, theme editor, export to React/HTML/PNG, and performance optimizations (lazy loading and responsive images). Includes AI text generation, autosave, version history, and real‑time preview. Outcome: ~90% reduction in content production time and consistent visuals across channels.',
    buttonText: 'View Case Study',
    image: '/portfolios/carousel-builder/Captura de tela 2025-07-27 040136.png',
    imageAlt: 'Carousel Builder preview',
  },
  {
    id: 3,
    title: 'Ranking: Gamification Engine',
    description:
      'Gamification engine with weekly and monthly leaderboards, badges, levels, and dynamic scoring (ELO‑inspired). Admin panel for rules, bulk imports, and audit. Smart caching, SSR, and pagination for high load. Impact: +40% engagement and clear goal tracking by class/team.',
    buttonText: 'View Case Study',
    image: '/portfolios/ranking/ranking.png',
    imageAlt: 'Ranking System interface',
  },
  {
    id: 4,
    title: 'Feat UX/UI — Support Queue — Omnichannel Chat',
    description:
      'UX/UI case study that reduced customer wait time by 22% through intelligent queue management and a persistent notification system. Key improvements: waiting-time queue ordering and actionable assignment pop-ups. Results: 22% faster response time, improved CSAT from 4.1 to 4.3, and 9% fewer reopened tickets.',
    buttonText: 'View Case Study',
    image: '/portfolios/fila-atendimento/1.png',
    imageAlt: 'Support Queue — Omnichannel Chat',
  },
];

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id='portfolio'
      data-section='portfolio'
      ref={sectionRef}
      className='relative py-14 md:py-20 px-0 overflow-hidden'
      style={{ position: 'relative' }}
    >
      <div className='relative flex flex-col gap-16 md:gap-24'>
        {portfolioCards.map((card, index) => (
          <PortfolioCard
            key={card.id}
            card={card}
            index={index}
            totalCards={portfolioCards.length}
          />
        ))}
      </div>
    </section>
  );
}
