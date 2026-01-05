'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Zap } from 'lucide-react';
import { CaseStudySection } from '@/components/portfolio/ui';

export function ResultsSection() {
  return (
    <CaseStudySection title="Results and Success Metrics">
      <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
        <p className='text-center italic'>
          The final result is a tool that became the center of my development
          universe. ChatAI is not just a product case; it&apos;s proof of my
          work philosophy.
        </p>
      </div>

      {/* Quantitative Impact */}
      <div className='space-y-6 mt-12'>
        <h3 className='text-2xl font-bold text-foreground text-center'>
          Quantitative Impact
        </h3>

        <div className='grid md:grid-cols-2 gap-6'>
          <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
            <div className='flex items-center space-x-3'>
              <TrendingUp className='w-6 h-6 text-green-500' />
              <h4 className='font-semibold text-foreground'>
                Cost Reduction &gt; 75%
              </h4>
            </div>
            <p className='text-muted-foreground'>
              My monthly AI costs dropped from ~$20 to ~$2-5.
            </p>
          </div>
          <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
            <div className='flex items-center space-x-3'>
              <Zap className='w-6 h-6 text-blue-500' />
              <h4 className='font-semibold text-foreground'>
                Efficiency Increase ~20%
              </h4>
            </div>
            <p className='text-muted-foreground'>
              Time to debug problems using screenshots was significantly
              reduced.
            </p>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
}
