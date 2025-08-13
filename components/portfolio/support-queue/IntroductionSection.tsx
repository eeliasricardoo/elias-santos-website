'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
export function IntroductionSection() {
  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-8'
      >
        <div className='text-center space-y-4'>
          <Badge className='bg-muted/50 text-muted-foreground border-border/50 px-4 py-2'>
            Overview
          </Badge>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground'>
            Analysis & Results
          </h2>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 items-center'>
          <div className='space-y-6'>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              We identified ~<strong className='text-foreground'>30s delay between customer arrival and first human contact</strong>. To reduce it, we combined two targeted improvements — waiting‑time queue ordering and a pop‑up for immediate assignment.
            </p>
            
            <p className='text-lg text-muted-foreground leading-relaxed'>
              Our goal was to make the experience smoother for both customers and agents, aiming to <strong className='text-foreground'>reduce response time by ≥20%</strong> without increasing UI complexity or agent workload.
            </p>

            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-primary'>
              <h4 className='font-semibold text-foreground mb-2'>Key Results</h4>
              <ul className='space-y-1 text-sm text-muted-foreground'>
                <li>• Time‑to‑first‑response decreased by <strong>≈ 22%</strong></li>
                <li>• First‑contact CSAT rose from <strong>4.1 → 4.3</strong></li>
                <li>• Reopened tickets dropped by <strong>≈ 9%</strong></li>
              </ul>
            </div>
          </div>

          <Card className='overflow-hidden'>
            <CardContent className='p-6'>
              <div className='space-y-4'>
                <h3 className='font-semibold text-foreground'>Project Context</h3>
                <div className='space-y-3 text-sm'>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Product:</span>
                    <span className='text-foreground'>Support platform (web & mobile)</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>My role:</span>
                    <span className='text-foreground'>UX/UI — research, flows, and metrics</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Origin:</span>
                    <span className='text-foreground'>Client request</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Stakeholders:</span>
                    <span className='text-foreground'>Support, CS, QA, Engineering</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Methodology */}
        <div className='grid md:grid-cols-3 gap-6'>
          {[
            {
              title: 'Quick Research',
              description: 'Interviews and log analysis — 63% of sound alerts did not result in a click',
              icon: '🔍'
            },
            {
              title: 'Continuous Validation',
              description: 'Each iteration demoed to the client for feedback before proceeding',
              icon: '✅'
            },
            {
              title: 'Moderated Tests',
              description: '5 agents, timed tasks — time‑to‑click down 64%',
              icon: '📊'
            }
          ].map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className='h-full text-center p-6'>
                <div className='space-y-3'>
                  <div className='text-2xl'>{insight.icon}</div>
                  <h3 className='font-semibold text-foreground'>{insight.title}</h3>
                  <p className='text-sm text-muted-foreground'>{insight.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


