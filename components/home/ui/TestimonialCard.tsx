'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useMounted } from '@/hooks/use-mounted';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarGradient: string;
  date: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className = '',
}: TestimonialCardProps) {
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div
        className={`flex-shrink-0 w-96 bg-card rounded-xl p-5 shadow-lg border border-border ${className}`}
      >
        <div className='flex items-start space-x-3'>
          <div className='w-10 h-10 bg-muted/20 rounded-full animate-pulse'></div>
          <div className='flex-1 space-y-2'>
            <div className='h-4 bg-muted/20 rounded animate-pulse'></div>
            <div className='h-3 bg-muted/20 rounded animate-pulse w-3/4'></div>
            <div className='h-3 bg-muted/20 rounded animate-pulse w-1/2'></div>
            <div className='space-y-1'>
              <div className='h-3 bg-muted/20 rounded animate-pulse'></div>
              <div className='h-3 bg-muted/20 rounded animate-pulse'></div>
              <div className='h-3 bg-muted/20 rounded animate-pulse w-2/3'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex-shrink-0 w-96 bg-card rounded-xl p-5 shadow-lg border border-border hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className='flex items-start space-x-3'>
        <Avatar className='w-10 h-10 flex-shrink-0'>
          <AvatarImage
            src={testimonial.image}
            alt={testimonial.name}
            className='object-cover'
          />
          <AvatarFallback
            className={`bg-gradient-to-br ${testimonial.avatarGradient} text-white font-semibold text-sm`}
          >
            {testimonial.name.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <div className='flex-1 min-w-0'>
          <div className='mb-2'>
            <h4 className='font-semibold text-card-foreground text-sm mb-1'>
              {testimonial.name}
            </h4>
            <p className='text-muted-foreground text-xs leading-tight mb-1'>
              {testimonial.role}
            </p>
            <span className='text-muted-foreground/70 text-xs'>
              {testimonial.date}
            </span>
          </div>
          <p className='text-muted-foreground text-sm leading-relaxed line-clamp-4'>
            {testimonial.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
