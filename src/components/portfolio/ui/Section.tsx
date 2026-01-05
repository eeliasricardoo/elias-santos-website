'use client';


interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      <h2 className='text-2xl font-semibold mb-2'>{title}</h2>
      {children}
    </section>
  );
}
