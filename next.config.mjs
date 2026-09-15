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
        source: '/uk/:path*',
        destination: '/',
        permanent: true,
      },
      // Короткий лінк для SMS і повідомлень у кабінеті — завжди на чинну редакцію договору.
      // Не permanent: браузери не кешують його назавжди, тож ціль можна міняти.
      {
        source: '/dogovir',
        destination: '/publichnyi-dohovir',
        permanent: false,
      },
    ];
  },

  // Prevent browser from caching HTML pages and JS chunks in dev —
  // eliminates the "Cannot find module './XXXX.js'" 404 after server restart.
  async headers() {
    const isDev = process.env.NODE_ENV === 'development';
    if (!isDev) return [];
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store, must-revalidate' },
          { key: 'Pragma',        value: 'no-cache' },
        ],
      },
    ];
  },
};

export default nextConfig;
