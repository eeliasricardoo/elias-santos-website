'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const handleSuccess = () => {
    // Fechar o modal após 2 segundos de sucesso
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50'
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='fixed inset-0 z-50 flex items-center justify-center p-4'
          >
            <div className='relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl border border-border/20'>
              {/* Header */}
              <div className='flex items-center justify-between p-6 border-b border-border/20'>
                <h2 className='text-2xl font-bold text-foreground'>
                  Get in Touch
                </h2>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={onClose}
                  className='h-8 w-8 p-0 hover:bg-muted'
                >
                  <X className='h-4 w-4' />
                </Button>
              </div>

              {/* Content */}
              <div className='p-6'>
                <ContactForm 
                  onSuccess={handleSuccess}
                  showTitle={false}
                  className='w-full'
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 