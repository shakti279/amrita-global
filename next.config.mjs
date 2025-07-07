/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.dhananjaycreation.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    legacyBrowsers: false, // ✅ move here
  },
  reactStrictMode: true,
  compress: true, // ✅ Gzip compression
};

export default nextConfig;
