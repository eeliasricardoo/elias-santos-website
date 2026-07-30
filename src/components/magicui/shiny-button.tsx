'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, variant = 'primary', ...props }, ref) => {
    const variantStyles = {
      primary:
        "bg-white text-black font-bold border border-white shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:bg-zinc-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] hover:scale-[1.02] active:scale-[0.98]",
      secondary:
        "bg-zinc-900 text-zinc-200 border border-zinc-700/80 hover:text-white hover:border-zinc-500 hover:bg-zinc-800 active:scale-[0.98]",
      outline:
        "bg-transparent text-white border border-zinc-700 hover:bg-zinc-900 hover:border-zinc-500 active:scale-[0.98]",
      accent:
        "bg-emerald-400 text-black font-extrabold border border-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.35)] hover:bg-emerald-300 hover:shadow-[0_0_35px_rgba(52,211,153,0.55)] hover:scale-[1.02] active:scale-[0.98]",
    };

    const shinyGradients = {
      primary: "from-transparent via-black/25 to-transparent",
      secondary: "from-transparent via-white/20 to-transparent",
      outline: "from-transparent via-white/20 to-transparent",
      accent: "from-transparent via-white/40 to-transparent",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-md px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-lg inline-flex items-center justify-center gap-2",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {/* Shiny sweep animation */}
        <motion.span
          className={cn(
            "absolute inset-0 -translate-x-full bg-gradient-to-r block z-10 pointer-events-none",
            shinyGradients[variant]
          )}
          animate={{
            x: ['-100%', '250%'],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 2.5,
            ease: 'easeInOut',
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
