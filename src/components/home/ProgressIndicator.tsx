
import { useEffect, useState, useRef } from 'react';
import { addOptimizedScrollListener } from '@/utils/scroll-performance';

export function ProgressIndicator() {
  const [mounted, setMounted] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !progressRef.current) return;

    const progressBar = progressRef.current;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(Math.max(scrollTop / docHeight, 0), 1);

      // Use CSS transform for better performance (GPU-accelerated)
      progressBar.style.transform = `scaleX(${scrollPercent})`;
    };

    // Initial calculation
    handleScroll();

    // Optimized scroll listener with RAF throttling and passive mode
    const cleanup = addOptimizedScrollListener(handleScroll, {
      throttle: true,
      passive: true,
    });

    return cleanup;
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      ref={progressRef}
      aria-hidden='true'
      className='fixed top-0 left-0 right-0 h-1 bg-foreground origin-left z-50 will-change-transform'
      style={{ transform: 'scaleX(0)' }}
    />
  );
}
