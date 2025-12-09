import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Module10-main', // подкаталог на GitHub Pages
  assetPrefix: '/Module10-main/', // чтобы статика грузилась правильно
  
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    workerThreads: false,
    cpus: 1,
  },

  images: {
    unoptimized: true,
  },
  
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
    resolveAlias: {
      'next/image': ('@components/StaticImage.tsx'),
    },
  },
};


export default nextConfig;
