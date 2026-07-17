'use client';

import { motion } from 'framer-motion';
import { Globe, Server, Database, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const layers = [
  { icon: <Globe className="w-5 h-5" />, title: 'Browser', text: 'Server Components first — JS ships only where the Room and dashboard need interactivity.' },
  { icon: <Server className="w-5 h-5" />, title: 'Next.js 16 App Router', text: 'Data, auth, and layout resolve on the server — no client-side request waterfalls.' },
  { icon: <Database className="w-5 h-5" />, title: 'Supabase + Prisma', text: 'Supabase owns auth and sessions; a typed Prisma schema owns Organization, OrgMembership, Lesson, ClassGroup, and the CEFR Track model.' },
  { icon: <Sparkles className="w-5 h-5" />, title: 'Daily.co + OpenAI', text: 'Daily.co handles WebRTC video for both room sizes; OpenAI drafts activity content, lesson plans, and post-lesson summaries.' },
];

const notes = [
  { icon: <Clock className="w-4 h-4" />, title: 'Two crons, one materialization pattern', text: 'RecurringSeries (1:1) and ClassGroupSchedule (group) both describe a weekly pattern; a cron job materializes each into concrete Lesson rows on a rolling window, so students only ever book a slot that really exists.' },
  { icon: <ShieldCheck className="w-4 h-4" />, title: 'Rate limiting survives serverless', text: 'RateLimitHit is a Postgres table, not an in-memory counter — because Vercel functions don\'t share memory between invocations, in-memory rate limiting would silently reset on every cold start.' },
];

export function UnderTheHoodSection() {
  return (
    <section className="flex flex-col gap-8 border-t border-border/40 pt-12">
      <SectionHeading
        eyebrow="Relational & Realtime Engine"
        index={9}
        title="How it works under the hood"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {layers.map((l, i) => (
          <motion.div
            key={l.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-xl border border-border/20 bg-card p-5 space-y-3"
          >
            <div style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>{l.icon}</div>
            <h3 className="font-semibold text-foreground text-sm">{l.title}</h3>
            <p className="text-[13px] leading-relaxed text-muted-foreground">{l.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {notes.map((n) => (
          <div key={n.title} className="flex gap-3 rounded-xl border border-border/20 bg-muted/20 p-5">
            <div className="mt-0.5 flex-shrink-0" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>{n.icon}</div>
            <div>
              <h4 className="font-semibold text-foreground text-sm">{n.title}</h4>
              <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{n.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
