'use client';

import React from 'react';

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedContainer({
  children,
  className = '',
}: AnimatedContainerProps) {
  return (
    <div
      className={`relative mt-8 p-6 bg-muted/20 rounded-lg border border-border/20 ${className}`}
    >
      <div className='relative z-10'>{children}</div>
    </div>
  );
}
