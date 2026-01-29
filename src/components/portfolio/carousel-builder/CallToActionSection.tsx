'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { Calendar, ArrowRight } from 'lucide-react';

export function CallToActionSection() {
  const handleLetsTalk = () => {
    window.open('https://calendly.com/eliasricardoo', '_blank');
  };



  return (
    <section className='text-center space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-6'
      >
        <h2 className='text-3xl font-bold text-foreground'>
          Ready to Transform Your Content Creation?
        </h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            The Post & Carousel Generator represents the future of content
            creation - where AI and human creativity work together to produce
            amazing results.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
          <Button
            size='lg'
            className='bg-primary hover:bg-primary/90 cursor-pointer'
            onClick={handleLetsTalk}
          >
            <Calendar className='w-4 h-4 mr-2' />
            Let's Talk
          </Button>
          <RainbowButton
            size='lg'
            onClick={() => window.location.href = '/portfolio/ranking'}
          >
            Next Project
            <ArrowRight className='w-4 h-4 ml-2' />
          </RainbowButton>
        </div>
      </motion.div>
    </section>
  );
}
