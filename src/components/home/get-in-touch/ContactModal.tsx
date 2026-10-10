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
      <DialogContent className='px-case px-frame px-frame-drop sm:max-w-[600px] z-[120] gap-0 p-0 overflow-hidden !rounded-none border-transparent bg-background'>
        <DialogHeader className='px-bar px-6 py-4'>
          <DialogTitle className='font-pixel text-2xl font-semibold text-[var(--px-on-sign)]'>
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
