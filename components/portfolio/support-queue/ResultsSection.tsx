'use client';

import { motion } from 'framer-motion';

export function ResultsSection() {
  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-6'
      >
        <h2 className='text-3xl font-bold text-foreground'>
          Impact and Validation of Results
        </h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            Our solution delivered{' '}
            <strong className='text-foreground'>measurable improvements</strong>{' '}
            across all key metrics, validating our design hypothesis and
            exceeding our initial goals.
          </p>
        </div>

        {/* Methodology */}
        <div className='bg-card/80 p-8 rounded-lg border border-border/20'>
          <h3 className='text-xl font-semibold text-foreground text-center mb-8'>
            📊 Validation Methodology
          </h3>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
              <h4 className='font-semibold text-foreground'>
                🔍 How we measured
              </h4>
              <ul className='space-y-2 text-muted-foreground text-sm'>
                <li>• Usage metrics with internal analytics</li>
                <li>• Real‑time time‑to‑first‑contact</li>
                <li>• Pop‑up clicks to track engagement</li>
                <li>• One‑question pulse survey after the first interaction</li>
              </ul>
            </div>
            <div className='space-y-4'>
              <h4 className='font-semibold text-foreground'>
                ✅ How we validated
              </h4>
              <ul className='space-y-2 text-muted-foreground text-sm'>
                <li>• Quick interviews with 5 agents</li>
                <li>• User experience validation</li>
                <li>• Results shared with client for confirmation</li>
                <li>• Continuous monitoring for iteration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Métricas Principais */}
        <div className='space-y-8'>
          <h3 className='text-xl font-semibold text-foreground text-center'>
            🎯 Key Metrics
          </h3>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                title: 'Time-to-first-response',
                before: '18,5s',
                after: '14,4s',
                improvement: '22%',
                color: 'from-primary to-primary',
                bgColor: 'bg-card/80',
                borderColor: 'border-border/20',
                icon: '⚡',
              },
              {
                title: 'First‑contact CSAT',
                before: '4,1/5',
                after: '4,3/5',
                improvement: '+0,2',
                color: 'from-primary to-primary',
                bgColor: 'bg-card/80',
                borderColor: 'border-border/20',
                icon: '😊',
              },
              {
                title: 'Reopened tickets',
                before: '7,8%',
                after: '7,1%',
                improvement: '9%',
                color: 'from-primary to-primary',
                bgColor: 'bg-card/80',
                borderColor: 'border-border/20',
                icon: '📉',
              },
            ].map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${metric.bgColor} p-6 rounded-lg border ${metric.borderColor}`}
              >
                <div className='text-center space-y-4'>
                  <div className='text-3xl'>{metric.icon}</div>
                  <h4 className='font-semibold text-foreground text-sm'>
                    {metric.title}
                  </h4>

                  <div className='space-y-2'>
                    <div className='flex justify-between text-xs text-muted-foreground'>
                      <span>Antes: {metric.before}</span>
                      <span>Depois: {metric.after}</span>
                    </div>
                    <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${metric.color}`}
                        style={{ width: '75%' }}
                      />
                    </div>
                  </div>

                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
                  >
                    {metric.improvement.includes('%')
                      ? `-${metric.improvement}`
                      : metric.improvement}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interpretation */}
        <div className='bg-card/80 p-8 rounded-lg border border-border/20'>
          <h3 className='text-xl font-semibold text-foreground text-center mb-8'>
            🔍 Interpretation of Results
          </h3>

          <div className='grid md:grid-cols-3 gap-6'>
            <div className='text-center space-y-4'>
              <div className='text-3xl'>⚡</div>
              <h4 className='font-semibold text-foreground'>Real Efficiency</h4>
              <p className='text-sm text-muted-foreground'>
                Consistent drop in response time indicates a real, measurable
                efficiency gain
              </p>
            </div>

            <div className='text-center space-y-4'>
              <div className='text-3xl'>📈</div>
              <h4 className='font-semibold text-foreground'>
                Improved Satisfaction
              </h4>
              <p className='text-sm text-muted-foreground'>
                CSAT increased with statistical significance, confirming a
                better experience
              </p>
            </div>

            <div className='text-center space-y-4'>
              <div className='text-3xl'>🔄</div>
              <h4 className='font-semibold text-foreground'>Less Friction</h4>
              <p className='text-sm text-muted-foreground'>
                Fewer reopens suggest less friction during the first interaction
              </p>
            </div>
          </div>
        </div>

        {/* Goal Achieved */}
        <div className='bg-card/80 p-8 rounded-lg border border-border/20 text-center'>
          <div className='space-y-4'>
            <div className='text-4xl'>🎯</div>
            <h3 className='text-xl font-semibold text-foreground'>
              Goal Achieved!
            </h3>
            <p className='text-muted-foreground text-lg'>
              The <strong className='text-foreground'>≥20% reduction</strong>{' '}
              target in response time was{' '}
              <strong className='text-foreground'>exceeded</strong>
              with a{' '}
              <strong className='text-foreground'>22% improvement</strong>,
              without increasing UI complexity.
            </p>
            <div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium'>
              <span>✅</span>
              <span>Proven Success</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
