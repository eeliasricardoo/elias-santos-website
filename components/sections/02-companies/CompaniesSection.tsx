"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

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
      <div className="flex animate-scroll space-x-16">
        {[...companies, ...companies].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              width: `${Math.min(120 + (index % companies.length) * 20, 200)}px`,
              height: `${Math.min(60 + (index % companies.length) * 10, 100)}px`
            }}
          >
            <Image
              src={logo}
              alt={`Empresa ${index + 1}`}
              width={Math.min(120 + (index % companies.length) * 20, 200)}
              height={Math.min(60 + (index % companies.length) * 10, 100)}
              className="hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function CompaniesSection() {
  return (
    <section className="relative py-20 px-4 bg-background">
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