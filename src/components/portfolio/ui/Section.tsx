'use client';


interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      <h2 className='flex items-center gap-3 text-2xl md:text-3xl mb-2'>
        {title}
      </h2>
      {children}
    </section>
  );
}
