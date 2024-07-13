/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.timbu.cloud',
        port: '', 
        pathname: '/**', 
      },
    ],
    // domains: ['api.timbu.cloud'],
  }
};

export default nextConfig;
