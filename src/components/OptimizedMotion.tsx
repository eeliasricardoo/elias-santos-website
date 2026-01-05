import { motion, type MotionProps } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { useOptimizedMotion } from '@/hooks/use-reduced-motion';

/**
 * Optimized motion.div that automatically disables expensive animations on mobile/touch
 * Improves INP (Interaction to Next Paint) performance significantly
 */
export function OptimizedMotionDiv(props: HTMLMotionProps<"div">) {
    const { shouldAnimate, shouldAnimateHover } = useOptimizedMotion();

    // Remove expensive animation props on low-end devices
    const {
        whileHover,
        whileTap,
        whileInView,
        initial,
        animate,
        exit,
        transition,
        ...restProps
    } = props;

    // If animations are disabled, return regular div
    if (!shouldAnimate) {
        return <div {...restProps as any} />;
    }

    // Remove hover animations on touch devices (they cause INP issues)
    const optimizedProps: HTMLMotionProps<"div"> = {
        ...restProps,
        initial,
        animate,
        exit,
        // Simplified transitions for better performance
        transition: transition || { duration: 0.2, ease: 'easeOut' },
    };

    // Only add whileInView if animations are enabled
    if (whileInView && shouldAnimate) {
        optimizedProps.whileInView = whileInView;
    }

    // Only add hover/tap on devices that support hover
    if (shouldAnimateHover) {
        if (whileHover) optimizedProps.whileHover = whileHover;
        if (whileTap) optimizedProps.whileTap = whileTap;
    }

    return <motion.div {...optimizedProps} />;
}

/**
 * Optimized motion.button for better mobile INP
 */
export function OptimizedMotionButton(props: HTMLMotionProps<"button">) {
    const { shouldAnimate, shouldAnimateHover } = useOptimizedMotion();

    const {
        whileHover,
        whileTap,
        transition,
        ...restProps
    } = props;

    if (!shouldAnimate) {
        return <button {...restProps as any} />;
    }

    const optimizedProps: HTMLMotionProps<"button"> = {
        ...restProps,
        transition: transition || { duration: 0.1 },
    };

    // Only add tap feedback (skip hover on touch)
    if (whileTap) optimizedProps.whileTap = whileTap;
    if (shouldAnimateHover && whileHover) {
        optimizedProps.whileHover = whileHover;
    }

    return <motion.button {...optimizedProps} />;
}

/**
 * Helper to get optimized animation variants based on device
 */
export function getOptimizedVariants(shouldAnimate: boolean) {
    if (!shouldAnimate) {
        return {
            hidden: {},
            visible: {},
        };
    }

    return {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            }
        },
    };
}
