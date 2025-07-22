'use client';

import React from 'react';
import Image from 'next/image';

interface CompanyLogoProps {
  src: string;
  alt: string;
  index: number;
  className?: string;
}

export function CompanyLogo({
  src,
  alt,
  index,
  className = '',
}: CompanyLogoProps) {
  const width = Math.min(120 + index * 20, 200);
  const height = Math.min(60 + index * 10, 100);

  return (
    <div
      className={`flex-shrink-0 flex items-center justify-center ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='hover:opacity-100 transition-opacity duration-300'
      />
    </div>
  );
}
