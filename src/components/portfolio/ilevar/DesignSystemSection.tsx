'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

// Exact tokens from the product's src/app/globals.css (OKLCH → sRGB), not
// approximations — every hex below is the real ilevar value.
const GREEN = '#127509';
const GREEN_MUTED = 'rgba(18, 117, 9, 0.12)';
const OFF_WHITE = '#fafaf9';
const CARD = '#ffffff';
const SURFACE_QUIET = '#f7f7f4';
const BORDER = '#dcdbd7';
const INK = '#0f1216';
const INK_SUBTLE = '#606369';
const SANS = "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif";

function Pill({ children }: { children: ReactNode }) {
  return (
    <span
      className="rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider"
      style={{ border: `1px solid ${GREEN}55`, color: GREEN }}
    >
      {children}
    </span>
  );
}

function Card({ title, pill, children }: { title: string; pill: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl p-6" style={{ backgroundColor: CARD, border: `1px solid ${BORDER}`, fontFamily: SANS }}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-extrabold tracking-tight" style={{ color: INK }}>{title}</h3>
        <Pill>{pill}</Pill>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

// Real ramps, light → dark, straight from globals.css
const rampPrimary = ['#e4fee1', '#d6f6d1', '#b9e8b4', '#8fd587', '#5abd51', '#27a41c', '#158a08', '#127509', '#0b6003', '#10480c', '#11300e'];
const rampNeutral = ['#ffffff', '#fcfcfa', '#fbfbfa', '#fafaf9', '#f7f7f4', '#e8e8e5', '#dcdbd7', '#c5c4c0', '#606369', '#0f1216'];
const rampStatus = [
  { name: 'success', hex: '#20a04e' },
  { name: 'warning', hex: '#de9300' },
  { name: 'danger', hex: '#d40924' },
  { name: 'info', hex: '#3186e9' },
];
const rampLevel = [
  { name: 'A1', hex: '#00bc7c' },
  { name: 'A2', hex: '#00bba8' },
  { name: 'B1', hex: '#127509' },
  { name: 'B2', hex: '#615fff' },
  { name: 'C1', hex: '#8e51ff' },
];
const rampFun = [
  { name: 'yellow', hex: '#fbbc03' },
  { name: 'coral', hex: '#db1c22' },
  { name: 'mint', hex: '#74d02a' },
  { name: 'blue', hex: '#00b0df' },
  { name: 'orange', hex: '#fe7802' },
];

const buttonVariants = [
  { label: 'Default', style: { backgroundColor: GREEN, color: '#fff' } },
  { label: 'Secondary', style: { backgroundColor: SURFACE_QUIET, color: INK, border: `1px solid ${BORDER}` } },
  { label: 'Soft', style: { backgroundColor: GREEN_MUTED, color: GREEN } },
  { label: 'Outline', style: { backgroundColor: 'transparent', color: INK, border: `1px solid ${BORDER}` } },
  { label: 'Ghost', style: { backgroundColor: 'transparent', color: INK_SUBTLE } },
  { label: 'Destructive', style: { backgroundColor: '#d40924', color: '#fff' } },
];
const buttonSizes = [
  { label: 'sm', pad: 'px-2.5 py-1 text-[11px]' },
  { label: 'default', pad: 'px-3.5 py-2 text-[13px]' },
  { label: 'lg', pad: 'px-5 py-2.5 text-[14px]' },
];

const badgeStatuses = [
  { label: 'CONFIRMED', bg: '#20a04e', fg: '#002408', soft: '#20a04e1f', softFg: '#00722e' },
  { label: 'PENDING', bg: '#de9300', fg: '#2f1e02', soft: '#de93001f', softFg: '#935600' },
  { label: 'CANCELLED', bg: '#d40924', fg: '#fcfcfc', soft: '#d409241a', softFg: '#cc272e' },
  { label: 'SCHEDULED', bg: '#3186e9', fg: '#fcfcfc', soft: '#3186e91a', softFg: '#0961bb' },
];

const principles = [
  {
    title: 'One token accumulates both roles — on purpose',
    text: "Every fill/ink pair is split (a light fill can't also be the text color) — except primary. The old brand green (#58CC02) gave white text only 2.23:1; darkening it to #127509 clears 5.87:1, dark enough to double as text on its own tint too. One green, two jobs, math-checked.",
  },
  {
    title: 'A whole identity, retired',
    text: 'Neobrutalist chunky cards lived in 18 of 228 files. Its defining trait — a 2px slate border — measured 1.23:1 against the card: invisible. It paid the cost (hard borders, 37 !important rules) for an effect nobody could see. Deleted, not patched.',
  },
  {
    title: 'Rules as tests, not documentation',
    text: '5 files, 74 assertions: contrast is recomputed from the real CSS, not asserted from memory; no bg-secondary, no text-white on a fill, no raw hex in components; atoms never import from organisms. Each guard was canary-verified — a deliberate violation injected to confirm it actually fails.',
  },
];

export function DesignSystemSection() {
  return (
    <section className="flex flex-col gap-8 border-t border-border/40 pt-12">
      <SectionHeading
        eyebrow="ilevar's own Design System"
        index={11}
        title="One green, light-only, and a test suite that enforces it"
        description="Not this portfolio's tokens — the product's own, from docs/DESIGN_SYSTEM.md and src/app/globals.css: real OKLCH values converted to hex, Plus Jakarta Sans, and the actual Button / StatusBadge / LevelBadge primitives, rendered at their exact colors."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl p-4 sm:p-6"
        style={{ backgroundColor: OFF_WHITE }}
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <Card title="Typography" pill="1 TYPEFACE">
              <p className="text-[13px] leading-relaxed" style={{ color: INK_SUBTLE }}>
                Plus Jakarta Sans, weights 400–800, loaded once as <code className="font-mono text-[12px]">--font-sans</code>.
                No Inter, no system fallback pretending to be the brand.
              </p>
              <div className="mt-5 flex flex-col">
                {[
                  { role: 'Display / hero', sample: 'Speak like you mean it', cls: 'text-4xl font-extrabold tracking-tight' },
                  { role: 'H1 página', sample: 'Your teaching practice', cls: 'text-2xl font-bold tracking-tight' },
                  { role: 'H2 seção', sample: 'Upcoming sessions', cls: 'text-lg font-bold' },
                  { role: 'Eyebrow', sample: 'CEFR TRAIL', cls: 'text-[11px] font-bold uppercase tracking-[0.18em]' },
                  { role: 'Body', sample: 'Book a lesson in your timezone.', cls: 'text-base font-normal' },
                  { role: 'Caption / meta', sample: '4 students · Thu 18:00', cls: 'text-xs font-normal' },
                ].map((t, i) => (
                  <div
                    key={t.role}
                    className="flex items-baseline justify-between gap-4 py-3"
                    style={{ borderTop: i === 0 ? 'none' : `1px solid ${BORDER}` }}
                  >
                    <span className={t.cls} style={{ color: t.role === 'Caption / meta' ? INK_SUBTLE : INK }}>{t.sample}</span>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider" style={{ color: INK_SUBTLE }}>{t.role}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Colors" pill="6 RAMPS">
              <div className="flex flex-col gap-3">
                <div>
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider" style={{ color: INK_SUBTLE }}>primary — 50 → 950</p>
                  <div className="flex overflow-hidden rounded-md" style={{ border: `1px solid ${BORDER}` }}>
                    {rampPrimary.map((h) => <span key={h} className="h-6 flex-1" style={{ backgroundColor: h }} />)}
                  </div>
                </div>
                <div>
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider" style={{ color: INK_SUBTLE }}>neutral surface → border → ink</p>
                  <div className="flex overflow-hidden rounded-md" style={{ border: `1px solid ${BORDER}` }}>
                    {rampNeutral.map((h) => <span key={h} className="h-6 flex-1" style={{ backgroundColor: h }} />)}
                  </div>
                </div>
                <div>
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider" style={{ color: INK_SUBTLE }}>status (success · warning · danger · info)</p>
                  <div className="flex gap-1">
                    {rampStatus.map((s) => (
                      <span key={s.name} className="h-6 flex-1 rounded-md" style={{ backgroundColor: s.hex }} title={s.name} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider" style={{ color: INK_SUBTLE }}>CEFR level (A1 → C1, B1 = brand)</p>
                  <div className="flex gap-1">
                    {rampLevel.map((s) => (
                      <span key={s.name} className="h-6 flex-1 rounded-md" style={{ backgroundColor: s.hex }} title={s.name} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider" style={{ color: INK_SUBTLE }}>fun accents (landing + playground)</p>
                  <div className="flex gap-1">
                    {rampFun.map((s) => (
                      <span key={s.name} className="h-6 flex-1 rounded-md" style={{ backgroundColor: s.hex }} title={s.name} />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
        </div>

        <div className="mt-4">
          <Card title="Components" pill="Button · Badge · Level">
            <div>
              <p className="text-[12px] font-semibold" style={{ color: INK }}>Button <span className="font-normal" style={{ color: INK_SUBTLE }}>— 6 variants / 3 sizes</span></p>
              <div className="mt-3 flex flex-col gap-3 overflow-x-auto rounded-xl p-3" style={{ border: `1px dashed ${BORDER}` }}>
                {buttonSizes.map((sz) => (
                  <div key={sz.label} className="flex flex-nowrap items-center gap-2">
                    <span className="w-14 shrink-0 font-mono text-[10px]" style={{ color: INK_SUBTLE }}>{sz.label}</span>
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
              <p className="text-[12px] font-semibold" style={{ color: INK }}>StatusBadge <span className="font-normal" style={{ color: INK_SUBTLE }}>— solid / soft, one map</span></p>
              <div className="mt-3 flex flex-col gap-3 overflow-x-auto rounded-xl p-3" style={{ border: `1px dashed ${BORDER}` }}>
                <div className="flex flex-nowrap items-center gap-2">
                  <span className="w-14 shrink-0 font-mono text-[10px]" style={{ color: INK_SUBTLE }}>solid</span>
                  {badgeStatuses.map((s) => (
                    <span key={s.label} className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ backgroundColor: s.bg, color: s.fg }}>{s.label}</span>
                  ))}
                </div>
                <div className="flex flex-nowrap items-center gap-2">
                  <span className="w-14 shrink-0 font-mono text-[10px]" style={{ color: INK_SUBTLE }}>soft</span>
                  {badgeStatuses.map((s) => (
                    <span key={s.label} className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ backgroundColor: s.soft, color: s.softFg }}>{s.label}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[12px] font-semibold" style={{ color: INK }}>LevelBadge <span className="font-normal" style={{ color: INK_SUBTLE }}>— CEFR A1 → C1</span></p>
              <div className="mt-3 flex flex-wrap gap-2 rounded-xl p-3" style={{ border: `1px dashed ${BORDER}` }}>
                {rampLevel.map((s) => (
                  <span key={s.name} className="rounded-md px-2.5 py-1 font-mono text-[11px] font-bold" style={{ backgroundColor: `${s.hex}1a`, color: s.hex }}>{s.name}</span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {principles.map((p) => (
          <div key={p.title} className="rounded-xl border border-border/20 bg-muted/20 p-5">
            <h4 className="font-semibold text-foreground text-sm">{p.title}</h4>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
