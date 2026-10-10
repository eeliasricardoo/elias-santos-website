import { cn } from '@/lib/utils';

interface BrowserFrameProps {
    children: React.ReactNode;
    /** Route label shown in the chrome bar — e.g. "/dashboard". */
    route?: string;
    className?: string;
}

/**
 * Pixel window around a screenshot or video: navy stepped frame,
 * signboard-teal title bar with the three pixel lights.
 */
export function BrowserFrame({ children, route, className }: BrowserFrameProps) {
    return (
        <div className={cn('px-frame px-frame-drop overflow-hidden', className)}>
            <div aria-hidden="true" className="px-bar flex items-center gap-2 px-3 py-2 font-pixel-label text-[11px]">
                <span className="inline-block h-2.5 w-2.5 bg-[var(--px-red)]" />
                <span className="inline-block h-2.5 w-2.5 bg-[var(--px-gold)]" />
                <span className="inline-block h-2.5 w-2.5 bg-[#5be36a]" />
                {route && <span className="mx-2 flex-1 truncate text-center">{route}</span>}
            </div>
            {children}
        </div>
    );
}
