'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { CaseStudySection } from '@/components/portfolio/ui';

export function CallToActionSection() {
  const handleLetsTalk = () => {
    window.open('https://calendly.com/eeliasricardoo', '_blank');
  };



  return (
    <CaseStudySection title="Why I build my own tools" className="text-center">
      <div className='space-y-6 text-lg text-muted-foreground leading-relaxed mb-6'>
        <p>
          ChatAI is where I learn streaming and multimodal patterns before they
          reach client work. If you're hiring someone who stays ahead of the
          tooling by building with it, let's talk.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <Button
          size='lg'
          className='bg-primary hover:bg-primary/90 cursor-pointer'
          onClick={handleLetsTalk}
        >
          <Calendar className='w-4 h-4 mr-2' />
          Let's Talk
        </Button>
        <Button
          variant='outline'
          size='lg'
          className='cursor-pointer'
          onClick={() => window.location.href = '/portfolio/carousel-builder'}
        >
          Next Project
          <ArrowRight className='w-4 h-4 ml-2' />
        </Button>
      </div>
    </CaseStudySection>
  );
}
