
import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { addOptimizedScrollListener } from '@/utils/scroll-performance';

export function ScrollIndicator() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current || !progressRef.current) return;

    const container = containerRef.current;
    const progressBar = progressRef.current;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollY / scrollHeight) * 100, 100);

      // Use CSS for better performance
      container.style.opacity = scrollY > 100 ? '1' : '0';
      progressBar.style.height = `${progress}%`;
    };

    // Initial calculation
    handleScroll();

    // Optimized scroll listener
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
      ref={containerRef}
      className='fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block transition-opacity duration-300'
      style={{ opacity: 0 }}
    >
      <div className='flex flex-col items-center space-y-4'>
        <div className='w-1 h-32 bg-muted/30 rounded-full relative'>
          <div
            ref={progressRef}
            className='absolute top-0 left-0 w-full bg-foreground rounded-full transition-[height] duration-100'
            style={{ height: '0%' }}
          />
        </div>
        <div className='w-6 h-6 border-2 border-muted-foreground/30 rounded-full flex items-center justify-center animate-spin-slow'>
          <ChevronDown className='w-3 h-3 text-muted-foreground' />
        </div>
      </div>
    </div>
  );
}
