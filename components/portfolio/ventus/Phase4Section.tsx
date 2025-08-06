'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Zap, Shield } from 'lucide-react';

export function Phase4Section() {
  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-8'
      >
        <h2 className='text-3xl font-bold text-foreground text-center'>
          Phase 4: Final Interface & User Experience
        </h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p className='text-center italic'>
            The final interface represents the culmination of user research, technical development, and design iteration. Each component was carefully crafted to address the identified pain points.
          </p>
        </div>
        
        <div className='space-y-16'>
          {/* UX/UI Design Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <h3 className='text-2xl font-semibold text-foreground text-center'>
              UX/UI Design Principles
            </h3>
            
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
                <div className='flex items-center space-x-3'>
                  <Target className='w-6 h-6 text-blue-500' />
                  <h4 className='font-semibold text-foreground'>Developer-First</h4>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Interface optimized for developer workflow with quick model switching and code-friendly interactions.
                </p>
              </div>
              
              <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
                <div className='flex items-center space-x-3'>
                  <Zap className='w-6 h-6 text-green-500' />
                  <h4 className='font-semibold text-foreground'>Speed & Efficiency</h4>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Minimized clicks, keyboard shortcuts, and streamlined workflows to reduce cognitive load.
                </p>
              </div>
              
              <div className='bg-card border border-border/20 rounded-xl p-6 space-y-4'>
                <div className='flex items-center space-x-3'>
                  <Shield className='w-6 h-6 text-purple-500' />
                  <h4 className='font-semibold text-foreground'>Cost Transparency</h4>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Clear cost indicators and usage tracking to maintain budget awareness and control.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Authentication */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-4'
          >
            <h3 className='text-2xl font-semibold text-foreground text-center'>
              Authentication & Security
            </h3>
            <div className='space-y-4 text-center text-muted-foreground'>
              <p>Secure, frictionless authentication system with Supabase Auth integration</p>
            </div>
            <div className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
              <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
                <Image
                  src='/portfolios/ventus/Login.png'
                  alt='Login Interface'
                  width={1200}
                  height={800}
                  className='w-full object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
                  quality={85}
                  placeholder='blur'
                  blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                />
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-4'
          >
            <h3 className='text-2xl font-semibold text-foreground text-center'>
              Navigation & Menu System
            </h3>
            <div className='space-y-4 text-center text-muted-foreground'>
              <p>Intuitive navigation designed for developer workflow with quick access to all features</p>
            </div>
            <div className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
              <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
                <Image
                  src='/portfolios/ventus/Menu aberto.png'
                  alt='Open Menu'
                  width={1200}
                  height={800}
                  className='w-full object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
                  quality={85}
                  placeholder='blur'
                  blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                />
              </div>
            </div>
          </motion.div>

          {/* Custom Models */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-4'
          >
            <h3 className='text-2xl font-semibold text-foreground text-center'>
              Custom Model Selection
            </h3>
            <div className='space-y-4 text-center text-muted-foreground'>
              <p>Granular control over AI models - addressing the core pain point of model switching</p>
            </div>
            <div className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
              <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
                <Image
                  src='/portfolios/ventus/Modelos personalizado.gif'
                  alt='Custom Models Interface'
                  width={1200}
                  height={800}
                  className='w-full object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
                  quality={85}
                  placeholder='blur'
                  blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                />
              </div>
            </div>
          </motion.div>

          {/* Video Generation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-4'
          >
            <h3 className='text-2xl font-semibold text-foreground text-center'>
              Video Generation Demo
            </h3>
            <div className='space-y-4 text-center text-muted-foreground'>
              <p>Multimodal capabilities - text, image, and video in one unified interface</p>
            </div>
            <div className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
              <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
                <Image
                  src='/portfolios/ventus/video.gif'
                  alt='Video Generation'
                  width={1200}
                  height={800}
                  className='w-full object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
                  quality={85}
                  placeholder='blur'
                  blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                />
              </div>
            </div>
          </motion.div>

          {/* Final Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-4'
          >
            <h3 className='text-2xl font-semibold text-foreground text-center'>
              Final Production Interface
            </h3>
            <div className='space-y-4 text-center text-muted-foreground'>
              <p>The complete solution - addressing all identified user needs with a cohesive design system</p>
            </div>
            <div className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
              <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
                <Image
                  src='/portfolios/ventus/Imge.png'
                  alt='Final Interface'
                  width={1200}
                  height={800}
                  className='w-full object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
                  quality={85}
                  placeholder='blur'
                  blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 