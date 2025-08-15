'use client';

import React from 'react';
import Image from 'next/image';

interface CompanyLogoProps {
  src: string;
  alt: string;
  index: number;
  className?: string;
  isMobile?: boolean;
}

export function CompanyLogo({
  src,
  alt,
  index,
  className = '',
  isMobile = false,
}: CompanyLogoProps) {
  // Tamanhos otimizados para mobile
  const width = isMobile 
    ? Math.min(80 + index * 8, 120) 
    : Math.min(120 + index * 20, 200);
  const height = isMobile 
    ? Math.min(40 + index * 4, 60) 
    : Math.min(60 + index * 10, 100);

  return (
    <div
      className={`relative flex-shrink-0 flex items-center justify-center ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={isMobile ? `${width}px` : `(max-width: 768px) ${width}px, ${width}px`}
        className={`object-contain transition-opacity duration-300 ${
          isMobile ? '' : 'hover:opacity-100'
        }`}
        priority={index < (isMobile ? 2 : 3)}
        quality={isMobile ? 70 : 80}
        loading={index < (isMobile ? 2 : 3) ? 'eager' : 'lazy'}
      />
    </div>
  );
}
