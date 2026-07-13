'use client';

import { motion } from 'framer-motion';
import { CaseStudySection } from '@/components/portfolio/ui';
import { LogIn, Tv, CreditCard, PlayCircle } from 'lucide-react';

const steps = [
  {
    title: '1. PIN-Based Login',
    description: 'No password rules. Senior users sign in using just their phone number and a temporary SMS code, keeping them permanently logged in thereafter.',
    icon: LogIn,
  },
  {
    title: '2. Explicit Discovery',
    description: 'Clear, high-contrast lanes categorized by historical genres. Users scan decades easily without dealing with infinite scrolling widgets.',
    icon: Tv,
  },
  {
    title: '3. 1-Click Paywall Activation',
    description: 'Tapping a restricted movie opens an overlay with a single button, redirecting to a payment checkout optimized with clear inputs.',
    icon: CreditCard,
  },
  {
    title: '4. Instant Cinematic Playback',
    description: 'After checking out, the user is redirected back. The system authorizes the account in the background and starts the video instantly.',
    icon: PlayCircle,
  }
];

export function JourneySection() {
  return (
    <CaseStudySection eyebrow="User Flow" index={4} title="Creating a Frictionless Viewing Journey">
      <p>
        The product experience was designed to minimize interaction steps. By removing secondary detail pages, deep options, and complex auth challenges, standard user task paths were compressed into a straightforward, linear flow.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl border border-border/40 p-5 bg-card/20 flex flex-col gap-4"
            >
              <div className="p-3 w-fit rounded-lg bg-foreground/5" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>
                <Icon className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h4 className="font-mono text-sm font-semibold text-foreground">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </CaseStudySection>
  );
}
