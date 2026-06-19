'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  /**
   * How far the element drifts across its scroll pass, in px.
   * Positive = moves up as you scroll down. Negative = moves down.
   * Default 60.
   */
  amount?: number;
  /** Axis to drift on. Default 'y'. */
  axis?: 'x' | 'y';
}

/**
 * Scroll-linked parallax. The child drifts as it passes through the
 * viewport, adding depth without any scroll-jank (GPU transform + spring).
 * Disabled entirely under prefers-reduced-motion / low-end devices.
 */
export function Parallax({
  children,
  className,
  amount = 60,
  axis = 'y',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const raw = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  const drift = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.5 });

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={axis === 'y' ? { y: drift } : { x: drift }}
    >
      {children}
    </motion.div>
  );
}
