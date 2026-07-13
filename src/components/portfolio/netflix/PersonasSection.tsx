'use client';

import { motion } from 'framer-motion';
import { Target, CircleAlert, Check, X } from 'lucide-react';
import { CaseStudySection } from '@/components/portfolio/ui';

const personas = [
  {
    name: 'Maria Souza (Dona Maria)',
    role: 'Senior User',
    meta: 'Retired Schoolteacher, 68 · Rio de Janeiro, BR',
    avatar: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=160&h=160&q=80&auto=format&fit=crop&crop=faces',
    stats: [
      { label: 'Vision', value: 'Mild Cataracts' },
      { label: 'Device', value: 'Tablet & Smart TV' },
      { label: 'Favorite Content', value: 'Classic Telenovelas' },
    ],
    quote: 'I love watching my old telenovelas and movies, but modern apps have such tiny text and complex steps that I have to call my grandkids to play them.',
    goals: [
      'Find and watch old movies independently without asking for help',
      'Read titles, cast lists, and descriptions clearly without eye strain',
      'Start a stream easily without typing complex passwords or verification codes',
    ],
    frustrations: [
      'Tiny fonts and low-contrast details that blend into the dark backdrop',
      'Navigation controls and sliders that hide automatically too quickly',
      'Over-complicated signup flows with tiny input fields',
    ],
  }
];

export function PersonasSection() {
  return (
    <CaseStudySection eyebrow="User Persona" index={2} title="Designing for Dona Maria">
      <p>
        To build a streaming app that truly solves accessibility, every design decision had to be anchored on a real user. We framed the product experience around <strong className="text-foreground">Dona Maria</strong>, representing a large senior demographic that loves retro media but faces constant visual and cognitive friction with standard digital UI patterns.
      </p>

      <div className="mt-4">
        {personas.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="overflow-hidden rounded-xl border border-border bg-card/10"
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
                    style={{ color: 'var(--brand, hsl(var(--foreground)))', backgroundColor: 'color-mix(in srgb, var(--brand, hsl(var(--foreground))) 12%, transparent)' }}
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
              <p className="pl-3 text-[15px] italic leading-relaxed text-foreground/80 border-l-2" style={{ borderColor: 'color-mix(in srgb, var(--brand, hsl(var(--foreground))) 50%, transparent)' }}>
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
                        <Check className="mt-0.5 w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--brand, hsl(var(--foreground)))' }} />
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
                        <X className="mt-0.5 w-3.5 h-3.5 flex-shrink-0 text-destructive/60" />
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
    </CaseStudySection>
  );
}
