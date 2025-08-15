'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CompanyLogo } from '../ui';
import { useHydrated } from '@/hooks/use-hydrated';

// Componente de Carrossel de Empresas
function CompanyCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const hydrated = useHydrated();
  const prefersReducedMotion = useReducedMotion();
  
  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Renderização otimizada para mobile
  if (!hydrated) {
    return (
      <div className='relative overflow-hidden py-6'>
        <div className='flex space-x-4 md:space-x-8'>
          {companies.slice(0, 5).map((_, index) => (
            <div key={index} className='w-16 h-12 md:w-24 md:h-16 bg-muted/20 rounded animate-pulse flex-shrink-0' />
          ))}
        </div>
      </div>
    );
  }

  // Versão simplificada para mobile
  if (isMobile || prefersReducedMotion) {
    return (
      <div className='relative overflow-hidden py-4'>
        <div className='flex space-x-4 overflow-x-auto scrollbar-hide'>
          {companies.map((logo, index) => (
            <CompanyLogo
              key={index}
              src={logo}
              alt={`Empresa ${index + 1}`}
              index={index}
              className='flex-shrink-0'
              isMobile={true}
            />
          ))}
        </div>
      </div>
    );
  }

  // Versão completa para desktop
  return (
    <div className='relative overflow-hidden py-6'>
      {/* Gradientes laterais - apenas desktop */}
      <div className='absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none' />
      <div className='absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none' />

      {/* Container do carrossel com animação otimizada */}
      <div className='flex animate-scroll-companies space-x-6 md:space-x-8'>
        {/* Apenas duas sequências para reduzir DOM */}
        {companies.map((logo, index) => (
          <CompanyLogo
            key={`first-${index}`}
            src={logo}
            alt={`Empresa ${index + 1}`}
            index={index}
          />
        ))}
        {companies.map((logo, index) => (
          <CompanyLogo
            key={`second-${index}`}
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
  const hydrated = useHydrated();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id='companies' className='relative py-6 md:py-8 px-4'>
      <div className='max-w-6xl mx-auto space-y-4 md:space-y-8'>
        <motion.div
          initial={hydrated && !prefersReducedMotion ? { opacity: 0, y: 20 } : false}
          whileInView={hydrated && !prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='text-center space-y-2 md:space-y-4'
        >
          <h2 className='text-lg sm:text-xl md:text-2xl font-regular text-foreground tracking-tight'>
            Brands and institutions that I collaborated with:
          </h2>
        </motion.div>

        <motion.div
          initial={hydrated && !prefersReducedMotion ? { opacity: 0, y: 15 } : false}
          whileInView={hydrated && !prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='relative'
        >
          <CompanyCarousel />
        </motion.div>
      </div>
    </section>
  );
}
