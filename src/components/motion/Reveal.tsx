'use client';

import { motion, type Variants } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Entrance direction. Default 'up'. */
  direction?: Direction;
  /** Travel distance in px. Default 28. */
  distance?: number;
  /** Delay before the animation starts (s). */
  delay?: number;
  /** Animation duration (s). Default 0.7. */
  duration?: number;
  /** Add a subtle blur-in for a softer, premium feel. Default true. */
  blur?: boolean;
  /** Re-trigger every time it enters the viewport. Default false (animate once). */
  repeat?: boolean;
  /** Render as a different element (e.g. 'li', 'section'). */
  as?: 'div' | 'section' | 'li' | 'span' | 'article';
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Scroll-triggered reveal with a spring-based settle, optional blur-in,
 * and directional travel. Falls back to a plain element when the user
 * prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  direction = 'up',
  distance = 28,
  delay = 0,
  duration = 0.7,
  blur = true,
  repeat = false,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    const Tag = as as any;
    return <Tag className={className}>{children}</Tag>;
  }

  const { x, y } = offsets[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: x * distance,
      y: y * distance,
      filter: blur ? 'blur(8px)' : 'blur(0px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // easeOutExpo-ish: snappy in, soft landing
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, margin: '-80px' }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Wrap a group of <Reveal> (or any motion children using the `item` variant)
 * to stagger their entrances as the group scrolls into view.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0,
  repeat = false,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  repeat?: boolean;
  as?: 'div' | 'section' | 'ul';
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    const Tag = as as any;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * A single child of <RevealGroup>. Inherits stagger timing from the parent.
 */
export const revealItemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
