'use client';

import { motion } from 'framer-motion';
import {
  Lightbulb,
  Rocket,
  Brain,
  Palette,
  Edit3,
  MessageSquare,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

export function DevelopmentJourneySection() {
  const phases = [
    {
      phase: 'Phases 1-2',
      title: 'Brainstorm & Design',
      description:
        'Product definition through AI brainstorming and initial wireframe creation',
      icon: <Lightbulb className='w-5 h-5' />,
    },
    {
      phase: 'Phases 3-4',
      title: 'Setup & MVP',
      description: 'Development environment setup and functional MVP creation',
      icon: <Rocket className='w-5 h-5' />,
    },
    {
      phase: 'Phases 5-7',
      title: 'AI Integration',
      description:
        'OpenRouter API integration and AI content generation implementation',
      icon: <Brain className='w-5 h-5' />,
    },
    {
      phase: 'Phases 8-9',
      title: 'Redesign & Export',
      description:
        'Dark mode implementation, modern redesign and PDF export functionality',
      icon: <Palette className='w-5 h-5' />,
    },
    {
      phase: 'Phases 10-12',
      title: 'Visual Builder',
      description:
        'Advanced visual editor development with TipTap and complete customization',
      icon: <Edit3 className='w-5 h-5' />,
    },
    {
      phase: 'Phases 13-15',
      title: 'Canvas & Chat',
      description:
        'Interactive canvas implementation and conversational interface with side chat',
      icon: <MessageSquare className='w-5 h-5' />,
    },
    {
      phase: 'Phases 16-17',
      title: 'Templates & Polish',
      description:
        'Professional template system and advanced formatting float menu',
      icon: <Sparkles className='w-5 h-5' />,
    },
  ];

  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-6'
      >
        <h2 className='text-3xl font-bold text-foreground'>
          The Development Journey
        </h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            The development of the Post & Carousel Generator was a journey of{' '}
            <strong className='text-foreground'>17 structured phases</strong>,
            each representing a milestone in the product&apos;s evolution. We
            started with a simple concept and continuously iterated based on
            user feedback and needs.
          </p>
        </div>

        {/* Development Phases */}
        <div className='space-y-6'>
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className='flex items-start space-x-4 p-6 bg-card border border-border/20 rounded-xl'
            >
              <div className='flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full text-primary'>
                {phase.icon}
              </div>
              <div className='flex-1'>
                <div className='flex items-center space-x-3 mb-2'>
                  <span className='text-sm font-medium text-muted-foreground'>
                    {phase.phase}
                  </span>
                  <CheckCircle className='w-4 h-4' style={{ color: 'var(--brand, #d9f99d)' }} />
                </div>
                <h3 className='font-semibold text-foreground text-lg'>
                  {phase.title}
                </h3>
                <p className='text-muted-foreground mt-1'>
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
