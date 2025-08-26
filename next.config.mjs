// @ts-check
 
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  
  // Added configuration for next/image
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
};
 
export default nextConfig;