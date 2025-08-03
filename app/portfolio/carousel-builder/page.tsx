'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  Github,
  Brain,
  Palette,
  Edit3,
  MessageSquare,
  Layout,
  Download,
  Code,
  Target,
  Users,
  Clock,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Rocket,
  Eye,
  Sparkles,
  Mail,
  Database,
} from 'lucide-react';
import { PageAnalytics } from '@/components/analytics/page-analytics';
import { PageSEO } from '@/components/seo/PageSEO';
import { ProjectStructuredData } from '@/components/seo/ProjectStructuredData';
import { BackButton } from '@/components/portfolio/ui/BackButton';

export default function CarouselBuilderPage() {
  return (
    <>
      {/* SEO */}
      <PageSEO
        title='Post & Carousel Generator - Case Study'
        description='Complete case study of Post & Carousel Generator, an AI tool that revolutionizes carousel creation for social media. 90% reduction in creation time.'
        keywords={[
          'Post & Carousel Generator',
          'AI for content creation',
          'LinkedIn Carousels',
          'UX Design Case Study',
          'AI Tool',
          'Content Creation',
          'Interface Design',
          'Next.js',
          'React',
          'OpenRouter API',
        ]}
        url='/portfolio/carousel-builder'
        type='article'
        publishedTime='2024-01-15T00:00:00Z'
        modifiedTime='2024-12-19T00:00:00Z'
        author='Elias Santos'
        section='Portfolio'
        tags={[
          'UX Design',
          'IA',
          'Content Creation',
          'Carrosséis',
          'LinkedIn',
          'Next.js',
          'React',
        ]}
      />

      {/* Structured Data */}
      <ProjectStructuredData
        name='Post & Carousel Generator'
        description='AI tool that revolutionizes carousel creation for social media, reducing creation time by 90% with professional templates and intelligent content generation.'
        image='/portfolios/carousel-builder/demo.mp4'
        url='/portfolio/carousel-builder'
        technologies={[
          'Next.js',
          'React',
          'TypeScript',
          'OpenRouter API',
          'TipTap',
          'Tailwind CSS',
        ]}
        category='UX/UI Design'
        datePublished='2024-01-15T00:00:00Z'
        dateModified='2024-12-19T00:00:00Z'
        author='Elias Santos'
      />

      <main className='max-w-4xl mx-auto py-12 px-4 space-y-20 pt-24'>
        {/* Analytics */}
        <PageAnalytics
          pageName='Carousel Builder'
          pagePath='/portfolio/carousel-builder'
          customProperties={{
            section: 'portfolio',
            project: 'carousel_builder',
            type: 'ux_case',
          }}
        />
        {/* Header */}
        <header className='mb-10 text-left'>
          <BackButton />
        </header>

        {/* Hero Section */}
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

          {/* Main Interface Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
          >
            <Image
              src='/portfolios/carousel-builder/Captura de tela 2025-08-01 001703.png'
              alt='Main interface of Post & Carousel Generator showing AI Assistant, carousel editor and template system'
              width={1400}
              height={900}
              className='w-full h-auto'
              priority
            />
          </motion.div>
        </section>

        {/* Introduction */}
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
                Imagine a content creator who spends hours creating carousels
                for LinkedIn. They have brilliant ideas, but the creation
                process is slow and repetitive. Each slide needs to be thought
                out, structured, formatted... and in the end, the result often
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
              >
                <div className='text-3xl font-bold text-foreground'>17</div>
                <div className='text-sm text-muted-foreground'>
                  Development Phases
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
              >
                <div className='text-3xl font-bold text-foreground'>9</div>
                <div className='text-sm text-muted-foreground'>
                  Professional Templates
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
              >
                <div className='text-3xl font-bold text-foreground'>90%</div>
                <div className='text-sm text-muted-foreground'>
                  Time Reduction
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
              >
                <div className='text-3xl font-bold text-foreground'>60+</div>
                <div className='text-sm text-muted-foreground'>
                  Optimized Slides
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* The Problem */}
        <section className='space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <h2 className='text-3xl font-bold text-foreground'>
              The Real Challenge
            </h2>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                Content creators face the daily challenge of producing
                professional carousels for social media. The traditional process
                involves multiple time-consuming and technical steps that often
                result in frustration and inconsistent results.
              </p>
            </div>

            {/* Pain Points */}
            <div className='grid md:grid-cols-2 gap-6'>
              {[
                {
                  icon: <Clock className='w-6 h-6' />,
                  title: 'Excessive Time',
                  description:
                    '30+ minutes to create a simple carousel, often without professional results',
                },
                {
                  icon: <Users className='w-6 h-6' />,
                  title: 'Lack of Skills',
                  description:
                    'Creators without technical design knowledge are limited',
                },
                {
                  icon: <Eye className='w-6 h-6' />,
                  title: 'Limited Inspiration',
                  description:
                    'Absence of visual references and professional templates',
                },
                {
                  icon: <Target className='w-6 h-6' />,
                  title: 'Inconsistent Quality',
                  description:
                    'Varied results depending on the creator&apos;s experience and skills',
                },
              ].map((pain, index) => (
                <motion.div
                  key={pain.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='bg-card border border-border/20 rounded-xl p-6 space-y-4'
                >
                  <div className='text-primary'>{pain.icon}</div>
                  <div>
                    <h3 className='font-semibold text-foreground text-lg'>
                      {pain.title}
                    </h3>
                    <p className='text-muted-foreground mt-2'>
                      {pain.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* The Solution */}
        <section className='space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <h2 className='text-3xl font-bold text-foreground'>
              The Visionary Solution
            </h2>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                The answer to this challenge came through the combination of{' '}
                <strong className='text-foreground'>generative AI</strong>
                with{' '}
                <strong className='text-foreground'>intuitive design</strong>.
                We created a tool that transforms the carousel creation process
                from a complex technical task into a fluid and productive
                experience.
              </p>

              <p>
                The{' '}
                <strong className='text-foreground'>
                  Post & Carousel Generator
                </strong>{' '}
                was born from the vision of democratizing professional content
                creation, allowing anyone, regardless of their design skills, to
                create impactful carousels in minutes.
              </p>
            </div>

            {/* Solution Features */}
            <div className='grid md:grid-cols-2 gap-6'>
              {[
                {
                  icon: <Brain className='w-6 h-6' />,
                  title: 'Intelligent Generative AI',
                  description:
                    'OpenRouter API generates relevant and structured content automatically',
                },
                {
                  icon: <Palette className='w-6 h-6' />,
                  title: 'Professional Templates',
                  description:
                    '9 specialized templates with optimized content for different niches',
                },
                {
                  icon: <Edit3 className='w-6 h-6' />,
                  title: 'Advanced Editor',
                  description:
                    'TipTap for rich formatting and complete customization of each element',
                },
                {
                  icon: <MessageSquare className='w-6 h-6' />,
                  title: 'Conversational Interface',
                  description:
                    'Side chat for natural interaction with AI, maintaining context and history',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='bg-card border border-border/20 rounded-xl p-6 space-y-4'
                >
                  <div className='text-primary'>{feature.icon}</div>
                  <div>
                    <h3 className='font-semibold text-foreground text-lg'>
                      {feature.title}
                    </h3>
                    <p className='text-muted-foreground mt-2'>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Development Journey */}
        <section className='space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <h2 className='text-3xl font-bold text-foreground'>
              The Development Journey
            </h2>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                The development of the Post & Carousel Generator was a journey
                of{' '}
                <strong className='text-foreground'>
                  17 structured phases
                </strong>
                , each representing a milestone in the product&apos;s evolution.
                We started with a simple concept and continuously iterated based
                on user feedback and needs.
              </p>
            </div>

            {/* Development Phases */}
            <div className='space-y-6'>
              {[
                {
                  phase: 'Phases 1-2',
                  title: 'Brainstorm & Design',
                  description:
                    'Product definition through AI brainstorming and initial wireframe creation',
                  icon: <Lightbulb className='w-5 h-5' />,
                },
                {
                  phase: 'Phases 3-4',
                  title: 'Setup & MVP',
                  description:
                    'Development environment setup and functional MVP creation',
                  icon: <Rocket className='w-5 h-5' />,
                },
                {
                  phase: 'Phases 5-7',
                  title: 'AI Integration',
                  description:
                    'OpenRouter API integration and AI content generation implementation',
                  icon: <Brain className='w-5 h-5' />,
                },
                {
                  phase: 'Phases 8-9',
                  title: 'Redesign & Export',
                  description:
                    'Dark mode implementation, modern redesign and PDF export functionality',
                  icon: <Palette className='w-5 h-5' />,
                },
                {
                  phase: 'Phases 10-12',
                  title: 'Visual Builder',
                  description:
                    'Advanced visual editor development with TipTap and complete customization',
                  icon: <Edit3 className='w-5 h-5' />,
                },
                {
                  phase: 'Phases 13-15',
                  title: 'Canvas & Chat',
                  description:
                    'Interactive canvas implementation and conversational interface with side chat',
                  icon: <MessageSquare className='w-5 h-5' />,
                },
                {
                  phase: 'Phases 16-17',
                  title: 'Templates & Polish',
                  description:
                    'Professional template system and advanced formatting float menu',
                  icon: <Sparkles className='w-5 h-5' />,
                },
              ].map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='flex items-start space-x-4 p-6 bg-card border border-border/20 rounded-xl'
                >
                  <div className='flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full text-primary'>
                    {phase.icon}
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center space-x-3 mb-2'>
                      <span className='text-sm font-medium text-muted-foreground'>
                        {phase.phase}
                      </span>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                    </div>
                    <h3 className='font-semibold text-foreground text-lg'>
                      {phase.title}
                    </h3>
                    <p className='text-muted-foreground mt-1'>
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Detailed Development Story */}
        <section className='space-y-16'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8'
          >
            <h2 className='text-3xl font-bold text-foreground'>
              The Detailed Story of Each Phase
            </h2>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                Each development phase told a unique story. Let&apos;s dive deep
                into how each stage transformed our vision into reality, using
                the screenshots that document our journey.
              </p>
            </div>
          </motion.div>

          {/* Phase 0: Wireframe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                <span className='text-sm font-bold text-primary'>0</span>
              </div>
              <h3 className='text-2xl font-bold text-foreground'>
                The First Wireframe
              </h3>
            </div>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                Everything started with a simple question:{' '}
                <strong className='text-foreground'>
                  &ldquo;What would the ideal interface be for generating
                  carousels with AI?&rdquo;
                </strong>
                Using ChatGPT for brainstorming, we defined the fundamental
                structure that would guide all development.
              </p>

              <p>
                The initial wireframe established the pillars of the experience:
                input form on the left, preview on the right, and a generated
                slides section below. It was simple, but contained the essence
                of what would become a powerful tool.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
            >
              <Image
                src='/documentation/v0 - wireframe.png'
                alt='Initial interface wireframe'
                width={800}
                height={600}
                className='w-full h-auto'
              />
            </motion.div>
          </motion.div>

          {/* Phase 1: Working MVP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                <span className='text-sm font-bold text-primary'>1</span>
              </div>
              <h3 className='text-2xl font-bold text-foreground'>
                The Working MVP
              </h3>
            </div>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                After weeks of development, came the magical moment:{' '}
                <strong className='text-foreground'>the working MVP</strong>.
                The OpenRouter API integration was operational, and for the
                first time we were able to generate real carousels with AI.
              </p>

              <p>
                The interface was basic, but functional. Users could enter a
                theme, choose style and tone, and in seconds receive 5
                structured slides. It was the proof of concept that validated
                our vision - AI could really create relevant and well-structured
                content.
              </p>

              <p>
                <strong className='text-foreground'>
                  This was the moment that changed everything.
                </strong>{' '}
                Seeing the tool working gave us confidence to invest in more
                ambitious improvements.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
            >
              <Image
                src='/documentation/v1 - funcionando .png'
                alt='Working MVP with carousel generation'
                width={800}
                height={600}
                className='w-full h-auto'
              />
            </motion.div>
          </motion.div>

          {/* Phase 2: First Redesign */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                <span className='text-sm font-bold text-primary'>2</span>
              </div>
              <h3 className='text-2xl font-bold text-foreground'>
                The First Redesign - Modern Dark Mode
              </h3>
            </div>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                With the MVP working, it was time to think about user
                experience. The first redesign introduced
                <strong className='text-foreground'>
                  {' '}
                  modern dark mode
                </strong>{' '}
                and a more polished interface that reflected the professional
                nature of the tool.
              </p>

              <p>
                The new design focused on visual hierarchy, better spacing, and
                a more intuitive layout. The dark theme not only looked modern
                but also reduced eye strain during long content creation
                sessions.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
            >
              <Image
                src='/documentation/v2 - redesign.png'
                alt='First redesign with dark mode'
                width={800}
                height={600}
                className='w-full h-auto'
              />
            </motion.div>
          </motion.div>

          {/* Phase 3: Neutral Palette */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                <span className='text-sm font-bold text-primary'>3</span>
              </div>
              <h3 className='text-2xl font-bold text-foreground'>
                The Neutral Palette Revolution
              </h3>
            </div>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                User feedback was clear:{' '}
                <strong className='text-foreground'>
                  &ldquo;The colors are too flashy, they distract from the
                  content&rdquo;
                </strong>
                . They were right. The colorful design, though modern, was
                competing with the content that should be the protagonist.
              </p>

              <p>
                <strong className='text-foreground'>
                  The solution was radical: complete color removal
                </strong>
                . We replaced all colorful gradients with a 100% neutral palette
                - black, gray and white. The result was an elegant, discreet
                interface focused exclusively on content.
              </p>

              <p>
                This change was a milestone in the tool&apos;s design.{' '}
                <strong className='text-foreground'>
                  Simplicity became our strength
                </strong>
                , and users could now focus entirely on carousel content without
                visual distractions.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
            >
              <Image
                src='/documentation/v3 - colors.png'
                alt='Interface with neutral palette focused on content'
                width={800}
                height={600}
                className='w-full h-auto'
              />
            </motion.div>
          </motion.div>

          {/* Phase 4: PDF Export */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                <span className='text-sm font-bold text-primary'>4</span>
              </div>
              <h3 className='text-2xl font-bold text-foreground'>
                PDF Export - The Complete Flow
              </h3>
            </div>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                <strong className='text-foreground'>
                  A critical problem arose:
                </strong>{' '}
                users could generate carousels, but didn&apos;t know how to
                publish them on LinkedIn. The tool was incomplete - it was
                missing the final link in the chain.
              </p>

              <p>
                The solution was{' '}
                <strong className='text-foreground'>
                  PDF export functionality
                </strong>
                . Now users could download their carousels as high-quality PDFs,
                ready to be shared on social media. This feature completed the
                user journey and made the tool truly useful.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
            >
              <Image
                src='/documentation/v4 - builder.png'
                alt='PDF export functionality implementation'
                width={800}
                height={600}
                className='w-full h-auto'
              />
            </motion.div>
          </motion.div>

          {/* Phase 5: Visual Builder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                <span className='text-sm font-bold text-primary'>5</span>
              </div>
              <h3 className='text-2xl font-bold text-foreground'>
                The Visual Builder Revolution
              </h3>
            </div>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                Until now, users could only generate content with AI. But what
                if they wanted to{' '}
                <strong className='text-foreground'>edit and customize</strong>
                each slide? The visual builder was born from this need.
              </p>

              <p>
                We implemented{' '}
                <strong className='text-foreground'>TipTap editor</strong> - a
                powerful rich text editor that allows users to format text, add
                images, and customize every element of their carousels. Now the
                tool offered both AI generation and manual editing capabilities.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
            >
              <Image
                src='/documentation/v5 - side bar builder.png'
                alt='Visual builder with TipTap editor'
                width={800}
                height={600}
                className='w-full h-auto'
              />
            </motion.div>
          </motion.div>

          {/* Phase 6: Interactive Canvas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                <span className='text-sm font-bold text-primary'>6</span>
              </div>
              <h3 className='text-2xl font-bold text-foreground'>
                Interactive Canvas - The Game Changer
              </h3>
            </div>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                The visual builder was good, but users wanted more{' '}
                <strong className='text-foreground'>
                  interactivity and control
                </strong>
                . We developed an interactive canvas where users could drag,
                resize, and position elements freely.
              </p>

              <p>
                This feature transformed the tool from a simple generator into a{' '}
                <strong className='text-foreground'>
                  professional design platform
                </strong>
                . Users now had complete control over layout, typography, and
                visual hierarchy.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
            >
              <Image
                src='/documentation/v6.png'
                alt='Interactive canvas with drag and drop functionality'
                width={800}
                height={600}
                className='w-full h-auto'
              />
            </motion.div>
          </motion.div>

          {/* Phase 7: Conversational Interface */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                <span className='text-sm font-bold text-primary'>7</span>
              </div>
              <h3 className='text-2xl font-bold text-foreground'>
                Conversational Interface - AI Chat
              </h3>
            </div>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                The next evolution was adding a{' '}
                <strong className='text-foreground'>
                  conversational interface
                </strong>
                . Instead of just filling out forms, users could now chat with
                AI to generate and modify content naturally.
              </p>

              <p>
                The side chat feature maintains context and history, allowing
                for more{' '}
                <strong className='text-foreground'>
                  natural and efficient
                </strong>
                interaction with the AI. Users can ask for changes, request new
                content, and get suggestions in real-time.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
            >
              <Image
                src='/documentation/v7.png'
                alt='Conversational interface with AI chat'
                width={800}
                height={600}
                className='w-full h-auto'
              />
            </motion.div>
          </motion.div>

          {/* Phase 8: Professional Templates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                <span className='text-sm font-bold text-primary'>8</span>
              </div>
              <h3 className='text-2xl font-bold text-foreground'>
                Professional Templates System
              </h3>
            </div>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                To make the tool even more powerful, we developed a{' '}
                <strong className='text-foreground'>
                  professional template system
                </strong>
                . Users can now choose from 9 specialized templates designed for
                different niches and content types.
              </p>

              <p>
                Each template comes with{' '}
                <strong className='text-foreground'>
                  optimized content structure
                </strong>{' '}
                and visual design that follows best practices for social media
                engagement. This feature significantly reduces creation time
                while maintaining high quality standards.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
            >
              <Image
                src='/documentation/v8.png'
                alt='Professional templates system'
                width={800}
                height={600}
                className='w-full h-auto'
              />
            </motion.div>
          </motion.div>

          {/* Phase 9: Advanced Formatting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                <span className='text-sm font-bold text-primary'>9</span>
              </div>
              <h3 className='text-2xl font-bold text-foreground'>
                Advanced Formatting - Float Menu
              </h3>
            </div>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                The final touch was implementing an{' '}
                <strong className='text-foreground'>
                  advanced formatting float menu
                </strong>
                . This feature provides quick access to text formatting options,
                making the editing experience more intuitive and efficient.
              </p>

              <p>
                Users can now easily{' '}
                <strong className='text-foreground'>
                  format text, change fonts, adjust sizes
                </strong>
                , and apply various styling options without navigating through
                complex menus. This completes the professional editing
                experience.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
            >
              <Image
                src='/documentation/v9.png'
                alt='Advanced formatting float menu'
                width={800}
                height={600}
                className='w-full h-auto'
              />
            </motion.div>
          </motion.div>

          {/* Final Result */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                <span className='text-sm font-bold text-primary'>✓</span>
              </div>
              <h3 className='text-2xl font-bold text-foreground'>
                The Final Result
              </h3>
            </div>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                After 17 phases of development, we achieved our goal: a{' '}
                <strong className='text-foreground'>
                  professional AI-powered carousel creation tool
                </strong>
                that democratizes content creation. The tool now offers:
              </p>

              <ul className='list-disc list-inside space-y-2 text-muted-foreground'>
                <li>AI-powered content generation with OpenRouter API</li>
                <li>Professional templates for different niches</li>
                <li>Advanced visual editor with TipTap</li>
                <li>Interactive canvas with drag-and-drop</li>
                <li>Conversational interface with AI chat</li>
                <li>PDF export functionality</li>
                <li>Modern, neutral design focused on content</li>
              </ul>

              <p>
                <strong className='text-foreground'>
                  The result is a tool that reduces creation time by 90%
                </strong>{' '}
                while maintaining professional quality standards. Content
                creators can now focus on their ideas rather than technical
                design challenges.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
            >
              <Image
                src='/documentation/v10.gif'
                alt='Final result - complete carousel creation tool'
                width={800}
                height={600}
                className='w-full h-auto'
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Technical Implementation */}
        <section className='space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <h2 className='text-3xl font-bold text-foreground'>
              Technical Implementation
            </h2>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                The Post & Carousel Generator is built with modern web
                technologies, ensuring performance, scalability, and excellent
                user experience.
              </p>
            </div>

            {/* Tech Stack */}
            <div className='grid md:grid-cols-2 gap-6'>
              {[
                {
                  icon: <Code className='w-6 h-6' />,
                  title: 'Frontend',
                  description: 'Next.js 14, React 18, TypeScript, Tailwind CSS',
                },
                {
                  icon: <Database className='w-6 h-6' />,
                  title: 'AI Integration',
                  description:
                    'OpenRouter API, GPT-4, Claude, and other AI models',
                },
                {
                  icon: <Edit3 className='w-6 h-6' />,
                  title: 'Editor',
                  description: 'TipTap rich text editor with custom extensions',
                },
                {
                  icon: <Palette className='w-6 h-6' />,
                  title: 'Design System',
                  description: 'Shadcn/ui components with custom theming',
                },
              ].map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='bg-card border border-border/20 rounded-xl p-6 space-y-4'
                >
                  <div className='text-primary'>{tech.icon}</div>
                  <div>
                    <h3 className='font-semibold text-foreground text-lg'>
                      {tech.title}
                    </h3>
                    <p className='text-muted-foreground mt-2'>
                      {tech.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Key Features */}
        <section className='space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <h2 className='text-3xl font-bold text-foreground'>Key Features</h2>

            <div className='grid md:grid-cols-2 gap-6'>
              {[
                {
                  icon: <Brain className='w-6 h-6' />,
                  title: 'AI Content Generation',
                  description:
                    'Generate professional carousel content in seconds with advanced AI models',
                },
                {
                  icon: <Palette className='w-6 h-6' />,
                  title: 'Professional Templates',
                  description:
                    '9 specialized templates optimized for different content types and niches',
                },
                {
                  icon: <Edit3 className='w-6 h-6' />,
                  title: 'Visual Editor',
                  description:
                    'Advanced TipTap editor with rich formatting and customization options',
                },
                {
                  icon: <MessageSquare className='w-6 h-6' />,
                  title: 'AI Chat Interface',
                  description:
                    'Natural conversation with AI for content generation and modifications',
                },
                {
                  icon: <Layout className='w-6 h-6' />,
                  title: 'Interactive Canvas',
                  description:
                    'Drag-and-drop interface for precise element positioning and layout',
                },
                {
                  icon: <Download className='w-6 h-6' />,
                  title: 'PDF Export',
                  description:
                    'High-quality PDF export ready for social media sharing',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='bg-card border border-border/20 rounded-xl p-6 space-y-4'
                >
                  <div className='text-primary'>{feature.icon}</div>
                  <div>
                    <h3 className='font-semibold text-foreground text-lg'>
                      {feature.title}
                    </h3>
                    <p className='text-muted-foreground mt-2'>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Results & Impact */}
        <section className='space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <h2 className='text-3xl font-bold text-foreground'>
              Results & Impact
            </h2>

            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                The Post & Carousel Generator has transformed the way content
                creators work, providing significant improvements in efficiency
                and quality.
              </p>
            </div>

            {/* Impact Metrics */}
            <div className='grid md:grid-cols-3 gap-6'>
              {[
                {
                  icon: <Clock className='w-6 h-6' />,
                  title: '90% Time Reduction',
                  description: 'From hours to minutes for carousel creation',
                },
                {
                  icon: <TrendingUp className='w-6 h-6' />,
                  title: 'Professional Quality',
                  description: 'Consistent, high-quality results for all users',
                },
                {
                  icon: <Users className='w-6 h-6' />,
                  title: 'Democratized Creation',
                  description: 'Accessible to creators of all skill levels',
                },
              ].map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='bg-card border border-border/20 rounded-xl p-6 text-center space-y-4'
                >
                  <div className='text-primary mx-auto'>{metric.icon}</div>
                  <div>
                    <h3 className='font-semibold text-foreground text-lg'>
                      {metric.title}
                    </h3>
                    <p className='text-muted-foreground mt-2'>
                      {metric.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Call to Action */}
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
                creation - where AI and human creativity work together to
                produce amazing results.
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
      </main>
    </>
  );
}
