'use client';

import { useEffect, useRef, useState } from 'react';

export function StarTunnel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startAnimation();
                } else {
                    stopAnimation();
                }
            },
            { threshold: 0 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const frameIdRef = useRef<number | null>(null);
    const autoProgressRef = useRef(0);

    const startAnimation = () => {
        if (frameIdRef.current) return;

        const animate = () => {
            if (!containerRef.current) return;

            const scrollY = window.scrollY;
            autoProgressRef.current += 0.5;

            const totalOffset = (scrollY * 0.5) + autoProgressRef.current;
            containerRef.current.style.setProperty('--scroll-offset', `${totalOffset}px`);

            frameIdRef.current = requestAnimationFrame(animate);
        };

        frameIdRef.current = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
        if (frameIdRef.current) {
            cancelAnimationFrame(frameIdRef.current);
            frameIdRef.current = null;
        }
    };

    useEffect(() => {
        return () => stopAnimation();
    }, []);

    if (!mounted) return null;

    // Generate stars with reduced intensity for better readability
    const stars = Array.from({ length: 18 }).map((_, i) => {
        // Random distribution but biased away from dead center to avoid "blocking" view
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 45 + 5; // 5vw to 50vw radius

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        const size = Math.random() * 2 + 1; // 1px to 3px (smaller)
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
                        className="absolute rounded-full bg-slate-200/50 shadow-[0_0_4px_rgba(255,255,255,0.2)]"
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            left: `${star.x}vw`,
                            top: `${star.y}vh`,
                            opacity: 0.08 + (star.depth * 0.18),
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
