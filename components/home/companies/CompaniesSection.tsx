'use client';

import { motion } from 'framer-motion';
import { CompanyLogo } from '../ui';

// Componente de Carrossel de Empresas
function CompanyCarousel() {
  const companies = [
    '/empresas/Frame 26.png',
    '/empresas/Frame 27.png',
    '/empresas/Frame 28.png',
    '/empresas/Frame 29.png',
    '/empresas/Frame 30.png',
    '/empresas/Frame 31.png',
    '/empresas/Frame 32.png',
    '/empresas/Frame 33.png',
    '/empresas/Frame 34.png',
  ];

  return (
    <div className='relative overflow-hidden py-6'>
      {/* Gradiente lateral esquerdo */}
      <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none' />
      {/* Gradiente lateral direito */}
      <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none' />

      {/* Container do carrossel com animação infinita */}
      <div className='flex animate-scroll-companies space-x-8'>
        {/* Primeira sequência */}
        {companies.map((logo, index) => (
          <CompanyLogo
            key={`first-${index}`}
            src={logo}
            alt={`Empresa ${index + 1}`}
            index={index}
          />
        ))}

        {/* Segunda sequência (duplicada para loop infinito) */}
        {companies.map((logo, index) => (
          <CompanyLogo
            key={`second-${index}`}
            src={logo}
            alt={`Empresa ${index + 1}`}
            index={index}
          />
        ))}

        {/* Terceira sequência para garantir transição suave */}
        {companies.map((logo, index) => (
          <CompanyLogo
            key={`third-${index}`}
            src={logo}
            alt={`Empresa ${index + 1}`}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export function CompaniesSection() {
  return (
    <section id='companies' className='relative py-8 px-4'>
      <div className='max-w-6xl mx-auto space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center space-y-4'
        >
          <h2 className='sm:text-2xl font-regular text-foreground tracking-tight'>
            Brands and institutions that I collaborated with:
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='relative'
        >
          <CompanyCarousel />
        </motion.div>
      </div>
    </section>
  );
}
