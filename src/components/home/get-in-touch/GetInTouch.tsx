'use client';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export function GetInTouch() {
  return (
    <section id='get-in-touch' className='relative py-24 overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-background/80 blur-3xl' />

        {/* Animated Rotating Gradient */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-slate-500/20 via-zinc-500/5 to-transparent rounded-full blur-[100px] opacity-60'
        />
      </div>

      <div className='relative z-10 container mx-auto px-4 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='max-w-3xl mx-auto space-y-8'
        >
          <div className='space-y-4'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
              Need a designer
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-white to-slate-300 mt-2 animate-gradient-x'>who ships?</span>
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
              If you're hiring for senior product design — or need someone who can
              take a feature from research to production code — let's talk.
              Thirty minutes, no slide deck.
            </p>
          </div>

          <div className='flex items-center justify-center pt-4'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transition-transform duration-300"
            >
              <Button
                asChild
                size='lg'
                className='h-16 px-10 text-lg font-bold min-w-[240px] rounded-full'
              >
                <a
                  href='https://calendly.com/eeliasricardoo'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3'
                >
                  <Calendar className='w-6 h-6' />
                  <span>Book a 30-min call</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
