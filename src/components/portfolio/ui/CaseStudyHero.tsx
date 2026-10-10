'use client';

import { motion } from 'framer-motion';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { OptimizedVideo } from '@/components/performance/OptimizedVideo';
import { BrowserFrame } from './BrowserFrame';
import { PROJECT_BRANDS, type BrandColor } from '@/constants/project-brands';
import { Stroke } from '@/components/pixel/hero-fx';

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
    align?: 'center' | 'left';
    /** Color-codes this case study with its project brand (subtle accent). */
    brand?: BrandColor;
}

export function CaseStudyHero({
    badge,
    title,
    subtitle,
    image,
    video,
    align = 'center',
    brand
}: CaseStudyHeroProps) {
    const brandColor = brand ? PROJECT_BRANDS[brand].bg : undefined;

    return (
        <section className={`${align === 'center' ? 'text-center' : 'text-left'} space-y-8`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
                {badge && (
                    <div className={`flex ${align === 'center' ? 'justify-center' : ''}`}>
                        <span className="px-sign px-swing-in inline-flex items-center gap-2 px-3 py-2 font-pixel-label text-[11px]">
                            <span
                                className="inline-block h-2.5 w-2.5"
                                style={{ backgroundColor: brandColor || 'var(--px-gold)' }}
                            />
                            {badge}
                        </span>
                    </div>
                )}
                <h1 className="text-5xl md:text-7xl">
                    <Stroke text={title} />
                </h1>
                <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
                    {subtitle}
                </p>
            </motion.div>

            {/* Media - Full Width */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32"
            >
                <div className="relative w-full">
                    {video ? (
                        <BrowserFrame>
                            <OptimizedVideo
                                srcBase={video.src.replace(/\.(mp4|webm|gif)$/, '')}
                                alt={image?.alt || title}
                                className="w-full h-full object-cover"
                            />
                        </BrowserFrame>
                    ) : image ? (
                        <BrowserFrame>
                            <ImageLightbox
                                src={image.src}
                                alt={image.alt}
                                width={1200}
                                height={800}
                                className="w-full object-contain cursor-pointer"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                quality={85}
                            />
                        </BrowserFrame>
                    ) : null}
                </div>
            </motion.div>
        </section>
    );
}
