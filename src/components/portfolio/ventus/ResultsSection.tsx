'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Zap } from 'lucide-react';
import { CaseStudySection } from '@/components/portfolio/ui';

export function ResultsSection() {
  return (
    <CaseStudySection title="What it actually changed">
      <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
        <p className='text-center italic'>
          The point was never the app — it was the muscle memory. By the time a
          client project needed streaming or multimodal output, I&apos;d already
          shipped it once, here, on my own terms.
        </p>
      </div>

      {/* What it bought me */}
      <div className='space-y-6 mt-12'>
        <h3 className='text-2xl font-bold text-foreground text-center'>
          What it bought me
        </h3>

        <div className='grid md:grid-cols-2 gap-6'>
          <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
            <div className='flex items-center space-x-3'>
              <Zap className='w-6 h-6 text-[color:var(--brand,#d9f99d)]' />
              <h4 className='font-semibold text-foreground'>
                Patterns ready before the deadline
              </h4>
            </div>
            <p className='text-muted-foreground'>
              Token streaming, model switching and multimodal generation went
              from &quot;something I&apos;ve read about&quot; to code I&apos;d
              already debugged — so client work started from a working baseline,
              not a tutorial.
            </p>
          </div>
          <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
            <div className='flex items-center space-x-3'>
              <TrendingUp className='w-6 h-6 text-[color:var(--brand,#d9f99d)]' />
              <h4 className='font-semibold text-foreground'>
                Faster, sharper debugging
              </h4>
            </div>
            <p className='text-muted-foreground'>
              Screenshot-driven analysis let me diagnose UI and code issues
              visually instead of describing them — a habit that carried
              straight into how I review real work.
            </p>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
}
