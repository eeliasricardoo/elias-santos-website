'use client';

import { motion } from 'framer-motion';
import {
  MessageSquare,
  Eye,
  Palette,
  Cpu,
  Database,
  Shield,
} from 'lucide-react';

export function KeyFeaturesSection() {
  const features = [
    {
      icon: <MessageSquare className='w-6 h-6' />,
      title: 'Unified Chat Interface',
      description: 'Single interface for text, image, and video AI models',
    },
    {
      icon: <Eye className='w-6 h-6' />,
      title: 'Screenshot Analysis',
      description: 'Upload screenshots for AI-powered debugging and analysis',
    },
    {
      icon: <Palette className='w-6 h-6' />,
      title: 'Multimodal Generation',
      description: 'Generate images and videos directly in chat conversations',
    },
    {
      icon: <Cpu className='w-6 h-6' />,
      title: 'Model Switching',
      description: 'Seamless switching between different AI models',
    },
    {
      icon: <Database className='w-6 h-6' />,
      title: 'Conversation History',
      description: 'Persistent chat history with real-time synchronization',
    },
    {
      icon: <Shield className='w-6 h-6' />,
      title: 'Pay-per-use Model',
      description: 'Only pay for what you use, no subscription fees',
    },
  ];

  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-6'
      >
        <h2 className='text-3xl font-bold text-foreground'>Key Features</h2>

        <div className='grid md:grid-cols-2 gap-6'>
          {features.map((feature, index) => (
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
  );
}
