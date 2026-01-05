'use client';

import { motion } from 'framer-motion';
import { Palette, Eye, Target, Zap } from 'lucide-react';
import { CaseStudySection } from '@/components/portfolio/ui';

export function Phase3Section() {
  return (
    <CaseStudySection title="Phase 3: Redesign - The Minimalist Evolution" className="text-center">
      <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
        <p className='text-center italic'>
          After months of daily use, I found myself getting tired of the
          colorful design. I wanted something more minimal, clean, and focused
          on content rather than visual noise.
        </p>
      </div>

      {/* Design Evolution Context */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-6 mt-12'
      >
        <h3 className='text-2xl font-semibold text-foreground text-center'>
          The Evolution: From Colorful to Minimalist
        </h3>

        <div className='grid md:grid-cols-2 gap-6'>
          <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
            <h4 className='font-semibold text-foreground flex items-center'>
              <Palette className='w-5 h-5 mr-2' />
              Initial Approach
            </h4>
            <p className='text-sm text-muted-foreground'>
              Started with vibrant colors and complex UI elements to showcase
              technical capabilities and create visual interest.
            </p>
          </div>

          <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
            <h4 className='font-semibold text-foreground flex items-center'>
              <Eye className='w-5 h-5 mr-2' />
              User Fatigue
            </h4>
            <p className='text-sm text-muted-foreground'>
              After months of daily use, the colorful interface became
              distracting and started to interfere with productivity.
            </p>
          </div>
        </div>
      </motion.div>

      <div className='space-y-16 mt-12'>
        {/* Redesign Concept */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-4'
        >
          <h3 className='text-2xl font-semibold text-foreground text-center'>
            Redesign Concept
          </h3>
          <div className='space-y-4 text-center text-muted-foreground'>
            <p>
              First attempt at minimalist design - removing visual clutter and
              focusing on content
            </p>
          </div>
          <div className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
            <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
              <img
                src='/portfolios/ventus/v9.png'
                alt='Redesign Concept'
                width={1200}
                height={800}
                className='w-full object-contain'
              />
            </div>
          </div>
        </motion.div>

        {/* Minimalist Refinement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-4'
        >
          <h3 className='text-2xl font-semibold text-foreground text-center'>
            Minimalist Refinement
          </h3>
          <div className='space-y-4 text-center text-muted-foreground'>
            <p>
              Further refinement of the minimalist approach - cleaner
              typography and spacing
            </p>
          </div>
          <div className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
            <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
              <img
                src='/portfolios/ventus/v10.png'
                alt='Minimalist Refinement'
                width={1200}
                height={800}
                className='w-full object-contain'
              />
            </div>
          </div>
        </motion.div>

        {/* Current State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-4'
        >
          <h3 className='text-2xl font-semibold text-foreground text-center'>
            Current State (Production Ready)
          </h3>
          <div className='space-y-4 text-center text-muted-foreground'>
            <p>
              The current production version - minimalist, fast, and optimized
              for daily use
            </p>
          </div>
          <div className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
            <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
              <img
                src='/portfolios/ventus/v11.png'
                alt='Current State (Production Ready)'
                width={1200}
                height={800}
                className='w-full object-contain'
              />
            </div>
          </div>
        </motion.div>

        {/* Design Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h3 className='text-2xl font-semibold text-foreground text-center'>
            The Minimalist Philosophy
          </h3>

          <div className='bg-primary/5 border border-primary/20 rounded-lg p-6'>
            <blockquote className='text-lg text-foreground italic'>
              &ldquo;The best design is the one that gets out of the way. When
              the interface disappears and you&apos;re left with pure
              functionality, that&apos;s when you know you&apos;ve
              succeeded.&rdquo;
            </blockquote>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            <div className='text-center space-y-2'>
              <div className='w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto'>
                <Target className='w-6 h-6 text-blue-500' />
              </div>
              <h4 className='font-semibold text-foreground'>Content First</h4>
              <p className='text-sm text-muted-foreground'>
                Every element serves a purpose, no decorative distractions
              </p>
            </div>

            <div className='text-center space-y-2'>
              <div className='w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto'>
                <Zap className='w-6 h-6 text-green-500' />
              </div>
              <h4 className='font-semibold text-foreground'>
                Speed & Clarity
              </h4>
              <p className='text-sm text-muted-foreground'>
                Reduced cognitive load for faster decision making
              </p>
            </div>

            <div className='text-center space-y-2'>
              <div className='w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto'>
                <Eye className='w-6 h-6 text-purple-500' />
              </div>
              <h4 className='font-semibold text-foreground'>
                Long-term Usability
              </h4>
              <p className='text-sm text-muted-foreground'>
                Design that doesn&apos;t fatigue over extended use
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </CaseStudySection>
  );
}
