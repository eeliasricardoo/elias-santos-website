import { useEffect } from 'react';
import { useRetroSound } from '@/hooks/useRetroSound';

/**
 * Attaches retro sound effects to the hero CTA buttons after idle hydration.
 * Buttons are pre-rendered as static HTML; this only wires up the audio events.
 */
export function HeroSounds() {
  const { playHover, playClick } = useRetroSound();

  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLElement>('[data-hero-cta]');
    const cleanups: (() => void)[] = [];

    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', playHover);
      btn.addEventListener('click', playClick);
      cleanups.push(() => {
        btn.removeEventListener('mouseenter', playHover);
        btn.removeEventListener('click', playClick);
      });
    });

    return () => cleanups.forEach(fn => fn());
  }, [playHover, playClick]);

  return null;
}
