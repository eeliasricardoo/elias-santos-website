

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';


export function CallToActionSection() {
  const handleLetsTalk = () => {
    window.open('https://calendly.com/eeliasricardoo', '_blank');
  };



  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center space-y-6'
      >
        <h2 className='text-3xl font-bold text-foreground'>
          Like This Project?
        </h2>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Let's talk about how I can help solve your business's UX/UI challenges.
        </p>
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
            onClick={() => window.location.href = '/portfolio/sfmc-magic-builder'}
          >
            Next Project
            <ArrowRight className='w-4 h-4 ml-2' />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
