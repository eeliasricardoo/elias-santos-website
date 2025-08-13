'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Palette,
  Edit3,
  MessageSquare,
  Layout,
  Download,
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: <Brain className='w-6 h-6' />,
      title: 'AI Content Generation',
      description: 'Intelligent content creation using OpenRouter API',
    },
    {
      icon: <Palette className='w-6 h-6' />,
      title: 'Professional Templates',
      description: '9 specialized templates for different content types',
    },
    {
      icon: <Edit3 className='w-6 h-6' />,
      title: 'Visual Editor',
      description:
        'Advanced TipTap editor with rich formatting and customization options',
    },
    {
      icon: <MessageSquare className='w-6 h-6' />,
      title: 'AI Chat Interface',
      description:
        'Natural conversation with AI for content generation and modifications',
    },
    {
      icon: <Layout className='w-6 h-6' />,
      title: 'Interactive Canvas',
      description:
        'Drag-and-drop interface for precise element positioning and layout',
    },
    {
      icon: <Download className='w-6 h-6' />,
      title: 'PDF Export',
      description: 'High-quality PDF export ready for social media sharing',
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
        <h2 className='text-3xl font-bold text-foreground'>Key Features</h2>

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
