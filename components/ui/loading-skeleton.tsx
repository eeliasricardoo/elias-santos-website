'use client';

import { cn } from '@/lib/utils';

interface LoadingSkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function LoadingSkeleton({
  className,
  width = '100%',
  height = '1rem',
  rounded = 'md',
}: LoadingSkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-muted/20',
        {
          'rounded-sm': rounded === 'sm',
          'rounded-md': rounded === 'md',
          'rounded-lg': rounded === 'lg',
          'rounded-xl': rounded === 'xl',
          'rounded-full': rounded === 'full',
        },
        className
      )}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    />
  );
}

// Componente específico para hero content
export function HeroSkeleton() {
  return (
    <div className='relative z-10 text-center space-y-6 px-4 max-w-5xl mx-auto'>
      <div className='space-y-4'>
        {/* Título skeleton */}
        <LoadingSkeleton 
          className='mx-auto' 
          width={600} 
          height={80} 
          rounded='lg'
        />
        
        {/* Descrição skeleton */}
        <div className='space-y-2'>
          <LoadingSkeleton 
            className='mx-auto' 
            width={500} 
            height={24} 
            rounded='md'
          />
          <LoadingSkeleton 
            className='mx-auto' 
            width={400} 
            height={24} 
            rounded='md'
          />
        </div>
      </div>
    </div>
  );
}

// Componente para foto de perfil
export function ProfilePhotoSkeleton() {
  return (
    <div className='relative z-10 flex justify-center mb-8'>
      <div className='relative'>
        <div className='relative w-48 h-48 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-border/30 shadow-2xl'>
          <LoadingSkeleton 
            className='w-full h-full' 
            rounded='full'
          />
        </div>
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
            <LoadingSkeleton className='w-10 h-10 rounded' />
          </div>
          <div className='flex items-center gap-4'>
            <LoadingSkeleton className='w-20 h-8 rounded' />
            <LoadingSkeleton className='w-24 h-8 rounded' />
          </div>
        </div>
      </div>
    </nav>
  );
}
