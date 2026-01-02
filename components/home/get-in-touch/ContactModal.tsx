'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ContactForm } from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const handleSuccess = () => {
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className='sm:max-w-[600px] z-[120] gap-0 p-0 overflow-hidden bg-background border-border/20'>
        <DialogHeader className='p-6 border-b border-border/20'>
          <DialogTitle className='text-2xl font-bold text-foreground'>
            Get in Touch
          </DialogTitle>
        </DialogHeader>

        <div className='max-h-[85vh] overflow-y-auto p-6'>
          <ContactForm
            onSuccess={handleSuccess}
            showTitle={false}
            className='w-full'
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
