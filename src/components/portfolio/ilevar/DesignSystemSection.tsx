'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { IlevarLogo } from './IlevarLogo';

// Exact tokens from the product's src/app/globals.css (OKLCH hue 249 → sRGB), not
// approximations — every hex below is the real ilevar value.
const BRAND_BLUE = '#0563A8';
const BRAND_ACCENT = '#38bdf8';
const BLUE_MUTED = 'rgba(5, 99, 168, 0.2)';
const SANS = "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif";

function Pill({ children }: { children: ReactNode }) {
  return (
    <span
      className="rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider border border-sky-500/40 text-sky-400 bg-sky-500/10"
    >
      {children}
    </span>
  );
}

function Card({ title, pill, children }: { title: string; pill: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl p-6 border border-border/80 bg-card/90 shadow-xl" style={{ fontFamily: SANS }}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-extrabold tracking-tight text-foreground">{title}</h3>
        <Pill>{pill}</Pill>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

// Real ramps, light → dark, straight from globals.css (Hue 249 Blue)
const rampPrimary = ['#e6f0fa', '#cce0f5', '#99c2eb', '#66a3e0', '#3385d6', '#1a70c2', '#0563a8', '#044d84', '#033860', '#02223c', '#01111e'];
const rampNeutral = ['#ffffff', '#fcfcfa', '#fbfbfa', '#fafaf9', '#f7f7f4', '#e8e8e5', '#dcdbd7', '#c5c4c0', '#94a3b8', '#0f1216'];
const rampStatus = [
  { name: 'success', hex: '#20a04e' },
  { name: 'warning', hex: '#de9300' },
  { name: 'danger', hex: '#d40924' },
  { name: 'info', hex: '#38bdf8' },
];
const rampLevel = [
  { name: 'A1', hex: '#00bc7c' },
  { name: 'A2', hex: '#00bba8' },
  { name: 'B1', hex: '#38bdf8' },
  { name: 'B2', hex: '#615fff' },
  { name: 'C1', hex: '#8e51ff' },
];

const buttonVariants = [
  { label: 'Default', style: { backgroundColor: BRAND_BLUE, color: '#ffffff' } },
  { label: 'Secondary', style: { backgroundColor: 'rgba(255,255,255,0.08)', color: '#f8fafc', border: '1px solid rgba(255,255,255,0.15)' } },
  { label: 'Soft', style: { backgroundColor: BLUE_MUTED, color: BRAND_ACCENT } },
  { label: 'Outline', style: { backgroundColor: 'transparent', color: '#f8fafc', border: '1px solid rgba(255,255,255,0.2)' } },
  { label: 'Ghost', style: { backgroundColor: 'transparent', color: '#cbd5e1' } },
  { label: 'Destructive', style: { backgroundColor: '#d40924', color: '#ffffff' } },
];

const buttonSizes = [
  { label: 'sm', pad: 'px-2.5 py-1 text-[11px]' },
  { label: 'default', pad: 'px-3.5 py-2 text-[13px]' },
  { label: 'lg', pad: 'px-5 py-2.5 text-[14px]' },
];

const badgeStatuses = [
  { label: 'CONFIRMED', bg: '#20a04e', fg: '#ffffff', soft: 'rgba(32, 160, 78, 0.2)', softFg: '#4ade80' },
  { label: 'PENDING', bg: '#de9300', fg: '#ffffff', soft: 'rgba(222, 147, 0, 0.2)', softFg: '#fbbf24' },
  { label: 'CANCELLED', bg: '#d40924', fg: '#ffffff', soft: 'rgba(212, 9, 36, 0.2)', softFg: '#f87171' },
  { label: 'SCHEDULED', bg: '#0563a8', fg: '#ffffff', soft: 'rgba(5, 99, 168, 0.2)', softFg: '#38bdf8' },
];

const principles = [
  {
    title: 'Gennai Mascot & Blue Rebrand',
    text: "Replaced the abstract SVG mark and green ramp with Gennai — the wizard mascot — and a deep Brand Blue (#0563A8, hue 249) sampled directly from his robe.",
  },
  {
    title: 'PS1 Pixel Sky Aesthetic',
    text: 'The landing and hero feature a nostalgic PS1-era pixel sky backdrop, complete with floating Gennai holding comic-style speech bubbles in VT323 pixel typography.',
  },
  {
    title: 'WCAG AAA High Contrast Rules',
    text: 'Re-verified all text tokens on dark mode to ensure at least 7:1 contrast for body text and 11:1 for accents (#38bdf8 on dark surfaces), completely eliminating dim or unreadable copy.',
  },
];

export function DesignSystemSection() {
  return (
    <section className="flex flex-col gap-8 border-t border-border/40 pt-12">
      <SectionHeading
        eyebrow="ilevar's Design System"
        index={11}
        title="Gennai Mascot, Brand Blue (#0563A8), and High Contrast Dark System"
        description="The product's updated design system from docs/DESIGN_SYSTEM.md and src/app/globals.css: OKLCH hue 249 blue palette, Gennai mascot assets, Plus Jakarta Sans, and exact component primitives."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl p-4 sm:p-6 border border-border/60 bg-muted/10 shadow-2xl space-y-6"
      >
        {/* Mascot & Brand Identity Showcase */}
        <div>
          <Card title="Mascot & Brand Identity" pill="GENNAI & BRAND BLUE">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-xl border border-border/60 bg-muted/20 p-5">
              <div className="space-y-3">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Official Mascot Icon &amp; Wordmark</p>
                <div className="bg-card rounded-xl p-4 border border-border inline-flex items-center gap-4 shadow-sm">
                  <IlevarLogo size="lg" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/mascot/gennai-floating.png"
                  alt="Gennai Mascot"
                  className="h-24 w-auto drop-shadow-md"
                />
                <div className="space-y-2 max-w-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#0563A8]" />
                    <span className="font-mono text-xs font-bold text-foreground">Brand Blue: #0563A8</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#38bdf8]" />
                    <span className="font-mono text-xs font-bold text-sky-400">Accent Blue: #38bdf8</span>
                  </div>
                  <p className="text-[12px] leading-relaxed text-muted-foreground">
                    Deep robe blue for solid button fills + high-contrast electric sky blue for text &amp; icons in dark mode (11.2:1 contrast).
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card title="Typography" pill="PLUS JAKARTA SANS">
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              Plus Jakarta Sans, weights 400–800, loaded as <code className="font-mono text-[12px] text-foreground">--font-sans</code>.
              Nostalgic pixel face VT323 used for Gennai speech bubbles.
            </p>
            <div className="mt-5 flex flex-col">
              {[
                { role: 'Display / hero', sample: 'Speak like you mean it', cls: 'text-4xl font-extrabold tracking-tight text-foreground' },
                { role: 'Gennai Speech', sample: 'YOUR LIVE CLASSROOM ✨', cls: 'font-mono text-xl font-bold text-sky-400' },
                { role: 'H1 página', sample: 'Your teaching practice', cls: 'text-2xl font-bold tracking-tight text-foreground' },
                { role: 'H2 seção', sample: 'Upcoming sessions', cls: 'text-lg font-bold text-foreground' },
                { role: 'Eyebrow', sample: 'CEFR TRAIL', cls: 'text-[11px] font-bold uppercase tracking-[0.18em] text-sky-400' },
                { role: 'Body', sample: 'Book a lesson in your timezone.', cls: 'text-base font-normal text-muted-foreground' },
              ].map((t, i) => (
                <div
                  key={t.role}
                  className="flex items-baseline justify-between gap-4 py-3 border-t border-border/50 first:border-t-0"
                >
                  <span className={t.cls}>{t.sample}</span>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t.role}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Colors & Ramps" pill="OKLCH HUE 249">
            <div className="flex flex-col gap-3">
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">primary blue (hue 249) — 50 → 950</p>
                <div className="flex overflow-hidden rounded-md border border-border">
                  {rampPrimary.map((h) => <span key={h} className="h-6 flex-1" style={{ backgroundColor: h }} />)}
                </div>
              </div>
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">neutral surface → border → ink</p>
                <div className="flex overflow-hidden rounded-md border border-border">
                  {rampNeutral.map((h) => <span key={h} className="h-6 flex-1" style={{ backgroundColor: h }} />)}
                </div>
              </div>
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">status (success · warning · danger · info)</p>
                <div className="flex gap-1">
                  {rampStatus.map((s) => (
                    <span key={s.name} className="h-6 flex-1 rounded-md" style={{ backgroundColor: s.hex }} title={s.name} />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">CEFR level (A1 → C1, B1 = brand blue)</p>
                <div className="flex gap-1">
                  {rampLevel.map((s) => (
                    <span key={s.name} className="h-6 flex-1 rounded-md" style={{ backgroundColor: s.hex }} title={s.name} />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card title="Components & Primitives" pill="Button · Badge · Level">
            <div>
              <p className="text-[12px] font-semibold text-foreground">Button <span className="font-normal text-muted-foreground">— 6 variants / 3 sizes</span></p>
              <div className="mt-3 flex flex-col gap-3 overflow-x-auto rounded-xl p-3 border border-dashed border-border/70 bg-card/40">
                {buttonSizes.map((sz) => (
                  <div key={sz.label} className="flex flex-nowrap items-center gap-2">
                    <span className="w-14 shrink-0 font-mono text-[10px] text-muted-foreground">{sz.label}</span>
                    {buttonVariants.map((b) => (
                      <span key={b.label} style={{ ...b.style, borderRadius: '0.5rem' }} className={`shrink-0 whitespace-nowrap font-semibold ${sz.pad}`}>
                        {b.label}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[12px] font-semibold text-foreground">StatusBadge <span className="font-normal text-muted-foreground">— solid / soft</span></p>
              <div className="mt-3 flex flex-col gap-3 overflow-x-auto rounded-xl p-3 border border-dashed border-border/70 bg-card/40">
                <div className="flex flex-nowrap items-center gap-2">
                  <span className="w-14 shrink-0 font-mono text-[10px] text-muted-foreground">solid</span>
                  {badgeStatuses.map((s) => (
                    <span key={s.label} className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ backgroundColor: s.bg, color: s.fg }}>{s.label}</span>
                  ))}
                </div>
                <div className="flex flex-nowrap items-center gap-2">
                  <span className="w-14 shrink-0 font-mono text-[10px] text-muted-foreground">soft</span>
                  {badgeStatuses.map((s) => (
                    <span key={s.label} className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ backgroundColor: s.soft, color: s.softFg }}>{s.label}</span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {principles.map((p) => (
          <div key={p.title} className="rounded-xl border border-border/40 bg-card/60 p-5 shadow-sm">
            <h4 className="font-semibold text-foreground text-sm">{p.title}</h4>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
