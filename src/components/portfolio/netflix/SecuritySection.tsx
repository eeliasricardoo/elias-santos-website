'use client';

import { CaseStudySection } from '@/components/portfolio/ui';
import { KeyRound, ShieldAlert, MonitorCheck, FileKey2 } from 'lucide-react';

export function SecuritySection() {
  return (
    <CaseStudySection eyebrow="Trust & Access" index={4} title="Frictionless & Invisible Protection">
      <p>
        Security protocols should never complicate a user's experience. For older adults, forgetting passwords or getting stuck in multi-factor authorization screens are major points of drop-off. I designed the platform's security layers to run entirely behind the scenes, preserving a safe and seamless viewing flow.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 mt-4">
        <div className="rounded-xl border border-border/40 p-5 bg-card/10 space-y-3">
          <div className="flex gap-2 items-center text-foreground font-mono text-sm font-semibold">
            <KeyRound className="h-4 w-4" />
            <span>Persistent Authentication</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            By handling session verification quietly through secure background cookies, users stay authenticated across visits. This eliminates the need to remember complex passwords or complete redundant log-in steps.
          </p>
        </div>

        <div className="rounded-xl border border-border/40 p-5 bg-card/10 space-y-3">
          <div className="flex gap-2 items-center text-foreground font-mono text-sm font-semibold">
            <ShieldAlert className="h-4 w-4" />
            <span>Invisible Anti-Abuse Checks</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Anti-brute-force safeguards are managed directly in the server layers, tracking attempts silently without displaying intrusive confirmation challenges or captchas that frustrate older eyes.
          </p>
        </div>

        <div className="rounded-xl border border-border/40 p-5 bg-card/10 space-y-3">
          <div className="flex gap-2 items-center text-foreground font-mono text-sm font-semibold">
            <MonitorCheck className="h-4 w-4" />
            <span>Frictionless Paywall Gate</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Content level validation occurs instantly when a movie card is tapped. The system verifies subscriptions on-the-fly and starts the stream, completely avoiding confusing pop-ups or payment forms.
          </p>
        </div>

        <div className="rounded-xl border border-border/40 p-5 bg-card/10 space-y-3">
          <div className="flex gap-2 items-center text-foreground font-mono text-sm font-semibold">
            <FileKey2 className="h-4 w-4" />
            <span>Isolated Admin Control</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Sensitive administrative controls are isolated on a cryptographically protected tier. This keeps content management clean and safe, without letting configuration controls leak into standard viewports.
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
}
