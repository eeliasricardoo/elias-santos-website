'use client';

import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export function Skeleton({ className, width, height }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted/20', className)}
      style={{
        width,
        height,
      }}
    />
  );
}

interface HeroSkeletonProps {
  className?: string;
}

export function HeroSkeleton({ className }: HeroSkeletonProps) {
  return (
    <div className={cn('space-y-6', className)}>
      {/* Badge Skeleton */}
      <div className='flex justify-center'>
        <Skeleton className='w-32 h-10 rounded-full' />
      </div>

      {/* Title Skeleton */}
      <div className='space-y-4'>
        <Skeleton className='w-full max-w-4xl h-20 mx-auto' />
        <Skeleton className='w-full max-w-2xl h-8 mx-auto' />
      </div>
    </div>
  );
}

interface NavbarSkeletonProps {
  className?: string;
}

export function NavbarSkeleton({ className }: NavbarSkeletonProps) {
  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50',
        className
      )}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Skeleton className='w-10 h-10 rounded' />
          </div>
          <div className='flex items-center gap-4'>
            <Skeleton className='w-20 h-8 rounded' />
            <Skeleton className='w-24 h-8 rounded' />
          </div>
        </div>
      </div>
    </nav>
  );
}
