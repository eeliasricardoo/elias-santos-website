'use client';

import type { WritingArticle } from './pixel-copy';

interface CoverMeta {
    tint: string;
    category: string;
    headline: string;
    chip: string;
    graphic: 'ai-aura' | 'gamification' | 'omnichat' | 'ai-strategy' | 'edtech' | 'permissions' | 'forms' | 'ux-details';
}

const COVERS_META: Record<string, CoverMeta> = {
    'https://medium.com/@eeliasricardoo/a-ascens%C3%A3o-da-aura-por-que-ux-designers-s%C3%A3o-indispens%C3%A1veis-na-era-da-ia-2d2796224ff7': {
        tint: '#eaf0fa',
        category: 'AI & UX // ESSAY',
        headline: 'Why UX Designers Are Indispensable in the AI Era',
        chip: 'Human intention > algorithms',
        graphic: 'ai-aura',
    },
    'https://medium.com/@eeliasricardoo/ux-case-study-ranking-system-for-gamification-e19d71259c15': {
        tint: '#f3eef8',
        category: 'GAMIFICATION // CASE STUDY',
        headline: 'Progression Loops That Drive True Retention',
        chip: 'Research first, points second',
        graphic: 'gamification',
    },
    'https://medium.com/@eeliasricardoo/case-de-ux-omnichanel-559d47c18120': {
        tint: '#eef4f1',
        category: 'OMNICHAT // EFFICIENCY',
        headline: 'Cutting Agent Triage Waiting Times by 22%',
        chip: '14.4s first response time',
        graphic: 'omnichat',
    },
    'https://medium.com/@eeliasricardoo/intelig%C3%AAncia-artificial-ux-e-automa%C3%A7%C3%A3o-8674c1ede08b': {
        tint: '#faf2ea',
        category: 'AI STRATEGY // WORKFLOW',
        headline: 'Amplifying Human Intuition, Not Replacing It',
        chip: 'Discovery with better questions',
        graphic: 'ai-strategy',
    },
    'https://medium.com/@eeliasricardoo/feature-ux-edi%C3%A7%C3%A3o-de-respostas-em-provas-e-atividades-avaliativas-3f836907ab1e': {
        tint: '#eff3f9',
        category: 'EDTECH // USABILITY',
        headline: 'Frictionless Exam & Assessment Answer Editing',
        chip: 'Zero data loss & clarity',
        graphic: 'edtech',
    },
    'https://medium.com/@eeliasricardoo/case-de-ux-permissionamento-de-conte%C3%BAdo-no-omnichat-cf21cb548484': {
        tint: '#eaf3f5',
        category: 'B2B SAAS // GOVERNANCE',
        headline: 'Granular Content Governance for High-Volume Teams',
        chip: 'Role-based access matrix',
        graphic: 'permissions',
    },
    'https://medium.com/@eeliasricardoo/todos-n%C3%B3s-sabemos-que-preencher-um-formul%C3%A1rio-%C3%A9-um-p%C3%A9-na-roda-a87630f2a148': {
        tint: '#f6eff3',
        category: 'FORMS // USABILITY',
        headline: 'Eliminating Friction in Long Form Journeys',
        chip: '-40% abandonment pattern',
        graphic: 'forms',
    },
    'https://medium.com/@eeliasricardoo/pequenos-detalhes-podem-mudar-a-experi%C3%AAncia-do-usu%C3%A1rio-case-ux-f2943e0609f7': {
        tint: '#f1f3f6',
        category: 'UX RESEARCH // MICROCOPY',
        headline: 'How Micro-interactions Transform Product Value',
        chip: 'Contextual feedback loops',
        graphic: 'ux-details',
    },
};

