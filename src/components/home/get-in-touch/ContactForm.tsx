'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FormField } from '../ui/FormField';

interface ContactFormProps {
  onSuccess?: () => void;
  onError?: () => void;
  className?: string;
  showTitle?: boolean;
}

export function ContactForm({
  onSuccess,
  onError,
  className = '',
  showTitle = true,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        onSuccess?.();
      } else {
        setSubmitStatus('error');
        onError?.();
        console.error('Error:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      onError?.();
      console.error('Error while sending:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      {showTitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center space-y-6 mb-8'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-foreground'>
            Let&apos;s Build Something Amazing
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
            Ready to transform your ideas into exceptional digital experiences?
            Let&apos;s discuss how we can create value together and bring your
            vision to life.
          </p>
        </motion.div>
      )}

      <div className='relative'>

        <Card className='border-border/30 bg-card shadow-2xl shadow-primary/5 relative z-10'>
          <CardContent className='p-6 md:p-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Name */}
                <FormField
                  label='Name'
                  name='name'
                  type='text'
                  placeholder='Your name'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  animationDelay={0.1}
                />

                {/* Email */}
                <FormField
                  label='Email'
                  name='email'
                  type='email'
                  placeholder='your.email@example.com'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  animationDelay={0.2}
                />
              </div>

              {/* Subject */}
              <FormField
                label='Subject'
                name='subject'
                type='text'
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleInputChange}
                required
                animationDelay={0.3}
              />

              {/* Message */}
              <FormField
                label='Message'
                name='message'
                type='textarea'
                placeholder="Share your project vision, challenges, or let's explore collaboration opportunities..."
                value={formData.message}
                onChange={handleInputChange}
                required
                animationDelay={0.4}
              />

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='flex justify-center'
              >
                <Button
                  type='submit'
                  variant='premium'
                  size='lg'
                  disabled={isSubmitting}
                  className='px-8 py-3 text-base font-medium transition-all duration-300 min-w-[200px]'
                >
                  {isSubmitting ? (
                    <>
                      <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2' />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className='w-4 h-4 mr-2' />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className='w-4 h-4 mr-2' />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='flex items-center justify-center space-x-2 text-green-600 bg-green-50 border border-green-200 rounded-lg p-4'
                >
                  <CheckCircle className='w-5 h-5' />
                  <span className='font-medium'>
                    Message sent successfully! I&#39;ll respond within 24 hours
                    with next steps.
                  </span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='flex items-center justify-center space-x-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-4'
                >
                  <AlertCircle className='w-5 h-5' />
                  <span className='font-medium'>
                    Something went wrong. Please try again.
                  </span>
                </motion.div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
