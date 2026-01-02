'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Eye, Target } from 'lucide-react';

export function ProblemSection() {
  const painPoints = [
    {
      icon: <Clock className='w-6 h-6' />,
      title: 'Excessive Time',
      description:
        '30+ minutes to create a simple carousel, often without professional results',
    },
    {
      icon: <Users className='w-6 h-6' />,
      title: 'Lack of Skills',
      description: 'Creators without technical design knowledge are limited',
    },
    {
      icon: <Eye className='w-6 h-6' />,
      title: 'Limited Inspiration',
      description: 'Absence of visual references and professional templates',
    },
    {
      icon: <Target className='w-6 h-6' />,
      title: 'Inconsistent Quality',
      description:
        "Varied results depending on the creator's experience and skills",
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
          The Real Challenge
        </h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            Content creators face the daily challenge of producing professional
            carousels for social media. The traditional process involves
            multiple time-consuming and technical steps that often result in
            frustration and inconsistent results.
          </p>
        </div>

        {/* Pain Points */}
        <div className='grid md:grid-cols-2 gap-6'>
          {painPoints.map((pain, index) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className='bg-card border border-border/20 rounded-xl p-6 space-y-4'
            >
              <div className='text-primary'>{pain.icon}</div>
              <div>
                <h3 className='font-semibold text-foreground text-lg'>
                  {pain.title}
                </h3>
                <p className='text-muted-foreground mt-2'>{pain.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
