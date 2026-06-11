'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CaseFigureProps {
    src: string;
    alt: string;
    /** Caption shown below the image. */
    caption?: string;
    /** Mono label shown above the figure — e.g. "Fig. 01". */
    label?: string;
    className?: string;
}

/**
 * Captioned case-study figure.
 *
 * Renders the screenshot when it exists. If the file is missing (404), it
 * gracefully degrades to a dashed placeholder showing the intended caption,
 * so an unfinished portfolio never ships a broken <img>.
 */
export function CaseFigure({ src, alt, caption, label, className }: CaseFigureProps) {
    const [failed, setFailed] = useState(false);

    return (
        <figure className={cn('flex flex-col gap-3', className)}>
            {label && (
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                </span>
            )}

            {failed ? (
                <div
                    className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border/50 bg-muted/20 p-6 text-center"
                    role="img"
                    aria-label={alt}
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
                        Screenshot pending
                    </span>
                    <span className="text-sm text-muted-foreground/70">{caption ?? alt}</span>
                </div>
            ) : (
                <div className="overflow-hidden rounded-lg border border-border/20 bg-muted/10">
                    <img
                        src={src}
                        alt={alt}
                        loading="lazy"
                        decoding="async"
                        onError={() => setFailed(true)}
                        className="h-auto w-full object-cover"
                    />
                </div>
            )}

            {caption && !failed && (
                <figcaption className="font-mono text-xs leading-relaxed text-muted-foreground/70">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}
