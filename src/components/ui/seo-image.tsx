import { useState } from 'react';

interface SEOImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export function SEOImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  quality,
  placeholder,
  blurDataURL,
}: SEOImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoad={() => setIsLoading(false)}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
}
