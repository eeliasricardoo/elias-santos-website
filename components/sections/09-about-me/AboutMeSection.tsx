"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    company: "Augusto Cesar Design & Consultoria",
    role: "UX/UI Designer",
    period: "2023 - Present",
    description: "Especializado em User Research, Service Design e Mentoria UX/UI. Trabalhando com marcas importantes e agências de UX/UI."
  },
  {
    company: "Freelancer",
    role: "UX/UI Designer & Full Stack Developer",
    period: "2022 - Present",
    description: "Desenvolvimento de MVPs rápidos e funcionais, especializado em prototipagem e validação de mercado."
  },
  {
    company: "Projetos Próprios",
    role: "Empreendedor & Product Designer",
    period: "2022 - Present",
    description: "Criação e validação de produtos digitais, foco em UX do futuro e metodologias ágeis."
  }
]

const education = [
  {
    institution: "UX Unicórnio",
    course: "UX/UI Design",
    period: "2023"
  },
  {
    institution: "UNIVERTAS",
    course: "Formação Acadêmica",
    period: "2022 - 2024"
  },
  {
    institution: "Cursos Online",
    course: "Next.js, React, TypeScript, Figma",
    period: "2022 - 2024"
  }
]

const skills = [
  "Product Design", "User Experience (UX)", "Product Management",
  "Figma", "Next.js", "React", "TypeScript", "Tailwind CSS", 
  "UX Research", "Prototyping", "User Testing", "Service Design",
  "User Research", "Mentoria UX/UI", "Supabase", "Vercel"
]

export function AboutMeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <Badge className="bg-muted/50 text-muted-foreground border-border/50 px-4 py-2 text-sm font-medium">
            Sobre Mim
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Hi, I'm Elias Santos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            UX/UI Designer & Full Stack Developer. Especializado em criar MVPs rápidos e funcionais. 
            Trabalho com marcas importantes e agências de UX/UI, transformando ideias em produtos que vendem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-12">
            {/* Work Experience */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-foreground tracking-tight">Work Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex gap-4 p-6 rounded-xl bg-muted/20 backdrop-blur-sm border border-border/50">
                    <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-foreground">{exp.company}</h4>
                          <p className="text-muted-foreground">{exp.role}</p>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-foreground tracking-tight">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/10">
                    <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-foreground">{edu.institution}</h4>
                        <p className="text-sm text-muted-foreground">{edu.course}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-foreground tracking-tight">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="bg-muted/50 text-muted-foreground border-border/50 px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
              
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-foreground tracking-tight">Stats</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/20 backdrop-blur-sm border border-border/50">
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">MVPs Criados</div>
                </div>
                <div className="p-4 rounded-lg bg-muted/20 backdrop-blur-sm border border-border/50">
                  <div className="text-2xl font-bold text-foreground">7</div>
                  <div className="text-sm text-muted-foreground">Dias Média</div>
                </div>
                <div className="p-4 rounded-lg bg-muted/20 backdrop-blur-sm border border-border/50">
                  <div className="text-2xl font-bold text-foreground">95%</div>
                  <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 