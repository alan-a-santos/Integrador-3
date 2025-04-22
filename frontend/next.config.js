/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true, // <-
    images: {
      unoptimized: true, // Necessário para exportação estática
    },
  };
  
  module.exports = nextConfig;