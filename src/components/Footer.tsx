import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='relative bg-background border-t border-border/50'>
      {/* Background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-0 right-1/4 w-40 h-40 bg-muted/10 rounded-full blur-3xl' />
      </div>

      <div className='relative z-10 container mx-auto px-4 py-12 md:py-16 lg:py-20'>
        {/* Main Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16'>
          {/* Brand Section - 5 colunas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='md:col-span-2 lg:col-span-5 space-y-4 md:space-y-6'
          >
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 md:w-12 md:h-12 border border-border rounded-lg flex items-center justify-center'>
                <span className='font-mono font-bold text-sm md:text-base text-foreground'>
                  ER<span className='text-electric'>_</span>
                </span>
              </div>
              <div>
                <h2 className='text-xl md:text-2xl font-bold text-foreground'>
                  Elias Ricardo
                </h2>
                <p className='text-muted-foreground text-xs md:text-sm'>
                  UX/UI Designer & Frontend
                </p>
              </div>
            </div>
            <p className='text-muted-foreground leading-relaxed text-sm md:text-base max-w-md'>
              I design interfaces, prototype with AI, and ship production code.
              Most recently in EdTech and CRM tooling — working remotely,
              worldwide.
            </p>
            <div className='flex items-center space-x-3'>
              <Badge
                variant='secondary'
                className='bg-electric/10 text-electric border-electric/20 font-mono text-xs uppercase tracking-wider'
              >
                <div className='w-2 h-2 bg-electric rounded-full mr-2 animate-pulse'></div>
                Available for work
              </Badge>
            </div>
          </motion.div>

          {/* Quick Links - 4 colunas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='md:col-span-1 lg:col-span-4 space-y-4 md:space-y-6'
          >
            <h3 className='text-lg md:text-xl font-semibold text-foreground'>
              Navigation
            </h3>
            <div className='grid grid-cols-1 gap-2 md:gap-3'>
              <Button
                variant='ghost'
                className='justify-start p-2 md:p-3 h-auto text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all text-sm'
                asChild
              >
                <a href="/#how-i-work">How I Work</a>
              </Button>
              <Button
                variant='ghost'
                className='justify-start p-2 md:p-3 h-auto text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all text-sm'
                asChild
              >
                <a href="/#projects">Case Studies</a>
              </Button>
              <Button
                variant='ghost'
                className='justify-start p-2 md:p-3 h-auto text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all text-sm'
                asChild
              >
                <a href="/#testimonials">Testimonials</a>
              </Button>
              <Button
                variant='ghost'
                className='justify-start p-2 md:p-3 h-auto text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all text-sm'
                asChild
              >
                <a href="/#get-in-touch">Contact</a>
              </Button>
            </div>
          </motion.div>

          {/* Social Links - 3 colunas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='md:col-span-1 lg:col-span-3 space-y-4 md:space-y-6'
          >
            <h3 className='text-lg md:text-xl font-semibold text-foreground'>
              Connect
            </h3>
            <div className='grid grid-cols-1 gap-2'>
              <Button
                variant='outline'
                size='sm'
                className='w-full justify-start h-9 md:h-10 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm'
                asChild
              >
                <a href="https://linkedin.com/in/eeliasricardoo" target="_blank" rel="noopener noreferrer">
                  <Linkedin className='w-4 h-4 mr-2' />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant='outline'
                size='sm'
                className='w-full justify-start h-9 md:h-10 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm'
                asChild
              >
                <a href="https://github.com/eeliasricardoo" target="_blank" rel="noopener noreferrer">
                  <Github className='w-4 h-4 mr-2' />
                  GitHub
                </a>
              </Button>
              <Button
                variant='outline'
                size='sm'
                className='w-full justify-start h-9 md:h-10 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm'
                asChild
              >
                <a href="mailto:eeliasricardoo@gmail.com">
                  <Mail className='w-4 h-4 mr-2' />
                  Email
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='pt-6 md:pt-8 border-t border-border/30 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0'
        >
          <div className='flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 text-xs sm:text-sm text-muted-foreground text-center sm:text-left'>
            <span>© 2026 Elias Ricardo</span>
            <div className='hidden sm:block w-1 h-1 bg-muted-foreground/30 rounded-full'></div>
            <span>
              Designed in Figma, built with Astro + React — AI as pair, never
              pilot.
            </span>
          </div>

          <Button
            variant='ghost'
            size='sm'
            onClick={scrollToTop}
            className='text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all text-sm'
          >
            <ArrowUp className='w-4 h-4 mr-2' />
            Back to top
          </Button>
        </motion.div>
      </div>
    </footer>
  );
}
