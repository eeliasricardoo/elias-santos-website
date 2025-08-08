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
  const [showCTA, setShowCTA] = useState(false);
  const messageIdRef = useRef(0);
  const currentMessageIndexRef = useRef(0);
  const isProcessingRef = useRef(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const userMessage = 'Tell me something interesting about Elias';
  const botResponse = `Elias built an AI tool that's 75% cheaper than ChatGPT and combines UX design with AI to solve real problems - increasing student engagement by 40% and reducing content creation time by 90%.`;

  const userMessage2 = 'Show me his resume';

  const messageQueue = useMemo(
    () => [
      { text: userMessage, isUser: true },
      { text: botResponse, isUser: false },
      { text: userMessage2, isUser: true },
    ],
    [userMessage, botResponse, userMessage2]
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

  // Ação: abrir/visualizar o currículo em nova aba
  const openResume = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/resume_eeliasricardoo.pdf';
    link.target = '_blank';
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    track(AnalyticsEvents.NAVIGATION_CLICK('view_resume'));
  }, [track]);

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
      // Chat completo - mostrar CTA
      setTimeout(() => {
        setShowCTA(true);
        // Scroll automático para mostrar o CTA
        setTimeout(() => {
          scrollToBottom();
        }, 100);
      }, 1000);
      return;
    }

    isProcessingRef.current = true;
    const message = messageQueue[currentMessageIndexRef.current];

    if (!message) return;

    if (message.isUser) {
      addMessage(message.text, true);
      currentMessageIndexRef.current += 1;

      // Se esta foi a última mensagem, mostrar CTA
      if (currentMessageIndexRef.current >= messageQueue.length) {
        setTimeout(() => {
          setShowCTA(true);
          // Scroll automático para mostrar o CTA
          setTimeout(() => {
            scrollToBottom();
          }, 100);
        }, 1200);
        return;
      }

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
          className='h-[480px] sm:h-[520px] overflow-y-auto p-4 bg-gradient-to-b from-background/20 to-background/10'
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
            
            {/* CTA após chat completo */}
            {showCTA && (
              <div className='flex flex-col items-center gap-4 p-6'>
                <div className='text-center space-y-2'>
                  <p className='text-sm text-muted-foreground'>
                    Want to learn more about Elias?
                  </p>
                  <ArrowDown className='w-4 h-4 text-muted-foreground mx-auto animate-bounce motion-safe:animate-bounce' />
                </div>
                
                <RainbowButton
                  onClick={openResume}
                  className='px-8 py-3 text-sm font-medium'
                >
                  View Resume
                </RainbowButton>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
