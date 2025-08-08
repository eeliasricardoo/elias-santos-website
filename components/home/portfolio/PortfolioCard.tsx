'use client';

import { useRef, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Rocket, Bolt, Sparkles, Timer, TrendingUp, PiggyBank } from 'lucide-react';
import Image from 'next/image';

interface PortfolioCardProps {
  card: {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    image?: string;
    imageAlt?: string;
  };
  index: number;
  totalCards: number;
}

export function PortfolioCard({ card, index }: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  const imageOnRight = useMemo(() => index === 0 || index === 2, [index]);

  const stacks = useMemo<string[]>(() => {
    if (index === 0) return ['Next.js', 'TypeScript', 'Tailwind', 'Framer'];
    if (index === 1) return ['Next.js', 'SSR', 'Zod', 'Recharts'];
    return ['Next.js', 'Streaming', 'Zod', 'Clarity'];
  }, [index]);

  const highlights = useMemo<string[]>(() => {
    if (index === 0)
      return ['No‑code editor', 'Export React/PNG', 'AI text'];
    if (index === 1) return ['Leaderboards', 'Badges/Levels', 'Admin'];
    return ['Multimodal', 'Long‑term memory', 'Reusable flows'];
  }, [index]);

  const tags = useMemo<string[]>(() => {
    if (index === 0) return ['No‑Code', 'AI', 'Content'];
    if (index === 1) return ['Gamification', 'UX Research'];
    return ['AI', 'Multimodal', 'Productivity'];
  }, [index]);

  const metrics = useMemo(
    () => {
      if (index === 0) {
        return [
          { icon: <Timer className='size-4 text-primary' />, value: 'Minutes', label: 'to create' },
          { icon: <TrendingUp className='size-4 text-green-500' />, value: '90%', label: 'time saved' },
          { icon: <PiggyBank className='size-4 text-amber-500' />, value: 'Export', label: 'React/PNG' },
        ];
      }
      if (index === 1) {
        return [
          { icon: <TrendingUp className='size-4 text-green-500' />, value: '+40%', label: 'engagement' },
          { icon: <Timer className='size-4 text-primary' />, value: 'Weekly', label: 'leaderboard' },
          { icon: <PiggyBank className='size-4 text-amber-500' />, value: 'Admin', label: 'controls' },
        ];
      }
      return [
        { icon: <PiggyBank className='size-4 text-amber-500' />, value: '75%$', label: 'cheaper' },
        { icon: <TrendingUp className='size-4 text-green-500' />, value: 'Fast', label: 'streaming' },
        { icon: <Timer className='size-4 text-primary' />, value: '1wk', label: 'build' },
      ];
    },
    [index]
  );

  return (
    <div
      ref={cardRef}
      className='relative cursor-pointer'
      onClick={handleCardClick}
      onMouseEnter={preloadPage}
    >
      <div className='grid grid-cols-1 md:grid-cols-12 items-stretch'>
        {/* Conteúdo */}
        <div className={imageOnRight ? 'order-2 md:order-1 md:col-span-5' : 'order-2 md:order-2 md:col-span-5'}>
          <div className='h-full w-full flex'>
            <div className='mx-auto px-6 md:px-10 lg:px-14 xl:px-20 py-10 md:py-16 w-full flex items-center'>
              <div className='space-y-6 max-w-3xl'>
                <div className='space-y-3'>
                  <h3 className='text-3xl md:text-4xl font-bold tracking-tight'>
                    {card.title}
                  </h3>
                  <div className='w-24 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full' />
                  <div className='flex flex-wrap gap-2 pt-2'>
                    {tags.map(tag => (
                      <Badge key={tag} variant='outline' className='rounded-full px-2.5 py-0.5'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className='text-muted-foreground leading-relaxed text-lg md:text-xl'>
                  {card.description}
                </p>

                {/* Stacks */}
                <div className='flex flex-wrap gap-2 pt-1'>
                  {stacks.map(stack => (
                    <Badge key={stack} variant='secondary' className='px-2 py-1'>
                      {stack}
                    </Badge>
                  ))}
                </div>

                {/* Destaques rápidos */}
                <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2'>
                  {highlights.map((item, i) => (
                    <li key={i} className='flex items-center gap-2 text-sm text-muted-foreground'>
                      {i === 0 && <CheckCircle2 className='size-4 text-primary' />}
                      {i === 1 && <Rocket className='size-4 text-primary' />}
                      {i === 2 && <Bolt className='size-4 text-primary' />}
                      {i > 2 && <Sparkles className='size-4 text-primary' />}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Métricas resumidas */}
                <div className='grid grid-cols-3 gap-3 pt-2'>
                  {metrics.map((m, i) => (
                    <div key={i} className='flex items-center gap-2 rounded-lg border border-border/30 bg-card/50 px-3 py-2'>
                      {m.icon}
                      <div className='leading-tight'>
                        <div className='text-xs text-muted-foreground'>{m.label}</div>
                        <div className='text-sm font-semibold text-foreground'>{m.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='pt-2'>
                  <RainbowButton
                    onClick={handleButtonClick}
                    className='
                      w-full justify-center px-7 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium
                      text-white
                      bg-[linear-gradient(#000,#000),linear-gradient(#000_50%,rgba(0,0,0,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]
                      dark:bg-[linear-gradient(#000,#000),linear-gradient(#000_50%,rgba(0,0,0,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]
                    '
                  >
                    {card.buttonText}
                  </RainbowButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className={imageOnRight ? 'order-1 md:order-2 md:col-span-7' : 'order-1 md:order-1 md:col-span-7'}>
          {card.image && (
            <div className='relative w-full h-screen overflow-hidden bg-background'>
              <Image src={card.image} alt={card.imageAlt || card.title} fill className='object-contain' sizes='100vw' priority={index === 0} quality={85} />
              <div className={imageOnRight ? 'absolute inset-y-0 left-0 w-40 md:w-64 bg-gradient-to-r from-background/80 via-background/20 to-transparent' : 'absolute inset-y-0 right-0 w-40 md:w-64 bg-gradient-to-l from-background/80 via-background/20 to-transparent'} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
