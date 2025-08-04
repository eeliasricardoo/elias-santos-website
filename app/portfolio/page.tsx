'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { PageAnalytics } from '@/components/analytics/page-analytics';
import { PageSEO } from '@/components/seo/PageSEO';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import {
  ArrowRight,
  Brain,
  Palette,
  Code,
  TrendingUp,
  Users,
  CheckCircle,
  Github,
  ExternalLink,
} from 'lucide-react';

const projects = [
  {
    id: 'carousel-builder',
    title: 'Post & Carousel Generator',
    description:
      'AI tool that revolutionizes carousel creation for social media, reducing creation time by 90%.',
    category: 'UX/UI Design',
    technologies: ['Next.js', 'React', 'OpenRouter API', 'TipTap'],
    image: '/portfolios/carousel-builder/demo.mp4',
    link: '/portfolio/carousel-builder',
    stats: {
      timeReduction: '90%',
      phases: '17',
      templates: '9',
    },
    featured: true,
  },
  {
    id: 'ranking',
    title: 'Ranking App',
    description:
      'Ranking application focused on gamification and user experience. Complete UX research with personas and user journey.',
    category: 'UX Research',
    technologies: ['React Native', 'TypeScript', 'UX Research', 'Figma'],
    image: '/portfolios/ranking/ranking.png',
    link: '/portfolio/ranking',
    stats: {
      research: 'Complete',
      personas: '3',
      testing: 'Yes',
    },
  },
  {
    id: 'ventuschat',
    title: 'ChatAI',
    description:
      'Personalized AI tool developed in one week. Cheaper and more customizable solution for AI chat.',
    category: 'Web Development',
    technologies: ['Next.js', 'React', 'OpenAI API', 'TypeScript'],
    image: '/portfolios/ventuschat/demo.mp4',
    link: '/portfolio/ventuschat',
    stats: {
      development: '1 week',
      cost: 'Reduced',
      features: '6',
    },
  },
];

const categories = [
  { name: 'UX/UI Design', icon: <Palette className='w-4 h-4' />, count: 2 },
  { name: 'Web Development', icon: <Code className='w-4 h-4' />, count: 2 },
  { name: 'UX Research', icon: <Users className='w-4 h-4' />, count: 1 },
  { name: 'AI & Automation', icon: <Brain className='w-4 h-4' />, count: 2 },
];

