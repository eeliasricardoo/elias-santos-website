'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      className='fixed top-0 left-0 right-0 h-1 bg-foreground origin-left z-50'
      style={{ scaleX: scrollProgress }}
    />
  );
}
