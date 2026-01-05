'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Calendar,
  ChevronDown,
  Sparkles,
  RefreshCw,
  Users,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

interface EmptyStateRankingProps {
  className?: string;
}

export function EmptyStateRanking({ className = '' }: EmptyStateRankingProps) {
  const [activeTab, setActiveTab] = useState('ranking');
  const [rankingEnabled, setRankingEnabled] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState('total');
  const [isSearching, setIsSearching] = useState(false);

  const tabs = [
    { id: 'ranking', label: 'Ranking System', icon: TrendingUp },
    { id: 'xp', label: 'Experience Points System', icon: Sparkles },
    { id: 'level', label: 'Level System', icon: TrendingUp },
    { id: 'medals', label: 'Medals System', icon: Sparkles },
    { id: 'coins', label: 'Coins System', icon: TrendingUp },
  ];

  const timeframes = [
    { id: 'total', label: 'Total' },
    { id: 'week', label: 'Week' },
    { id: 'month', label: 'Month' },
    { id: 'year', label: 'Year' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`max-w-6xl mx-auto bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 ${className}`}
    >
      {/* Header with gradient */}
      <div className='bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 px-8 py-6 border-b border-gray-200'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className='flex items-center justify-between'
        >
          <div className='flex items-center space-x-4'>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className='flex items-center space-x-2'
            >
              <div className='w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg'></div>
              <h1 className='text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
                Ranking Dashboard
              </h1>
            </motion.div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='flex items-center space-x-2 text-sm text-gray-600'
          >
            <Users className='w-4 h-4' />
            <span>0 active students</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Tabs with animation */}
      <div className='px-8 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white'>
        <div className='flex space-x-1'>
          {tabs.map((tab, index) => {
            const IconComponent = tab.icon;
            return (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
              >
                <IconComponent className='w-4 h-4' />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className='p-8 space-y-8 bg-gradient-to-br from-white to-gray-50'>
        {/* Ranking System Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='space-y-4'
        >
          <div className='flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100'>
            <div>
              <h2 className='text-xl font-bold text-gray-900 flex items-center space-x-2'>
                <TrendingUp className='w-5 h-5 text-blue-600' />
                <span>Ranking System</span>
              </h2>
              <p className='text-gray-600 mt-1'>
                Check now the progress of your students in the Unit
              </p>
            </div>
            <div className='flex items-center space-x-3'>
              <motion.span
                animate={{ opacity: rankingEnabled ? 1 : 0.5 }}
                className='text-sm text-gray-600'
              >
                {rankingEnabled ? 'Active' : 'Inactive'}
              </motion.span>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Switch
                  checked={rankingEnabled}
                  onCheckedChange={setRankingEnabled}
                  className='data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-purple-500'
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Classification Table Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className='space-y-6'
        >
          <div className='p-6 bg-white rounded-2xl border border-gray-200 shadow-sm'>
            <h3 className='text-lg font-bold text-gray-900 flex items-center space-x-2'>
              <Users className='w-5 h-5 text-indigo-600' />
              <span>Classification Table</span>
            </h3>
            <p className='text-gray-600 mt-1'>
              The ranking system will measure student performance based on
              interaction and content consumption.
            </p>
          </div>

          {/* Filters and Controls */}
          <div className='space-y-4'>
            {/* Timeframe Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className='flex space-x-2'
            >
              {timeframes.map((timeframe, index) => (
                <motion.div
                  key={timeframe.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={
                      selectedTimeframe === timeframe.id ? 'default' : 'outline'
                    }
                    size='sm'
                    onClick={() => setSelectedTimeframe(timeframe.id)}
                    className={
                      selectedTimeframe === timeframe.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-blue-300'
                    }
                  >
                    {timeframe.label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Search and Filters Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='flex items-center space-x-4'
            >
              <div className='relative flex-1 max-w-md'>
                <motion.div
                  animate={{ rotate: isSearching ? 360 : 0 }}
                  transition={{
                    duration: 1,
                    repeat: isSearching ? Infinity : 0,
                  }}
                >
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                </motion.div>
                <Input
                  placeholder='Search students...'
                  className='pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl'
                  onFocus={() => setIsSearching(true)}
                  onBlur={() => setIsSearching(false)}
                />
              </div>

              <div className='flex items-center space-x-2'>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    variant='outline'
                    size='sm'
                    className='border-gray-300 rounded-xl'
                  >
                    Top 10
                    <ChevronDown className='w-4 h-4 ml-1' />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    variant='outline'
                    size='sm'
                    className='border-gray-300 rounded-xl'
                  >
                    Filter by unit
                    <ChevronDown className='w-4 h-4 ml-1' />
                  </Button>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className='flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-xl'
              >
                <Calendar className='w-4 h-4' />
                <span>13 Junho 2023</span>
                <span>-</span>
                <span>14 Julho 2023</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Empty State with advanced animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className='flex flex-col items-center justify-center py-20 space-y-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-dashed border-gray-200'
        >
          {/* Animated car */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            className='relative'
          >
            {/* Animated motion lines */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='absolute -top-4 left-0 right-0 flex justify-center space-x-2'
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scaleY: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className='w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full'
                />
              ))}
            </motion.div>

            {/* Main car */}
            <div className='relative w-32 h-20'>
              {/* Shadow */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gray-300 rounded-full blur-sm'
              />

              {/* Car body */}
              <motion.div
                animate={{
                  y: [0, -2, 0],
                  rotateY: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl shadow-lg relative overflow-hidden'
              >
                {/* Shine effect */}
                <motion.div
                  animate={{
                    x: [-100, 100],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                  }}
                  className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent'
                />

                {/* Windows */}
                <div className='absolute top-2 left-3 right-3 h-3 bg-blue-200 rounded-lg opacity-80'></div>
                <div className='absolute top-6 left-4 right-4 h-2 bg-blue-100 rounded opacity-60'></div>

                {/* Wheels */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className='absolute bottom-1 left-2 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600'
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className='absolute bottom-1 right-2 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600'
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Animated floating data */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className='absolute inset-0 pointer-events-none'
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                className='absolute text-blue-500 text-xs font-bold'
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 20}%`,
                }}
              >
                {['📊', '📈', '🏆', '⭐', '🎯', '💎'][i]}
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className='text-center space-y-3'
          >
            <h4 className='text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
              No results found
            </h4>
            <p className='text-gray-600 max-w-md leading-relaxed'>
              Check the search term or selected filters.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className='flex space-x-4'
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant='outline'
                className='border-gray-300 text-gray-700 rounded-xl px-6'
              >
                <RefreshCw className='w-4 h-4 mr-2' />
                Clear filters
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl px-6 shadow-lg'>
                <Users className='w-4 h-4 mr-2' />
                Add students
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer with gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className='bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-4 border-t border-gray-200'
      >
        <p className='text-sm text-gray-600 text-center font-medium'>
          ✨ Ranking System Active - Waiting for student data
        </p>
      </motion.div>
    </motion.div>
  );
}
