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
    {
      id: 3,
      color: 'from-primary/20 to-primary/10',
      icon: '💡',
      title: 'Slide 3',
    },
    {
      id: 4,
      color: 'from-primary/15 to-primary/5',
      icon: '🎯',
      title: 'Slide 4',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className='w-full h-full flex items-center justify-center p-4'>
      <div className='w-full h-full max-w-md mx-auto'>
        {/* Interface Principal */}
        <div className='relative w-full h-full bg-card/90 backdrop-blur-xl border border-border/30 rounded-2xl overflow-hidden shadow-2xl'>
          {/* Header com efeito de vidro */}
          <div className='relative p-4 border-b border-border/20 bg-card/50 backdrop-blur-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <div className='relative'>
                  <div className='w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg'>
                    <span className='text-primary-foreground font-bold text-sm'>
                      AI
                    </span>
                  </div>
                  <motion.div
                    className='absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card'
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
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
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeSlide
                        ? 'bg-primary'
                        : 'bg-muted-foreground/30'
                    }`}
                    animate={{
                      scale: index === activeSlide ? 1.3 : 1,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Área de Preview */}
          <div className='flex-1 p-4 relative'>
            <div className='relative w-full h-48 bg-card/50 rounded-xl border border-border/20 overflow-hidden'>
              {/* Slides em carrossel */}
              <div className='relative w-full h-full'>
                {slides.map((slide, index) => (
                  <motion.div
                    key={slide.id}
                    className={`absolute inset-0 rounded-xl ${
                      index === activeSlide ? 'z-10' : 'z-0'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: index === activeSlide ? 1 : 0,
                      scale: index === activeSlide ? 1 : 0.8,
                      x: index === activeSlide ? 0 : 50,
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${slide.color} rounded-xl flex flex-col items-center justify-center text-foreground relative overflow-hidden border border-border/20`}
                    >
                      {/* Padrão de fundo animado */}
                      <div className='absolute inset-0 opacity-10'>
                        <div className='w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] animate-pulse' />
                      </div>

                      <motion.div
                        className='relative z-10 text-center space-y-2'
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        <div className='text-4xl'>{slide.icon}</div>
                        <div className='text-lg font-semibold text-foreground'>
                          {slide.title}
                        </div>
                        <div className='text-sm text-muted-foreground'>
                          Generated Content
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Controles flutuantes */}
              <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card/90 transition-colors border border-border/20'
                >
                  ←
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card/90 transition-colors border border-border/20'
                >
                  →
                </motion.button>
              </div>
            </div>
          </div>

          {/* Painel de Controles */}
          <div className='p-4 border-t border-border/20 bg-card/50 backdrop-blur-sm'>
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
              <div className='flex space-x-2'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='flex-1 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-medium text-sm hover:from-primary/90 hover:to-primary/70 transition-all duration-200'
                >
                  Generate
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-4 py-2 bg-card/50 text-foreground rounded-lg font-medium text-sm hover:bg-card/70 transition-colors border border-border/20'
                >
                  Export
                </motion.button>
              </div>
            </div>
          </div>

          {/* Efeito de brilho sutil */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/3 to-transparent rounded-2xl'
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </div>
  );
}
