'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PortfolioCard } from './PortfolioCard';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import Link from 'next/link';

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
    title: 'Carrossel Builder AI: Intelligent Story Creation',
    description:
      'Developed an AI-powered carousel builder that generates engaging social media content automatically. Features intelligent story sequencing, dynamic content adaptation, and seamless integration with Instagram and LinkedIn.',
    buttonText: 'View Case Study',
  },
  {
    id: 3,
    title: 'ChatAI: Personal AI Ecosystem',
    description:
      'Built my own AI tool in one week to solve a real problem: creating a personal AI ecosystem that&apos;s 75% cheaper, fully customizable, and superior to existing workflows. Features unified chat interface, screenshot analysis, and multimodal generation.',
    buttonText: 'View Case Study',
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
      className='relative py-16 px-4 overflow-hidden'
    >
      <div className='max-w-7xl mx-auto space-y-12'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center space-y-4'
        ></motion.div>

        {/* Cards com scroll da página */}
        <div className='relative space-y-6 min-h-[70vh]'>
          {portfolioCards.map((card, index) => (
            <PortfolioCard
              key={card.id}
              card={card}
              index={index}
              totalCards={portfolioCards.length}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-center space-y-8'
        >
          {/* Background glow effect */}
          <div className='absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 blur-3xl rounded-3xl -z-10'></div>
          
          {/* Content container */}
          <div className='relative bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-border/20 rounded-3xl p-8 shadow-2xl shadow-primary/5'>
            <div className='space-y-6'>
              {/* Title */}
              <div className='space-y-3'>
                <h3 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent'>
                  Ready to explore more?
                </h3>
                <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                  Discover complete case studies with detailed research, user personas, and real-world results that demonstrate the full impact of these solutions.
                </p>
              </div>
              
              {/* Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='flex justify-center'
              >
                <Link href='/portfolio'>
                  <RainbowButton className='px-10 py-5 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
                    <span className='flex items-center gap-3'>
                      Explore All Projects
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </span>
                  </RainbowButton>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

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
