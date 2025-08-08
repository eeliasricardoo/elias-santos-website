'use client';

import { useRef, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ShineBorder } from '@/components/magicui/shine-border';

interface PortfolioCardProps {
  card: {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    image?: string;
    imageAlt?: string;
  };
  index: number;
  totalCards: number;
}

export function PortfolioCard({ card, index }: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const getRoute = useCallback(() => {
    switch (index) {
      case 0:
        return '/portfolio/carousel-builder';
      case 1:
        return '/portfolio/ranking';
      case 2:
        return '/portfolio/ventuschat';
      default:
        return '/portfolio/carousel-builder';
    }
  }, [index]);

  const preloadPage = useCallback(() => {
    const route = getRoute();
    router.prefetch(route);
  }, [router, getRoute]);

  const handleCardClick = useCallback(() => {
    router.push(getRoute());
  }, [router, getRoute]);

  const handleButtonClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      router.push(getRoute());
    },
    [router, getRoute]
  );

  // Sequência: direita, esquerda, direita (alterna iniciando pela direita)
  const imageOnRight = useMemo(() => index % 2 === 0, [index]);

  // Stacks fixas solicitadas
  const stacks = useMemo<string[]>(() => ['Next.js', 'TypeScript', 'Tailwind'], []);

  // Destaques removidos

  // Tags fixas solicitadas
  const tags = useMemo<string[]>(() => ['UX/UI Design'], []);

  // Métricas removidas

  // Descrição mais "Product" por case
  const productDescription = useMemo(() => {
    if (index === 0) {
      return 'Personal AI chat toolkit: multimodal, 75% cheaper and customizable. Optimized for fast workflows.';
    }
    if (index === 1) {
      return 'Create carousels in minutes. AI copy, pro templates and export to React/PNG. Built for speed and consistency.';
    }
    if (index === 2) {
      return 'Gamification engine with leaderboards, badges and admin controls. Designed to drive engagement with clarity.';
    }
    return 'Portfolio project';
  }, [index]);

  return (
    <div
      ref={cardRef}
      className='relative cursor-pointer group'
      onClick={handleCardClick}
      onMouseEnter={preloadPage}
    >
      {/* Glow sutil de fundo */}
      <div className='pointer-events-none absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(closest-side,rgba(255,255,255,0.08),transparent)]' />
      <div className='relative rounded-2xl border border-border/20 overflow-hidden'>
        {/* ShineBorder agora cobre todo o card, incluindo a área da imagem */}
        <ShineBorder borderWidth={1} duration={18} shineColor={['#6ee7b7','#93c5fd','#fca5a5']} className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl' />
      <div className='grid grid-cols-1 md:grid-cols-12 items-stretch'>
        {/* Conteúdo */}
        <div className={imageOnRight ? 'order-2 md:order-1 md:col-span-5' : 'order-2 md:order-2 md:col-span-5'}>
          <div className='h-full w-full flex'>
            <div className='mx-auto px-5 md:px-8 lg:px-12 xl:px-16 py-6 md:py-10 w-full flex items-center md:h-[420px] lg:h-[520px] xl:h-[560px]'>
              <div className='space-y-6 max-w-3xl'>
                <div className='space-y-3'>
                  <h3 className='text-2xl md:text-4xl font-bold tracking-tight break-words'>
                    {card.title}
                  </h3>
                  <div className='w-24 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full' />
                  <div className='flex flex-wrap gap-2 pt-2'>
                    {tags.map(tag => (
                      <Badge key={tag} variant='outline' className='rounded-full px-2.5 py-0.5 bg-background/60 backdrop-blur border-border/40'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className='text-muted-foreground leading-relaxed text-lg md:text-xl'>
                  {productDescription}
                </p>

                {/* Stacks */}
                <div className='flex flex-wrap gap-2 pt-1'>
                  {stacks.map(stack => (
                    <Badge key={stack} variant='secondary' className='px-2 py-1 bg-card/60 backdrop-blur border border-border/30'>
                      {stack}
                    </Badge>
                  ))}
                </div>

                {/* Destaques removidos conforme solicitação */}

                {/* Métricas removidas conforme solicitação */}

                <div className='pt-2'>
                  <RainbowButton
                    onClick={handleButtonClick}
                    className='
                      w-full justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium
                      text-white
                      bg-[linear-gradient(#000,#000),linear-gradient(#000_50%,rgba(0,0,0,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]
                      dark:bg-[linear-gradient(#000,#000),linear-gradient(#000_50%,rgba(0,0,0,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]
                    '
                  >
                    {card.buttonText}
                  </RainbowButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className={imageOnRight ? 'order-1 md:order-2 md:col-span-7' : 'order-1 md:order-1 md:col-span-7'}>
          {card.image && (
            <div className='relative w-full aspect-[16/9] md:h-[420px] lg:h-[520px] xl:h-[560px] overflow-hidden bg-background'>
              <Image src={card.image} alt={card.imageAlt || card.title} fill className='object-cover md:object-contain' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw' priority={index === 0} quality={85} />
              <div className={imageOnRight ? 'absolute inset-y-0 left-0 w-24 sm:w-32 md:w-64 bg-gradient-to-r from-background/80 via-background/20 to-transparent' : 'absolute inset-y-0 right-0 w-24 sm:w-32 md:w-64 bg-gradient-to-l from-background/80 via-background/20 to-transparent'} />
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
