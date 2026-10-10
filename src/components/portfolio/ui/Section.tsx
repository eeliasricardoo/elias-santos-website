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
        <span
          className='inline-block h-4 w-4 flex-shrink-0 shadow-[0_0_0_3px_var(--px-line)]'
          style={{ backgroundColor: 'var(--brand, var(--px-gold))' }}
        />
        {title}
      </h2>
      {children}
    </section>
  );
}
