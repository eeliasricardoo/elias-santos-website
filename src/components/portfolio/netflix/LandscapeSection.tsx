'use client';

import { motion } from 'framer-motion';
import { CaseStudySection } from '@/components/portfolio/ui';
import { X, Check } from 'lucide-react';

const comparison = [
  {
    feature: 'Navigation & Menus',
    standard: 'Hidden drop-down menus, small icons, and complex categories.',
    senior: 'Persistent navigation lanes with clear text labels—no hover gestures needed.',
    isSuccess: true,
  },
  {
    feature: 'Search Experience',
    standard: 'Heavy reliance on visual keyboard typing which is difficult with remotes/touch.',
    senior: 'Oversized visual grid tiles representing historical genres and decades directly.',
    isSuccess: true,
  },
  {
    feature: 'Video Player Controls',
    standard: 'Tiny, auto-hiding controls (play, progress bar) that vanish within 2 seconds.',
    senior: 'Large, static 48px play/pause buttons and high-contrast timeline markers.',
    isSuccess: true,
  },
  {
    feature: 'Authentication & Sign Up',
    standard: 'Intricate password rules and constant multi-factor authentication checkups.',
    senior: 'Simple phone number verification and automatic session persistence.',
    isSuccess: true,
  }
];

export function LandscapeSection() {
  return (
    <CaseStudySection eyebrow="Landscape & Mapping" index={3} title="Standard Layouts vs. Senior-First UX">
      <p>
        To understand where standard products fail older demographics, I mapped out the interaction mechanics of major streaming apps. By identifying these points of friction, I could redesign each core flow to match senior visual and motor comfort.
      </p>

      <div className="mt-4 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <th className="p-4 font-semibold">Interaction Area</th>
              <th className="p-4 font-semibold text-destructive">Standard Streaming</th>
              <th className="p-4 font-semibold text-success" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>DramaFlix UX</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {comparison.map((item, index) => (
              <motion.tr
                key={item.feature}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="hover:bg-muted/10 transition-colors"
              >
                <td className="p-4 font-semibold text-foreground align-top">{item.feature}</td>
                <td className="p-4 text-muted-foreground align-top space-y-1">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 mt-0.5 text-destructive/70 shrink-0" />
                    <span>{item.standard}</span>
                  </div>
                </td>
                <td className="p-4 text-foreground/90 align-top space-y-1">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--brand, hsl(var(--foreground)))' }} />
                    <span>{item.senior}</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </CaseStudySection>
  );
}
