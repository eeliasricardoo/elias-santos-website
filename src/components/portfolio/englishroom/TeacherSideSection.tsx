'use client';

import { motion } from 'framer-motion';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { BrowserFrame } from '../ui/BrowserFrame';
import { SectionHeading } from './SectionHeading';

const showcases = [
  {
    route: '/dashboard/availability',
    label: 'Teacher · Scheduling',
    title: 'Set recurring availability',
    description: 'Teachers define their weekly schedule in their own timezone. The booking calendar every student sees is generated directly from this — students can only book inside open slots.',
    image: '/portfolios/englishroom/t_availability_lt.webp',
  },
  {
    route: '/dashboard',
    label: 'Teacher · Roster',
    title: 'Run a teaching practice',
    description: 'A teacher home with confirmed students, upcoming sessions, lesson history, and roster progress — the operations side of the marketplace, in one dashboard.',
    image: '/portfolios/englishroom/t_dashboard_lt.webp',
  },
];

export function TeacherSideSection() {
  return (
    <section className="flex flex-col gap-10 border-t border-border/40 pt-12">
      <SectionHeading
        eyebrow="The other side of the marketplace"
        index={8}
        title="Teachers run their own operation"
        description="The same product serves the supply side: teachers set recurring weekly availability, and students can only book inside those slots. Rosters, lesson history, and prep all live in one dashboard."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {showcases.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col gap-4"
          >
            <BrowserFrame route={s.route}>
              <ImageLightbox
                src={s.image}
                alt={s.title}
                width={1000}
                height={680}
                className="w-full object-cover object-top cursor-pointer"
                sizes="(max-width: 768px) 100vw, 440px"
                quality={82}
              />
            </BrowserFrame>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>{s.label}</p>
              <h3 className="mt-1.5 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed text-[15px]">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
