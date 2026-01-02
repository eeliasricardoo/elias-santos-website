'use client';

import { motion } from 'framer-motion';

export function SolutionSection() {
  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-6'
      >
        <h2 className='text-3xl font-bold text-foreground'>
          Our Solution Approach
        </h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            Based on our research findings, we developed a targeted solution
            that addressed the core issue:{' '}
            <strong className='text-foreground'>
              agents needed immediate, visible notifications
            </strong>{' '}
            that couldn&apos;t be missed, regardless of their current tab or
            focus state.
          </p>
        </div>

        {/* Objetivo */}
        <div className='bg-card/80 rounded-lg p-6 border border-border/20'>
          <h3 className='text-xl font-semibold text-foreground mb-4'>
            🎯 Goal
          </h3>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            Reduce time to first human contact by{' '}
            <strong className='text-foreground'>≥ 20%</strong> without
            increasing UI complexity or agent workload.
          </p>
        </div>

        {/* Hipótese */}
        <div className='bg-card/80 rounded-lg p-6 border border-border/20'>
          <h3 className='text-xl font-semibold text-foreground mb-4'>
            💡 Design Hypothesis
          </h3>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            Showing a{' '}
            <strong className='text-foreground'>
              persistent, actionable pop-up
            </strong>{' '}
            as soon as there is an eligible ticket enables faster acceptance,
            removing the need to manually check queues.
          </p>
        </div>

        {/* Benchmark */}
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold text-foreground'>
            Market Benchmark
          </h3>
          <div className='grid md:grid-cols-3 gap-4'>
            {[
              {
                name: 'Zendesk',
                feature: 'CTA toasts',
                icon: '🔔',
              },
              {
                name: 'Intercom',
                feature: 'Persistent notifications',
                icon: '💬',
              },
              {
                name: 'Crisp',
                feature: 'Assignment pop-ups',
                icon: '⚡',
              },
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='bg-card/80 p-4 rounded-lg border border-border/20 text-center'
              >
                <div className='text-2xl mb-2'>{tool.icon}</div>
                <h4 className='font-semibold text-foreground'>{tool.name}</h4>
                <p className='text-sm text-muted-foreground'>{tool.feature}</p>
              </motion.div>
            ))}
          </div>
          <p className='text-sm text-muted-foreground italic'>
            Analysis: major competitors use CTA toasts for support
            notifications.
          </p>
        </div>

        {/* Estratégia */}
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-foreground'>
              🔧 How we&apos;ll do it
            </h3>
            <ul className='space-y-3 text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>✓</span>
                <span>Bottom-right anchored pop-up</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>✓</span>
                <span>&quot;Queue: 8&quot; badge + live timer</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>✓</span>
                <span>Primary CTA &quot;Accept&quot;</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>✓</span>
                <span>Respects safe areas on mobile</span>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-foreground'>
              ⚙️ Business Rules
            </h3>
            <ul className='space-y-3 text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-muted-foreground mt-1'>•</span>
                <span>
                  Trigger: ≥1 ticket and agent under active‑chat limit
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-muted-foreground mt-1'>•</span>
                <span>Optimistic lock to prevent conflicts</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-muted-foreground mt-1'>•</span>
                <span>Pop-up expires in 15 seconds</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-muted-foreground mt-1'>•</span>
                <span>Maximum of 3 pending pop-ups</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
