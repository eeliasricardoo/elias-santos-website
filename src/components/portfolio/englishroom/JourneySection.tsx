'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

const steps = [
  {
    title: 'Discover',
    sub: 'Looks for a way to actually speak, not just study.',
    pain: 'Drowning in apps that promise fluency.',
    win: 'A clear promise: live lessons on one screen.',
  },
  {
    title: 'Choose a teacher',
    sub: 'Browses vetted teachers by level and specialty.',
    pain: 'Hard to judge fit elsewhere.',
    win: 'Profiles with levels, specialties, live availability.',
  },
  {
    title: 'Book',
    sub: 'Picks a slot in her own timezone.',
    pain: 'Email back-and-forth, timezone math.',
    win: 'Self-serve calendar, instant confirmation.',
  },
  {
    title: 'Attend lesson',
    sub: 'Joins the room and does activities live.',
    pain: 'Tab-switching between Zoom, docs, chat.',
    win: 'Video, activities, and chat on one screen.',
  },
  {
    title: 'Progress',
    sub: 'Reviews the summary, advances the trail.',
    pain: 'No sense of progress anywhere else.',
    win: 'CEFR trail and XP make progress tangible.',
  },
];

export function JourneySection() {
  return (
    <section className="flex flex-col gap-8 border-t border-border/40 pt-12">
      <SectionHeading
        eyebrow="Student journey"
        index={4}
        title={'From “I should practice” to “I\'m progressing”'}
        description="Mapping the path surfaced one sharp low: the lesson itself, fractured across tools. That low became the product's core bet."
      />

      <div className="flex flex-col gap-px bg-border/30 border border-border/30 rounded-xl overflow-hidden">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="bg-card grid gap-4 p-6 md:grid-cols-[auto_1fr_1fr_1fr] md:items-start"
          >
            <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-1">
              <span className="font-mono text-sm font-bold tabular-nums" style={{ color: 'var(--brand, #d9f99d)' }}>
                /{String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground leading-tight">{step.title}</h3>
              <p className="mt-1 text-[13px] text-muted-foreground">{step.sub}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-destructive">Pain</p>
              <p className="mt-1 text-[13px] text-muted-foreground">{step.pain}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: 'var(--brand, #d9f99d)' }}>EnglishRoom</p>
              <p className="mt-1 text-[13px] text-foreground/85">{step.win}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
