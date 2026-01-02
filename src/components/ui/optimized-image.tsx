import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  quality,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'transition-opacity duration-300 w-full h-full object-cover',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && <div className='absolute inset-0 bg-muted animate-pulse' />}
    </div>
  );
}
