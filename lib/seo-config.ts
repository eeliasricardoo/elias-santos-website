export const SEO_CONFIG = {
  site: {
    name: 'Elias Santos',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://eliassantos.dev',
    description: 'Professional portfolio of Elias Santos, UX/UI Designer and Frontend Developer specializing in modern web development.',
    author: 'Elias Santos',
    language: 'en-US',
    locale: 'en_US',
  },
  
  social: {
    twitter: '@eliassantos',
    linkedin: 'eliassantos',
    github: 'eliassantos',
  },
  
  defaultMeta: {
    title: 'Elias Santos - UX/UI Designer & Frontend Developer',
    description: 'Professional portfolio of Elias Santos, UX/UI Designer and Frontend Developer specializing in modern web development. Innovative projects in React, Next.js, and interface design.',
    keywords: [
      'Elias Santos',
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
      'Brazil'
    ],
    image: '/api/og',
    type: 'website',
  },
  
  pages: {
    home: {
      title: 'Elias Santos - UX/UI Designer & Frontend Developer',
      description: 'Professional portfolio of Elias Santos, UX/UI Designer and Frontend Developer specializing in modern web development. Innovative projects in React, Next.js, and interface design.',
      keywords: ['Portfolio', 'UX Design', 'UI Design', 'Frontend Developer', 'React', 'Next.js'],
    },
    portfolio: {
      title: 'Portfolio - Elias Santos',
      description: 'Discover Elias Santos projects in UX/UI Design and web development. Complete case studies and innovative solutions.',
      keywords: ['Portfolio', 'Projects', 'UX Design', 'UI Design', 'Case Studies'],
    },
    carouselBuilder: {
      title: 'Post & Carousel Generator - Case Study',
      description: 'Complete case study of the Post & Carousel Generator, an AI tool that revolutionizes carousel creation for social media.',
      keywords: ['Post & Carousel Generator', 'AI', 'Content Creation', 'Carousels', 'LinkedIn'],
    },
    ranking: {
      title: 'Ranking App - Case Study',
      description: 'Case study of the ranking app developed by Elias Santos, focused on UX/UI Design and user experience.',
      keywords: ['Ranking App', 'UX Design', 'Mobile App', 'Case Study'],
    },
    ventuschat: {
      title: 'VentusChat - Case Study',
      description: 'Case study of VentusChat, an innovative chat platform developed by Elias Santos.',
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
      jobTitle: 'UX/UI Designer & Frontend Developer',
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
      description: 'UX/UI Designer and Frontend Developer specializing in modern web development with focus on exceptional digital experiences.',
    },
    
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Elias Santos Portfolio',
      url: 'https://eliassantos.dev',
      description: 'Professional portfolio of Elias Santos',
      author: {
        '@type': 'Person',
        name: 'Elias Santos',
      },
    },
  },
  
  performance: {
    preloadImages: [
      '/profile-photo.png',
      '/api/og',
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