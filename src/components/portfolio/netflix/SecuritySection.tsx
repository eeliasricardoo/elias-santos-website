'use client';

import { CaseStudySection } from '@/components/portfolio/ui';
import { KeyRound, ShieldAlert, MonitorCheck, FileKey2 } from 'lucide-react';

export function SecuritySection() {
  return (
    <CaseStudySection eyebrow="Security & Auth" index={4} title="Hardened Serverless Security">
      <p>
        Securing a serverless application without using third-party auth vendors requires careful cookie handling, cryptographically signed API exchanges, and low-latency database queries. DramaFlix implements a strict security layout directly inside the Node serverless execution context.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 mt-4">
        <div className="rounded-xl border border-border/40 p-5 bg-card/10 space-y-3">
          <div className="flex gap-2 items-center text-foreground font-mono text-sm font-semibold">
            <KeyRound className="h-4 w-4" />
            <span>JWT & HttpOnly Cookies</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Authentication is issued via stateless JSON Web Tokens (JWT) stored in secure, HttpOnly, SameSite cookies. This makes the frontend completely immune to Cross-Site Scripting (XSS) token extraction.
          </p>
        </div>

        <div className="rounded-xl border border-border/40 p-5 bg-card/10 space-y-3">
          <div className="flex gap-2 items-center text-foreground font-mono text-sm font-semibold">
            <ShieldAlert className="h-4 w-4" />
            <span>IP-Based Rate Limiting</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            To prevent brute-force attacks in serverless functions (which don't share memory), login attempts are tracked and rate-limited by user IP addresses persisted directly inside a fast-indexed Neon table.
          </p>
        </div>

        <div className="rounded-xl border border-border/40 p-5 bg-card/10 space-y-3">
          <div className="flex gap-2 items-center text-foreground font-mono text-sm font-semibold">
            <FileKey2 className="h-4 w-4" />
            <span>HMAC HMAC Admin Session</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            The administrative dashboard is locked behind a separate admin cookie containing a payload cryptographically signed with HMAC-SHA256, protecting control surfaces from session hijack attempts.
          </p>
        </div>

        <div className="rounded-xl border border-border/40 p-5 bg-card/10 space-y-3">
          <div className="flex gap-2 items-center text-foreground font-mono text-sm font-semibold">
            <MonitorCheck className="h-4 w-4" />
            <span>Cryptographic URL Gating</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Media streaming links are not static. The player queries `/api/video-token` which validates the client's session and subscription tier, generating a Bunny CDN signed URL token that expires in 3 hours.
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
}
