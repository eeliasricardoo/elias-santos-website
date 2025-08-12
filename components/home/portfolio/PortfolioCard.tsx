'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedMockup } from './AnimatedMockup';
import { useIsMobile } from '@/hooks/use-mobile';
import { RainbowButton } from '@/components/magicui/rainbow-button';

interface PortfolioCardProps {
  card: {
    id: number;
    title: string;
    description: string;
    buttonText: string;
  };
  index: number;
  totalCards: number;
}

export function PortfolioCard({ card, index, totalCards }: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start center', 'end center'],
  });

  const cardY = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, -80 * (totalCards - index - 1)]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.7, 0.2]);
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.96, 0.88]);
  const cardZIndex = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [index, index, index + 15, index + 25]);
  // Blur removido por custo de performance

  const getRoute = useCallback((): string => {
    switch (index) {
      case 0:
        return '/portfolio/ventuschat';
      case 1:
        return '/portfolio/carousel-builder';
      case 2:
        return '/portfolio/ranking';
      default:
        return '/portfolio/ventuschat';
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

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      style={{
        opacity: cardOpacity,
        scale: cardScale,
        y: cardY,
        zIndex: cardZIndex,
      }}
      className='sticky top-8 w-full max-w-5xl mx-auto transition-all duration-300 ease-out group will-change-transform'
      onMouseEnter={preloadPage}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/10 to-primary/20 blur-2xl rounded-2xl transform scale-20 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

      <Card
        className='border-border/30 bg-card shadow-2xl hover:shadow-3xl transition-all duration-300 relative z-10 group cursor-pointer'
        onClick={handleCardClick}
      >
        <CardContent className='p-6 md:p-8 lg:p-10 xl:p-12 transition-all duration-500'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center'>
            <div className={`space-y-6 md:space-y-8 lg:space-y-10 ${isMobile ? 'order-2' : 'order-1'}`}>
              <div className='space-y-4 md:space-y-5 lg:space-y-6'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-foreground leading-tight'>
                  {card.title}
                </h3>
                <p className='text-muted-foreground leading-relaxed text-base md:text-lg lg:text-xl font-light max-w-lg'>
                  {card.description}
                </p>
              </div>

              <div className='w-full'>
                <RainbowButton
                  size='lg'
                  variant='default'
                  className='w-full h-12 text-base font-medium shadow-2xl'
                  onClick={handleButtonClick}
                >
                  {card.buttonText}
                </RainbowButton>
              </div>
            </div>

            <div
              className={`relative w-full ${
                isMobile
                  ? 'order-1 min-h-[280px] h-[320px] md:h-[380px]'
                  : 'order-2 h-[380px] md:h-[420px] lg:h-[460px] xl:h-[500px]'
              } overflow-hidden rounded-xl bg-gradient-to-br from-muted/20 to-muted/10 border border-border/20`}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5' />

              <AnimatedMockup
                type={index === 0 ? 'ventus-chat' : index === 1 ? 'carousel-builder' : 'ranking'}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
