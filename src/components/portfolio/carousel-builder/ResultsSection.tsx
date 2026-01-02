'use client';

import { motion } from 'framer-motion';
import { Clock, TrendingUp, Users } from 'lucide-react';

export function ResultsSection() {
  const metrics = [
    {
      icon: <Clock className='w-6 h-6' />,
      title: '90% Time Reduction',
      description: 'From hours to minutes for carousel creation',
    },
    {
      icon: <TrendingUp className='w-6 h-6' />,
      title: 'Professional Quality',
      description: 'Consistent, high-quality results for all users',
    },
    {
      icon: <Users className='w-6 h-6' />,
      title: 'Democratized Creation',
      description: 'Accessible to creators of all skill levels',
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
        <h2 className='text-3xl font-bold text-foreground'>Results & Impact</h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            The Post & Carousel Generator has transformed the way content
            creators work, providing significant improvements in efficiency and
            quality.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className='grid md:grid-cols-3 gap-6'>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className='bg-card border border-border/20 rounded-xl p-6 text-center space-y-4'
            >
              <div className='text-primary mx-auto'>{metric.icon}</div>
              <div>
                <h3 className='font-semibold text-foreground text-lg'>
                  {metric.title}
                </h3>
                <p className='text-muted-foreground mt-2'>
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
