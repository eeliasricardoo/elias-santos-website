'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function DetailedPhasesSection() {
  return (
    <section className='space-y-16'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-8'
      >
        <h2 className='text-3xl font-bold text-foreground'>
          The Detailed Story of Each Phase
        </h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            Each development phase told a unique story. Let&apos;s dive deep
            into how each stage transformed our vision into reality, using
            the screenshots that document our journey.
          </p>
        </div>
      </motion.div>

      {/* Phase 0: Wireframe */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-6'
      >
        <div className='flex items-center space-x-3 mb-6'>
          <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
            <span className='text-sm font-bold text-primary'>0</span>
          </div>
          <h3 className='text-2xl font-bold text-foreground'>
            The First Wireframe
          </h3>
        </div>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            Everything started with a simple question:{' '}
            <strong className='text-foreground'>
              &ldquo;What would the ideal interface be for generating
              carousels with AI?&rdquo;
            </strong>
            Using ChatGPT for brainstorming, we defined the fundamental
            structure that would guide all development.
          </p>

          <p>
            The initial wireframe established the pillars of the experience:
            input form on the left, preview on the right, and a generated
            slides section below. It was simple, but contained the essence
            of what would become a powerful tool.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
        >
          <Image
            src='/documentation/v0 - wireframe.png'
            alt='Initial interface wireframe'
            width={800}
            height={600}
            className='w-full h-auto'
          />
        </motion.div>
      </motion.div>

      {/* Phase 1: Working MVP */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-6'
      >
        <div className='flex items-center space-x-3 mb-6'>
          <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
            <span className='text-sm font-bold text-primary'>1</span>
          </div>
          <h3 className='text-2xl font-bold text-foreground'>
            The Working MVP
          </h3>
        </div>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            After weeks of development, came the magical moment:{' '}
            <strong className='text-foreground'>the working MVP</strong>.
            The OpenRouter API integration was operational, and for the
            first time we were able to generate real carousels with AI.
          </p>

          <p>
            The interface was basic, but functional. Users could enter a
            theme, choose style and tone, and in seconds receive 5
            structured slides. It was the proof of concept that validated
            our vision - AI could really create relevant and well-structured
            content.
          </p>

          <p>
            <strong className='text-foreground'>
              This was the moment that changed everything.
            </strong>{' '}
            Seeing the tool working gave us confidence to invest in more
            ambitious improvements.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
        >
          <Image
            src='/documentation/v1 - funcionando .png'
            alt='Working MVP with carousel generation'
            width={800}
            height={600}
            className='w-full h-auto'
          />
        </motion.div>
      </motion.div>

      {/* Phase 2: First Redesign */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-6'
      >
        <div className='flex items-center space-x-3 mb-6'>
          <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
            <span className='text-sm font-bold text-primary'>2</span>
          </div>
          <h3 className='text-2xl font-bold text-foreground'>
            The First Redesign - Modern Dark Mode
          </h3>
        </div>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            With the MVP working, it was time to think about user
            experience. The first redesign introduced
            <strong className='text-foreground'>
              {' '}
              modern dark mode
            </strong>{' '}
            and a more polished interface that reflected the professional
            nature of the tool.
          </p>

          <p>
            The new design focused on visual hierarchy, better spacing, and
            a more intuitive layout. The dark theme not only looked modern
            but also reduced eye strain during long content creation
            sessions.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
        >
          <Image
            src='/documentation/v2 - redesign.png'
            alt='First redesign with dark mode'
            width={800}
            height={600}
            className='w-full h-auto'
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 