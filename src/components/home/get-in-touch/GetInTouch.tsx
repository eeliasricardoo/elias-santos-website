'use client';

import { RainbowButton } from '@/components/magicui/rainbow-button';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export function GetInTouch() {
  return (
    <section id='get-in-touch' className='relative py-24 overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50' />
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
              Ready to create something
              <span className='block text-primary mt-2'>extraordinary?</span>
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
              Let's skip the back-and-forth emails. Schedule a direct call to discuss your vision and how we can make it a reality.
            </p>
          </div>

          <div className='flex items-center justify-center pt-4'>
            <div className="transition-transform hover:scale-105 active:scale-95 duration-300">
              <RainbowButton
                asChild
                className='h-16 px-10 text-lg font-bold min-w-[240px] !text-black'
              >
                <a
                  href='https://calendly.com/eeliasricardoo'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3'
                >
                  <Calendar className='w-6 h-6' />
                  <span>Schedule a Meeting</span>
                </a>
              </RainbowButton>
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
