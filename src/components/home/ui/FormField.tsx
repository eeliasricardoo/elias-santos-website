'use client';

import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'textarea';
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  animationDelay?: number;
  className?: string;
}

export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  animationDelay = 0,
  className = '',
}: FormFieldProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      viewport={{ once: true }}
      className={`space-y-2 ${className}`}
    >
      <label htmlFor={name} className='text-sm font-medium text-foreground'>
        {label}
        {required && <span className='text-red-500 ml-1'>*</span>}
      </label>
      {type === 'textarea' ? (
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className='min-h-[120px] resize-none'
        />
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </motion.div>
  );
}
