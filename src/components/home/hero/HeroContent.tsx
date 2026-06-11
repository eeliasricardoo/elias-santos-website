'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HERO_CONTENT } from '@/constants/content';
import { useRetroSound } from '@/hooks/useRetroSound';
import { PROJECT_BRANDS, BRAND_ORDER } from '@/constants/project-brands';

const metricColors = BRAND_ORDER.map((c) => PROJECT_BRANDS[c].bg);

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HeroContent() {
  const { playHover, playClick } = useRetroSound();

  return (
    <div className="relative z-10 space-y-7 text-left">

      {/* Status */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground"
      >
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-electric" />
        </span>
        {HERO_CONTENT.status.availability} · {HERO_CONTENT.status.location}
      </motion.div>

      {/* Headline: "UX From the" (solid) / "FUTURE" (outline + cursor) */}
      <div className="flex flex-col gap-0">
        {/* Line 1 — solid, slightly smaller */}
        <div className="overflow-hidden">
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="block font-bold uppercase leading-[0.9] tracking-tight text-muted-foreground"
            style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}
          >
            {HERO_CONTENT.headline.line1}
          </motion.span>
        </div>
        {/* Line 2 — outline, big */}
        <div className="overflow-hidden">
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.22 }}
            className="block font-bold uppercase leading-[0.85] tracking-tight text-stroke"
            style={{ fontSize: 'clamp(56px, 13vw, 140px)' }}
          >
            {HERO_CONTENT.headline.line2}
            <motion.span
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
              style={{ WebkitTextStroke: 0, color: '#d9f99d' }}
            >
              _
            </motion.span>
          </motion.span>
        </div>
      </div>

      {/* Role pills */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.38 }}
        className="flex items-center gap-2 flex-wrap"
      >
        {HERO_CONTENT.eyebrow.split(' · ').map((pill) => (
          <span
            key={pill}
            className="font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-border/60 rounded-full text-muted-foreground"
          >
            {pill}
          </span>
        ))}
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
      >
        {HERO_CONTENT.description}
      </motion.p>

      {/* Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="flex flex-col gap-2 font-mono text-xs md:text-sm uppercase tracking-wider"
      >
        {HERO_CONTENT.metrics.map((metric, i) => (
          <div key={metric.label} className="flex items-baseline gap-3">
            <span className="text-muted-foreground/50">{metric.label}</span>
            <span className="text-muted-foreground/25">—</span>
            <span style={{ color: metricColors[i % metricColors.length] }}>{metric.value}</span>
          </div>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-wrap items-center gap-4 pt-1"
      >
        <Button
          asChild
          size="lg"
          className="h-12 rounded-full px-8 text-base font-medium transition-transform hover:scale-105 active:scale-95"
          onMouseEnter={playHover}
          onClick={playClick}
        >
          <a href={HERO_CONTENT.cta.primary.href}>
            <span className="flex items-center gap-2">
              {HERO_CONTENT.cta.primary.text}
              <ArrowRight className="w-5 h-5" />
            </span>
          </a>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="rounded-full px-8 h-12 text-base transition-transform hover:scale-105 active:scale-95"
          asChild
          onMouseEnter={playHover}
          onClick={playClick}
        >
          <a href={HERO_CONTENT.cta.secondary.href} target="_blank" rel="noopener noreferrer">
            {HERO_CONTENT.cta.secondary.text}
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
