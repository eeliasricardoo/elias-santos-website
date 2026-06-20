import { HeroContent } from './HeroContent';
import { HeroPhoto } from './HeroPhoto';
import { SkillsTicker } from './SkillsTicker';

export function HeroSection() {
  return (
    <section className='relative min-h-[calc(100vh-40px)] flex flex-col overflow-hidden'>
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />

      {/* Cyan glow top-right (behind the photo) */}
      <div className="absolute top-[-100px] right-[-100px] w-[700px] h-[700px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      {/* Violet counter-glow bottom-left for balance */}
      <div className="absolute bottom-[-150px] left-[-150px] w-[600px] h-[600px] bg-brand-violet/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center lg:translate-y-8">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_440px] gap-8 lg:gap-16 items-center lg:min-h-[calc(100vh-40px)] pt-8 pb-12 sm:py-20 lg:py-0">
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
