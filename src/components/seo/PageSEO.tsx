'use client';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function PageSEO(_props: PageSEOProps) {
  // No App Router, SEO é feito via metadata no layout
  // Este componente agora é apenas um placeholder para compatibilidade
  return null;
}
