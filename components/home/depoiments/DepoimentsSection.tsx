'use client';

import { motion } from 'framer-motion';
import { TestimonialCard } from '../ui';
import { useMounted } from '@/hooks/use-mounted';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarGradient: string;
  date: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Felipe Feliciano',
    role: 'PHP | Typescript | Javascript',
    content:
      'Trabalhei com o Elias e ele é um designer que entende de experiência de verdade. Ultimamente vem se aproximando bastante do código, pegando gosto por entender como tudo funciona. Isso tem deixado o trabalho dele ainda mais completo, entender a parte técnica facilita muito na hora de passar a visão pro time de desenvolvimento. É alguém que soma, aprende rápido e tá sempre presente no que o time precisa.',
    avatarGradient: 'from-green-400 to-blue-400',
    date: 'July 5, 2025',
    image: '/depoiments/feh.jpeg',
  },
  {
    id: 2,
    name: 'Nikolas Soares Faria',
    role: 'Criador do Toolzz e co-fundador da Edulabzz',
    content:
      'Trabalhei com o Elias por anos e posso dizer sem hesitar: é um profissional fora da curva. Um UX Designer com visão estratégica, domínio técnico e uma habilidade incrível de transformar problemas complexos em soluções simples e eficientes. Além disso, manda muito bem em front-end, sempre colaborativo com o time de produto, devs e stakeholders. É comprometido, organizado e proativo, daqueles que elevam o nível de qualquer projeto.',
    avatarGradient: 'from-purple-400 to-pink-400',
    date: 'July 4, 2025',
    image: '/depoiments/niko.jpeg',
  },
  {
    id: 3,
    name: 'Rafael Mattara',
    role: 'Analista de Dados | Product Owner | Analista de Teste IA',
    content:
      'Elias é um designer fenomenal e muito orientado a deadline e resultados. Tem um conhecimento profundo na criação e um senso crítico que tornam dele um dos profissionais mais qualificados que tive o prazer de compartilhar uma parte da minha trajetória profissional! Sedento por conhecimento, sempre estuda e busca aprimorar, concedendo parte do seu tempo para ir além de suas tarefas.',
    avatarGradient: 'from-blue-400 to-cyan-400',
    date: 'July 4, 2025',
    image: '/depoiments/mattara.jpeg',
  },
  {
    id: 4,
    name: 'Gabriel Rosa',
    role: 'Video Editor | Motion Designer | Marketing Coordinator',
    content:
      'O Elias é um designer de UX/UI com um talento incrível para criar interfaces intuitivas e funcionais. Seu conhecimento em experiência do usuário e usabilidade, aliado ao domínio de diversas ferramentas, faz toda a diferença nos projetos em que atua. Além do senso estético apurado, ele tem uma visão estratégica que contribui para soluções alinhadas tanto às necessidades dos usuários quanto aos objetivos do negócio.',
    avatarGradient: 'from-orange-400 to-red-400',
    date: 'March 10, 2025',
    image: '/depoiments/rosa.jpeg',
  },
  {
    id: 5,
    name: 'Angel Costa',
    role: 'Analista de Recursos Humanos | Tech Recruiter | Talent Acquisition',
    content:
      'Quero recomendar o Elias, que trabalhou como UX/UI Designer e mandou muito bem! Ele tem um ótimo conhecimento em design de interfaces, experiência do usuário e usabilidade, além de dominar várias ferramentas. Sempre mostrou muita habilidade para criar soluções visuais intuitivas e funcionais, alinhadas tanto às necessidades do usuário quanto aos objetivos do projeto.',
    avatarGradient: 'from-pink-400 to-purple-400',
    date: 'February 28, 2025',
    image: '/depoiments/angel.jpeg',
  },
  {
    id: 6,
    name: 'Ariadyne Acunha',
    role: 'Project Manager | Marketing Project Management | Product Management',
    content:
      'Elias is definitely a problem solver! Strict to the deadlines, there is no problem that he cant solve haha beyond that he is a great professional who has strong UX skills and as a plus he is a great FULLSTACK, thanks for all the amazing job Elias!',
    avatarGradient: 'from-indigo-400 to-purple-400',
    date: 'February 19, 2025',
    image: '/depoiments/ari.jpeg',
  },
  {
    id: 7,
    name: 'Bruno Torquato',
    role: 'Senior Art Director | GenAI Visual Director & Head of Design',
    content:
      'O Elias foi meu braço direito como UX Researcher durante minha gestão na Toolzz, e não poderia estar mais grato por tê-lo ao meu lado. Sua paixão por entender os usuários e suas habilidades analíticas afiadas eram essenciais para nossos projetos. Sempre confiável e comprometido, ele elevou nossa abordagem de pesquisa e melhorou a experiência do usuário.',
    avatarGradient: 'from-emerald-400 to-teal-400',
    date: 'August 16, 2023',
    image: '/depoiments/bruno.jpeg',
  },
];

