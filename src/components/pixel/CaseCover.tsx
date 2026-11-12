import type { StoryProject } from '@/components/landing/story-data';
import { ProjectWireframe } from '@/components/portfolio/ui';
import { CatalogCover } from '@/components/portfolio/netflix/mocks';

/** Cases that cannot show real screens get a purpose-built mock, keyed by project index. */
const MOCK_COVERS: Record<string, () => React.ReactNode> = {
    '03': CatalogCover,
};

/**
 * Landing-style cover: the product's name and a one-line pitch on a brand
 * gradient, with the real screenshot in a window beside it. Fills its parent.
 */
function HeroCover({ project }: { project: StoryProject }) {
    const hero = project.hero!;
    return (
        <div className="absolute inset-0 flex flex-col text-white" style={{ background: `linear-gradient(160deg, ${hero.from} 0%, ${hero.to} 100%)` }}>
            <div className="flex shrink-0 items-center justify-between px-[5%] pt-[3%] sm:pt-[3.5%]">
                <span className="text-[10px] sm:text-xs font-bold tracking-wide">{project.title}</span>
                <span className="rounded-full bg-white px-2 py-0.5 sm:py-1 text-[8px] sm:text-[9px] font-medium uppercase tracking-wider text-black">Open</span>
            </div>

            <div className="flex min-h-0 flex-1 items-center gap-[4%] pb-[4%] pl-[5%]">
                <div className="flex w-[40%] sm:w-[34%] shrink-0 flex-col items-start gap-1.5 sm:gap-2.5">
                    <p className="font-pixel text-[clamp(11px,3.8cqw,28px)] font-bold leading-[1.12]">{hero.headline}</p>
                    <p className="text-[clamp(8px,1.6cqw,12px)] leading-tight sm:leading-snug text-white/70 line-clamp-3 sm:line-clamp-none">{hero.sub}</p>
                </div>

                {/* The window runs off the right edge, like a product shot on a landing page. */}
                <div className="h-[88%] sm:h-[86%] min-w-0 flex-1 overflow-hidden rounded-l-md border border-r-0 border-white/20 bg-[#0b0b0e] shadow-2xl">
                    <div className="flex items-center gap-1 border-b border-white/10 px-2 py-1 sm:py-1.5">
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
 * Card cover: the product fills the whole card, edge to edge. In order of
 * preference: a purpose-built mock, a landing-style hero around the real
 * screenshot, the bare screenshot, or the generic coded wireframe.
 */
export function CaseCover({ project, accent, className = '' }: { project: StoryProject; accent: string; className?: string }) {
    const Mock = MOCK_COVERS[project.index];
    return (
        <a href={project.link} className={`px-cover relative block aspect-[16/10] overflow-hidden rounded-xl bg-[#0a0a0b] ${className}`} tabIndex={-1} aria-hidden="true">
            <div className="px-cover__shot absolute inset-0 [container-type:inline-size]">
                {Mock ? (
                    <Mock />
                ) : project.hero && project.cover ? (
                    <HeroCover project={project} />
                ) : project.cover ? (
                    <img src={project.cover} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-top" />
                ) : (
                    <ProjectWireframe title={project.title} accent={accent} />
                )}
            </div>
        </a>
    );
}
