/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add any external domains you're loading images from
    // If you're using Next.js 13.4 or later, you might need this
    remotePatterns: [],
    // You can also use unoptimized: true for simpler static exports
    // unoptimized: true,
  },
  // Suppress the punycode warning
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        // Polyfill for punycode
        punycode: false,
      };
    }
    return config;
  },
  // This ensures static assets are properly exported in static builds
  output: 'standalone',
  reactStrictMode: true,
};

module.exports = nextConfig;