export default function PortfolioPage() {
  return (
    <>
      {/* SEO */}
      <PageSEO
        title='Portfolio - Projects and Cases'
        description='Discover Elias Santos projects in UX/UI Design and web development. Complete cases with UX research, app development and AI tools.'
        keywords={[
          'Portfolio',
          'Projects',
          'UX Design',
          'UI Design',
          'Web Development',
          'Case Study',
          'React',
          'Next.js',
          'TypeScript',
          'AI',
          'UX Research',
        ]}
        url='/portfolio'
        type='website'
        author='Elias Santos'
        section='Portfolio'
        tags={['Portfolio', 'UX Design', 'Web Development', 'Case Study']}
      />

      <main className='max-w-6xl mx-auto py-12 px-4 space-y-16 pt-24'>
        {/* Analytics */}
        <PageAnalytics
          pageName='Portfolio'
          pagePath='/portfolio'
          customProperties={{
            section: 'portfolio',
            type: 'overview',
          }}
        />

        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Portfolio', href: '/portfolio' }]} />

        {/* Hero Section */}
        <section className='text-center space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <Badge className='bg-muted/50 text-muted-foreground border-border/50 px-4 py-2 text-sm font-medium'>
              Professional Portfolio
            </Badge>
            <h1 className='text-5xl md:text-6xl font-bold text-foreground tracking-tight'>
              Projects & Cases
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Discover my projects in UX/UI Design and web development. Complete
              cases focused on user experience and innovative solutions.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'
          >
            {[
              {
                icon: <Code className='w-6 h-6' />,
                label: 'Projects',
                value: '3',
              },
              {
                icon: <Palette className='w-6 h-6' />,
                label: 'Categories',
                value: '4',
              },
              {
                icon: <TrendingUp className='w-6 h-6' />,
                label: 'Technologies',
                value: '8+',
              },
              {
                icon: <CheckCircle className='w-6 h-6' />,
                label: 'Cases',
                value: '100%',
              },
            ].map(stat => (
              <div key={stat.label} className='text-center space-y-2'>
                <div className='text-primary mx-auto'>{stat.icon}</div>
                <div className='text-2xl font-bold text-foreground'>
                  {stat.value}
                </div>
                <div className='text-sm text-muted-foreground'>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Categories */}
        <section className='space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center space-y-4'
          >
            <h2 className='text-3xl font-bold text-foreground'>Categories</h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Projects organized by area of specialization and technology
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className='text-center hover:shadow-lg transition-shadow cursor-pointer'>
                  <CardHeader className='pb-3'>
                    <div className='text-primary mx-auto mb-2'>
                      {category.icon}
                    </div>
                    <CardTitle className='text-lg'>{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-2xl font-bold text-foreground'>
                      {category.count}
                    </p>
                    <p className='text-sm text-muted-foreground'>projects</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Project */}
        <section className='space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center space-y-4'
          >
            <Badge className='bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium'>
              Featured Project
            </Badge>
            <h2 className='text-3xl font-bold text-foreground'>
              Post & Carousel Generator
            </h2>
          </motion.div>

          {projects
            .filter(p => p.featured)
            .map(project => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='relative'
              >
                <Card className='overflow-hidden hover:shadow-xl transition-shadow'>
                  <div className='grid lg:grid-cols-2 gap-8'>
                    <div className='p-8 space-y-6'>
                      <div className='space-y-4'>
                        <Badge className='bg-muted/50 text-muted-foreground border-border/50'>
                          {project.category}
                        </Badge>
                        <h3 className='text-2xl font-bold text-foreground'>
                          {project.title}
                        </h3>
                        <p className='text-muted-foreground leading-relaxed'>
                          {project.description}
                        </p>
                      </div>

                      <div className='space-y-4'>
                        <div>
                          <h4 className='font-semibold text-foreground mb-2'>
                            Technologies
                          </h4>
                          <div className='flex flex-wrap gap-2'>
                            {project.technologies.map(tech => (
                              <Badge
                                key={tech}
                                variant='outline'
                                className='text-xs'
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className='font-semibold text-foreground mb-2'>
                            Results
                          </h4>
                          <div className='grid grid-cols-3 gap-4'>
                            {Object.entries(project.stats).map(
                              ([key, value]) => (
                                <div key={key} className='text-center'>
                                  <div className='text-lg font-bold text-foreground'>
                                    {value}
                                  </div>
                                  <div className='text-xs text-muted-foreground capitalize'>
                                    {key}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>

                      <Link href={project.link}>
                        <Button className='w-full'>
                          View Full Case
                          <ArrowRight className='w-4 h-4 ml-2' />
                        </Button>
                      </Link>
                    </div>

                    <div className='relative lg:h-full min-h-[300px]'>
                      <div className='absolute inset-0 rounded-r-lg overflow-hidden'>
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className='w-full h-full object-cover'
                        >
                          <source src={project.image} type='video/mp4' />
                        </video>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
        </section>

        {/* All Projects */}
        <section className='space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center space-y-4'
          >
            <h2 className='text-3xl font-bold text-foreground'>
              All Projects
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Explore all cases and projects developed
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className='h-full hover:shadow-lg transition-shadow cursor-pointer group'>
                  <div className='relative h-48 overflow-hidden rounded-t-lg'>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                    >
                      <source src={project.image} type='video/mp4' />
                    </video>
                  </div>

                  <CardHeader className='space-y-3'>
                    <div className='flex items-center justify-between'>
                      <Badge className='bg-muted/50 text-muted-foreground border-border/50 text-xs'>
                        {project.category}
                      </Badge>
                      <ExternalLink className='w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors' />
                    </div>
                    <CardTitle className='text-xl'>{project.title}</CardTitle>
                    <CardDescription className='line-clamp-3'>
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className='space-y-4'>
                    <div>
                      <h4 className='font-semibold text-foreground text-sm mb-2'>
                        Technologies
                      </h4>
                      <div className='flex flex-wrap gap-1'>
                        {project.technologies.slice(0, 3).map(tech => (
                          <Badge
                            key={tech}
                            variant='outline'
                            className='text-xs'
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant='outline' className='text-xs'>
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Link href={project.link}>
                      <Button variant='outline' className='w-full'>
                        View Details
                        <ArrowRight className='w-4 h-4 ml-2' />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Interested in Collaborating?
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Let&apos;s create something amazing together! Get in touch to discuss
              your project.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/'>
                <Button size='lg' className='bg-primary hover:bg-primary/90'>
                  Back to Home
                </Button>
              </Link>
              <Button size='lg' variant='outline'>
                <Github className='w-4 h-4 mr-2' />
                View GitHub
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
