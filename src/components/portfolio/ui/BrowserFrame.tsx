import { cn } from '@/lib/utils';

interface BrowserFrameProps {
    children: React.ReactNode;
    /** Mono route label shown in the chrome bar — e.g. "/dashboard". */
    route?: string;
    className?: string;
}

/**
 * Paper & Ink browser chrome around a screenshot or video.
 * Mirrors the CaseCover frame on the landing: hollow monochrome dots,
 * hairline borders, no traffic-light colors.
 */
export function BrowserFrame({ children, route, className }: BrowserFrameProps) {
    return (
        <div className={cn('overflow-hidden rounded-xl border border-border/60 bg-card shadow-xl', className)}>
            <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-border/60 bg-muted/50 px-4 py-2.5">
                {[0, 1, 2].map((d) => (
                    <span key={d} className="h-2 w-2 rounded-full border border-foreground/40" />
                ))}
                {route && (
                    <span className="mx-2 flex-1 truncate rounded-full bg-background/60 px-3 py-0.5 text-center font-mono text-[9px] tracking-[0.15em] text-muted-foreground">
                        {route}
                    </span>
                )}
            </div>
            {children}
        </div>
    );
}
