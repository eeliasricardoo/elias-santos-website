"use client"

import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  animationDelay?: number;
}

export function Section({ id, children, className = "", animationDelay = 0 }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: animationDelay }}
      className={`relative py-24 overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
} 