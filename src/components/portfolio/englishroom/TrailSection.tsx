'use client';

import { motion } from 'framer-motion';
import { Trophy, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const nodes = ['A1', 'A2', 'B1', 'B2', 'C1'];

export function TrailSection() {
  return (
    <section className="flex flex-col gap-8 border-t border-border/40 pt-12">
      <SectionHeading
        eyebrow="Gamification & CEFR Trails"
        index={7}
        title="A trail you can feel progress on"
        description="Traditional textbooks split learning into boring, linear modules. EnglishRoom maps a gamified learning trail directly to the CEFR scale (A1 → C1) — making progress tangible, visual, and engaging."
      />

      <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-border bg-card p-6"
        >
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <Trophy className="w-3 h-3" style={{ color: 'var(--brand, #d9f99d)' }} /> Your learning trail
            </p>
            <span className="font-mono text-xs text-muted-foreground">
              <span className="font-bold text-foreground">4</span>/8 · Level B1
            </span>
          </div>

          {/* node track */}
          <div className="mt-5 flex items-center justify-between">
            {nodes.map((n, i) => {
              const done = i < 2;
              const current = i === 2;
              return (
                <div key={n} className="flex flex-1 items-center last:flex-none">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full font-mono text-xs font-bold ${current ? 'text-background' : done ? 'text-background' : 'text-muted-foreground'}`}
                    style={current || done ? { backgroundColor: 'var(--brand, #d9f99d)' } : { border: '1px solid hsl(var(--border))' }}
                  >
                    {n}
                  </span>
                  {i < nodes.length - 1 && (
                    <span className="h-0.5 flex-1" style={{ backgroundColor: i < 2 ? 'var(--brand, #d9f99d)' : 'hsl(var(--border))' }} />
                  )}
                </div>
              );
            })}
          </div>

          {/* current lesson card */}
          <div className="mt-6 rounded-lg border p-4" style={{ borderColor: 'color-mix(in srgb, var(--brand, #d9f99d) 30%, transparent)', backgroundColor: 'color-mix(in srgb, var(--brand, #d9f99d) 6%, transparent)' }}>
            <div className="flex items-center gap-2">
              <span className="rounded px-1.5 py-0.5 font-mono text-[10px] font-bold text-background" style={{ backgroundColor: 'var(--brand, #d9f99d)' }}>B1</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">In progress</span>
            </div>
            <h4 className="mt-2 font-semibold text-foreground">Present Simple in Depth</h4>
            <p className="text-[12px] text-muted-foreground">Grammar · 3rd person -s</p>
            <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs font-semibold" style={{ color: 'var(--brand, #d9f99d)' }}>
              Continue lesson <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </motion.div>

        <p className="text-[15px] leading-relaxed text-muted-foreground">
          Each node is a real lesson. When a teacher marks it complete, the student&apos;s node advances
          — a tangible feedback loop mapped to the CEFR scale (A1 → C1). Progress stops being an
          abstract streak and becomes a visible path with a clear next step.
        </p>
      </div>
    </section>
  );
}
