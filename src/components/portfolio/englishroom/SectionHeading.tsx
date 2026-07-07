'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  index?: number;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, index, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-3"
    >
      {(eyebrow || index !== undefined) && (
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-3">
          {index !== undefined && (
            <span style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>/{String(index).padStart(2, '0')}</span>
          )}
          {eyebrow}
        </span>
      )}
      <h2 className="flex items-start gap-3 text-3xl md:text-4xl font-bold text-foreground leading-[1.1]">
        <span
          className="mt-1.5 inline-block h-7 w-1.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: 'var(--brand, hsl(var(--foreground)))' }}
        />
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl md:pl-[18px]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
