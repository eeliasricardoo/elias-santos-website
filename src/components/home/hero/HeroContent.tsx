import { RainbowButton } from '@/components/magicui/rainbow-button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HERO_CONTENT } from '@/constants/content';
import { usePerformance } from '@/hooks/use-performance-tier';


export function HeroContent() {
  const performanceTier = usePerformance();

  // Performance optimization: Using CSS animations instead of JS framer-motion for LCP

  return (
    <motion.div
      className='relative z-10 text-center space-y-6 px-4 max-w-5xl mx-auto'
    >
      {/* ✅ Animação de entrada sequencial */}
      <div
        className='space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-forwards'
      >
        <h1
          className='text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.9] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 ease-out fill-mode-forwards'
        >
          <span className='inline-block'>
            {HERO_CONTENT.headline.prefix}{' '}
            <span className='relative inline-block'>
              {HERO_CONTENT.headline.highlight}
              {/* ✅ Glow effect - disabled on low-end devices */}
              {performanceTier !== 'low' && (
                <span
                  className={performanceTier === 'high' ? 'absolute inset-0 blur-xl animate-pulse' : 'absolute inset-0 blur-md animate-pulse'}
                  style={{
                    background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary)/0.3))',
                  }}
                />
              )}
            </span>
          </span>
        </h1>

        {/* Parágrafo de descrição */}
        <p
          className='text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 ease-out fill-mode-forwards'
        >
          {HERO_CONTENT.description}
        </p>

        {/* ✅ CTA Buttons - CSS hover instead of JS for better INP */}
        <div
          className='flex flex-wrap items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 ease-out fill-mode-forwards'
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
        </div>



      </div>
    </motion.div>
  );
}
