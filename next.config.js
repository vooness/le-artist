/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optimalizace obrázků
    images: {
      domains: [], // Přidejte domény, ze kterých načítáte obrázky, např. ['example.com']
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
      imageSizes: [16, 32, 48, 64, 96, 128, 256],
      formats: ['image/webp'],
    },
    
    // Experimentální funkce pro zlepšení výkonu
    experimental: {
      // Optimalizace pro rychlejší development
      optimizeCss: true,    // CSS optimalizace
      scrollRestoration: true,  // Zachování pozice scrollu při navigaci
      legacyBrowsers: false,  // Vypnout podporu pro IE11 pro menší balíčky
    },
    
    // Minimalizace JS pro produkci
    swcMinify: true,
    
    // Nastavení velikosti stránky
    compiler: {
      // Odstranění console.log v produkci
      removeConsole: process.env.NODE_ENV === 'production',
    },
    
    // Optimalizace načítání fontů
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
    
    // Webpack konfigurace
    webpack: (config, { dev, isServer }) => {
      // Přidat další optimalizace v produkci
      if (!dev) {
        // Optimalizace velikosti bundlu
        config.optimization = {
          ...config.optimization,
          runtimeChunk: true,
          splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 20000,
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name(module) {
                  // Získat název npm balíčku
                  const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                  // npm balíček v node_modules např. returnu @fortawesome/fontawesome-svg-core
                  // jako fortawesome-svg-core
                  return `npm.${packageName.replace('@', '')}`;
                },
              },
            },
          },
        };
      }
      
      return config;
    },
  };
  
  module.exports = nextConfig;