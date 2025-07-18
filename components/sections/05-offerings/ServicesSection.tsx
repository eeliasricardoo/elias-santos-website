"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Palette, 
  Code, 
  Smartphone, 
  Rocket,
  Eye,
  ArrowRight
} from "lucide-react"

const services = [
  {
    title: "UX/UI Design",
    description: "Create intuitive and beautiful user experiences that convert visitors into customers",
    icon: Palette,
    color: "bg-purple-500",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    title: "Web Development",
    description: "Build fast, scalable, and modern web applications with cutting-edge technologies",
    icon: Code,
    color: "bg-blue-500",
    features: ["Frontend Development", "Backend Development", "API Integration", "Performance Optimization"]
  },
  {
    title: "Mobile Development",
    description: "Develop native and cross-platform mobile apps that users love",
    icon: Smartphone,
    color: "bg-green-500",
    features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"]
  },
  {
    title: "MVP Development",
    description: "Quickly validate your ideas with functional prototypes and MVPs",
    icon: Rocket,
    color: "bg-orange-500",
    features: ["Rapid Prototyping", "User Testing", "Iteration", "Launch Support"]
  }
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to launch, I help businesses create digital products that drive results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-xl ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary/90 transition-colors duration-300">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 