export const SEO_CONFIG = {
  site: {
    name: 'Elias Santos',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://eliassantos.dev',
    description: 'Portfolio profissional de Elias Santos, especialista em UX/UI Design e desenvolvimento web moderno.',
    author: 'Elias Santos',
    language: 'pt-BR',
    locale: 'pt_BR',
  },
  
  social: {
    twitter: '@eliassantos',
    linkedin: 'eliassantos',
    github: 'eliassantos',
  },
  
  defaultMeta: {
    title: 'Elias Santos - UX/UI Designer & Desenvolvedor Full Stack',
    description: 'Portfolio profissional de Elias Santos, especialista em UX/UI Design e desenvolvimento web moderno. Projetos inovadores em React, Next.js e design de interfaces.',
    keywords: [
      'Elias Santos',
      'UX Design',
      'UI Design',
      'Desenvolvedor Full Stack',
      'React',
      'Next.js',
      'TypeScript',
      'Portfolio',
      'Design de Interfaces',
      'Desenvolvimento Web',
      'Frontend',
      'Backend',
      'Brasil'
    ],
    image: '/og-image.jpg',
    type: 'website',
  },
  
  pages: {
    home: {
      title: 'Elias Santos - UX/UI Designer & Desenvolvedor Full Stack',
      description: 'Portfolio profissional de Elias Santos, especialista em UX/UI Design e desenvolvimento web moderno. Projetos inovadores em React, Next.js e design de interfaces.',
      keywords: ['Portfolio', 'UX Design', 'UI Design', 'Desenvolvedor', 'React', 'Next.js'],
    },
    portfolio: {
      title: 'Portfolio - Elias Santos',
      description: 'Conheça os projetos de Elias Santos em UX/UI Design e desenvolvimento web. Cases completos e soluções inovadoras.',
      keywords: ['Portfolio', 'Projetos', 'UX Design', 'UI Design', 'Cases'],
    },
    carouselBuilder: {
      title: 'Post & Carousel Generator - Case Study',
      description: 'Case study completo do Post & Carousel Generator, uma ferramenta de IA que revoluciona a criação de carrosséis para redes sociais.',
      keywords: ['Post & Carousel Generator', 'IA', 'Criação de Conteúdo', 'Carrosséis', 'LinkedIn'],
    },
    ranking: {
      title: 'Ranking App - Case Study',
      description: 'Case study do aplicativo de ranking desenvolvido por Elias Santos, focado em UX/UI Design e experiência do usuário.',
      keywords: ['Ranking App', 'UX Design', 'Mobile App', 'Case Study'],
    },
    ventuschat: {
      title: 'VentusChat - Case Study',
      description: 'Case study do VentusChat, uma plataforma de chat inovadora desenvolvida por Elias Santos.',
      keywords: ['VentusChat', 'Chat Platform', 'UX Design', 'Case Study'],
    },
  },
  
  structuredData: {
    person: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Elias Santos',
      url: 'https://eliassantos.dev',
      image: 'https://eliassantos.dev/profile-photo.png',
      sameAs: [
        'https://linkedin.com/in/eliassantos',
        'https://github.com/eliassantos',
        'https://twitter.com/eliassantos',
      ],
      jobTitle: 'UX/UI Designer & Desenvolvedor Full Stack',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelancer',
      },
      knowsAbout: [
        'UX Design',
        'UI Design',
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Web Development',
        'User Experience',
        'Interface Design',
      ],
      description: 'Especialista em UX/UI Design e desenvolvimento web moderno com foco em experiências digitais excepcionais.',
    },
    
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Elias Santos Portfolio',
      url: 'https://eliassantos.dev',
      description: 'Portfolio profissional de Elias Santos',
      author: {
        '@type': 'Person',
        name: 'Elias Santos',
      },
    },
  },
  
  performance: {
    preloadImages: [
      '/profile-photo.png',
      '/og-image.jpg',
    ],
    preloadFonts: [
      'https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400&display=swap',
    ],
    dnsPrefetch: [
      '//fonts.googleapis.com',
      '//api.fontshare.com',
      '//vercel.com',
    ],
    preconnect: [
      'https://fonts.googleapis.com',
      'https://api.fontshare.com',
    ],
  },
}; 