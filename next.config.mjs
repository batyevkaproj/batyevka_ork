// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/uk/:path*',   // match /uk and anything under it
        destination: '/',       // redirect to root
        permanent: true,        // use 308 redirect (SEO friendly)
      },
    ];
  },
};

export default nextConfig;
