'use client';

import { BackButton } from './BackButton';
import { motion } from 'framer-motion';

interface CaseStudyLayoutProps {
    children: React.ReactNode;
}

export function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
    return (
        <main className="max-w-4xl mx-auto py-12 px-4 space-y-20 pt-24 min-h-screen">
            <header className="mb-10 text-left">
                <BackButton />
            </header>

            {children}
        </main>
    );
}
