'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, FileText } from 'lucide-react';
import { ContactModal } from '@/components/home/get-in-touch/ContactModal';
import { useAnalytics, AnalyticsEvents } from '@/lib/analytics';

export function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { track } = useAnalytics();

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

            {/* Right side - CV and Contact buttons */}
            <div className='flex items-center gap-4'>
              {/* Resume Button opens PDF in new tab */}
              <Button
                asChild
                variant='outline'
                size='sm'
                className='hover:bg-primary hover:text-primary-foreground transition-colors'
              >
                <a
                  href='/resume_eeliasricardoo.pdf'
                  target='_blank'
                  rel='noopener'
                  aria-label='Open resume'
                  onClick={() => track(AnalyticsEvents.NAVIGATION_CLICK('resume_pdf'))}
                  className='flex items-center gap-2'
                >
                  <FileText className='w-4 h-4' />
                  <span className='hidden sm:inline'>Resume</span>
                </a>
              </Button>

              {/* Contact Button */}
              <RainbowButton
                onClick={openContactModal}
                variant='outline'
                size='sm'
                className='flex items-center gap-2'
                aria-label='Open contact'
              >
                <MessageCircle className='w-4 h-4' />
                <span className='hidden sm:inline'>Contact</span>
              </RainbowButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />

      {/* CV Modal removed: opening PDF directly */}
    </>
  );
}
