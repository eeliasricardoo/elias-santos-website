export const SEO_CONFIG = {
  site: {
    name: 'Elias Ricardo',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://eliasricardo.com',
    description:
      'Senior UX Engineer — research, interface design, and production React code. Case studies with measured outcomes at Serasa Experian and EdTech.',
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
    title: 'Elias Ricardo — Senior UX Engineer',
    description:
      'Senior UX Engineer — research, interface design, and production React code. Email production cut 87.5% at Serasa Experian; support wait down 22%. Case studies inside.',
    keywords: [
      'Elias Ricardo',
      'UX Design',
      'UI Design',
      'Frontend Developer',
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
      title: 'Elias Ricardo — Senior UX Engineer',
      description:
        'Senior UX Engineer — research, interface design, and production React code. Email production cut 87.5% at Serasa Experian; support wait down 22%. Case studies inside.',
      keywords: [
        'Portfolio',
        'UX Design',
        'UI Design',
        'Frontend Developer',
        'React',
        'Next.js',
      ],
    },
    portfolio: {
      title: 'Portfolio - Elias Ricardo',
      description:
        'Discover Elias Ricardo projects in UX/UI Design and web development. Complete case studies and innovative solutions.',
      keywords: [
        'Portfolio',
        'Projects',
        'UX Design',
        'UI Design',
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
      url: 'https://eliasricardo.com',
      image: 'https://eliasricardo.com/profile-photo.webp',
      sameAs: [
        'https://linkedin.com/in/eeliasricardoo',
        'https://github.com/eliassantos',
        'https://twitter.com/eliassantos',
      ],
      jobTitle: 'Senior UX Engineer',
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
        'Senior UX Engineer — research, interface design, and production React code, with measured outcomes.',
    },

    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Elias Ricardo Portfolio',
      url: 'https://eliasricardo.com',
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
