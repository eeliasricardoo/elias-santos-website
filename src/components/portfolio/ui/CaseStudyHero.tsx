'use client';

import { motion } from 'framer-motion';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { OptimizedVideo } from '@/components/performance/OptimizedVideo';
import { PROJECT_BRANDS, type BrandColor } from '@/constants/project-brands';

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
                    <div className={`font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
                        <span
                            className="inline-block h-2 w-2 rounded-full"
                            style={{ backgroundColor: brandColor || '#d9f99d' }}
                        />
                        {badge}
                    </div>
                )}
                <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.05]">
                    {title}
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
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-gray-100 dark:bg-gray-800">
                            <OptimizedVideo
                                srcBase={video.src.replace(/\.(mp4|webm|gif)$/, '')}
                                alt={image?.alt || title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ) : image ? (
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-gray-100 dark:bg-gray-800">
                            {/* Browser chrome */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-gray-200 dark:bg-gray-900 border-b border-white/5">
                                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                            </div>
                            <ImageLightbox
                                src={image.src}
                                alt={image.alt}
                                width={1200}
                                height={800}
                                className="w-full object-contain cursor-pointer"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                quality={85}
                            />
                        </div>
                    ) : null}
                </div>
            </motion.div>
        </section>
    );
}
