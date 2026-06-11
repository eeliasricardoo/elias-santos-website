'use client';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function GetInTouch() {
  return (
    <section id="get-in-touch" className="relative overflow-hidden bg-electric">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none mix-blend-multiply" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-end">

          {/* Left: headline */}
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-widest text-black/40"
            >
              /04 Contact
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(48px,8vw,100px)] font-bold uppercase leading-[0.88] tracking-tight text-black"
            >
              Let's build<br />
              something<br />
              that works_
            </motion.h2>
          </div>

          {/* Right: description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 lg:pb-3 max-w-sm"
          >
            <p className="text-base md:text-lg text-black/60 leading-relaxed">
              If you're hiring for senior product design — or need someone who takes a feature from research to production code — let's talk. Thirty minutes, no slide deck.
            </p>

            <Button
              asChild
              size="lg"
              className="h-14 px-8 rounded-full bg-black text-electric hover:bg-zinc-900 font-bold text-base border-0 transition-transform hover:scale-105 active:scale-95"
            >
              <a
                href="https://calendly.com/eeliasricardoo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                Book a 30-min call
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
