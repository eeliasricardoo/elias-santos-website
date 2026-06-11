'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HERO_CONTENT } from '@/constants/content';

import { useRetroSound } from '@/hooks/useRetroSound';

const typingContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const charVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.01 },
  },
};

const textLines = [
  'UX',
  'FROM THE',
  'FUTURE',
];

export function HeroContent() {
  const { playHover, playClick } = useRetroSound();

  return (
    <div className="relative z-10 space-y-8 text-left">

      {/* Status line */}
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

      {/* Headline — typing effect */}
      <motion.div
        variants={typingContainer}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-1"
      >
        {textLines.map((line, li) => (
          <div key={li} className="flex flex-wrap gap-x-5 gap-y-0">
            {line.split(' ').map((word, wi) => (
              <div key={wi} className="flex">
                {word.split('').map((char, ci) => (
                  <motion.span
                    key={ci}
                    variants={charVariant}
                    className="text-[clamp(56px,10vw,120px)] font-bold uppercase leading-[0.88] tracking-tight text-foreground"
                  >
                    {char}
                  </motion.span>
                ))}
                {li === textLines.length - 1 && wi === line.split(' ').length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      times: [0, 0.5, 0.5, 1]
                    }}
                    className="text-[clamp(56px,10vw,120px)] font-bold uppercase leading-[0.88] tracking-tight text-electric"
                  >
                    _
                  </motion.span>
                )}
              </div>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
      >
        {HERO_CONTENT.description}
      </motion.p>

      {/* Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col gap-2 font-mono text-xs md:text-sm uppercase tracking-wider"
      >
        {HERO_CONTENT.metrics.map((metric) => (
          <div key={metric.label} className="flex items-baseline gap-3">
            <span className="text-muted-foreground/60">{metric.label}</span>
            <span className="text-muted-foreground/30">—</span>
            <span className="text-electric">{metric.value}</span>
          </div>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.95 }}
        className="flex flex-wrap items-center gap-4 pt-2"
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
          <a
            href={HERO_CONTENT.cta.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {HERO_CONTENT.cta.secondary.text}
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
