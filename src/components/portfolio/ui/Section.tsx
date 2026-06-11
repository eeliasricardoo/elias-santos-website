'use client';


interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      <h2 className='flex items-center gap-3 text-2xl md:text-3xl font-bold mb-2'>
        <span
          className='inline-block h-6 w-1.5 rounded-full flex-shrink-0'
          style={{ backgroundColor: 'var(--brand, #d9f99d)' }}
        />
        {title}
      </h2>
      {children}
    </section>
  );
}
