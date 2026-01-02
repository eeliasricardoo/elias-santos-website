'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

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
          Product Case Study
        </Badge>
        <h1 className='text-5xl md:text-6xl font-bold text-foreground tracking-tight'>
          ChatAI - From Need to Innovation in One Week
        </h1>
        <p className='text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
          The journey of creating my own AI tool to solve a real problem:
          building a personal AI ecosystem that&apos;s radically cheaper, fully
          customizable, and superior to existing workflows
        </p>
      </motion.div>

      {/* Video Demo - Full Width */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'
      >
        <div className='relative w-full'>
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className='absolute top-0 left-0 w-full h-full object-contain'
            >
              <source
                src='/portfolios/ventus/new_recording_-_7_18_2025,_5_39_16_pm (1080p).mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
