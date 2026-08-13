export const SEO_CONFIG = {
  site: {
    name: 'Elias Ricardo',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://eeliasricardoo.com',
    description:
      'Senior Product Designer and UX Engineer working at the intersection of design and engineering, specializing in design systems, React/Next.js interfaces, interaction design, and production-ready digital products.',
    author: 'Elias Ricardo',
    language: 'en-US',
    locale: 'en_US',
  },

  social: {
    twitter: '@eliassantos',
    linkedin: 'eeliasricardoo',
    github: 'eliassantos',
  },

  defaultMeta: {
    title: 'Elias Ricardo — Senior Product Designer & UX Engineer',
    description:
      'Senior Product Designer and UX Engineer working at the intersection of design and engineering, specializing in design systems, React/Next.js interfaces, interaction design, and production-ready digital products.',
    keywords: [
      'Elias Ricardo',
      'Product Designer',
      'UX Engineering',
      'Design Engineer',
      'UI Engineer',
      'Product Design',
      'Design Systems',
      'Frontend Engineering',
      'React',
      'Next.js',
      'TypeScript',
      'Portfolio',
      'Interface Design',
      'Web Development',
      'Frontend',
      'User Experience',
      'Brazil',
    ],
    image: '/oq-image.png',
    type: 'website',
  },

  pages: {
    home: {
      title: 'Elias Ricardo — Senior Product Designer & UX Engineer',
      description:
        'Senior Product Designer and UX Engineer working at the intersection of design and engineering, specializing in design systems, React/Next.js interfaces, interaction design, and production-ready digital products.',
      keywords: [
        'Portfolio',
        'Product Designer',
        'UX Engineering',
        'Design Engineer',
        'UI Engineer',
        'Product Design',
        'Frontend Developer',
        'React',
        'Next.js',
      ],
    },
    portfolio: {
      title: 'Portfolio - Elias Ricardo',
      description:
        'Selected UX Engineering case studies by Elias Ricardo, showing product design, design systems, React interfaces, and production frontend work.',
      keywords: [
        'Portfolio',
        'Projects',
        'UX Engineering',
        'Design Engineer',
        'UI Engineer',
        'Case Studies',
      ],
    },
    carouselBuilder: {
      title: 'Post & Carousel Generator - Case Study',
      description:
        'Complete case study of the Post & Carousel Generator, an AI tool that revolutionizes carousel creation for social media.',
      keywords: [
        'Post & Carousel Generator',
        'AI',
        'Content Creation',
        'Carousels',
        'LinkedIn',
      ],
    },
    ranking: {
      title: 'Ranking App - Case Study',
      description:
        'Case study of the ranking app developed by Elias Ricardo, focused on UX/UI Design and user experience.',
      keywords: ['Ranking App', 'UX Design', 'Mobile App', 'Case Study'],
    },
    ventuschat: {
      title: 'VentusChat - Case Study',
      description:
        'Case study of VentusChat, an innovative chat platform developed by Elias Ricardo.',
      keywords: ['VentusChat', 'Chat Platform', 'UX Design', 'Case Study'],
    },
  },

  structuredData: {
    person: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Elias Ricardo',
      url: 'https://eeliasricardoo.com',
      image: 'https://eeliasricardoo.com/profile-photo.webp',
      sameAs: [
        'https://linkedin.com/in/eeliasricardoo',
        'https://github.com/eliassantos',
        'https://twitter.com/eliassantos',
      ],
      jobTitle: 'Senior Product Designer & UX Engineer',
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
        'Frontend Development',
        'User Experience',
        'Interface Design',
      ],
      description:
        'Senior Product Designer & UX Engineer — research, interface design, and production React code, with measured outcomes.',
    },

    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Elias Ricardo Portfolio',
      url: 'https://eeliasricardoo.com',
      description: 'Professional portfolio of Elias Ricardo',
      author: {
        '@type': 'Person',
        name: 'Elias Ricardo',
      },
    },
  },

  performance: {
    preloadImages: ['/profile-photo.webp', '/oq-image.png'],
    preloadFonts: [
      'https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400&display=swap',
    ],
    dnsPrefetch: [
      '//fonts.googleapis.com',
      '//api.fontshare.com',
      '//vercel.com',
    ],
    preconnect: ['https://fonts.googleapis.com', 'https://api.fontshare.com'],
  },
};
