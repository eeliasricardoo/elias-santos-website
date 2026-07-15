'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-md px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer",
          "bg-zinc-950 text-zinc-350 border border-zinc-800 hover:text-white hover:border-zinc-700 active:scale-[0.98]",
          className
        )}
        {...props}
      >
        {/* Shiny sweep effect */}
        <motion.span
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent block z-10"
          animate={{
            x: ['0%', '250%'],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 2.5,
            ease: 'linear',
          }}
          style={{
            skewX: -20,
          }}
        />
        <span className="relative z-20 flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

ShinyButton.displayName = 'ShinyButton';
