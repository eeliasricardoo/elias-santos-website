'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Palette, Edit3, MessageSquare } from 'lucide-react';

export function SolutionSection() {
  const features = [
    {
      icon: <Brain className='w-6 h-6' />,
      title: 'Intelligent Generative AI',
      description:
        'OpenRouter API generates relevant and structured content automatically',
    },
    {
      icon: <Palette className='w-6 h-6' />,
      title: 'Professional Templates',
      description:
        '9 specialized templates with optimized content for different niches',
    },
    {
      icon: <Edit3 className='w-6 h-6' />,
      title: 'Advanced Editor',
      description:
        'TipTap for rich formatting and complete customization of each element',
    },
    {
      icon: <MessageSquare className='w-6 h-6' />,
      title: 'Conversational Interface',
      description:
        'Side chat for natural interaction with AI, maintaining context and history',
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
          The Visionary Solution
        </h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            The answer to this challenge came through the combination of{' '}
            <strong className='text-foreground'>generative AI</strong>
            with <strong className='text-foreground'>intuitive design</strong>.
            We created a tool that transforms the carousel creation process from
            a complex technical task into a fluid and productive experience.
          </p>

          <p>
            The{' '}
            <strong className='text-foreground'>
              Post & Carousel Generator
            </strong>{' '}
            was born from the vision of democratizing professional content
            creation, allowing anyone, regardless of their design skills, to
            create impactful carousels in minutes.
          </p>
        </div>

        {/* Solution Features */}
        <div className='grid md:grid-cols-2 gap-6'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className='bg-card border border-border/20 rounded-xl p-6 space-y-4'
            >
              <div className='text-primary'>{feature.icon}</div>
              <div>
                <h3 className='font-semibold text-foreground text-lg'>
                  {feature.title}
                </h3>
                <p className='text-muted-foreground mt-2'>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
