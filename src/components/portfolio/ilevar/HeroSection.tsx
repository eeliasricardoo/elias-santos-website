'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Video, Trophy, Sparkles } from 'lucide-react';
import { BrowserFrame } from '../ui/BrowserFrame';
import { IlevarLogo } from './IlevarLogo';

const stats = [
  { value: 'End-to-End', label: 'UX/UI & Full-Stack' },
  { value: '14', label: 'activity engines' },
  { value: '1:1 + group', label: 'live rooms' },
  { value: 'Design System', label: 'OKLCH tokens' },
];

const stack = [
  'Next.js 16 · RSC', 'React 19', 'TypeScript', 'Tailwind v4',
  'Supabase', 'Prisma', 'Daily.co · WebRTC', 'OpenAI', 'next-intl', 'Vercel',
];

const LIVE_URL = 'https://ilevar.com';
const BRAND_BLUE = '#0563A8';

export function HeroSection() {
  return (
    <section className="space-y-12">
      {/* Gennai Flying Showcase Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl border border-[#0563A8]/20 bg-gradient-to-b from-[#061527] via-[#0563A8]/15 to-transparent p-6 sm:p-10 shadow-2xl"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-6 flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <span className="font-mono text-xs uppercase tracking-widest text-sky-400 font-bold">
                Full-Stack Case Study
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold text-sky-400">
                <Sparkles className="w-3 h-3 text-sky-400" /> End-to-End Product Architecture &amp; Design System
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                <Layers className="w-3 h-3" /> Full-Stack Architecture
              </span>
            </div>

            <div className="pt-2">
              <IlevarLogo size="xl" />
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              An end-to-end live classroom platform — from UX/UI research, brand design system (OKLCH tokens), and interface design to full-stack WebRTC architecture, real-time activity engines, and AI lesson prep.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] shadow-lg"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                Open live product <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Stats */}
            <dl className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 pt-4 border-t border-border/40">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl md:text-3xl font-bold tracking-tight text-foreground tabular-nums">{s.value}</dt>
                  <dd className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Gennai Flying Character Graphic */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 1.5, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative shrink-0 flex flex-col items-center"
          >
            {/* Comic Speech Bubble */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative mb-3 rounded-2xl border border-[#0563A8]/30 bg-card px-4 py-2.5 shadow-xl text-center"
            >
              <p className="font-mono text-xs font-bold text-foreground">
                &ldquo;Speak like you mean it!&rdquo; ✨
              </p>
              <span aria-hidden className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-r border-b border-[#0563A8]/30 bg-card" />
            </motion.div>

            <img
              src="/mascot/gennai-floating.png"
              alt="Gennai Flying Mascot"
              className="h-48 sm:h-56 md:h-64 w-auto object-contain drop-shadow-[0_20px_30px_rgba(5,99,168,0.25)]"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Hero media — recreated room schema */}
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
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#0563A8] font-bold">
                  Lesson.isGroup: true · Gennai Live Room
                </p>
                <div className="mt-2 grid grid-cols-4 gap-1.5">
                  {['Teacher', 'S1', 'S2', 'S3'].map((p) => (
                    <div key={p} className="flex aspect-video items-center justify-center rounded border border-border bg-muted/30 relative">
                      <Video className="h-3.5 w-3.5 text-muted-foreground/50" />
                      {p === 'Teacher' && (
                        <span className="absolute bottom-1 right-1 h-2 w-2 rounded-full bg-[#0563A8]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-border p-3">
                <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <Trophy className="w-3 h-3 text-[#0563A8]" /> CEFR trail
                </p>
                <div className="mt-2 flex items-center gap-1">
                  {['A1', 'A2', 'B1', 'B2', 'C1'].map((n, i) => (
                    <span
                      key={n}
                      className="flex h-6 flex-1 items-center justify-center rounded font-mono text-[10px] font-semibold"
                      style={i <= 1 ? { backgroundColor: BRAND_BLUE, color: '#ffffff' } : { border: '1px solid hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }}
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
    </section>
  );
}
