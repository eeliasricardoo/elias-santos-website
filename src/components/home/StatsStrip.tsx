'use client';
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { PROJECT_BRANDS } from '@/constants/project-brands';

const stats = [
  {
    value: '87.5%',
    label: 'Email production cut',
    context: 'Serasa Experian — 80min → 10min',
    color: PROJECT_BRANDS.lime.bg,
    colorDeep: PROJECT_BRANDS.lime.accent,
  },
  {
    value: '−22%',
    label: 'Support queue wait',
    context: 'Omnichannel redesign',
    color: PROJECT_BRANDS.pink.bg,
    colorDeep: PROJECT_BRANDS.pink.accent,
  },
  {
    value: '4+',
    label: 'Years shipping',
    context: 'EdTech · CRM · SaaS',
    color: PROJECT_BRANDS.cyan.bg,
    colorDeep: PROJECT_BRANDS.cyan.accent,
  },
];

export function StatsStrip() {
  return (
    <section className="relative border-y border-border/40 bg-background overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/40">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col gap-2 px-6 md:px-10 py-10 md:py-12"
            >
              {/* Big number */}
              <span
                className="font-bold text-[clamp(48px,6vw,80px)] leading-none tracking-tight transition-opacity duration-300 group-hover:opacity-80 text-[var(--num)] light:text-[var(--num-deep)]"
                style={{ '--num': stat.color, '--num-deep': stat.colorDeep } as CSSProperties}
              >
                {stat.value}
              </span>

              {/* Label */}
              <span className="text-base md:text-lg font-medium text-foreground/80 leading-snug">
                {stat.label}
              </span>

              {/* Context */}
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/50 mt-1">
                {stat.context}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
