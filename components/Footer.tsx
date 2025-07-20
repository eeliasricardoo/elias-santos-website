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

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section - 5 colunas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">ES</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Elias Santos</h2>
                <p className="text-muted-foreground text-sm">Product Designer</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base max-w-md">
              Product Designer passionate about creating meaningful user experiences 
              and innovative digital solutions that make a difference.
            </p>
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for work
              </Badge>
            </div>
          </motion.div>

          {/* Quick Links - 4 colunas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground">Navigation</h3>
            <div className="grid grid-cols-1 gap-3">
              <Button 
                variant="ghost" 
                className="justify-start p-3 h-auto text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                onClick={() => {
                  const aboutSection = document.querySelector('#about-me');
                  aboutSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About Me
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start p-3 h-auto text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                onClick={() => {
                  const portfolioSection = document.querySelector('#portfolio');
                  portfolioSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Portfolio
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start p-3 h-auto text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                onClick={() => {
                  const companiesSection = document.querySelector('#companies');
                  companiesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Experience
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start p-3 h-auto text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                onClick={() => {
                  const contactSection = document.querySelector('#get-in-touch');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </Button>
            </div>
          </motion.div>

          {/* Social Links - 3 colunas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground">Connect</h3>
            <div className="grid grid-cols-1 gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start h-10 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                onClick={() => window.open('https://linkedin.com/in/elias-santos', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start h-10 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                onClick={() => window.open('https://github.com/elias-santos', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start h-10 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                onClick={() => window.open('https://medium.com/@elias-santos', '_blank')}
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                Medium
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start h-10 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start h-10 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                onClick={() => window.open('mailto:eeliasricardoo@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </div>
          </motion.div>

        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/30 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
        >
          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
            <span>© 2024 Elias Santos. All rights reserved.</span>
            <div className="w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>and Next.js</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to top
          </Button>
        </motion.div>
      </div>
    </footer>
  )
} 