'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
export function FeaturesSection() {
  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-8'
      >
        <div className='space-y-4'>
          <Badge className='bg-muted/50 text-muted-foreground border-border/50 px-4 py-2'>
            Final Solution
          </Badge>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground'>
            Interface & Features
          </h2>
        </div>

        <div className='max-w-3xl mx-auto space-y-12'>
          {/* Wireframes e Ideação */}
          <div className='space-y-6'>
            <h3 className='text-xl font-semibold text-foreground text-center'>Ideation & Wireframes</h3>
            <div className='grid md:grid-cols-3 gap-4'>
              {[
                { src: '/portfolios/fila-atendimento/2.png', alt: 'Initial pop-up wireframe' },
                { src: '/portfolios/fila-atendimento/3.png', alt: 'Wireframe evolution' },
                { src: '/portfolios/fila-atendimento/4.png', alt: 'Refined final wireframe' }
              ].map((wireframe, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='relative aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-md'
                >
                  <Image
                    src={wireframe.src}
                    alt={wireframe.alt}
                    fill
                    className='object-cover'
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Solução Final */}
          <div className='space-y-8'>
            <h3 className='text-xl font-semibold text-foreground'>Final pop-up design</h3>
            
            {/* Estado Normal */}
            <div className='space-y-4'>
              <p className='text-muted-foreground'>
                Bottom-right anchored pop-up with “Queue: 8” badge, live timer and primary “Accept” button.
              </p>
              <div className='grid grid-cols-2 gap-4'>
                  {[
                    { src: '/portfolios/fila-atendimento/5.png', alt: 'Pop-up normal state' },
                    { src: '/portfolios/fila-atendimento/6.png', alt: 'Pop-up details' }
                  ].map((popup, index) => (
                    <div key={index} className='relative aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-md'>
                      <Image
                        src={popup.src}
                        alt={popup.alt}
                        fill
                        className='object-cover'
                      />
                    </div>
                  ))}
                </div>
            </div>

            {/* Estado Penalizado */}
            <div className='space-y-4'>
              <p className='text-muted-foreground'>
                Penalized state of the same component: block message, disabled button and unlock timer.
              </p>
              <div className='relative aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-md'>
                  <Image
                    src='/portfolios/fila-atendimento/7.png'
                    alt='Penalized pop-up state'
                    fill
                    className='object-cover'
                  />
              </div>
            </div>
          </div>

          {/* Fluxo Mobile */}
          <div className='bg-muted/30 p-8 rounded-lg border border-border'>
            <h4 className='font-semibold text-foreground mb-6 text-center'>📱 Mobile Version</h4>
            <div className='space-y-6'>
              <p className='text-muted-foreground text-center'>
                Full mobile flow respecting safe areas and usability on smaller devices
              </p>
              
              {/* Grid de 6 imagens mobile em 2 linhas */}
              <div className='grid grid-cols-3 md:grid-cols-6 gap-4'>
                {[
                  { src: '/portfolios/fila-atendimento/8.png', alt: 'Mobile — Initial screen' },
                  { src: '/portfolios/fila-atendimento/9.png', alt: 'Mobile — Pop-up shows' },
                  { src: '/portfolios/fila-atendimento/10.png', alt: 'Mobile — Interaction' },
                  { src: '/portfolios/fila-atendimento/11.png', alt: 'Mobile — Active state' },
                  { src: '/portfolios/fila-atendimento/12.png', alt: 'Mobile — Confirmation' },
                  { src: '/portfolios/fila-atendimento/13.png', alt: 'Mobile — Final step' }
                ].map((mobile, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='relative aspect-[9/16] rounded-lg overflow-hidden border border-border shadow-md'
                  >
                    <Image
                      src={mobile.src}
                      alt={mobile.alt}
                      fill
                      className='object-cover'
                    />
                  </motion.div>
                ))}
              </div>

              {/* Imagens adicionais do fluxo */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
                {[
                  { src: '/portfolios/fila-atendimento/14.png', alt: 'Desktop flow — detailed' },
                  { src: '/portfolios/fila-atendimento/15.png', alt: 'Complete interface' },
                  { src: '/portfolios/fila-atendimento/16.png', alt: 'Final states' }
                ].map((flow, index) => (
                  <div key={index} className='relative aspect-video rounded-lg overflow-hidden border border-border shadow-md'>
                    <Image
                      src={flow.src}
                      alt={flow.alt}
                      fill
                      className='object-cover'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
