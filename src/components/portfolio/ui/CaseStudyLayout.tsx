'use client';


import { motion } from 'framer-motion';

interface CaseStudyLayoutProps {
    children: React.ReactNode;
}

export function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
    return (
        <main className="max-w-4xl mx-auto py-12 px-4 flex flex-col gap-24 pt-24 min-h-screen">
            {/* header removed as it only contained the BackButton */}

            {children}
        </main>
    );
}
