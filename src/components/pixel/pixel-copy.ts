// Everything the home *says* lives here — mascot lines and posts. Edit freely; components render whatever they find.
import type { MascotMood } from './mascot-bus';

export const HERO_INTRO =
    'Turning complex problems into clear, intuitive, and human-centered product experiences.';

/** One line per case, said when the visitor hovers its card. Keyed by project index. */
export const CASE_LINES: Record<string, { mood: MascotMood; say: string }> = {
    '01': { mood: 'wink', say: 'Emails went from 80 minutes to 10–20.' },
    '02': { mood: 'smirk', say: 'My main case. Figma, code and support, same person.' },
    '03': { mood: 'idle2', say: 'Over 500 active users. I designed and built all of it.' },
    '04': { mood: 'surprised', say: 'A triage model that cut waiting by 22%.' },
    '05': { mood: 'smirk', say: 'Gamification — with research first, points second.' },
    '06': { mood: 'squint', say: 'Built to understand token streaming before a client needed it.' },
    '07': { mood: 'wink', say: 'Text in, carousel out. Like the ones further down.' },
    '08': { mood: 'surprised', say: 'No remotes, no phone. Your home becomes the interface.' },
    '09': { mood: 'smirk', say: '6:30 AM jobsite friction, solved with Stanley brand DNA.' },
};

export interface PixelPost {
    id: string;
    title: string;
    subtitle: string;
    slides: number;
    /** Slide aspect ratio (width / height). */
    ratio: number;
}

// Slides live in public/pixel/posts/<id>/01.webp … NN.webp
export const PIXEL_POSTS: PixelPost[] = [
    {
        id: 'utopia',
        title: 'What if the future were beautiful?',
        subtitle: 'Technology that works in favour of life.',
        slides: 9,
        ratio: 1,
    },
    {
        id: 'ai-designers',
        title: "AI won't replace designers",
        subtitle: 'But it will expose the ones who only draw screens.',
        slides: 10,
        ratio: 720 / 1124,
    },
    {
        id: 'ai-research',
        title: 'AI-driven investigation',
        subtitle: "Start with a better question, not an answer.",
        slides: 9,
        ratio: 720 / 1130,
    },
    {
        id: 'heatmap',
        title: 'Pretty sites still lose people',
        subtitle: 'A heatmap story: where users click, scroll and quit.',
        slides: 8,
        ratio: 720 / 1126,
    },
];

export const ABOUT_FACTS: { label: string; value: string }[] = [
    { label: 'Role', value: 'Product Designer / UX Engineer' },
    { label: 'Based in', value: 'Brazil · Remote' },
    { label: 'Works with', value: 'LATAM · US · Europe' },
    { label: 'Languages', value: 'PT · EN' },
    { label: 'Status', value: 'Open to senior roles' },
];

export interface WritingArticle {
    title: string;
    description: string;
    date: string;
    tag: string;
    readTime: string;
    language: 'PT-BR' | 'EN';
    cover: string;
    url: string;
}

