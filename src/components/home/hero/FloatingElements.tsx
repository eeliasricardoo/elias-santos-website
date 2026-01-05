'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePerformance } from '@/hooks/use-performance-tier';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function FloatingElements() {
  const [mounted, setMounted] = useState(false);
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const performanceTier = usePerformance();

  useEffect(() => {
    setMounted(true);

    // ✅ Disable on low-end devices
    if (performanceTier === 'low') return;

    // Gera elementos flutuantes aleatórios - reduzido para melhor performance
    const elems = Array.from({ length: 2 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 50,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
    setElements(elems);
  }, [performanceTier]);

  if (!mounted || performanceTier === 'low') return null;

  return (
    <div className='absolute inset-0 -z-10 pointer-events-none overflow-hidden'>
      {elements.map(elem => (
        <motion.div
          key={elem.id}
          className={`absolute rounded-full opacity-10 ${performanceTier === 'high' ? 'blur-2xl' : 'blur-lg'
            }`}
          style={{
            left: `${elem.x}%`,
            top: `${elem.y}%`,
            width: `${elem.size}px`,
            height: `${elem.size}px`,
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
            willChange: 'transform', // GPU acceleration
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: elem.duration,
            repeat: Infinity,
            delay: elem.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
