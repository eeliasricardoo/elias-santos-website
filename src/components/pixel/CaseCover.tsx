import type { StoryProject } from '@/components/landing/story-data';
import { ProjectWireframe } from '@/components/portfolio/ui';
import { CatalogCover } from '@/components/portfolio/netflix/mocks';

/** Cases that cannot show real screens get a purpose-built mock, keyed by project index. */
const MOCK_COVERS: Record<string, () => React.ReactNode> = { '03': CatalogCover };

/**
 * Landing-style cover: the product's name and a one-line pitch on a brand
 * gradient, with the real screenshot in a window beside it. Fills its parent.
 */
function HeroCover({ project }: { project: StoryProject }) {
    const hero = project.hero!;
    return (
        <div className="absolute inset-0 flex flex-col text-white" style={{ background: `linear-gradient(160deg, ${hero.from} 0%, ${hero.to} 100%)` }}>
            <div className="flex shrink-0 items-center justify-between px-[5%] pt-[3.5%]">
                <span className="text-[10px] font-bold tracking-wide">{project.title}</span>
                <span className="rounded-full bg-white px-2 py-1 text-[8px] font-medium uppercase tracking-wider text-black">Open</span>
            </div>

            <div className="flex min-h-0 flex-1 items-center gap-[4%] pb-[4%] pl-[5%]">
                <div className="flex w-[38%] shrink-0 flex-col items-start gap-2.5">
                    <p className="font-pixel text-[clamp(14px,4.2cqw,30px)] font-bold leading-[1.08]">{hero.headline}</p>
                    <p className="text-[clamp(8px,1.7cqw,12px)] leading-snug text-white/70">{hero.sub}</p>
                </div>

                {/* The window runs off the right edge, like a product shot on a landing page. */}
                <div className="h-[80%] min-w-0 flex-1 overflow-hidden rounded-l-md border border-r-0 border-white/20 bg-[#0b0b0e] shadow-2xl">
                    <div className="flex items-center gap-1 border-b border-white/10 px-2 py-1.5">
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                    </div>
                    <img src={project.cover} alt="" loading="lazy" decoding="async" className="block h-full w-full object-cover object-left-top" />
                </div>
            </div>
        </div>
    );
}

/**
 * Card cover: a floating window centred on a tinted canvas. Inside it, in order
 * of preference: a purpose-built mock, a landing-style hero around the real
 * screenshot, the bare screenshot, or the generic coded wireframe.
 */
export function CaseCover({ project, accent, className = '' }: { project: StoryProject; accent: string; className?: string }) {
    const Mock = MOCK_COVERS[project.index];
    const framed = Mock || (project.hero && project.cover) || !project.cover;
    return (
        <a
            href={project.link}
            className={`px-cover relative block aspect-[16/10] overflow-hidden rounded-xl ${className}`}
            style={{ backgroundColor: project.tint }}
            tabIndex={-1}
            aria-hidden="true"
        >
            <div className="px-cover__shot absolute inset-x-[8%] top-1/2 -translate-y-1/2 overflow-hidden rounded-lg">
                {framed ? (
                    <div className="relative aspect-[16/10] bg-[#0a0a0b] [container-type:inline-size]">
                        {Mock ? <Mock /> : project.hero ? <HeroCover project={project} /> : <ProjectWireframe title={project.title} accent={accent} />}
                    </div>
                ) : (
                    <img src={project.cover} alt="" loading="lazy" decoding="async" className="block h-auto w-full" />
                )}
            </div>
        </a>
    );
}