export const WRITING_ARTICLES: WritingArticle[] = [
    {
        title: 'A Ascensão da Aura: Por Que UX Designers São Indispensáveis na Era da IA',
        description:
            'A IA generativa acelera protótipos, mas carece de alma, propósito e visão estratégica. Por que o olhar humano e os fundamentos de UX se tornam ainda mais valiosos.',
        date: 'Aug 2025',
        tag: 'AI & UX Design',
        readTime: '4 min read',
        language: 'PT-BR',
        cover: '/medium/aura-ai.webp',
        url: 'https://medium.com/@eeliasricardoo/a-ascens%C3%A3o-da-aura-por-que-ux-designers-s%C3%A3o-indispens%C3%A1veis-na-era-da-ia-2d2796224ff7',
    },
    {
        title: 'UX Case Study: Ranking System for Gamification',
        description:
            'Designing progression loops, motivation mechanics, and clear feedback visual systems to drive user engagement and long-term retention.',
        date: 'Mar 2025',
        tag: 'Product & Gamification',
        readTime: '5 min read',
        language: 'EN',
        cover: '/medium/gamification.webp',
        url: 'https://medium.com/@eeliasricardoo/ux-case-study-ranking-system-for-gamification-e19d71259c15',
    },
    {
        title: 'Case de UX: Otimização de Atendimento e Eficiência (OmniChat)',
        description:
            'Pesquisa, ideação e redução de 22% no tempo de resposta com aumento de CSAT através de uma interface de triagem focada no agente.',
        date: 'Jul 2025',
        tag: 'UX Research & Metrics',
        readTime: '6 min read',
        language: 'PT-BR',
        cover: '/medium/omnichat.webp',
        url: 'https://medium.com/@eeliasricardoo/case-de-ux-omnichanel-559d47c18120',
    },
    {
        title: 'Inteligência Artificial, UX e Automação',
        description:
            'Como alavancar ferramentas de inteligência artificial para acelerar discovery e prototipagem sem perder a centralidade no usuário.',
        date: 'Feb 2023',
        tag: 'AI Strategy',
        readTime: '3 min read',
        language: 'PT-BR',
        cover: '/medium/ai-automation.webp',
        url: 'https://medium.com/@eeliasricardoo/intelig%C3%AAncia-artificial-ux-e-automa%C3%A7%C3%A3o-8674c1ede08b',
    },
    {
        title: 'Feature UX: Edição de Respostas em Provas e Atividades',
        description:
            'Resolução de atritos críticos na experiência de avaliação digital, garantindo controle, transparência e segurança para alunos e professores.',
        date: 'Jul 2025',
        tag: 'UI/UX Design · EdTech',
        readTime: '4 min read',
        language: 'PT-BR',
        cover: '/medium/exam-edition.webp',
        url: 'https://medium.com/@eeliasricardoo/feature-ux-edi%C3%A7%C3%A3o-de-respostas-em-provas-e-atividades-avaliativas-3f836907ab1e',
    },
    {
        title: 'Case de UX: Permissionamento de Conteúdo no OmniChat',
        description:
            'Arquitetura de permissões granulares e governança para times de atendimento de alto volume em plataformas de mensageria.',
        date: 'Jul 2025',
        tag: 'B2B SaaS & Permissions',
        readTime: '5 min read',
        language: 'PT-BR',
        cover: '/medium/omnichat-perm.webp',
        url: 'https://medium.com/@eeliasricardoo/case-de-ux-permissionamento-de-conte%C3%BAdo-no-omnichat-cf21cb548484',
    },
    {
        title: 'Preenchimento de Formulários: Eliminando Fricções de Usabilidade',
        description:
            'Padrões práticos de UX e validação para transformar fluxos de formulários longos em jornadas intuitivas e com baixa taxa de abandono.',
        date: 'May 2022',
        tag: 'UX Research & Forms',
        readTime: '3 min read',
        language: 'PT-BR',
        cover: '/medium/forms-friction.webp',
        url: 'https://medium.com/@eeliasricardoo/todos-n%C3%B3s-sabemos-que-preencher-um-formul%C3%A1rio-%C3%A9-um-p%C3%A9-na-roda-a87630f2a148',
    },
    {
        title: 'Pequenos detalhes podem mudar a experiência do usuário',
        description:
            'Um estudo de caso em UX Research demonstrando como microinterações e feedback imediato transformam a percepção de valor do produto.',
        date: 'Apr 2022',
        tag: 'UX Research & Microcopy',
        readTime: '4 min read',
        language: 'PT-BR',
        cover: '/medium/ux-details.webp',
        url: 'https://medium.com/@eeliasricardoo/pequenos-detalhes-podem-mudar-a-experi%C3%AAncia-do-usu%C3%A1rio-case-ux-f2943e0609f7',
    },
];
