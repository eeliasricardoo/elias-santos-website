'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CarouselBuilderCard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dados do carrossel
  const carouselItems = [
    {
      id: 1,
      title: 'Story 1',
      content: 'Primeiro post do carrossel',
      color: 'from-blue-500 to-purple-600',
    },
    {
      id: 2,
      title: 'Story 2',
      content: 'Segundo post do carrossel',
      color: 'from-green-500 to-blue-600',
    },
    {
      id: 3,
      title: 'Story 3',
      content: 'Terceiro post do carrossel',
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 4,
      title: 'Story 4',
      content: 'Quarto post do carrossel',
      color: 'from-orange-500 to-red-600',
    },
    {
      id: 5,
      title: 'Story 5',
      content: 'Quinto post do carrossel',
      color: 'from-teal-500 to-cyan-600',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <div className='relative w-full h-full flex items-center justify-center'>
      {/* Background Particles */}
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-primary/20 rounded-full'
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Carrossel Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className='relative w-full h-full bg-gradient-to-br from-background/95 via-card/90 to-muted/80 rounded-2xl overflow-hidden backdrop-blur-xl border border-border/20 shadow-2xl'
      >
        {/* Header do Carrossel */}
        <div className='p-4 border-b border-border/20 bg-card/50 backdrop-blur-sm'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <div className='w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary/60 flex items-center justify-center'>
                <span className='text-xs font-bold text-primary-foreground'>
                  AI
                </span>
              </div>
              <div>
                <h3 className='text-sm font-semibold text-foreground'>
                  Carrossel Builder
                </h3>
                <p className='text-xs text-muted-foreground'>
                  AI Generated Stories
                </p>
              </div>
            </div>
            <div className='flex space-x-1'>
              {carouselItems.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary'
                      : 'bg-muted-foreground/30'
                  }`}
                  animate={{
                    scale: index === currentSlide ? 1.2 : 1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Carrossel Content */}
        <div className='flex-1 p-4 overflow-hidden'>
          <div className='relative w-full h-full'>
            {carouselItems.map((item, index) => (
              <motion.div
                key={item.id}
                className='absolute inset-0'
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  x: index === currentSlide ? 0 : 100,
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className='w-full h-full flex flex-col'>
                  {/* Story Content */}
                  <div
                    className={`flex-1 rounded-xl bg-gradient-to-br ${item.color} p-6 flex flex-col justify-center items-center text-center text-white shadow-lg`}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className='space-y-4'
                    >
                      <div className='text-2xl font-bold'>{item.title}</div>
                      <div className='text-sm opacity-90'>{item.content}</div>
                    </motion.div>
                  </div>

                  {/* Story Actions */}
                  <div className='mt-4 flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className='w-8 h-8 bg-muted/50 rounded-full flex items-center justify-center'
                      >
                        <span className='text-xs'>❤️</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className='w-8 h-8 bg-muted/50 rounded-full flex items-center justify-center'
                      >
                        <span className='text-xs'>💬</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className='w-8 h-8 bg-muted/50 rounded-full flex items-center justify-center'
                      >
                        <span className='text-xs'>📤</span>
                      </motion.button>
                    </div>
                    <div className='text-xs text-muted-foreground'>
                      {index + 1}/{carouselItems.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className='p-4 border-t border-border/20 bg-card/50 backdrop-blur-sm'>
          <div className='flex justify-center space-x-2'>
            {carouselItems.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary'
                    : 'bg-muted-foreground/30'
                }`}
                whileHover={{ scale: 1.2 }}
                animate={{
                  scale: index === currentSlide ? 1.2 : 1,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Enhanced Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className='absolute inset-0 bg-primary/15 rounded-full blur-3xl -z-10'
      />
    </div>
  );
}
