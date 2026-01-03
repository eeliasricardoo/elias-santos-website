'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useScroll, useTransform } from 'framer-motion';
import { HERO_CONTENT } from '@/constants/content';


export function HeroContent() {
  return (
    <motion.div
      className='relative z-10 text-center space-y-6 px-4 max-w-5xl mx-auto'
    >
      {/* ✅ Animação de entrada sequencial */}
      <motion.div
        className='space-y-4'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2
        }}
      >
        <motion.h1
          className='text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.9] tracking-tight'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.3
          }}
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.4
          }}
        >
          {HERO_CONTENT.description}
        </motion.p>

        {/* ✅ CTA Buttons */}
        <motion.div
          className='flex flex-wrap items-center justify-center gap-4 pt-4'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.5
          }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size='lg' className='rounded-full px-8 h-12 text-base' asChild>
              <a href={HERO_CONTENT.cta.primary.href}>{HERO_CONTENT.cta.primary.text}</a>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
        </motion.div>



      </motion.div>
    </motion.div>
  );
}
