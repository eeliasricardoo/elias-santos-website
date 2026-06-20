
interface AnimatedBadgeProps {
  text: string;
  animationDelay?: number;
}

export function AnimatedBadge({
  text,
  animationDelay = 0,
}: AnimatedBadgeProps) {
  return (
    <div
      className='inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-in fade-in zoom-in-95 duration-300 fill-mode-forwards opacity-0'
      style={{
        animationDelay: `${animationDelay}s`,
        animationFillMode: 'forwards'
      }}
    >
      <span className='text-sm font-medium text-primary'>{text}</span>
    </div>
  );
}
