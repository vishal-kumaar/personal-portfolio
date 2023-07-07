/** @type {import('next').NextConfig} */
const nextConfig ={
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.hashnode.com',
          port: '',
          pathname: '**',
        },
      ],
    },
  }

module.exports = nextConfig
