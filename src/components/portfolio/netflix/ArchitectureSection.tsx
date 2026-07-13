'use client';

import { CaseStudySection } from '@/components/portfolio/ui';
import { Layers, Server, Shield, Play } from 'lucide-react';

export function ArchitectureSection() {
  return (
    <CaseStudySection eyebrow="Architecture" index={1} title="The Core Serverless Blueprint">
      <p>
        Building a modern streaming platform means matching high-availability catalog rendering with secure, gated media streaming. The system architecture of DramaFlix is structured to separate state verification from media distribution, ensuring that resource-heavy streams are offloaded directly to global edge CDNs.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        <div className="rounded-xl border border-border/40 p-5 bg-card/20 space-y-3">
          <div className="p-2 w-fit rounded-lg bg-foreground/5 text-foreground">
            <Layers className="h-5 w-5" />
          </div>
          <h4 className="font-mono text-sm font-semibold text-foreground">TanStack Start & React 19</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            File-based routing, strong type safety, and React 19 elements yield high-speed page loads and clean state synchronization across the client and server routes.
          </p>
        </div>

        <div className="rounded-xl border border-border/40 p-5 bg-card/20 space-y-3">
          <div className="p-2 w-fit rounded-lg bg-foreground/5 text-foreground">
            <Server className="h-5 w-5" />
          </div>
          <h4 className="font-mono text-sm font-semibold text-foreground">Neon Postgres</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Serverless SQL database using pooled connections. Scales dynamically to accommodate traffic spikes and goes to sleep during idle periods to prevent runaway costs.
          </p>
        </div>

        <div className="rounded-xl border border-border/40 p-5 bg-card/20 space-y-3">
          <div className="p-2 w-fit rounded-lg bg-foreground/5 text-foreground">
            <Shield className="h-5 w-5" />
          </div>
          <h4 className="font-mono text-sm font-semibold text-foreground">Custom JWT Auth</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            HttpOnly token storage with bcrypt hashing and IP-based rate limiting persisted directly in Neon. Built without third-party auth vendors to avoid subscription bounds.
          </p>
        </div>

        <div className="rounded-xl border border-border/40 p-5 bg-card/20 space-y-3">
          <div className="p-2 w-fit rounded-lg bg-foreground/5 text-foreground">
            <Play className="h-5 w-5" />
          </div>
          <h4 className="font-mono text-sm font-semibold text-foreground">Bunny Stream CDN</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Highly secure media streaming. Videos are request-signed and tokenized at `/api/video-token`, with signed URLs expiring in 3 hours to prevent hotlinking.
          </p>
        </div>
      </div>

      <p className="mt-2">
        By leveraging Vercel for hosting, the React app compiles into a static SPA shell that hydrates immediately. Dynamic operations (login, content fetching, token signing, webhooks) are routed into optimized Node.js serverless functions under the `/api` directory.
      </p>
    </CaseStudySection>
  );
}
