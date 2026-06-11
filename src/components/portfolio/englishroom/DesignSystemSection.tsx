'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

const tokens = [
  { name: 'Background', color: '#0a0a0a', border: true },
  { name: 'Card', color: '#161616', border: true },
  { name: 'Primary', color: '#3b6fe0' },
  { name: 'Secondary', color: '#27272a' },
  { name: 'Muted', color: '#3f3f46' },
  { name: 'Destructive', color: '#dc2626' },
  { name: 'Foreground', color: '#fafafa' },
];

const buttons = ['Primary', 'Secondary', 'Outline', 'Ghost', 'Destructive', 'Link'];

const principles = [
  { title: 'Brand color', text: 'Blue oklch(0.60 0.22 250) in light, oklch(0.68 0.18 250) in dark — a modern, trustworthy visual identity.' },
  { title: 'First-class dark mode', text: 'Pure-black background, elevated cards, and recalibrated contrast — not just inverted colors.' },
  { title: 'Aesthetic direction', text: 'Editorial style over default SaaS templates: real photography, split-screen layouts, balanced negative space.' },
];

export function DesignSystemSection() {
  return (
    <section className="flex flex-col gap-8 border-t border-border/40 pt-12">
      <SectionHeading
        eyebrow="The Design System"
        index={11}
        title="Tokens as the single source of truth"
        description="All color, radius, and typography live as CSS variables under Tailwind v4's @theme inline. Colors are defined in OKLCH for perceptual consistency across light and dark modes."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Tokens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border/20 bg-card p-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Tokens — single source of truth</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tokens.map((t) => (
              <div key={t.name} className="flex flex-col gap-1.5">
                <span
                  className="h-10 w-full rounded-md"
                  style={{ backgroundColor: t.color, border: t.border ? '1px solid hsl(var(--border))' : undefined }}
                />
                <span className="font-mono text-[10px] text-muted-foreground">{t.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Primitives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-border/20 bg-card p-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Primitives over ad-hoc</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {buttons.map((b, i) => (
              <span
                key={b}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                  i === 0 ? 'text-background' : i === 4 ? 'text-white' : 'border border-border text-foreground'
                }`}
                style={
                  i === 0
                    ? { backgroundColor: 'var(--brand, #d9f99d)' }
                    : i === 4
                    ? { backgroundColor: '#dc2626' }
                    : i === 5
                    ? { textDecoration: 'underline', border: 'none', color: 'var(--brand, #d9f99d)' }
                    : undefined
                }
              >
                {b}
              </span>
            ))}
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-muted-foreground">
            Button and input variants are enumerated with CVA — one source for every state, so the UI
            can&apos;t drift one screen at a time.
          </p>
        </motion.div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {principles.map((p) => (
          <div key={p.title} className="rounded-xl border border-border/20 bg-muted/20 p-5">
            <h4 className="font-semibold text-foreground text-sm">{p.title}</h4>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
