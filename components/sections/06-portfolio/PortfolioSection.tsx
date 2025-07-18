"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "SaaS de Gestão",
    category: "MVP em 7 dias",
    image: "/images/portfolio-reference.png",
    tech: ["Next.js", "Stripe", "Supabase"]
  },
  {
    title: "App de Delivery",
    category: "MVP em 10 dias",
    image: "/images/portfolio-reference.png",
    tech: ["React Native", "Firebase", "Maps API"]
  },
  {
    title: "Marketplace",
    category: "MVP em 14 dias",
    image: "/images/portfolio-reference.png",
    tech: ["Next.js", "Stripe", "PostgreSQL"]
  },
  {
    title: "App de Finanças",
    category: "MVP em 12 dias",
    image: "/images/portfolio-reference.png",
    tech: ["React", "Plaid", "Vercel"]
  }
]

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projetos desenvolvidos em tempo recorde com foco em validação e resultados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <Card className="border-border/50 bg-card/40 backdrop-blur-xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-muted/80 text-muted-foreground border-0 mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 