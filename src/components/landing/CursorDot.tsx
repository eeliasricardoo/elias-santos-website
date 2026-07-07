'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

/**
 * A small blend-inverted dot that trails the pointer and swells over
 * links — desktop only, the native cursor stays visible.
 */
export function CursorDot() {
    const reduce = useReducedMotion();
    const [enabled, setEnabled] = useState(false);
    const [hovering, setHovering] = useState(false);

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const sx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
    const sy = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

    useEffect(() => {
        if (reduce || !window.matchMedia('(pointer: fine)').matches) return;
        setEnabled(true);

        const move = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };
        const over = (e: MouseEvent) => {
            setHovering(!!(e.target as Element).closest('a, button'));
        };

        window.addEventListener('mousemove', move, { passive: true });
        window.addEventListener('mouseover', over, { passive: true });
        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseover', over);
        };
    }, [reduce, x, y]);

    if (!enabled) return null;

    return (
        <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-[70] rounded-full bg-white mix-blend-difference"
            style={{ x: sx, y: sy, width: 12, height: 12, marginLeft: -6, marginTop: -6 }}
            animate={{ scale: hovering ? 3.2 : 1, opacity: hovering ? 0.85 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        />
    );
}
