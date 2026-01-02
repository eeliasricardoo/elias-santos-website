import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { MessageCircle, FileText } from 'lucide-react';
import { useAnalytics, AnalyticsEvents } from '@/lib/analytics';

export function Navbar() {
  const { track } = useAnalytics();

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <div className='flex items-center'>
              <a href='/'>
                <img
                  src='/logo.png'
                  alt='ES Logo'
                  width={40}
                  height={40}
                  className='w-10 h-10 object-contain cursor-pointer'
                />
              </a>
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
                  onClick={() =>
                    track(AnalyticsEvents.NAVIGATION_CLICK('resume_pdf'))
                  }
                  className='flex items-center gap-2'
                >
                  <FileText className='w-4 h-4' />
                  <span className='hidden sm:inline'>Resume</span>
                </a>
              </Button>

              {/* Contact Button */}
              <RainbowButton
                asChild
                variant='outline'
                size='sm'
                className='flex items-center gap-2'
              >
                <a
                  href='https://calendly.com/eeliasricardoo'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Schedule a meeting'
                >
                  <span className='relative z-10 flex items-center gap-2'>
                    <MessageCircle className='w-4 h-4' />
                    <span className='hidden sm:inline'>Contact</span>
                  </span>
                </a>
              </RainbowButton>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
