

import { TestimonialCard } from '../ui';
import { useMounted } from '@/hooks/use-mounted';
import { Marquee } from '@/components/magicui/marquee';

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
    id: 0,
    name: 'Mark Tegtmeier',
    role: 'Co-founder @ Trailmerge',
    content:
      'Elias is a talented, knowledgable, and innovative designer and developer. He has brought a unique mix of strategic insight, future-facing expertise, and a highly collaborative approach to problem solving to our small team. He has been a loyal teammate, full of insights and versatility, and a joy to work alongside!',
    avatarGradient: 'from-zinc-500 to-zinc-700',
    date: 'December 19, 2025',
    image: '/testimonials/mark.jpeg',
  },
  {
    id: 1,
    name: 'Felipe Feliciano',
    role: 'PHP | Typescript | Javascript',
    content:
      'I worked with Elias and he is a designer who truly understands user experience. Lately he has been getting closer to code, developing a taste for understanding how everything works. This has made his work even more complete - understanding the technical side makes it much easier to pass the vision to the development team. He is someone who adds value, learns quickly and is always present in what the team needs.',
    avatarGradient: 'from-stone-500 to-stone-700',
    date: 'July 5, 2025',
    image: '/testimonials/feh.jpeg',
  },
  {
    id: 2,
    name: 'Nikolas Soares Faria',
    role: 'Creator of Toolzz and co-founder of Edulabzz',
    content:
      'I worked with Elias for years and can say without hesitation: he is an exceptional professional. A UX Designer with strategic vision, technical mastery and an incredible ability to transform complex problems into simple and efficient solutions. Additionally, he excels in front-end development, always collaborative with the product team, developers and stakeholders. He is committed, organized and proactive - one of those who elevates the level of any project.',
    avatarGradient: 'from-neutral-500 to-neutral-700',
    date: 'July 4, 2025',
    image: '/testimonials/niko.jpeg',
  },
  {
    id: 3,
    name: 'Rafael Mattara',
    role: 'Data Analyst | Product Owner | AI Test Analyst',
    content:
      'Elias is a phenomenal designer and very deadline and results oriented. He has deep knowledge in creation and critical sense that make him one of the most qualified professionals I had the pleasure of sharing part of my professional journey with! Knowledge hungry, he always studies and seeks to improve, dedicating part of his time to go beyond his tasks.',
    avatarGradient: 'from-slate-400 to-slate-600',
    date: 'July 4, 2025',
    image: '/testimonials/mattara.jpeg',
  },
  {
    id: 4,
    name: 'Gabriel Rosa',
    role: 'Video Editor | Motion Designer | Marketing Coordinator',
    content:
      'Elias is a UX/UI designer with incredible talent for creating intuitive and functional interfaces. His knowledge in user experience and usability, combined with mastery of various tools, makes all the difference in the projects he works on. Beyond his refined aesthetic sense, he has a strategic vision that contributes to solutions aligned with both user needs and business objectives.',
    avatarGradient: 'from-zinc-400 to-zinc-600',
    date: 'March 10, 2025',
    image: '/testimonials/rosa.jpeg',
  },
  {
    id: 5,
    name: 'Angel Costa',
    role: 'Human Resources Analyst | Tech Recruiter | Talent Acquisition',
    content:
      'I want to recommend Elias, who worked as a UX/UI Designer and did an excellent job! He has great knowledge in interface design, user experience and usability, in addition to mastering various tools. He always showed great ability to create intuitive and functional visual solutions, aligned with both user needs and project objectives.',
    avatarGradient: 'from-stone-600 to-stone-800',
    date: 'February 28, 2025',
    image: '/testimonials/angel.jpeg',
  },
  {
    id: 6,
    name: 'Ariadyne Acunha',
    role: 'Project Manager | Marketing Project Management | Product Management',
    content:
      'Elias is definitely a problem solver! Strict to the deadlines, there is no problem that he cant solve haha beyond that he is a great professional who has strong UX skills and as a plus he is a great FULLSTACK, thanks for all the amazing job Elias!',
    avatarGradient: 'from-neutral-500 to-neutral-600',
    date: 'February 19, 2025',
    image: '/testimonials/ari.jpeg',
  },
  {
    id: 7,
    name: 'Bruno Torquato',
    role: 'Senior Art Director | GenAI Visual Director & Head of Design',
    content:
      "Elias was my right hand as UX Researcher during my management at Toolzz, and I couldn't be more grateful to have him by my side. His passion for understanding users and his sharp analytical skills were essential for our projects. Always reliable and committed, he elevated our research approach and improved user experience.",
    avatarGradient: 'from-slate-500 to-slate-700',
    date: 'August 16, 2023',
    image: '/testimonials/bruno.jpeg',
  },
];

export function TestimonialsSection() {
  const mounted = useMounted();

  const { ref, isVisible } = useIntersectionPause();
  const { ref: headerRef, isInView: headerInView } = useInViewOnce();
  const { ref: contentRef, isInView: contentInView } = useInViewOnce({ rootMargin: '0px' });

  return (
    <section id='testimonials' className='relative py-20 px-4' ref={ref}>
      <div className='max-w-6xl mx-auto space-y-12'>
        {/* Header */}
        <div
          ref={headerRef as any}
          className={`text-center space-y-6 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className='font-mono text-xs uppercase tracking-widest text-muted-foreground'>
            <span className='text-foreground font-semibold'>/03</span> Testimonials
          </span>
          <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-snug max-w-3xl mx-auto'>
            I could tell you I&#39;m collaborative and ship fast.
            Here&#39;s the same thing from people who&#39;ve actually worked with me:
          </h2>
        </div>

        {/* Marquee com depoimentos - Uma única linha infinita */}
        <div
          ref={contentRef as any}
          className={`relative transition-all duration-700 delay-200 ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
        >
          <div className='relative'>
            {/* Gradientes nas bordas */}
            <div className='absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none' />
            <div className='absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none' />

            <div className="flex flex-col gap-6">
              <Marquee
                reverse
                pauseOnHover
                repeat={4}
                className="[--duration:40s]"
                style={{ animationPlayState: isVisible ? 'running' : 'paused' }}
              >
                {testimonials.slice(0, Math.ceil(testimonials.length / 2)).map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </Marquee>
              <Marquee
                pauseOnHover
                repeat={4}
                className="[--duration:40s]"
                style={{ animationPlayState: isVisible ? 'running' : 'paused' }}
              >
                {testimonials.slice(Math.ceil(testimonials.length / 2)).map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
