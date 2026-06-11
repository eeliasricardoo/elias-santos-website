import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HERO_CONTENT } from '@/constants/content';


export function HeroContent() {
  return (
    <div
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-white to-slate-300">
              {HERO_CONTENT.headline.highlight}
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
            <Button
              asChild
              size='lg'
              className='h-12 rounded-full px-8 text-base font-medium'
            >
              <a
                href={HERO_CONTENT.cta.primary.href}
                aria-label={HERO_CONTENT.cta.primary.text}
              >
                <span className='flex items-center gap-2'>
                  <span>{HERO_CONTENT.cta.primary.text}</span>
                  <ArrowRight className='w-5 h-5' />
                </span>
              </a>
            </Button>
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
    </div>
  );
}
