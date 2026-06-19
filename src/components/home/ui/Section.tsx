'use client';

import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  animationDelay?: number;
}

export function Section({
  id,
  children,
  className = '',
  animationDelay = 0,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: animationDelay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative py-16 overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
}
