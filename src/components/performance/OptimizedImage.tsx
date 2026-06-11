import type { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
    /**
     * Image source (will automatically use optimized versions)
     */
    src: string;

    /**
     * Alt text for the image (required for accessibility)
     */
    alt: string;

    /**
     * Whether to use lazy loading (default: true)
     */
    lazy?: boolean;

    /**
     * Priority loading for LCP images (default: false)
     */
    priority?: boolean;

    /**
     * Sizes attribute for responsive images
     */
    sizes?: string;
}

/**
 * Optimized Image Component
 * 
 * Automatically uses modern image formats (AVIF, WebP) with fallbacks
 * Implements lazy loading and responsive images for better performance
 * 
 * Performance benefits:
 * - AVIF: ~50% smaller than JPEG
 * - WebP: ~30% smaller than JPEG
 * - Lazy loading: Only loads images when they're visible
 * - Responsive: Serves appropriate size for device
 * 
 * @example
 * <OptimizedImage 
 *   src="/profile-photo.jpg" 
 *   alt="Profile photo"
 *   priority // For LCP images
 * />
 */
export function OptimizedImage({
    src,
    alt,
    lazy = true,
    priority = false,
    sizes,
    className,
    ...props
}: OptimizedImageProps) {
    // Bypass optimization for external, already optimized, or vector images
    const isExternal = src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//');
    const isAlreadyOptimized = /\.(webp|avif|svg|gif)$/i.test(src);

    if (isExternal || isAlreadyOptimized) {
        return (
            <img
                src={src}
                alt={alt}
                loading={priority ? 'eager' : lazy ? 'lazy' : 'eager'}
                decoding={priority ? 'sync' : 'async'}
                fetchPriority={priority ? 'high' : undefined}
                className={className}
                {...props}
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                    ...props.style
                }}
            />
        );
    }

    // Extract filename and extension
    const lastDot = src.lastIndexOf('.');
    const basePath = lastDot !== -1 ? src.substring(0, lastDot) : src;

    // Determine if image is in optimized directory
    const isOptimized = src.includes('/optimized/');
    const optimizedBasePath = isOptimized ? basePath : `/optimized${basePath}`;

    // Only generate responsive srcset if we don't know it's a small image (width < 640)
    const isSmall = typeof props.width === 'number' && props.width < 640;
    const responsiveSizes = [640, 750, 828, 1080, 1200, 1920];
    const webpSrcSet = !isSmall
        ? responsiveSizes
            .map(size => `${optimizedBasePath}-${size}w.webp ${size}w`)
            .join(', ')
        : undefined;

    // Default sizes if not provided
    const defaultSizes = '(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw';

    return (
        <picture>
            {/* AVIF - Best compression (newest browsers) */}
            <source
                type="image/avif"
                srcSet={`${optimizedBasePath}.avif`}
            />

            {/* WebP - Good compression (modern browsers) */}
            <source
                type="image/webp"
                srcSet={webpSrcSet || `${optimizedBasePath}.webp`}
                sizes={!isSmall ? (sizes || defaultSizes) : undefined}
            />

            {/* Fallback to original format */}
            <img
                src={src}
                alt={alt}
                loading={priority ? 'eager' : lazy ? 'lazy' : 'eager'}
                decoding={priority ? 'sync' : 'async'}
                fetchPriority={priority ? 'high' : undefined}
                className={className}
                {...props}
                // Prevent layout shift
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                    ...props.style
                }}
            />
        </picture>
    );
}

/**
 * Background Image Component with optimized loading
 * Uses modern formats for background images
 */
interface OptimizedBackgroundProps {
    src: string;
    children: React.ReactNode;
    className?: string;
}

export function OptimizedBackground({ src, children, className = '' }: OptimizedBackgroundProps) {
    const lastDot = src.lastIndexOf('.');
    const basePath = src.substring(0, lastDot);
    const isOptimized = src.includes('/optimized/');
    const optimizedBasePath = isOptimized ? basePath : `/optimized${basePath}`;

    return (
        <div
            className={className}
            style={{
                backgroundImage: `
          image-set(
            url('${optimizedBasePath}.avif') type('image/avif'),
            url('${optimizedBasePath}.webp') type('image/webp'),
            url('${src}') type('image/jpeg')
          )
        `,
            }}
        >
            {children}
        </div>
    );
}
