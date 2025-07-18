"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe,
  Cpu,
  Database,
  Cloud,
  Lock
} from "lucide-react"

const technologies = [
  {
    category: "Frontend",
    icon: Code,
    color: "bg-blue-500",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Design",
    icon: Palette,
    color: "bg-purple-500",
    items: ["Figma", "Adobe XD", "Sketch", "InVision"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "bg-green-500",
    items: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    category: "Backend",
    icon: Database,
    color: "bg-orange-500",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Cloud",
    icon: Cloud,
    color: "bg-cyan-500",
    items: ["AWS", "Vercel", "Netlify", "Firebase"]
  },
  {
    category: "Security",
    icon: Lock,
    color: "bg-red-500",
    items: ["OAuth", "JWT", "HTTPS", "CORS"]
  }
]

export function TechStackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern technologies and tools I use to create exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${tech.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <tech.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {tech.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-sm">
                        {item}
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