

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { CarouselBuilderCard } from '@/components/portfolio/carousel-builder';

interface AnimatedMockupProps {
  type: 'ranking' | 'ventus-chat' | 'carousel-builder' | 'support-queue';
}

export function AnimatedMockup({ type }: AnimatedMockupProps) {
  const [currentScore, setCurrentScore] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry?.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.disconnect(); // Desconectar após primeira visualização
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    const node = rootRef.current;
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated, isClient]);

  useEffect(() => {
    if (prefersReduced || !isVisible) return;

    // Reduzir frequência de atualização para performance
    const interval = setInterval(() => {
      setCurrentScore(
        prev => (prev + Math.floor(Math.random() * 30) + 5) % 1000
      );
    }, 4000); // Aumentado de 3000 para 4000ms

    return () => clearInterval(interval);
  }, [isVisible, prefersReduced]);

  if (type === 'ventus-chat') {
    return (
      <div
        className='relative w-full h-full flex items-center justify-center'
      >
        {/* Chat Container */}
        <div
          className='relative w-full h-full bg-gradient-to-br from-background/95 via-card/90 to-muted/80 overflow-hidden backdrop-blur-xl border border-border/20 shadow-xl'
        >
          {/* Chat Messages */}
          <div className='flex-1 p-3 md:p-4 lg:p-5 space-y-2 md:space-y-3 lg:space-y-4 overflow-hidden h-[calc(100%-3rem)] md:h-[calc(100%-4rem)] lg:h-[calc(100%-5rem)]'>
            {/* AI Message 1 */}
            <div
              className='flex items-end space-x-2 md:space-x-3'
            >
              <div className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-primary/80 flex items-center justify-center flex-shrink-0'>
                <span className='text-xs md:text-sm font-bold text-primary-foreground'>
                  AI
                </span>
              </div>
              <div className='bg-card/70 backdrop-blur-sm rounded-xl md:rounded-2xl rounded-bl-md p-3 md:p-4 lg:p-5 border border-border/20 shadow-sm max-w-[80%]'>
                <p className='text-xs md:text-sm lg:text-base text-foreground leading-relaxed'>
                  Olá! Como posso ajudar você hoje?
                </p>
              </div>
            </div>

            {/* User Message */}
            <div
              className='flex items-end space-x-2 md:space-x-3 justify-end'
            >
              <div className='bg-primary/80 backdrop-blur-sm rounded-xl md:rounded-2xl rounded-br-md p-3 md:p-4 lg:p-5 border border-primary/20 shadow-sm max-w-[80%]'>
                <p className='text-xs md:text-sm lg:text-base text-primary-foreground leading-relaxed'>
                  Preciso de ajuda com React
                </p>
              </div>
              <div className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-muted-foreground/60 flex items-center justify-center flex-shrink-0'>
                <span className='text-xs md:text-sm font-bold text-primary-foreground'>
                  U
                </span>
              </div>
            </div>

            {/* AI Message 2 */}
            <div
              className='flex items-end space-x-2 md:space-x-3'
            >
              <div className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-primary/80 flex items-center justify-center flex-shrink-0'>
                <span className='text-xs md:text-sm font-bold text-primary-foreground'>
                  AI
                </span>
              </div>
              <div className='bg-card/70 backdrop-blur-sm rounded-xl md:rounded-2xl rounded-bl-md p-3 md:p-4 lg:p-5 border border-border/20 shadow-sm max-w-[80%]'>
                <p className='text-xs md:text-sm lg:text-base text-foreground leading-relaxed'>
                  Claro! O que você quer saber sobre React?
                </p>
              </div>
            </div>

            {/* User Message 2 */}
            <div
              className='flex items-end space-x-2 md:space-x-3 justify-end'
            >
              <div className='bg-primary/80 backdrop-blur-sm rounded-xl md:rounded-2xl rounded-br-md p-3 md:p-4 lg:p-5 border border-primary/20 shadow-sm max-w-[80%]'>
                <p className='text-xs md:text-sm lg:text-base text-primary-foreground leading-relaxed'>
                  Como criar um componente?
                </p>
              </div>
              <div className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-muted-foreground/60 flex items-center justify-center flex-shrink-0'>
                <span className='text-xs md:text-sm font-bold text-primary-foreground'>
                  U
                </span>
              </div>
            </div>

            {/* AI Typing Indicator */}
            <div
              className='flex items-end space-x-2 md:space-x-3'
            >
              <div className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-primary/80 flex items-center justify-center flex-shrink-0'>
                <span className='text-xs md:text-sm font-bold text-primary-foreground'>
                  AI
                </span>
              </div>
              <div className='bg-card/70 backdrop-blur-sm rounded-xl md:rounded-2xl rounded-bl-md p-3 md:p-4 lg:p-5 border border-border/20 shadow-sm'>
                <div className='flex space-x-1 md:space-x-1.5'>
                  <div className='w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-muted-foreground rounded-full' />
                  <div className='w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-muted-foreground rounded-full' />
                  <div className='w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-muted-foreground rounded-full' />
                </div>
              </div>
            </div>
          </div>

          {/* Input Bar */}
          <div className='p-3 md:p-4 lg:p-5 border-t border-border/20'>
            <div className='flex items-center space-x-2 md:space-x-3'>
              <div className='flex-1 bg-muted/50 rounded-full px-4 md:px-5 lg:px-6 py-2 md:py-3'>
                <p className='text-sm md:text-base lg:text-lg text-muted-foreground'>
                  Type a message...
                </p>
              </div>
              <button
                className='w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-primary/80 rounded-full flex items-center justify-center'
              >
                <span className='text-sm md:text-base lg:text-lg text-primary-foreground'>
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ranking') {
    return (
      <div
        className='w-full h-full flex items-center justify-center bg-transparent'
      >
        <div
          className='w-full h-full p-3 md:p-4 lg:p-5 bg-card/80 border border-border/20 shadow-none flex flex-col'
        >
          {/* Título */}
          <div className='text-center space-y-1 md:space-y-2 flex-shrink-0'>
            <h3 className='text-base md:text-lg lg:text-xl font-semibold text-foreground'>
              Ranking
            </h3>
            <p className='text-xs md:text-sm lg:text-base text-muted-foreground'>
              Engagement Score
            </p>
          </div>

          {/* Score */}
          <div className='text-center flex-shrink-0 py-1 md:py-2'>
            <div
              className='text-xl md:text-2xl lg:text-3xl font-bold text-primary'
            >
              {currentScore}
            </div>
            <div className='text-xs md:text-sm lg:text-base text-muted-foreground'>
              points
            </div>
          </div>

          {/* Progress Bar */}
          <div className='space-y-1 md:space-y-2 flex-shrink-0'>
            <div className='flex justify-between text-xs md:text-sm lg:text-base text-muted-foreground'>
              <span>Progress</span>
              <span>75%</span>
            </div>
            <div className='h-1.5 md:h-2 lg:h-2.5 bg-muted/50 rounded-full overflow-hidden'>
              <div
                className='h-full w-3/4 bg-primary/60 rounded-full'
              />
            </div>
          </div>

          {/* User List */}
          <div className='space-y-1 md:space-y-1.5 lg:space-y-2 flex-1 overflow-hidden mt-2 md:mt-3'>
            {[
              { name: 'Ana Silva', score: 892, emoji: '👑' },
              { name: 'João Costa', score: 756, emoji: '🥈' },
              { name: 'Maria Santos', score: 634, emoji: '🥉' },
            ].map((user, index) => (
              <div
                key={user.name}
                className='flex items-center space-x-2 md:space-x-3 bg-card/60 rounded-md md:rounded-lg px-2 md:px-3 lg:px-4 py-1.5 md:py-2 lg:py-2.5'
              >
                <div className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs md:text-sm lg:text-base font-bold text-primary flex-shrink-0'>
                  {index + 1}
                </div>
                <div className='flex-1 min-w-0'>
                  <div className='text-xs md:text-sm lg:text-base font-medium text-foreground truncate'>
                    {user.name}
                  </div>
                  <div className='text-xs md:text-xs lg:text-sm text-muted-foreground'>
                    {user.emoji} Top
                  </div>
                </div>
                <div className='text-right flex-shrink-0'>
                  <div className='text-xs md:text-sm lg:text-base font-bold text-foreground'>
                    {user.score}
                  </div>
                  <div className='text-xs md:text-xs lg:text-sm text-muted-foreground'>
                    pts
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'support-queue') {
    return (
      <div
        className='relative w-full h-full flex items-center justify-center'
      >
        {/* Painel do pop-up de fila */}
        <div
          className='relative w-[520px] max-w-[92%] bg-card/85 border border-border/20 shadow-2xl rounded-xl overflow-hidden'
        >
          <div className='p-4 md:p-5 lg:p-6 space-y-4'>
            <div className='flex items-center justify-between'>
              <h4 className='text-base md:text-lg lg:text-xl font-semibold text-foreground'>
                Take ticket
              </h4>
              <span className='text-muted-foreground'>×</span>
            </div>

            <div className='space-y-3'>
              <div className='text-sm md:text-base text-muted-foreground'>
                Total users waiting in queue:
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-md bg-muted/60 border border-border/30 flex items-center justify-center text-lg font-bold text-foreground'>
                  8
                </div>
                <div className='flex-1 h-2 rounded-full bg-muted/50 overflow-hidden'>
                  <div
                    className='h-full bg-primary/60 rounded-full'
                    style={{ width: '75%' }}
                  />
                </div>
                <div className='text-xs md:text-sm text-muted-foreground'>
                  75%
                </div>
              </div>
            </div>

            <div className='pt-1'>
              <button className='w-full h-10 md:h-11 lg:h-12 rounded-md bg-muted/40 border border-border/30 text-foreground font-medium shadow-sm hover:bg-muted/60 transition-colors'>
                Accept
              </button>
            </div>

            <div className='text-xs md:text-sm text-muted-foreground'>
              Your access will be unlocked at{' '}
              <span className='font-semibold text-foreground'>19:52</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'carousel-builder') {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <CarouselBuilderCard />
      </div>
    );
  }

  // Placeholder for other types
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='text-muted-foreground'>Mockup {type} in development</div>
    </div>
  );
}
