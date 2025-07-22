"use client"

import React from "react";
import { motion } from "framer-motion";

interface AnimatedBadgeProps {
  children: React.ReactNode;
  className?: string;
  animationDelay?: number;
}

export function AnimatedBadge({ children, className = "", animationDelay = 0 }: AnimatedBadgeProps) {
  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      className={`inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-base shadow border border-primary/20 ${className}`}
    >
      {children}
    </motion.span>
  );
} 