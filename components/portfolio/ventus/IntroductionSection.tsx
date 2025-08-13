'use client';

import React from 'react';
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
          The Challenge: Forging My Own Tool
        </h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            During a career transition moment, I faced a challenge that drove my
            creativity: the need for cutting-edge AI tools for my personal
            projects, but without the prohibitive costs of subscriptions. Market
            solutions were a paradox: free ones were limited, and paid ones were
            a financial drain.
          </p>

          <p>
            It was in this scenario that ChatAI was born, not as an academic
            exercise, but as a pragmatic solution to a real and immediate
            problem: <strong className='text-foreground'>mine</strong>.
          </p>

          <p>
            <strong className='text-foreground'>The goal was clear:</strong>{' '}
            design and build, in one week, a personal AI ecosystem that was
            radically cheaper, fully customizable, and superior to the workflow
            offered by existing tools.
          </p>
        </div>

        {/* Quantitative Impact Cards */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
          >
            <div className='text-3xl font-bold text-foreground'>1</div>
            <div className='text-sm text-muted-foreground'>
              Week Development
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
          >
            <div className='text-3xl font-bold text-green-500'>75%</div>
            <div className='text-sm text-muted-foreground'>Cost Reduction</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
          >
            <div className='text-3xl font-bold text-blue-500'>20%</div>
            <div className='text-sm text-muted-foreground'>
              Efficiency Increase
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
          >
            <div className='text-3xl font-bold text-purple-500'>9.5/10</div>
            <div className='text-sm text-muted-foreground'>Security Score</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
