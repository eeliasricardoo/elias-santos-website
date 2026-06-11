'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Code } from 'lucide-react';
import { CaseStudySection } from '@/components/portfolio/ui';
import { OptimizedImage } from '@/components/performance/OptimizedImage';

export function Phase2Section() {
  return (
    <CaseStudySection title="Phase 2: Development & Technical Evolution" className="text-center">
      <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
        <p className='text-center italic'>
          With a clearly defined problem and competitive landscape understood,
          the development phase focused on building the solution with
          technical excellence and user-centered design.
        </p>
      </div>

      <div className='space-y-16 mt-12'>
        {/* Technical Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h3 className='text-2xl font-semibold text-foreground text-center'>
            Technical Architecture & Engineering Pillars
          </h3>

          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
              <h4 className='font-semibold text-foreground flex items-center'>
                <Zap className='w-5 h-5 mr-2' />
                The Acceleration Stack
              </h4>
              <div className='space-y-3'>
                <div>
                  <h5 className='font-medium text-foreground'>
                    Next.js (App Router)
                  </h5>
                  <p className='text-sm text-muted-foreground'>
                    Single-component approach blending frontend and backend
                    for maximum development speed.
                  </p>
                </div>
                <div>
                  <h5 className='font-medium text-foreground'>Supabase</h5>
                  <p className='text-sm text-muted-foreground'>
                    Backend-in-a-box solution enabling rapid development
                    without infrastructure complexity.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
              <h4 className='font-semibold text-foreground flex items-center'>
                <Shield className='w-5 h-5 mr-2' />
                Engineering Pillars
              </h4>
              <div className='space-y-3'>
                <div>
                  <h5 className='font-medium text-foreground flex items-center'>
                    <Code className='w-4 h-4 mr-2' />
                    Clean Code & Design System
                  </h5>
                  <p className='text-sm text-muted-foreground'>
                    Modular architecture with Shadcn/UI and TailwindCSS from
                    day one.
                  </p>
                </div>
                <div>
                  <h5 className='font-medium text-foreground flex items-center'>
                    <Zap className='w-4 h-4 mr-2' />
                    Performance First
                  </h5>
                  <p className='text-sm text-muted-foreground'>
                    React.memo, virtual scrolling, and optimized component
                    loading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Implementation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-4'
        >
          <h3 className='text-2xl font-semibold text-foreground text-center'>
            Technical Implementation
          </h3>
          <div className='space-y-4 text-center text-muted-foreground'>
            <p>
              Core API integration and backend architecture - OpenAI
              integration with proper error handling and rate limiting
            </p>
          </div>
          <div className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
            <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
              <OptimizedImage
                src='/portfolios/ventus/v3.png'
                alt='Technical Implementation'
                width={1200}
                height={800}
                className='w-full object-contain'
              />
            </div>
          </div>
        </motion.div>

        {/* Enhanced Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-4'
        >
          <h3 className='text-2xl font-semibold text-foreground text-center'>
            Enhanced Features
          </h3>
          <div className='space-y-4 text-center text-muted-foreground'>
            <p>
              Multimodal capabilities and advanced UX features - image
              analysis, video generation, and model switching
            </p>
          </div>
          <div className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
            <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
              <OptimizedImage
                src='/portfolios/ventus/v4.png'
                alt='Enhanced Features'
                width={1200}
                height={800}
                className='w-full object-contain'
              />
            </div>
          </div>
        </motion.div>

        {/* UI Polish */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-4'
        >
          <h3 className='text-2xl font-semibold text-foreground text-center'>
            UI Polish
          </h3>
          <div className='space-y-4 text-center text-muted-foreground'>
            <p>
              Refined user interface and enhanced visual design - improved
              typography, spacing, and micro-interactions
            </p>
          </div>
          <div className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
            <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
              <OptimizedImage
                src='/portfolios/ventus/v5.png'
                alt='UI Polish'
                width={1200}
                height={800}
                className='w-full object-contain'
              />
            </div>
          </div>
        </motion.div>

        {/* Final Polish */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-4'
        >
          <h3 className='text-2xl font-semibold text-foreground text-center'>
            Final Polish
          </h3>
          <div className='space-y-4 text-center text-muted-foreground'>
            <p>
              Production-ready interface with optimized performance -
              authentication, database integration, and deployment preparation
            </p>
          </div>
          <div className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
            <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
              <OptimizedImage
                src='/portfolios/ventus/v7.png'
                alt='Final Polish'
                width={1200}
                height={800}
                className='w-full object-contain'
              />
            </div>
          </div>
        </motion.div>
      </div>
    </CaseStudySection>
  );
}
