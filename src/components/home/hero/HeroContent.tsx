'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useScroll, useTransform } from 'framer-motion';
import { HERO_CONTENT } from '@/constants/content';
import { FutureIllustration } from './FutureIllustration';

export function HeroContent() {
  const { scrollY } = useScroll();

  // ✅ Parallax effect baseado no scroll
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div
      className='relative z-10 text-center space-y-6 px-4 max-w-5xl mx-auto'
      style={{ y, opacity, willChange: 'transform, opacity' }}
    >
      {/* ✅ Animação de entrada sequencial */}
      <motion.div
        className='space-y-4'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className='text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.9] tracking-tight'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className='inline-block'>
            {HERO_CONTENT.headline.prefix}{' '}
            <span className='relative inline-block'>
              {HERO_CONTENT.headline.highlight}
              {/* ✅ Glow effect */}
              <motion.span
                className='absolute inset-0 blur-xl'
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary)/0.3))',
                  willChange: 'opacity',
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </span>
          </span>
        </motion.h1>

        {/* Parágrafo de descrição */}
        <motion.p
          className='text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {HERO_CONTENT.description}
        </motion.p>

        {/* ✅ CTA Buttons */}
        <motion.div
          className='flex flex-wrap items-center justify-center gap-4 pt-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Button size='lg' className='rounded-full px-8 h-12 text-base' asChild>
            <a href={HERO_CONTENT.cta.primary.href}>{HERO_CONTENT.cta.primary.text}</a>
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='rounded-full px-8 h-12 text-base'
            asChild
          >
            <a
              href={HERO_CONTENT.cta.secondary.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              {HERO_CONTENT.cta.secondary.text}
            </a>
          </Button>
        </motion.div>


        {/* Futuristic Illustration */}
        <FutureIllustration />
      </motion.div>
    </motion.div>
  );
}
