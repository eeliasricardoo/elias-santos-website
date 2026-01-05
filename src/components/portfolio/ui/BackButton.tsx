'use client';

import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackButtonProps {
  className?: string;
}

export function BackButton({ className = '' }: BackButtonProps) {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className={`mb-6 ${className}`}>
      <Button
        variant='ghost'
        size='sm'
        onClick={handleGoHome}
        className='group flex items-center gap-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer'
      >
        <Home className='w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5' />
        Home
      </Button>
    </div>
  );
}
