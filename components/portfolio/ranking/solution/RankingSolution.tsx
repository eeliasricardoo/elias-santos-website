'use client';

import React from 'react';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { motion } from 'framer-motion';

export default function RankingSolution() {
  return (
    <section className='space-y-12'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold mb-4'>Solution Definition</h2>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
          A comprehensive ranking system that balances student engagement with
          privacy protection, providing administrators with full control over
          the platform&apos;s competitive features.
        </p>
      </div>

      {/* Solution Interface Screenshots */}
      <div className='space-y-8'>
        <div className='text-center'>
          <h3 className='text-xl font-semibold mb-4'>Solution Interface</h3>
          <p className='text-muted-foreground mb-6'>
            Visual representation of the implemented ranking system
          </p>
        </div>

        {/* Images Full Width */}
        <div className='space-y-12'>
          {/* Empty State */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-4'
          >
            <h4 className='text-lg font-medium text-center'>
              Empty State - No Results Found
            </h4>
            <div className='bg-card border border-border/20 rounded-lg overflow-hidden shadow-lg'>
              <ImageLightbox
                src='/portfolios/ranking/empity.png'
                alt='Empty State - No Results Found'
                width={1200}
                height={800}
                className='w-full h-auto cursor-pointer'
              />
            </div>
            <p className='text-sm text-muted-foreground text-center'>
              Interface quando não há dados de ranking disponíveis
            </p>
          </motion.div>

          {/* Active Ranking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='space-y-4'
          >
            <h4 className='text-lg font-medium text-center'>
              Active Ranking with Student Data
            </h4>
            <div className='bg-card border border-border/20 rounded-lg overflow-hidden shadow-lg'>
              <ImageLightbox
                src='/portfolios/ranking/ranking.png'
                alt='Active Ranking with Student Data'
                width={1200}
                height={800}
                className='w-full h-auto cursor-pointer'
              />
            </div>
            <p className='text-sm text-muted-foreground text-center'>
              Interface com dados ativos do ranking de estudantes
            </p>
          </motion.div>
        </div>
      </div>

      {/* Solution Details */}
      <div className='space-y-8'>
        {/* 1. Ranking Rules */}
        <div className='space-y-4'>
          <h3 className='text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2'>
            1. Ranking Rules
          </h3>
          <div className='space-y-4 text-lg'>
            <div>
              <h4 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
                XP-Based Ranking
              </h4>
              <p className='text-gray-600 dark:text-gray-300'>
                Students are ranked by their total accumulated experience points
                (XP). The more XP you earn, the higher your position in the
                ranking.
              </p>
            </div>
            <div>
              <h4 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
                Tie-Breaking System
              </h4>
              <p className='text-gray-600 dark:text-gray-300'>
                When two students have the same XP, the one who earned their
                last XP most recently gets the higher position.
              </p>
            </div>
            <div>
              <h4 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
                Flexible Filtering
              </h4>
              <p className='text-gray-600 dark:text-gray-300'>
                Students can view rankings by different time periods: total XP,
                weekly, monthly, yearly, or custom date ranges.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Student Participation */}
        <div className='space-y-4'>
          <h3 className='text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2'>
            2. Student Participation
          </h3>
          <div className='space-y-4 text-lg'>
            <div>
              <h4 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
                Privacy-First Approach
              </h4>
              <p className='text-gray-600 dark:text-gray-300'>
                All students start excluded from the ranking by default for
                privacy protection. They must actively choose to participate.
              </p>
            </div>
            <div>
              <h4 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
                Opt-in Process
              </h4>
              <p className='text-gray-600 dark:text-gray-300'>
                On first access, students see a friendly modal asking if they
                want to participate. If they accept, their profile picture and
                name appear in the ranking.
              </p>
            </div>
            <div>
              <h4 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
                Flexible Control
              </h4>
              <p className='text-gray-600 dark:text-gray-300'>
                Students can change their participation status anytime through
                their settings panel, with a 24-hour delay to prevent abuse.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Admin Access */}
        <div className='space-y-4'>
          <h3 className='text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2'>
            3. Admin Access
          </h3>
          <div className='space-y-4 text-lg'>
            <div>
              <h4 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
                Complete Control
              </h4>
              <p className='text-gray-600 dark:text-gray-300'>
                Administrators can enable or disable the entire ranking system
                for their institution with one click.
              </p>
            </div>
            <div>
              <h4 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
                Historical Data Management
              </h4>
              <p className='text-gray-600 dark:text-gray-300'>
                When activating the ranking, administrators can choose whether
                to include past XP data or start fresh.
              </p>
            </div>
            <div>
              <h4 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
                Granular Activation
              </h4>
              <p className='text-gray-600 dark:text-gray-300'>
                The ranking can be activated for specific schools or departments
                within the institution, allowing for targeted implementation.
              </p>
            </div>
          </div>
        </div>

        {/* 4. User Interface */}
        <div className='space-y-4'>
          <h3 className='text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2'>
            4. User Interface
          </h3>
          <div className='space-y-4 text-lg'>
            <div>
              <h4 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
                Student Panel
              </h4>
              <p className='text-gray-600 dark:text-gray-300'>
                Students see the top 10 ranked students with their own position
                highlighted. The interface is designed to be motivating and easy
                to understand.
              </p>
            </div>
            <div>
              <h4 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
                Admin Dashboard
              </h4>
              <p className='text-gray-600 dark:text-gray-300'>
                Administrators have access to a comprehensive dashboard with
                ranking management, student oversight, and detailed performance
                reports.
              </p>
            </div>
            <div>
              <h4 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
                Intuitive Navigation
              </h4>
              <p className='text-gray-600 dark:text-gray-300'>
                Simple date filters allow users to view rankings by different
                time periods, making navigation and visualization
                straightforward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
