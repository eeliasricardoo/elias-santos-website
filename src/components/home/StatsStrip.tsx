'use client';
import { motion } from 'framer-motion';

type Segment = { text: string; color?: string };

const stats: { value: string; label: Segment[] }[] = [
  {
    value: '87.5%',
    label: [
      { text: 'I cut ' },
      { text: 'email production', color: '#d9f99d' },
      { text: ' by 87.5% by building an internal AI tool' },
    ],
  },
  {
    value: '−22%',
    label: [
      { text: 'I reduced the ' },
      { text: 'support queue', color: '#67e8f9' },
      { text: ' wait through design thinking' },
    ],
  },
  {
    value: '5+',
    label: [
      { text: 'Years shipping ' },
      { text: 'real products', color: '#c4b5fd' },
      { text: ' — from first sketch to production' },
    ],
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
              <span className="font-bold text-[clamp(48px,6vw,80px)] leading-none tracking-tight transition-opacity duration-300 group-hover:opacity-80 text-foreground">
                {stat.value}
              </span>

              {/* Label — keywords highlighted in color */}
              <span className="text-base md:text-lg font-medium text-foreground/80 leading-snug">
                {stat.label.map((seg, j) =>
                  seg.color ? (
                    <span key={j} style={{ color: seg.color }}>{seg.text}</span>
                  ) : (
                    <span key={j}>{seg.text}</span>
                  )
                )}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
