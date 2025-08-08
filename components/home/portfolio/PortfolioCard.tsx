'use client';

import { useRef, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import Image from 'next/image';

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
        return '/portfolio/ranking';
      case 1:
        return '/portfolio/carousel-builder';
      case 2:
        return '/portfolio/ventuschat';
      default:
        return '/portfolio/ranking';
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

  const imageOnRight = useMemo(() => index === 0 || index === 2, [index]);

  return (
    <div
      ref={cardRef}
      className='relative cursor-pointer'
      onClick={handleCardClick}
      onMouseEnter={preloadPage}
    >
      <div className='grid grid-cols-1 md:grid-cols-12 items-stretch'>
        {/* Conteúdo */}
        <div className={imageOnRight ? 'order-2 md:order-1 md:col-span-5 bg-background' : 'order-2 md:order-2 md:col-span-5 bg-background'}>
          <div className='h-full w-full flex'>
            <div className='mx-auto px-6 md:px-10 lg:px-14 xl:px-20 py-10 md:py-16 w-full flex items-center'>
              <div className='space-y-6 max-w-3xl'>
                <div className='space-y-3'>
                  <h3 className='text-3xl md:text-4xl font-bold tracking-tight'>
                    {card.title}
                  </h3>
                  <div className='w-24 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full' />
                </div>

                <p className='text-muted-foreground leading-relaxed text-lg md:text-xl'>
                  {card.description}
                </p>

                <div className='pt-2'>
                  <RainbowButton onClick={handleButtonClick} className='px-7 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium'>
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
            <div className='relative w-full h-screen overflow-hidden bg-background'>
              <Image src={card.image} alt={card.imageAlt || card.title} fill className='object-contain' sizes='100vw' priority={index === 0} quality={85} />
              <div className={imageOnRight ? 'absolute inset-y-0 left-0 w-40 md:w-64 bg-gradient-to-r from-background/80 via-background/20 to-transparent' : 'absolute inset-y-0 right-0 w-40 md:w-64 bg-gradient-to-l from-background/80 via-background/20 to-transparent'} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
