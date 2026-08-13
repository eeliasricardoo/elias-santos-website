'use client';

import { motion } from 'framer-motion';
import { Target, CircleAlert, Check, X } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const personas = [
  {
    name: 'Mariana Alves',
    role: 'Student',
    meta: 'Product Manager, 29 · São Paulo, BR',
    avatar: '/portfolios/ilevar/mariana_alves.jpg',
    stats: [
      { label: 'Learning', value: 'Business Spanish' },
      { label: 'Cadence', value: '2× / week, 1:1' },
      { label: 'Level', value: 'B1 → B2' },
    ],
    quote: 'I read Spanish fine, but I freeze in live meetings.',
    goals: [
      'Speak confidently in standups and client calls',
      'A steady weekly habit, not last-minute cramming',
      'See real progress on a level, not just a streak',
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
    avatar: '/portfolios/ilevar/emily_clarke.jpg',
    stats: [
      { label: 'Teaches', value: 'English, Spanish' },
      { label: 'Format', value: '1:1 + 2 class groups' },
      { label: 'Levels', value: 'A2 – C1' },
    ],
    quote: "I run a class group and six 1:1s — I can't prep six different tools.",
    goals: [
      'Fill her calendar without chasing emails',
      'Run a class group with the same tools as a 1:1',
      'Keep every student visibly progressing on their own trail',
    ],
    frustrations: [
      'Scheduling by email across timezones',
      'Screen-sharing static PDFs to a group call',
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
                  <span className="rounded-md px-2 py-0.5 font-mono text-[10px] font-bold text-sky-400 bg-sky-500/10 border border-sky-500/20">
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
              <p className="pl-3 text-[15px] italic leading-relaxed text-foreground/90 border-l-2 border-sky-400">
                “{p.quote}”
              </p>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    <Target className="w-3 h-3" style={{ color: 'var(--brand, hsl(var(--foreground)))' }} /> Goals
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {p.goals.map((g) => (
                      <li key={g} className="flex gap-1.5 text-[13px] leading-relaxed text-muted-foreground">
                        <Check className="mt-0.5 w-3 h-3 flex-shrink-0 text-sky-400" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    <CircleAlert className="w-3 h-3 text-red-400" /> Frustrations
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {p.frustrations.map((f) => (
                      <li key={f} className="flex gap-1.5 text-[13px] leading-relaxed text-muted-foreground">
                        <X className="mt-0.5 w-3 h-3 flex-shrink-0 text-red-400" />
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
