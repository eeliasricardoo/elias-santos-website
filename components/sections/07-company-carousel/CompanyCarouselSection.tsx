"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

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

export function CompanyCarouselSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Empresas que Confiam
          </h2>
          <p className="text-lg text-muted-foreground">
            Trabalhando com marcas importantes e agências de UX/UI
          </p>
        </motion.div>

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
                  className="filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 