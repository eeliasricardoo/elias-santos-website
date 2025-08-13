'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function FeaturesSection() {
  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-6'
      >
        <h2 className='text-3xl font-bold text-foreground'>
          Interface & Features
        </h2>

        <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
          <p>
            Our solution focused on creating a <strong className='text-foreground'>persistent, actionable notification system</strong> that would immediately capture agent attention and provide clear actions for ticket assignment.
          </p>
        </div>

        {/* Wireframes e Ideação */}
        <div className='space-y-6'>
          <h3 className='text-xl font-semibold text-foreground'>Ideation & Wireframes</h3>
          <div className='space-y-6'>
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
                className='relative rounded-lg overflow-hidden border border-border/20 shadow-lg max-w-2xl mx-auto'
              >
                <Image
                  src={wireframe.src}
                  alt={wireframe.alt}
                  width={600}
                  height={400}
                  className='w-full h-auto object-contain'
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
              Bottom-right anchored pop-up with &quot;Queue: 8&quot; badge, live timer and primary &quot;Accept&quot; button.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {[
                  { src: '/portfolios/fila-atendimento/5.png', alt: 'Pop-up normal state' },
                  { src: '/portfolios/fila-atendimento/6.png', alt: 'Pop-up details' },
                  { src: '/portfolios/fila-atendimento/7.png', alt: 'Pop-up penalized state' }
                ].map((popup, index) => (
                  <div key={index} className='relative rounded-lg overflow-hidden border border-border/20 shadow-lg'>
                    <Image
                      src={popup.src}
                      alt={popup.alt}
                      width={400}
                      height={300}
                      className='w-full h-auto object-contain'
                    />
                  </div>
                ))}
              </div>
          </div>

          {/* Variações */}
          <div className='space-y-4'>
            <p className='text-muted-foreground'>
              Different variations and states of the pop-up component.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {[
                { src: '/portfolios/fila-atendimento/8.png', alt: 'Variation 1' },
                { src: '/portfolios/fila-atendimento/9.png', alt: 'Variation 2' },
                { src: '/portfolios/fila-atendimento/10.png', alt: 'Variation 3' }
              ].map((variation, index) => (
                <div key={index} className='relative rounded-lg overflow-hidden border border-border/20 shadow-lg'>
                  <Image
                    src={variation.src}
                    alt={variation.alt}
                    width={400}
                    height={300}
                    className='w-full h-auto object-contain'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Estados Adicionais */}
          <div className='space-y-4'>
            <p className='text-muted-foreground'>
              Additional states and configurations of the interface.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {[
                { src: '/portfolios/fila-atendimento/11.png', alt: 'State 1' },
                { src: '/portfolios/fila-atendimento/12.png', alt: 'State 2' },
                { src: '/portfolios/fila-atendimento/13.png', alt: 'State 3' }
              ].map((state, index) => (
                <div key={index} className='relative rounded-lg overflow-hidden border border-border/20 shadow-lg'>
                  <Image
                    src={state.src}
                    alt={state.alt}
                    width={400}
                    height={300}
                    className='w-full h-auto object-contain'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Modo Claro */}
          <div className='space-y-4'>
            <p className='text-muted-foreground'>
              Light mode variations and final interface states.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {[
                { src: '/portfolios/fila-atendimento/14.png', alt: 'Light mode 1' },
                { src: '/portfolios/fila-atendimento/15.png', alt: 'Light mode 2' },
                { src: '/portfolios/fila-atendimento/16.png', alt: 'Light mode 3' }
              ].map((lightMode, index) => (
                <div key={index} className='relative rounded-lg overflow-hidden border border-border/20 shadow-lg'>
                  <Image
                    src={lightMode.src}
                    alt={lightMode.alt}
                    width={400}
                    height={300}
                    className='w-full h-auto object-contain'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


