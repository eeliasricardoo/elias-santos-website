
import { useRef } from 'react';
import { RoleCard } from './RoleCard';

const roles = [
    {
        id: 1,
        title: 'UX/UI Designer',
        description: 'Transforming complex problems into intuitive and beautiful interfaces. Focused on user needs and business goals.',
        skills: [
            {
                name: 'Figma',
                description: 'The industry-standard collaborative design tool.',
                usage: 'I use Figma for everything from initial wireframing to high-fidelity prototyping. My workflow involves creating robust component libraries and using auto-layout to ensure responsiveness from day one.'
            },
            {
                name: 'Prototyping',
                description: 'Creating interactive simulations of a product.',
                usage: 'I build clickable prototypes to validate flows with stakeholders and users before writing a single line of code, saving time and reducing development risk.'
            },
            {
                name: 'User Research',
                description: 'Understanding user behaviors, needs, and motivations.',
                usage: 'I conduct user interviews and usability testing to gather qualitative data, which I then synthesize into personas and journey maps to guide design decisions.'
            },
            {
                name: 'Design Systems',
                description: 'A collection of reusable components and standards.',
                usage: 'I create and maintain design systems (tokens, components, patterns) to ensure visual consistency and speed up the handoff process between design and development.'
            },
            {
                name: 'Wireframing',
                description: 'The visual blueprint of a user interface.',
                usage: 'I use low-fidelity wireframes to rapidly explore layout structure and information architecture without getting distracted by visual details.'
            }
        ]
    },
    {
        id: 2,
        title: 'Frontend Developer',
        description: 'Building responsive, high-performance web applications with modern technologies. Clean code and pixel-perfect implementation.',
        skills: [
            {
                name: 'React',
                description: 'A JavaScript library for building user interfaces.',
                usage: 'I use React to build component-based architectures. I leverage hooks for state management and context for global state, ensuring modular and reusable code.'
            },
            {
                name: 'Next.js',
                description: 'The React Framework for the Web.',
                usage: 'My go-to framework for production apps. I use it for Server-Side Rendering (SSR) to improve SEO and performance, and API routes to handle backend logic.'
            },
            {
                name: 'TypeScript',
                description: 'JavaScript with syntax for types.',
                usage: 'I strictly use TypeScript to catch errors early and improve code maintainability. It also serves as excellent self-documentation for the codebase.'
            },
            {
                name: 'Tailwind CSS',
                description: 'A utility-first CSS framework.',
                usage: 'I love Tailwind for its speed. I use it to build custom designs without leaving the markup, reducing context switching and keeping CSS bundle sizes small.'
            },
            {
                name: 'Framer Motion',
                description: 'A production-ready motion library for React.',
                usage: 'I use Framer Motion to add layout animations and gesture-based interactions that make the UI feel "alive" and polished, like the cards you see here.'
            }
        ]
    },
    {
        id: 3,
        title: 'Data Driven',
        description: 'Leveraging data to make informed decisions and optimize user experience. Tracking metrics that matter.',
        skills: [
            {
                name: 'Google Analytics 4',
                description: 'Web analytics service.',
                usage: 'I set up GA4 to track user journeys and conversion events, helping to identify drop-off points and measure the success of new features.'
            },
            {
                name: 'Google Tag Manager',
                description: 'Tag management system.',
                usage: 'I use GTM to deploy marketing tags and tracking pixels without needing to modify the code, giving marketing teams more autonomy.'
            },
            {
                name: 'Hotjar',
                description: 'Behavior analytics and user feedback service.',
                usage: 'I analyze heatmaps and session recordings to see exactly how users interact with the interface, often uncovering usability issues that metrics miss.'
            },
            {
                name: 'A/B Testing',
                description: 'Split testing method.',
                usage: 'I hypothesize and test variations of UI elements (like buttons or headlines) to statistically prove which version performs better for specific goals.'
            },
            {
                name: 'Mixpanel',
                description: 'Product analytics for mobile and web.',
                usage: 'I use Mixpanel for more granular, event-based tracking to understand retention and cohort behavior, going deeper than standard page views.'
            }
        ]
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
