'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className='text-center space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-6'
      >
        <Badge className='bg-muted/50 text-muted-foreground border-border/50 px-4 py-2 text-sm font-medium'>
          UX/UI Design • Case Study
        </Badge>
        
        <h1 className='text-5xl md:text-6xl font-bold text-foreground tracking-tight'>
          Feat UX/UI —{' '}
          <span className='text-primary'>
            Support Queue
          </span>{' '}
          — Omnichannel Chat
        </h1>
        
        <p className='text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
          We reduced ~30s delays between customer arrival and first human contact through two targeted improvements: waiting-time queue ordering and a pop-up for immediate assignment.
        </p>
      </motion.div>

      {/* Stats estilo texto (Medium-like) */}
      <div className='max-w-3xl mx-auto grid gap-4 text-sm text-muted-foreground md:grid-cols-3'>
        <div className='space-y-1'>
          <div className='font-semibold text-foreground'>Time-to-first-response</div>
          <div>22% reduction</div>
        </div>
        <div className='space-y-1'>
          <div className='font-semibold text-foreground'>First‑contact CSAT</div>
          <div>4.1 → 4.3</div>
        </div>
        <div className='space-y-1'>
          <div className='font-semibold text-foreground'>Reopened tickets</div>
          <div>−9%</div>
        </div>
      </div>

      {/* Imagem Principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'
      >
        <div className='relative w-full'>
          <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
            <Image
              src='/portfolios/fila-atendimento/1.png'
              alt='Support Queue — Omnichannel Chat overview'
              width={1200}
              height={800}
              className='w-full object-contain'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
              quality={85}
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}


