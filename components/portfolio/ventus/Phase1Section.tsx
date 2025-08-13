'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ImageLightbox } from '@/components/ui/image-lightbox';

export function Phase1Section() {
  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-8'
      >
        <h2 className='text-3xl font-bold text-foreground text-center'>
          Phase 1: Discovery & Initial Design
        </h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p className='text-center italic'>
            This phase was about immersion. I needed to deeply understand the
            competitive landscape and clearly define the problem to be solved.
          </p>
        </div>

        <div className='space-y-16'>
          {/* Initial Concept */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-4'
          >
            <h3 className='text-2xl font-semibold text-foreground text-center'>
              Initial Concept
            </h3>
            <div className='space-y-4 text-center text-muted-foreground'>
              <p>
                First attempt at solving the problem - basic chat interface with
                OpenAI integration
              </p>
            </div>
            <div className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
              <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
                <ImageLightbox
                  src='/portfolios/ventus/v1.png'
                  alt='Initial Concept'
                  width={1200}
                  height={800}
                  className='w-full object-contain cursor-pointer'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
                  quality={85}
                />
              </div>
            </div>
          </motion.div>

          {/* Discovery & Definition Phase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8'
          >
            <h3 className='text-2xl font-semibold text-foreground text-center'>
              Competitive Analysis & Problem Definition
            </h3>

            <div className='space-y-6'>
              <p className='text-lg text-muted-foreground text-center'>
                Critical analysis of ChatGPT, Claude, and Grok revealed key
                opportunities: no tool offered granular model control or
                optimized multimodal workflow without subscription costs.
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
                        Weaknesses (Opportunity)
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
                        Fixed cost ($20/month), slow model switching, UI noise
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
          </motion.div>

          {/* Enhanced UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-4'
          >
            <h3 className='text-2xl font-semibold text-foreground text-center'>
              Enhanced UI (After Research)
            </h3>
            <div className='space-y-4 text-center text-muted-foreground'>
              <p>
                Applied insights from competitive analysis - improved layout and
                user flow
              </p>
            </div>
            <div className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
              <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
                <ImageLightbox
                  src='/portfolios/ventus/v2.png'
                  alt='Enhanced UI (After Research)'
                  width={1200}
                  height={800}
                  className='w-full object-contain cursor-pointer'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
                  quality={85}
                />
              </div>
            </div>
          </motion.div>

          {/* Refined Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-4'
          >
            <h3 className='text-2xl font-semibold text-foreground text-center'>
              Refined Experience
            </h3>
            <div className='space-y-4 text-center text-muted-foreground'>
              <p>
                Further refinement based on initial user testing and feedback
              </p>
            </div>
            <div className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
              <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
                <ImageLightbox
                  src='/portfolios/ventus/v2.1.png'
                  alt='Refined Experience'
                  width={1200}
                  height={800}
                  className='w-full object-contain cursor-pointer'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
                  quality={85}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
