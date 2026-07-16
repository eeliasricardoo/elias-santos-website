'use client';

import { motion } from 'framer-motion';
import { 
    Play, 
    Sparkles, 
    MessageSquare, 
    Send, 
    Plus, 
    Layers, 
    Type, 
    Image as ImageIcon, 
    Video, 
    Users, 
    Check, 
    Tv, 
    MousePointer,
    FileText,
    TrendingUp,
    PhoneCall,
    Terminal,
    ArrowRight
} from 'lucide-react';

interface ProjectWireframeProps {
    title: string;
    accent?: string;
    className?: string;
}

function getProjectKey(title: string): string {
    const t = title.toLowerCase();
    if (t.includes('drama') || t.includes('netflix')) return 'dramafix';
    if (t.includes('emailflow') || t.includes('magic-builder') || t.includes('sfmc') || t.includes('flow')) return 'emailflow';
    if (t.includes('english')) return 'englishroom';
    if (t.includes('ranking')) return 'ranking';
    if (t.includes('support') || t.includes('queue') || t.includes('fila')) return 'support';
    if (t.includes('chat') || t.includes('ventus')) return 'chatai';
    if (t.includes('portfolio') || t.includes('site') || t.includes('meu-site') || t.includes('ux engineer')) return 'portfolio';
    return 'generic';
}

