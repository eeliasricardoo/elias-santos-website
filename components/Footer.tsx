"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart,
  ArrowUp
} from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-background border-t border-border/50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-muted/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ES</span>
              </div>
              <span className="text-xl font-bold text-foreground">Eduardo Silva</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Product Designer passionate about creating meaningful user experiences 
              and innovative digital solutions.
            </p>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-xs">
                Available for work
              </Badge>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">
                About Me
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">
                Portfolio
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">
                Experience
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">
                Contact
              </Button>
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Mail className="w-4 h-4 mr-2" />
                eduardo@example.com
              </Button>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© 2024 Eduardo Silva. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and Next.js</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to top
          </Button>
        </motion.div>
      </div>
    </footer>
  )
} 