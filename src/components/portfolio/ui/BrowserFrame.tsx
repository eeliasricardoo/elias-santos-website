import { cn } from '@/lib/utils';

interface BrowserFrameProps {
    children: React.ReactNode;
    /** Route label shown in the chrome bar — e.g. "/dashboard". */
    route?: string;
    className?: string;
}

/**
 * Minimal browser window around a screenshot or video.
 */
export function BrowserFrame({ children, route, className }: BrowserFrameProps) {
    return (
        <div className={cn('px-frame px-frame-drop overflow-hidden', className)}>
            <div aria-hidden="true" className="px-bar flex items-center gap-1.5 px-3 py-2 font-pixel-label text-[10px]">
                <span className="inline-block h-2 w-2 rounded-full bg-[var(--px-line)]" />
                <span className="inline-block h-2 w-2 rounded-full bg-[var(--px-line)]" />
                <span className="inline-block h-2 w-2 rounded-full bg-[var(--px-line)]" />
                {route && <span className="mx-2 flex-1 truncate text-center">{route}</span>}
            </div>
            {children}
        </div>
    );
}
