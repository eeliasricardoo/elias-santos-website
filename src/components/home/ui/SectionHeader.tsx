'use client';

import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

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
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.12, delayChildren: animationDelay },
        },
      }}
      className={`text-center space-y-6 ${className}`}
    >
      <motion.h2
        variants={itemVariants}
        className='text-4xl md:text-5xl font-bold text-foreground'
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
