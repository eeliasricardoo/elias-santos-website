'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function CallToActionSection() {
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
      </motion.div>
    </section>
  );
}
