'use client';

import { useState, useRef, useEffect } from 'react';
import { ProjectWireframe } from './ProjectWireframe';

interface HoverVideoPreviewProps {
    title: string;
    accent: string;
    image?: string;
    video?: string;
    className?: string;
}

export function HoverVideoPreview({
    title,
    accent,
    image,
    video,
    className = '',
}: HoverVideoPreviewProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!video || !videoRef.current) return;

        if (isHovered) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Autoplay was prevented or interrupted, graceful handle
                });
            }
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isHovered, video]);

    return (
        <div
            className={`relative h-full w-full overflow-hidden ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Base layer: Wireframe or Static Image */}
            <div className={`h-full w-full transition-opacity duration-500 ${isHovered && videoLoaded ? 'opacity-0' : 'opacity-100'}`}>
                {image && image !== '/placeholder.jpg' ? (
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                    />
                ) : (
                    <ProjectWireframe title={title} accent={accent} />
                )}
            </div>

            {/* Hover Video Layer */}
            {video && (
                <video
                    ref={videoRef}
                    src={video}
                    muted
                    loop
                    playsInline
                    onCanPlay={() => setVideoLoaded(true)}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 pointer-events-none ${
                        isHovered && videoLoaded ? 'opacity-100 scale-[1.02]' : 'opacity-0 scale-100'
                    }`}
                />
            )}

            {/* Video Active Indicator Badge (Top right) */}
            {video && isHovered && videoLoaded && (
                <div
                    className="absolute top-2 right-2 z-20 flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[8px] font-semibold tracking-wider text-white backdrop-blur-md transition-opacity duration-300"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)', border: `1px solid ${accent}` }}
                >
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: accent }} />
                    LIVE PREVIEW
                </div>
            )}
        </div>
    );
}
