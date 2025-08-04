'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Section, FastForwardIcon } from '../ui';

export function AboutMeSection() {
  return (
    <Section id='about-me'>
      {/* Floating elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse' />
        <div className='absolute top-40 right-20 w-1 h-1 bg-primary/20 rounded-full animate-pulse delay-1000' />
        <div className='absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse delay-500' />
        <div className='absolute bottom-20 right-1/3 w-1 h-1 bg-primary/15 rounded-full animate-pulse delay-1500' />
      </div>

      <div className='relative z-10 container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center space-y-8'
        >
          {/* Main content */}
          <div className='space-y-6 text-xl md:text-2xl text-foreground max-w-4xl mx-auto'>
            <div>
              UX/UI Designer specializing in{' '}
              <Badge className='bg-muted text-muted-foreground border-border px-4 py-2 text-base font-medium rounded-full'>
                User-Centered Design
              </Badge>
            </div>

            <div>
              Driven by{' '}
              <Badge className='bg-muted text-muted-foreground border-border px-4 py-2 text-base font-medium rounded-full'>
                Data-Driven Insights
              </Badge>
            </div>

            <div>
              With proven expertise in{' '}
              <Badge className='bg-muted text-muted-foreground border-border px-4 py-2 text-base font-medium rounded-full'>
                EdTech Innovation
              </Badge>
            </div>

            <div>
              Expert in{' '}
              <Badge className='bg-muted text-muted-foreground border-border px-4 py-2 text-base font-medium rounded-full'>
                Rapid Prototyping
              </Badge>{' '}
              & development
            </div>

            <div>
              Leveraging{' '}
              <Badge className='bg-muted text-muted-foreground border-border px-4 py-2 text-base font-medium rounded-full'>
                AI-Powered Solutions
              </Badge>
            </div>
          </div>

          {/* Fast forward icon */}
          <FastForwardIcon animationDelay={0.3} />
        </motion.div>
      </div>
    </Section>
  );
}
