"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Target, Rocket, Users } from "lucide-react"

const stats = [
  { number: 7, label: "Dias para MVP", icon: Zap },
  { number: 95, label: "% de Validação", icon: Target },
  { number: 50, label: "Produtos Lançados", icon: Rocket },
  { number: 10, label: "Milhões de Usuários", icon: Users }
]

export function StatsSection() {
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
            Resultados que Falam
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Números que comprovam a eficiência e qualidade dos projetos entregues
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <Card className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-muted flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                    className="text-3xl font-bold text-foreground"
                  >
                    {stat.number}+
                  </motion.div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 