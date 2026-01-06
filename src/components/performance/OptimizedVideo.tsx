import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';

interface OptimizedVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    srcBase: string; // Path without extension (e.g., "/portfolios/framer-ui")
    poster?: string; // Optional poster image
    containerClassName?: string;
    alt: string; // Required for accessibility (used in fallback/aria)
}

export function OptimizedVideo({
    srcBase,
    poster,
    className,
    containerClassName,
    alt,
    ...props
}: OptimizedVideoProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "200px" });

    // Clean up path to ensure it starts with / and doesn't have extensions
    const cleanPath = srcBase.replace(/\.(gif|mp4|webm)$/, '');

    return (
        <div
            ref={containerRef}
            className={cn("relative overflow-hidden bg-gray-100 dark:bg-gray-800", containerClassName)}
        >
            {isInView ? (
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={poster}
                    className={cn("w-full h-auto object-cover", className)}
                    aria-label={alt}
                    {...props}
                >
                    <source src={`${cleanPath}.webm`} type="video/webm" />
                    <source src={`${cleanPath}.mp4`} type="video/mp4" />
                    {/* Fallback for very old browsers still showing the specific video error */}
                    <p className="sr-only">{alt}</p>
                </video>
            ) : (
                /* Skeleton/Placeholder while not in view */
                <div className="w-full h-full min-h-[200px] animate-pulse" />
            )}
        </div>
    );
}