export function ProjectWireframe({ title, accent = 'var(--accent, #7FB0C4)', className }: ProjectWireframeProps) {
    const key = getProjectKey(title);

    // Clean light grey border and white paper bg. No black borders or dark modules inside.
    const containerClasses = "relative w-full h-full min-h-[220px] select-none overflow-hidden bg-white border border-neutral-200 font-sans text-neutral-500 shadow-sm";
    
    // Clean blueprint-style grid line background (hashtag/grid effect)
    const LineGrid = () => (
        <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: '16px 16px',
            }}
        />
    );

    // 1. DramaFlix Wireframe (Accessibility Streaming TV App)
    if (key === 'dramafix') {
        return (
            <div className={containerClasses}>
                <LineGrid />
                {/* Navbar */}
                <div className="absolute top-0 left-0 right-0 h-9 border-b border-neutral-200 bg-white/95 backdrop-blur-sm flex items-center justify-between px-3 z-10">
                    <div className="flex items-center gap-2">
                        <Tv className="w-4 h-4" style={{ color: accent }} />
                        <span className="text-[10px] font-bold tracking-wider" style={{ color: accent }}>DRAMAFLIX</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <div className="h-1.5 w-8 rounded bg-neutral-100" />
                        <div className="h-1.5 w-8 rounded bg-neutral-100" />
                        <div className="px-1.5 py-0.5 rounded text-[8px] border border-neutral-200 bg-neutral-50 font-mono scale-90 text-neutral-400 font-semibold shadow-sm">ACCESSIBILITY: ON</div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="pt-10 p-3 h-full flex flex-col gap-2.5">
                    {/* Hero Movie Banner */}
                    <div className="relative flex-1 rounded border border-neutral-200 bg-neutral-50/40 overflow-hidden p-3 flex flex-col justify-end shadow-sm">
                        <div className="absolute right-3 top-3 w-6 h-6 rounded-full border border-neutral-200 bg-white flex items-center justify-center shadow-sm">
                            <Play className="w-3 h-3 fill-neutral-650 text-neutral-600 translate-x-0.5" />
                        </div>
                        <div className="flex flex-col gap-1.5 max-w-[70%]">
                            <div className="h-3 rounded bg-neutral-300 w-2/3" />
                            <div className="h-1.5 rounded bg-neutral-200 w-full" />
                            <div className="h-1.5 rounded bg-neutral-200 w-5/6" />
                        </div>
                        {/* Play Button - Large High-contrast target */}
                        <div 
                            className="absolute right-3 bottom-3 px-3 py-1.5 rounded font-bold text-[9px] tracking-wider text-white flex items-center gap-1 shadow-sm transition-transform duration-300 group-hover:scale-105"
                            style={{ backgroundColor: accent }}
                        >
                            <Play className="w-2.5 h-2.5 fill-white text-white" />
                            WATCH
                        </div>
                    </div>

                    {/* Movie Row */}
                    <div className="h-14 flex gap-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div 
                                key={i} 
                                className="flex-1 rounded border border-neutral-200 bg-white relative overflow-hidden group-hover:border-neutral-300 transition-colors shadow-sm"
                            >
                                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                    <Play className="w-4 h-4 text-neutral-400" />
                                </div>
                                <div className="absolute bottom-1.5 left-1 right-1 h-1.5 rounded bg-neutral-100" />
                                {/* Accessibility indicator highlight on the first card */}
                                {i === 1 && (
                                    <div className="absolute inset-0 border-2 animate-pulse shadow-sm" style={{ borderColor: accent }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // 2. EmailFlow Pro (Visual SFMC Drag-and-Drop Builder)
    if (key === 'emailflow') {
        return (
            <div className={containerClasses}>
                <LineGrid />
                {/* Visual Workspace Grid */}
                <div className="absolute inset-0 flex">
                    {/* Left Sidebar - Design Blocks */}
                    <div className="w-16 border-r border-neutral-200 bg-neutral-50/80 p-1.5 flex flex-col gap-1.5 z-10">
                        <div className="text-[7px] font-mono tracking-wider text-neutral-400 uppercase mb-1">BLOCKS</div>
                        <div className="h-6 rounded border border-neutral-200 bg-white flex flex-col items-center justify-center gap-0.5 text-[6px] shadow-sm">
                            <Type className="w-2.5 h-2.5 text-neutral-500" />
                            <span className="text-neutral-400 font-medium">TEXT</span>
                        </div>
                        <div className="h-6 rounded border border-neutral-200 bg-white flex flex-col items-center justify-center gap-0.5 text-[6px] text-neutral-400 shadow-sm">
                            <ImageIcon className="w-2.5 h-2.5 text-neutral-450" />
                            <span>IMAGE</span>
                        </div>
                        <div 
                            className="h-6 rounded border bg-white flex flex-col items-center justify-center gap-0.5 text-[6px] transition-colors shadow-sm font-semibold"
                            style={{ borderColor: accent, color: accent }}
                        >
                            <Layers className="w-2.5 h-2.5" />
                            <span>BUTTON</span>
                        </div>
                    </div>

                    {/* Center - Email Builder Canvas */}
                    <div className="flex-1 p-2 flex flex-col items-center justify-center overflow-hidden">
                        <div className="w-40 border border-neutral-200 bg-white rounded flex flex-col shadow-sm overflow-hidden scale-95 origin-center">
                            {/* Email Header */}
                            <div className="h-4 border-b border-neutral-200 bg-neutral-50/20 flex items-center justify-center px-2">
                                <div className="h-1 rounded bg-neutral-200 w-12" />
                            </div>
                            
                            {/* Email Hero Image */}
                            <div className="h-12 border-b border-neutral-200 bg-neutral-50/10 relative flex items-center justify-center">
                                <div className="absolute inset-0 border border-neutral-200 m-1 flex items-center justify-center text-[7px] text-neutral-300">
                                    <ImageIcon className="w-4 h-4 opacity-20" />
                                </div>
                            </div>

                            {/* Email Text Body */}
                            <div className="p-2 flex flex-col gap-1">
                                <div className="h-1.5 rounded bg-neutral-200 w-full" />
                                <div className="h-1.5 rounded bg-neutral-150 w-5/6" />
                            </div>

                            {/* Selected CTA Button being edited */}
                            <div className="p-1.5 pt-0 flex justify-center relative">
                                <div 
                                    className="px-4 py-1 text-[7px] font-bold rounded flex items-center justify-center text-white shadow-sm"
                                    style={{ backgroundColor: accent }}
                                >
                                    CLICK HERE
                                </div>
                                <div className="absolute -right-1 top-0 w-2 h-2 rounded bg-neutral-100 border border-neutral-300 shadow-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Floating AI Panel */}
                    <div className="absolute right-2 top-2 bottom-2 w-24 rounded border border-neutral-200 bg-white/95 backdrop-blur-sm p-1.5 flex flex-col gap-1.5 z-10 shadow-md transition-transform duration-300 group-hover:-translate-x-1">
                        <div className="flex items-center gap-1 text-[7px] font-bold text-neutral-700">
                            <Sparkles className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                            <span>AI TOOL</span>
                        </div>
                        <div className="h-[1px] bg-neutral-150 w-full" />
                        <div className="flex-1 flex flex-col gap-1 overflow-hidden">
                            <div className="text-[6px] bg-neutral-50 border border-neutral-200 p-1 rounded leading-normal text-neutral-500 font-medium">
                                &quot;Claim your offer today&quot;
                            </div>
                            <div className="text-[6px] bg-neutral-50/40 border border-dashed border-neutral-200 p-1 rounded scale-95 text-neutral-450">
                                &quot;Get my discount&quot;
                            </div>
                        </div>
                        <div 
                            className="h-3.5 rounded flex items-center justify-center text-[6px] font-bold text-white font-mono cursor-pointer shadow-sm animate-pulse"
                            style={{ backgroundColor: accent }}
                        >
                            APPLY
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 3. EnglishRoom Wireframe (WebRTC Classroom)
    if (key === 'englishroom') {
        return (
            <div className={containerClasses}>
                <LineGrid />
                <div className="absolute inset-0 flex p-2 gap-2">
                    {/* Left Column - Video Feeds */}
                    <div className="w-[35%] flex flex-col gap-2">
                        {/* Teacher Box */}
                        <div className="flex-1 rounded border border-neutral-200 bg-neutral-50 relative overflow-hidden flex flex-col items-center justify-center shadow-sm">
                            <Video className="w-5 h-5 opacity-20 text-neutral-400" />
                            {/* WebRTC Indicator badge */}
                            <div className="absolute left-1.5 top-1.5 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute" />
                                <span className="text-[6px] font-bold font-mono text-neutral-500 scale-90">TEACHER</span>
                            </div>
                            <div className="absolute bottom-1 left-1.5 h-2 w-16 bg-white border border-neutral-200 rounded flex items-center px-1 shadow-sm">
                                <div className="h-0.5 rounded bg-neutral-300 w-10" />
                            </div>
                        </div>
                        {/* Student Box */}
                        <div className="flex-1 rounded border border-neutral-200 bg-neutral-50/40 relative overflow-hidden flex flex-col items-center justify-center">
                            <Video className="w-5 h-5 opacity-15 text-neutral-400" />
                            <div className="absolute left-1.5 top-1.5 text-[6px] font-mono text-neutral-400">STUDENT</div>
                            <div className="absolute bottom-1 left-1.5 h-2 w-12 bg-white border border-neutral-200 rounded flex items-center px-1 shadow-sm">
                                <div className="h-0.5 rounded bg-neutral-300 w-8" />
                            </div>
                            {/* Audio wave indicator */}
                            <div className="absolute right-1.5 bottom-1 flex gap-0.5 items-end h-2">
                                <div className="w-0.5 h-1 bg-neutral-350 animate-pulse" />
                                <div className="w-0.5 h-2 bg-neutral-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                                <div className="w-0.5 h-1 bg-neutral-350 animate-pulse" style={{ animationDelay: '0.4s' }} />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Whiteboard Canvas */}
                    <div className="flex-1 rounded border border-neutral-200 bg-white p-2 flex flex-col shadow-sm">
                        <div className="flex items-center justify-between border-b border-neutral-100 pb-1.5 mb-1.5">
                            <div className="flex items-center gap-1.5">
                                <div className="h-2 w-2 rounded bg-neutral-100" />
                                <div className="h-1 rounded bg-neutral-250 w-16" />
                            </div>
                            <div className="flex gap-1">
                                <div className="w-2.5 h-2.5 rounded bg-neutral-50 flex items-center justify-center text-[5px] font-bold border border-neutral-200">A</div>
                                <div className="w-2.5 h-2.5 rounded border flex items-center justify-center text-[5px]" style={{ borderColor: accent, color: accent }}>✏️</div>
                            </div>
                        </div>
                        
                        {/* Whiteboard content area */}
                        <div className="flex-1 relative border border-dashed border-neutral-200 rounded bg-neutral-50/10 flex flex-col items-center justify-center p-2 text-center">
                            <div className="text-[8px] font-bold tracking-wider text-neutral-700 mb-1">VERB TO BE</div>
                            <div className="flex gap-2 items-center">
                                <div className="px-1.5 py-0.5 border border-neutral-200 rounded text-[6px] font-mono bg-white shadow-sm text-neutral-600">I</div>
                                <span className="text-[6px] text-neutral-350 font-bold">→</span>
                                <div 
                                    className="px-2 py-0.5 rounded text-[6px] font-mono text-white font-bold shadow-sm"
                                    style={{ backgroundColor: accent }}
                                >
                                    AM
                                </div>
                            </div>
                            <div className="flex gap-2 items-center mt-1">
                                <div className="px-1.5 py-0.5 border border-neutral-200 rounded text-[6px] font-mono bg-white shadow-sm text-neutral-400">YOU</div>
                                <span className="text-[6px] text-neutral-305">→</span>
                                <div className="px-2 py-0.5 border border-neutral-200 rounded text-[6px] font-mono text-neutral-500 bg-neutral-50 font-semibold shadow-sm">ARE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 4. Ranking Engine Wireframe (Gamification Dashboard) - Spacing and Border fixes
    if (key === 'ranking') {
        return (
            <div className={containerClasses}>
                <LineGrid />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    {/* Detailed Podium Area - Heights and padding adjusted to avoid overlap */}
                    <div className="flex items-end justify-center h-20 gap-3 border-b border-neutral-200 pb-2 shrink-0">
                        {/* 2nd Place */}
                        <div className="flex flex-col items-center w-12">
                            <div className="w-5 h-5 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-[6px] shadow-sm font-bold text-neutral-500">JD</div>
                            <span className="text-[5px] font-semibold text-neutral-400 mt-0.5">Julia D.</span>
                            <span className="text-[4px] font-mono text-neutral-450 leading-none">1,920 XP</span>
                            <div className="w-full bg-neutral-50 border border-neutral-200 rounded-t h-5 flex flex-col justify-between p-0.5 items-center mt-1 shadow-sm">
                                <span className="text-[6px] font-mono text-neutral-400 font-bold leading-none">2nd</span>
                                <div className="h-0.5 rounded bg-neutral-200 w-8" />
                            </div>
                        </div>

                        {/* 1st Place */}
                        <div className="flex flex-col items-center w-14 z-10">
                            {/* Restructuring spacing to keep ER inside card bounds and not touching stat cards */}
                            <div className="w-7 h-7 rounded-full border bg-white flex items-center justify-center text-[7px] font-bold shadow-sm" style={{ borderColor: accent, color: accent }}>
                                ER
                            </div>
                            <span className="text-[5.5px] font-bold text-neutral-700 mt-0.5">Elias R.</span>
                            <span className="text-[5px] font-mono font-bold leading-none" style={{ color: accent }}>2,480 XP</span>
                            <div 
                                className="w-full rounded-t h-9 flex flex-col justify-between p-0.5 items-center transition-all duration-300 group-hover:-translate-y-0.5 shadow-sm mt-1"
                                style={{ backgroundColor: `${accent}05`, border: `1px solid ${accent}` }}
                            >
                                <span className="text-[7px] font-mono font-bold leading-none" style={{ color: accent }}>1st</span>
                                <div className="h-0.5 rounded w-10" style={{ backgroundColor: accent }} />
                            </div>
                        </div>

                        {/* 3rd Place */}
                        <div className="flex flex-col items-center w-12">
                            <div className="w-5 h-5 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-[6px] shadow-sm font-bold text-neutral-500">MT</div>
                            <span className="text-[5px] font-semibold text-neutral-400 mt-0.5">Marc T.</span>
                            <span className="text-[4px] font-mono text-neutral-450 leading-none">1,550 XP</span>
                            <div className="w-full bg-neutral-50 border border-neutral-200 rounded-t h-4 flex flex-col justify-between p-0.5 items-center mt-1 shadow-sm">
                                <span className="text-[6px] font-mono text-neutral-400 font-bold leading-none">3rd</span>
                                <div className="h-0.5 rounded bg-neutral-200 w-8" />
                            </div>
                        </div>
                    </div>

                    {/* Table item list (Scroll-like rows) - Spacing optimized */}
                    <div className="flex-1 flex flex-col gap-1 mt-1 overflow-hidden min-h-0">
                        {/* Rank 4 */}
                        <div className="flex items-center justify-between bg-white p-1 px-2 rounded border border-neutral-200 shadow-sm shrink-0">
                            <div className="flex items-center gap-1.5">
                                <span className="text-[6px] font-mono text-neutral-400 w-3">4th</span>
                                <div className="w-4 h-4 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center text-[5.5px] font-bold text-neutral-500">AM</div>
                                <span className="text-[6px] font-semibold text-neutral-600">Alex M.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[5.5px] font-mono text-neutral-400">1,240 XP</span>
                                <Check className="w-2.5 h-2.5 text-emerald-500" />
                            </div>
                        </div>

                        {/* Rank 5 */}
                        <div className="flex items-center justify-between bg-white p-1 px-2 rounded border border-neutral-200 shadow-sm shrink-0">
                            <div className="flex items-center gap-1.5">
                                <span className="text-[6px] font-mono text-neutral-400 w-3">5th</span>
                                <div className="w-4 h-4 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center text-[5.5px] font-bold text-neutral-500">ST</div>
                                <span className="text-[6px] font-semibold text-neutral-600">Sarah T.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[5.5px] font-mono text-neutral-400">1,150 XP</span>
                                <Check className="w-2.5 h-2.5 text-emerald-500" />
                            </div>
                        </div>

                        {/* Rank 6 (Highlighted User Row) */}
                        <div 
                            className="flex items-center justify-between p-1 px-2 rounded border shadow-sm shrink-0 bg-white"
                            style={{ borderColor: `${accent}30` }}
                        >
                            <div className="flex items-center gap-1.5">
                                <span className="text-[6px] font-mono font-bold w-3" style={{ color: accent }}>6th</span>
                                <div className="w-4 h-4 rounded-full border bg-neutral-50 flex items-center justify-center text-[5.5px] font-bold" style={{ borderColor: accent, color: accent }}>YO</div>
                                <span className="text-[6px] font-bold text-neutral-700">You (Visitor)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[5.5px] font-mono font-bold" style={{ color: accent }}>1,080 XP</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 5. Support Queue Wireframe (Omnichannel Support desk)
    if (key === 'support') {
        return (
            <div className={containerClasses}>
                <LineGrid />
                <div className="absolute inset-0 flex">
                    {/* Left Sidebar - Channels & List */}
                    <div className="w-20 border-r border-neutral-200 bg-neutral-50/90 flex flex-col">
                        <div className="p-1 border-b border-neutral-200 flex items-center gap-1 justify-between bg-neutral-100/30">
                            <div className="h-1.5 rounded bg-neutral-250 w-10" />
                            <div className="w-1.5 h-1.5 rounded bg-neutral-250" />
                        </div>
                        <div className="flex-1 flex flex-col gap-1.5 p-1 overflow-hidden">
                            {/* Active urgent item */}
                            <div 
                                className="p-1.5 rounded border flex flex-col gap-0.5 cursor-pointer relative shadow-sm"
                                style={{ borderColor: `${accent}40`, backgroundColor: 'rgba(255,255,255,0.95)' }}
                            >
                                <div className="flex justify-between items-center">
                                    <div className="h-1 rounded bg-neutral-400 w-6" />
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" style={{ backgroundColor: accent }} />
                                    <span className="w-1.5 h-1.5 rounded-full absolute right-1.5 bg-red-500" style={{ backgroundColor: accent }} />
                                </div>
                                <div className="h-0.5 rounded bg-neutral-300 w-8" />
                                <div className="flex justify-between items-center mt-0.5 text-[5px] font-mono text-neutral-450 font-medium">
                                    <span>CHAT</span>
                                    <span>2.4m</span>
                                </div>
                            </div>
                            
                            {/* Static items */}
                            {[1, 2].map((i) => (
                                <div key={i} className="p-1 border border-neutral-200 rounded bg-white opacity-60 flex flex-col gap-0.5 scale-95 origin-left shadow-sm">
                                    <div className="h-1 rounded bg-neutral-250 w-6" />
                                    <div className="h-0.5 rounded bg-neutral-150 w-10" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Middle Column - Chat Thread Workspace */}
                    <div className="flex-1 flex flex-col bg-neutral-50/10">
                        {/* Conversation Header */}
                        <div className="h-6 border-b border-neutral-200 bg-white px-2 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <div className="w-3.5 h-3.5 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center text-[6px] shadow-sm text-neutral-500">👤</div>
                                <div className="h-1 rounded bg-neutral-450 w-16" />
                            </div>
                            <span 
                                className="px-1 py-0.5 rounded text-[5px] font-bold font-mono tracking-widest text-white shadow-sm scale-95"
                                style={{ backgroundColor: accent }}
                            >
                                URGENT
                            </span>
                        </div>
                        
                        {/* Message Stream */}
                        <div className="flex-1 p-2 flex flex-col gap-2 overflow-hidden justify-end">
                            {/* Client Message */}
                            <div className="flex gap-1 max-w-[80%] items-start self-start">
                                <div className="w-2.5 h-2.5 rounded-full bg-neutral-200 border border-neutral-200 shrink-0 scale-75 shadow-sm" />
                                <div className="rounded bg-white p-1.5 border border-neutral-200 shadow-sm text-neutral-600">
                                    <div className="h-1 rounded bg-neutral-400 w-14 mb-0.5" />
                                    <div className="h-0.5 rounded bg-neutral-250 w-8" />
                                </div>
                            </div>

                            {/* Agent Message */}
                            <div className="flex gap-1 max-w-[80%] items-start self-end justify-end">
                                <div className="rounded p-1.5 text-right border shadow-sm" style={{ borderColor: `${accent}15`, backgroundColor: 'white' }}>
                                    <div className="h-1 rounded w-16 mb-0.5 animate-pulse" style={{ backgroundColor: accent }} />
                                    <div className="h-0.5 rounded bg-neutral-350 w-10" />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Input Area */}
                        <div className="h-6 border-t border-neutral-200 bg-white px-2 flex items-center gap-1 justify-between shadow-sm">
                            <div className="h-1 rounded bg-neutral-200 w-24" />
                            <Send className="w-2 h-2 text-neutral-400" />
                        </div>
                    </div>

                    {/* Action Toast Alert - Waiting time redesign accent feature */}
                    <div className="absolute bottom-8 right-2 left-22 rounded border border-neutral-200 bg-white/95 shadow-md p-1.5 flex items-center justify-between z-10 animate-bounce">
                        <div className="flex items-center gap-1.5">
                            <PhoneCall className="w-3 h-3 text-red-500 animate-pulse" />
                            <div className="flex flex-col">
                                <span className="text-[5px] text-neutral-450 font-mono font-medium">AUTO DISTRIBUTION</span>
                                <span className="text-[6px] font-bold text-neutral-700">Next: John Doe</span>
                            </div>
                        </div>
                        <div 
                            className="px-1.5 py-0.5 rounded text-[5px] font-bold text-white cursor-pointer shadow-sm hover:scale-105 transition-transform"
                            style={{ backgroundColor: accent }}
                        >
                            ACCEPT
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 6. ChatAI Ecosystem Wireframe (multimodal AI workspace)
    if (key === 'chatai') {
        return (
            <div className={containerClasses}>
                <LineGrid />
                <div className="absolute inset-0 flex">
                    {/* Left Sidebar - Chat History list */}
                    <div className="w-14 border-r border-neutral-200 bg-neutral-50/90 p-1 flex flex-col gap-1 z-10 shadow-sm">
                        <div className="flex justify-between items-center mb-1 scale-90">
                            <div className="h-1 rounded bg-neutral-300 w-6" />
                            <Plus className="w-2 h-2 text-neutral-400 animate-spin" style={{ animationDuration: '6s' }} />
                        </div>
                        <div className="h-3 rounded border border-neutral-200 bg-white flex items-center gap-1 px-1 shadow-sm opacity-80">
                            <MessageSquare className="w-1.5 h-1.5 text-neutral-450" />
                            <div className="h-0.5 rounded bg-neutral-250 w-6" />
                        </div>
                        <div className="h-3 rounded border bg-white flex items-center gap-1 px-1 shadow-sm" style={{ borderColor: accent }}>
                            <Sparkles className="w-1.5 h-1.5" style={{ color: accent }} />
                            <div className="h-0.5 rounded w-6" style={{ backgroundColor: accent }} />
                        </div>
                        <div className="h-3 rounded border border-neutral-200 bg-white flex items-center gap-1 px-1 opacity-45 shadow-sm">
                            <FileText className="w-1.5 h-1.5 text-neutral-350" />
                            <div className="h-0.5 rounded bg-neutral-200 w-4" />
                        </div>
                    </div>

                    {/* Chat Workspace */}
                    <div className="flex-1 flex flex-col p-2 gap-2 overflow-hidden justify-between">
                        {/* Top Model selector dropdown */}
                        <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
                            <div className="flex items-center gap-1 text-[7px] border border-neutral-200 px-1.5 py-0.5 rounded bg-white shadow-sm font-semibold text-neutral-700">
                                <Sparkles className="w-2 h-2" style={{ color: accent }} />
                                <span className="font-mono">Gemini 1.5 Pro</span>
                            </div>
                            <div className="h-1 rounded bg-neutral-150 w-12" />
                        </div>

                        {/* Dialogue Bubbles */}
                        <div className="flex-1 flex flex-col gap-2 overflow-hidden justify-end">
                            {/* User Message */}
                            <div className="rounded bg-neutral-50 border border-neutral-200 p-1.5 max-w-[85%] self-end flex flex-col gap-0.5 shadow-sm text-neutral-700">
                                <div className="h-1 rounded bg-neutral-400 w-24" />
                            </div>

                            {/* Assistant message with streaming code block */}
                            <div className="rounded bg-white border border-neutral-200 p-1.5 max-w-[90%] self-start flex flex-col gap-1 shadow-sm text-neutral-700">
                                <div className="flex items-center gap-1">
                                    <Sparkles className="w-2.5 h-2.5 text-emerald-500 fill-emerald-500" />
                                    <div className="h-1 rounded bg-neutral-400 w-12" />
                                </div>
                                
                                {/* Simulated IDE/code view - Light Theme Editor */}
                                <div className="rounded bg-neutral-50 p-1 font-mono text-[5px] flex flex-col gap-0.5 border border-neutral-200 text-neutral-500 shadow-inner">
                                    <div className="flex gap-1.5 opacity-60">
                                        <span className="text-neutral-400">01</span>
                                        <div className="h-1 rounded w-16" style={{ backgroundColor: accent }} />
                                    </div>
                                    <div className="flex gap-1.5">
                                        <span className="text-neutral-400">02</span>
                                        <div className="h-1 rounded bg-neutral-300 w-24" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive prompt input */}
                        <div className="h-6 border border-neutral-200 rounded bg-white flex items-center px-1.5 gap-1.5 justify-between shadow-sm">
                            <div className="flex items-center gap-1 flex-1">
                                <Sparkles className="w-2.5 h-2.5 text-neutral-300 animate-pulse" />
                                <div className="h-1 rounded bg-neutral-200 w-20" />
                            </div>
                            <div 
                                className="w-4.5 h-4.5 rounded-full flex items-center justify-center cursor-pointer shadow-sm hover:scale-105 transition-transform"
                                style={{ backgroundColor: accent }}
                            >
                                <Send className="w-2 h-2 text-white fill-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 7. Portfolio (meu-site recursive layout)
    if (key === 'portfolio') {
        return (
            <div className={containerClasses}>
                <LineGrid />
                {/* Header navbar */}
                <div className="absolute top-0 left-0 right-0 h-8 border-b border-neutral-200 bg-white/95 backdrop-blur-sm flex items-center justify-between px-3">
                    <div className="flex items-center gap-1">
                        <Terminal className="w-3.5 h-3.5" style={{ color: accent }} />
                        <span className="text-[9px] font-bold font-mono tracking-tighter text-neutral-700">ER_</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-1 rounded bg-neutral-200 w-6" />
                        <div className="h-1 rounded bg-neutral-200 w-6" />
                        <div className="h-1 rounded bg-neutral-200 w-6" />
                    </div>
                </div>

                {/* Hero design */}
                <div className="absolute top-8 bottom-0 left-0 right-0 p-3 flex flex-col justify-center items-center gap-2">
                    <div className="text-[10px] font-mono tracking-widest text-neutral-400 scale-90 uppercase font-medium">// SENIOR UX ENGINEER</div>
                    
                    <h3 className="text-xs font-extrabold text-neutral-800 text-center leading-tight">
                        Human intention,<br />
                        <span style={{ color: accent }}>amplified by AI.</span>
                    </h3>

                    <div className="flex gap-1.5 mt-1 scale-90">
                        <div 
                            className="px-2 py-0.5 rounded text-[6px] font-bold text-white flex items-center gap-1 cursor-pointer shadow-sm hover:scale-105 transition-transform"
                            style={{ backgroundColor: accent }}
                        >
                            VIEW WORK <ArrowRight className="w-1.5 h-1.5 text-white" />
                        </div>
                        <div className="px-2 py-0.5 rounded text-[6px] font-mono border border-neutral-200 bg-white text-neutral-500 shadow-sm font-semibold">
                            CONTACT
                        </div>
                    </div>
                    
                    {/* Visual miniature cursor indicator */}
                    <div className="absolute bottom-2 right-4 flex items-center gap-1 opacity-90">
                        <MousePointer className="w-2.5 h-2.5 text-neutral-750 animate-bounce" />
                        <span className="text-[5px] font-mono bg-white p-0.5 rounded border border-neutral-200 shadow-sm text-neutral-650 font-medium">click</span>
                    </div>
                </div>
            </div>
        );
    }

    // Fallback Generic interface mock
    return (
        <div className={containerClasses}>
            <LineGrid />
            <div className="absolute inset-0 flex flex-col p-3 justify-between">
                <div className="flex justify-between items-center">
                    <div className="h-2 rounded w-16" style={{ backgroundColor: accent }} />
                    <div className="h-1.5 rounded bg-neutral-200 w-10" />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-1.5">
                    <div className="h-3 rounded bg-neutral-200 w-3/4" />
                    <div className="h-1.5 rounded bg-neutral-200 w-full" />
                    <div className="h-1.5 rounded bg-neutral-200 w-5/6" />
                </div>
                <div className="flex justify-between items-center border-t border-neutral-200 pt-2">
                    <div className="h-1 rounded bg-neutral-200 w-12" />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: accent }} />
                </div>
            </div>
        </div>
    );
}
