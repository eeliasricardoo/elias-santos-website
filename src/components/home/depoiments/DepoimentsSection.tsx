

import { TestimonialCard } from '../ui';
import { useMounted } from '@/hooks/use-mounted';
import { Marquee } from '@/components/magicui/marquee';
import { usePerformance } from '@/hooks/use-performance-tier';
import { useIntersectionPause } from '@/hooks/use-intersection-pause';
import { useInViewOnce } from '@/hooks/use-optimized-inview';

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
      "Elias was my right hand as UX Researcher during my management at Toolzz, and I couldn't be more grateful to have him by my side. His passion for understanding users and his sharp analytical skills were essential for our projects. Always reliable and committed, he elevated our research approach and improved user experience.",
    avatarGradient: 'from-emerald-400 to-teal-400',
    date: 'August 16, 2023',
    image: '/depoiments/bruno.jpeg',
  },
];

export function DepoimentsSection() {
  const mounted = useMounted();
  const performanceTier = usePerformance();
  const { ref, isVisible } = useIntersectionPause();
  const { ref: headerRef, isInView: headerInView } = useInViewOnce();
  const { ref: contentRef, isInView: contentInView } = useInViewOnce({ rootMargin: '0px' });

  return (
    <section id='depoiments' className='relative py-20 px-4' ref={ref}>
      <div className='max-w-6xl mx-auto space-y-12'>
        {/* Header */}
        <div
          ref={headerRef as any}
          className={`text-center space-y-6 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {!mounted ? (
            <div className='h-8 bg-muted/20 rounded animate-pulse max-w-2xl mx-auto'></div>
          ) : (
            <h2 className='sm:text-2xl font-regular text-foreground tracking-tight'>
              Trusted by industry leaders and collaborators who&#39;ve
              experienced exceptional results:
            </h2>
          )}
        </div>

        {/* Marquee com depoimentos - Uma única linha infinita */}
        <div
          ref={contentRef as any}
          className={`relative transition-all duration-700 delay-200 ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
        >
          <div className='relative'>
            {/* Gradientes nas bordas */}
            <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none' />
            <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none' />

            {/* ✅ Single marquee for high performance, native scroll for others */}
            {performanceTier === 'high' ? (
              <Marquee
                pauseOnHover
                repeat={4}
                className="[--duration:40s]"
                style={{ animationPlayState: isVisible ? 'running' : 'paused' }}
              >
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </Marquee>
            ) : (
              <div
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-4 -mx-4 scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="snap-center shrink-0 w-[300px] md:w-[350px]">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section >
  );
}
