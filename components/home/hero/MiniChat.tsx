'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, MotionStyle, Transition } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ShineBorder } from '@/components/magicui/shine-border';
import { Inter } from 'next/font/google';
import { useMounted } from '@/hooks/use-mounted';

const inter = Inter({ subsets: ['latin'] });

// Componente de digitação otimizado
function TypewriterText({
  text,
  speed = 25,
  onComplete,
}: {
  text: string;
  speed?: number;
  onComplete?: () => void;
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
    return undefined;
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && <span className='animate-pulse'>|</span>}
    </span>
  );
}

// Componente de Mensagem do Chat otimizado
function ChatMessage({
  message,
  isUser = false,
}: {
  message: string;
  isUser?: boolean;
}) {
  const [isTyping, setIsTyping] = useState(true);

  const handleComplete = useCallback(() => {
    setIsTyping(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`flex gap-4 p-4 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className='w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md flex-shrink-0'>
          <Bot className='w-4 h-4 text-primary-foreground' />
        </div>
      )}
      <div className={`max-w-[75%] ${isUser ? 'order-first' : ''}`}>
        <div
          className={`rounded-2xl px-4 py-3 text-sm shadow-sm backdrop-blur-sm ${
            isUser
              ? 'bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-primary/20'
              : 'bg-muted/40 text-foreground border border-border/20'
          }`}
        >
          {isTyping ? (
            <TypewriterText
              text={message}
              speed={isUser ? 10 : 25}
              onComplete={handleComplete}
            />
          ) : (
            <span className='leading-relaxed'>{message}</span>
          )}
        </div>
        <div
          className={`text-xs text-muted-foreground mt-2 ${isUser ? 'text-right' : 'text-left'}`}
        >
          {new Date().toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
      {isUser && (
        <div className='w-8 h-8 rounded-full bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center shadow-md flex-shrink-0'>
          <User className='w-4 h-4 text-muted-foreground' />
        </div>
      )}
    </motion.div>
  );
}

// Componente BorderBeam
interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  transition?: Transition;
  className?: string;
  style?: React.CSSProperties;
  reverse?: boolean;
  initialOffset?: number;
  borderWidth?: number;
}

const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = '#ffaa40',
  colorTo = '#9c40ff',
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}: BorderBeamProps) => {
  return (
    <div
      className='pointer-events-none absolute inset-0 rounded-[inherit] border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] border-(length:--border-beam-width)'
      style={
        {
          '--border-beam-width': `${borderWidth}px`,
        } as React.CSSProperties
      }
    >
      <motion.div
        className={cn(
          'absolute aspect-square',
          'bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent',
          className
        )}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            '--color-from': colorFrom,
            '--color-to': colorTo,
            ...style,
          } as MotionStyle
        }
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration,
          delay: -delay,
          ...transition,
        }}
      />
    </div>
  );
};

export function EmailClient() {
  const mounted = useMounted();
  const [chatMessages, setChatMessages] = useState<
    Array<{ id: number; text: string; isUser: boolean }>
  >([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showInputTyping, setShowInputTyping] = useState(true);
  const [inputText, setInputText] = useState('');
  const messageIdRef = useRef(0);
  const currentMessageIndexRef = useRef(0);
  const isProcessingRef = useRef(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const userMessage = 'Tell me something interesting about Elias';
  const botResponse =
    'Elias currently has a 592-day streak on Duolingo. He also created a script that automatically updates this number on the website every day. His commitment to continuous learning reflects his approach to professional development.';

  const userMessage2 = 'Why should we work with him?';
  const botResponse2 =
    "Elias brings a unique combination of technical expertise and strategic thinking. With over 15 years of skateboarding experience, he's learned resilience, problem-solving, and pushing through challenges. His interdisciplinary background spans Product Design, SaaS development, and full-stack engineering. He's a complete professional who understands product, code, and most importantly, people.";

  const messageQueue = useMemo(
    () => [
      { text: userMessage, isUser: true, shouldTypeInInput: false },
      { text: botResponse, isUser: false, shouldTypeInInput: false },
      { text: userMessage2, isUser: true, shouldTypeInInput: true },
      { text: botResponse2, isUser: false, shouldTypeInInput: false },
    ],
    [userMessage, botResponse, userMessage2, botResponse2]
  );

  // Função para scroll automático
  const scrollToBottom = useCallback(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, []);

  // Função otimizada para gerar ID único
  const getNextMessageId = useCallback(() => {
    messageIdRef.current += 1;
    return messageIdRef.current;
  }, []);

  // Função otimizada para reiniciar o loop
  const restartLoop = useCallback(() => {
    setChatMessages([]);
    setShowInputTyping(true);
    setInputText('');
    currentMessageIndexRef.current = 0;
    isProcessingRef.current = false;
  }, []);

  // Função otimizada para adicionar mensagens
  const addMessage = useCallback(
    (text: string, isUser: boolean) => {
      setChatMessages(prev => [
        ...prev,
        {
          id: getNextMessageId(),
          text,
          isUser,
        },
      ]);
      setTimeout(scrollToBottom, 100);
    },
    [getNextMessageId, scrollToBottom]
  );

  // Função para processar a próxima mensagem na fila
  const processNextMessage = useCallback(() => {
    if (isProcessingRef.current) return;
    if (currentMessageIndexRef.current >= messageQueue.length) {
      setTimeout(() => {
        restartLoop();
      }, 15000);
      return;
    }

    isProcessingRef.current = true;
    const message = messageQueue[currentMessageIndexRef.current];

    if (!message) return;

    if (message.isUser) {
      if (message.shouldTypeInInput) {
        // Digita no input
        setShowInputTyping(true);
        setInputText('');
        let currentIndex = 0;
        const typeInInput = () => {
          if (currentIndex < message.text.length) {
            setInputText(message.text.slice(0, currentIndex + 1));
            currentIndex++;
            setTimeout(typeInInput, 50);
          } else {
            setTimeout(() => {
              addMessage(message.text, true);
              setShowInputTyping(false);
              setInputText('');
              currentMessageIndexRef.current += 1;

              setTimeout(() => {
                isProcessingRef.current = false;
                processNextMessage();
              }, 3000);
            }, 1000);
          }
        };
        typeInInput();
      } else {
        addMessage(message.text, true);
        currentMessageIndexRef.current += 1;

        setTimeout(() => {
          isProcessingRef.current = false;
          processNextMessage();
        }, 3000);
      }
    } else {
      setIsTyping(true);
      setTimeout(scrollToBottom, 100);
      setTimeout(() => {
        addMessage(message.text, false);
        setIsTyping(false);
        currentMessageIndexRef.current += 1;

        setTimeout(() => {
          isProcessingRef.current = false;
          processNextMessage();
        }, 5000);
      }, 800);
    }
  }, [messageQueue, addMessage, restartLoop, scrollToBottom]);

  // Inicia o fluxo quando o componente monta
  useEffect(() => {
    if (!mounted) return;

    if (
      showInputTyping &&
      inputText === '' &&
      currentMessageIndexRef.current === 0
    ) {
      let currentIndex = 0;
      const typeInInput = () => {
        if (currentIndex < userMessage.length) {
          setInputText(userMessage.slice(0, currentIndex + 1));
          currentIndex++;
          setTimeout(typeInInput, 50);
        } else {
          setTimeout(() => {
            setShowInputTyping(false);
            setInputText('');

            setTimeout(() => {
              processNextMessage();
            }, 1000);
          }, 1000);
        }
      };
      typeInInput();
    }
  }, [mounted, showInputTyping, inputText, userMessage, processNextMessage]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`w-full max-w-6xl mx-auto mt-24 mb-24 relative ${inter.className}`}
    >
      {/* Luz atrás do card */}
      <div className='absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/10 to-primary/20 blur-2xl rounded-2xl transform scale-20 -z-100'></div>

      <Card className='bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/30 shadow-2xl shadow-primary/5 relative z-10'>
        <ShineBorder
          borderWidth={1}
          duration={32}
          shineColor='hsl(var(--primary))'
        />
        <BorderBeam
          size={60}
          duration={4}
          colorFrom='hsl(var(--primary))'
          colorTo='hsl(var(--primary) / 0.5)'
          borderWidth={2}
        />
        {/* Header Simplificado */}
        <div className='flex items-center justify-between p-6 border-b border-border/20 bg-gradient-to-r from-background/50 to-background/30'>
          <div className='flex items-center gap-4'>
            <div className='relative'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg'>
                <Bot className='w-5 h-5 text-primary-foreground' />
              </div>
              <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse'></div>
            </div>
            <div>
              <h3 className='font-bold text-lg bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent'>
                Chat Elias
              </h3>
              <p className='text-sm text-muted-foreground flex items-center gap-2'>
                <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                Online agora
              </p>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div
          className='h-[420px] overflow-y-auto p-4 bg-gradient-to-b from-background/20 to-background/10'
          ref={chatContainerRef}
        >
          <div className='space-y-4'>
            {chatMessages.map(message => (
              <ChatMessage
                key={message.id}
                message={message.text}
                isUser={message.isUser}
              />
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className='flex gap-3 p-4'
              >
                <div className='w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md'>
                  <Bot className='w-4 h-4 text-primary-foreground' />
                </div>
                <div className='bg-muted/40 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-sm'>
                  <div className='flex gap-1'>
                    <div className='w-2 h-2 bg-muted-foreground rounded-full animate-bounce'></div>
                    <div
                      className='w-2 h-2 bg-muted-foreground rounded-full animate-bounce'
                      style={{ animationDelay: '0.1s' }}
                    ></div>
                    <div
                      className='w-2 h-2 bg-muted-foreground rounded-full animate-bounce'
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Input Area Simplificado */}
        <div className='p-6 border-t border-border/20 bg-gradient-to-r from-background/30 to-background/20'>
          <div className='flex items-center gap-4 bg-muted/20 backdrop-blur-sm rounded-2xl p-4 border border-border/20 shadow-inner'>
            <div className='flex-1'>
              <div className='relative'>
                {showInputTyping ? (
                  <div className='text-foreground text-sm min-h-[24px] flex items-center'>
                    {inputText}
                    <span className='ml-1 w-0.5 h-4 bg-foreground animate-pulse'></span>
                  </div>
                ) : (
                  <div className='text-muted-foreground text-sm'>
                    Ask me anything...
                  </div>
                )}
              </div>
            </div>
            <div className='w-8 h-8 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center'>
              <div className='w-3 h-3 bg-primary/40 rounded-full'></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
