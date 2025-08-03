'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedMockup } from './AnimatedMockup';
import { Loader2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start center', 'end center'],
  });

  const cardY = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, 0, -80 * (totalCards - index - 1)]
  );
  const cardOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 1, 0.7, 0.2]
  );
  const cardScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 1, 0.96, 0.88]
  );
  const cardZIndex = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [index, index, index + 15, index + 25]
  );
  const cardBlur = useTransform(scrollYProgress, [0, 0.7, 1], [0, 1.5, 4]);

  // Mapeamento de rotas para otimização
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

  // Pré-carregamento da página
  const preloadPage = useCallback(() => {
    const route = getRoute();
    router.prefetch(route);
  }, [router, getRoute]);

  const handleCardClick = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);

    // Reduzido o delay para 100ms para feedback mais rápido
    await new Promise(resolve => setTimeout(resolve, 100));

    router.push(getRoute());
  }, [isLoading, router, getRoute]);

  const handleButtonClick = useCallback(
    async (e: React.MouseEvent) => {
      e.stopPropagation();
      if (isLoading) return;

      setIsLoading(true);

      // Reduzido o delay para 100ms para feedback mais rápido
      await new Promise(resolve => setTimeout(resolve, 100));

      router.push(getRoute());
    },
    [isLoading, router, getRoute]
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      style={{
        opacity: cardOpacity,
        scale: cardScale,
        y: cardY,
        zIndex: cardZIndex,
        filter: `blur(${cardBlur}px)`,
      }}
      className='sticky top-8 w-full max-w-5xl mx-auto transition-all duration-300 ease-out group'
      onMouseEnter={preloadPage}
    >
      {/* Luz atrás do card - aparece no hover */}
      <div className='absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/10 to-primary/20 blur-2xl rounded-2xl transform scale-20 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

      <Card
        className={`border-border/30 bg-card shadow-2xl hover:shadow-3xl transition-all duration-300 relative z-10 group ${
          isLoading ? 'cursor-wait' : 'cursor-pointer'
        }`}
        onClick={handleCardClick}
      >
        {/* Overlay de loading */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center z-20'
          >
            <div className='flex flex-col items-center space-y-4'>
              <Loader2 className='w-8 h-8 animate-spin text-primary' />
              <p className='text-sm text-muted-foreground font-medium'>
                Carregando...
              </p>
            </div>
          </motion.div>
        )}

        <CardContent className='p-6 md:p-8 lg:p-10 xl:p-12 transition-all duration-500'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center'>
            {/* Conteúdo - Primeiro no desktop, segundo no mobile */}
            <div
              className={`space-y-6 md:space-y-8 lg:space-y-10 ${isMobile ? 'order-2' : 'order-1'}`}
            >
              {/* Título e Descrição */}
              <div className='space-y-4 md:space-y-5 lg:space-y-6'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-foreground leading-tight'>
                  {card.title}
                </h3>
                <p className='text-muted-foreground leading-relaxed text-base md:text-lg lg:text-xl font-light max-w-lg'>
                  {card.description}
                </p>
              </div>

              {/* Botão */}
              <Button
                size='lg'
                disabled={isLoading}
                className='bg-foreground border border-border text-background hover:bg-background hover:text-foreground transition-all duration-300 px-6 py-2.5 text-sm font-medium'
                onClick={handleButtonClick}
              >
                {isLoading ? (
                  <div className='flex items-center space-x-2'>
                    <Loader2 className='w-4 h-4 animate-spin' />
                    <span>Carregando...</span>
                  </div>
                ) : (
                  card.buttonText
                )}
              </Button>
            </div>

            {/* Mockup Animado - Segundo no desktop, primeiro no mobile */}
            <div
              className={`relative w-full ${isMobile ? 'order-1 min-h-[280px] h-[320px] md:h-[380px]' : 'order-2 h-[380px] md:h-[420px] lg:h-[460px] xl:h-[500px]'} overflow-hidden rounded-xl bg-gradient-to-br from-muted/20 to-muted/10 border border-border/20`}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5'></div>
              <AnimatedMockup
                type={
                  index === 0
                    ? 'ranking'
                    : index === 1
                      ? 'carousel-builder'
                      : 'ventus-chat'
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
