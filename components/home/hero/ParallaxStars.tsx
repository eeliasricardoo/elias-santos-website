'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxStars() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  const starsY = useTransform(scrollY, [0, 500], [0, 200]);
  const starsOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Gera estrelas aleatórias
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 2,
  }));

  return (
    <motion.div
      className='absolute inset-0 -z-10 pointer-events-none'
      style={{ opacity: starsOpacity }}
    >
      {stars.map(star => (
        <motion.div
          key={star.id}
          className='absolute rounded-full bg-primary'
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            y: starsY,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + star.delay,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
    </motion.div>
  );
}
