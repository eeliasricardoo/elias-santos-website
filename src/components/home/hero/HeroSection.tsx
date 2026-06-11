import { HeroContent } from './HeroContent';
import { HeroPhoto } from './HeroPhoto';
import { SkillsTicker } from './SkillsTicker';

export function HeroSection() {
  return (
    <section className='relative min-h-[calc(100vh-40px)] flex flex-col overflow-hidden'>
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />

      {/* Lime glow top-right */}
      <div className="absolute top-[-100px] right-[-100px] w-[700px] h-[700px] bg-electric/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center translate-y-8">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_440px] gap-12 lg:gap-16 items-center min-h-[calc(100vh-40px)] py-32 lg:py-0">
            <HeroContent />
            <HeroPhoto />
          </div>
        </div>
      </div>

      {/* Skills ticker at the bottom */}
      <SkillsTicker />
    </section>
  );
}
