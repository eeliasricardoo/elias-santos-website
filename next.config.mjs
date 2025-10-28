/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Otimizações de performance
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-avatar',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-tabs',
      'recharts',
    ],
    // ✅ Otimização: Turbopack para builds mais rápidos (opcional, descomente se quiser testar)
    // turbo: {},
  },

  // ✅ Server components externos
  serverExternalPackages: ['sharp'],

  // ✅ Otimização de imagens
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Otimizações específicas para LCP
    unoptimized: false,
    loader: 'default',
    domains: [],
    path: '/_next/image',
  },

  // ✅ Compressão
  compress: true,

  // ✅ Otimizações de build
  poweredByHeader: false,
  
  // ✅ Otimização: Desabilitar source maps em produção para menor bundle
  productionBrowserSourceMaps: false,

  // ✅ Otimizações avançadas de bundle
  webpack: (config, { dev, isServer }) => {
    // Otimizações para produção
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        maxAsyncRequests: 20,
        cacheGroups: {
          // Vendor principal
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            chunks: 'all',
          },
          // React/Next.js específico
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
            name: 'react-vendor',
            priority: 20,
            chunks: 'all',
          },
          // UI libraries
          ui: {
            test: /[\\/]node_modules[\\/](@radix-ui|lucide-react)[\\/]/,
            name: 'ui-vendor',
            priority: 15,
            chunks: 'all',
          },
          // Motion/animation libraries
          animation: {
            test: /[\\/]node_modules[\\/](framer-motion|motion)[\\/]/,
            name: 'animation-vendor',
            priority: 15,
            chunks: 'all',
          },
          // Common components
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
            chunks: 'all',
            enforce: true,
          },
        },
      };

      // Tree shaking optimization
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // ✅ Otimização: Minificar melhor
      config.optimization.minimize = true;
    }
    
    // ✅ Otimização: Otimizar imports em todas as builds
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
    };

    return config;
  },

  // ✅ Headers de segurança e cache
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/profile-photo.jpg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/five-icon.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // ✅ Redirects
  async redirects() {
    return [
      {
        source: '/portfolio/fila-atendimento',
        destination: '/portfolio/support-queue',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
