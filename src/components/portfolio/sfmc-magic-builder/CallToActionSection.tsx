'use client';

import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { CaseStudySection } from '@/components/portfolio/ui';

export function CallToActionSection() {
    const handleLetsTalk = () => {
        window.open('https://calendly.com/eeliasricardoo', '_blank');
    };



    return (
        <CaseStudySection title="The way I work, in one project" className="text-center">
            <div className='space-y-6 text-lg text-muted-foreground leading-relaxed mb-6'>
                <p>
                    Find the friction, build the fix, measure the result — that's the loop behind
                    everything in this case. If you're hiring someone who closes that loop on your
                    team, let's talk. Thirty minutes, no slide deck.
                </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                    size='lg'
                    className='bg-primary hover:bg-primary/90 cursor-pointer'
                    onClick={handleLetsTalk}
                >
                    <Calendar className='w-4 h-4 mr-2' />
                    Let's Talk
                </Button>
                <Button
                    variant='outline'
                    size='lg'
                    className='cursor-pointer'
                    onClick={() => window.location.href = '/portfolio/ventuschat'}
                >
                    Next Project
                    <ArrowRight className='w-4 h-4 ml-2' />
                </Button>
            </div>
        </CaseStudySection>
    );
}
