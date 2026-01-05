import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useCallback, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedMockup } from './AnimatedMockup';
import { useIsMobile } from '@/hooks/use-mobile';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { usePerformance } from '@/hooks/use-performance-tier';

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
  const isMobile = useIsMobile();
  const performanceTier = usePerformance();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  const isLastCard = index === totalCards - 1;

  // ✅ Performance optimization: Disable scroll animations on low-end devices
  const enableScrollAnimations = performanceTier !== 'low';

  // ✅ Combine transforms into single calculation for better performance
  const scrollTransform = useTransform(
    scrollYProgress,
    [0, 1],
    enableScrollAnimations ? [0, 1] : [0, 0] // Disable on low-end
  );

  // ✅ Memoize transform values to reduce recalculations
  const cardScale = useMemo(
    () => enableScrollAnimations ? useTransform(scrollTransform, [0, 1], [1, 0.85]) : 1,
    [scrollTransform, enableScrollAnimations]
  );

  const cardOpacity = useMemo(
    () => enableScrollAnimations ? useTransform(scrollTransform, [0, 1], [1, 0]) : 1,
    [scrollTransform, enableScrollAnimations]
  );

  const cardY = useMemo(
    () => enableScrollAnimations ? useTransform(scrollTransform, [0, 1], [0, -50]) : 0,
    [scrollTransform, enableScrollAnimations]
  );

  const getRoute = useCallback((): string => {
    switch (index) {
      case 0:
        return '/portfolio/ventuschat';
      case 1:
        return '/portfolio/carousel-builder';
      case 2:
        return '/portfolio/ranking';
      case 3:
        return '/portfolio/support-queue';
      default:
        return '/portfolio/ventuschat';
    }
  }, [index]);

  const handleCardClick = useCallback(() => {
    window.location.href = getRoute();
  }, [getRoute]);

  const handleButtonClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      window.location.href = getRoute();
    },
    [getRoute]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{
        opacity: isLastCard ? 1 : cardOpacity,
        scale: isLastCard ? 1 : cardScale,
        y: isLastCard ? 0 : cardY,
        top: `calc(10vh + ${index * 30}px)`,
        zIndex: index,
      }}
      className='sticky w-full max-w-5xl mx-auto transition-all duration-300 ease-out group will-change-transform'
    >
      {/* ✅ Conditional shine effect - only on high/medium performance */}
      {performanceTier !== 'low' && (
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] blur-xl rounded-3xl transform scale-110 -z-10 opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-all duration-500' />
      )}

      <Card
        className={`border-white/5 bg-black/90 ${performanceTier === 'high' ? 'backdrop-blur-xl' : 'backdrop-blur-sm'
          } shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 relative z-10 group cursor-pointer`}
        onClick={handleCardClick}
      >
        <CardContent className='p-6 md:p-8 lg:p-10 xl:p-12 transition-all duration-500'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center'>
            <div
              className={`space-y-6 md:space-y-8 lg:space-y-10 ${isMobile ? 'order-2' : 'order-1'}`}
            >
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
                  variant='outline'
                  className='w-full h-12 text-base font-medium shadow-2xl'
                  onClick={handleButtonClick}
                >
                  {card.buttonText}
                </RainbowButton>
              </div>
            </div>

            <div
              className={`relative w-full ${isMobile
                ? 'order-1 min-h-[280px] h-[320px] md:h-[380px]'
                : 'order-2 h-[380px] md:h-[420px] lg:h-[460px] xl:h-[500px]'
                } overflow-hidden rounded-xl bg-gradient-to-br from-muted/20 to-muted/10 border border-border/20`}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5' />

              <AnimatedMockup
                type={
                  index === 0
                    ? 'ventus-chat'
                    : index === 1
                      ? 'carousel-builder'
                      : index === 2
                        ? 'ranking'
                        : 'support-queue'
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
