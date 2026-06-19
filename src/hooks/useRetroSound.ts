'use client';
import { useCallback, useRef } from 'react';

export function useRetroSound() {
  const audioCtx = useRef<AudioContext | null>(null);

  const getContext = () => {
    if (typeof window === 'undefined') return null;
    if (!audioCtx.current) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        audioCtx.current = new AudioContextClass();
      }
    }
    return audioCtx.current;
  };

  const playSound = useCallback((type: 'hover' | 'click' | 'keypress') => {
    const ctx = getContext();
    if (!ctx) return;
    
    // Resume context if suspended (browser auto-play policy)
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    const now = ctx.currentTime;

    if (type === 'hover') {
      // Soft, high-pitched sine blip for hover
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(1200, now);
      
      // Very quick volume envelope to prevent clicking
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.04, now + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      
      oscillator.start(now);
      oscillator.stop(now + 0.06);
    } else if (type === 'click') {
      // Sleek, modern UI "tech" confirmation for click
      oscillator.type = 'sine';
      
      // Two distinct, clean frequencies (e.g., A5 and C#6)
      oscillator.frequency.setValueAtTime(880, now);
      oscillator.frequency.setValueAtTime(1108.73, now + 0.08);
      
      // First blip volume envelope
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.05, now + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      
      // Second blip volume envelope
      gainNode.gain.setValueAtTime(0, now + 0.07);
      gainNode.gain.linearRampToValueAtTime(0.05, now + 0.08);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      
      oscillator.start(now);
      oscillator.stop(now + 0.35);
    } else if (type === 'keypress') {
      // Soft mechanical keyboard switch click sound
      oscillator.type = 'triangle';
      
      // Randomize frequency to sound like natural keyboard keys
      const freq = 450 + Math.random() * 250;
      oscillator.frequency.setValueAtTime(freq, now);
      
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.015, now + 0.003);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
      
      oscillator.start(now);
      oscillator.stop(now + 0.04);
    }
  }, []);

  const playHover = useCallback(() => playSound('hover'), [playSound]);
  const playClick = useCallback(() => playSound('click'), [playSound]);
  const playKeyPress = useCallback(() => playSound('keypress'), [playSound]);

  return { playHover, playClick, playKeyPress };
}
