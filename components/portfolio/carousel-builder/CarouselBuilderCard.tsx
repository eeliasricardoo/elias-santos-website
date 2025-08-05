'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function CarouselBuilderCard() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      color: 'from-primary/20 to-primary/10',
      icon: '✨',
      title: 'Slide 1',
    },
    {
      id: 2,
      color: 'from-primary/15 to-primary/5',
      icon: '🚀',
      title: 'Slide 2',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => {
        // Para no segundo slide (índice 1)
        if (prev === 1) return 1;
        return prev + 1;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className='w-full h-full flex items-center justify-center bg-transparent'>
      <div className='w-full h-full p-3 md:p-4 lg:p-5 bg-card/80 border border-border/20 shadow-none flex flex-col'>
        {/* Header */}
        <div className='flex items-center space-x-2 md:space-x-3 flex-shrink-0 mb-2 md:mb-3'>
          <div className='relative'>
            <div className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-primary/80 rounded-lg flex items-center justify-center shadow-sm'>
              <span className='text-xs md:text-sm font-bold text-primary-foreground'>
                AI
              </span>
            </div>
            <div className='absolute -top-0.5 -right-0.5 w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 rounded-full border border-card' />
          </div>
          <div>
            <h3 className='text-sm md:text-base lg:text-lg font-semibold text-foreground'>
              Carousel Creator
            </h3>
            <p className='text-xs md:text-sm text-muted-foreground'>
              AI-Powered Builder
            </p>
          </div>
          <div className='flex space-x-1 ml-auto'>
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                  index === activeSlide
                    ? 'bg-primary'
                    : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Preview Area */}
        <div className='flex-1 relative mb-2 md:mb-3'>
          <div className='w-full h-full bg-gradient-to-b from-background/20 to-background/10 rounded-lg border border-border/20 overflow-hidden'>
            {/* Slides */}
            <div className='relative w-full h-full'>
              {slides.map((slide, index) => {
                // Determina a direção da animação baseada na mudança de slide
                const isForward = (activeSlide === 1 && index === 0) || (activeSlide === 0 && index === 1);
                const isCurrent = index === activeSlide;
                const isPrevious = index < activeSlide;
                
                let xPosition;
                if (isCurrent) {
                  xPosition = '0%';
                } else if (isForward && isPrevious) {
                  xPosition = '-100%'; // Vai para esquerda quando volta
                } else if (!isForward && !isPrevious) {
                  xPosition = '100%'; // Vai para direita quando avança
                } else {
                  xPosition = isPrevious ? '-100%' : '100%';
                }

                return (
                  <motion.div
                    key={slide.id}
                    className='absolute inset-0 rounded-lg'
                    initial={{ x: '100%' }}
                    animate={{ x: xPosition }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeInOut',
                    }}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${slide.color} rounded-lg flex flex-col items-center justify-center text-foreground relative overflow-hidden border border-border/20`}
                    >
                      <div className='relative z-10 text-center space-y-1 md:space-y-2'>
                        <div className='text-2xl md:text-3xl lg:text-4xl'>{slide.icon}</div>
                        <div className='text-sm md:text-base lg:text-lg font-semibold text-foreground'>
                          {slide.title}
                        </div>
                        <div className='text-xs md:text-sm text-muted-foreground'>
                          Generated Content
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2'>
              <div className='w-6 h-6 md:w-7 md:h-7 bg-muted/20 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground border border-border/20 text-xs md:text-sm'>
                ←
              </div>
              <div className='w-6 h-6 md:w-7 md:h-7 bg-muted/20 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground border border-border/20 text-xs md:text-sm'>
                →
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className='space-y-1 md:space-y-2 flex-shrink-0'>
          <div className='h-1.5 md:h-2 lg:h-2.5 bg-muted/50 rounded-full overflow-hidden'>
            <motion.div
              className='h-full bg-primary/60 rounded-full'
              initial={{ width: 0 }}
              animate={{
                width: `${((activeSlide + 1) / slides.length) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
