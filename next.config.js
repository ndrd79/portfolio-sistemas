/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Habilita otimização de imagens automática
  images: {
    domains: ['your-domain.com'], // Adicione seus domínios de imagens aqui
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Otimização de compilação
  swcMinify: true,
  
  // Otimização de produção
  compress: true,
  
  // Configurações de cache
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  
  // Otimização de módulos
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  
  // Configurações de webpack
  webpack: (config, { dev, isServer }) => {
    // Otimizações apenas para produção
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }
    return config
  },
}

module.exports = nextConfig
