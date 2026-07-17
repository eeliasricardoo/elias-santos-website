'use client';

import { motion } from 'framer-motion';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { BrowserFrame } from '../ui/BrowserFrame';
import { SectionHeading } from './SectionHeading';

interface Showcase {
  route: string;
  step: string;
  title: string;
  description: string;
  image: string;
}

const showcases: Showcase[] = [
  {
    route: '/dashboard',
    step: 'Step 01 · Student',
    title: 'Land in a focused home',
    description: 'The student dashboard leads with what matters next — progress, XP on the learning trail, and a single primary action.',
    image: '/portfolios/englishroom/s_dashboard_lt.webp',
  },
  {
    route: '/teachers',
    step: 'Step 02 · Student',
    title: 'Browse vetted teachers',
    description: 'Search the marketplace by name, specialty, and CEFR level. Every teacher is approved through an admin review flow.',
    image: '/portfolios/englishroom/s_teachers_lt.webp',
  },
  {
    route: '/teachers/[teacherId]',
    step: 'Step 03 · Student',
    title: 'Pick a time and book',
    description: 'Open a profile, see live availability resolved to your timezone, and book a slot — no email back-and-forth, no timezone math.',
    image: '/portfolios/englishroom/s_teacher_profile_lt.webp',
  },
  {
    route: '/dashboard/bookings',
    step: 'Step 04 · Student',
    title: 'Track every lesson',
    description: 'Upcoming and past lessons in one place, each with a real status — confirmed, completed — synced from the booking engine.',
    image: '/portfolios/englishroom/s_bookings_lt.webp',
  },
];

function ShowcaseRow({ s, reversed }: { s: Showcase; reversed: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="grid gap-8 md:grid-cols-2 md:items-center"
    >
      <BrowserFrame route={s.route} className={reversed ? 'md:order-2' : ''}>
        <ImageLightbox
          src={s.image}
          alt={s.title}
          width={1000}
          height={680}
          className="w-full object-cover object-top cursor-pointer"
          sizes="(max-width: 768px) 100vw, 460px"
          quality={82}
        />
      </BrowserFrame>
      <div className={reversed ? 'md:order-1' : ''}>
        <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>{s.step}</p>
        <h3 className="mt-2 text-2xl font-bold text-foreground">{s.title}</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">{s.description}</p>
      </div>
    </motion.div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="flex flex-col gap-12 border-t border-border/40 pt-12">
      <SectionHeading
        eyebrow="How it works"
        index={5}
        title="From signing in to a booked lesson"
        description="Real screens from the running product — the full self-serve path a student takes, with no support tickets in between."
      />

      <div className="flex flex-col gap-14">
        {showcases.map((s, i) => (
          <ShowcaseRow key={s.title} s={s} reversed={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
