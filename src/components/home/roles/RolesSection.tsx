
import { useRef } from 'react';
import { RoleCard } from './RoleCard';

const roles = [
    {
        id: 1,
        title: 'UX/UI Designer',
        description: 'Transforming complex problems into intuitive and beautiful interfaces. Focused on user needs and business goals.',
        skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Wireframing']
    },
    {
        id: 2,
        title: 'Frontend Developer',
        description: 'Building responsive, high-performance web applications with modern technologies. Clean code and pixel-perfect implementation.',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
        id: 3,
        title: 'Data Driven',
        description: 'Leveraging data to make informed decisions and optimize user experience. Tracking metrics that matter.',
        skills: ['Google Analytics 4', 'Google Tag Manager', 'Hotjar', 'A/B Testing', 'Mixpanel']
    }
];

export function RolesSection() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            id='roles'
            ref={sectionRef}
            className='relative py-14 md:py-20 px-0'
        >
            <div className='relative flex flex-col gap-16 md:gap-24'>
                {roles.map((role, index) => (
                    <RoleCard
                        key={role.id}
                        role={role}
                        index={index}
                        totalCards={roles.length}
                    />
                ))}
            </div>
        </section>
    );
}
