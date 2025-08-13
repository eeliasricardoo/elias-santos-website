'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Eye,
  Target,
  Code,
  Rocket,
  Lightbulb,
  Zap,
  CheckCircle,
} from 'lucide-react';

export function DoubleDiamondSection() {
  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-8'
      >
        <h2 className='text-3xl font-bold text-foreground text-center'>
          My Process: A Sprint in Double Diamond
        </h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p className='text-center italic'>
            To structure my work and ensure I was not only building the right
            product, but also building the product the right way, I adopted the
            principles of the Double Diamond design model. I adapted its phases
            to fit an intensive one-week sprint, focusing on converging and
            diverging rapidly.
          </p>
        </div>

        {/* Double Diamond Visualization */}
        <div className='relative max-w-4xl mx-auto'>
          <div className='grid grid-cols-4 gap-4 items-center'>
            {/* Discover */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center space-y-4'
            >
              <div className='w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto'>
                <Eye className='w-8 h-8 text-blue-500' />
              </div>
              <h3 className='font-semibold text-foreground'>Discover</h3>
              <p className='text-sm text-muted-foreground'>
                Competitive analysis, user research, problem identification
              </p>
            </motion.div>

            {/* Define */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-center space-y-4'
            >
              <div className='w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto'>
                <Target className='w-8 h-8 text-green-500' />
              </div>
              <h3 className='font-semibold text-foreground'>Define</h3>
              <p className='text-sm text-muted-foreground'>
                Problem definition, user personas, journey mapping
              </p>
            </motion.div>

            {/* Develop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-center space-y-4'
            >
              <div className='w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto'>
                <Code className='w-8 h-8 text-purple-500' />
              </div>
              <h3 className='font-semibold text-foreground'>Develop</h3>
              <p className='text-sm text-muted-foreground'>
                Prototyping, technical architecture, rapid iteration
              </p>
            </motion.div>

            {/* Deliver */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='text-center space-y-4'
            >
              <div className='w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto'>
                <Rocket className='w-8 h-8 text-orange-500' />
              </div>
              <h3 className='font-semibold text-foreground'>Deliver</h3>
              <p className='text-sm text-muted-foreground'>
                Production deployment, testing, optimization
              </p>
            </motion.div>
          </div>
        </div>

        {/* Process Benefits */}
        <div className='grid md:grid-cols-3 gap-6 mt-12'>
          <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
            <div className='flex items-center space-x-3'>
              <Lightbulb className='w-6 h-6 text-blue-500' />
              <h4 className='font-semibold text-foreground'>
                Structured Thinking
              </h4>
            </div>
            <p className='text-sm text-muted-foreground'>
              Even informal application of a process like Double Diamond is a
              force multiplier. Investing time in Discovery and Definition saved
              me from building wrong features.
            </p>
          </div>

          <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
            <div className='flex items-center space-x-3'>
              <Zap className='w-6 h-6 text-green-500' />
              <h4 className='font-semibold text-foreground'>
                Rapid Convergence
              </h4>
            </div>
            <p className='text-sm text-muted-foreground'>
              The focused approach allowed the Development phase to be extremely
              targeted, avoiding scope creep and maintaining velocity.
            </p>
          </div>

          <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
            <div className='flex items-center space-x-3'>
              <CheckCircle className='w-6 h-6 text-purple-500' />
              <h4 className='font-semibold text-foreground'>
                Quality Assurance
              </h4>
            </div>
            <p className='text-sm text-muted-foreground'>
              Each phase had clear deliverables and validation points, ensuring
              the final product met the original objectives.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
