'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PortfolioCard } from './PortfolioCard';

// Dados dos cards de portfolio
const portfolioCards = [
  {
    id: 1,
    title: 'Ranking: Gamified Engagement and Competitiveness',
    description:
      'Designed and developed a comprehensive ranking system that increased student engagement by 40% and improved performance tracking across educational institutions. Features flexible criteria configuration and real-time analytics.',
    buttonText: 'View Case Study',
  },
  {
    id: 2,
    title: 'Weighted Average: Greater Flexibility for Test Configuration',
    description:
      'Engineered an intelligent assessment platform that reduced test configuration time by 60% while improving evaluation accuracy. Enables institutions to customize test weights and criteria to align with specific learning objectives.',
    buttonText: 'Coming Soon',
  },
  {
    id: 3,
    title: 'UX Research & Service Design',
    description:
      'Led end-to-end research initiatives and service design projects that resulted in 35% improvement in user satisfaction scores. Specialized in user journey mapping, usability testing, and strategic design thinking.',
    buttonText: 'Explore Work',
  },
];

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      id='portfolio'
      ref={sectionRef}
      className='relative py-24 px-4 overflow-hidden'
    >
      <div className='max-w-7xl mx-auto space-y-16'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center space-y-6'
        ></motion.div>

        {/* Cards com scroll da página */}
        <div className='relative space-y-8 min-h-[80vh]'>
          {portfolioCards.map((card, index) => (
            <PortfolioCard
              key={card.id}
              card={card}
              index={index}
              totalCards={portfolioCards.length}
            />
          ))}
        </div>

        {/* Elementos decorativos de fundo com parallax */}
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <motion.div
            className='absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float'
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -50]),
            }}
          />
          <motion.div
            className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-muted/10 rounded-full blur-3xl animate-float'
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, 30]),
              animationDelay: '2s',
            }}
          />
        </div>
      </div>
    </section>
  );
}
