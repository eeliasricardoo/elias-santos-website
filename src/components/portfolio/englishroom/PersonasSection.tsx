'use client';

import { motion } from 'framer-motion';
import { Target, CircleAlert, Check, X } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const personas = [
  {
    name: 'Mariana Alves',
    role: 'Student',
    meta: 'Product Manager, 29 · São Paulo, BR',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&q=80&auto=format&fit=crop&crop=faces',
    stats: [
      { label: 'Focus', value: 'Business English' },
      { label: 'Cadence', value: '2× / week' },
      { label: 'Level', value: 'B1 → B2' },
    ],
    quote: 'I read English fine, but I freeze in live meetings.',
    goals: [
      'Speak confidently in standups and client calls',
      'A steady weekly habit, not last-minute cramming',
      'See real progress, not just streaks',
    ],
    frustrations: [
      'Apps drill vocab but never make her speak',
      'Juggling Zoom, a PDF, and WhatsApp mid-lesson',
      'No sense of where she is or what comes next',
    ],
  },
  {
    name: 'Emily Clarke',
    role: 'Teacher',
    meta: 'Freelance teacher, 38 · Manchester, UK',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&q=80&auto=format&fit=crop&crop=faces',
    stats: [
      { label: 'Students', value: '20+ active' },
      { label: 'Teaches', value: 'B2 – C2' },
      { label: 'Credential', value: 'CELTA · 8 yrs' },
    ],
    quote: 'I spend half my prep fighting tools, not teaching.',
    goals: [
      'Fill her calendar without chasing emails',
      'Run lessons with zero tech friction',
      'Keep every student visibly progressing',
    ],
    frustrations: [
      'Scheduling by email across timezones',
      'Screen-sharing static PDFs',
      "Losing track of each student's level",
    ],
  },
];

export function PersonasSection() {
  return (
    <section className="flex flex-col gap-8 border-t border-border/40 pt-12">
      <SectionHeading
        eyebrow="Who it's for"
        index={2}
        title="Two sides, two very different jobs"
        description="Every design decision traces back to these two people: the student wants to speak without friction, the teacher wants to teach without admin."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {personas.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="overflow-hidden rounded-xl border border-border bg-card"
          >
            <div className="flex items-center gap-4 p-6">
              <img
                src={p.avatar}
                alt={p.name}
                width={64}
                height={64}
                loading="lazy"
                className="h-16 w-16 flex-shrink-0 rounded-full object-cover ring-2 ring-border"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-base font-bold tracking-tight text-foreground">{p.name}</p>
                  <span
                    className="rounded-md px-1.5 py-0.5 font-mono text-[10px] font-semibold"
                    style={{ color: 'var(--brand, #d9f99d)', backgroundColor: 'color-mix(in srgb, var(--brand, #d9f99d) 12%, transparent)' }}
                  >
                    {p.role}
                  </span>
                </div>
                <p className="text-[13px] text-muted-foreground">{p.meta}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-border border-y border-border bg-muted/20">
              {p.stats.map((s) => (
                <div key={s.label} className="px-4 py-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
                  <p className="mt-0.5 text-[13px] font-semibold text-foreground">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="p-6">
              <p className="pl-3 text-[15px] italic leading-relaxed text-foreground/80 border-l-2" style={{ borderColor: 'color-mix(in srgb, var(--brand, #d9f99d) 50%, transparent)' }}>
                “{p.quote}”
              </p>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    <Target className="w-3 h-3" style={{ color: 'var(--brand, #d9f99d)' }} /> Goals
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {p.goals.map((g) => (
                      <li key={g} className="flex gap-1.5 text-[13px] leading-relaxed text-muted-foreground">
                        <Check className="mt-0.5 w-3 h-3 flex-shrink-0" style={{ color: 'var(--brand, #d9f99d)' }} />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    <CircleAlert className="w-3 h-3 text-destructive" /> Frustrations
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {p.frustrations.map((f) => (
                      <li key={f} className="flex gap-1.5 text-[13px] leading-relaxed text-muted-foreground">
                        <X className="mt-0.5 w-3 h-3 flex-shrink-0 text-destructive/60" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
