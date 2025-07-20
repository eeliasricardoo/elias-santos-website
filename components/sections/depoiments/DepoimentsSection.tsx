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
      className="flex-shrink-0 w-80 bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <Avatar className="w-12 h-12">
          <AvatarFallback 
            className={`bg-gradient-to-br ${testimonial.avatarGradient} text-white font-semibold`}
          >
            {testimonial.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-semibold text-gray-900 text-sm">
              {testimonial.name}
            </h4>
            <span className="text-gray-500 text-xs">
              {testimonial.username}
            </span>
          </div>
          
          <p className="text-gray-700 text-sm leading-relaxed">
            {testimonial.content}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function DepoimentsSection() {
  return (
    <section id="depoiments" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que dizem sobre mim
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Depoimentos de clientes e colegas que trabalharam comigo em projetos incríveis
          </p>
        </motion.div>

        {/* Marquee com depoimentos - Duas linhas com movimento cruzado */}
        <div className="relative space-y-8">
          {/* Primeira linha - 3 cards (movimento para direita) */}
          <Marquee 
            className="py-4"
            pauseOnHover={true}
            repeat={3}
            reverse={false}
          >
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
              />
            ))}
          </Marquee>

          {/* Segunda linha - 3 cards (movimento para esquerda) */}
          <Marquee 
            className="py-4"
            pauseOnHover={true}
            repeat={3}
            reverse={true}
          >
            {testimonials.slice(3, 6).map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
} 