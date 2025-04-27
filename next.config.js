/** @type {import('next').NextConfig} */
const nextConfig = {
    // Základní konfigurace pro optimalizaci scrollování
    experimental: {
      // Zachování pozice scrollu při navigaci
      scrollRestoration: true,
    },
  }
  
  module.exports = nextConfig