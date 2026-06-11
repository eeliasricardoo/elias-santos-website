'use client';
import { motion } from 'framer-motion';

const stats = [
  {
    value: '87.5%',
    label: 'Email production cut',
    context: 'Serasa Experian — 80min → 10min',
  },
  {
    value: '−22%',
    label: 'Support queue wait',
    context: 'Omnichannel redesign',
  },
  {
    value: '4+',
    label: 'Years shipping',
    context: 'EdTech · CRM · SaaS',
  },
];

export function StatsStrip() {
  return (
    <section className="relative border-y border-border/40 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle electric glow center */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric/3 to-transparent pointer-events-none" />

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
              <span className="font-bold text-[clamp(48px,6vw,80px)] leading-none tracking-tight text-electric group-hover:text-foreground transition-colors duration-300">
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
