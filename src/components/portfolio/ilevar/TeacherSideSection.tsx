'use client';

import { motion } from 'framer-motion';
import { CalendarClock, Users } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const availabilityDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const roster = [
  { name: '1:1 · Mariana A.', kind: 'RecurringSeries', cadence: 'Weekly · Tue 19:00' },
  { name: 'Turma B1 · 4 students', kind: 'ClassGroupSchedule', cadence: 'Weekly · Thu 18:00' },
  { name: '1:1 · Lucas F.', kind: 'RecurringSeries', cadence: 'Weekly · Fri 09:00' },
];

export function TeacherSideSection() {
  return (
    <section className="flex flex-col gap-10 border-t border-border/40 pt-12">
      <SectionHeading
        eyebrow="The other side of the marketplace"
        index={8}
        title="Teachers run 1:1s and class groups from one dashboard"
        description="Availability and RecurringSeries handle 1:1; ClassGroup and ClassGroupSchedule handle groups — same shape, same cron-based materialization, same Room on lesson day."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-border bg-card p-6"
        >
          <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>
            <CalendarClock className="w-3.5 h-3.5" /> Recurring availability
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
            A teacher sets a weekly pattern once — for a 1:1 roster or a class group&apos;s fixed
            schedule. A cron job materializes each into real Lesson rows on a rolling window, so
            students only ever see slots that actually exist.
          </p>
          <div className="mt-4 flex gap-1.5">
            {availabilityDays.map((d, i) => (
              <div
                key={d}
                className="flex flex-1 flex-col items-center gap-1 rounded-md border border-border py-2"
                style={i === 1 || i === 3 ? { borderColor: 'var(--brand, hsl(var(--foreground)))', backgroundColor: 'color-mix(in srgb, var(--brand, hsl(var(--foreground))) 10%, transparent)' } : undefined}
              >
                <span className="font-mono text-[10px] text-muted-foreground">{d}</span>
                <span className="h-1.5 w-1.5 rounded-full" style={i === 1 || i === 3 ? { backgroundColor: 'var(--brand, hsl(var(--foreground)))' } : { backgroundColor: 'hsl(var(--border))' }} />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-border bg-card p-6"
        >
          <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>
            <Users className="w-3.5 h-3.5" /> One roster, two formats
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
            The teaching-practice view mixes 1:1 bookings and class groups in the same list —
            each row is still just a Lesson, whether one student shows up or four.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {roster.map((r) => (
              <div key={r.name} className="flex items-center justify-between rounded-lg border border-border bg-muted/20 px-3 py-2">
                <div>
                  <p className="text-[13px] font-medium text-foreground">{r.name}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{r.cadence}</p>
                </div>
                <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{r.kind}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
