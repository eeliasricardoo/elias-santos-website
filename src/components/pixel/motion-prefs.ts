'use client';

import { useEffect, useState } from 'react';

// Visitors can pause every animation on the site (WCAG 2.2.2), independent of
// the OS "reduce motion" setting. The choice lives on <html data-motion> so
// CSS can react, and is set before paint by the inline script in Layout.astro.

const KEY = 'er-motion';
const EVENT = 'er:motion';

export function isMotionPaused() {
    return typeof document !== 'undefined' && document.documentElement.dataset.motion === 'paused';
}

export function prefersReducedMotion() {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** True when either the OS setting or the site toggle asks for no motion. */
export function motionOff() {
    return prefersReducedMotion() || isMotionPaused();
}

export function setMotionPaused(paused: boolean) {
    const root = document.documentElement;
    if (paused) root.dataset.motion = 'paused';
    else delete root.dataset.motion;
    try {
        localStorage.setItem(KEY, paused ? 'paused' : 'on');
    } catch {
        /* private mode — applies for this page only */
    }
    window.dispatchEvent(new CustomEvent(EVENT, { detail: paused }));
}

/** Re-renders when the OS setting or the site toggle changes. */
export function useMotionOff() {
    const [off, setOff] = useState(false);
    useEffect(() => {
        const update = () => setOff(motionOff());
        update();
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        mq.addEventListener('change', update);
        window.addEventListener(EVENT, update);
        return () => {
            mq.removeEventListener('change', update);
            window.removeEventListener(EVENT, update);
        };
    }, []);
    return off;
}

/** Just the site toggle state, for the header button. */
export function useMotionPaused(): [boolean, (paused: boolean) => void] {
    const [paused, setPaused] = useState(false);
    useEffect(() => {
        const update = () => setPaused(isMotionPaused());
        update();
        window.addEventListener(EVENT, update);
        return () => window.removeEventListener(EVENT, update);
    }, []);
    return [paused, setMotionPaused];
}
