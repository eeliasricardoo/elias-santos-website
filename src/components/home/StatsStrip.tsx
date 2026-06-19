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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.14 } },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={{
                hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -4 }}
              className="group flex flex-col gap-2 px-6 md:px-10 py-10 md:py-12 transition-colors hover:bg-foreground/[0.02]"
            >
              {/* Big number */}
              <span className="font-bold text-[clamp(48px,6vw,80px)] leading-none tracking-tight transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-80 text-foreground">
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
        </motion.div>
      </div>
    </section>
  );
}
