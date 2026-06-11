'use client';

interface ProjectStructuredDataProps {
  name: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
  category: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}

export function ProjectStructuredData({
  name,
  description,
  image,
  url,
  technologies,
  category,
  datePublished,
  dateModified,
  author,
}: ProjectStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description,
    image: image.startsWith('http') ? image : `https://eliasricardo.com${image}`,
    url: url.startsWith('http') ? url : `https://eliasricardo.com${url}`,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://eliasricardo.com',
    },
    creator: {
      '@type': 'Person',
      name: author,
      url: 'https://eliasricardo.com',
    },
    datePublished,
    ...(dateModified && { dateModified }),
    genre: category,
    keywords: technologies.join(', '),
    about: {
      '@type': 'Thing',
      name: category,
    },
    isPartOf: {
      '@type': 'CollectionPage',
      name: 'Portfolio de Projetos',
      url: 'https://eliasricardo.com/portfolio',
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
