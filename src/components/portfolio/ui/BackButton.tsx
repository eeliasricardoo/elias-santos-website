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
        className='flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'
      >
        <Home className='w-4 h-4' />
        Home
      </Button>
    </div>
  );
}
