'use client';
import { Marquee } from '@/components/magicui/marquee';

const skills = [
  'UX Research',
  'UI Design',
  'React',
  'TypeScript',
  'Figma',
  'Prototyping',
  'Design Systems',
  'Cursor AI',
  'Lovable',
  'Next.js',
  'Tailwind CSS',
  'A/B Testing',
  'User Interviews',
  'Analytics',
  'Framer Motion',
  'AI-Assisted Workflows',
];

export function SkillsTicker() {
  return (
    <div className="relative z-10 border-t border-border/30 py-5 overflow-hidden">
      <Marquee className="[--duration:50s]" repeat={3}>
        {skills.map((skill) => (
          <span
            key={skill}
            className="flex items-center gap-5 font-mono text-xs uppercase tracking-widest text-muted-foreground/40 mx-4"
          >
            {skill}
            <span className="w-1 h-1 bg-electric/50 rounded-full flex-shrink-0" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
