'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ImageLightbox } from '@/components/ui/image-lightbox';

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
          UX/UI Design Case Study
        </Badge>
        <h1 className='text-5xl md:text-6xl font-bold text-foreground tracking-tight'>
          Post & Carousel Generator
        </h1>
        <p className='text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
          Revolutionizing carousel creation for social media with AI-powered
          content generation and professional templates
        </p>
      </motion.div>

      {/* Hero Image - Full Width */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'
      >
        <div className='relative w-full'>
          <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
            <ImageLightbox
              src='/portfolios/carousel-builder/Captura de tela 2025-08-01 001703.png'
              alt='Post & Carousel Generator Interface'
              width={1200}
              height={800}
              className='w-full object-contain cursor-pointer'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
              quality={85}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
