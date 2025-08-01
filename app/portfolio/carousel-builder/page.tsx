'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Mail } from 'lucide-react';
import { PortfolioLayout } from '@/components/portfolio';
import { BackButton } from '@/components/portfolio/ui';
import { PageAnalytics } from '@/components/analytics/page-analytics';

export default function CarouselBuilderPage() {
  return (
    <PortfolioLayout>
      {/* Analytics */}
      <PageAnalytics 
        pageName="Carousel Builder" 
        pagePath="/portfolio/carousel-builder" 
        customProperties={{
          section: "portfolio",
          project: "carousel_builder",
          type: "ux_case"
        }}
      />
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
            UX/Product Design Case Study
          </Badge>
          <h1 className='text-5xl md:text-6xl font-bold text-foreground tracking-tight'>
            Post & Carousel Generator
          </h1>
          <p className='text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            The journey of transforming a simple idea into a professional
            AI-powered carousel creation tool
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
                  src='/portfolios/carousel-builder/demo.mp4'
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
            The Transformation Journey
          </h2>

          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              Imagine a content creator who spends hours creating carousels for
              LinkedIn. They have brilliant ideas, but the creation process is
              slow and repetitive. Each slide needs to be thought out,
              structured, formatted... and in the end, the result often
              doesn&apos;t look professional.
            </p>

            <p>
              <strong className='text-foreground'>
                &ldquo;What if there was a tool that could transform an idea
                into a professional carousel in minutes?&rdquo;
              </strong>
            </p>

            <p>
              This was the question that gave birth to the{' '}
              <strong className='text-foreground'>
                Post & Carousel Generator
              </strong>{' '}
              - a tool that combines generative AI with intuitive design to
              democratize professional content creation.
            </p>
          </div>

          {/* Stats Cards */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-12'>
                {[
                  { number: '17', label: 'Development Phases' },
                  { number: '9', label: 'Professional Templates' },
                  { number: '90%', label: 'Time Reduction' },
                  { number: '60+', label: 'Optimized Slides' },
                ].map((stat, index) => (
              <motion.div
                    key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                    className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
                  >
                    <div className='text-3xl font-bold text-foreground'>{stat.number}</div>
                    <div className='text-sm text-muted-foreground'>{stat.label}</div>
              </motion.div>
            ))}
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
            Ready to Transform Your Content Creation?
          </h2>

          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              The Post & Carousel Generator represents the future of content
              creation - where AI and human creativity work together to produce
              amazing results.
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
