'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, Search, CalendarCheck, ListChecks } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const steps = [
  {
    icon: LayoutDashboard,
    route: '/dashboard',
    title: 'A dashboard that leads with what matters next',
    description: 'The student home surfaces the CEFR trail position, upcoming sessions, and a single primary action — never a wall of settings.',
  },
  {
    icon: Search,
    route: '/teachers',
    title: 'A marketplace, not a directory',
    description: 'Search by language, CEFR level, and specialty. Every teacher on the list cleared an admin review — TeacherApplication → approved → invited.',
  },
  {
    icon: CalendarCheck,
    route: '/teachers/[teacherId]',
    title: 'One booking flow, two lesson formats',
    description: 'A profile shows live 1:1 availability and any open class groups side by side, resolved to the student\'s timezone — no email back-and-forth.',
  },
  {
    icon: ListChecks,
    route: '/dashboard/bookings',
    title: 'Every booking, one real status',
    description: 'Confirmed, pending, rescheduled, completed — synced straight from Booking.status, whether the lesson is solo or a class group.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="flex flex-col gap-10 border-t border-border/40 pt-12">
      <SectionHeading
        eyebrow="How it works"
        index={5}
        title="From signing in to a booked lesson"
        description="The self-serve path a student takes end to end — no support tickets in between."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-2">
              <s.icon className="w-4 h-4" style={{ color: 'var(--brand, hsl(var(--foreground)))' }} />
              <span className="font-mono text-[11px] text-muted-foreground">{s.route}</span>
            </div>
            <h3 className="mt-3 text-lg font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
