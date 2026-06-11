/**
 * Single source of truth for the case-study brand palette.
 * Mirrors the `--color-brand-*` design tokens in global.css.
 *
 * `bg`     — light/signature tone: fills and accents on dark surfaces.
 * `accent` — saturated tone: text and borders on light fills.
 */
export type BrandColor = 'lime' | 'cyan' | 'violet' | 'orange' | 'pink';

export interface ProjectBrand {
  bg: string;
  accent: string;
  label: string;
}

export const PROJECT_BRANDS: Record<BrandColor, ProjectBrand> = {
  lime: { bg: '#d9f99d', accent: '#65a30d', label: 'FEATURED' },
  cyan: { bg: '#67e8f9', accent: '#0891b2', label: 'PERSONAL' },
  violet: { bg: '#c4b5fd', accent: '#7c3aed', label: 'TOOL' },
  orange: { bg: '#fb923c', accent: '#c2410c', label: 'PLATFORM' },
  pink: { bg: '#f9a8d4', accent: '#be185d', label: 'NEW FEATURE' },
};

/** Order used by the home Work section (featured first). */
export const BRAND_ORDER: BrandColor[] = ['lime', 'cyan', 'violet', 'orange', 'pink'];

/** Maps a case-study route slug to its brand color. */
export const PROJECT_BRAND_BY_SLUG: Record<string, BrandColor> = {
  'sfmc-magic-builder': 'lime',
  ventuschat: 'cyan',
  'carousel-builder': 'violet',
  ranking: 'orange',
  'support-queue': 'pink',
};
