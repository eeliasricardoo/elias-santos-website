import { useEffect, useState } from 'react';
import { MessageCircle, FileText, Sun, Moon } from 'lucide-react';
import { useAnalytics, AnalyticsEvents } from '@/lib/analytics';

const LINKS = [
  { label: 'Work', id: 'projects' },
  { label: 'Process', id: 'how-i-work' },
  { label: 'Contact', id: 'get-in-touch' },
];

export function Navbar() {
  const { track } = useAnalytics();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [isHome, setIsHome] = useState(true);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains('light'));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = !root.classList.contains('light');
    root.classList.toggle('light', next);
    root.classList.toggle('dark', !next);
    try {
      localStorage.setItem('theme', next ? 'light' : 'dark');
    } catch (e) {}
    setIsLight(next);
  };

  useEffect(() => {
    const home = window.location.pathname === '/';
    setIsHome(home);

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    let observer: IntersectionObserver | undefined;
    if (home) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(e.target.id);
          });
        },
        { rootMargin: '-45% 0px -50% 0px' }
      );
      LINKS.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el) observer!.observe(el);
      });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, []);

  const prefix = isHome ? '' : '/';

  return (
    <div className="fixed inset-x-0 top-3 sm:top-5 z-50 flex justify-center px-3 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center gap-1 rounded-full border py-2 pl-2 pr-2 transition-all duration-300 ${
          scrolled
            ? 'border-border/70 bg-background/80 shadow-xl shadow-black/30 backdrop-blur-2xl'
            : 'border-border/40 bg-background/50 shadow-lg shadow-black/10 backdrop-blur-xl'
        }`}
      >
        {/* Logo */}
        <a
          href={prefix || '/'}
          aria-label="Home"
          className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 transition-all hover:border-electric/60 hover:bg-background active:scale-95"
        >
          <span className="font-mono text-sm font-bold tracking-tighter text-foreground">
            ER<span className="text-electric light:text-electric-ink">_</span>
          </span>
        </a>

        {/* Center links */}
        <div className="hidden items-center gap-0.5 px-1 md:flex">
          {LINKS.map((l) => {
            const isActive = isHome && active === l.id;
            return (
              <a
                key={l.id}
                href={`${prefix}#${l.id}`}
                onClick={() => track(AnalyticsEvents.NAVIGATION_CLICK(l.id))}
                className={`relative rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors ${
                  isActive ? 'text-electric light:text-electric-ink' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="relative z-10">{l.label}</span>
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-electric/10 ring-1 ring-electric/30" />
                )}
              </a>
            );
          })}
        </div>

        <span className="mx-1 hidden h-5 w-px bg-border/60 md:block" />

        {/* Actions */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
          className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground active:scale-95"
        >
          {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </button>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open resume"
          onClick={() => track(AnalyticsEvents.NAVIGATION_CLICK('resume_pdf'))}
          className="flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
        >
          <FileText className="h-4 w-4" />
          <span className="hidden sm:inline">Resume</span>
        </a>

        <a
          href="https://calendly.com/eeliasricardoo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Schedule a meeting"
          className="flex items-center gap-2 rounded-full bg-electric px-4 py-2 text-sm font-semibold text-black transition-all hover:opacity-90 active:scale-95"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Let&apos;s Talk</span>
        </a>
      </nav>
    </div>
  );
}
