'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


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
  // Mounted check removed for immediate rendering

  return (
    <div
      className={`flex-shrink-0 w-[80vw] max-w-sm sm:w-96 bg-card rounded-xl p-5 shadow-lg border border-border hover:shadow-xl transition-all duration-300 ${className}`}
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
    </div>
  );
}
