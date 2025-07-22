'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  animationDelay?: number;
}

export function SectionHeader({
  title,
  subtitle,
  className = '',
  animationDelay = 0,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: animationDelay }}
      className={`text-center space-y-6 ${className}`}
    >
      <h2 className='text-4xl md:text-5xl font-bold text-foreground'>
        {title}
      </h2>
      {subtitle && (
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
