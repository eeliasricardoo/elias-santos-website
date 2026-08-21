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

    const hasMedia = Boolean(video || (image && image !== '/placeholder.jpg'));

    return (
        <div
            className={`relative h-full w-full overflow-hidden ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Base layer: Coded Wireframe */}
            <div className="h-full w-full">
                <ProjectWireframe title={title} accent={accent} />
            </div>

            {/* Hover Image Layer (when no video is present) */}
            {image && !video && image !== '/placeholder.jpg' && (
                <div
                    className={`absolute inset-0 h-full w-full transition-all duration-500 pointer-events-none ${
                        isHovered ? 'opacity-100 scale-[1.02]' : 'opacity-0 scale-100'
                    }`}
                >
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                </div>
            )}

            {/* Hover Video Layer */}
            {video && (
                <video
                    ref={videoRef}
                    src={video}
                    muted
                    loop
                    playsInline
                    onCanPlay={() => setVideoLoaded(true)}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 pointer-events-none ${
                        isHovered && videoLoaded ? 'opacity-100 scale-[1.02]' : 'opacity-0 scale-100'
                    }`}
                />
            )}

            {/* Media Active Indicator Badge (Top right) */}
            {hasMedia && isHovered && (videoLoaded || !video) && (
                <div
                    className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[8px] font-semibold tracking-wider text-white backdrop-blur-md shadow-lg transition-opacity duration-300"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', border: `1px solid ${accent}` }}
                >
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: accent }} />
                    {video ? 'LIVE PREVIEW' : 'UI PREVIEW'}
                </div>
            )}
        </div>
    );
}
