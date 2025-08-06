'use client';

import { motion } from 'framer-motion';
import { AnimatedBadge } from '../ui';
import { useMounted } from '@/hooks/use-mounted';

export function HeroContent() {
  const mounted = useMounted();

  return (
    <div className='relative z-10 text-center space-y-6 px-4 max-w-5xl mx-auto'>
      {/* Título Principal - renderização imediata para LCP */}
      <div className='space-y-4'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.9] tracking-tight'>
          <span className='text-foreground'>UX From the Future</span>
        </h1>

        {/* Parágrafo de descrição - renderização imediata para LCP */}
        <p className='text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light'>
          UX/UI Designer & Frontend Developer. I transform complex
          business challenges into elegant, user-centered solutions that drive
          measurable results and accelerate time-to-market.
        </p>
      </div>

      {/* Badge Animado - carregamento lazy após o conteúdo crítico */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}
        >
          <AnimatedBadge text='Elias Santos' animationDelay={0} />
        </motion.div>
      )}
    </div>
  );
}
