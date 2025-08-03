'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { ContactModal } from '@/components/home/get-in-touch/ContactModal';

export function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <div className='flex items-center'>
              <Link href='/'>
                <Image
                  src='/logo.png'
                  alt='ES Logo'
                  width={40}
                  height={40}
                  className='w-10 h-10 object-contain cursor-pointer'
                  priority
                />
              </Link>
            </div>

            {/* Right side - Contact button only */}
            <div className='flex items-center gap-4'>
              {/* Contact Button */}
              <Button
                onClick={openContactModal}
                variant='outline'
                size='sm'
                className='flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors'
              >
                <MessageCircle className='w-4 h-4' />
                <span className='hidden sm:inline'>Contact</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
      />
    </>
  );
}
