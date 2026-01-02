import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackButtonProps {
  className?: string;
}

export function BackButton({ className = '' }: BackButtonProps) {
  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className={`mb-6 ${className}`}>
      <Button
        variant='ghost'
        size='sm'
        onClick={handleGoBack}
        className='flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'
      >
        <ArrowLeft className='w-4 h-4' />
        Back
      </Button>
    </div>
  );
}
