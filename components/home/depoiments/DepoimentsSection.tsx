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
      'I worked with Elias and he is a designer who truly understands user experience. Lately he has been getting closer to code, developing a taste for understanding how everything works. This has made his work even more complete - understanding the technical side makes it much easier to pass the vision to the development team. He is someone who adds value, learns quickly and is always present in what the team needs.',
    avatarGradient: 'from-green-400 to-blue-400',
    date: 'July 5, 2025',
    image: '/depoiments/feh.jpeg',
  },
  {
    id: 2,
    name: 'Nikolas Soares Faria',
    role: 'Creator of Toolzz and co-founder of Edulabzz',
    content:
      'I worked with Elias for years and can say without hesitation: he is an exceptional professional. A UX Designer with strategic vision, technical mastery and an incredible ability to transform complex problems into simple and efficient solutions. Additionally, he excels in front-end development, always collaborative with the product team, developers and stakeholders. He is committed, organized and proactive - one of those who elevates the level of any project.',
    avatarGradient: 'from-purple-400 to-pink-400',
    date: 'July 4, 2025',
    image: '/depoiments/niko.jpeg',
  },
  {
    id: 3,
    name: 'Rafael Mattara',
    role: 'Data Analyst | Product Owner | AI Test Analyst',
    content:
      'Elias is a phenomenal designer and very deadline and results oriented. He has deep knowledge in creation and critical sense that make him one of the most qualified professionals I had the pleasure of sharing part of my professional journey with! Knowledge hungry, he always studies and seeks to improve, dedicating part of his time to go beyond his tasks.',
    avatarGradient: 'from-blue-400 to-cyan-400',
    date: 'July 4, 2025',
    image: '/depoiments/mattara.jpeg',
  },
  {
    id: 4,
    name: 'Gabriel Rosa',
    role: 'Video Editor | Motion Designer | Marketing Coordinator',
    content:
      'Elias is a UX/UI designer with incredible talent for creating intuitive and functional interfaces. His knowledge in user experience and usability, combined with mastery of various tools, makes all the difference in the projects he works on. Beyond his refined aesthetic sense, he has a strategic vision that contributes to solutions aligned with both user needs and business objectives.',
    avatarGradient: 'from-orange-400 to-red-400',
    date: 'March 10, 2025',
    image: '/depoiments/rosa.jpeg',
  },
  {
    id: 5,
    name: 'Angel Costa',
    role: 'Human Resources Analyst | Tech Recruiter | Talent Acquisition',
    content:
      'I want to recommend Elias, who worked as a UX/UI Designer and did an excellent job! He has great knowledge in interface design, user experience and usability, in addition to mastering various tools. He always showed great ability to create intuitive and functional visual solutions, aligned with both user needs and project objectives.',
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
      'Elias was my right hand as UX Researcher during my management at Toolzz, and I couldn\'t be more grateful to have him by my side. His passion for understanding users and his sharp analytical skills were essential for our projects. Always reliable and committed, he elevated our research approach and improved user experience.',
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
              Trusted by industry leaders and collaborators who&#39;ve
              experienced exceptional results:
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
                    {Array(3)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className='flex-shrink-0 w-96 bg-card rounded-xl p-5 shadow-lg border border-border'
                        >
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
                    {Array(3)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className='flex-shrink-0 w-96 bg-card rounded-xl p-5 shadow-lg border border-border'
                        >
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

                <div className='flex animate-marquee-reverse-ultra-fast sm:animate-marquee-reverse-fast lg:animate-marquee-reverse'>
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

                <div className='flex animate-marquee-ultra-fast sm:animate-marquee-fast lg:animate-marquee'>
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
