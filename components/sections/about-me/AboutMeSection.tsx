"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function AboutMeSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background removido */}
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-primary/15 rounded-full animate-pulse delay-1500" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Main content */}
          <div className="space-y-6 text-xl md:text-2xl text-foreground max-w-4xl mx-auto">
            <div>
              Product Designer specialized in{" "}
              <Badge className="bg-muted text-muted-foreground border-border px-4 py-2 text-base font-medium rounded-full">
                UX/UI Design
              </Badge>
            </div>
            
            <div>
              Passionate about{" "}
              <Badge className="bg-muted text-muted-foreground border-border px-4 py-2 text-base font-medium rounded-full">
                Research
              </Badge>
            </div>
            
            <div>
              With solid experience in the field of{" "}
              <Badge className="bg-muted text-muted-foreground border-border px-4 py-2 text-base font-medium rounded-full">
                Education
              </Badge>
            </div>
            
            <div>
              Skilled in{" "}
              <Badge className="bg-muted text-muted-foreground border-border px-4 py-2 text-base font-medium rounded-full">
                Low-code
              </Badge>{" "}
              development
            </div>
            
            <div>
              Extensive knowledge in{" "}
              <Badge className="bg-muted text-muted-foreground border-border px-4 py-2 text-base font-medium rounded-full">
                Artificial Intelligence
              </Badge>
            </div>
          </div>

          {/* Fast forward icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-end mt-12"
          >
            <div className="w-8 h-8 border-2 border-muted-foreground/30 rounded-full flex items-center justify-center">
              <svg 
                className="w-4 h-4 text-muted-foreground/60" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 5l7 7-7 7M5 5l7 7-7 7" 
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 