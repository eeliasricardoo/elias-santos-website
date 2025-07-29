'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Github,
  Brain,
  Palette,
  MessageSquare,
  Code,
  Target,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Rocket,
  Eye,
  Mail,
  Database,
  Zap,
  Shield,
  Globe,
  Cpu,
} from 'lucide-react';
import Link from 'next/link';

export default function VentusChatPage() {
  return (
    <main className='max-w-4xl mx-auto py-12 px-4 space-y-20 pt-24'>
      {/* Header */}
      <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-8'>
        <div className='container flex h-14 max-w-screen-2xl items-center'>
          <Link href='/' className='flex items-center space-x-2'>
            <ArrowLeft className='h-4 w-4' />
            <span className='font-bold'>Back to Portfolio</span>
          </Link>
        </div>
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

      {/* Introduction */}
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
              During a career transition moment, I faced a challenge that drove
              my creativity: the need for cutting-edge AI tools for my personal
              projects, but without the prohibitive costs of subscriptions.
              Market solutions were a paradox: free ones were limited, and paid
              ones were a financial drain.
            </p>

            <p>
              It was in this scenario that ChatAI was born, not as an academic
              exercise, but as a pragmatic solution to a real and immediate
              problem: <strong className='text-foreground'>mine</strong>.
            </p>

            <p>
              <strong className='text-foreground'>The goal was clear:</strong>{' '}
              design and build, in one week, a personal AI ecosystem that was
              radically cheaper, fully customizable, and superior to the
              workflow offered by existing tools.
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
              <div className='text-3xl font-bold text-foreground'>1</div>
              <div className='text-sm text-muted-foreground'>
                Week Development
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
            >
              <div className='text-3xl font-bold text-foreground'>75%</div>
              <div className='text-sm text-muted-foreground'>
                Cost Reduction
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
            >
              <div className='text-3xl font-bold text-foreground'>20%</div>
              <div className='text-sm text-muted-foreground'>
                Efficiency Increase
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
            >
              <div className='text-3xl font-bold text-foreground'>3</div>
              <div className='text-sm text-muted-foreground'>
                AI Models Integrated
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* My Process */}
      <section className='space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h2 className='text-3xl font-bold text-foreground'>
            My Process: A Sprint in Double Diamond
          </h2>

          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              To structure my work and ensure I was not only building the right
              product, but also building the product the right way, I adopted
              the principles of the{' '}
              <strong className='text-foreground'>Double Diamond</strong> design
              model. I adapted its phases to fit an intense one-week sprint,
              focusing on converging and diverging rapidly.
            </p>
          </div>

          {/* Double Diamond Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80 p-8'
          >
            <div className='text-center space-y-4'>
              <h3 className='text-xl font-semibold text-foreground'>
                Double Diamond Process
              </h3>
              <div className='flex items-center justify-center space-x-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2'>
                    <Lightbulb className='w-8 h-8 text-primary' />
                  </div>
                  <p className='text-sm font-medium text-foreground'>
                    Discover
                  </p>
                </div>
                <div className='w-8 h-0.5 bg-primary'></div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2'>
                    <Target className='w-8 h-8 text-primary' />
                  </div>
                  <p className='text-sm font-medium text-foreground'>Define</p>
                </div>
                <div className='w-8 h-0.5 bg-primary'></div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2'>
                    <Rocket className='w-8 h-8 text-primary' />
                  </div>
                  <p className='text-sm font-medium text-foreground'>Develop</p>
                </div>
                <div className='w-8 h-0.5 bg-primary'></div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2'>
                    <CheckCircle className='w-8 h-8 text-primary' />
                  </div>
                  <p className='text-sm font-medium text-foreground'>Deliver</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Phase 1: Discovery and Definition */}
      <section className='space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h2 className='text-3xl font-bold text-foreground'>
            Phase 1: Discovery and Definition
          </h2>

          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              <em>
                This phase was about immersion. I needed to deeply understand
                the competitive landscape and clearly define the problem to be
                solved.
              </em>
            </p>
          </div>

          {/* Competitive Benchmarking */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-foreground'>
              Competitive Benchmarking
            </h3>

            <div className='space-y-4'>
              <p className='text-lg text-muted-foreground'>
                I started with a critical analysis of the main tools I used:
                ChatGPT, Claude, and Grok. The goal was to identify their
                strengths, but more importantly, their weaknesses and the
                friction in a developer&apos;s workflow.
              </p>

              <div className='overflow-x-auto'>
                <table className='w-full border border-border/20 rounded-lg overflow-hidden'>
                  <thead className='bg-card/50'>
                    <tr>
                      <th className='p-4 text-left font-semibold text-foreground'>
                        Tool
                      </th>
                      <th className='p-4 text-left font-semibold text-foreground'>
                        Strengths
                      </th>
                      <th className='p-4 text-left font-semibold text-foreground'>
                        Weaknesses (My Opportunity)
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border/20'>
                    <tr>
                      <td className='p-4 font-medium text-foreground'>
                        ChatGPT (Plus)
                      </td>
                      <td className='p-4 text-muted-foreground'>
                        Model quality, plugin ecosystem
                      </td>
                      <td className='p-4 text-muted-foreground'>
                        Fixed cost ($20/month), slow model switching, UI with
                        &quot;noise&quot;
                      </td>
                    </tr>
                    <tr>
                      <td className='p-4 font-medium text-foreground'>
                        Claude
                      </td>
                      <td className='p-4 text-muted-foreground'>
                        Excellent for long context, natural writing
                      </td>
                      <td className='p-4 text-muted-foreground'>
                        Free plan limitations, less focused on multimodality
                      </td>
                    </tr>
                    <tr>
                      <td className='p-4 font-medium text-foreground'>Grok</td>
                      <td className='p-4 text-muted-foreground'>
                        Real-time data access
                      </td>
                      <td className='p-4 text-muted-foreground'>
                        Locked to X ecosystem, less versatile for code
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='bg-primary/5 border border-primary/20 rounded-lg p-6'>
                <h4 className='font-semibold text-foreground mb-2'>
                  Key Insight:
                </h4>
                <p className='text-muted-foreground'>
                  No tool offered granular control over models or was optimized
                  for a multimodal workflow (text, image, code) without imposing
                  a subscription cost or complex interface.
                </p>
              </div>
            </div>
          </div>

          {/* Persona */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-foreground'>
              Persona: Me as User
            </h3>

            <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
              <p className='text-lg text-muted-foreground'>
                To maintain focus, I synthesized my own needs into the
                &quot;Deva&quot; persona. This forced me to be explicit about
                objectives and frustrations, avoiding building unnecessary
                features.
              </p>

              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <h4 className='font-semibold text-foreground flex items-center'>
                    <Target className='w-4 h-4 mr-2' />
                    Main Objective
                  </h4>
                  <p className='text-muted-foreground'>
                    Accelerate the development and experimentation cycle without
                    worrying about costs or platform limitations.
                  </p>
                </div>
                <div className='space-y-2'>
                  <h4 className='font-semibold text-foreground flex items-center'>
                    <Eye className='w-4 h-4 mr-2' />
                    Biggest Frustration
                  </h4>
                  <p className='text-muted-foreground'>
                    Loss of time and context when having to switch between
                    different tools for different tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Definition */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-foreground'>
              Problem Definition
            </h3>

            <div className='bg-primary/5 border border-primary/20 rounded-lg p-6'>
              <blockquote className='text-lg text-foreground italic'>
                &quot;How could I create an AI interface that centralizes
                interaction with text, image, and video models, operating on a
                variable cost model (pay-per-use) with a minimalist user
                experience focused on a developer&apos;s workflow?&quot;
              </blockquote>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Phase 2: Development and Delivery */}
      <section className='space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h2 className='text-3xl font-bold text-foreground'>
            Phase 2: Development and Delivery
          </h2>

          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              <em>
                With a clearly defined problem, the second half of the diamond
                focused on exploring solutions, prototyping, and building the
                best one.
              </em>
            </p>
          </div>

          {/* Solution Architecture */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-foreground'>
              Solution Architecture and Engineering Pillars
            </h3>

            <div className='space-y-6'>
              <div className='bg-card border border-border/20 rounded-xl p-6'>
                <h4 className='font-semibold text-foreground mb-4 flex items-center'>
                  <Zap className='w-5 h-5 mr-2' />
                  The Acceleration Stack
                </h4>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <h5 className='font-medium text-foreground'>
                      Next.js (App Router)
                    </h5>
                    <p className='text-sm text-muted-foreground'>
                      Chosen for its single-component approach that blends
                      frontend and backend. The trade-off of having less
                      separation of concerns was compensated by unbeatable
                      development speed.
                    </p>
                  </div>
                  <div className='space-y-2'>
                    <h5 className='font-medium text-foreground'>Supabase</h5>
                    <p className='text-sm text-muted-foreground'>
                      Chosen as a &quot;backend-in-a-box&quot;. The trade-off of
                      giving up granular infrastructure control was a conscious
                      decision to enable delivery in one week.
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-card border border-border/20 rounded-xl p-6'>
                <h4 className='font-semibold text-foreground mb-4 flex items-center'>
                  <Shield className='w-5 h-5 mr-2' />
                  My Engineering Pillars
                </h4>

                <div className='space-y-4'>
                  <div className='space-y-2'>
                    <h5 className='font-medium text-foreground flex items-center'>
                      <Code className='w-4 h-4 mr-2' />
                      Clean Code and Design System
                    </h5>
                    <p className='text-sm text-muted-foreground'>
                      Organization was fundamental. From the start, I structured
                      the project modularly and defined a simple but rigorous
                      Design System based on Shadcn/UI and TailwindCSS.
                    </p>
                  </div>
                  <div className='space-y-2'>
                    <h5 className='font-medium text-foreground flex items-center'>
                      <Zap className='w-4 h-4 mr-2' />
                      Performance Efficiency
                    </h5>
                    <p className='text-sm text-muted-foreground'>
                      Performance wasn&apos;t a late optimization, but a design
                      requirement. This manifested in the choice of React.memo,
                      virtual scrolling implementation, and component loading
                      optimization.
                    </p>
                  </div>
                  <div className='space-y-2'>
                    <h5 className='font-medium text-foreground flex items-center'>
                      <Globe className='w-4 h-4 mr-2' />
                      Scalability
                    </h5>
                    <p className='text-sm text-muted-foreground'>
                      Architecture choices (Next.js with serverless functions,
                      Supabase as managed database) were made thinking of a
                      solution that could scale without massive reengineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Development Evolution */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-foreground'>
              The Delivery: One Week Sprint
            </h3>

            <div className='space-y-4'>
              <p className='text-lg text-muted-foreground'>
                With design and architecture defined, I dove into construction,
                following the evolution I mapped:
              </p>

              <div className='grid md:grid-cols-2 gap-6'>
                {[
                  {
                    step: '1',
                    title: 'Chat Core',
                    description: 'LLM API integration',
                  },
                  {
                    step: '2',
                    title: 'Screenshot Analysis',
                    description: 'Upload and computer vision logic',
                  },
                  {
                    step: '3',
                    title: 'Multimodal Generation',
                    description:
                      'Replicate integration and complex model switching UX',
                  },
                  {
                    step: '4',
                    title: 'Persistence & Security',
                    description:
                      'Authentication and database implementation with Supabase',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='bg-card border border-border/20 rounded-xl p-6 space-y-4'
                  >
                    <div className='flex items-center space-x-3'>
                      <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                        <span className='text-sm font-bold text-primary'>
                          {item.step}
                        </span>
                      </div>
                      <h4 className='font-semibold text-foreground'>
                        {item.title}
                      </h4>
                    </div>
                    <p className='text-muted-foreground'>{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Results and Reflections */}
      <section className='space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h2 className='text-3xl font-bold text-foreground'>
            Results and Reflections
          </h2>

          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              The final result is a tool that became the center of my
              development universe. ChatAI is not just a product case; it&apos;s
              proof of my work philosophy.
            </p>
          </div>

          {/* Quantitative Impact */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-foreground'>
              Quantitative Impact
            </h3>

            <div className='grid md:grid-cols-2 gap-6'>
              <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
                <div className='flex items-center space-x-3'>
                  <TrendingUp className='w-6 h-6 text-green-500' />
                  <h4 className='font-semibold text-foreground'>
                    Cost Reduction &gt; 75%
                  </h4>
                </div>
                <p className='text-muted-foreground'>
                  My monthly AI costs dropped from ~$20 to ~$2-5.
                </p>
              </div>
              <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
                <div className='flex items-center space-x-3'>
                  <Zap className='w-6 h-6 text-blue-500' />
                  <h4 className='font-semibold text-foreground'>
                    Efficiency Increase ~20%
                  </h4>
                </div>
                <p className='text-muted-foreground'>
                  Time to debug problems using screenshots was significantly
                  reduced.
                </p>
              </div>
            </div>
          </div>

          {/* Key Learnings */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-foreground'>
              Key Learnings
            </h3>

            <div className='space-y-4'>
              <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
                <h4 className='font-semibold text-foreground flex items-center'>
                  <Lightbulb className='w-5 h-5 mr-2' />
                  Structured Design is Speed
                </h4>
                <p className='text-muted-foreground'>
                  Even informal application of a process like Double Diamond is
                  a force multiplier. Investing time in Discovery and Definition
                  saved me from building wrong features and allowed the
                  Development phase to be extremely focused.
                </p>
              </div>

              <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
                <h4 className='font-semibold text-foreground flex items-center'>
                  <Code className='w-5 h-5 mr-2' />
                  Clean Code as Accelerator
                </h4>
                <p className='text-muted-foreground'>
                  The obsession with clean code and organized architecture from
                  Day 1 proved to be an accelerator, not a brake. It was this
                  solid foundation that allowed me to add complex features like
                  video generation mid-week without breaking the system or
                  needing major refactoring.
                </p>
              </div>
            </div>
          </div>
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
              ChatAI is built with modern web technologies, ensuring
              performance, scalability, and excellent user experience.
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
                title: 'Backend',
                description: 'Supabase, PostgreSQL, Real-time subscriptions',
              },
              {
                icon: <Brain className='w-6 h-6' />,
                title: 'AI Integration',
                description: 'OpenAI API, Replicate, Computer Vision',
              },
              {
                icon: <Shield className='w-6 h-6' />,
                title: 'Authentication',
                description: 'Supabase Auth, Row Level Security',
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
                icon: <MessageSquare className='w-6 h-6' />,
                title: 'Unified Chat Interface',
                description:
                  'Single interface for text, image, and video AI models',
              },
              {
                icon: <Eye className='w-6 h-6' />,
                title: 'Screenshot Analysis',
                description:
                  'Upload screenshots for AI-powered debugging and analysis',
              },
              {
                icon: <Palette className='w-6 h-6' />,
                title: 'Multimodal Generation',
                description:
                  'Generate images and videos directly in chat conversations',
              },
              {
                icon: <Cpu className='w-6 h-6' />,
                title: 'Model Switching',
                description: 'Seamless switching between different AI models',
              },
              {
                icon: <Database className='w-6 h-6' />,
                title: 'Conversation History',
                description:
                  'Persistent chat history with real-time synchronization',
              },
              {
                icon: <Shield className='w-6 h-6' />,
                title: 'Pay-per-use Model',
                description: 'Only pay for what you use, no subscription fees',
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

      {/* Call to Action */}
      <section className='text-center space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h2 className='text-3xl font-bold text-foreground'>
            Ready to Build Your Own AI Tool?
          </h2>

          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              ChatAI represents the future of personal AI tools - where
              customization, cost-efficiency, and developer experience come
              together.
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
  );
}
