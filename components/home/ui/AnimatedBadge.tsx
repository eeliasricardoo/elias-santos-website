'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface AnimatedBadgeProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
  animationDelay?: number;
}

export function AnimatedBadge({
  text,
  icon = <Sparkles className='w-4 h-4 text-muted-foreground' />,
  className = '',
  animationDelay = 0,
}: AnimatedBadgeProps) {
  return (
    <motion.div
      data-testid='animated-badge'
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: animationDelay, type: 'spring', stiffness: 200 }}
      className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm shadow-sm ${className}`}
    >
      {icon}
      <span className='text-sm font-medium text-muted-foreground tracking-wide'>
        {text}
      </span>
    </motion.div>
  );
}
