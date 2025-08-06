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

  // Animações de scroll mais suaves e leves
  const cardY = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0, 0, -40 * (totalCards - index - 1)] // Reduzido de -80 para -40
  );
  const cardOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [1, 1, 0.85, 0.4] // Valores mais suaves
  );
  const cardScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [1, 1, 0.98, 0.92] // Escala mais conservadora
  );
  const cardZIndex = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [index, index, index + 10, index + 20] // Z-index mais conservador
  );
  const cardBlur = useTransform(
    scrollYProgress, 
    [0, 0.8, 1], 
    [0, 0.8, 2] // Blur mais sutil
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
      initial={{ opacity: 0, y: 30, scale: 0.98 }} // Valores mais conservadores
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, // Aumentado de 0.6 para 0.8
        delay: index * 0.15, // Aumentado de 0.1 para 0.15
        ease: [0.25, 0.46, 0.45, 0.94] // Curva de easing mais suave
      }}
      style={{
        opacity: cardOpacity,
        scale: cardScale,
        y: cardY,
        zIndex: cardZIndex,
        filter: `blur(${cardBlur}px)`,
      }}
      className='sticky top-8 w-full max-w-5xl mx-auto transition-all duration-500 ease-out group'
      onMouseEnter={preloadPage}
    >
      {/* Luz atrás do card - mais sutil */}
      <motion.div 
        className='absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/8 to-primary/12 blur-2xl rounded-2xl transform scale-20 -z-10 opacity-0 group-hover:opacity-100'
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      <Card
        className='border-border/30 bg-card shadow-xl hover:shadow-2xl transition-all duration-500 ease-out relative z-10 group cursor-pointer'
        onClick={handleCardClick}
      >
        <CardContent className='p-6 md:p-8 lg:p-10 xl:p-12 transition-all duration-500'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center'>
            {/* Conteúdo - Primeiro no desktop, segundo no mobile */}
            <motion.div
              className={`space-y-6 md:space-y-8 lg:space-y-10 ${isMobile ? 'order-2' : 'order-1'}`}
              whileHover={{ x: isMobile ? 0 : 8 }} // Micro-interação sutil
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Título e Descrição */}
              <div className='space-y-4 md:space-y-5 lg:space-y-6'>
                <motion.h3 
                  className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-foreground leading-tight'
                  whileHover={{ scale: 1.02 }} // Micro-interação muito sutil
                  transition={{ duration: 0.2 }}
                >
                  {card.title}
                </motion.h3>
                <p className='text-muted-foreground leading-relaxed text-base md:text-lg lg:text-xl font-light max-w-lg'>
                  {card.description}
                </p>
              </div>

              {/* Rainbow Button - Largura completa */}
              <motion.div 
                className='w-full'
                whileHover={{ scale: 1.02 }} // Micro-interação sutil
                transition={{ duration: 0.2 }}
              >
                <RainbowButton
                  size='lg'
                  variant='default'
                  className='w-full h-12 text-base font-medium shadow-xl'
                  onClick={handleButtonClick}
                >
                  {card.buttonText}
                </RainbowButton>
              </motion.div>
            </motion.div>

            {/* Mockup Animado - Segundo no desktop, primeiro no mobile */}
            <motion.div
              className={`relative w-full ${isMobile ? 'order-1 min-h-[280px] h-[320px] md:h-[380px]' : 'order-2 h-[380px] md:h-[420px] lg:h-[460px] xl:h-[500px]'} overflow-hidden rounded-xl bg-gradient-to-br from-muted/20 to-muted/10 border border-border/20`}
              whileHover={{ 
                scale: 1.02, // Escala mais sutil
                rotateY: 2 // Rotação 3D muito sutil
              }}
              transition={{ 
                duration: 0.4, 
                ease: 'easeOut',
                rotateY: { duration: 0.6, ease: 'easeInOut' }
              }}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/3'></div>
              <AnimatedMockup
                type={
                  index === 0
                    ? 'ranking'
                    : index === 1
                      ? 'carousel-builder'
                      : 'ventus-chat'
                }
              />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
