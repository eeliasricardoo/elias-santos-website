import { Button } from '@/components/ui/button';
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
            {/* Logo */}
            <div className='flex items-center'>
              <a href='/' className='group transition-all hover:scale-105 active:scale-95'>
                <div className='relative flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background group-hover:border-electric/50 transition-colors'>
                  <span className='font-mono font-bold text-sm tracking-tighter text-foreground'>ER<span className='text-electric'>_</span></span>
                </div>
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
                  href='/resume.pdf'
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
              <Button
                asChild
                size='sm'
                className='flex items-center gap-2'
              >
                <a
                  href='https://calendly.com/eeliasricardoo'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Schedule a meeting'
                >
                  <span className='flex items-center gap-2'>
                    <MessageCircle className='w-4 h-4' />
                    <span className='hidden sm:inline'>Let's Talk</span>
                  </span>
                </a>
              </Button>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
