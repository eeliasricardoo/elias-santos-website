'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollY / scrollHeight) * 100, 100);

      setScrollY(scrollY);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      className='fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block'
      style={{ opacity: scrollY > 100 ? 1 : 0 }}
    >
      <div className='flex flex-col items-center space-y-4'>
        <div className='w-1 h-32 bg-muted/30 rounded-full relative'>
          <motion.div
            className='absolute top-0 left-0 w-full bg-foreground rounded-full'
            style={{
              height: `${scrollProgress}%`,
            }}
          />
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className='w-6 h-6 border-2 border-muted-foreground/30 rounded-full flex items-center justify-center'
        >
          <ChevronDown className='w-3 h-3 text-muted-foreground' />
        </motion.div>
      </div>
    </motion.div>
  );
}
