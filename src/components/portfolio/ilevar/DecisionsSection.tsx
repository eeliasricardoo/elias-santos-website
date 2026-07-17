'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

const decisions = [
  {
    n: '01',
    title: "A design decision I'm proud of — Lesson.isGroup instead of two products",
    text: "The obvious build for '1:1 plus class groups' is two separate features: a booking model and a class model, each with its own Room. Instead, Lesson carries a single isGroup flag; studentId is nullable and only set for 1:1, classGroupId only for groups, and the Room, the activity engine, and LessonSummary don't know or care which one they're rendering. One teacher-facing roster mixes both formats as ordinary rows.",
  },
  {
    n: '02',
    title: "A design decision I'd reverse — building RecurringSeries before ClassGroupSchedule existed",
    text: "1:1 recurring bookings shipped first, with their own cron-materialization logic written from scratch. When class groups needed the same weekly-pattern behavior, I ended up re-deriving nearly the same mechanism as ClassGroupSchedule instead of extracting a shared materializer up front. The two crons read like siblings today, but they didn't start that way — I'd factor the shared 'weekly pattern → rolling window of Lessons' logic into one utility before building the second consumer, not after.",
  },
  {
    n: '03',
    title: 'Trusting the schema as the source of truth for the case itself',
    text: "The product was renamed EnglishRoom → ilevar mid-build, and the ambition grew from English-only to a multi-language platform (TeacherProfile.languages, Activity.targetLanguage: EN | ES | PT). Old screenshots and old copy kept describing the earlier, narrower product. Rewriting this case meant going back to prisma/schema.prisma and the actual routes as ground truth, rather than lightly editing stale marketing copy that no longer matched what the code does.",
  },
];

export function DecisionsSection() {
  return (
    <section className="flex flex-col gap-8 border-t border-border/40 pt-12">
      <SectionHeading eyebrow="Critical Decisions & Reflections" index={10} title="What I'd defend, and what I'd redo" />

      <div className="flex flex-col gap-4">
        {decisions.map((d, i) => (
          <motion.div
            key={d.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-5 rounded-xl border border-border/20 bg-card p-6"
          >
            <span className="font-mono text-2xl font-bold tabular-nums leading-none" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>{d.n}</span>
            <div>
              <h3 className="font-semibold text-foreground">{d.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{d.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
