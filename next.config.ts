import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
};

export default nextConfig;
