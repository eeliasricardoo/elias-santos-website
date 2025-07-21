"use client"

import { motion } from 'framer-motion'

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
    name: "Sarah Chen",
    username: "@sarahchen",
    content: "Elias transformed our educational platform with his strategic UX approach. Student engagement increased by 40% within the first quarter. His attention to detail and user-centered methodology is exceptional.",
    avatarGradient: "from-green-400 to-yellow-400"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    username: "@marcusrod",
    content: "Working with Elias was a game-changer for our product. He delivered a complete MVP in record time while maintaining exceptional quality. His technical expertise and design thinking are unmatched.",
    avatarGradient: "from-purple-400 to-pink-400"
  },
  {
    id: 3,
    name: "Jennifer Park",
    username: "@jenniferpark",
    content: "Elias's research-driven approach helped us understand our users better than ever. The insights he provided led to a 35% improvement in our conversion rates. Truly a strategic partner.",
    avatarGradient: "from-green-400 to-blue-400"
  },
  {
    id: 4,
    name: "David Thompson",
    username: "@davidthompson",
    content: "His ability to balance technical constraints with user needs is remarkable. Elias delivered a solution that exceeded our expectations and was implemented ahead of schedule.",
    avatarGradient: "from-pink-400 to-orange-400"
  },
  {
    id: 5,
    name: "Lisa Wang",
    username: "@lisawang",
    content: "Elias's expertise in both design and development is rare. He created a seamless user experience while building a robust technical foundation. Highly recommend for complex projects.",
    avatarGradient: "from-blue-400 to-purple-400"
  },
  {
    id: 6,
    name: "Alex Johnson",
    username: "@alexjohnson",
    content: "The ranking system Elias designed revolutionized how we track student progress. It's intuitive, powerful, and has become essential to our educational strategy. Outstanding work.",
    avatarGradient: "from-yellow-400 to-red-400"
  },
  {
    id: 7,
    name: "Maria Silva",
    username: "@mariasilva",
    content: "Elias consistently delivers exceptional results. His user research methodology and rapid prototyping skills helped us iterate quickly and launch a successful product.",
    avatarGradient: "from-indigo-400 to-cyan-400"
  },
  {
    id: 8,
    name: "Ryan Kim",
    username: "@ryankim",
    content: "Working with Elias was transformative. His strategic thinking and technical execution created a product that users love and stakeholders value. A true professional.",
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
            Trusted by industry leaders and collaborators who&#39;ve experienced exceptional results:
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