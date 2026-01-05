
import { useRef } from 'react';
import { RoleCard } from './RoleCard';

const aboutMeContent = [
    {
        id: 1,
        title: 'Who I Am',
        description: 'A designer and developer passionate about creating digital experiences that people love. I bridge the gap between beautiful design and functional code.',
        highlights: [
            {
                name: 'User-Centered Design',
                description: 'Putting people first in every decision.',
                usage: 'Every interface I create starts with understanding the user. I believe great design is invisible – it just works.'
            },
            {
                name: 'Attention to Detail',
                description: 'Obsessed with the small things that matter.',
                usage: 'From micro-interactions to typography choices, I believe that details make the difference between good and exceptional.'
            },
            {
                name: 'Continuous Learning',
                description: 'Always evolving with technology.',
                usage: 'The digital landscape changes fast. I stay curious and keep learning to deliver solutions using the best tools available.'
            },
            {
                name: 'Problem Solver',
                description: 'Finding elegant solutions to complex challenges.',
                usage: 'I enjoy breaking down complex problems into simple, intuitive solutions that make sense to users.'
            },
            {
                name: 'Collaborative Spirit',
                description: 'Better together.',
                usage: 'I thrive in collaborative environments, working with teams to bring ideas to life and learn from different perspectives.'
            }
        ]
    },
    {
        id: 2,
        title: 'What Drives Me',
        description: 'I\'m driven by the impact technology can have on people\'s lives. Creating products that are not just functional, but delightful to use.',
        highlights: [
            {
                name: 'User Impact',
                description: 'Making a difference through design.',
                usage: 'Nothing beats the feeling of seeing users effortlessly navigate something I created. I measure success by user satisfaction.'
            },
            {
                name: 'Innovation',
                description: 'Pushing boundaries and exploring new possibilities.',
                usage: 'I\'m excited by emerging technologies and how they can be applied to solve real problems in creative ways.'
            },
            {
                name: 'Quality',
                description: 'Crafting experiences that stand the test of time.',
                usage: 'I don\'t just ship features – I craft experiences. Code quality, performance, and maintainability are not optional.'
            },
            {
                name: 'Data-Driven Insights',
                description: 'Letting numbers guide decisions.',
                usage: 'I believe in validating assumptions with data. Analytics and user testing inform my design decisions.'
            },
            {
                name: 'Accessibility',
                description: 'Design for everyone.',
                usage: 'Creating inclusive experiences that work for all users, regardless of their abilities, is a core value in my work.'
            }
        ]
    },
    {
        id: 3,
        title: 'My Expertise',
        description: 'With a unique blend of design sensibility and development skills, I bring ideas to life from concept to production.',
        highlights: [
            {
                name: 'Product Innovation',
                description: 'From idea to market.',
                usage: 'I\'ve helped teams launch innovative products by combining design thinking with technical expertise.'
            },
            {
                name: 'Rapid Prototyping',
                description: 'Fail fast, learn faster.',
                usage: 'I build interactive prototypes to test hypotheses quickly, saving time and resources in the long run.'
            },
            {
                name: 'Modern Tech Stack',
                description: 'React, Next.js, TypeScript, and more.',
                usage: 'I work with cutting-edge technologies to build fast, scalable, and maintainable applications.'
            },
            {
                name: 'AI-Powered Solutions',
                description: 'Leveraging AI to enhance UX.',
                usage: 'I explore how AI can make experiences smarter and more personalized, from chatbots to recommendation systems.'
            },
            {
                name: 'Design Systems',
                description: 'Building scalable design foundations.',
                usage: 'I create comprehensive design systems that ensure consistency and speed up development cycles.'
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
                {aboutMeContent.map((role, index) => (
                    <RoleCard
                        key={role.id}
                        role={role}
                        index={index}
                        totalCards={aboutMeContent.length}
                    />
                ))}
            </div>
        </section>
    );
}
