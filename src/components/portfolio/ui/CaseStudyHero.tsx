'use client';

import { motion } from 'framer-motion';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { OptimizedVideo } from '@/components/performance/OptimizedVideo';
import { BrowserFrame } from './BrowserFrame';
import type { BrandColor } from '@/constants/project-brands';

interface CaseStudyHeroProps {
    badge?: string;
    title: string;
    subtitle: string;
    image?: {
        src: string;
        alt: string;
    };
    video?: {
        src: string;
    };
    /** Kept for API compatibility; heroes are always left-aligned, like the landing. */
    align?: 'center' | 'left';
    /** Kept for API compatibility (brand is applied by CaseStudyLayout). */
    brand?: BrandColor;
}

export function CaseStudyHero({ badge, title, subtitle, image, video }: CaseStudyHeroProps) {
    return (
        <section className="px-case-hero flex flex-col gap-10 md:gap-14">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex max-w-4xl flex-col items-start gap-5 md:gap-6"
            >
                {badge && <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">{badge}</p>}
                <h1 className="text-[2.5rem] leading-[1.04] sm:text-6xl md:text-7xl">{title}</h1>
                <p className="max-w-3xl text-lg leading-relaxed text-[var(--px-muted)] sm:text-xl md:text-2xl md:leading-relaxed">{subtitle}</p>
            </motion.div>

            {(video || image) && (
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <BrowserFrame>
                        {video ? (
                            <OptimizedVideo
                                srcBase={video.src.replace(/\.(mp4|webm|gif)$/, '')}
                                alt={image?.alt || title}
                                className="h-full w-full object-cover"
                            />
                        ) : image ? (
                            <ImageLightbox
                                src={image.src}
                                alt={image.alt}
                                width={1200}
                                height={800}
                                priority
                                className="w-full object-contain"
                                sizes="(max-width: 1200px) 100vw, 1100px"
                            />
                        ) : null}
                    </BrowserFrame>
                </motion.div>
            )}
        </section>
    );
}