function CoverGraphic({ type }: { type: CoverMeta['graphic'] }) {
    switch (type) {
        case 'ai-aura':
            return (
                <div className="flex flex-col gap-1.5 p-2.5 text-[9px] font-mono">
                    <div className="flex items-center justify-between text-white/50 border-b border-white/10 pb-1">
                        <span>AURA CORE</span>
                        <span className="text-[#3b82f6] animate-pulse">● ACTIVE</span>
                    </div>
                    <div className="flex items-center gap-1.5 pt-1">
                        <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
                        <span className="text-white/80 font-sans text-[10px]">Intent-based UI</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-400 w-3/4 rounded-full" />
                    </div>
                </div>
            );
        case 'gamification':
            return (
                <div className="flex flex-col gap-1.5 p-2.5 text-[9px] font-mono">
                    <div className="flex items-center justify-between text-white/50 border-b border-white/10 pb-1">
                        <span>XP LEADERBOARD</span>
                        <span className="text-amber-400">★ TOP 1%</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 px-2 py-1 rounded border border-white/10">
                        <span className="text-white/90">01. Marco S.</span>
                        <span className="text-amber-400 font-bold">+8,890 XP</span>
                    </div>
                    <div className="flex items-center justify-between px-2 text-white/40">
                        <span>02. Student #4</span>
                        <span>7,795 XP</span>
                    </div>
                </div>
            );
        case 'omnichat':
            return (
                <div className="flex flex-col gap-1.5 p-2.5 text-[9px] font-mono">
                    <div className="flex items-center justify-between text-white/50 border-b border-white/10 pb-1">
                        <span>QUEUE TRIAGE</span>
                        <span className="text-emerald-400">-22% TIME</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 px-2 py-1 rounded border border-emerald-500/30">
                        <span className="text-emerald-300">Ticket #8412</span>
                        <span className="rounded bg-emerald-500/20 px-1 py-0.5 text-[8px] text-emerald-300">Claimed</span>
                    </div>
                    <div className="text-[8px] text-white/40 pt-0.5">Wait: 14.4s · CSAT 4.3/5</div>
                </div>
            );
        case 'ai-strategy':
            return (
                <div className="flex flex-col gap-1.5 p-2.5 text-[9px] font-mono">
                    <div className="flex items-center justify-between text-white/50 border-b border-white/10 pb-1">
                        <span>FLOW ARCHITECTURE</span>
                        <span className="text-cyan-400">v2.4</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span className="text-white/80">User Need → Prototype</span>
                    </div>
                    <div className="text-[8px] text-white/40">Speed: 4x · Validation: 100%</div>
                </div>
            );
        case 'edtech':
            return (
                <div className="flex flex-col gap-1.5 p-2.5 text-[9px] font-mono">
                    <div className="flex items-center justify-between text-white/50 border-b border-white/10 pb-1">
                        <span>ASSESSMENT OS</span>
                        <span className="text-indigo-400">SAVED</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 px-2 py-1 rounded">
                        <span className="text-white/80">Question 04 / 20</span>
                        <span className="text-indigo-400 font-bold">Edited ✓</span>
                    </div>
                    <div className="text-[8px] text-white/40">Audit log: instant recovery</div>
                </div>
            );
        case 'permissions':
            return (
                <div className="flex flex-col gap-1.5 p-2.5 text-[9px] font-mono">
                    <div className="flex items-center justify-between text-white/50 border-b border-white/10 pb-1">
                        <span>SECURITY MATRIX</span>
                        <span className="text-purple-400">RBAC</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 px-2 py-1 rounded">
                        <span className="text-white/80">Role: Supervisor</span>
                        <span className="rounded bg-purple-500/20 px-1 py-0.5 text-[8px] text-purple-300">Granted</span>
                    </div>
                    <div className="text-[8px] text-white/40">Zero privilege leakage</div>
                </div>
            );
        case 'forms':
            return (
                <div className="flex flex-col gap-1.5 p-2.5 text-[9px] font-mono">
                    <div className="flex items-center justify-between text-white/50 border-b border-white/10 pb-1">
                        <span>STEPPER FLOW</span>
                        <span className="text-rose-400">STEP 2/3</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 px-2 py-1 rounded">
                        <span className="text-white/80">Inline Validation</span>
                        <span className="text-emerald-400">Valid ✓</span>
                    </div>
                    <div className="text-[8px] text-white/40">Completion rate: +38%</div>
                </div>
            );
        case 'ux-details':
        default:
            return (
                <div className="flex flex-col gap-1.5 p-2.5 text-[9px] font-mono">
                    <div className="flex items-center justify-between text-white/50 border-b border-white/10 pb-1">
                        <span>MICRO-INTERACTION</span>
                        <span className="text-sky-400">FEEDBACK</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 px-2 py-1 rounded">
                        <span className="text-white/80">Contextual Tooltip</span>
                        <span className="text-sky-400">Live</span>
                    </div>
                    <div className="text-[8px] text-white/40">Clarity index: 94%</div>
                </div>
            );
    }
}

export function WritingCover({ article }: { article: WritingArticle }) {
    const meta = COVERS_META[article.url] || {
        tint: '#f2f3f5',
        category: 'ARTICLE // MEDIUM',
        headline: article.title,
        chip: article.tag,
        graphic: 'ux-details',
    };

    return (
        <div
            className="px-cover relative block aspect-[16/10] w-full overflow-hidden border-b border-[var(--px-line)] transition-colors"
            style={{ backgroundColor: meta.tint }}
            aria-hidden="true"
        >
            <div className="px-cover__shot absolute inset-[6%] overflow-hidden rounded-lg bg-[#0c0e14] border border-white/10 shadow-xl p-3 sm:p-3.5 flex flex-col justify-between text-white">
                {/* Micro Header */}
                <div className="flex items-center justify-between shrink-0">
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-white/50 uppercase">
                        {meta.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                        <span className="flex items-center gap-1 font-mono text-[9px] text-white/80">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            {article.language}
                        </span>
                        <span className="rounded bg-white/10 px-1.5 py-0.5 text-[8px] font-mono uppercase tracking-wider text-white/60">
                            Medium
                        </span>
                    </div>
                </div>

                {/* Body: Split Layout */}
                <div className="grid grid-cols-12 gap-2 sm:gap-2.5 items-center my-auto min-h-0">
                    <div className="col-span-7 flex flex-col items-start gap-1 sm:gap-1.5 min-w-0">
                        <p className="font-pixel text-[11px] sm:text-[12px] font-bold leading-tight text-white line-clamp-2 sm:line-clamp-3">
                            {meta.headline}
                        </p>
                        <span className="inline-flex items-center rounded border border-white/15 bg-white/5 px-1.5 py-0.5 text-[8px] sm:text-[9px] text-white/70 font-mono line-clamp-1">
                            {meta.chip}
                        </span>
                    </div>

                    <div className="col-span-5 rounded border border-white/10 bg-[#141720] shadow-inner overflow-hidden">
                        <div className="flex items-center gap-1 border-b border-white/10 px-1.5 py-0.5 bg-white/5">
                            <span className="h-1 w-1 rounded-full bg-white/30" />
                            <span className="h-1 w-1 rounded-full bg-white/30" />
                            <span className="h-1 w-1 rounded-full bg-white/30" />
                        </div>
                        <CoverGraphic type={meta.graphic} />
                    </div>
                </div>
            </div>
        </div>
    );
}
