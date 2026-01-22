'use client';

import { useEffect, useRef, useState } from 'react';

export function StarTunnel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Auto-drift animation loop
        let frameId: number;
        let autoProgress = 0;

        const animate = () => {
            if (!containerRef.current) return;

            const scrollY = window.scrollY;
            // Combine manual scroll with automatic drift
            autoProgress += 0.5; // Constant slow spee

            const totalOffset = (scrollY * 0.5) + autoProgress;

            containerRef.current.style.setProperty('--scroll-offset', `${totalOffset}px`);
            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, []);

    if (!mounted) return null;

    // Generate brighter, more visible stars
    const stars = Array.from({ length: 60 }).map((_, i) => {
        // Random distribution but biased away from dead center to avoid "blocking" view
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 45 + 5; // 5vw to 50vw radius

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        const size = Math.random() * 3 + 2; // 2px to 5px (bigger)
        const depth = Math.random();

        return { id: i, x, y, size, depth };
    });

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
            style={{ perspective: '1000px' }}
        >
            {/* Origin Center */}
            <div className="absolute top-1/2 left-1/2 w-0 h-0" style={{ transformStyle: 'preserve-3d' }}>
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            left: `${star.x}vw`,
                            top: `${star.y}vh`,
                            opacity: 0.4 + (star.depth * 0.6), // Min 0.4 opacity
                            transform: `translateZ(calc(var(--scroll-offset, 0px) * ${star.depth * 3} + ${star.depth * 500}px))`,
                            willChange: 'transform',
                        }}
                    />
                ))}
            </div>

            {/* Subtle overlay to integrate with theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        </div>
    );
}
