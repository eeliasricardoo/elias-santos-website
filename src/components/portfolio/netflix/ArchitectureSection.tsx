'use client';

import { CaseStudySection } from '@/components/portfolio/ui';
import { Layers, Server, Shield, Play } from 'lucide-react';

export function ArchitectureSection() {
  return (
    <CaseStudySection eyebrow="UX Engineering" index={1} title="The UX-Driven Tech Blueprint">
      <p>
        Building a modern streaming platform for older adults means matching strict accessibility goals with high-availability systems. Every technological choice I made for DramaFlix was directly driven by user experience goals: reducing load times, removing login friction, and guaranteeing seamless playback.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        <div className="rounded-xl border border-border/40 p-5 bg-card/20 space-y-3">
          <div className="p-2 w-fit rounded-lg bg-foreground/5 text-foreground">
            <Layers className="h-5 w-5" />
          </div>
          <h4 className="font-mono text-sm font-semibold text-foreground">Immediate Feedback</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Older users associate blank loading screens with system crashes. Compiling the UI into a static shell with React 19 ensures pages hydrate instantly, preventing cognitive drop-off.
          </p>
        </div>

        <div className="rounded-xl border border-border/40 p-5 bg-card/20 space-y-3">
          <div className="p-2 w-fit rounded-lg bg-foreground/5 text-foreground">
            <Shield className="h-5 w-5" />
          </div>
          <h4 className="font-mono text-sm font-semibold text-foreground">Silent Authentication</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Password retrieval and MFA codes are massive barriers for senior hands. I built a secure JWT cookie login that keeps sessions alive silently, eliminating repetitive sign-ins.
          </p>
        </div>

        <div className="rounded-xl border border-border/40 p-5 bg-card/20 space-y-3">
          <div className="p-2 w-fit rounded-lg bg-foreground/5 text-foreground">
            <Server className="h-5 w-5" />
          </div>
          <h4 className="font-mono text-sm font-semibold text-foreground">Zero catalog lag</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Refactoring the database pool connection inside Neon Postgres resolved data queries in sub-milliseconds, ensuring active content search remains fast for 300 active users.
          </p>
        </div>

        <div className="rounded-xl border border-border/40 p-5 bg-card/20 space-y-3">
          <div className="p-2 w-fit rounded-lg bg-foreground/5 text-foreground">
            <Play className="h-5 w-5" />
          </div>
          <h4 className="font-mono text-sm font-semibold text-foreground">Single-Tap Streaming</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Subscription checks and URL signing are processed entirely in the background, rendering the signed media player in a single tap without nested redirect screens.
          </p>
        </div>
      </div>

      <p className="mt-2">
        By routing complex server verification routines behind the scenes (under `/api`), the user interacts only with a static, highly responsive, and lightweight client interface—keeping focus entirely on the film catalog.
      </p>
    </CaseStudySection>
  );
}
