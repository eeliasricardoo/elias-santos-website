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
  
  // Scroll progress para o card individual
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Efeito de sobreposição - cada card fica fixo no topo por um período
  const cardY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 0, 0, -100 * (totalCards - index - 1)]
  );
  
  // Opacidade - card fica visível durante seu período, depois desaparece
  const cardOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [1, 1, 1, 0]
  );
  
  // Escala - card mantém tamanho normal durante seu período
  const cardScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [1, 1, 1, 0.95]
  );
  
  // Z-index - card fica no topo durante seu período
  const cardZIndex = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [totalCards - index, totalCards - index, totalCards - index, totalCards - index - 1]
  );

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
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      style={{
        opacity: cardOpacity,
        scale: cardScale,
        y: cardY,
        zIndex: cardZIndex,
      }}
      className='sticky top-8 w-full max-w-5xl mx-auto transition-all duration-300 ease-out group'
      onMouseEnter={preloadPage}
    >
      {/* Luz atrás do card - aparece no hover */}
      <div className='absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/10 to-primary/20 blur-2xl rounded-2xl transform scale-20 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

      <Card
        className='border-border/30 bg-card shadow-2xl hover:shadow-3xl transition-all duration-300 relative z-10 group cursor-pointer'
        onClick={handleCardClick}
      >
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

              {/* Rainbow Button - Largura completa */}
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
