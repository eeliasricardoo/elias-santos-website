'use client';

import { motion } from 'framer-motion';


interface AnimatedBadgeProps {
  text: string;
  animationDelay?: number;
}

export function AnimatedBadge({
  text,
  animationDelay = 0,
}: AnimatedBadgeProps) {
  // Mounted check removed for immediate rendering

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: animationDelay,
        duration: 0.3,
        ease: 'easeOut',
      }}
      className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm'
    >
      <span className='text-sm font-medium text-primary'>{text}</span>
    </motion.div>
  );
}
