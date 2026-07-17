'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, KeyRound, User, Video, Trophy } from 'lucide-react';
import { BrowserFrame } from '../ui/BrowserFrame';

const stats = [
  { value: '14', label: 'activity types' },
  { value: 'EN·ES·PT', label: 'content languages' },
  { value: '1:1 + group', label: 'live rooms' },
  { value: '100%', label: 'solo build' },
];

const stack = [
  'Next.js 16 · RSC', 'React 19', 'TypeScript', 'Tailwind v4',
  'Supabase', 'Prisma', 'Daily.co · WebRTC', 'OpenAI', 'next-intl', 'Vercel',
];

const accounts = [
  { role: 'Student', email: 'estudante@test.com' },
  { role: 'Teacher', email: 'professor@test.com' },
];

const LIVE_URL = 'https://ilevar.com';

export function HeroSection() {
  return (
    <section className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>
            Portfolio &amp; Reflection
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
            <User className="w-3 h-3" /> Designed &amp; built solo
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.03]">
          ilevar
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
          A live classroom for language teachers — one Room that seats a 1:1 lesson or a whole
          class group, with the same video, activities, and CEFR-mapped progress trail underneath.
        </p>

        <a
          href={LIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--brand, hsl(var(--foreground)))' }}
        >
          Open the live product <ArrowUpRight className="w-4 h-4" />
        </a>

        {/* Stats */}
        <dl className="flex flex-wrap items-center gap-x-10 gap-y-5 pt-2">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-2xl md:text-3xl font-bold tracking-tight text-foreground tabular-nums">{s.value}</dt>
              <dd className="mt-0.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </motion.div>

      {/* Hero media — recreated in code, not a screenshot: the schema behind it, not a photo of it */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="space-y-3"
      >
        <BrowserFrame route="/dashboard">
          <div className="grid gap-3 bg-card p-5 md:grid-cols-[1.3fr_1fr]">
            <div className="flex flex-col gap-3">
              <div className="rounded-lg border border-border p-3">
                <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>
                  Lesson.isGroup: true
                </p>
                <div className="mt-2 grid grid-cols-4 gap-1.5">
                  {['Teacher', 'S1', 'S2', 'S3'].map((p) => (
                    <div key={p} className="flex aspect-video items-center justify-center rounded border border-border bg-muted/30">
                      <Video className="h-3.5 w-3.5 text-muted-foreground/50" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-border p-3">
                <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <Trophy className="w-3 h-3" style={{ color: 'var(--brand, hsl(var(--foreground)))' }} /> CEFR trail
                </p>
                <div className="mt-2 flex items-center gap-1">
                  {['A1', 'A2', 'B1', 'B2', 'C1'].map((n, i) => (
                    <span
                      key={n}
                      className="flex h-6 flex-1 items-center justify-center rounded font-mono text-[10px] font-semibold"
                      style={i <= 1 ? { backgroundColor: 'var(--brand, hsl(var(--foreground)))', color: 'hsl(var(--background))' } : { border: '1px solid hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }}
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-lg border border-border p-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Booking.status</p>
              {[
                { s: 'CONFIRMED', name: '1:1 · Mariana A.' },
                { s: 'PENDING', name: 'Class group · Turma B1' },
                { s: 'COMPLETED', name: '1:1 · Lucas F.' },
              ].map((b) => (
                <div key={b.name} className="flex items-center justify-between rounded border border-border bg-muted/20 px-2.5 py-2">
                  <span className="text-[12px] text-foreground/85">{b.name}</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{b.s}</span>
                </div>
              ))}
            </div>
          </div>
        </BrowserFrame>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-muted-foreground">Built with</span>
          {stack.map((t) => (
            <span key={t} className="rounded border border-border bg-muted/40 px-1.5 py-0.5 text-[10px] text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Demo account callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-xl border p-5"
        style={{ borderColor: 'color-mix(in srgb, var(--brand, hsl(var(--foreground))) 25%, transparent)', backgroundColor: 'color-mix(in srgb, var(--brand, hsl(var(--foreground))) 5%, transparent)' }}
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 space-y-4">
            <div>
              <p className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <KeyRound className="w-4 h-4" style={{ color: 'var(--brand, hsl(var(--foreground)))' }} /> Try it with a demo account
              </p>
              <p className="mt-1 text-[13px] text-muted-foreground">Sign in to the live product and navigate it yourself.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {accounts.map((a) => (
                <div key={a.role} className="rounded-lg border border-border bg-card p-3">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{a.role}</p>
                  <p className="mt-1 font-mono text-[13px] font-semibold text-foreground">{a.email}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    Password: <span className="font-mono font-semibold text-foreground">123456789</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <a
            href={`${LIVE_URL}/login`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full lg:w-auto items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--brand, hsl(var(--foreground)))' }}
          >
            Open live product <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
