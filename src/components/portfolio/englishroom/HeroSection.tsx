'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, KeyRound, User } from 'lucide-react';
import { ImageLightbox } from '@/components/ui/image-lightbox';

const stats = [
  { value: '3', label: 'user roles' },
  { value: '30+', label: 'CEFR lessons' },
  { value: '1:1', label: 'live video room' },
  { value: '100%', label: 'solo build' },
];

const stack = [
  'Next.js 16 · RSC', 'React 19', 'TypeScript', 'Tailwind v4',
  'Supabase', 'Prisma', 'Daily.co · WebRTC', 'OpenAI', 'Vercel',
];

const accounts = [
  { role: 'Student', email: 'estudante@test.com' },
  { role: 'Teacher', email: 'professor@test.com' },
];

const LIVE_URL = 'https://school-dpcy.vercel.app';

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
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--brand, #d9f99d)' }}>
            Portfolio &amp; Reflection
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
            <User className="w-3 h-3" /> Designed &amp; built solo
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.03]">
          EnglishRoom
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
          A unified 1:1 English classroom that keeps students focused and cuts context switching —
          designed from tokens up to live WebRTC surfaces.
        </p>

        <a
          href={LIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--brand, #d9f99d)' }}
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

      {/* Hero media */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="space-y-3"
      >
        <div className="rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-gray-100 dark:bg-gray-800">
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-200 dark:bg-gray-900 border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <ImageLightbox
            src="/portfolios/englishroom/landing.webp"
            alt="EnglishRoom live landing page"
            width={1200}
            height={750}
            className="w-full object-cover object-top cursor-pointer"
            sizes="(max-width: 768px) 100vw, 900px"
            quality={85}
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] text-muted-foreground">school-dpcy.vercel.app · live on Vercel</span>
          <span className="text-muted-foreground/40">·</span>
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
        style={{ borderColor: 'color-mix(in srgb, var(--brand, #d9f99d) 25%, transparent)', backgroundColor: 'color-mix(in srgb, var(--brand, #d9f99d) 5%, transparent)' }}
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 space-y-4">
            <div>
              <p className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <KeyRound className="w-4 h-4" style={{ color: 'var(--brand, #d9f99d)' }} /> Try it with a demo account
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
            style={{ backgroundColor: 'var(--brand, #d9f99d)' }}
          >
            Open live product <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
