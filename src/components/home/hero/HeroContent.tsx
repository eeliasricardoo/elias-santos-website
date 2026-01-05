import { RainbowButton } from '@/components/magicui/rainbow-button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HERO_CONTENT } from '@/constants/content';
import { usePerformance } from '@/hooks/use-performance-tier';


export function HeroContent() {
  const performanceTier = usePerformance();

  // ✅ Use lighter animations on low/medium devices
  const springConfig = performanceTier === 'high'
    ? { type: "spring" as const, stiffness: 100, damping: 20 }
    : { type: "tween" as const, duration: 0.5, ease: "easeOut" as const };

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
          ...springConfig,
          delay: 0.2
        }}
      >
        <motion.h1
          className='text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.9] tracking-tight'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...springConfig,
            delay: 0.3
          }}
        >
          <span className='inline-block'>
            {HERO_CONTENT.headline.prefix}{' '}
            <span className='relative inline-block'>
              {HERO_CONTENT.headline.highlight}
              {/* ✅ Glow effect - disabled on low-end devices */}
              {performanceTier !== 'low' && (
                <motion.span
                  className={performanceTier === 'high' ? 'absolute inset-0 blur-xl' : 'absolute inset-0 blur-md'}
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
              )}
            </span>
          </span>
        </motion.h1>

        {/* Parágrafo de descrição */}
        <motion.p
          className='text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...springConfig,
            delay: 0.4
          }}
        >
          {HERO_CONTENT.description}
        </motion.p>

        {/* ✅ CTA Buttons - CSS hover instead of JS for better INP */}
        <motion.div
          className='flex flex-wrap items-center justify-center gap-4 pt-4'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...springConfig,
            delay: 0.5
          }}
        >
          <div className="transition-transform hover:scale-105 active:scale-95">
            <RainbowButton
              asChild
              variant='outline'
              size='lg'
              className='h-12 rounded-full px-8 text-base font-medium'
            >
              <a
                href='/projects'
                aria-label='View Projects'
              >
                <span className='relative z-10 flex items-center gap-2'>
                  <span>View Projects</span>
                  <ArrowRight className='w-5 h-5' />
                </span>
              </a>
            </RainbowButton>
          </div>

          <div className="transition-transform hover:scale-105 active:scale-95">
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
          </div>
        </motion.div>



      </motion.div>
    </motion.div>
  );
}
