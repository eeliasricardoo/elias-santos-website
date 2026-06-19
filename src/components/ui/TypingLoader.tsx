'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRetroSound } from '@/hooks/useRetroSound';

interface LogLine {
  text: string;
  type: 'command' | 'status' | 'success' | 'info';
  delay: number; // Delay in ms before starting to display this line
}

const LOG_SEQUENCE: LogLine[] = [
  { text: 'npx eliasricardo --start', type: 'command', delay: 400 },
  { text: 'Initializing Elias Ricardo\'s workspace environment...', type: 'status', delay: 200 },
  { text: 'Loading packages: astro, react, framer-motion, tailwindcss v4...', type: 'info', delay: 300 },
  { text: 'Injecting responsive grids and fluid spacing system... [OK]', type: 'success', delay: 250 },
  { text: 'Mounting design systems and interactive UI tokens... [OK]', type: 'success', delay: 180 },
  { text: 'Establishing secure connections to future UX architectures... [OK]', type: 'success', delay: 200 },
  { text: 'System diagnostics complete. All modules operational.', type: 'status', delay: 300 },
  { text: 'Redirecting to localhost:4321...', type: 'info', delay: 400 }
];

export function TypingLoader() {
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const [displayedLines, setDisplayedLines] = useState<{ text: string; type: string }[]>([]);
  const [currentTypingText, setCurrentTypingText] = useState<string>('');
  const [activeLineIndex, setActiveLineIndex] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  
  const { playKeyPress, playClick } = useRetroSound();
  
  const linesEndRef = useRef<HTMLDivElement>(null);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check sessionStorage on mount (avoid showing loader on every reload)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Remove temporary blocking overlay once hydrated
      const tempOverlay = document.getElementById('temp-preloader-overlay');
      if (tempOverlay) {
        tempOverlay.remove();
      }

      const isLoaded = sessionStorage.getItem('elias-portfolio-loaded');
      if (isLoaded) {
        setShouldShow(false);
      } else {
        setShouldShow(true);
        // Lock body scrolling
        document.body.style.overflow = 'hidden';
      }
    }
    
    return () => {
      // Re-enable scrolling on unmount just in case
      document.body.style.overflow = '';
    };
  }, []);

  // Scroll to bottom of terminal content on updates
  useEffect(() => {
    if (linesEndRef.current) {
      linesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [displayedLines, currentTypingText]);

  // Handle typing sequence
  useEffect(() => {
    if (!shouldShow || isFadingOut) return;

    if (activeLineIndex >= LOG_SEQUENCE.length) {
      // Finished all typing, schedule exit
      const exitTimer = setTimeout(() => {
        handleComplete();
      }, 600);
      return () => clearTimeout(exitTimer);
    }

    const currentLine = LOG_SEQUENCE[activeLineIndex];

    // Wait for the scheduled line delay
    const startTimer = setTimeout(() => {
      if (currentLine.type === 'command') {
        // Type command letter by letter
        let charIndex = 0;
        setCurrentTypingText('');
        
        const typeChar = () => {
          if (charIndex < currentLine.text.length) {
            const nextChar = currentLine.text[charIndex];
            setCurrentTypingText(prev => prev + nextChar);
            
            // Play mechanical key click sound
            playKeyPress();
            
            charIndex++;
            typingTimerRef.current = setTimeout(typeChar, 35 + Math.random() * 45); // Random natural typing speed
          } else {
            // Command complete
            setTimeout(() => {
              setDisplayedLines(prev => [...prev, { text: currentLine.text, type: currentLine.type }]);
              setCurrentTypingText('');
              setActiveLineIndex(prev => prev + 1);
            }, 250); // Pause on command complete before next line
          }
        };
        
        typeChar();
      } else {
        // Log line: reveal it immediately
        setDisplayedLines(prev => [...prev, { text: currentLine.text, type: currentLine.type }]);
        
        // Play a very subtle keypress/blip sound for print confirmation
        playKeyPress();
        
        setActiveLineIndex(prev => prev + 1);
      }
    }, currentLine.delay);

    return () => {
      clearTimeout(startTimer);
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, [activeLineIndex, shouldShow, isFadingOut]);

  // Handle skip/complete transition
  const handleComplete = () => {
    setIsFadingOut(true);
    // Play subtle tech click sound on complete/skip
    playClick();

    setTimeout(() => {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('elias-portfolio-loaded', 'true');
      }
      setShouldShow(false);
      // Unlock body scrolling
      document.body.style.overflow = '';
    }, 800); // Match exit animation duration
  };

  // Keyboard shortcut to skip
  useEffect(() => {
    const handleKeyDown = () => {
      if (shouldShow && !isFadingOut) {
        handleComplete();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shouldShow, isFadingOut]);

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleComplete}
          className="fixed inset-0 z-[99999] bg-[#030712] flex flex-col items-center justify-center p-4 font-mono select-none overflow-hidden cursor-pointer"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:28px_28px] opacity-70 pointer-events-none" />
          
          {/* Glowing orb in center */}
          <div className="absolute w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Terminal Box */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.05, opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            className="w-full max-w-2xl border border-white/10 rounded-xl bg-[#090d16]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(239,68,68,0.1)] overflow-hidden flex flex-col h-[380px] sm:h-[420px]"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d1321] border-b border-white/5 select-none">
              {/* Window Controls */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 block" />
                <span className="w-3 h-3 rounded-full bg-[#eab308]/80 block" />
                <span className="w-3 h-3 rounded-full bg-[#22c55e]/80 block" />
              </div>
              {/* Shell Name */}
              <div className="text-xs text-muted-foreground/60 font-semibold tracking-wider">
                bash — npx eliasricardo
              </div>
              <div className="w-14" /> {/* Spacer */}
            </div>

            {/* Terminal Content */}
            <div className="flex-1 p-5 overflow-y-auto scrollbar-thin flex flex-col gap-2.5 text-xs sm:text-sm text-left">
              {/* Prior lines */}
              {displayedLines.map((line, idx) => (
                <div key={idx} className="leading-relaxed">
                  {line.type === 'command' ? (
                    <span className="text-white">
                      <span className="text-red-500 font-bold mr-2">&gt;</span>
                      {line.text}
                    </span>
                  ) : line.type === 'success' ? (
                    <span className="text-emerald-400">{line.text}</span>
                  ) : line.type === 'status' ? (
                    <span className="text-zinc-300 font-medium">{line.text}</span>
                  ) : (
                    <span className="text-muted-foreground">{line.text}</span>
                  )}
                </div>
              ))}

              {/* Line currently being typed */}
              {activeLineIndex < LOG_SEQUENCE.length && (
                <div className="leading-relaxed">
                  {LOG_SEQUENCE[activeLineIndex].type === 'command' ? (
                    <span className="text-white">
                      <span className="text-red-500 font-bold mr-2">&gt;</span>
                      {currentTypingText}
                      <span className="inline-block w-1.5 h-4 bg-red-500 animate-pulse ml-0.5" />
                    </span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-4 bg-muted-foreground/75 animate-pulse" />
                    </div>
                  )}
                </div>
              )}

              {/* End of logs spacing element */}
              <div ref={linesEndRef} />
            </div>

            {/* Terminal Footer */}
            <div className="px-4 py-2 border-t border-white/5 bg-[#070b13] flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground/40 font-mono">
              <div>Session: {typeof window !== 'undefined' ? sessionStorage.getItem('elias-session-id') || '0xDEADBEEF' : ''}</div>
              <div>Press any key or click to skip</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