export function DepoimentsSection() {
  const mounted = useMounted();

  return (
    <section id='depoiments' className='relative py-20 px-4'>
      <div className='max-w-6xl mx-auto space-y-12'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center space-y-6'
        >
          {!mounted ? (
            <div className='h-8 bg-muted/20 rounded animate-pulse max-w-2xl mx-auto'></div>
          ) : (
            <h2 className='sm:text-2xl font-regular text-foreground tracking-tight'>
              Trusted by industry leaders and collaborators who&#39;ve experienced
              exceptional results:
            </h2>
          )}
        </motion.div>

        {/* Marquee com depoimentos - Duas linhas com movimento cruzado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='relative'
        >
          {!mounted ? (
            <div className='relative'>
              <div className='relative space-y-1a'>
                {/* Primeira linha skeleton */}
                <div className='relative overflow-hidden py-4'>
                  <div className='flex space-x-6 px-6'>
                    {Array(3).fill(0).map((_, i) => (
                      <div key={i} className='flex-shrink-0 w-96 bg-card rounded-xl p-5 shadow-lg border border-border'>
                        <div className='flex items-start space-x-3'>
                          <div className='w-10 h-10 bg-muted/20 rounded-full animate-pulse'></div>
                          <div className='flex-1 space-y-2'>
                            <div className='h-4 bg-muted/20 rounded animate-pulse'></div>
                            <div className='h-3 bg-muted/20 rounded animate-pulse w-3/4'></div>
                            <div className='h-3 bg-muted/20 rounded animate-pulse w-1/2'></div>
                            <div className='space-y-1'>
                              <div className='h-3 bg-muted/20 rounded animate-pulse'></div>
                              <div className='h-3 bg-muted/20 rounded animate-pulse'></div>
                              <div className='h-3 bg-muted/20 rounded animate-pulse w-2/3'></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Segunda linha skeleton */}
                <div className='relative overflow-hidden py-4'>
                  <div className='flex space-x-6 px-6'>
                    {Array(3).fill(0).map((_, i) => (
                      <div key={i} className='flex-shrink-0 w-96 bg-card rounded-xl p-5 shadow-lg border border-border'>
                        <div className='flex items-start space-x-3'>
                          <div className='w-10 h-10 bg-muted/20 rounded-full animate-pulse'></div>
                          <div className='flex-1 space-y-2'>
                            <div className='h-4 bg-muted/20 rounded animate-pulse'></div>
                            <div className='h-3 bg-muted/20 rounded animate-pulse w-3/4'></div>
                            <div className='h-3 bg-muted/20 rounded animate-pulse w-1/2'></div>
                            <div className='space-y-1'>
                              <div className='h-3 bg-muted/20 rounded animate-pulse'></div>
                              <div className='h-3 bg-muted/20 rounded animate-pulse'></div>
                              <div className='h-3 bg-muted/20 rounded animate-pulse w-2/3'></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='relative space-y-1a'>
              {/* Primeira linha - 3 cards (movimento para direita) */}
              <div className='relative overflow-hidden py-4'>
                {/* Gradiente lateral esquerdo */}
                <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none' />
                {/* Gradiente lateral direito */}
                <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none' />

                <div className='flex animate-marquee-reverse'>
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className='flex space-x-6 px-6'>
                        {testimonials.slice(0, 3).map(testimonial => (
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
              <div className='relative overflow-hidden py-4'>
                {/* Gradiente lateral esquerdo */}
                <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none' />
                {/* Gradiente lateral direito */}
                <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none' />

                <div className='flex animate-marquee'>
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className='flex space-x-6 px-6'>
                        {testimonials.slice(3, 6).map(testimonial => (
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
          )}
        </motion.div>
      </div>
    </section>
  );
}
