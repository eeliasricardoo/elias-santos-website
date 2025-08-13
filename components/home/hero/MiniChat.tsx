'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Bot, User, ArrowDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ShineBorder } from '@/components/magicui/shine-border';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { Inter } from 'next/font/google';
import { useAnalytics, AnalyticsEvents } from '@/lib/analytics';
import { useMounted } from '@/hooks/use-mounted';

const inter = Inter({ subsets: ['latin'] });

// Componente de digitação otimizado - versão simplificada
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

// Componente de Mensagem do Chat otimizado - versão simplificada
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
    <div
      className={`flex gap-4 p-4 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
            <div className='w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md flex-shrink-0 motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:scale-105'>
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
          {new Date().toLocaleTimeString('en-US', {
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
    </div>
  );
}

export function EmailClient() {
  const mounted = useMounted();
  const { track } = useAnalytics();
  const [chatMessages, setChatMessages] = useState<
    Array<{ id: number; text: string; isUser: boolean }>
  >([]);
  const [isTyping, setIsTyping] = useState(false);
  const messageIdRef = useRef(0);
  const currentMessageIndexRef = useRef(0);
  const isProcessingRef = useRef(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const userMessage = 'Tell me about your journey';
  const botResponse = `My journey started at 14 when I took my first web designer course and fell in love with HTML, CSS, and JavaScript. That early passion shaped my path to becoming a UX/UI designer and front-end developer. I've lived in Brazil, Mexico, Ecuador, and Colombia, speaking Portuguese, Spanish, and English. This multicultural experience gave me a unique perspective on how design can solve complex problems across different cultures and languages. I love creating experiences that not only look great but actually make people's lives easier.`;

  const messageQueue = useMemo(
    () => [
      { text: userMessage, isUser: true },
      { text: botResponse, isUser: false },
    ],
    [userMessage, botResponse]
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
      // Chat completo
      return;
    }

    isProcessingRef.current = true;
    const message = messageQueue[currentMessageIndexRef.current];

    if (!message) return;

    if (message.isUser) {
      addMessage(message.text, true);
      currentMessageIndexRef.current += 1;

      // Aguarda a mensagem do usuário terminar antes de processar a próxima
      setTimeout(() => {
        isProcessingRef.current = false;
        processNextMessage();
      }, 1200);
    } else {
      setIsTyping(true);
      setTimeout(scrollToBottom, 100);
      
      // Simula o tempo de digitação baseado no tamanho da mensagem
      const typingTime = Math.min(message.text.length * 30, 2000);
      
      setTimeout(() => {
        addMessage(message.text, false);
        setIsTyping(false);
        currentMessageIndexRef.current += 1;

        // Pausa mais longa após a primeira resposta do bot (4s)
        const waitTime = currentMessageIndexRef.current === 2 ? 6000 : 1000;
        
        setTimeout(() => {
          isProcessingRef.current = false;
          processNextMessage();
        }, waitTime);
      }, typingTime);
    }
  }, [messageQueue, addMessage, scrollToBottom]);

  // Inicia o fluxo quando o componente monta
  useEffect(() => {
    if (!mounted) return;
    
    // Inicia com a primeira mensagem do usuário
    setTimeout(() => {
      processNextMessage();
    }, 800);
  }, [mounted, processNextMessage]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`w-full max-w-6xl mx-auto mt-24 mb-24 relative ${inter.className}`}
    >
      <Card className='bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/30 shadow-2xl shadow-primary/5 relative z-10'>
        <ShineBorder
          borderWidth={1}
          duration={32}
          shineColor='hsl(var(--primary))'
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
                Online now
              </p>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div
          className='h-auto min-h-[320px] sm:min-h-[360px] p-4 bg-gradient-to-b from-background/20 to-background/10'
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
              <div className='flex gap-3 p-4'>
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
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
