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
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className='w-full h-full flex items-center justify-center p-4'>
      <div className='w-full h-full max-w-md mx-auto'>
        {/* Interface Principal */}
        <div className='relative w-full h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/30 rounded-2xl overflow-hidden shadow-2xl'>
          {/* Header */}
          <div className='relative p-4 border-b border-border/20 bg-gradient-to-r from-background/50 to-background/30'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                                  <div className='relative'>
                    <div className='w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg'>
                      <span className='text-primary-foreground font-bold text-sm'>
                        AI
                      </span>
                    </div>
                    <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card' />
                  </div>
                <div>
                  <h3 className='text-foreground font-semibold text-lg'>
                    Carousel Creator
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    AI-Powered Builder
                  </p>
                </div>
              </div>
              <div className='flex space-x-1'>
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === activeSlide
                        ? 'bg-primary'
                        : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Área de Preview */}
          <div className='flex-1 p-4 relative'>
            <div className='relative w-full h-48 bg-gradient-to-b from-background/20 to-background/10 rounded-xl border border-border/20 overflow-hidden'>
              {/* Slides em carrossel */}
              <div className='relative w-full h-full'>
                {slides.map((slide, index) => (
                  <motion.div
                    key={slide.id}
                    className={`absolute inset-0 rounded-xl ${
                      index === activeSlide ? 'z-10' : 'z-0'
                    }`}
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={{
                      opacity: index === activeSlide ? 1 : 0,
                      x: index === activeSlide ? 0 : 100,
                      scale: index === activeSlide ? 1 : 0.9,
                    }}
                    transition={{ 
                      duration: 0.5, 
                      ease: 'easeInOut'
                    }}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${slide.color} rounded-xl flex flex-col items-center justify-center text-foreground relative overflow-hidden border border-border/20`}
                    >


                      <div className='relative z-10 text-center space-y-2'>
                        <div className='text-4xl'>{slide.icon}</div>
                        <div className='text-lg font-semibold text-foreground'>
                          {slide.title}
                        </div>
                        <div className='text-sm text-muted-foreground'>
                          Generated Content
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Controles flutuantes */}
              <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                <div className='w-8 h-8 bg-muted/20 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground border border-border/20'>
                  ←
                </div>
                <div className='w-8 h-8 bg-muted/20 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground border border-border/20'>
                  →
                </div>
              </div>
            </div>
          </div>

          {/* Painel de Controles */}
          <div className='p-4 border-t border-border/20 bg-gradient-to-r from-background/30 to-background/20'>
            <div className='space-y-3'>
              {/* Barra de progresso */}
              <div className='w-full bg-muted/50 rounded-full h-2 overflow-hidden'>
                <motion.div
                  className='h-full bg-gradient-to-r from-primary to-primary/80 rounded-full'
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((activeSlide + 1) / slides.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Botões de ação */}
              <div className='flex space-x-3'>
                <div className='flex-1 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold text-base text-center shadow-lg hover:shadow-xl transition-all duration-200'>
                  Generate
                </div>
                <div className='px-6 py-3 bg-muted/20 backdrop-blur-sm text-foreground rounded-lg font-medium text-sm border border-border/20 hover:bg-muted/30 transition-colors duration-200'>
                  Export
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
