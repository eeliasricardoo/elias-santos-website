'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Mail } from 'lucide-react';
import { PortfolioLayout } from '@/components/portfolio';
import { BackButton } from '@/components/portfolio/ui';

export default function VentusChatPage() {
  return (
    <PortfolioLayout>
      <main className='max-w-4xl mx-auto py-12 px-4 space-y-20 pt-24'>
        {/* Header */}
        <header className='mb-10 text-left'>
          <BackButton />
        </header>

        {/* Hero Section */}
        <Suspense fallback={<div className="h-96 bg-muted/20 rounded-lg animate-pulse" />}>
          <section className='text-center space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-6'
            >
              <Badge className='bg-muted/50 text-muted-foreground border-border/50 px-4 py-2 text-sm font-medium'>
                Product Case Study
              </Badge>
              <h1 className='text-5xl md:text-6xl font-bold text-foreground tracking-tight'>
                ChatAI - From Need to Innovation in One Week
              </h1>
              <p className='text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                The journey of creating my own AI tool to solve a real problem:
                building a personal AI ecosystem that&apos;s radically cheaper,
                fully customizable, and superior to existing workflows
              </p>
            </motion.div>

            {/* Video Demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
            >
              <div className='relative w-full'>
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='absolute top-0 left-0 w-full h-full object-cover'
                  >
                    <source
                      src='/portfolios/ventuschat/demo.mp4'
                      type='video/mp4'
                    />
                  </video>
                </div>
              </div>
            </motion.div>
          </section>
        </Suspense>

        {/* Introduction */}
        <Suspense fallback={<div className="h-48 bg-muted/20 rounded-lg animate-pulse" />}>
          <section className='space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-6'
            >
              <h2 className='text-3xl font-bold text-foreground'>
                The Challenge: Forging My Own Tool
              </h2>

              <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
                <p>
                  As a UX designer and developer, I found myself constantly using AI
                  tools for various tasks. However, I was frustrated with the
                  limitations of existing solutions - they were either too expensive,
                  too limited, or too complex for my needs.
                </p>

                <p>
                  <strong className='text-foreground'>
                    &ldquo;Why not build my own AI tool that perfectly fits my
                    workflow?&rdquo;
                  </strong>
                </p>

                <p>
                  This question led to the creation of{' '}
                  <strong className='text-foreground'>ChatAI</strong> - a
                  personalized AI ecosystem that&apos;s radically cheaper, fully
                  customizable, and superior to existing workflows.
                </p>
              </div>
            </motion.div>
          </section>
        </Suspense>

        {/* Call to Action */}
        <Suspense fallback={<div className="h-48 bg-muted/20 rounded-lg animate-pulse" />}>
          <section className='text-center space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-6'
            >
              <h2 className='text-3xl font-bold text-foreground'>
                Ready to Build Your Own AI Solution?
              </h2>

              <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
                <p>
                  ChatAI demonstrates how personal AI tools can be more powerful,
                  cost-effective, and tailored than commercial alternatives.
                </p>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button size='lg' className='bg-primary hover:bg-primary/90'>
                  <Github className='w-4 h-4 mr-2' />
                  View on GitHub
                </Button>
                <Button size='lg' variant='outline'>
                  <Mail className='w-4 h-4 mr-2' />
                  Get in Touch
                </Button>
              </div>
            </motion.div>
          </section>
        </Suspense>
      </main>
    </PortfolioLayout>
  );
}
