'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
  animationDelay?: number;
  variant?: 'default' | 'highlighted';
}

export function InfoCard({
  title,
  description,
  icon,
  className = '',
  animationDelay = 0,
  variant = 'default',
}: InfoCardProps) {
  const baseClasses =
    'bg-background/80 border border-border/20 rounded-lg p-4 shadow-sm';
  const variantClasses =
    variant === 'highlighted'
      ? 'bg-background/50 border-border/30'
      : baseClasses;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: animationDelay }}
      className={`${variantClasses} ${className}`}
    >
      {icon && (
        <div className='mb-3'>
          <svg
            className='w-6 h-6 text-blue-600 dark:text-blue-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d={icon}
            />
          </svg>
        </div>
      )}
      <div className='font-semibold text-foreground text-base mb-2'>
        {title}
      </div>
      <div className='text-sm text-muted-foreground'>{description}</div>
    </motion.div>
  );
}
