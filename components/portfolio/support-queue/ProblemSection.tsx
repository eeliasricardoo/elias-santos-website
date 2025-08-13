'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function ProblemSection() {
  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-6'
      >
        <h2 className='text-3xl font-bold text-foreground'>
          The Queue Management Challenge
        </h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            During our research, we discovered a critical issue that was impacting both customer satisfaction and agent efficiency: <strong className='text-foreground'>agents were missing important alerts</strong> due to insufficient visual emphasis and notification systems.
          </p>

          <p>
            The existing solution relied heavily on sound alerts and subtle queue refreshes, but our analysis revealed that <strong className='text-foreground'>63% of sound alerts did not result in a click</strong>, indicating a significant gap in the notification system.
          </p>
        </div>

        {/* Quote destacada */}
        <div className='relative'>
          <div className='bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg'>
            <blockquote className='text-xl italic text-foreground mb-2'>
              &quot;I only notice the ticket when I return to the Conversations tab. Too much time has already passed.&quot;
            </blockquote>
            <cite className='text-sm text-muted-foreground font-medium'>
              — Agent, field test
            </cite>
          </div>
        </div>

        {/* Problemas principais */}
        <div className='grid md:grid-cols-3 gap-6'>
          {[
            {
              title: 'Missed alerts',
              description: 'Agents missed the sound alert or were in another tab',
              icon: '🔔',
              color: 'bg-card/80'
            },
            {
              title: 'Low visual emphasis',
              description: 'Queue refresh didn\'t draw enough visual attention',
              icon: '👁️',
              color: 'bg-card/80'
            },
            {
              title: 'Negative impact',
              description: 'Wait spikes, CSAT drop, and ticket reopens',
              icon: '📉',
              color: 'bg-card/80'
            }
          ].map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-lg ${problem.color} border border-border/20`}
            >
              <div className='text-3xl mb-3'>{problem.icon}</div>
              <h3 className='font-semibold text-foreground mb-2'>{problem.title}</h3>
              <p className='text-sm text-muted-foreground'>{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Data analysis */}
        <div className='bg-card/80 rounded-lg p-6 border border-border/20'>
          <h3 className='font-semibold text-foreground mb-4'>Log Analysis</h3>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <div className='text-2xl font-bold text-foreground'>63%</div>
              <p className='text-sm text-muted-foreground'>
                of sound alerts did not result in a click, indicating agents were not perceiving or responding to alerts
              </p>
            </div>
            <div className='space-y-2'>
              <div className='text-2xl font-bold text-foreground'>30s</div>
              <p className='text-sm text-muted-foreground'>
                average delay between arrival and first contact, causing frustration and impacting experience
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


