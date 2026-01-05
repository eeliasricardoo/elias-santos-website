'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Home } from 'lucide-react';
import { CaseStudySection } from '@/components/portfolio/ui';

export function CallToActionSection() {
  const handleLetsTalk = () => {
    window.open('https://calendly.com/eliasricardoo', '_blank');
  };

  const handleBackHome = () => {
    window.location.href = '/';
  };

  return (
    <CaseStudySection title="Ready to Build Your Own AI Tool?" className="text-center">
      <div className='space-y-6 text-lg text-muted-foreground leading-relaxed mb-6'>
        <p>
          ChatAI represents the future of personal AI tools - where
          customization, cost-efficiency, and developer experience come
          together.
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
          size='lg'
          variant='outline'
          className='cursor-pointer'
          onClick={handleBackHome}
        >
          <Home className='w-4 h-4 mr-2' />
          Back Home
        </Button>
      </div>
    </CaseStudySection>
  );
}
