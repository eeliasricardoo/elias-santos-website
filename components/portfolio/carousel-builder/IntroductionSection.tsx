'use client';

import { motion } from 'framer-motion';

export function IntroductionSection() {
  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-6'
      >
        <h2 className='text-3xl font-bold text-foreground'>
          The Challenge: Content Creation at Scale
        </h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            In the digital age, content creation has become a bottleneck for
            professionals and businesses. Creating engaging carousels for
            LinkedIn, Instagram, and other social platforms requires significant
            time investment, design skills, and creative thinking.
          </p>

          <p>
            The challenge was clear:{' '}
            <strong className='text-foreground'>
              how to reduce the time and effort required to create
              professional-quality carousels while maintaining creativity and
              engagement?
            </strong>
          </p>

          <p>
            This case study explores the design and development of an AI-powered
            tool that revolutionizes carousel creation, reducing creation time
            by 90% while maintaining professional quality.
          </p>
        </div>

        {/* Key Metrics */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
          >
            <div className='text-3xl font-bold text-foreground'>90%</div>
            <div className='text-sm text-muted-foreground'>Time Reduction</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
          >
            <div className='text-3xl font-bold text-green-500'>15min</div>
            <div className='text-sm text-muted-foreground'>Creation Time</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
          >
            <div className='text-3xl font-bold text-blue-500'>50+</div>
            <div className='text-sm text-muted-foreground'>Templates</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
          >
            <div className='text-3xl font-bold text-purple-500'>4.8/5</div>
            <div className='text-sm text-muted-foreground'>User Rating</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
