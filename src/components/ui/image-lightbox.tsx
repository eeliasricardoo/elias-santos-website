import { cn } from '@/lib/utils';

interface ImageLightboxProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  children?: React.ReactNode;
}

export function ImageLightbox({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  children,
}: ImageLightboxProps) {
  if (children) {
    return <div className={cn('overflow-hidden rounded-lg', className)}>{children}</div>;
  }

  return (
    <div className='overflow-hidden rounded-lg'>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'w-full h-full object-cover',
          className
        )}
      />
    </div>
  );
}
