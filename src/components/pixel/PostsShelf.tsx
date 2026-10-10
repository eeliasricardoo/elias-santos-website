'use client';

import { useCallback, useEffect, useState, type CSSProperties } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { PIXEL_POSTS, type PixelPost } from './pixel-copy';
import { mascotReact } from './mascot-bus';

const slideSrc = (post: PixelPost, n: number) => `/pixel/posts/${post.id}/${String(n).padStart(2, '0')}.webp`;

export function PostsShelf() {
    const [open, setOpen] = useState<PixelPost | null>(null);

    return (
        <>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:grid-cols-4">
                {PIXEL_POSTS.map((post, i) => (
                    <li key={post.id} className="px-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                        <button
                            type="button"
                            onClick={() => setOpen(post)}
                            onMouseEnter={() => mascotReact({ mood: 'smirk', say: `"${post.title}" — ${post.slides} slides.`, hold: 1200 })}
                            className="px-post group block w-full text-left"
                            style={{ '--tilt': `${post.tilt}deg` } as CSSProperties}
                            aria-label={`Open carousel: ${post.title} (${post.slides} slides, in Portuguese)`}
                        >
                            <div className="px-frame px-frame-drop overflow-hidden" style={{ '--px-frame': 'var(--px-line-hi)' } as CSSProperties}>
                                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--px-bg-2)]">
                                    <img
                                        src={slideSrc(post, 1)}
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover object-top"
                                    />
                                    <span className="absolute right-2 top-2 px-chip !bg-black/70 !text-white">
                                        {post.slides} SLIDES
                                    </span>
                                </div>
                            </div>
                            <p className="mt-5 font-pixel text-lg font-semibold leading-tight text-[var(--px-ink)] group-hover:text-[var(--px-blue-hi)]">
                                {post.title}
                            </p>
                            <p className="mt-1.5 text-sm leading-snug text-[var(--px-muted)]">{post.subtitle}</p>
                        </button>
                    </li>
                ))}
            </ul>

            <PostViewer post={open} onClose={() => setOpen(null)} />
        </>
    );
}

function PostViewer({ post, onClose }: { post: PixelPost | null; onClose: () => void }) {
    const [index, setIndex] = useState(1);

    useEffect(() => setIndex(1), [post?.id]);

    const go = useCallback(
        (delta: number) => {
            if (!post) return;
            setIndex((i) => Math.min(post.slides, Math.max(1, i + delta)));
        },
        [post],
    );

    useEffect(() => {
        if (!post) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') go(1);
            if (e.key === 'ArrowLeft') go(-1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [post, go]);

    // Preload the next slide so paging feels instant.
    useEffect(() => {
        if (post && index < post.slides) {
            const img = new Image();
            img.src = slideSrc(post, index + 1);
        }
    }, [post, index]);

    return (
        <Dialog.Root open={!!post} onOpenChange={(o) => !o && onClose()}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[80] bg-[#0f2d2a]/85 backdrop-blur-sm" />
                <Dialog.Content
                    className="px-root fixed left-1/2 top-1/2 z-[81] flex max-h-[94vh] w-[min(560px,calc(100vw-32px))] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 !bg-transparent outline-none"

                >
                    {post && (
                        <>
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <Dialog.Title className="font-pixel text-lg font-semibold text-white sm:text-xl">{post.title}</Dialog.Title>
                                    <Dialog.Description className="text-sm text-white/80">
                                        {post.subtitle} Comic in Portuguese, {post.slides} slides — use the arrow keys to page.
                                    </Dialog.Description>
                                </div>
                                <Dialog.Close className="px-btn px-btn--sm" aria-label="Close">
                                    <X className="h-3.5 w-3.5" />
                                </Dialog.Close>
                            </div>

                            <div
                                className="px-frame px-frame-drop mx-auto w-full overflow-hidden"
                                style={{ '--px-frame': 'var(--px-line-hi)', maxWidth: `calc((94vh - 140px) * ${post.ratio})` } as CSSProperties}
                            >
                                <img
                                    key={index}
                                    src={slideSrc(post, index)}
                                    alt={`${post.title} — slide ${index} of ${post.slides} (Portuguese)`}
                                    className="block h-auto w-full"
                                    style={{ aspectRatio: post.ratio }}
                                />
                            </div>

                            <div className="flex items-center justify-between gap-3">
                                <button type="button" onClick={() => go(-1)} disabled={index === 1} className="px-btn px-btn--sm disabled:opacity-40" aria-label="Previous slide">
                                    <ArrowLeft className="h-3.5 w-3.5" /> PREV
                                </button>
                                <div className="flex items-center gap-1.5" aria-hidden="true">
                                    {Array.from({ length: post.slides }, (_, i) => (
                                        <span key={i} className={`h-2 w-2 ${i + 1 === index ? 'bg-[var(--px-blue-hi)]' : 'bg-[var(--px-line)]'}`} />
                                    ))}
                                </div>
                                <span className="sr-only" aria-live="polite">
                                    Slide {index} of {post.slides}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => go(1)}
                                    disabled={index === post.slides}
                                    className="px-btn px-btn--primary px-btn--sm disabled:opacity-40"
                                    aria-label="Next slide"
                                >
                                    NEXT <ArrowRight className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </>
                    )}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
