'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FastForwardIconProps {
  className?: string;
  animationDelay?: number;
}

export function FastForwardIcon({
  className = '',
  animationDelay = 0,
}: FastForwardIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      viewport={{ once: true }}
      className={`flex justify-end mt-12 ${className}`}
    >
      <div className='w-8 h-8 border-2 border-muted-foreground/30 rounded-full flex items-center justify-center'>
        <svg
          className='w-4 h-4 text-muted-foreground/60'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 5l7 7-7 7M5 5l7 7-7 7'
          />
        </svg>
      </div>
    </motion.div>
  );
}
