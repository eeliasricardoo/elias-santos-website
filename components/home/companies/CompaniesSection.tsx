"use client"

import { motion } from "framer-motion"
import { CompanyLogo } from "./CompanyLogo"

// Componente de Carrossel de Empresas
function CompanyCarousel() {
  const companies = [
    "/empresas/Frame 26.png",
    "/empresas/Frame 27.png",
    "/empresas/Frame 28.png",
    "/empresas/Frame 29.png",
    "/empresas/Frame 30.png",
    "/empresas/Frame 31.png",
    "/empresas/Frame 32.png",
    "/empresas/Frame 33.png",
    "/empresas/Frame 34.png"
  ]

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradiente lateral esquerdo */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      {/* Gradiente lateral direito */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="flex animate-scroll space-x-16">
        {/* Primeira sequência */}
        {companies.map((logo, index) => (
          <CompanyLogo
            key={`first-${index}`}
            src={logo}
            alt={`Empresa ${index + 1}`}
          />
        ))}
        
        {/* Segunda sequência (duplicada para loop infinito) */}
        {companies.map((logo, index) => (
          <CompanyLogo
            key={`second-${index}`}
            src={logo}
            alt={`Empresa ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function CompaniesSection() {
  return (
    <section id="companies" className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >

          <h2 className="sm:text-2xl font-regular text-foreground tracking-tight">
          Brands and institutions that I collaborated with:
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <CompanyCarousel />
        </motion.div>
      </div>
    </section>
  )
} 