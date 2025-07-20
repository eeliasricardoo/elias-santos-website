"use client"

import { motion } from 'framer-motion'
import { Marquee } from '@/components/magicui/marquee'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

interface Testimonial {
  id: number
  name: string
  username: string
  content: string
  avatarGradient: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jack",
    username: "@jack",
    content: "I've never seen anything like this before. It's amazing. I love it.",
    avatarGradient: "from-green-400 to-yellow-400"
  },
  {
    id: 2,
    name: "Jill",
    username: "@jill",
    content: "I don't know what to say. I'm speechless. This is amazing.",
    avatarGradient: "from-purple-400 to-pink-400"
  },
  {
    id: 3,
    name: "James",
    username: "@james",
    content: "I'm at a loss for words. This is amazing. I love it.",
    avatarGradient: "from-green-400 to-blue-400"
  },
  {
    id: 4,
    name: "Jane",
    username: "@jane",
    content: "I'm at a loss for words. This is amazing. I love it.",
    avatarGradient: "from-pink-400 to-orange-400"
  },
  {
    id: 5,
    name: "John",
    username: "@john",
    content: "Absolutely incredible work. The attention to detail is outstanding.",
    avatarGradient: "from-blue-400 to-purple-400"
  },
  {
    id: 6,
    name: "Sarah",
    username: "@sarah",
    content: "This exceeded all my expectations. Simply brilliant!",
    avatarGradient: "from-yellow-400 to-red-400"
  },
  {
    id: 7,
    name: "Mike",
    username: "@mike",
    content: "The best experience I've had. Highly recommended!",
    avatarGradient: "from-indigo-400 to-cyan-400"
  },
  {
    id: 8,
    name: "Emma",
    username: "@emma",
    content: "Incredible work! The quality and creativity are unmatched.",
    avatarGradient: "from-emerald-400 to-teal-400"
  }
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex-shrink-0 w-72 bg-card rounded-xl p-5 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start space-x-3">
        <Avatar className="w-10 h-10 flex-shrink-0">
          <AvatarFallback 
            className={`bg-gradient-to-br ${testimonial.avatarGradient} text-white font-semibold text-sm`}
          >
            {testimonial.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-semibold text-card-foreground text-sm">
              {testimonial.name}
            </h4>
            <span className="text-muted-foreground text-xs">
              {testimonial.username}
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {testimonial.content}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function DepoimentsSection() {
  return (
    <section id="depoiments" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h2 className="sm:text-2xl font-regular text-foreground tracking-tight">
            Depoimentos de clientes e colegas que trabalharam comigo em projetos incríveis:
          </h2>
        </motion.div>

        {/* Marquee com depoimentos - Duas linhas com movimento cruzado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative space-y-1a">
            {/* Primeira linha - 3 cards (movimento para direita) */}
            <div className="relative overflow-hidden py-4">
              {/* Gradiente lateral esquerdo */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              {/* Gradiente lateral direito */}
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-marquee-reverse">
                {Array(3).fill(0).map((_, i) => (
                  <div key={i} className="flex space-x-6 px-6">
                    {testimonials.slice(0, 3).map((testimonial) => (
                      <TestimonialCard 
                        key={`${testimonial.id}-${i}`} 
                        testimonial={testimonial} 
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Segunda linha - 3 cards (movimento para esquerda) */}
            <div className="relative overflow-hidden py-4">
              {/* Gradiente lateral esquerdo */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              {/* Gradiente lateral direito */}
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-marquee">
                {Array(3).fill(0).map((_, i) => (
                  <div key={i} className="flex space-x-6 px-6">
                    {testimonials.slice(3, 6).map((testimonial) => (
                      <TestimonialCard 
                        key={`${testimonial.id}-${i}`} 
                        testimonial={testimonial} 
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 