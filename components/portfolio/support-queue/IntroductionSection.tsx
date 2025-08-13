'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

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
          Analysis & Results
        </h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            We identified ~
            <strong className='text-foreground'>
              30s delay between customer arrival and first human contact
            </strong>
            . To reduce it, we combined two targeted improvements — waiting‑time
            queue ordering and a pop‑up for immediate assignment.
          </p>

          <p>
            Our goal was to make the experience smoother for both customers and
            agents, aiming to{' '}
            <strong className='text-foreground'>
              reduce response time by ≥20%
            </strong>{' '}
            without increasing UI complexity or agent workload.
          </p>
        </div>

        {/* Quantitative Impact Cards */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
          >
            <div className='text-3xl font-bold text-foreground'>22%</div>
            <div className='text-sm text-muted-foreground'>
              Response Time Reduction
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
          >
            <div className='text-3xl font-bold text-green-500'>4.1 → 4.3</div>
            <div className='text-sm text-muted-foreground'>
              CSAT Improvement
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
          >
            <div className='text-3xl font-bold text-blue-500'>9%</div>
            <div className='text-sm text-muted-foreground'>
              Reopened Tickets Drop
            </div>
          </motion.div>
        </div>

        {/* Project Context Card */}
        <div className='mt-8'>
          <Card className='overflow-hidden'>
            <CardContent className='p-6'>
              <div className='space-y-4'>
                <h3 className='font-semibold text-foreground'>
                  Project Context
                </h3>
                <div className='space-y-3 text-sm'>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Product:</span>
                    <span className='text-foreground'>
                      Support platform (web & mobile)
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>My role:</span>
                    <span className='text-foreground'>
                      UX/UI — research, flows, and metrics
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Origin:</span>
                    <span className='text-foreground'>Client request</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Stakeholders:</span>
                    <span className='text-foreground'>
                      Support, CS, QA, Engineering
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
